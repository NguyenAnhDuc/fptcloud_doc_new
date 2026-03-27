---
id: "single-gpu-example"
title: "Chuẩn bị môi trường"
description: "Bài hướng dẫn này trình bày cách **triển khai và phục vụ (serve) mô hình ngôn ngữ lớn Gemma 3 (LLM)** bằng **GPU trên FP"
sidebar_label: "Chuẩn bị môi trường"
sidebar_position: 21
---

# Single Gpu Example

Bài hướng dẫn này trình bày cách **triển khai và phục vụ (serve) mô hình ngôn ngữ lớn Gemma 3 (LLM)** bằng **GPU trên FPT Kubernetes Engine (FKE GPU)** , sử dụng **framework vLLM** để phục vụ inference.  
Mục tiêu là cung cấp nền tảng giúp bạn **hiểu và thực hành việc triển khai LLM cho bài toán suy luận (inference)** trong một **môi trường Kubernetes được quản lý**. 
Trong hướng dẫn này, bạn sẽ: 
  * **Triển khai một container dựng sẵn** có chạy **vLLM** lên FKE.
  * **Cấu hình FKE** để **tải trọng số (weights)** của các phiên bản **Gemma 1B, 4B** từ **Hugging Face**.

## Chuẩn bị môi trường
###  Chuẩn bị cụm FKE GPU 
Hãy đảm bảo rằng bạn có đủ: 
  * Một cụm k8s với GPU. 
  * GPU operator được cài đặt. 
  * Driver, nvidia container toolkit. 
  * Có quota storage để tạo Persistent Volume 

Kiểm tra node GPU trên k8s đã sẵn sàng sử dụng bằng lệnh:

```
Copykubectl describe node 
```

Node sẽ sẵn sàng được sử dụng nếu tài nguyên “nvidia.com/gpu” có giá trị lớn hơn 1 ở mục capacity và allocatable 

```
CopyCapacity:
  ...
  nvidia.com/gpu:     8
  ...
Allocatable:
  ...
  nvidia.com/gpu:     8
  ...
```

Node sẽ sẵn sàng được sử dụng nếu tài nguyên “nvidia.com/gpu” có giá trị lớn hơn 1 ở mục capacity và allocatable 
### Chuẩn bị token Huggingface (optional)
Lên trang chủ Huggingface, tạo token và tạo Secret trên k8s chứa token này: 

```
Copykubectl create secret generic hf-secret \
  --from-literal=hf_api_token=${HF_TOKEN} \
  --dry-run=client -o yaml | kubectl apply -f -
```

## Deploy VLLM
Trong phần này, bạn triển khai container vLLM để phục vụ mô hình Gemma mà bạn muốn sử dụng. Để triển khai mô hình, bài hướng dẫn này sử dụng Kubernetes Deployment. Deployment là một đối tượng API của Kubernetes cho phép bạn chạy nhiều bản sao (replica) của Pod và các Pod này được phân bổ trên các node trong một cluster. 
### Deploy vllm bằng deployment

```
CopyapiVersion: apps/v1
kind: Deployment
metadata:
  name: vllm-gemma-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: gemma-server
  template:
    metadata:
      labels:
        app: gemma-server
    spec:
      containers:
      - name: inference-server
        image: docker.io/vllm/vllm-openai:v0.10.0
        resources:
          requests:
            cpu: "2"
            memory: "10Gi"
            ephemeral-storage: "10Gi"
            nvidia.com/gpu: "1"
          limits:
            cpu: "2"
            memory: "10Gi"
            ephemeral-storage: "10Gi"
            nvidia.com/gpu: "1"
        command: ["python3", "-m", "vllm.entrypoints.openai.api_server"]
        args:
        - --model=$(MODEL_ID)
        - --tensor-parallel-size=1
        - --host=0.0.0.0
        - --port=8000
        env:
        - name: LD_LIBRARY_PATH
          value: ${LD_LIBRARY_PATH}:/usr/local/nvidia/lib64
        - name: MODEL_ID
          value: google/gemma-3-1b-it
        - name: HUGGING_FACE_HUB_TOKEN
          valueFrom:
            secretKeyRef:
              name: hf-secret
              key: hf_api_token
        volumeMounts:
        - mountPath: /dev/shm
          name: dshm
      volumes:
      - name: dshm
        emptyDir:
          medium: Memory
```

Trong đó: 
  * nvidia.com/gpu: "1" : container của bạn sẽ sử dụng 1 GPU trên node. 
  * MODEL_ID: tên model trên Huggingface 
  * HUGGING_FACE_HUB_TOKEN: token Huggingface bạn đã tạo. 
  * Volume dshm: volume shared memory, quan trọng với các case distributed inferencing/training, nên có 

### Expose model
Để expose model, hãy tạo một service trên k8s, nếu type của service là LoadBalancer thay vì ClusterIP, model có thể được truy cập từ internet: 

```
CopyapiVersion: v1
kind: Service
metadata:
  name: llm-service
spec:
  selector:
    app: gemma-server
  type: ClusterIP
  ports:
    - protocol: TCP
      port: 8000
      targetPort: 8000
```

### Setup persistent storage (Optional)
Với cấu hình trên, model weight của model được lưu tại file system của container. Khi container restart, chúng ta cần tải lại bộ weight trên từ đầu. 
Để tránh tình trạng này, chúng ta có thể lưu sẵn model vào một volume, do đó khi container restart thì model vẫn còn và không cần phải tải lại. 
Tạo persistent volume claim: 

```
CopyapiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: data-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
```

Chỉnh sửa file deployment:

```
Copy
...
volumeMounts:
  - mountPath: ~/.cache/huggingface/
    name: model
...
volumes:
  - name: model
    persistentVolumeClaim:
      claimName: data-pvc
...

```

##  Serve model 
Tại phần này, chúng ta sẽ thực hiện việc kiểm tra kết nối & gửi các request để model xử lý 
###  Set up networking để truy cập model ngoài cụm 
Nếu tại mục Expose model, bạn sử dụng service type loadbalancer, hãy sử dụng IP public của loadbalancer đó. 
Nếu bạn sử dụng service type CusterIP, hãy port forward service này: 

```
Copykubectl port-forward service/llm-service 8000:8000
```

### Test model

```
Copycurl http://127.0.0.1:8000/v1/chat/completions \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "model": "google/gemma-3-1b-it",
    "messages": [
      {
        "role": "user",
        "content": "Hello, how are you?"
      }
    ]
  }'
```

### Output

```
Copy{
  "id": "chatcmpl-b8bb8754b6bb46dc9e7fd416c2fe0cd6",
  "object": "chat.completion",
  "model": "google/gemma-3-1b-it",
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "Hello there! I’m doing well, thank you "
      }
    }
  ]
}
```
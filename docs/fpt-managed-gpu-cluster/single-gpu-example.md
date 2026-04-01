---
id: "single-gpu-example"
title: "Chuẩn bị môi trường"
sidebar_label: "Chuẩn bị môi trường"
sidebar_position: "21"
---

# Chuẩn bị môi trường

Bài guide this trình bày theh **triển khai and phục vụ (serve) mô hình ngôn ngữ lớn Gemma 3 (LLM)** bằng **GPU trên FPT Kubernetes Engine (FKE GPU)** , sử dụng **framework vLLM** to phục vụ inference.  
Mục tiêu là cung cấp nền tảng giúp you **hiểu and thực hành việc triển khai LLM for bài toán suy luận (inference)** in a **môi trường Kubernetes is quản lý**. 
Trong guide this, you will: 
  * **Triển khai a container dựng sẵn** có chạy **vLLM** lên FKE.
  * **Configure FKE** to **tải trọng số (weights)** of the version **Gemma 1B, 4B** from **Hugging Face**.

## Chuẩn bị môi trường
###  Chuẩn bị cụm FKE GPU 
Hãy đảm bảo rằng you có đủ: 
  * Một cụm k8s with GPU. 
  * GPU operator is cài đặt. 
  * Driver, nvidia container toolkit. 
  * Có quota storage to create Persistent Volume 

Check node GPU trên k8s has been sẵn sàng sử dụng bằng lệnh:

```
Copykubectl describe node 
```

Node will sẵn sàng is sử dụng if tài nguyên “nvidia.com/gpu” có giá trị lớn hơn 1 ở mục capacity and allocatable 

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

Node will sẵn sàng is sử dụng if tài nguyên “nvidia.com/gpu” có giá trị lớn hơn 1 ở mục capacity and allocatable 
### Chuẩn bị token Huggingface (optional)
Lên home page Huggingface, tạo token and tạo Secret trên k8s chứa token this: 

```
Copykubectl create secret generic hf-secret \
  --from-literal=hf_api_token=${HF_TOKEN} \
  --dry-run=client -o yaml | kubectl apply -f -
```

## Deploy VLLM
Trong phần this, you triển khai container vLLM to phục vụ mô hình Gemma mà you muốn sử dụng. Để triển khai mô hình, bài guide this sử dụng Kubernetes Deployment. Deployment là a đối tượng API of Kubernetes for phép you chạy nhiều bản sao (replica) of Pod and the Pod this is phân bổ trên the node in a cluster. 
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

Trong that: 
  * nvidia.com/gpu: "1" : container of you will sử dụng 1 GPU trên node. 
  * MODEL_ID: tên model trên Huggingface 
  * HUGGING_FACE_HUB_TOKEN: token Huggingface you has been tạo. 
  * Volume dshm: volume shared memory, quan trọng with the case distributed inferencing/training, nên có 

### Expose model
Để expose model, hãy tạo a service trên k8s, if type of service là LoadBalancer thay vì ClusterIP, model can is truy cập from internet: 

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
Với cấu hình trên, model weight of model is lưu tại file system of container. Khi container restart, chúng ta need to tải lại bộ weight trên from đầu. 
Để tránh tình trạng this, chúng ta can lưu sẵn model ando a volume, do that when container restart thì model vẫn còn and không need to must tải lại. 
Create persistent volume claim: 

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
Tại phần this, chúng ta will thực hiện việc kiểm tra kết nối & gửi the request to model xử lý 
###  Set up networking to truy cập model ngoài cụm 
Nếu tại mục Expose model, you sử dụng service type loadbalancer, hãy sử dụng IP public of loadbalancer that. 
Nếu you sử dụng service type CusterIP, hãy port forward service this: 

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

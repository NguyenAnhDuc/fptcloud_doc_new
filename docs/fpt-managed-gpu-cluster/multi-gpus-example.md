---
id: "multi-gpus-example"
title: "Chuẩn bị môi trường"
sidebar_label: "Chuẩn bị môi trường"
sidebar_position: "22"
---

# Chuẩn bị môi trường

Bài guide this trình bày theh **triển khai and phục vụ (serve) mô hình ngôn ngữ lớn Gemma 3 (LLM)** bằng nhiều **GPU trên FPT Kubernetes Engine (FKE GPU)** , sử dụng **framework vLLM**. 
Trong guide this, you will:
  * **Configure FKE** to tải weights Gemma from Hugging Face
  * Triển khai mô hình LLM trên nhiều GPU

Bài guide this dành for the kỹ sư Machine Learning (ML), quản trị viên and người vận hành nền tảng, cũng như the chuyên gia về Data and AI, những người quan tâm đến việc sử dụng khả năng điều phối container of Kubernetes to phục vụ the mô hình ngôn ngữ lớn (LLM). 
## Chuẩn bị môi trường
### Chuẩn bị cụm FKE GPU
  * Một cụm Kubernetes có GPU
  * GPU Operator has been cài đặt
  * NVIDIA driver and container toolkit
  * Có quota storage

Check node GPU:

```
Copykubectl describe node 

```

Node sẵn sàng if có tài nguyên GPU:

```
CopyCapacity:
  ...
  nvidia.com/gpu: 8
  ...
Allocatable:
  ...
  nvidia.com/gpu: 8
  ...

```

### Chuẩn bị token Hugging Face (optional)
Lên home page Huggingface, tạo token and tạo Secret trên k8s chứa token this: 

```
Copykubectl create secret generic hf-secret \
  --from-literal=hf_api_token=${HF_TOKEN} \
  --dry-run=client -o yaml | kubectl apply -f -

```

## Deploy vLLM
Trong phần this, you triển khai container vLLM to phục vụ mô hình Gemma mà you muốn sử dụng. Để triển khai mô hình, bài guide this sử dụng Kubernetes Deployment. Deployment là a đối tượng API of Kubernetes for phép you chạy nhiều bản sao (replica) of Pod and the Pod this is phân bổ trên the node in a cluster. 
### Deploy vLLM bằng Deployment

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
            nvidia.com/gpu: "2"
          limits:
            cpu: "2"
            memory: "10Gi"
            ephemeral-storage: "10Gi"
            nvidia.com/gpu: "2"
        command: ["python3", "-m", "vllm.entrypoints.openai.api_server"]
        args:
          - --model=$(MODEL_ID)
          - --tensor-parallel-size=2
          - --host=0.0.0.0
          - --port=8000
        env:
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
  * nvidia.com/gpu: "2" : container of you will sử dụng 2 GPU trên node. 
  * --tensor-parallel-size=2: sử dụng tesor parallelism to chạy model trên 2 node 
  * MODEL_ID: tên model trên Huggingface 
  * HUGGING_FACE_HUB_TOKEN: token Huggingface you has been tạo. 
  * Volume dshm: volume shared memory, quan trọng with the case distributed inferencing/training. 

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

### Setup persistent storage (optional)
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

## Serve model
Tại phần this, chúng ta will thực hiện việc kiểm tra kết nối & gửi the request to model xử lý 
###  Set up networking to truy cập model ngoài cụm 
Nếu tại mục Expose model, you sử dụng service type loadbalancer, hãy sử dụng IP public of loadbalancer that. 
Nếu you sử dụng service type CusterIP, hãy port forward service this: 

```
Copykubectl port-forward service/llm-service 8000:8000

```

### Giao tiếp with model
Phần this trình bày theh you can thực hiện a **bài kiểm tra********cơ bản** to xác minh the **mô hình Gemma 3******. Đối with the mô hình khác, hãy thay gemma-3-1b-it bằng tên of mô hình corresponding. 
Ví dụ this minh họa theh kiểm tra **mô hình Gemma 3 1B** with **đầu ando chỉ gồm văn bản**. 
Trong a phiên terminal mới, sử dụng curl to chat with mô hình of you. 

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

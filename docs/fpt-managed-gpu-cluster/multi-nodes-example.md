---
id: "multi-nodes-example"
title: "vLLM và multi-host serving"
sidebar_label: "vLLM và multi-host serving"
sidebar_position: "23"
---

# vLLM and multi-host serving

Bài hướng dẫn this trình bày theh **triển khai and phục vụ (serve) mô hình ngôn ngữ lớn Gemma 3 (LLM)** bằng nhiều **nodes trên FPT Kubernetes Engine (FKE GPU)** , sử dụng **framework vLLM** to phục vụ inference.  
Mục tiêu là cung cấp nền tảng giúp you **hiểu and thực hành việc triển khai LLM for bài toán suy luận (inference)** in a **môi trường Kubernetes is quản lý**. 
Trong hướng dẫn this, you will: 
  * **Configure FKE** to **tải trọng số (weights)** of the version **Gemma 1B, 4B** from **Hugging Face**.
  * Triển khai mô hình LLM lên trên nhiều Nodes

Bài hướng dẫn this dành for the kỹ sư Machine Learning (ML), quản trị viên and người vận hành nền tảng, cũng như the chuyên gia về Data and AI, những người quan tâm to việc sử dụng khả năng điều phối container of Kubernetes to phục vụ the mô hình ngôn ngữ lớn (LLM). 
##  Background 
###  GPUs 
Bộ xử lý đồ họa (GPU) for phép you tăng tốc the khối lượng công việc cụ thể như học máy and xử lý dữ liệu. FKE cung cấp the node is trang bị GPU mạnh mẽ this, for phép you cấu hình cluster to đạt hiệu năng tối ưu for the tác vụ học máy and xử lý dữ liệu. FKE cung cấp nhiều tùy chọn loại máy to cấu hình node, includes the loại máy sử dụng GPU NVIDIA H100, A30 and A100. 
###  LeaderWorkerSet (LWS) 
LeaderWorkerSet (LWS) là a opensource trên Kubernetes nhằm giải quyết the mô hình triển khai AI/ML trên nhiều node. Việc triển khai AI workload trên nhiều node sử dụng nhiều Pod, mỗi Pod can chạy trên the node khác nhau, xử lý khối lượng công việc suy phân tán. LWS for phép xem and quản lý nhiều Pod như a nhóm, from that đơn giản hóa việc vận hành and quản lý phục vụ mô hình phân tán. 
###  vLLM and multi-host serving 
  
Khi triển khai the mô hình LLM có cường độ tính toán cao, chúng tôi khuyến nghị sử dụng vLLM and chạy trên nhiều GPU. 
vLLM là a framework mã nguồn mở phục vụ LLM is tối ưu hóa cao, giúp tăng thông lượng phục vụ trên GPU, with the feature as follows: 
  * Triển khai transformer is tối ưu with PagedAttention
  * Cơ chế batching liên tục (continuous batching) to cải thiện thông lượng phục vụ tổng thể
  * Phục vụ phân tán trên nhiều GPU

Đối with the mô hình LLM có yêu cầu tính toán đặc biệt cao and cannot chứa in a node GPU duy nhất, you can sử dụng nhiều node GPU to phục vụ mô hình. vLLM hỗ trợ chạy trên nhiều GPU with hai chiến lược: 
  * Tensor parallelism chia the phép nhân ma trận in tầng transformer trên nhiều GPU. Tuy nhiên, chiến lược this yêu cầu network tốc độ cao do cần giao tiếp thường xuyên giữa the GPU, vì vậy ít phù hợp hơn when chạy trên nhiều node.
  * Pipeline parallelism chia mô hình theo fromng tầng, hay theo chiều dọc. Chiến lược this không yêu cầu giao tiếp liên tục giữa the GPU, do that phù hợp hơn when chạy mô hình trên nhiều node.

Bạn can kết hợp cả hai chiến lược in phục vụ nhiều node. Ví dụ, when sử dụng hai node, mỗi node có tám GPU A30, you can áp dụng: 
  * Pipeline parallelism hai chiều to phân mảnh mô hình trên hai node
  * Tensor parallelism tám chiều to phân mảnh mô hình trên tám GPU in mỗi node

##  Chuẩn bị môi trường 
###  Chuẩn bị cụm FKE GPU 
Hãy đảm bảo rằng you có đủ: 
  * Một cụm k8s with ít nhất 2 node GPU. 
  * GPU operator is cài đặt. 
  * Driver, nvidia container toolkit. 
  * Có quota storage to tạo Persistent Volume 

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

###  Chuẩn bị token Huggingface (optional) 
Lên trang chủ Huggingface, tạo token and tạo Secret trên k8s chứa token this: 

```
Copykubectl create secret generic hf-secret --from-literal=hf_api_token=${HF_TOKEN} --dry-run=client -o yaml | kubectl apply -f -
```

###  Cài đặt LeaderWorkerSet 
Cài đặt LeaderWorkerSet bằng lệnh sau 

```
Copykubectl apply --server-side -f https://github.com/kubernetes-sigs/lws/releases/latest/download/manifests.yaml
```

Validate việc cài đặt LeaderWorkerSet 

```
Copykubectl get pod -n lws-system
```

##  Deploy vLLM server phục vụ serving trên nhiều nodes 
Trong phần this, you triển khai container vLLM to phục vụ mô hình Gemma mà you muốn sử dụng. Để triển khai mô hình, bài hướng dẫn this sử dụng Kubernetes Deployment. Deployment là a đối tượng API of Kubernetes for phép you chạy nhiều bản sao (replica) of Pod and the Pod this is phân bổ trên the node in a cluster. 
LeaderWorkerSet is sử dụng here, việc sử dụng LeaderWorkerSet with vLLM không làm thay đổi cấu hình vLLM so with việc chỉ sử dụng vLLM triển khai model. 
###  Deploy vllm bằng LeaderWorkerSet 

```
CopyapiVersion: leaderworkerset.x-k8s.io/v1
kind: LeaderWorkerSet
metadata:
  name: vllm
spec:
  replicas: 1
  leaderWorkerTemplate:
    size: 2
    restartPolicy: RecreateGroupOnPodRestart
    leaderTemplate:
      metadata:
        labels:
          role: leader
      spec:
        containers:
          - name: vllm-leader
            image: vllm/vllm-openai:v0.8.5
            env:
              - name: HUGGING_FACE_HUB_TOKEN
                valueFrom:
                  secretKeyRef:
                    name: hf-secret
                    key: hf_api_token
            command:
              - sh
              - -c
              - |
                bash /vllm-workspace/examples/online_serving/multi-node-serving.sh leader --ray_cluster_size=$(LWS_GROUP_SIZE);
                python3 -m vllm.entrypoints.openai.api_server \
                  --port 8080 \
                  --model google/gemma-3-1b-it \
                  --tensor-parallel-size 1 \
                  --pipeline-parallel-size 2 \
                  --trust-remote-code \
                  --max-model-len 4096
            resources:
              limits:
                nvidia.com/gpu: "1"
            ports:
              - containerPort: 8080
            readinessProbe:
              tcpSocket:
                port: 8080
              initialDelaySeconds: 15
              periodSeconds: 10
            volumeMounts:
              - mountPath: /dev/shm
                name: dshm
        volumes:
          - name: dshm
            emptyDir:
              medium: Memory
              sizeLimit: 5Gi
    workerTemplate:
      spec:
        containers:
          - name: vllm-worker
            image: vllm/vllm-openai:v0.8.5
            command:
              - sh
              - -c
              - |
                bash /vllm-workspace/examples/online_serving/multi-node-serving.sh worker --ray_address=$(LWS_LEADER_ADDRESS)
            resources:
              limits:
                nvidia.com/gpu: "1"
            env:
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
              sizeLimit: 5Gi

```

Trong that: 
  * nvidia.com/gpu: "1" : container of you will sử dụng 2 GPU trên node. 
  * --pipeline-parallel-size=2: sử dụng pipeline parallelism to chạy model trên 2 node 
  * MODEL_ID: tên model trên Huggingface 
  * HUGGING_FACE_HUB_TOKEN: token Huggingface you has been tạo. 
  * Volume dshm: volume shared memory, quan trọng with the case distributed inferencing/training. 

###  Expose model 
Để expose model, hãy tạo a service trên k8s, if type of service là LoadBalancer thay vì ClusterIP, model can is truy cập from internet: 

```
CopyapiVersion: v1
kind: Service
metadata:
  name: vllm-leader
spec:
  ports:
    - name: http
      port: 8080
      protocol: TCP
      targetPort: 8080
  selector:
    leaderworkerset.sigs.k8s.io/name: vllm
    role: leader
  type: ClusterIP
```

###  Setup persistent storage (Optional) 
Với cấu hình trên, model weight of model is lưu tại file system of container. Khi container restart, chúng ta cần tải lại bộ weight trên from đầu. 
Để tránh tình trạng this, chúng ta can lưu sẵn model ando a volume, do that when container restart thì model vẫn còn and không must tải lại. 
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

Chỉnh sửa file deployment trên: 

```
Copy   spec:
     containers:
       ...
       volumeMounts:
       ...
         - mountPath: ~/.cache/huggingface/
           name: model
     volumes:
       ...
       - name: model
         persistentVolumeClaim:
           claimName: data-pvc

```

##  Serve model 
Tại phần this, chúng ta will thực hiện việc kiểm tra kết nối & gửi the request to model xử lý 
###  Set up networking to truy cập model ngoài cụm 
Nếu tại mục Expose model, you sử dụng service type loadbalancer, hãy sử dụng IP public of loadbalancer that. 
Nếu you sử dụng service type CusterIP, hãy port forward service this: 

```
Copykubectl port-forward svc/vllm-leader 8080:8080
```

###  Giao tiếp with model 
Phần this trình bày theh you can thực hiện a **bài kiểm tra********cơ bản** to xác minh the **mô hình Gemma 3******. Đối with the mô hình khác, hãy thay gemma-3-1b-it bằng tên of mô hình corresponding. 
Ví dụ this minh họa theh kiểm tra **mô hình Gemma 3 1B** with **đầu ando chỉ gồm văn bản**. 
Trong a phiên terminal mới, sử dụng curl to chat with mô hình of you. 

```
Copycurl http://127.0.0.1:8080/v1/chat/completions \
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

---
id: "multi-nodes-example"
title: "vLLM và multi-host serving"
description: "Bài hướng dẫn này trình bày cách **triển khai và phục vụ (serve) mô hình ngôn ngữ lớn Gemma 3 (LLM)** bằng nhiều **nodes"
sidebar_label: "vLLM và multi-host serving"
sidebar_position: 23
---

# Multi Nodes Example

Bài hướng dẫn này trình bày cách **triển khai và phục vụ (serve) mô hình ngôn ngữ lớn Gemma 3 (LLM)** bằng nhiều **nodes trên FPT Kubernetes Engine (FKE GPU)** , sử dụng **framework vLLM** để phục vụ inference.  
Mục tiêu là cung cấp nền tảng giúp bạn **hiểu và thực hành việc triển khai LLM cho bài toán suy luận (inference)** trong một **môi trường Kubernetes được quản lý**. 
Trong hướng dẫn này, bạn sẽ: 
  * **Cấu hình FKE** để **tải trọng số (weights)** của các phiên bản **Gemma 1B, 4B** từ **Hugging Face**.
  * Triển khai mô hình LLM lên trên nhiều Nodes

Bài hướng dẫn này dành cho các kỹ sư Machine Learning (ML), quản trị viên và người vận hành nền tảng, cũng như các chuyên gia về Data và AI, những người quan tâm đến việc sử dụng khả năng điều phối container của Kubernetes để phục vụ các mô hình ngôn ngữ lớn (LLM). 
##  Background 
###  GPUs 
Bộ xử lý đồ họa (GPU) cho phép bạn tăng tốc các khối lượng công việc cụ thể như học máy và xử lý dữ liệu. FKE cung cấp các node được trang bị GPU mạnh mẽ này, cho phép bạn cấu hình cluster để đạt hiệu năng tối ưu cho các tác vụ học máy và xử lý dữ liệu. FKE cung cấp nhiều tùy chọn loại máy để cấu hình node, bao gồm các loại máy sử dụng GPU NVIDIA H100, A30 và A100. 
###  LeaderWorkerSet (LWS) 
LeaderWorkerSet (LWS) là một opensource trên Kubernetes nhằm giải quyết các mô hình triển khai AI/ML trên nhiều node. Việc triển khai AI workload trên nhiều node sử dụng nhiều Pod, mỗi Pod có thể chạy trên các node khác nhau, xử lý khối lượng công việc suy phân tán. LWS cho phép xem và quản lý nhiều Pod như một nhóm, từ đó đơn giản hóa việc vận hành và quản lý phục vụ mô hình phân tán. 
###  vLLM và multi-host serving 
  
Khi triển khai các mô hình LLM có cường độ tính toán cao, chúng tôi khuyến nghị sử dụng vLLM và chạy trên nhiều GPU. 
vLLM là một framework mã nguồn mở phục vụ LLM được tối ưu hóa cao, giúp tăng thông lượng phục vụ trên GPU, với các tính năng như sau: 
  * Triển khai transformer được tối ưu với PagedAttention
  * Cơ chế batching liên tục (continuous batching) để cải thiện thông lượng phục vụ tổng thể
  * Phục vụ phân tán trên nhiều GPU

Đối với các mô hình LLM có yêu cầu tính toán đặc biệt cao và không thể chứa trong một node GPU duy nhất, bạn có thể sử dụng nhiều node GPU để phục vụ mô hình. vLLM hỗ trợ chạy trên nhiều GPU với hai chiến lược: 
  * Tensor parallelism chia các phép nhân ma trận trong tầng transformer trên nhiều GPU. Tuy nhiên, chiến lược này yêu cầu mạng tốc độ cao do cần giao tiếp thường xuyên giữa các GPU, vì vậy ít phù hợp hơn khi chạy trên nhiều node.
  * Pipeline parallelism chia mô hình theo từng tầng, hay theo chiều dọc. Chiến lược này không yêu cầu giao tiếp liên tục giữa các GPU, do đó phù hợp hơn khi chạy mô hình trên nhiều node.

Bạn có thể kết hợp cả hai chiến lược trong phục vụ nhiều node. Ví dụ, khi sử dụng hai node, mỗi node có tám GPU A30, bạn có thể áp dụng: 
  * Pipeline parallelism hai chiều để phân mảnh mô hình trên hai node
  * Tensor parallelism tám chiều để phân mảnh mô hình trên tám GPU trong mỗi node

##  Chuẩn bị môi trường 
###  Chuẩn bị cụm FKE GPU 
Hãy đảm bảo rằng bạn có đủ: 
  * Một cụm k8s với ít nhất 2 node GPU. 
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

###  Chuẩn bị token Huggingface (optional) 
Lên trang chủ Huggingface, tạo token và tạo Secret trên k8s chứa token này: 

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
Trong phần này, bạn triển khai container vLLM để phục vụ mô hình Gemma mà bạn muốn sử dụng. Để triển khai mô hình, bài hướng dẫn này sử dụng Kubernetes Deployment. Deployment là một đối tượng API của Kubernetes cho phép bạn chạy nhiều bản sao (replica) của Pod và các Pod này được phân bổ trên các node trong một cluster. 
LeaderWorkerSet được sử dụng tại đây, việc sử dụng LeaderWorkerSet với vLLM không làm thay đổi cấu hình vLLM so với việc chỉ sử dụng vLLM triển khai model. 
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

Trong đó: 
  * nvidia.com/gpu: "1" : container của bạn sẽ sử dụng 2 GPU trên node. 
  * --pipeline-parallel-size=2: sử dụng pipeline parallelism để chạy model trên 2 node 
  * MODEL_ID: tên model trên Huggingface 
  * HUGGING_FACE_HUB_TOKEN: token Huggingface bạn đã tạo. 
  * Volume dshm: volume shared memory, quan trọng với các case distributed inferencing/training. 

###  Expose model 
Để expose model, hãy tạo một service trên k8s, nếu type của service là LoadBalancer thay vì ClusterIP, model có thể được truy cập từ internet: 

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
Tại phần này, chúng ta sẽ thực hiện việc kiểm tra kết nối & gửi các request để model xử lý 
###  Set up networking để truy cập model ngoài cụm 
Nếu tại mục Expose model, bạn sử dụng service type loadbalancer, hãy sử dụng IP public của loadbalancer đó. 
Nếu bạn sử dụng service type CusterIP, hãy port forward service này: 

```
Copykubectl port-forward svc/vllm-leader 8080:8080
```

###  Giao tiếp với model 
Phần này trình bày cách bạn có thể thực hiện một **bài kiểm tra********cơ bản** để xác minh các **mô hình Gemma 3******. Đối với các mô hình khác, hãy thay gemma-3-1b-it bằng tên của mô hình tương ứng. 
Ví dụ này minh họa cách kiểm tra **mô hình Gemma 3 1B** với **đầu vào chỉ gồm văn bản**. 
Trong một phiên terminal mới, sử dụng curl để chat với mô hình của bạn. 

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
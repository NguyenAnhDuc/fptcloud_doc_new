---
id: "finetune-llm-models"
title: "Chuẩn bị môi trường"
description: "Bài hướng dẫn này trình bày cách finetune một LLM model trên kubernetes sử dụng Unsloth và GPU"
sidebar_label: "Chuẩn bị môi trường"
sidebar_position: 24
pagination_next: null
---

# Chuẩn bị môi trường

Bài hướng dẫn này trình bày cách finetune một LLM model trên kubernetes sử dụng Unsloth và GPU 
Mục tiêu là cung cấp nền tảng giúp bạn **hiểu và thực hành việc triển khai finetune một mô hình LLM** trong một **môi trường Kubernetes được quản lý**. 
Trong hướng dẫn này, bạn sẽ: 
  * Triển khai container trên Kubernetes.
  * Sử dụng Unsloth để fine-tune một mô hình LLM.

Bài hướng dẫn này dành cho các kỹ sư Machine Learning (ML), quản trị viên và người vận hành nền tảng, cũng như các chuyên gia về Data và AI, những người quan tâm đến việc sử dụng khả năng điều phối container của Kubernetes để phục vụ các mô hình ngôn ngữ lớn (LLM). 
##  Chuẩn bị môi trường 
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

###  Chuẩn bị token Huggingface (optional) 
Lên trang chủ Huggingface, tạo token và tạo Secret trên k8s chứa token này: 

```
Copykubectl create secret generic hf-secret --from-literal=hf_api_token=${HF_TOKEN} --dry-run=client -o yaml | kubectl apply -f -
```

##  Deploy Unsloth 
Trong phần này, bạn triển khai container Unsloth để huấn luyện (training) mô hình mà bạn muốn sử dụng. Để triển khai quá trình huấn luyện, bài hướng dẫn này sử dụng Kubernetes Deployment. Deployment là một đối tượng API của Kubernetes cho phép bạn chạy một hoặc nhiều Pod phục vụ cho quá trình training, đồng thời Kubernetes sẽ đảm bảo Pod được khởi động lại khi xảy ra lỗi và được lập lịch trên các node GPU trong cluster. 
Mỗi Pod chạy container Unsloth, sử dụng tài nguyên GPU để thực hiện fine-tuning mô hình ngôn ngữ lớn. Việc sử dụng Deployment giúp bạn dễ dàng quản lý vòng đời của job training, cập nhật cấu hình (ví dụ: image, biến môi trường, số lượng GPU), và mở rộng quy mô khi cần huấn luyện song song trên nhiều GPU hoặc nhiều node. 
###  Deploy vllm bằng deployment 

```
CopyapiVersion: apps/v1
kind: Deployment
metadata:
  name: unsloth-gpu
spec:
  replicas: 1
  selector:
    matchLabels:
      app: unsloth
  template:
    metadata:
      labels:
        app: unsloth
    spec:
      containers:
        - name: unsloth
          image: unsloth/unsloth
          imagePullPolicy: IfNotPresent
          env:
            - name: JUPYTER_PASSWORD
              value: "mypassword"
          ports:
            - containerPort: 8888
              name: jupyter
            - containerPort: 22
              name: ssh
          resources:
            limits:
              nvidia.com/gpu: 1

```

Trong đó: 
  * nvidia.com/gpu: "1" : container của bạn sẽ sử dụng 1 GPU trên node. 
  * JUPYTER_PASSWORD: password truy cập jupyter notebook. 

###  Expose container Unsloth 
Để expose model, hãy tạo một service trên k8s, nếu type của service là LoadBalancer thay vì ClusterIP, model có thể được truy cập từ internet: 

```
CopyapiVersion: v1
kind: Service
metadata:
  name: unsloth-service
spec:
  type: ClusterIP
  selector:
    app: unsloth
  ports:
    - name: jupyter
      protocol: TCP
      port: 8888
      targetPort: 8888
    - name: ssh
      protocol: TCP
      port: 22
      targetPort: 22

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
CopyapiVersion: apps/v1
kind: Deployment
metadata:
  name: unsloth-gpu
spec:
  ...
  template:
    ...
    spec:
      containers:
        ...
        volumeMounts:
        ...
        - mountPath: /workspace/work
          name: workdir
      volumes:
      ...
        - name: workdir
          persistentVolumeClaim:
            claimName: data-pvc

```

##  Truy cập Unsloth service 
Tại phần này, chúng ta sẽ thực hiện việc kiểm tra kết nối & gửi các request để model xử lý 
###  Set up networking để truy cập unsloth ngoài cụm 
Nếu tại mục Expose model, bạn sử dụng service type loadbalancer, hãy sử dụng IP public của loadbalancer đó. 
Nếu bạn sử dụng service type CusterIP, hãy port forward service này: 

```
Copykubectl port-forward service/unsloth-service 8888:8888
```

Nếu bạn muốn dùng ssh thay vì jupyter notebook (tạo ssh key pair trong container unsloth nếu bạn chưa có): 

```
Copykubectl port-forward service/unsloth-service 2222:22
```

Truy cập jupyternotebook tại [http://localhost:8888,](http://localhost:8888/) vào mục unsloth-notebooks để kiểm tra các notebook có sẵn của Unsloth. 
###  Chạy các tác vụ training mẫu 
Tìm kiếm Granite4.0_350M.ipynb, chạy notebook này 
Output: 

```
Copy154.2162 seconds used for training.
2.57 minutes used for training.
Peak reserved memory = 4.004 GB.
Peak reserved memory for training = 3.281 GB.
Peak reserved memory % of max memory = 17.04 %.
Peak reserved memory for training % of max memory = 13.963 %.
```
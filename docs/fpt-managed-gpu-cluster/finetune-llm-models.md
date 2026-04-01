---
id: "finetune-llm-models"
title: "Chuẩn bị môi trường"
sidebar_label: "Chuẩn bị môi trường"
sidebar_position: "24"
---

# Chuẩn bị môi trường

Bài hướng dẫn this trình bày theh finetune a LLM model trên kubernetes sử dụng Unsloth and GPU 
Mục tiêu là cung cấp nền tảng giúp you **hiểu and thực hành việc triển khai finetune a mô hình LLM** in a **môi trường Kubernetes is quản lý**. 
Trong hướng dẫn this, you will: 
  * Triển khai container trên Kubernetes.
  * Sử dụng Unsloth to fine-tune a mô hình LLM.

Bài hướng dẫn this dành for the kỹ sư Machine Learning (ML), quản trị viên and người vận hành nền tảng, cũng như the chuyên gia về Data and AI, những người quan tâm to việc sử dụng khả năng điều phối container of Kubernetes to phục vụ the mô hình ngôn ngữ lớn (LLM). 
##  Chuẩn bị môi trường 
###  Chuẩn bị cụm FKE GPU 
Hãy đảm bảo rằng you có đủ: 
  * Một cụm k8s with GPU. 
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

##  Deploy Unsloth 
Trong phần this, you triển khai container Unsloth to huấn luyện (training) mô hình mà you muốn sử dụng. Để triển khai quá trình huấn luyện, bài hướng dẫn this sử dụng Kubernetes Deployment. Deployment là a đối tượng API of Kubernetes for phép you chạy a or nhiều Pod phục vụ for quá trình training, đồng thời Kubernetes will đảm bảo Pod is khởi động lại when xảy ra lỗi and is lập lịch trên the node GPU in cluster. 
Mỗi Pod chạy container Unsloth, sử dụng tài nguyên GPU to thực hiện fine-tuning mô hình ngôn ngữ lớn. Việc sử dụng Deployment giúp you dễ dàng quản lý vòng đời of job training, cập nhật cấu hình (ví dụ: image, biến môi trường, số lượng GPU), and mở rộng quy mô when cần huấn luyện song song trên nhiều GPU or nhiều node. 
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

Trong that: 
  * nvidia.com/gpu: "1" : container of you will sử dụng 1 GPU trên node. 
  * JUPYTER_PASSWORD: password truy cập jupyter notebook. 

###  Expose container Unsloth 
Để expose model, hãy tạo a service trên k8s, if type of service là LoadBalancer thay vì ClusterIP, model can is truy cập from internet: 

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
Tại phần this, chúng ta will thực hiện việc kiểm tra kết nối & gửi the request to model xử lý 
###  Set up networking to truy cập unsloth ngoài cụm 
Nếu tại mục Expose model, you sử dụng service type loadbalancer, hãy sử dụng IP public of loadbalancer that. 
Nếu you sử dụng service type CusterIP, hãy port forward service this: 

```
Copykubectl port-forward service/unsloth-service 8888:8888
```

Nếu you muốn dùng ssh thay vì jupyter notebook (tạo ssh key pair in container unsloth if you chưa có): 

```
Copykubectl port-forward service/unsloth-service 2222:22
```

Truy cập jupyternotebook tại [http://localhost:8888,](http://localhost:8888/) ando mục unsloth-notebooks to kiểm tra the notebook có sẵn of Unsloth. 
###  Chạy the tác vụ training mẫu 
Tìm kiếm Granite4.0_350M.ipynb, chạy notebook this 
Output: 

```
Copy154.2162 seconds used for training.
2.57 minutes used for training.
Peak reserved memory = 4.004 GB.
Peak reserved memory for training = 3.281 GB.
Peak reserved memory % of max memory = 17.04 %.
Peak reserved memory for training % of max memory = 13.963 %.
```

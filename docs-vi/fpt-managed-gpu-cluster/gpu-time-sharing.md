---
id: "gpu-time-sharing"
title: "Giới thiệu tính năng time sharing/time slicing trong FPT Kubernetes engine"
description: "**Giới thiệu tính năng time sharing/time slicing trong FPT Kubernetes engine**"
sidebar_label: "Giới thiệu tính năng time sharing/time slicing trong FPT Kubernetes engine"
sidebar_position: 18
---

# Giới thiệu tính năng time sharing/time slicing trong FPT Kubernetes engine

**Giới thiệu tính năng time sharing/time slicing trong FPT Kubernetes engine**
➤**FPT Managed GPU Cluster** dựa trên nền tảng mã nguồn mở K8s giúp tự động hoá triển khai, nhân rộng và quản lý các ứng dụng container. FPT Managed GPU Cluster tích hợp đầy đủ các thành phần: Container Orchestration, Storage, Networking, Security, PaaS cung cấp cho khách hàng môi trường tốt nhất để phát triển và triển khai ứng dụng trên Cloud.
➤**FPT Managed GPU Cluster** cung cấp tính năng time-slicing/time-sharing cho nhiều container/tiến trình trên một Nvidia GPU . Bằng việc sử dụng time-sharing, bạn có thể tối ưu hóa chi phí sử dụng GPU.
➤Trước khi đi vào chi tiết, hãy chắc chắn rằng bạn biết cơ chế hoạt động của time-sharing, bao gồm hạn chế và usecase nào sẽ phù hợp cho tính năng này.
**1.Yêu cầu tiên quyết**
Bạn cần kích hoạt dịch vụ managed GPU cluster, có đủ quota storage, public IP, ... đủ để khởi tạo một cụm FPT managed GPU cluster.
GPU operator được cài đặt trên cluster.
Worker group sử dụng Pre-installed driver hoặc đã được cài driver thủ công.
Worker group thuộc loại GPU worker group. 
Bạn có thể kích hoạt tính năng time-sharing trên mọi GPU mà chúng tôi cung cấp.
**2.Hướng dẫn cài đặt**
**Bước 1** : Cài đặt GPU operator tại phần cài đặt GPU software & chờ cho đến khi trạng thái GPU operator ở trạng thái ready. [![](/img/migrated/Picture1.3-7829b757.png)](/img/migrated/Picture1.3-7829b757.png)
**Bước 3** : verify phần cài đặt time slicing

```
CopyKubectl describe nodes 
```

**Output:**
[![](/img/migrated/Picture1.3-7829b757.png)](/img/migrated/Picture1.3-7829b757.png)
**Giải thích:**
-Có tổng cộng 8 GPU trên node, mỗi GPU được cấu hình timeslicng với tối đa 10 container có thể kết nối đến, do vậy giá trị ở phần Allocatable của mục nvidia.com/gpu là 8 * 10 = 80.
**Bước 4:** deploy workload mẫu trên kubernetes sử dụng tính năng timeslicing

```
CopyapiVersion: apps/v1
kind: Deployment
metadata:
  name: vllm-gpt2
spec:
  replicas: 1
  selector:
    matchLabels:
      app: vllm-gpt2
  template:
    metadata:
      labels:
        app: vllm-gpt2
    spec:
      containers:
      - name: vllm
        image: vllm/vllm:latest
        args:
          - --model=gpt2
          - --tensor-parallel-size=1
          - --port=8000
        ports:
          - containerPort: 8000
        resources:
          limits:
            nvidia.com/gpu: 1  # Require 1 GPU
      restartPolicy: Always
```

**Kiểm tra log của pod vllm-gpt2**

```
CopyKubectl logs 
```

**Kết quả:** [![](/img/migrated/Picture1.3-7829b757.png)](/img/migrated/Picture1.3-7829b757.png) [![](/img/migrated/Picture1.3-7829b757.png)](/img/migrated/Picture1.3-7829b757.png)
**3.Sử dụng Timeslicing với MIG**
Với tư cách là quản trị viên, bạn có thể muốn kết hợp nhiều tính năng sharing GPU của FKE. Tính năng GPU time-sharing có thể hoạt động cùng với MIG (multi-instance GPU), cho phép chia một GPU vật lý thành tối đa bảy phân vùng. Các phân vùng này được cách ly với nhau. Bạn có thể cấu hình tính năng GPU time sharing cho từng MIG instance.
Ví dụ, nếu bạn đặt giá trị MIG profile là 1g.10gb, GPU cơ bản sẽ được chia thành bảy phân vùng. Nếu bạn đồng thời đặt max-shared-clients là 3, thì mỗi phân vùng sẽ hỗ trợ tối đa ba container, tức là tổng cộng có thể có tối đa 21 thiết bị chia sẻ GPU có sẵn để phân bổ trên GPU vật lý đó. Để tìm hiểu cách gpu-partition-size chuyển đổi thành các phân vùng thực tế, hãy tìm hiểu về MIG.
Để kích hoạt tính năng GPU time sharing trên MIG instance, hãy chọn cả MIG và timeslicing trên màn hình chia sẻ worker group.
[![](/img/migrated/Picture1.3-7829b757.png)](/img/migrated/Picture1.3-7829b757.png)
**4.Hạn chế của Time slicing**
Với cơ chế chia sẻ thời gian GPU (GPU time-sharing), giới hạn bộ nhớ không được áp dụng trên GPU. Để tránh gặp sự cố tràn bộ nhớ (OOM), bạn nên thiết lập giới hạn bộ nhớ GPU trong các workload của mình. Để tránh các vấn đề về bảo mật, chỉ triển khai các workload nằm trong cùng một ranh giới tin cậy khi sử dụng chia sẻ thời gian GPU.
Số lượng container tối đa có thể sử dụng chia sẻ thời gian trên một GPU vật lý là 48. Khi cài đặt cấu hình chia sẻ thời gian GPU, bạn nên cân nhắc đến nhu cầu tài nguyên của các workload và khả năng của GPU vật lý bên dưới để tối ưu hóa hiệu năng và độ phản hồi của hệ thống.
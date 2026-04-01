---
id: "gpu-time-sharing"
title: "Giới thiệu tính năng time sharing/time slicing trong FPT Kubernetes engine"
sidebar_label: "Giới thiệu tính năng time sharing/time slicing trong FPT Kubernetes engine"
sidebar_position: "18"
---

# Introduction feature time sharing/time slicing in FPT Kubernetes engine

**Introduction feature time sharing/time slicing in FPT Kubernetes engine**
➤**FPT Managed GPU Cluster** dựa trên nền tảng mã nguồn mở K8s giúp tự động hoá triển khai, nhân rộng and quản lý the ứng dụng container. FPT Managed GPU Cluster tích hợp đầy đủ the thành phần: Container Orchestration, Storage, Networking, Security, PaaS cung cấp for khách hàng môi trường tốt nhất to phát triển and triển khai ứng dụng trên Cloud.
➤**FPT Managed GPU Cluster** cung cấp feature time-slicing/time-sharing for nhiều container/tiến trình trên a Nvidia GPU . Bằng việc sử dụng time-sharing, you can tối ưu hóa cost sử dụng GPU.
➤Trước when đi ando chi tiết, hãy chắc chắn rằng you biết cơ chế hoạt động of time-sharing, includes hạn chế and usecase nào will phù hợp for feature this.
**1.Requirements tiên quyết**
Bạn cần kích hoạt service managed GPU cluster, có đủ quota storage, public IP, ... đủ to khởi tạo a cụm FPT managed GPU cluster.
GPU operator is cài đặt trên cluster.
Worker group sử dụng Pre-installed driver or has been is cài driver thủ công.
Worker group thuộc loại GPU worker group. 
Bạn can kích hoạt feature time-sharing trên mọi GPU mà chúng tôi cung cấp.
**2.Hướng dẫn cài đặt**
**Step 1** : Cài đặt GPU operator tại phần cài đặt GPU software & chờ for to when status GPU operator ở status ready. [![](/img/migrated/Picture1.3-7829b757.png)](/img/migrated/Picture1.3-7829b757.png)
**Step 3** : verify phần cài đặt time slicing

```
CopyKubectl describe nodes 
```

**Output:**
[![](/img/migrated/Picture1.3-7829b757.png)](/img/migrated/Picture1.3-7829b757.png)
**Giải thích:**
-Có tổng cộng 8 GPU trên node, mỗi GPU is cấu hình timeslicng with tối đa 10 container can kết nối to, do vậy giá trị ở phần Allocatable of mục nvidia.com/gpu là 8 * 10 = 80.
**Step 4:** deploy workload mẫu trên kubernetes sử dụng feature timeslicing

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

**Check log of pod vllm-gpt2**

```
CopyKubectl logs 
```

**Result:** [![](/img/migrated/Picture1.3-7829b757.png)](/img/migrated/Picture1.3-7829b757.png) [![](/img/migrated/Picture1.3-7829b757.png)](/img/migrated/Picture1.3-7829b757.png)
**3.Sử dụng Timeslicing with MIG**
Với tư theh là quản trị viên, you can muốn kết hợp nhiều feature sharing GPU of FKE. Tính năng GPU time-sharing can hoạt động cùng with MIG (multi-instance GPU), for phép chia a GPU vật lý thành tối đa bảy phân vùng. Các phân vùng this is theh ly with nhau. Bạn can cấu hình feature GPU time sharing for fromng MIG instance.
Ví dụ, if you đặt giá trị MIG profile là 1g.10gb, GPU cơ bản will is chia thành bảy phân vùng. Nếu you đồng thời đặt max-shared-clients là 3, thì mỗi phân vùng will hỗ trợ tối đa ba container, tức là tổng cộng can có tối đa 21 thiết bị chia sẻ GPU có sẵn to phân bổ trên GPU vật lý that. Để tìm hiểu theh gpu-partition-size chuyển đổi thành the phân vùng thực tế, hãy tìm hiểu về MIG.
Để kích hoạt feature GPU time sharing trên MIG instance, hãy chọn cả MIG and timeslicing trên màn hình chia sẻ worker group.
[![](/img/migrated/Picture1.3-7829b757.png)](/img/migrated/Picture1.3-7829b757.png)
**4.Hạn chế of Time slicing**
Với cơ chế chia sẻ thời gian GPU (GPU time-sharing), giới hạn bộ nhớ không is áp dụng trên GPU. Để tránh gặp sự cố tràn bộ nhớ (OOM), you should thiết lập giới hạn bộ nhớ GPU in the workload of mình. Để tránh the vấn đề về security, chỉ triển khai the workload nằm in cùng a ranh giới tin cậy when sử dụng chia sẻ thời gian GPU.
Số lượng container tối đa can sử dụng chia sẻ thời gian trên a GPU vật lý là 48. Khi cài đặt cấu hình chia sẻ thời gian GPU, you should cân nhắc to nhu cầu tài nguyên of the workload and khả năng of GPU vật lý below to tối ưu hóa hiệu năng and độ phản hồi of hệ thống.

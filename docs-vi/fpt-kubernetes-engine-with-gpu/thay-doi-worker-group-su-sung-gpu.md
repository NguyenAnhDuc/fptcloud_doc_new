---
id: "thay-doi-worker-group-su-sung-gpu"
title: "Thay đổi Worker Group sử dụng GPU"
description: "**Yêu cầu:**"
sidebar_label: "Thay đổi Worker Group sử dụng GPU"
sidebar_position: 4
---

# Thay đổi Worker Group sử dụng GPU

**Yêu cầu:**
  * Quota CPU, GPU, RAM, Storage, Instance: đáp ứng đủ cho cấu hình Worker Group thay đổi. 
  * Số lượng GPU phải đáp ứng đủ số Min node + 1 để các Worker Node có thể rollout config cấu hình. Nếu sử dụng Autoscale, số lượng GPU phải đáp ứng đủ số Max node mong muốn. 
  * 01 Network subnet: Network sử dụng cho Kubernetes Nodes, subnet cần có Static IP Pool. 

Các bước thực hiện như sau: 
**Bước 1** : Truy cập portal FPT Cloud [console.fptcloud.com](https://console.fptcloud.com/), chọn mục Kubernetes, bấm vào cluster cần thay đổi, mục Node Pools, bấm vào biểu tượng "Edit Workers". 
[![](/img/migrated/Picture8-2-eb37b7ec.png)](/img/migrated/Picture8-2-eb37b7ec.png)
**Bước 2** : Ngoài các thông tin cấu hình cho Worker Group thông thường, cần chọn cấu hình cho GPU: 
Chọn lnstance type: GPU 
Chọn GPU type (A30, A100, H100, H200..) 
Chọn cấu hình GPU sharing (None/Single/Mixed) 
Chọn cấu hình type GPU (CPU/RAM/GPU RAM) 
[![](/img/migrated/Picture9-2-b3d633b8.png)](/img/migrated/Picture9-2-b3d633b8.png)
_⚠️ Chú ý:_
  * Thay đổi phương thức GPU sharing sẽ khiến toàn bộ các workload liên quan đến GPU cần được deploy lại nên trước khi thay đổi người dùng cần scale ứng dụng về 0 để tránh gặp lỗi.
  * Nếu trước đó chọn GPU sharing là None hoặc None with Operator thì không thể thay đổi GPU sharing sang Single hoặc Mixed.
  * Nếu trước đó chon GPU sharing là Single thì chỉ có thể thay đổi sang các mode Single tương ứng.

**Bước 3** : Kiểm tra lại các thông tin khởi tạo và Ấn Save. 
**Bước 4** : Theo dõi trạng thái khởi tạo thêm Worker Group vào cụm Kubernetes. Sau khi trạng thái Successed (Running) thì tiến hành sử dụng, triển khai ứng dụng.

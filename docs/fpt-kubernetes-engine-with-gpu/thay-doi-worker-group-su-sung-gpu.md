---
id: "thay-doi-worker-group-su-sung-gpu"
title: "Thay đổi Worker Group sử dụng GPU"
sidebar_label: "Thay đổi Worker Group sử dụng GPU"
sidebar_position: "4"
---

# Thay đổi Worker Group sử dụng GPU

**Requirements:**
  * Quota CPU, GPU, RAM, Storage, Instance: đáp ứng đủ for cấu hình Worker Group thay đổi. 
  * Số lượng GPU phải đáp ứng đủ số Min node + 1 to the Worker Node can rollout config cấu hình. Nếu sử dụng Autoscale, số lượng GPU phải đáp ứng đủ số Max node mong muốn. 
  * 01 Network subnet: Network sử dụng for Kubernetes Nodes, subnet cần có Static IP Pool. 

Các bước thực hiện as follows: 
**Step 1** : Truy cập portal FPT Cloud [console.fptcloud.com](https://console.fptcloud.com/), chọn mục Kubernetes, bấm ando cluster cần thay đổi, mục Node Pools, bấm ando biểu tượng "Edit Workers”. 
[![](/img/migrated/Picture8-2-eb37b7ec.png)](/img/migrated/Picture8-2-eb37b7ec.png)
**Step 2** : Ngoài the thông tin cấu hình for Worker Group thông thường, cần chọn cấu hình for GPU: 
Chọn lnstance type: GPU 
Chọn GPU type (A30, A100, H100, H200..) 
Chọn cấu hình GPU sharing (None/Single/Mixed) 
Chọn cấu hình type GPU (CPU/RAM/GPU RAM) 
[![](/img/migrated/Picture9-2-b3d633b8.png)](/img/migrated/Picture9-2-b3d633b8.png)
_⚠️ Chú ý:_
  * Thay đổi phương thức GPU sharing will whenến toàn bộ the workload liên quan to GPU cần is deploy lại should before thay đổi user cần scale ứng dụng về 0 to tránh gặp lỗi.
  * Nếu trước that chọn GPU sharing là None or None with Operator thì cannot thay đổi GPU sharing sang Single or Mixed.
  * Nếu trước that forn GPU sharing là Single thì chỉ can thay đổi sang the mode Single corresponding.

**Step 3** : Check lại the thông tin khởi tạo and Ấn Save. 
**Step 4** : Monitor status khởi tạo thêm Worker Group ando cụm Kubernetes. Sau when status Successed (Running) thì tiến hành sử dụng, triển khai ứng dụng.

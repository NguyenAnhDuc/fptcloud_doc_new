---
id: "tang-them-worker-group-su-dung-gpu"
title: "Tăng thêm Worker Group sử dụng GPU"
sidebar_label: "Tăng thêm Worker Group sử dụng GPU"
sidebar_position: "9"
---

# Tăng thêm Worker Group sử dụng GPU

**Yêu cầu:**
  * Quota CPU, GPU, RAM, Storage, Instance: đáp ứng đủ cho cấu hình Worker Group mới mong muốn. Nếu muốn sử dụng Autoscale, số lượng GPU phải đáp ứng đủ số Max node tăng thêm mong muốn.
  * 01 Network subnet: Network sử dụng cho Kubernetes Nodes, subnet cần có Static IP Pool.

Các bước thực hiện như sau: 
**ステップ1:** Truy cập portal FPT Cloud console.fptcloud.com, chọn mục Kubernetes, bấm vào cluster cần thay đổi, mục Node Pools, bấm vào “Edit Workers”. 
[![](/img/migrated/Picture4-3-aa3ce5ce.png)](/img/migrated/Picture4-3-aa3ce5ce.png)
**ステップ2:** Bấm vào Add worker group để tạo thêm Worker Group 
[![](/img/migrated/Picture5-2-3779376b.png)](/img/migrated/Picture5-2-3779376b.png)
Ngoài các thông tin khởi tạo cho Kubernetes thông thường, cần chọn cấu hình cho GPU trong Worker Group:
  * Chọn lnstance type: GPU
  * Chọn GPU type (A30, A100..)
  * Chọn cấu hình GPU sharing (None/Single/Mixed)
  * Chọn cấu hình type GPU (CPU/RAM/GPU RAM)

[![](/img/migrated/Picture6-2-4a875296.png)](/img/migrated/Picture6-2-4a875296.png)
**ステップ3:** Kiểm tra lại các thông tin khởi tạo và Ấn Save.
[![](/img/migrated/Picture7-1-ef376286.png)](/img/migrated/Picture7-1-ef376286.png)
**ステップ4:** Theo dõi trạng thái khởi tạo thêm Worker Group vào cụm Kubernetes. Sau khi trạng thái Successed (Running) thì tiến hành sử dụng, triển khai ứng dụng.

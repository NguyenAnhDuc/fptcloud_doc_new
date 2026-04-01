---
id: "tang-them-worker-group-su-dung-gpu"
title: "Tăng thêm Worker Group sử dụng GPU"
sidebar_label: "Tăng thêm Worker Group sử dụng GPU"
sidebar_position: "9"
---

# Tăng thêm Worker Group sử dụng GPU

**Requirements:**
  * Quota CPU, GPU, RAM, Storage, Instance: đáp ứng đủ for cấu hình Worker Group mới mong muốn. Nếu muốn sử dụng Autoscale, số lượng GPU must đáp ứng đủ số Max node tăng thêm mong muốn.
  * 01 Network subnet: Network sử dụng for Kubernetes Nodes, subnet need to có Static IP Pool.

Các bước thực hiện as follows: 
**Step 1** : Truy cập portal FPT Cloud console.fptcloud.com, chọn mục Kubernetes, bấm ando cluster need to thay đổi, mục Node Pools, bấm ando “Edit Workers”. 
[![](/img/migrated/Picture4-3-aa3ce5ce.png)](/img/migrated/Picture4-3-aa3ce5ce.png)
**Step 2** : Bấm ando Add worker group to tạo thêm Worker Group 
[![](/img/migrated/Picture5-2-3779376b.png)](/img/migrated/Picture5-2-3779376b.png)
Ngoài the information khởi tạo for Kubernetes thông thường, need to chọn cấu hình for GPU in Worker Group:
  * Chọn lnstance type: GPU
  * Chọn GPU type (A30, A100..)
  * Chọn cấu hình GPU sharing (None/Single/Mixed)
  * Chọn cấu hình type GPU (CPU/RAM/GPU RAM)

[![](/img/migrated/Picture6-2-4a875296.png)](/img/migrated/Picture6-2-4a875296.png)
**Step 3** : Check lại the information khởi tạo and Ấn Save.
[![](/img/migrated/Picture7-1-ef376286.png)](/img/migrated/Picture7-1-ef376286.png)
**Step 4** : Monitor status khởi tạo thêm Worker Group ando cụm Kubernetes. Sau when status Successed (Running) thì tiến hành sử dụng, triển khai ứng dụng.

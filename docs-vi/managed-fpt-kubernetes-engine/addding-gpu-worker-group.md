---
id: "addding-gpu-worker-group"
title: "Thêm GPU worker group"
description: "Hướng dẫn thêm GPU worker group vào cluster Kubernetes trên FPT Cloud."
sidebar_label: "Thêm GPU worker group"
sidebar_position: "22"
---

# Thêm GPU worker group

#### Điều kiện tiên quyết:
  * **Quota CPU, GPU, RAM, Storage và Instance:** Đủ cho thông số Worker Group bổ sung. Nếu có kế hoạch sử dụng auto-scale, cần có đủ GPU quota cho **số lượng node tối đa** mong muốn.
  * 01 **Network Subnet:** Network cho Kubernetes Node, với Static IP Pool.

#### Các bước cấu hình
**Bước 1:** Đăng nhập [FPT Cloud Portal](https://console.fptcloud.com). Từ menu sidebar, chọn **Kubernetes** > Chọn cluster cần cấu hình. Trong **Detail Cluster** > **Worker Group** > chọn **Config Icon**
[![](/img/migrated/55-1-7d362c94.png)](/img/migrated/55-1-7d362c94.png)
**Bước 2:** Chọn **Add Worker Group** để thêm Worker Group mới.
[![](/img/migrated/56-1-93a8803a.png)](/img/migrated/56-1-93a8803a.png)
**Bước 3:** Chọn **GPU specs** trong Worker Group.
[![](/img/migrated/57-1-dec56678.png)](/img/migrated/57-1-dec56678.png)
  * Chọn **Instance type:** GPU
  * Chọn **GPU type:** A30, A100, v.v.
  * Chọn **GPU Sharing configuration:** None, Single, Mixed, v.v.
  * Chọn **Specs type:** CPU – RAM – GPU

**Bước 4:** Chọn **Save** và xác nhận thông tin khởi tạo.
**Bước 5:** Chờ đến khi cluster khởi tạo thành công (trạng thái: **Running**) > Sẵn sàng sử dụng.

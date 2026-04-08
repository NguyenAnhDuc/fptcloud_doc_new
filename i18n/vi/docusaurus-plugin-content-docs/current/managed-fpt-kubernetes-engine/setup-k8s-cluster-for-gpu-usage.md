---
id: "setup-k8s-cluster-for-gpu-usage"
title: "Thiết lập Kubernetes cluster để sử dụng GPU"
description: "Hướng dẫn thiết lập Kubernetes cluster trên FPT Cloud để sử dụng GPU."
sidebar_label: "Thiết lập Kubernetes cluster để sử dụng GPU"
sidebar_position: "21"
draft: true
---

# Thiết lập Kubernetes cluster để sử dụng GPU

#### Điều kiện tiên quyết:
  * **Quota CPU, GPU, RAM, Storage và Instance:** Đủ cho Kubernetes Cluster mong muốn. Nếu có kế hoạch sử dụng auto-scale, cần có đủ GPU quota cho **số lượng node tối đa** mong muốn.
  * 01 **Network Subnet:** Network cho Kubernetes Node, với Static IP Pool.

#### Các bước thiết lập cluster:
**Bước 1:** Đăng nhập [FPT Cloud Portal](https://console.fptcloud.com). Từ menu sidebar, chọn **Kubernetes** > chọn **Create**
[![](/img/migrated/53-1-85e83144.png)](/img/migrated/53-1-85e83144.png)
**Bước 2:** Nhập thông số cho Kubernetes Cluster mong muốn. Ngoài các thông tin thông thường cho cluster, hãy chọn **GPU specs** trong Worker Group:
[![](/img/migrated/54-1-f0592bf9.png)](/img/migrated/54-1-f0592bf9.png)
  * Chọn **Instance type:** GPU
  * Chọn **GPU type:** A30, A100, v.v.
  * Chọn **GPU Sharing configuration:** None, Single, Mixed, v.v.
  * Chọn **Specs type:** CPU – RAM – GPU

**Bước 3:** Chọn **Create** và xác nhận thông tin khởi tạo.
**Bước 4:** Chờ đến khi cluster khởi tạo thành công (trạng thái: **Running**) > Sẵn sàng sử dụng.

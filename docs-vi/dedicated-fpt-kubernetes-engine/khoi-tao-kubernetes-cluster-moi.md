---
id: "create-new-k8s-cluster"
title: "Khởi tạo Kubernetes cluster mới"
description: "Hướng dẫn tạo mới một Kubernetes cluster trên dịch vụ Dedicated FPT Kubernetes Engine."
sidebar_label: "Khởi tạo Kubernetes cluster mới"
sidebar_position: 4
---

# Khởi tạo Kubernetes cluster mới

:::note
Một số điều kiện bắt buộc trước khi thực hiện:
- Quota CPU, RAM, Storage, Instance phải đủ cho cấu hình mong muốn của cluster.
- 01 Public IP available: sử dụng cho Kubernetes API và Ingress.
- 01 VM Network: network sử dụng cho Kubernetes Nodes, cần tạo subnet có Static IP Pool.
:::

1. Trên menu chọn **Kubernetes**, sau đó chọn **Create**.
[![](/img/migrated/Picture1-f7c686bf.png)](/img/migrated/Picture1-f7c686bf.png)
2. Nhập tên và chọn version cho cluster, sau đó nhấn **Next**.
[![](/img/migrated/Picture2-ea3a672d.png)](/img/migrated/Picture2-ea3a672d.png)
   - **Name:** Nhập tên cluster.
   - **Version:** Chọn version của cluster.
3. Cấu hình Node Pools theo nhu cầu, sau đó chọn **Next**.
[![](/img/migrated/Picture3-f4c4f789.png)](/img/migrated/Picture3-f4c4f789.png)

   **Storage Policy & Load Balancer:**
   - **Policy:** Chọn Storage Policy sử dụng cho disk của các VM trong cluster.
   - **LB Size:** Cấu hình Load Balancer (Standard / Advanced / Premium).

   **Master Node Configuration:**
   - **Type:** Chọn cấu hình CPU và Memory cho Master Node.
   - **Disk (GB):** Chọn dung lượng root disk cho Master Node.
   - **High Availability:** Disable (1 master node) hoặc Enable (3 master nodes).

   **Worker Node Configuration:**
   - **Type:** Chọn cấu hình CPU và Memory cho Worker Node.
   - **Disk (GB):** Chọn dung lượng root disk cho Worker Node.
   - **Quantity:** Số Worker Node cho cluster.
   - **Autoscale:** Bật/tắt tính năng autoscale; nếu bật, nhập Scale Min và Scale Max.

   **Nodes Credentials:**
   - **SSH Key:** Key sử dụng để đăng nhập vào VM Node (user root).

4. Cấu hình Advanced cho cluster, sau đó nhấn **Next**.
[![](/img/migrated/Screenshot_52-aef22d51.png)](/img/migrated/Screenshot_52-aef22d51.png)

   **NFS Storage:**
   - Tích chọn **Enable NFS Persistent Storage** để deploy NFS Persistent Storage cùng với cluster.
   - **Disk (GB):** Dung lượng của NFS Storage.

   **Firewall Configuration:**
   - Tích chọn **Enable Firewall** để cấu hình Edge IP, Public IP, Private IP cùng với cluster.

   **Advance Config:**
   - **Pod Network:** Network sử dụng cho Pod trong cluster.
   - **Service Network:** Network sử dụng cho Service trong cluster.
   - **Network Node Prefix:** Subnet prefix cho Pod trong Node.
   - **Max Pod per Node:** Số Pod tối đa trên mỗi Kubernetes Node.
   - **Nodes DNS:** DNS sử dụng cho Nodes và Kubernetes cluster.

5. Xem lại tóm tắt cấu hình.
[![](/img/migrated/Picture4-db8dfc98.png)](/img/migrated/Picture4-db8dfc98.png)
6. Chọn **Create a Kubernetes**. Hệ thống sẽ xác nhận, kiểm tra tài nguyên và tiến hành khởi tạo cluster.
[![](/img/migrated/Picture5-6a395f6a.png)](/img/migrated/Picture5-6a395f6a.png)

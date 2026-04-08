---
id: "khoi-tao-kubernetes-cluster-moi"
title: "Khởi tạo Kubernetes Cluster mới"
sidebar_label: "Khởi tạo Kubernetes Cluster mới"
sidebar_position: 2
---

Khởi tạo Kubernetes Cluster mới


**Lưu ý:** Một số điều kiện bắt buộc để thực hiện thao tác này:

  * Quota CPU, RAM, Storage, Instance phải đủ cho cấu hình mong muốn của Cluster.
  * 01 Public IP Available: Sử dụng cho Kubernetes API và Ingress.
  * 01 VM Network: Network được sử dụng cho Kubernetes Nodes. Cần tạo Subnet có **Static IP Pool** theo hướng dẫn tại đây.


**Bước 1:** Trên menu chọn **Kubernetes** > Chọn **Create.**

![](/img/migrated/docs-vi-dedicated-fpt-kubernetes-engine/khoi-tao-kubernetes-cluster-moi/img-001.png)

  **Bước 2:** Nhập tên và chọn version cho cluster sau đó bấm **Next**:

![](/img/migrated/docs-vi-dedicated-fpt-kubernetes-engine/khoi-tao-kubernetes-cluster-moi/img-002.png)

  * **Name:** Nhập tên Cluster.
  * **Version:** Chọn version của Cluster.


**Bước 3:** Cấu hình Node Pools theo nhu cầu sau đó chọn Next.

![](/img/migrated/docs-vi-dedicated-fpt-kubernetes-engine/khoi-tao-kubernetes-cluster-moi/img-003.png)

**Storage Policy & Load Balancer: **

  * **Policy:** Chọn Storage Policy sử dụng cho Disk của các VM trong Kubernetes Cluster.

  * **LB Size:** Cấu hình của Load Balancer.


  1. Standard: Max 2000 CCU, 4000 http req/s, bandwidth 100Mbps.

  2. Advanced: Max 4000 CCU, 8000 http req/s, bandwidth 100Mbps.

  3. Premium: Max 8000 CCU, 16000 http req/s, bandwidth 100Mbps.


**Master Node Configuration:**

  * **Type:** Chọn cấu hình (CPU & Memory) cho Master Node.

  * **Disk (GB):** Chọn dung lượng root disk cho Master Node.

  * **High Availability:**


  1. Disable: Quantity (1) tương ứng là số VM instance Master Node cho cụm k8s là 01.

  2. Enable: Quantity (3) tương ứng là số VM instance Master Node cho cụm K8s là 03.


**Worker Node Configuration:**

  * **Type:** Chọn cấu hình (CPU & Memory) cho các Worker Node.

  * **Disk (GB):** Chọn dung lượng root disk cho các Worker Node.

  * **Quantity:** Số Worker Node cho cụm K8s.

  * **Autoscale:** Bật/Tắt tính năng autoscale cho Cluster, nếu bật hãy nhập các thông số Scale Min (số lượng node còn lại khi scale down xuống) và Scale max (số lượng node tối đa có thể scale up lên).


**Nodes Credentials:**

  * **SSH Key:** Key sử dụng để đăng nhập vào VM Node (user root). Nếu chưa có bạn có thể tạo theo hướng dẫn tại đây.


**Bước 4:** Cấu hình Advanced cho cụm cluster sau đó bấm **Next**.

![](/img/migrated/docs-vi-dedicated-fpt-kubernetes-engine/khoi-tao-kubernetes-cluster-moi/img-004.png)

**NFS Storage:**

  * Check box **Enable NFS Presistent Storage**: Chọn để deploy **NFS Persistent Storage** cùng với **Kubernetes Cluster**.

  * **Disk (GB)**: Dung lượng của NFS Storage. Lưu ý sizing phù hợp, việc thay đổi dung lượng disk sẽ thực hiện manual bởi người sử dụng.

  * **Firewall Configuration**: Các cài đặt dành cho người dùng nâng cao, chọn icon để hiển thị. Nếu bạn không hiểu rõ các tham số này, hãy để mặc định.

  * Check box **Enable Firewall**: Chọn để cấu hình Edge IP, Public IP, Private IP cùng với Kubernetes Cluster.

  * **Advance Config**: Các cài đặt dành cho người dùng nâng cao, chọn icon để hiển thị. Nếu bạn không hiểu rõ các tham số này, hãy để mặc định.

  * **Pod Network**: Network sử dụng cho Pod trong cluster.

  * **Service Network**: Network sử dụng cho Service trong cluster.

  * **Network Node Prefix**: Subnet Prefix cho Pod trong Node

  * **Max Pod per Node**: Số Pod tối đa trên mỗi Kubernetes Node.

  * **Nodes DNS**: DNS được sử dụng cho Nodes và Kubernetes Cluster. User nhập DNS mong muốn để sử dụng hệ thống DNS nội bộ của user.


**Bước 5:** Chọn **Next**. Hệ thống sẽ hiển thị màn hình xác nhận lại toàn bộ thông tin đã nhập, kiểm tra tài nguyên và tiến hành quá trình khởi tạo Kubernetes Cluster dựa vào cấu hình đã chọn.

![](/img/migrated/docs-vi-dedicated-fpt-kubernetes-engine/khoi-tao-kubernetes-cluster-moi/img-005.png)

**Bước 6:** Chọn **Create a Kubernetes**. Hệ thống sẽ thông báo xác nhận, kiểm tra tài nguyên và tiến hành quá trình khởi tạo Kubernetes Cluster dựa vào cấu hình đã chọn.

![](/img/migrated/docs-vi-dedicated-fpt-kubernetes-engine/khoi-tao-kubernetes-cluster-moi/img-006.png)

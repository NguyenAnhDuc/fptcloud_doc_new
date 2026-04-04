---
id: "create-new-k8s-cluster"
title: "Tạo mới Kubernetes cluster"
description: "Hướng dẫn tạo mới Kubernetes cluster trên Managed FPT Kubernetes Engine."
sidebar_label: "Tạo mới Kubernetes cluster"
sidebar_position: "4"
---

# Tạo mới Kubernetes cluster

Lưu ý: Một số điều kiện bắt buộc trước khi thực hiện:
  * Quota **CPU, RAM, Storage** và **Instance** phải đủ cho cấu hình Cluster mong muốn.
  * 01 **Public IP** khả dụng: Dùng cho Kubernetes API.
  * 01 **LB** Standard: Dùng cho quản lý M-FKE.
  * 01 **VM Network**: Network dùng cho Kubernetes Node. Tạo Subnet với Static IP Pool theo hướng dẫn [tại đây](./initial-setup.md).

**Bước 1:** Ở menu FPT Portal, chọn **Kubernetes** > **Create**.
[![](/img/migrated/4-b2cca4ea.png)](/img/migrated/4-b2cca4ea.png)

**Bước 2:** Cấu hình Cluster theo nhu cầu.
[![](/img/migrated/5-902fbed7.png)](/img/migrated/5-902fbed7.png)

### A. Thông tin chung:
  * **Name:** Nhập tên Cluster.
  * **Version:** Chọn phiên bản Kubernetes.
  * **Network:** Subnet dùng để triển khai VM cho Kubernetes Cluster.

### B. Cấu hình Worker Group:
M-FKE quản lý worker node thông qua **Worker Group** — một nhóm gồm các worker node có cấu hình tương tự nhau. Người dùng có thể chia worker group phù hợp với từng ứng dụng. Hệ thống yêu cầu tối thiểu 01 Worker Group (Base), người dùng không thể xóa worker group base này.

#### _B.1 Worker Group 1:_
  * **Type:** Chọn cấu hình (CPU & Memory) cho Worker Node.
  * **Container Runtime:** Containerd.
  * **Storage Policy:** Chọn loại Storage Policy (tương ứng với IOPS) cho Worker Node Disk.
  * **Disk (GB):** Chọn dung lượng root disk cho Worker Node (tối thiểu 40GB).
  * **Min Node:** Số VM instance Worker Node tối thiểu trong cụm K8s. Khuyến nghị tối thiểu 03 Node cho môi trường production.
  * **Max Node:** Số VM instance tối đa cho một worker group trong cụm K8s.

#### _B.2 Worker Group n:_
Bạn có thể thêm các worker group bổ sung khi khởi tạo cụm K8s.

### C. Cấu hình nâng cao:
Cài đặt dành cho người dùng nâng cao. Nếu không hiểu các tham số này, hãy để mặc định.
  * **Pod Network:** Network dùng cho Pod trong cluster.
  * **Service Network:** Network dùng cho Service trong cluster.
  * **Network Node Prefix:** Subnet Prefix cho Pod trong Node.
  * **Max Pod per Node:** Số Pod tối đa trên mỗi Kubernetes Node.

**Bước 3:** Chọn **Create**.
Hệ thống sẽ kiểm tra cấu hình, kiểm tra quota tài nguyên và bắt đầu quá trình tạo Kubernetes Cluster theo cấu hình đã chọn.
[![](/img/migrated/6-27472c21.png)](/img/migrated/6-27472c21.png)

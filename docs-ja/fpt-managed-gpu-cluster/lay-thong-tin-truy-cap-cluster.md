---
id: "lay-thong-tin-truy-cap-cluster"
title: "Lấy thông tin truy cập Cluster"
sidebar_label: "Lấy thông tin truy cập Cluster"
sidebar_position: "6"
---

# Lấy thông tin truy cập Cluster

File Kube-config được sử dụng để lưu trữ thông tin kết nối đến cụm Kubernetes, giúp các công cụ như kubectl, kubelet, kubeadm xác định cách giao tiếp với Kubernetes API Server. File kubeconfig rất quan trọng trong việc quản lý quyền truy cập vào Kubernetes, do đó cần được bảo mật cẩn thận.
Để download file Kube-config, khách hàng làm theo hướng dẫn sau:
**Bước 1** : Ở menu chọn **AI Infrastructure** > **Managed GPU Cluster** , hệ thống sẽ hiển thị trang **GPU Cluster Management**. Chọn Cluster muốn lấy thông tin truy cập Cluster.
[![](/img/migrated/12-7952cac6.png)](/img/migrated/12-7952cac6.png)
**Bước 2** : Ở mục **Essential Properties** > Cluster Information > Configuration, có thể download file kubeconfig để đăng nhập Cluster thông qua kubectl hoặc các công cụ khác.
[![](/img/migrated/13-b5e2d2ac.png)](/img/migrated/13-b5e2d2ac.png)
**Lưu ý:**
Managed GPU Cluster sử dụng core là Native Kubernetes Cluster, người dùng sử dụng Cluster với các công cụ kubectl và dashboard như với một Kubernetes Cluster thông thường.

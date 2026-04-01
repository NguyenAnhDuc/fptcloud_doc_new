---
id: "lay-thong-tin-truy-cap-cluster"
title: "Lấy thông tin truy cập Cluster"
sidebar_label: "Lấy thông tin truy cập Cluster"
sidebar_position: "6"
---

# Lấy information truy cập Cluster

File Kube-config is sử dụng to save trữ information kết nối đến cụm Kubernetes, giúp the công cụ như kubectl, kubelet, kubeadm xác định theh giao tiếp with Kubernetes API Server. File kubeconfig rất quan trọng in việc quản lý permission truy cập ando Kubernetes, do that need to is security cẩn thận.
Để download file Kube-config, customer làm theo guide sau:
**Step 1:** Ở menu chọn **AI Infrastructure** > **Managed GPU Cluster** , system will displayed trang **GPU Cluster Management**. Chọn Cluster muốn lấy information truy cập Cluster.
[![](/img/migrated/12-7952cac6.png)](/img/migrated/12-7952cac6.png)
**Step 2:** Ở mục **Essential Properties** > Cluster Information > Configuration, can download file kubeconfig to đăng nhập Cluster thông qua kubectl or the công cụ khác.
[![](/img/migrated/13-b5e2d2ac.png)](/img/migrated/13-b5e2d2ac.png)
**Note:**
Managed GPU Cluster sử dụng core là Native Kubernetes Cluster, user sử dụng Cluster with the công cụ kubectl and dashboard như with a Kubernetes Cluster thông thường.

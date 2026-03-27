---
id: "add-cluster-toi-argocd"
title: "Add cluster tới ArgoCD instance đã được khởi tạo"
description: "Để có thể deploy một ứng dụng qua ArgoCD cluster đã được khởi tạo, cần Add một cluster K8s nơi mà ứng dụng được deploy. "
sidebar_label: "Add cluster tới ArgoCD instance đã được khởi tạo"
sidebar_position: 6
---

# Add Cluster Toi Argocd

Để có thể deploy một ứng dụng qua ArgoCD cluster đã được khởi tạo, cần Add một cluster K8s nơi mà ứng dụng được deploy. FPT Cloud hỗ trợ người dùng thêm mới một cluster qua giao diện thay vì thêm mới qua ArgoCD CLI
**Bước 1** : Tại menu **Cluster Managements** > Chọn **Connect a Cluster**
[![](/img/migrated/Picture62-af17013a.png)](/img/migrated/Picture62-af17013a.png)
**Bước 2** : Nhập các thông tin để connect tới cụm k8s cluster. Các thông tin này sẽ được người dùng lấy từ thông tin trong file kubeconfig. 
**_Lưu ý: Thông tin dùng để connect k8s cluster bắt buộc phải có quyền admin._**
**Cluster Name (required)** : Đặt tên cho cluster name ( có thể đặt tên theo môi trường sử dụng ví dụ: dev env , prod env ,staging env , qa env,…) 
**Server (required)** : Thông tin được lấy từ file kubeconfig, url api server k8s. 
**_Ví dụ:<https://api.xxxxx.fke.fptcloud.com:6443>_**
**CA Data (required)** : Thông tin của trường **certificate-authority-data** trong file kubeconfig 
**Bearer Token (required)** : Thông tin trường **token** trong file kubeconfig
[![](/img/migrated/Picture63-5914837a.png)](/img/migrated/Picture63-5914837a.png)
**Bước 3** : Nhấn nút **Connector** để hoàn thành. 
**Bước 4** : Kiểm tra thông tin k8s cluster đã được connect 
  * Thông tin cụm K8s được quản lý qua giao diện Portal: 

[![](/img/migrated/Picture64-4e9e2808.png)](/img/migrated/Picture64-4e9e2808.png)
  * Kiểm tra thông tin cụm k8s trên giao diện **ArgoCD instance** : Vào **ArgoCD** > **Settings** > **Clusters** : 

[![](/img/migrated/Picture65-44537eba.png)](/img/migrated/Picture65-44537eba.png)
  * Kiểm tra thông tin cụm k8s trên giao diện **ArgoCD instance** : Vào **ArgoCD** > **Settings** > **Clusters** : 

[![](/img/migrated/Picture66-40c67a44.png)](/img/migrated/Picture66-40c67a44.png)
  * Thông tin cụm cluster đã được cấu hình xuống ArgoCD instance: 

[![](/img/migrated/Picture67-00694a7c.png)](/img/migrated/Picture67-00694a7c.png)
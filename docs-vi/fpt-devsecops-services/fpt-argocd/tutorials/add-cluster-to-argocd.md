---
id: "add-cluster-to-argocd"
title: "Kết nối cluster Kubernetes tới ArgoCD"
description: "Hướng dẫn thêm cluster Kubernetes vào ArgoCD instance để deploy ứng dụng"
sidebar_label: "Kết nối cluster Kubernetes"
sidebar_position: 3
---

# Kết nối cluster Kubernetes tới ArgoCD

Để deploy ứng dụng qua ArgoCD, cần kết nối cluster Kubernetes nơi ứng dụng sẽ chạy. FPT Cloud hỗ trợ thêm cluster qua giao diện Portal thay vì dùng ArgoCD CLI.

1. Tại menu **Cluster Managements**, chọn **Connect a Cluster**.

[![](/img/migrated/Picture62-af17013a.png)](/img/migrated/Picture62-af17013a.png)

2. Nhập các thông tin kết nối tới cluster Kubernetes. Thông tin này lấy từ file kubeconfig.

:::note
Thông tin dùng để kết nối cluster Kubernetes bắt buộc phải có quyền admin.
:::

   - **Cluster Name** (bắt buộc): Tên cluster, ví dụ: `dev-env`, `prod-env`, `staging-env`
   - **Server** (bắt buộc): URL API server, lấy từ file kubeconfig. Ví dụ: `https://api.xxxxx.fke.fptcloud.com:6443`
   - **CA Data** (bắt buộc): Giá trị trường `certificate-authority-data` trong file kubeconfig
   - **Bearer Token** (bắt buộc): Giá trị trường `token` trong file kubeconfig

[![](/img/migrated/Picture63-5914837a.png)](/img/migrated/Picture63-5914837a.png)

3. Nhấn **Connector** để hoàn thành kết nối.

4. Kiểm tra thông tin cluster đã được kết nối:
   - Thông tin trên Portal:

[![](/img/migrated/Picture64-4e9e2808.png)](/img/migrated/Picture64-4e9e2808.png)

   - Kiểm tra trên ArgoCD instance: vào **Settings** > **Clusters**:

[![](/img/migrated/Picture65-44537eba.png)](/img/migrated/Picture65-44537eba.png)

[![](/img/migrated/Picture66-40c67a44.png)](/img/migrated/Picture66-40c67a44.png)

   - Thông tin cluster đã được cấu hình xuống ArgoCD instance:

[![](/img/migrated/Picture67-00694a7c.png)](/img/migrated/Picture67-00694a7c.png)

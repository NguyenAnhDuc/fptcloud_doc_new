---
id: "huong-dan-cau-hinh-argocd-cluster-de-deploy-ung-dung-voi-manifes"
title: "Hướng dẫn cấu hình ArgoCD cluster để deploy ứng dụng với manifes"
description: "**Bước 1:** Thực hiện add cluster (bước này đã được hướng dẫn trong document)"
sidebar_label: "Hướng dẫn cấu hình ArgoCD cluster để deploy ứng dụng với manifes"
sidebar_position: 44
---

# Huong Dan Cau Hinh Argocd Cluster De Deploy Ung Dung Voi Manifes

**Bước 1:** Thực hiện add cluster (bước này đã được hướng dẫn trong document)
**Bước 2:** Chuẩn bị Repository chứa manifest để deploy ứng dụng
**Ví dụ:** Sử dụng một manifest để deploy một ứng dụng với file deployment và service như sau: [![](/img/migrated/Picture75-2-31e0e130.png)](/img/migrated/Picture75-2-31e0e130.png) [![](/img/migrated/Picture76-2-2d55c192.png)](/img/migrated/Picture76-2-2d55c192.png) **Bước 3:** Thực hiện cấu hình Repository
  * Vào **Settings** > **Repository:** [![](/img/migrated/Picture77-2-25744da2.png)](/img/migrated/Picture77-2-25744da2.png)
  * Thực hiện thêm mới một Repository: [![](/img/migrated/Picture78-2-548ab240.png)](/img/migrated/Picture78-2-548ab240.png)
  * Kiểm tra trạng thái repository được add tới argocd: [![](/img/migrated/Picture79-2-5cfd1e45.png)](/img/migrated/Picture79-2-5cfd1e45.png)

**Bước 4:** Tạo một Applications để deploy ứng dụng
  * Vào menu **Application** > **NEW APP:** [![](/img/migrated/Picture80-2-9e02e9e0.png)](/img/migrated/Picture80-2-9e02e9e0.png)
  * Nhập thông tin để tạo Applications: [![](/img/migrated/Picture81-2-9a2e22b5.png)](/img/migrated/Picture81-2-9a2e22b5.png) [![](/img/migrated/Picture82-2-426ba565.png)](/img/migrated/Picture82-2-426ba565.png)
  * Click **Create** để tạo **Applications**

Kết quả sau khi tạo Applications: [![](/img/migrated/Picture83-2-d51b08f7.png)](/img/migrated/Picture83-2-d51b08f7.png)

---
id: "configure-webhook-with-secret"
title: "Thực hiện cấu hình Webhook với webhook secret đã được tạo"
description: "**Bước 1:** Cấu hình webhook trên Gitlab"
sidebar_label: "Thực hiện cấu hình Webhook với webhook secret đã được tạo"
sidebar_position: 45
draft: true
---

# Thực hiện cấu hình Webhook với webhook secret đã được tạo

**Bước 1:** Cấu hình webhook trên Gitlab
Vào **Gitlab Repository** > **Settings** > **Webhooks:** [![](/img/migrated/Picture84-2-d82f0925.png)](/img/migrated/Picture84-2-d82f0925.png)  
[![](/img/migrated/Picture85-2-25e959bf.png)](/img/migrated/Picture85-2-25e959bf.png) [![](/img/migrated/Picture86-2-efa61799.png)](/img/migrated/Picture86-2-efa61799.png)
Click **Add Webhook** để hoàn thành: [![](/img/migrated/Picture87-2-772d1a21.png)](/img/migrated/Picture87-2-772d1a21.png) **Bước 2:** Kiểm tra webhook đã được cấu hình thành công hay chưa? [![](/img/migrated/Picture88-2-c17f3adb.png)](/img/migrated/Picture88-2-c17f3adb.png) [![](/img/migrated/Picture89-2-a77feb4b.png)](/img/migrated/Picture89-2-a77feb4b.png)
**Bước 3:** Thực hiện kiểm tra với push event trên repository
  * Edit replicas deployment tới 1 [![](/img/migrated/Picture90-2-a4c44ba0.png)](/img/migrated/Picture90-2-a4c44ba0.png) Trạng thái của applications trước và sau khi push thay đổi:

Trước: [![](/img/migrated/Picture91-2-3461572c.png)](/img/migrated/Picture91-2-3461572c.png) Sau: [![](/img/migrated/Picture92-2-74bc5cd8.png)](/img/migrated/Picture92-2-74bc5cd8.png)
ArgoCD sẽ phát hiện được thay đổi và sync thay đổi tự động từ Repository để deploy applications.

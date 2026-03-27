---
id: "quan-ly-registry-secret"
title: "Quản lý registry secret"
description: "Trong trường hợp người dùng sử dụng container registry nội bộ, Argo CD Image Updater cần xác thực đến registry, FPT Argo"
sidebar_label: "Quản lý registry secret"
sidebar_position: 11
---

# Quan Ly Registry Secret

Trong trường hợp người dùng sử dụng container registry nội bộ, Argo CD Image Updater cần xác thực đến registry, FPT Argo CD hỗ trợ người dùng tạo một registry secret để xác thực. Người dùng có thể thực hiện các thao tác trên portal như sau:
**_A. Tạo mới registry secret_**
  * **Bước 1:** Tại màn hình **Image Updater** > **Add Secret Registry** , thực hiện thêm mới secret: [![](/img/migrated/Picture18-6-47f6f7db.png)](/img/migrated/Picture18-6-47f6f7db.png)
  * **Bước 2:** Nhập thông tin để tạo secret cho registry [![](/img/migrated/Picture19-6-0c5be7e2.png)](/img/migrated/Picture19-6-0c5be7e2.png)

Trong đó: 
✓ Secret Name: Tên secret muốn tạo dưới k8s 
✓ Registry: Container Registry url. VD: registry.fke.fptcloud.com 
✓ Username: Nhập username để authen với registry 
✓ Password: Nhập password để authen với registry 
  * **Bước 3:** Kết quả sau khi tạo secret registry [![](/img/migrated/Picture20-5-2601ddf1.png)](/img/migrated/Picture20-5-2601ddf1.png)

**_B. Cập nhật registry secret_**
  * **Bước 1:** Tại màn hình **Image Updater** > **Add Secret Registry** muốn update > **Edit** , thực hiện thêm update secret: [![](/img/migrated/Picture21-5-7cc5090e.png)](/img/migrated/Picture21-5-7cc5090e.png)
  * **Bước 2:** Thực hiện chỉnh sửa các thông tin liên quan đến registry secret [![](/img/migrated/Picture22-5-37658d1f.png)](/img/migrated/Picture22-5-37658d1f.png) Người dùng có thể thực hiện chỉnh sửa Registry Url, username/password để authen với registry
  * **Bước 3:** Kết quả sau khi update secret registry [![](/img/migrated/Picture23-5-b0f811a6.png)](/img/migrated/Picture23-5-b0f811a6.png)

**_C. Xóa registry secret_**
  * **Bước 1:** Tại màn hình **Image Updater** > **Add Secret Registry** muốn update > **Delete** , thực hiện xóa secret: [![](/img/migrated/Picture24-5-2aa73178.png)](/img/migrated/Picture24-5-2aa73178.png)
  * **Bước 2:** Nhập confirm text để thực hiện xoá [![](/img/migrated/Picture25-5-ac36cf52.png)](/img/migrated/Picture25-5-ac36cf52.png)
  * **Bước 3:** Kết quả sau khi delete [![](/img/migrated/Picture26-5-29fe7ee5.png)](/img/migrated/Picture26-5-29fe7ee5.png)
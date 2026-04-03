---
id: "manage-registry-secrets"
title: "Quản lý registry secret"
description: "Hướng dẫn tạo, cập nhật và xóa registry secret để xác thực container registry nội bộ"
sidebar_label: "Quản lý registry secret"
sidebar_position: 11
---

# Quản lý registry secret

Khi sử dụng container registry nội bộ, ArgoCD Image Updater cần xác thực với registry. FPT ArgoCD hỗ trợ tạo registry secret để thực hiện xác thực này.

## A. Tạo mới registry secret

1. Tại màn hình **Image Updater** > **Add Secret Registry**, thêm mới secret.

[![](/img/migrated/Picture18-6-47f6f7db.png)](/img/migrated/Picture18-6-47f6f7db.png)

2. Nhập thông tin để tạo secret:
   - **Secret Name**: tên secret tạo dưới Kubernetes
   - **Registry**: URL container registry, ví dụ: `registry.fke.fptcloud.com`
   - **Username**: username để xác thực với registry
   - **Password**: password để xác thực với registry

[![](/img/migrated/Picture19-6-0c5be7e2.png)](/img/migrated/Picture19-6-0c5be7e2.png)

3. Kết quả sau khi tạo:

[![](/img/migrated/Picture20-5-2601ddf1.png)](/img/migrated/Picture20-5-2601ddf1.png)

## B. Cập nhật registry secret

1. Tại màn hình **Image Updater** > chọn secret muốn cập nhật > **Edit**.

[![](/img/migrated/Picture21-5-7cc5090e.png)](/img/migrated/Picture21-5-7cc5090e.png)

2. Chỉnh sửa Registry URL, username hoặc password.

[![](/img/migrated/Picture22-5-37658d1f.png)](/img/migrated/Picture22-5-37658d1f.png)

3. Kết quả sau khi cập nhật:

[![](/img/migrated/Picture23-5-b0f811a6.png)](/img/migrated/Picture23-5-b0f811a6.png)

## C. Xóa registry secret

:::danger
Thao tác xóa không thể hoàn tác.
:::

1. Tại màn hình **Image Updater** > chọn secret muốn xóa > **Delete**.

[![](/img/migrated/Picture24-5-2aa73178.png)](/img/migrated/Picture24-5-2aa73178.png)

2. Nhập confirm text để xác nhận xóa.

[![](/img/migrated/Picture25-5-ac36cf52.png)](/img/migrated/Picture25-5-ac36cf52.png)

3. Kết quả sau khi xóa:

[![](/img/migrated/Picture26-5-29fe7ee5.png)](/img/migrated/Picture26-5-29fe7ee5.png)

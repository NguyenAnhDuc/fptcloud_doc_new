---
id: "manage-container-registry"
title: "Quản lý container registry"
description: "Hướng dẫn thêm, cập nhật và xóa cấu hình container registry trong Image Updater"
sidebar_label: "Quản lý container registry"
sidebar_position: 12
---

# Quản lý container registry

## A. Thêm mới container registry

1. Tại màn hình **Image Updater** > **Container Registry** > **Add Container Registry**.

[![](/img/migrated/Picture27-5-327acd35.png)](/img/migrated/Picture27-5-327acd35.png)

2. Nhập thông tin container registry:
   - **Name**: tên container registry, ví dụ: `My Custom Registry`
   - **Prefix**: prefix của registry, phải khớp với DNS và là duy nhất, ví dụ: `docker.io`
   - **API URL**: URL API của docker registry (http/https), ví dụ: `https://registry-1.docker.io`
   - **Default namespace**: namespace mặc định (đặc biệt với Docker Hub), ví dụ: `library`
   - **Credentials**: dùng để xác thực tới registry, ví dụ: `pullsecret:argocd-[argocd-id]/dockerhub-secret`
   - **Set Default**: nếu `true`, registry này là default registry
   - **Set insecure**: dùng để tắt xác minh TLS cho registry

[![](/img/migrated/Picture29-4-ff1fe795.png)](/img/migrated/Picture29-4-ff1fe795.png)

[![](/img/migrated/Picture1-6-f3ce82fa.png)](/img/migrated/Picture1-6-f3ce82fa.png)

3. Kết quả sau khi thêm mới:

[![](/img/migrated/Picture30-4-214ebb11.png)](/img/migrated/Picture30-4-214ebb11.png)

## B. Cập nhật container registry

1. Tại màn hình **Image Updater** > chọn **Container Registry** muốn cập nhật > **Edit**.

[![](/img/migrated/Picture31-4-35d409d0.png)](/img/migrated/Picture31-4-35d409d0.png)

2. Chỉnh sửa các tham số cấu hình như Name, Prefix, Set Default, Insecure.

:::note
Chỉ có một container registry được đặt là default.
:::

[![](/img/migrated/Picture32-4-9f6e263c.png)](/img/migrated/Picture32-4-9f6e263c.png)

3. Kết quả sau khi cập nhật:

[![](/img/migrated/Picture33-4-d0347843.png)](/img/migrated/Picture33-4-d0347843.png)

## C. Xóa container registry

:::danger
Thao tác xóa không thể hoàn tác.
:::

1. Tại màn hình **Image Updater** > **Container Registry** > chọn registry muốn xóa.

[![](/img/migrated/Picture34-4-b862bf01.png)](/img/migrated/Picture34-4-b862bf01.png)

2. Nhập confirm text để xác nhận.

[![](/img/migrated/Picture35-4-1e53ea64.png)](/img/migrated/Picture35-4-1e53ea64.png)

3. Kết quả sau khi xóa:

[![](/img/migrated/Picture36-4-b81d7d02.png)](/img/migrated/Picture36-4-b81d7d02.png)

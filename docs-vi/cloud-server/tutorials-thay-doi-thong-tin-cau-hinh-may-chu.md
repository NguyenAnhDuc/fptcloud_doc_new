---
id: "tutorials-thay-doi-thong-tin-cau-hinh-may-chu"
title: "Thay đổi cấu hình máy chủ"
description: "Resize cấu hình RAM-CPU, đổi tên và reset password cho máy ảo trên FPT Cloud Server."
sidebar_label: "Thay đổi cấu hình máy chủ"
sidebar_position: 17
---

# Thay đổi cấu hình máy chủ

FPT Cloud Server cho phép bạn thay đổi cấu hình máy ảo linh hoạt — bao gồm resize RAM/CPU, đổi tên và reset password.

## Resize cấu hình

Resize giúp thay đổi cấu hình RAM-CPU của máy ảo đã tạo. Trong quá trình resize, máy ảo sẽ tạm tắt và tự khởi động lại sau khi hoàn tất.

:::tip
Bật tính năng **Hot-add** để resize mà không cần tắt máy ảo trong tương lai.
:::

1. Tại **Instance Management**, chọn **Actions** → **Resize VM**.

   [![Menu Actions với tùy chọn Resize VM](/img/migrated/Userguide-FPT-Cloud-Server-2022-41-1024x-3163067f.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-41-1024x-3163067f.png)

2. Chọn cấu hình mới theo template có sẵn hoặc tạo cấu hình tùy chọn ở phần **Custom**. Nhấn **Resize** để xác nhận.

   [![Hộp thoại Resize VM](/img/migrated/Userguide-FPT-Cloud-Server-2022-42-6016416a.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-42-6016416a.png)

## Đổi tên máy ảo (Rename)

1. Tại **Instance Management**, chọn **Actions** → **Rename**.

   [![Menu Actions với tùy chọn Rename](/img/migrated/Userguide-FPT-Cloud-Server-2022-43-1024x-f181b90f.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-43-1024x-f181b90f.png)

2. Nhập tên mới, nhấn **Rename**.

   [![Hộp thoại Rename](/img/migrated/Userguide-FPT-Cloud-Server-2022-44-517e8929.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-44-517e8929.png)

## Reset Password

Với máy ảo sử dụng phương thức xác thực Password, bạn có thể reset password cho tài khoản root.

1. Tại **Instance Management**, chọn **Actions** → **Reset Password**.

   [![Menu Actions với tùy chọn Reset Password](/img/migrated/Userguide-FPT-Cloud-Server-2022-45-1024x-17f8c10f.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-45-1024x-17f8c10f.png)

2. Nhấn **Reset Password**. Hệ thống gửi mật khẩu mới về email của bạn.

## Bước tiếp theo

- [Backup máy chủ với Snapshot](./tutorials-backup-may-chu-voi-snapshot.md)

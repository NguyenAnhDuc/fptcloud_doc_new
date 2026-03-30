---
id: "profile-ssh-key"
title: "Quản lý SSH Key"
description: "Tạo, import và quản lý SSH Key trên FPT Cloud Portal."
sidebar_label: "SSH Key"
sidebar_position: 41
---

# Quản lý SSH Key

SSH Key là phương thức bảo mật được khuyến nghị cho máy chủ Linux — an toàn hơn so với Password.

## Tạo/Import SSH Key

1. Chọn **Compute Engine** → **SSH Management**, nhấn **Import SSH key**.

   [![Màn hình SSH Management](/img/migrated/image-1698634601692-83a32b71.png)](/img/migrated/image-1698634601692-83a32b71.png)

2. Nhập thông tin:
   - **Name**: Tên SSH Key.
   - **Public Key**: Nhập Public Key có sẵn hoặc chọn **Generate new key pair**.

   Định dạng hỗ trợ: `ssh-rsa`, `ecdsa-sha2-nistp256`, `ecdsa-sha2-nistp384`, `ecdsa-sha2-nistp521`, `ssh-ed25519`.

3. Nhấn **Save**. Hệ thống tạo SSH Key và tự động download file `.pem`.

:::danger
File Private Key `.pem` chỉ được cung cấp một lần. Lưu trữ ở nơi an toàn.
:::

## Xóa SSH Key

1. Tại **SSH Management**, chọn **Actions** → **Delete**.
2. Xác nhận xóa.

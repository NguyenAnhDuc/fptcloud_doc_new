---
id: "edit-capabilities"
title: "Chỉnh sửa capabilities tài khoản"
description: "Hướng dẫn cấu hình capabilities login và apiKey cho tài khoản ArgoCD"
sidebar_label: "Chỉnh sửa capabilities"
sidebar_position: 25
---

# Chỉnh sửa capabilities tài khoản

FPT Cloud cho phép cấu hình capabilities cho từng tài khoản:
- **login**: cho phép tài khoản đăng nhập qua giao diện ArgoCD
- **apiKey**: cho phép tạo authentication token để truy cập qua API — phù hợp cho tích hợp CI/CD pipeline hoặc các quy trình tự động cần tương tác với ArgoCD API

1. Tại màn hình **Security & Access** > **Local Account**, nhấn **Edit Account**.

[![](/img/migrated/Picture85-06a2fa3e.png)](/img/migrated/Picture85-06a2fa3e.png)

2. Tích chọn hoặc bỏ tích các capabilities mong muốn.

:::note
Cần chọn ít nhất một capability (`apiKey` hoặc `login`) cho mỗi tài khoản.
:::

[![](/img/migrated/Picture86-56c75d94.png)](/img/migrated/Picture86-56c75d94.png)

3. Nhấn **Edit** để lưu thay đổi. Kết quả sau khi cập nhật:

[![](/img/migrated/Picture87-29463c43.png)](/img/migrated/Picture87-29463c43.png)

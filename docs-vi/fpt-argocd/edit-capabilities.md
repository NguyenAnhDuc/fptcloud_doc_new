---
id: "edit-capabilities"
title: "Chỉnh sửa capabilities"
sidebar_label: "Chỉnh sửa capabilities"
description: "Hướng dẫn chỉnh sửa capabilities của account trên FPT ArgoCD."
---

# Chỉnh sửa capabilities

FPT Cloud cho phép bạn cấu hình capabilities của account:

- **login** — cho phép user đăng nhập qua ArgoCD.
- **apiKey** — cho phép user tạo authentication token để truy cập qua API. Lựa chọn này hỗ trợ tích hợp với CI/CD pipeline hoặc các quy trình tự động khác cần tương tác với API của ArgoCD.

1. Tại màn hình **Security & Access** → **Local Account**, chọn **Edit Account**.

![Màn hình Edit Account](images/edit-capabilities/img-001.png)

2. Tích chọn bổ sung hoặc bỏ tích chọn capabilities.

:::note
Cần chọn ít nhất 1 capabilities (apiKey hoặc login) cho user.
:::

![Form chỉnh sửa capabilities](images/edit-capabilities/img-002.png)

3. Nhấn **Edit** để hoàn thành.

Kết quả sau khi chỉnh sửa:

![Kết quả sau khi edit capabilities](images/edit-capabilities/img-003.png)

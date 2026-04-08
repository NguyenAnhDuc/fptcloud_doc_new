---
id: "overview-iam-user"
title: "Tổng quan IAM User"
description: "IAM User là người dùng được mời thêm vào Tenant, có thể đã có hoặc chưa có tài khoản FPT Cloud."
sidebar_label: "Tổng quan IAM User"
sidebar_position: 1
---

# Tổng quan IAM User

IAM User là người dùng được mời thêm vào Tenant, có thể là người dùng đã có tài khoản FPT Cloud/SSO hoặc chưa có.

- Nếu user được mời đã có tài khoản, sau khi xác nhận họ có thể truy cập ngay vào VPC được cấp quyền.
- Nếu chưa có tài khoản, họ sẽ được hướng dẫn khởi tạo tài khoản FPT Cloud mới.
- Nếu IAM User muốn sử dụng riêng một Tenant mới, hãy liên hệ bộ phận hỗ trợ để được cấp quota Tenant.

Để thay đổi role hoặc ngắt quyền truy cập của một IAM User, hãy chỉnh sửa User Group chứa user đó:

- Để ngắt quyền truy cập: xóa user khỏi User Group — user sẽ không còn quyền truy cập vào Tenant đó.
- Để thay đổi quyền sang role khác: gán role mới cho User Group.

:::warning
Việc thay đổi role cho một User Group sẽ ảnh hưởng đến tất cả user khác trong User Group đó. Nếu chỉ muốn đổi role của một user cụ thể, hãy tạo một User Group mới chỉ chứa user đó.
:::

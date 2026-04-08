---
id: "iam"
title: "IAM (Identity & Access Management)"
description: "FPT IAM là tính năng cho phép Tenant owner chia sẻ quyền truy cập tài nguyên FPT Cloud cho người dùng khác với các quyền hạn khác nhau."
sidebar_label: "Tổng quan"
sidebar_position: 1
---

# IAM (Identity & Access Management)

FPT Identity & Access Management (FPT IAM) là tính năng cho phép Tenant owner chia sẻ quyền truy cập tài nguyên trên FPT Cloud cho người dùng khác với các quyền hạn khác nhau. Tenant owner có toàn quyền quản lý tất cả tài nguyên của VPC, bao gồm cả tính năng phân quyền. Để sử dụng IAM, Tenant owner cần tạo Role, User Group và mời IAM User thông qua email.

## Các khái niệm cơ bản

- **Role**: Vai trò của người dùng trong tổ chức, quy định các quyền mà user có khả năng thực hiện. FPT IAM hỗ trợ 2 basic Role là Super Admin và Readonly, ngoài ra có thể tạo Custom Role với bộ quyền tùy chỉnh.
- **Permission**: Xác định user có quyền thực hiện tính năng gì trên tài nguyên nào. Mỗi permission đều thuộc một Role.
- **User Group**: Nhóm người dùng có cùng vai trò (theo tenant hoặc VPC). Tất cả IAM user trong cùng User Group sẽ được gán chung Roles & Permission.
- **IAM User**: Người dùng được mời vào tenant, có quyền tác động lên các tài nguyên theo role được gán.
- **IP Access**: Tính năng kiểm soát truy cập hệ thống theo địa chỉ IP được cấu hình.

## Bắt đầu sử dụng

Xem [Initial Setup](/vi/docs/fpt-security/iam/Initial Setup) để bắt đầu sử dụng FPT IAM.

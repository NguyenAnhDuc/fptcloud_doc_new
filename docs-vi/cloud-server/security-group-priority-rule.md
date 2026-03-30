---
id: "security-group-priority-rule"
title: "Quản lý Priority Rule"
description: "Thiết lập thứ tự ưu tiên cho các rule trong Security Group."
sidebar_label: "Quản lý Priority Rule"
sidebar_position: 74
---

# Quản lý Priority Rule

:::note
Tính năng này chỉ dành cho một số Tenant có cấu hình đặc biệt. Liên hệ đội ngũ hỗ trợ để được kích hoạt.
:::

Priority Rule cho phép thiết lập thứ tự ưu tiên cho các firewall rule — quyết định rule nào được thực thi trước khi Allow hoặc Deny traffic.

## Lợi ích

- Sắp xếp rule theo mức độ quan trọng.
- Đảm bảo rule chi tiết được xử lý trước rule tổng quát.

## Cấu hình Priority

1. Tại Security Group, chọn rule cần thay đổi.
2. Thiết lập giá trị **Priority** (số nhỏ hơn = ưu tiên cao hơn).
3. Nhấn **Save**.

## Bước tiếp theo

- [Quản lý Security Group](./quan-ly-security-group.md)

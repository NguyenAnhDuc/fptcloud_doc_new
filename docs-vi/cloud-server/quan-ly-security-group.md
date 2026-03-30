---
id: "quan-ly-security-group"
title: "Quản lý Security Group"
description: "Tạo và quản lý Security Group để kiểm soát traffic ra/vào máy ảo."
sidebar_label: "Quản lý Security Group"
sidebar_position: 72
---

# Quản lý Security Group

Security Group hoạt động như tường lửa mạng ảo, kiểm soát kết nối vào (inbound) và ra (outbound) máy ảo — bảo vệ khỏi DDoS và các mối đe dọa từ internet.

FPT Cloud hỗ trợ hai loại:
- **Security Group**: Kiểm soát traffic ra vào internet.
- **Distributed Firewall** *(chỉ có trên Specific)*: Kiểm soát traffic trong mạng nội bộ.

## Tạo Security Group

1. Chọn **Security group** → **Networking**, nhấn **New Security Group**.
2. Nhập thông tin: Name, Type, Subnet, Applied CIDR/instances, Configure security rule (Inbound/Outbound).
3. Nhấn **Create security group**.

## Hướng dẫn thêm

- [Filter Security Group](./security-group-filter.md)
- [Quản lý Priority Rule](./security-group-priority-rule.md)

---
id: "create-vpc-en"
title: "Khởi tạo VPC"
description: "Hướng dẫn khởi tạo VPC mới trên FPT Cloud Portal."
sidebar_label: "Khởi tạo VPC"
sidebar_position: 2
---

# Khởi tạo VPC

Để khởi tạo một VPC mới, bạn cần đăng nhập vào hệ thống với phân quyền Tenant Owner.

1. Chọn **VPCs** → **Create VPC**.

   ![Trang danh sách VPC với nút Create VPC](/img/migrated/image-1714811267317-66868093.png)

2. Nhập các thông tin sau:
   - **VPC Name**: tên VPC, tối thiểu 10 ký tự, tối đa 50 ký tự, bao gồm chữ hoa, số, dấu gạch ngang và dấu gạch dưới. Hệ thống tự chuyển chữ thường thành chữ hoa.
   - **VPC owner**: chọn tài khoản được cấp phân quyền VPC Owner. Hệ thống chọn sẵn tài khoản đang tạo làm VPC Owner.
   - **Network setting** (không bắt buộc): thiết lập thông tin Subnet. Có thể tạo sau khi khởi tạo VPC.
     - **Name**: tên gợi nhớ của Subnet.
     - **Type**: hiện hỗ trợ 2 loại — Routed và Isolated.
     - **Network Address (CIDR)**: nhập CIDR hợp lệ.
     - **Gateway IP**: nhập địa chỉ Gateway IP hợp lệ.
     - **Static IP Pool** (không bắt buộc): nhập dải IP muốn sử dụng. Nếu không nhập, hệ thống lấy toàn bộ IP từ CIDR.

   ![Form tạo VPC](/img/migrated/image-1714811289727-41fbb01b.png)

3. Nhấn **Create VPC**. Hệ thống tiến hành khởi tạo và thông báo kết quả.

   ![VPC đã tạo thành công](/img/migrated/image-1714811309818-c434eb33.png)

VPC mới hiển thị trên trang **VPCs**.

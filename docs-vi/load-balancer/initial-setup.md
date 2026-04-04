---
id: "initial-setup"
title: "Thiết lập ban đầu"
description: "Các bước cần hoàn thành trước khi sử dụng dịch vụ Load Balancer của FPT Cloud."
sidebar_label: "Thiết lập ban đầu"
sidebar_position: "2"
---

# Thiết lập ban đầu

Trước khi sử dụng dịch vụ Load Balancer của FPT Cloud, hãy hoàn thành các bước sau:

- Tạo tài khoản FPT Cloud và đăng nhập vào FPT Portal.
- Tạo máy chủ ảo trên FPT Cloud.
- Gắn Security Group vào máy chủ ảo.

## Tạo tài khoản và đăng nhập FPT Portal

1. Truy cập <https://console.fptcloud.com> và đăng nhập bằng thông tin tài khoản FPT Cloud của bạn.
2. Chọn đúng Tenant, Region và VPC cho dịch vụ của bạn.

:::note
Nếu chưa có tài khoản FPT Cloud, truy cập <https://fptcloud.com/>, nhấn **Sign Up** và làm theo hướng dẫn. Đội hỗ trợ sẽ liên hệ để xác nhận thông tin tài khoản.
:::

## Tạo máy chủ ảo

FPT Load Balancer hỗ trợ cân bằng tải cho các máy chủ ảo trên FPT Cloud. Tạo và quản lý máy chủ ảo theo tài liệu hướng dẫn Cloud Server.

## Gắn Security Group vào máy chủ ảo

Security Group hoạt động như tường lửa mạng ở cấp độ máy ảo, kiểm soát lưu lượng vào và ra. Mặc định, máy ảo FPT Cloud cho phép tất cả lưu lượng ra nhưng chặn tất cả lưu lượng vào.

Load Balancer yêu cầu mở các cổng cụ thể. Ngoài các cổng dịch vụ như HTTP/HTTPS, bạn cũng cần mở các cổng dùng cho health check.

Ví dụ: để tạo Load Balancer LB1 cân bằng tải cho web server chạy trên cổng 80 trên máy ảo A và B:

1. Tạo Security Group mới.
2. Thêm rule Inbound cho cổng 80.
3. Gắn Security Group vào máy ảo A và máy ảo B.
4. Nếu LB1 là External Load Balancer (có gán Public IP), gắn thêm Security Group vào LB1.

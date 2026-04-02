---
id: "Initial Setup"
title: "Thiết lập ban đầu"
description: "Các bước cần thực hiện trước khi sử dụng dịch vụ Load Balancer của FPT Cloud."
sidebar_label: "Thiết lập ban đầu"
sidebar_position: 2
---

# Thiết lập ban đầu

Trước khi sử dụng dịch vụ Load Balancer của FPT Cloud, hãy hoàn thành các bước sau:

- Tạo tài khoản FPT Cloud và đăng nhập vào FPT Portal.
- Khởi tạo máy chủ ảo trên FPT Cloud.
- Gắn Security Group vào máy chủ ảo.

## Tạo tài khoản và đăng nhập FPT Portal

1. Truy cập <https://console.fptcloud.com> và đăng nhập bằng tài khoản FPT Cloud đã được cấp.
2. Chọn đúng Tenant, Region và VPC cần sử dụng dịch vụ.

:::note
Nếu chưa có tài khoản FPT Cloud, hãy truy cập <https://fptcloud.com/>, chọn **Sign Up** và nhập thông tin theo hướng dẫn. Đội ngũ hỗ trợ sẽ liên hệ để xác nhận và tạo tài khoản cho bạn.
:::

## Khởi tạo máy chủ ảo

FPT Load Balancer hỗ trợ cân bằng tải cho các máy chủ ảo trên FPT Cloud. Hãy khởi tạo và quản lý máy chủ ảo theo tài liệu hướng dẫn Cloud Server.

## Gắn Security Group vào máy chủ ảo

**Security Group** hoạt động như tường lửa mạng ở cấp máy ảo, kiểm soát traffic vào (Inbound) và ra (Outbound). Mặc định, FPT Cloud cho phép toàn bộ traffic Outbound nhưng chặn tất cả traffic Inbound.

Load Balancer yêu cầu mở một số cổng đặc biệt. Ngoài các cổng dịch vụ như HTTP/HTTPS, bạn cần mở thêm các cổng phục vụ health check.

Ví dụ: để tạo Load Balancer LB1 cân bằng tải cho web server chạy port 80 trên máy ảo A và B:

1. Tạo **Security Group** mới.
2. Thêm **Inbound rule** cho port 80.
3. Gán **Security Group** vừa tạo vào máy ảo A và máy ảo B.
4. Nếu LB1 là External Load Balancer (có Public IP), gán thêm **Security Group** cho LB1.

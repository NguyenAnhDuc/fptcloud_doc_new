---
id: "create-vpn"
title: "Khởi tạo VPN Site-to-Site"
description: "Hướng dẫn tạo kết nối VPN Site-to-Site mới trên FPT Cloud Portal."
sidebar_label: "Khởi tạo VPN Site-to-Site"
sidebar_position: 1
---

# Khởi tạo VPN Site-to-Site

Tạo kết nối VPN Site-to-Site giúp bạn thiết lập đường truyền bảo mật giữa mạng on-premise và tài nguyên trên FPT Cloud.

1. Chọn **Networking** → tab **VPN**.

   ![Trang quản lý VPN](/img/migrated/Truy-ca%CC%A3%CC%82p-trang-VPN-1024x479-ce85af29.png)

2. Nhấn **Create**.

   ![Nút Create VPN](/img/migrated/Create-1024x479-bd78020f.png)

3. Tại trang **Config**, khai báo các trường thông tin cần thiết:

   | Trường | Diễn giải | Giới hạn |
   |---|---|---|
   | **Name** | Tên VPN Site-to-Site | Tối đa 32 ký tự. Cho phép chữ cái, số, dấu gạch dưới, gạch ngang, dấu cách, dấu chấm |
   | **Description** | Mô tả kết nối VPN | Tối đa 100 ký tự |
   | **Security Profile** | Loại bảo mật kết nối | |
   | **Authentication mode** | Phương thức xác thực | Hiện tại chưa hỗ trợ xác thực Certificate |
   | **Pre-shared key** | Khóa bảo mật cho mỗi peer | 8-32 ký tự: A-Z, a-z, 0-9, _ và . |
   | **Edge gateway** | Cổng biên xử lý kết nối mạng | Chọn từ danh sách |
   | **Local endpoint IP Address** | IP public từ hệ thống Cloud FPT | IP chưa gắn cho VPC hoặc dịch vụ khác |
   | **Local endpoint Networks** | Network trên Cloud | Không được overlap với các VPN connection khác hoặc Remote endpoint Networks |
   | **Remote endpoint IP Address** | IP public phía on-premise | Địa chỉ IPv4 |
   | **Remote endpoint Networks** | Network phía on-premise | Không được overlap với Local endpoint Networks |

   ![Form cấu hình VPN](/img/migrated/Config-VPN-1024x918-ecc5a6dd.png)

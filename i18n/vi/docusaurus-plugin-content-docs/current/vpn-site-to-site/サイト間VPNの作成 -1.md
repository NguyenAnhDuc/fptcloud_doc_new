---
id: "サイト間VPNの作成 -1"
title: "Tạo VPN Site-to-Site"
description: "Hướng dẫn tạo kết nối VPN Site-to-Site mới trên FPT Cloud Portal."
sidebar_label: "Tạo VPN Site-to-Site"
sidebar_position: "2"
draft: true
---

# Tạo VPN Site-to-Site

Tạo kết nối VPN Site-to-Site giúp bạn thiết lập tunnel bảo mật giữa mạng on-premises và tài nguyên FPT Cloud.

1. Chọn **Networking** → tab **VPN**.

   ![Trang quản lý VPN](/img/migrated/image-1742899330143-080379db.png)

2. Nhấn **Create**.

   ![Nút Create VPN](/img/migrated/image-1742899367880-bb010d83.png)

3. Tại trang **Config**, nhập các thông tin cần thiết:

   | Trường | Mô tả | Giới hạn |
   |---|---|---|
   | **Name** | Tên VPN Site-to-Site | Tối đa 32 ký tự. Chỉ gồm chữ cái, số, dấu gạch dưới, gạch ngang, khoảng trắng và dấu chấm. |
   | **Description** | Mô tả kết nối VPN | Tối đa 100 ký tự |
   | **Security Profile** | Loại bảo mật kết nối | |
   | **Authentication mode** | Phương thức xác thực | Hiện chưa hỗ trợ xác thực bằng Certificate. |
   | **Pre-shared key** | Khóa bí mật dùng chung giữa hai đầu | 8–32 ký tự: A–Z, a–z, 0–9, `_`, `.` |
   | **Edge gateway** | Edge gateway xử lý kết nối mạng | Chọn từ danh sách |
   | **Local endpoint IP Address** | IP public của hệ thống FPT Cloud | IP chưa được gán cho VPC hoặc dịch vụ nào khác |
   | **Local endpoint Networks** | Mạng phía cloud | Không được trùng với các kết nối VPN khác hoặc Remote endpoint Networks |
   | **Remote endpoint IP Address** | IP public của thiết bị on-premises | Địa chỉ IPv4 |
   | **Remote endpoint Networks** | Mạng phía on-premises | Không được trùng với Local endpoint Networks |

   ![Form cấu hình VPN](/img/migrated/image-1742899430155-89b24257.png)

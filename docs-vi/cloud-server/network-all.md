---
id: "network-all"
title: "Tổng quan Networking"
description: "Hệ thống mạng của FPT Smart Cloud (FCI) mang đến giải pháp toàn diện cho doanh nghiệp, cho phép xây dựng và quản lý hạ t"
sidebar_label: "Tổng quan Networking"
sidebar_position: 66
---

# Network All

### **Tổng quan Networking**
Hệ thống mạng của FPT Smart Cloud (FCI) mang đến giải pháp toàn diện cho doanh nghiệp, cho phép xây dựng và quản lý hạ tầng mạng trên đám mây một cách linh hoạt và an toàn. Với Virtual Private Cloud (VPC) làm nền tảng, hệ thống này hỗ trợ kết nối tài nguyên nội bộ, phân chia mạng qua Subnets, đồng thời cung cấp khả năng truy cập từ bên ngoài thông qua Floating IP. Các công cụ bảo mật như Security Group giúp kiểm soát và bảo vệ tài nguyên, trong khi tính năng quản lý truy cập Identity & Access Management (IAM) đảm bảo quyền hạn cho người dùng. Kết nối an toàn giữa các mạng nội bộ (on-premise) và đám mây được duy trì qua VPN Site-to-Site, và Load Balancer giúp phân phối lưu lượng hiệu quả, đảm bảo hiệu suất cao cho các dịch vụ và ứng dụng của doanh nghiệp.
Kiến trúc hiện tại của FCI được thiết kế để đáp ứng đa dạng nhu cầu, từ hệ thống mạng truyền thống đến việc xây dựng mạng riêng ảo, hoặc thậm chí các mô hình đặc thù như No-gateway. 
_Với mô hình No-gateway, khách hàng có thể tự thiết lập hệ thống riêng, quản lý thông qua một máy chủ đóng vai trò như router, ví dụ như Check-point firewall. Trong cấu hình này, IP sẽ được chỉ định trực tiếp vào máy chủ, và toàn bộ traffic sẽ được điều hướng thông qua Check-point mà không cần đi qua gateway do FCI cung cấp._
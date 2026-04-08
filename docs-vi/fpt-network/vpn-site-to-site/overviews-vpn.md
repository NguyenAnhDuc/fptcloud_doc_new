---
id: "overviews-vpn"
title: "Tổng quan VPN Site-to-Site"
description: "Giới thiệu dịch vụ VPN Site-to-Site và các yêu cầu trước khi triển khai."
sidebar_label: "Tổng quan VPN Site-to-Site"
sidebar_position: 1
---

# Tổng quan VPN Site-to-Site

VPN Site-to-Site cho phép các công ty xây dựng hệ thống mạng riêng ảo hoàn chỉnh cho các địa điểm đa dạng. Dịch vụ này kết nối các mạng nội bộ một cách liên tục và bảo mật, cho phép nhân viên chia sẻ tài nguyên an toàn giữa các mạng.

FPT Cloud Site-to-Site VPN là dịch vụ VPN quản lý đầy đủ, cho phép tạo kết nối bảo mật giữa mạng văn phòng và tài nguyên đám mây của FPT. Sử dụng tunnel IPSec, dịch vụ kết nối trung tâm dữ liệu doanh nghiệp với các văn phòng chi nhánh.

## Yêu cầu trước khi tạo VPN Site-to-Site

- **Kiến trúc mạng**: đảm bảo kiến trúc mạng on-premise phù hợp với việc triển khai VPN S2S — xác định địa chỉ IP, phân vùng mạng, và các thiết bị mạng phù hợp.
- **Floating IP**: hệ thống Cloud FPT cần 1 IP public để kết nối VPN S2S. IP public này chưa được gán cho bất kỳ dịch vụ nào khác.
- **IP addressing**: đảm bảo các địa chỉ IP trong VPN S2S không xung đột với các mạng khác trong tổ chức hoặc mạng công cộng.
- **Giao thức và mã hóa**: chọn giao thức và cấu hình mã hóa phù hợp. Phổ biến nhất là IPSec với mã hóa AES hoặc 3DES, kết hợp giao thức xác thực IKEv1 hoặc IKEv2.

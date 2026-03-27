---
id: "overviews-vpn"
title: "Giới thiệu chi tiết"
description: "* Với VPN Site-to-Site, các công ty có thể xây dựng một hệ thống mạng riêng ảo hoàn chỉnh cho các địa điểm đa dạng. Dịch"
sidebar_label: "Giới thiệu chi tiết"
sidebar_position: 2
---

# Overviews Vpn

* Với VPN Site-to-Site, các công ty có thể xây dựng một hệ thống mạng riêng ảo hoàn chỉnh cho các địa điểm đa dạng. Dịch vụ này kết nối các mạng nội bộ khác nhau một cách liên tục và bảo mật, cho phép nhân viên chia sẻ tài nguyên một cách thuận tiện và an toàn giữa các mạng nội bộ.
  * FPT Cloud Site-to-Site VPN là một dịch vụ VPN quản lý đầy đủ, cho phép tạo kết nối bảo mật giữa mạng văn phòng và tài nguyên đám mây của FPT. Sử dụng tunnel IPSec, dịch vụ này kết nối trung tâm dữ liệu của doanh nghiệp với các văn phòng chi nhánh, giúp truy cập các ứng dụng và dịch vụ dựa trên đám mây mà không tiết lộ dữ liệu mật.

**Những điều cần lưu ý trước khi bạn tạo VPN Site-to-Site** :
  * Kiến trúc mạng: Đảm bảo kiến trúc mạng On-Premise của bạn phù hợp với việc triển khai VPN S2S. Điều này bao gồm xác định địa chỉ IP, phân vùng mạng, và các thiết bị mạng phù hợp để xây dựng kết nối VPN.
  * Floating IP: Hệ thống Cloud FPT cần 1 IP public để kết nối VPN S2S. IP public được sử dụng chưa được gán cho bất kỳ dịch vụ nào khác
  * IP addressing: Đảm bảo rằng các địa chỉ IP được sử dụng trong VPN S2S không gây xung đột với các mạng khác trong tổ chức hoặc các mạng công cộng. Xác định địa chỉ IP đầu cuối cho các cổng kết nối VPN và cấu hình tường lửa để cho phép lưu lượng truy cập.
  * Giao thức và mã hóa: Chọn giao thức và cấu hình mã hóa phù hợp cho VPN S2S. Phổ biến nhất là IPSec với mã hóa AES hoặc 3DES, cùng với giao thức xác thực như IKEv1 hoặc IKEv2. Đảm bảo cấu hình bảo mật tương ứng để đảm bảo tính bảo mật cao.
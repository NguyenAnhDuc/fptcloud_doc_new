---
id: "load-balancer"
title: "Load Balancer"
description: "Tổng quan dịch vụ Load Balancer của FPT Cloud — phân phối traffic tối ưu đến các máy chủ backend."
sidebar_label: "Load Balancer"
sidebar_position: 1
---

# Load Balancer

Load Balancer phân phối traffic đến các máy chủ backend (web server, web app, container...) để tối ưu hóa hiệu năng và đảm bảo tính sẵn sàng của dịch vụ trên FPT Cloud.

Sau khi được khởi tạo và cấu hình, FPT Load Balancer tự động điều phối traffic và phân chia đồng đều cho các máy chủ trong group. Hệ thống liên tục kiểm tra trạng thái hoạt động của từng máy chủ — nếu một máy không hoạt động, bộ điều khiển tự động chuyển toàn bộ traffic sang các máy còn lại cho đến khi máy bị lỗi hoạt động trở lại bình thường.

## Những điều cần lưu ý trước khi tạo Load Balancer

- **Số lượng máy chủ:** Tính toán khối lượng công việc để chọn số lượng máy chủ backend phù hợp.
- **Kích thước gói Load Balancer:** FPT Cloud cung cấp các gói từ Basic đến Premium với thông số hỗ trợ tối đa khác nhau.
- **Vị trí địa lý (Region):** Chọn Region gần nhất với nguồn phát sinh traffic để tối ưu tốc độ đường truyền.
- **Thuật toán cân bằng tải:** FPT cung cấp hai thuật toán chính là **Round Robin** và **Least Connections**. Tìm hiểu cơ chế và ưu nhược điểm của từng thuật toán để chọn phù hợp với ứng dụng của bạn.

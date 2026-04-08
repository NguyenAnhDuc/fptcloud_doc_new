---
id: "cloud-guard"
title: "FPT Cloud Guard"
description: "FPT Cloud Guard – dịch vụ giám sát và cảnh báo đa kênh cho tài nguyên trên FPT Cloud"
sidebar_label: "FPT Cloud Guard"
sidebar_position: 3
---

# FPT Cloud Guard

FPT Cloud Guard – Alert là dịch vụ giúp bạn giám sát, theo dõi trạng thái hoạt động của các dịch vụ trên FPT Cloud hoàn toàn tự động (Cloud Server, Load Balancer, Autoscaling, Object Storage, Kubernetes, Database,...). Bạn có thể cấu hình và nhận cảnh báo khi tài nguyên vượt ngưỡng qua nhiều kênh: Email, Webhook, Telegram, Slack, SMS, Call, Microsoft Teams.

Khi sử dụng FPT Cloud Guard, bạn có thể chủ động theo dõi tài nguyên mà không cần nhân sự duy trì liên tục, với chi phí tối thiểu.

## Những điều cần lưu ý trước khi tạo Alert

- **Các thông số cần theo dõi và ngưỡng bất thường:** Mỗi loại tài nguyên có các thông số kỹ thuật khác nhau. Hãy xác định metric cần theo dõi và ngưỡng bất thường phù hợp với nhu cầu sử dụng.
- **Phương thức nhận cảnh báo:** Chọn phương thức phù hợp với tổ chức để người phụ trách nhận thông báo và xử lý sự cố nhanh nhất.
- **Kịch bản cảnh báo:** Xây dựng các kịch bản cảnh báo cho từng tình huống cụ thể, ví dụ: thời gian lặp cảnh báo khi vượt ngưỡng, số lượng người nhận,...

## Release note

### FPT Cloud Guard (Alert 2.0) – Quản lý và tự động cảnh báo tài nguyên trên FPT Cloud Portal

FPT Cloud chính thức ra mắt FPT Cloud Guard trên giao diện Portal. Bạn có thể dễ dàng thiết lập kịch bản cảnh báo và cài đặt người nhận qua Email. Cloud Guard giám sát liên tục và gửi cảnh báo khi mức sử dụng vượt ngưỡng, giúp tiết kiệm thời gian quản lý tài nguyên.

**Các tính năng:**
- Tạo và tùy chỉnh cảnh báo khi RAM/CPU của máy chủ ảo vượt ngưỡng
- Tạo cảnh báo RAM/CPU cho Autoscale Group và thiết lập Scale In/Out tự động
- Kiểm tra trạng thái theo thời gian thực
- Bật/tắt gửi cảnh báo và quản lý phương thức nhận
- Xem lịch sử và chi tiết cảnh báo

### FPT Cloud Guard (Alert 2.1) – Cảnh báo mới về băng thông mạng và ổ cứng

Các cảnh báo mới được bổ sung:
- **Network bandwidth in/out (Mbps):** Cảnh báo khi băng thông đến/đi của các NIC vượt ngưỡng
- **Total network bandwidth (Mbps):** Cảnh báo khi tổng băng thông của các NIC vượt ngưỡng
- **Disk IOPS (IOPS):** Cảnh báo hiệu năng đọc/ghi ổ cứng, hỗ trợ theo từng máy chủ
- **Disk Read/Write Bandwidth (MBps):** Cảnh báo băng thông đọc/ghi ổ cứng, hỗ trợ theo từng máy chủ

Phiên bản 2.1 còn bổ sung: chỉnh sửa cảnh báo đã tạo, sửa/xóa người nhận, xem chi tiết lịch sử cảnh báo, hỗ trợ cả hai nền tảng ảo hóa OpenStack và VMware.

### FPT Cloud Guard (Alert 2.2) – Hỗ trợ cảnh báo đa kênh

Các kênh nhận cảnh báo mới được bổ sung:
- **Slack**
- **Telegram**

Phiên bản 2.2 còn cho phép tạo cảnh báo cho nhiều máy chủ cùng lúc với tính năng "apply to multiple virtual machines".

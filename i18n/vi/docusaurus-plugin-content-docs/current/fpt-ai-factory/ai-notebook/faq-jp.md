---
id: "faq-jp"
title: "Câu hỏi thường gặp"
description: "Câu hỏi thường gặp về AI Notebooks trên FPT AI Factory."
sidebar_label: "Câu hỏi thường gặp"
sidebar_position: "8"
---

# Câu hỏi thường gặp

## Quy tắc nhàn rỗi trong AI Notebook là gì?

Để giúp bạn tiết kiệm tài nguyên và tránh các khoản phí không mong muốn, AI Notebook tự động quản lý các phiên nhàn rỗi. Các quy tắc sau đây được áp dụng:

- **Thời gian chờ nhàn rỗi của GPU kernel:** GPU kernel được xem là nhàn rỗi sau 30 phút không có hoạt động (không có thực thi code). Khi điều này xảy ra, kernel sẽ tự động bị ngắt kết nối.
- **Thời gian chờ nhàn rỗi của lab:** Môi trường lab được xem là nhàn rỗi sau 1 giờ không có tương tác của người dùng (không nhập liệu, không nhấp chuột, không chuyển tab). Khi nhàn rỗi, lab sẽ tự động bị xóa để giải phóng tài nguyên.
- **Bảo toàn dữ liệu:** Nếu lab bị xóa do nhàn rỗi, tất cả các tệp đã lưu vẫn được lưu trữ an toàn trong bộ nhớ lưu trữ bền vững và có thể truy cập sau. Hãy nhớ **lưu tệp** trước khi đóng trình duyệt để đảm bảo không mất công việc chưa lưu.

## CPU và GPU flavor mất bao lâu để khởi động?

- **GPU flavor:** Thời gian khởi động thường là **45 giây đến 1 phút**.
- **CPU flavor:** Thời gian khởi động thường là **khoảng 15 giây**.

_Thời gian khởi động thực tế có thể thay đổi tùy thuộc vào tải hệ thống và điều kiện mạng._

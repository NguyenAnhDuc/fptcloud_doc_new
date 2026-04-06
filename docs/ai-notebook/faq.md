---
id: "faq"
title: "Câu hỏi thường gặp"
description: "Các câu hỏi thường gặp về AI Notebooks trên FPT AI Factory."
sidebar_label: "FAQ"
sidebar_position: 8
pagination_next: null
---

# Câu hỏi thường gặp

## Quy tắc nhàn rỗi trong AI Notebook là gì?

Để giúp bạn tiết kiệm tài nguyên và tránh chi phí phát sinh ngoài ý muốn, AI Notebook tự động quản lý các phiên nhàn rỗi. Các quy tắc sau áp dụng:
  * **Timeout GPU kernel nhàn rỗi:** GPU kernel được coi là nhàn rỗi sau 30 phút không có hoạt động (không có lệnh nào được thực thi). Khi điều này xảy ra, kernel sẽ tự động bị ngắt kết nối.
  * **Timeout lab nhàn rỗi:** Môi trường lab được coi là nhàn rỗi sau 1 giờ không có tương tác của người dùng (không gõ phím, không nhấp chuột, không chuyển tab). Sau khi nhàn rỗi, lab sẽ tự động bị xóa để giải phóng tài nguyên.
  * **An toàn dữ liệu:** Nếu lab của bạn bị xóa do nhàn rỗi, tất cả file đã lưu vẫn được bảo quản an toàn trong bộ nhớ lưu trữ bền vững và có thể truy cập sau. Hãy **lưu file** trước khi đóng trình duyệt để đảm bảo không mất dữ liệu chưa lưu.

## Thời gian khởi động CPU và GPU flavor là bao lâu?

  * **GPU flavor:** Thường mất **45 giây đến 1 phút** để khởi động.
  * **CPU flavor:** Thường mất **khoảng 15 giây** để khởi động.

_Thời gian khởi động thực tế có thể thay đổi tùy theo tải hệ thống và điều kiện mạng._

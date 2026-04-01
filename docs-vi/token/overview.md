---
id: "overview"
title: "Tổng quan"
description: "Tổng quan về tính năng Token trên FPT Cloud Portal"
sidebar_label: "Tổng quan"
sidebar_position: 2
---

# Tổng quan

Token là chuỗi xác thực ngắn hạn giúp khách hàng truy cập các dịch vụ FPT Cloud qua API, Terraform và SDK mà không cần chia sẻ thông tin đăng nhập. Thay vì gửi mật khẩu mỗi lần, hệ thống sử dụng token để xác minh danh tính và phân quyền truy cập.

Tính năng Token trên FPT Cloud Portal hỗ trợ các thao tác sau:

| Chức năng | Mô tả |
| --- | --- |
| Tạo token | Khởi tạo token mới với tên và thời hạn sử dụng tùy chọn |
| Xác thực token | Kiểm tra tính hợp lệ và quyền truy cập trước khi cho phép gọi API |
| Thu hồi token | Vô hiệu hóa token thủ công khi không còn cần thiết |
| Quản lý thời hạn | Tự động chuyển token sang trạng thái "Expired" khi hết hạn |

:::note
FPT Cloud Portal không lưu trữ nội dung token sau khi tạo. Hãy sao chép và lưu trữ token ở nơi an toàn ngay sau khi khởi tạo.
:::

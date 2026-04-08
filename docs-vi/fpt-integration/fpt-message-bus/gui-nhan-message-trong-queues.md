---
id: "gui-nhan-message-trong-queues"
title: "Gửi và nhận messages trong queue"
description: "Hướng dẫn gửi và nhận messages trong queue của FPT Message Bus for RabbitMQ."
sidebar_label: "Gửi và nhận messages trong queue"
sidebar_position: 12
---

# Gửi và nhận messages trong queue

Tính năng Preview cho phép bạn kiểm tra luồng message trực tiếp từ giao diện — hữu ích để debug và xác minh hoạt động của queue trước khi tích hợp ứng dụng.

## Gửi message

1. Từ menu **Application**, chọn **Queues** > chọn queue cần thao tác > **Preview**.

   [![Màn hình danh sách queues, chọn queue và nhấn Preview](/img/migrated/View-1-1-73852024.png)](/img/migrated/View-1-1-73852024.png)

2. Trong tab **Send**, nhập nội dung message vào ô **Payload**.

   [![Tab Send với ô Payload để nhập nội dung message](/img/migrated/View-2-2-349ef695.png)](/img/migrated/View-2-2-349ef695.png)

   Chọn một trong hai kiểu dữ liệu:
   - **String**: Chuỗi ký tự thông thường.
   - **Base64**: Chuỗi ký tự được mã hóa theo bảng mã 6-bit thay thế ASCII 8-bit.

3. Chọn **Send** để publish message vào queue.

## Nhận message

1. Chuyển sang tab **Receive**.

   [![Tab Receive với nút Receive để nhận message](/img/migrated/Recei-1-cf01752c.png)](/img/migrated/Recei-1-cf01752c.png)

2. Chọn nút **Receive** để lấy message từ queue.

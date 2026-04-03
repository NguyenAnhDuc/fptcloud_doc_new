---
id: "Send-Receive-messages-in-topics"
title: "Gửi và nhận messages trong topic"
description: "Hướng dẫn gửi và nhận messages trong topic của FPT Message Bus for RabbitMQ."
sidebar_label: "Gửi và nhận messages trong topic"
sidebar_position: 13
---

# Gửi và nhận messages trong topic

Trong mô hình topic/subscription, một message được publish vào topic sẽ được phân phối đến tất cả subscription đã đăng ký. Tính năng Preview giúp bạn kiểm tra luồng message trực tiếp từ giao diện.

## Gửi message vào topic

1. Từ menu **Application**, chọn **Topic** > chọn topic cần thao tác > **Preview**.

   [![Màn hình danh sách topics, chọn topic và nhấn Preview](/img/migrated/topic_send_1-5f6f9078.png)](/img/migrated/topic_send_1-5f6f9078.png)

2. Nhập nội dung message vào ô **Payload**.

   [![Tab Send với ô Payload để nhập nội dung message cần publish](/img/migrated/topic_send_2-d4eb39b9.png)](/img/migrated/topic_send_2-d4eb39b9.png)

   Chọn một trong hai kiểu dữ liệu:
   - **String**: Chuỗi ký tự thông thường.
   - **Base64**: Chuỗi ký tự được mã hóa theo bảng mã 6-bit thay thế ASCII 8-bit.

3. Chọn **Send** để publish message vào topic.

## Nhận message từ subscription

1. Từ menu **Application**, chọn **Queues** > chọn subscription > **Preview**.

   [![Màn hình danh sách queues, chọn subscription và nhấn Preview](/img/migrated/topic_send_3-2d2eb56d.png)](/img/migrated/topic_send_3-2d2eb56d.png)

2. Chọn tab **Receive** > chọn **Receive** để nhận message.

   [![Tab Receive với nút Receive để nhận message đã được publish vào topic](/img/migrated/topic_send_4-285c2013.png)](/img/migrated/topic_send_4-285c2013.png)

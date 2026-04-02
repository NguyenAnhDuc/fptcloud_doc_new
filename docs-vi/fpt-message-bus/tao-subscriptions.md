---
id: "tao-subscriptions"
title: "Tạo subscription"
description: "Hướng dẫn tạo subscription trong một topic của FPT Message Bus for RabbitMQ."
sidebar_label: "Tạo subscription"
sidebar_position: 11
---

# Tạo subscription

Subscription là hàng đợi được gắn với một topic. Khi message được publish vào topic, tất cả subscription đã đăng ký đều nhận được bản sao message đó. Bạn cần tạo ít nhất một subscription trước khi có thể nhận message từ topic.

1. Chọn topic cần thao tác > **Edit** > chọn **Create** trong phần **Subscriptions**.

   [![Màn hình Edit topic với nút Create trong phần Subscriptions](/img/migrated/sub_create_1-fba37fcf.png)](/img/migrated/sub_create_1-fba37fcf.png)

2. Nhập các thông tin cần thiết:

   - **Name** (bắt buộc): Tên subscription.
   - **Max length**: Số message tối đa có thể chứa.
   - **Message TTL**: Thời gian message tồn tại từ khi được publish. Nếu vượt quá, message sẽ bị xóa.
   - **Overflow**: Chế độ xử lý khi đầy — `drop_head`, `reject_publish`, hoặc `reject_publish_DLX`.

   [![Form tạo subscription với các trường Name, Max length, Message TTL, Overflow](/img/migrated/sub_create_2-c2a8eb64.png)](/img/migrated/sub_create_2-c2a8eb64.png)

3. Chọn **OK** để tạo subscription.

:::note
Tên subscription được đặt theo quy tắc: `t.TOPIC_NAME.s.q.SUBSCRIPTION_NAME`.

Sau khi tạo subscription, khi bạn publish message vào topic, tất cả subscription đã đăng ký đều có thể nhận được message đó.
:::

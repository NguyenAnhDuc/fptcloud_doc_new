---
id: "Quick-Starts"
title: "Hướng dẫn nhanh"
description: "Hướng dẫn nhanh để bắt đầu sử dụng FPT Message Bus for RabbitMQ."
sidebar_label: "Hướng dẫn nhanh"
sidebar_position: 3
---

# Hướng dẫn nhanh

Sau khi đăng ký dịch vụ thành công, bạn có thể bắt đầu gửi và nhận message ngay trong vài bước. Hướng dẫn này giúp bạn làm quen với toàn bộ luồng hoạt động từ tạo queue đến gửi/nhận message qua topic.

## Tạo queue

Sau khi đăng ký dịch vụ thành công, các thao tác cấu hình RabbitMQ được thực hiện hoàn toàn trong RabbitMQ Application.

1. Từ menu **Application**, chọn **Queues** > **Create**.

   [![Màn hình danh sách queues với nút Create](/img/migrated/quickstart_1-fc16447e.png)](/img/migrated/quickstart_1-fc16447e.png)

2. Nhập các thông tin cần thiết:

   - **Name** (bắt buộc): Tên queue.
   - **Max length**: Số message tối đa có thể chứa trong queue.
   - **Message TTL**: Thời gian message tồn tại từ khi được publish. Nếu vượt quá, message sẽ bị xóa.
   - **Overflow**: Chế độ xử lý khi queue đầy — `drop_head`, `reject_publish`, hoặc `reject_publish_DLX`.

   [![Form tạo queue với các trường Name, Max length, Message TTL, Overflow](/img/migrated/quickstart_2-8f5d775a.png)](/img/migrated/quickstart_2-8f5d775a.png)

3. Chọn **OK** để tạo queue.

## Gửi và nhận messages trong queue

1. Từ menu **Application**, chọn **Queues** > chọn queue > **Preview**.

   [![Màn hình danh sách queues, chọn queue và nhấn Preview](/img/migrated/quickstart_3-c37f4d7c.png)](/img/migrated/quickstart_3-c37f4d7c.png)

2. Trong tab **Send**, nhập nội dung message vào ô **Payload**.

   [![Tab Send với ô Payload để nhập nội dung message](/img/migrated/quickstart_4-27d461eb.png)](/img/migrated/quickstart_4-27d461eb.png)

3. Chọn **Send** để publish message.

Để nhận message, chuyển sang tab **Receive** > chọn **Receive**.

[![Tab Receive với nút Receive để nhận message từ queue](/img/migrated/quickstart_5-ec6f9c15.png)](/img/migrated/quickstart_5-ec6f9c15.png)

## Tạo topic

1. Từ menu **Application**, chọn **Topics** > **Create**.

   [![Màn hình danh sách topics với nút Create](/img/migrated/quickstart_6-69910650.png)](/img/migrated/quickstart_6-69910650.png)

2. Nhập **Name** (bắt buộc) cho topic.

   [![Form tạo topic với trường Name bắt buộc](/img/migrated/quickstart_7-9af9319c.png)](/img/migrated/quickstart_7-9af9319c.png)

3. Chọn **OK** để tạo topic.

## Tạo subscription

Để gửi và nhận message trong topic, bạn cần tạo subscription để đăng ký nhận thông báo từ topic đó.

1. Chọn topic cần thao tác > **Edit** > chọn **Create** trong phần **Subscriptions**.

   [![Màn hình Edit topic với nút Create trong phần Subscriptions](/img/migrated/quickstart_8-06bd52bc.png)](/img/migrated/quickstart_8-06bd52bc.png)

2. Nhập các thông tin cần thiết:

   - **Name** (bắt buộc): Tên subscription.
   - **Max length**: Số message tối đa có thể chứa.
   - **Message TTL**: Thời gian tồn tại của message.
   - **Overflow**: Chế độ xử lý khi đầy.

   [![Form tạo subscription với các trường cấu hình](/img/migrated/quickstart_9-1d8c4adf.png)](/img/migrated/quickstart_9-1d8c4adf.png)

3. Chọn **OK** để tạo subscription.

## Gửi và nhận messages trong topic

Khi message được publish vào topic, tất cả subscription đã đăng ký đều có thể nhận message đó.

**Gửi message vào topic:**

1. Từ menu **Application**, chọn **Topics** > chọn topic > **Preview**.

   [![Màn hình danh sách topics, chọn topic và nhấn Preview](/img/migrated/quickstart_10-25109fd0.png)](/img/migrated/quickstart_10-25109fd0.png)

2. Nhập nội dung message vào ô **Payload**.

   [![Ô Payload để nhập nội dung message cần publish vào topic](/img/migrated/quickstart_11-f03b482b.png)](/img/migrated/quickstart_11-f03b482b.png)

3. Chọn **Send** để publish message.

**Nhận message từ subscription:**

1. Từ menu **Application**, chọn **Queues** > chọn subscription > **Preview**.

   [![Màn hình danh sách queues, chọn subscription và nhấn Preview](/img/migrated/quickstart_12-4852378f.png)](/img/migrated/quickstart_12-4852378f.png)

2. Chọn tab **Receive** > chọn **Receive** để nhận message.

   [![Tab Receive với nút Receive để nhận message từ subscription](/img/migrated/quickstart_13-639b1e62.png)](/img/migrated/quickstart_13-639b1e62.png)

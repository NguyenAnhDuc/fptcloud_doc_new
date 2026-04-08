---
id: "tao-queues"
title: "Tạo queue"
description: "Hướng dẫn tạo queue mới trong FPT Message Bus for RabbitMQ."
sidebar_label: "Tạo queue"
sidebar_position: 8
---

# Tạo queue

Queue lưu trữ message cho đến khi consumer nhận. Bạn có thể cấu hình giới hạn dung lượng, thời gian tồn tại message và chính sách xử lý khi queue đầy ngay khi tạo.

1. Từ menu **Application**, chọn **Queues** > **Create**.

   [![Màn hình danh sách queues với nút Create](/img/migrated/que_create-31f765f3.png)](/img/migrated/que_create-31f765f3.png)

2. Nhập các thông tin cần thiết:

   - **Name** (bắt buộc): Tên queue.
   - **Max length**: Tổng số message tối đa có thể chứa trong queue.
   - **Message TTL**: Thời gian message tồn tại từ khi được publish. Nếu vượt quá thời gian này, message sẽ bị xóa.
   - **Overflow**: Chế độ xử lý khi queue đầy — `drop_head`, `reject_publish`, hoặc `reject_publish_DLX`.
   - **Maximum priority**: Mức độ ưu tiên tối đa, nhập giá trị từ 0 đến 10.

   [![Form tạo queue với các trường Name, Max length, Message TTL, Overflow](/img/migrated/que_create_1-1df0d53b.png)](/img/migrated/que_create_1-1df0d53b.png)

3. Chọn **OK** để hoàn tất tạo queue.

:::note
Tên queue được đặt theo quy tắc: `q.QUEUE_NAME`.

Nếu chọn đồng thời **Is Quorum** và **Single active consumer**, tính năng Receive sẽ không hoạt động — chỉ nên chọn một trong hai thuộc tính.
:::

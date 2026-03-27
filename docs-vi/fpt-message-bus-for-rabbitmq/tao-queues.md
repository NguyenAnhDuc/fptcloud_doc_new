---
id: "tao-queues"
title: "Tao Queues"
description: "**Bước 1** : Ở menu **Application** > **Queues** > **Create**"
sidebar_label: "Tao Queues"
sidebar_position: 5
---

# Tao Queues

**Bước 1** : Ở menu **Application** > **Queues** > **Create**
[![](/img/migrated/que_create-31f765f3.png)](/img/migrated/que_create-31f765f3.png)
**Bước 2** : Nhập các thông tin cần thiết: 
  * **Name (required)** : tên queue.
  * **Max length** : Tổng số messages có thể chứa trong một queue
  * **Message TTL** : Thời gian messages tồn tại từ khi được publish. Nếu vượt quá thời gian này, message sẽ bị mất.
  * **Overflow** : Có thể chọn các chế độ drop_head, reject_publish, reject_publish_DLX
  * **Maximum priority** : Nhập từ 0 -10.

[![](/img/migrated/que_create_1-1df0d53b.png)](/img/migrated/que_create_1-1df0d53b.png)
**Lưu ý** : Tên queue được đặt theo quy tắc: q.QUEUE_NAME.
  * Nếu chọn đồng thời **Is Quorum** và **single active consumer** thì không dùng được Receive, nên chọn 1 thuộc tính mới dùng được.

**Bước 3** : Chọn **OK** để tiến hành tạo queue.
---
id: "create-consumer-groups"
title: "Tạo consumer group"
description: "Hướng dẫn tạo consumer group trong FPT Kafka."
sidebar_label: "Tạo consumer group"
sidebar_position: 17
---

# Tạo consumer group

Consumer group là tập hợp các consumer cùng subscribe và xử lý message từ một hoặc nhiều topic. Việc nhóm consumer giúp phân tải và đảm bảo mỗi message chỉ được xử lý một lần trong nhóm.

1. Từ menu, chọn **Application** > **Consumer Groups**, sau đó nhấn **Create**.
2. Điền các thông tin:
   - **Group Name** (bắt buộc): Tên consumer group
   - **Offset strategy** (bắt buộc)
   - **Topic** (bắt buộc)

   :::note
   Một consumer group có thể subscribe nhiều topic.
   :::

   [![Màn hình tạo consumer group mới với các trường Group Name và Topic](/img/migrated/Pic1_TaoGr-d95bddc4.png)](/img/migrated/Pic1_TaoGr-d95bddc4.png)

3. Nhấn **OK** để tạo consumer group.

---
id: "create-topics"
title: "Tạo topic"
description: "Hướng dẫn tạo topic mới trong FPT Kafka."
sidebar_label: "Tạo topic"
sidebar_position: 5
---

# Tạo topic

Topic xác định kênh truyền message giữa producer và consumer trong Kafka. Bạn cần tạo topic trước khi bắt đầu gửi hoặc nhận dữ liệu.

1. Từ menu, chọn **Application** > **Topic**, sau đó nhấn **Create**.
2. Điền các thông tin:
   - **Name** (bắt buộc): Tên topic
   - **Partitions** (bắt buộc): Số partition của topic
   - **Replication Factor** (bắt buộc)
   - **Cleanup Policy** (bắt buộc)
   - **Advanced Configuration** (tùy chọn)

   [![Màn hình tạo topic mới với các trường thông tin bắt buộc](/img/migrated/Pic2_Taotopic-67891311.png)](/img/migrated/Pic2_Taotopic-67891311.png)

3. Nhấn **OK** để tạo topic.

:::note
Tên topic phải theo định dạng **`[prefix].[topic name]`**.
:::

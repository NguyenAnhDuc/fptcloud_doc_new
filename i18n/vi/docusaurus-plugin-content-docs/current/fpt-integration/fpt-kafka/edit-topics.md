---
id: "edit-topics"
title: "Chỉnh sửa topic"
description: "Hướng dẫn thêm partition và xóa record trong topic FPT Kafka."
sidebar_label: "Chỉnh sửa topic"
sidebar_position: 7
---

# Chỉnh sửa topic

Bạn có thể mở rộng khả năng xử lý của topic bằng cách thêm partition, hoặc giải phóng dung lượng bằng cách xóa record trong partition. Cả hai thao tác đều được thực hiện từ tab **Partition** trong màn hình chi tiết topic.

## Thêm partition vào topic

1. Chọn topic muốn thêm partition, sau đó nhấn **Detail**.
2. Chuyển sang tab **Partition**, nhấn **Add**, sau đó nhấn **Yes, I understand**.

   [![Màn hình xác nhận thêm partition vào topic](/img/migrated/Picture1_AddPartition-8e955e66.png)](/img/migrated/Picture1_AddPartition-8e955e66.png)

3. Nhập số partition muốn thêm.

   [![Màn hình nhập số lượng partition cần thêm](/img/migrated/Picture2_AddParrtition-81ff326d.png)](/img/migrated/Picture2_AddParrtition-81ff326d.png)

4. Nhấn **OK** để hoàn tất.

## Xóa record trong partition

Chức năng **Empty** cho phép xóa toàn bộ record trong một partition cụ thể mà không ảnh hưởng đến cấu trúc topic.

1. Chọn topic muốn chỉnh sửa, sau đó nhấn **Detail**.
2. Chuyển sang tab **Partition**, chọn partition cần xóa record, sau đó nhấn **Empty**.

   [![Màn hình chọn partition và nút Empty để xóa record](/img/migrated/Pic1_Empty-2a9bbebb.png)](/img/migrated/Pic1_Empty-2a9bbebb.png)

3. Nhấn **Yes** trong hộp thoại xác nhận.

Sau thao tác này, tổng số record trong partition được chọn sẽ về 0.

## Xóa toàn bộ record trong topic

Để xóa record của tất cả partition trong topic, chọn topic và nhấn **Empty** trực tiếp.

[![Màn hình xóa toàn bộ record của topic](/img/migrated/Pic2_Empty-33bdb6cb.png)](/img/migrated/Pic2_Empty-33bdb6cb.png)

:::warning
Thao tác này xóa toàn bộ record trên tất cả partition của topic và không thể khôi phục.
:::

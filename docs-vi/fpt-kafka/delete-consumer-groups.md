---
id: "delete-consumer-groups"
title: "Xóa consumer group"
description: "Hướng dẫn xóa consumer group trong FPT Kafka."
sidebar_label: "Xóa consumer group"
sidebar_position: 19
---

# Xóa consumer group

Xóa consumer group khi nhóm không còn được sử dụng giúp dọn dẹp tài nguyên và tránh nhầm lẫn trong quản lý. Consumer group phải ở trạng thái không hoạt động trước khi có thể xóa.

:::danger
Không thể xóa consumer group khi đang có consumer hoạt động trong nhóm. Hãy đảm bảo tất cả consumer đã dừng trước khi thực hiện.
:::

1. Chọn consumer group cần xóa, sau đó nhấn **Remove**.

   [![Màn hình danh sách consumer group với nút Remove](/img/migrated/Pic1_xoaconsumer-d47fd17f.png)](/img/migrated/Pic1_xoaconsumer-d47fd17f.png)

2. Trong hộp thoại xác nhận, nhấn **Yes** để xác nhận xóa.

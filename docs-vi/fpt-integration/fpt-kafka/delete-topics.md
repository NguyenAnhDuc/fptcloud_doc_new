---
id: "delete-topics"
title: "Xóa topic"
description: "Hướng dẫn xóa topic không còn sử dụng trong FPT Kafka."
sidebar_label: "Xóa topic"
sidebar_position: 8
---

# Xóa topic

Xóa topic giúp giải phóng tài nguyên khi topic không còn được sử dụng. Sau khi xóa, toàn bộ dữ liệu trong topic sẽ bị mất vĩnh viễn.

:::danger
Xóa topic sẽ xóa vĩnh viễn toàn bộ message và cấu hình liên quan. Hãy đảm bảo không có producer hoặc consumer nào đang dùng topic này trước khi xóa.
:::

1. Từ menu, chọn **Application** > **Topics**.
2. Chọn topic cần xóa, sau đó nhấn **Remove**.

   [![Màn hình danh sách topic với nút Remove](/img/migrated/Pic1_Remove-a0d961bc.png)](/img/migrated/Pic1_Remove-a0d961bc.png)

3. Nhấn **Yes** để xác nhận xóa.

   [![Hộp thoại xác nhận xóa topic](/img/migrated/Pic2_remove-354c9e9d.png)](/img/migrated/Pic2_remove-354c9e9d.png)

---
id: "xoa-topics"
title: "Xóa topic"
description: "Hướng dẫn xóa topic trong FPT Message Bus for RabbitMQ."
sidebar_label: "Xóa topic"
sidebar_position: 14
pagination_next: null
---

# Xóa topic

Xóa topic sẽ loại bỏ vĩnh viễn topic và tất cả subscription được đăng ký trong topic đó. Hãy đảm bảo không còn ứng dụng nào đang sử dụng topic hoặc các subscription của nó trước khi thực hiện.

:::danger
Thao tác xóa topic không thể hoàn tác. Tất cả subscription và message chưa được xử lý trong topic sẽ bị mất vĩnh viễn.
:::

1. Từ menu **Application**, chọn **Topics** > chọn topic cần xóa > **Remove**.

   [![Màn hình danh sách topics, chọn topic và nhấn Remove](/img/migrated/topic_delete_1-f1ebb7a9.png)](/img/migrated/topic_delete_1-f1ebb7a9.png)

2. Hộp thoại **Confirmation** xuất hiện. Chọn **Yes** để xác nhận xóa, hoặc **No** để hủy thao tác.

   [![Hộp thoại xác nhận xóa topic với nút Yes và No](/img/migrated/topic_delete_2-5a1a6a8d.png)](/img/migrated/topic_delete_2-5a1a6a8d.png)

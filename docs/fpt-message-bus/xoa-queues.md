---
id: "xoa-queues"
title: "queue の削除"
description: "FPT Message Bus で queue を削除します。"
sidebar_label: "queue の削除"
sidebar_position: "8"
---

# Xóa queue

Xóa queue sẽ loại bỏ vĩnh viễn hàng đợi và toàn bộ message chưa được xử lý. Hãy đảm bảo không còn ứng dụng nào đang sử dụng queue trước khi thực hiện.

:::danger
Thao tác xóa queue không thể hoàn tác. Tất cả message trong queue sẽ bị mất vĩnh viễn.
:::

1. Từ menu **Application**, chọn **Queues** > chọn queue cần xóa > **Remove**.

   [![Màn hình danh sách queues, chọn queue và nhấn Remove](/img/migrated/delete1-aa8577cc.png)](/img/migrated/delete1-aa8577cc.png)

2. Hộp thoại **Confirmation** xuất hiện. Chọn **Yes** để xác nhận xóa, hoặc **Cancel** để hủy thao tác.

   [![Hộp thoại xác nhận xóa queue với nút Yes và Cancel](/img/migrated/delete2-3d5e084f.png)](/img/migrated/delete2-3d5e084f.png)

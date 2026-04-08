---
id: "refresh-robot-account"
title: "Refresh robot account"
description: "Tạo lại secret cho robot account khi token bị mất hoặc cần thay mới."
sidebar_label: "Refresh robot account"
sidebar_position: 8
---

# Refresh robot account

Token của robot account chỉ hiển thị một lần khi tạo. Khi token bị mất hoặc cần thay thế vì lý do bảo mật, FPT Cloud cho phép tạo lại secret mà không cần xóa và tạo mới robot account.

1. Trong danh sách **Robot Account**, chọn robot account muốn refresh, sau đó chọn **ACTION REFRESH SECRET**.

   [![Chọn ACTION REFRESH SECRET](/img/migrated/Picture79-c15b2ebd.png)](/img/migrated/Picture79-c15b2ebd.png)

2. Chọn một trong hai cách refresh secret:

   **Cách 1 - Tự động:** Hệ thống tự tạo secret mới. Sao chép hoặc **Export to File** để lưu secret.

   [![Tự động refresh secret](/img/migrated/Picture80-b745cd4f.png)](/img/migrated/Picture80-b745cd4f.png)

   [![Hộp thoại lưu secret mới](/img/migrated/Picture81-1d68b601.png)](/img/migrated/Picture81-1d68b601.png)

   **Cách 2 - Thủ công:** Tự nhập secret tùy chỉnh.

   [![Cấu hình secret thủ công](/img/migrated/Picture82-b708581c.png)](/img/migrated/Picture82-b708581c.png)

:::warning
Sau khi refresh, hãy cập nhật secret mới vào tất cả pipeline và hệ thống đang sử dụng robot account này.
:::

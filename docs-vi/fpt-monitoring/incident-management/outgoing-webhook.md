---
id: "outgoing-webhook"
title: "Outgoing webhook"
description: "Hướng dẫn cấu hình outgoing webhook để nhận thông báo sự cố theo thời gian thực"
sidebar_label: "Outgoing webhook"
sidebar_position: 7
---

# Outgoing webhook

**Outgoing webhook** cho phép nhận thông báo và cập nhật theo thời gian thực. Khi một sự cố được tạo, cập nhật hoặc đóng, hệ thống sẽ kích hoạt sự kiện và gửi thông báo đến URL đã khai báo.

Sau khi cài đặt Outgoing webhook thành công, nhấn **Show details** để xem thông tin chi tiết.

[![Chi tiết outgoing webhook](/img/migrated/Screenshot_4-498dd7c9.png)](/img/migrated/Screenshot_4-498dd7c9.png)

## Tạo trigger

[![Tạo trigger event](/img/migrated/Picture8-b599aa7e.png)](/img/migrated/Picture8-b599aa7e.png)

1. Nhấn **Run when an event fires** để tạo trigger.
2. Nhập các thông tin:
   - **Name**: tên trigger
   - **URL**: URL để POST event đến
   - **Run this action when**:
     - **Incident is declared**: khi sự cố được khai báo
     - **Incident changes**: khi trạng thái sự cố thay đổi
3. Nhấn **Add event action** để hoàn tất.

:::note
Bạn có thể tạo nhiều trigger bằng cách tiếp tục nhấn **Run when an event fires**.
:::

## Xóa trigger

Nhấn biểu tượng **Trash** để xóa trigger.

[![Xóa trigger](/img/migrated/Picture10-2bd7c632.png)](/img/migrated/Picture10-2bd7c632.png)

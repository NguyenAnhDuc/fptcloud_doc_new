---
id: "outgoing-webhook"
title: "Outgoing Webhook"
description: "**B. Outgoing webhook**"
sidebar_label: "Outgoing Webhook"
sidebar_position: 6
---

# Outgoing Webhook

**B. Outgoing webhook**
**Outgoing webhook** cho phép bạn nhận thông báo và cập nhật theo thời gian thực khi bạn cần. Nó có thể kích hoạt sự kiện (trigger events) khi một sự cố được tạo (created), cập nhật (updated), đóng (closed) và sự cố sẽ được thông báo tới URL được khai báo. 
Sau khi cài đặt Outgoing webhook thành công, xem chi tiết thông tin Outgoing webhook, click **Show details**
[![](/img/migrated/Screenshot_4-498dd7c9.png)](/img/migrated/Screenshot_4-498dd7c9.png)
**Kích hoạt sự kiện (trigger event)**
[![](/img/migrated/Picture8-b599aa7e.png)](/img/migrated/Picture8-b599aa7e.png)
Click **“Run when an event fires”** để tạo 1 trigger
  * **Name** : tên trigger 
  * **URL** : URL để POST event tới 
  * **Run this action when:**
    * **Incident is declared** : incident được khai báo 
    * **Incident changes** : thay đổi trạng thái incident 

Sau khi điền đầy đủ thông tin, click **“Add event action”** để tạo trigger
Bạn cũng có thể tạo nhiều trigger bằng cách tiếp tục click **“Run when an event fires”** để tạo 1 trigger mới. 
**Xóa trigger**
Click icon Trash để xóa trigger
[![](/img/migrated/Picture10-2bd7c632.png)](/img/migrated/Picture10-2bd7c632.png)
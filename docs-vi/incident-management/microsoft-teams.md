---
id: "microsoft-teams"
title: "Microsoft Teams"
description: "Hướng dẫn tích hợp Microsoft Teams với Incident Management"
sidebar_label: "Microsoft Teams"
sidebar_position: 10
---

# Microsoft Teams

Tích hợp **Microsoft Teams** với Incident Management giúp phát hiện và thông báo sự cố nhanh chóng.

Để bắt đầu, bạn cần có **Webhook URL** của Microsoft Teams. Xem hướng dẫn tạo Webhook URL [tại đây](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=newteams%2Cdotnet).

## Thiết lập

1. Trong menu Incident Management, nhấn **Integration**, tìm phần **Microsoft Teams** và nhấn **Integration**.
2. Nhấn **Show details**, sau đó nhấn **Run when an event fires**.
3. Nhập **Name** và **URL**:

   [![Nhập thông tin trigger Microsoft Teams](/img/migrated/Screenshot_9-1-4bed69c6.png)](/img/migrated/Screenshot_9-1-4bed69c6.png)

   - **Name**: tên tự đặt
   - **URL**: Webhook URL đã tạo ở bước trên

4. Nhấn **Add event action** để hoàn tất.

:::note
Bạn có thể tạo nhiều trigger bằng cách tiếp tục nhấn **Run when an event fires**.
:::

Sau khi thiết lập, mỗi khi có sự cố mới, hệ thống sẽ tự động gửi tin nhắn qua Microsoft Teams kèm theo link incident.

[![Ví dụ thông báo trên Microsoft Teams](/img/migrated/Screenshot_10-1-0b2b9825.png)](/img/migrated/Screenshot_10-1-0b2b9825.png)

---
id: "slack"
title: "Slack"
description: "Hướng dẫn tích hợp Slack để nhận thông báo incident tự động"
sidebar_label: "Slack"
sidebar_position: 11
---

# Slack

Tích hợp **Slack** giúp nhận thông báo tự động ngay khi có sự cố được khai báo.

Để tích hợp Slack, bạn cần có **Webhook URL**. Xem hướng dẫn lấy Webhook URL [tại đây](https://medium.com/fortum-tech/step-by-step-guide-to-create-a-slack-app-for-incoming-webhooks-3d9b799e8ae1).

## Thiết lập

1. Trong menu Incident Management, nhấn **Integration**, tìm phần **Slack** và nhấn **Integration**.

   [![Chọn Integration cho Slack](/img/migrated/Screenshot_1-1-00d7a0b4.png)](/img/migrated/Screenshot_1-1-00d7a0b4.png)

2. Nhấn **Show details**, sau đó nhấn **Run when an event fires**.
3. Nhập **Name** và **URL**:

   [![Nhập thông tin trigger Slack](/img/migrated/Screenshot_2-1-0e317a42.png)](/img/migrated/Screenshot_2-1-0e317a42.png)

   - **Name**: tên tự đặt
   - **URL**: Webhook URL đã tạo ở bước trên

4. Nhấn **Add event action** để hoàn tất.

:::note
Bạn có thể tạo nhiều trigger bằng cách tiếp tục nhấn **Run when an event fires**.
:::

Sau khi thiết lập, mỗi khi có incident mới, hệ thống sẽ tự động gửi thông báo vào kênh Slack đã liên kết kèm theo link incident.

[![Ví dụ thông báo trên Slack](/img/migrated/Screenshot_3-1-b266990c.png)](/img/migrated/Screenshot_3-1-b266990c.png)

## Xóa trigger

1. Nhấn **Integration** > **Show details**.
2. Nhấn biểu tượng **Trash** của trigger cần xóa.

   [![Xóa trigger Slack](/img/migrated/Screenshot_4-1-8286678a.png)](/img/migrated/Screenshot_4-1-8286678a.png)

3. Trong hộp thoại xác nhận, nhấn **Yes** để xóa.

---
id: "telegram"
title: "Telegram"
description: "Hướng dẫn tích hợp Telegram để nhận thông báo incident tự động"
sidebar_label: "Telegram"
sidebar_position: 9
---

# Telegram

Tích hợp **Telegram** giúp nhận tin nhắn tự động trên ứng dụng Telegram khi có sự cố được khai báo.

## Thiết lập

1. Trong menu Incident Management, nhấn **Integration**, tìm phần **Telegram** và nhấn **Integration**.

   [![Chọn Integration cho Telegram](/img/migrated/Screenshot_5-1-3ee11c8f.png)](/img/migrated/Screenshot_5-1-3ee11c8f.png)

2. Nhấn **Show details**, sau đó nhấn **Run when an event fires**.
3. Nhập **Name**, **Chat ID** và **Bot API Token**:

   [![Nhập thông tin trigger Telegram](/img/migrated/Screenshot_6-1-d525e397.png)](/img/migrated/Screenshot_6-1-d525e397.png)

   - **Name**: tên tự đặt
   - **Chat ID**: ID của group Telegram nhận thông báo
   - **Bot API Token**: để lấy token, trong Telegram tìm kiếm **BotFather** > nhấn **Start** > nhấn **/newbot** để tạo bot mới; hệ thống sẽ sinh ra token để dùng

4. Nhấn **Add event action** để hoàn tất.

:::note
Bạn có thể tạo nhiều trigger bằng cách tiếp tục nhấn **Run when an event fires**.
:::

Sau khi thiết lập, mỗi khi có sự cố mới, hệ thống sẽ tự động gửi tin nhắn qua Telegram kèm theo link incident.

[![Ví dụ thông báo trên Telegram](/img/migrated/Screenshot_7-1-163bac3e.png)](/img/migrated/Screenshot_7-1-163bac3e.png)

## Xóa trigger

1. Nhấn **Integration** > **Show details**.
2. Nhấn biểu tượng **Trash** của trigger cần xóa.

   [![Xóa trigger Telegram](/img/migrated/Screenshot_8-1-c75df4c5.png)](/img/migrated/Screenshot_8-1-c75df4c5.png)

3. Trong hộp thoại xác nhận, nhấn **Yes** để xóa.

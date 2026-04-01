---
id: "contact-point"
title: "1. Cách thiết lập Telegram bot"
sidebar_label: "1. Cách thiết lập Telegram bot"
sidebar_position: "19"
---

# 1. Cách setup Telegram bot

Có nhiều contact point khác nhau như Slack, Discord, Webhook, Email, Teams, Telegram ... and mỗi contact point will có theh cấu hình khác nhau.

Dưới đây là guide cụ thể for cấu hình Telegram to gửi notification when kích hoạt alert.

Các theh cấu hình for the contact point khác, you tham khảo guide details tại home page Grafana **[TẠI ĐÂY](https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points)**

Để tích hợp Grafana with Telegram, you need to có:

- Telegram bot API token
- Chat ID (ID of cuộc trò chuyện Telegram nơi you muốn nhận notification alert)

Để hoàn tất việc tích hợp, you need to sử dụng version Telegram trên trình duyệt (web).

## Cách setup Telegram bot

Follow these steps to setup bot:

- Mở ứng dụng Telegram trên thiết bị of you.
- Tìm bot có tên BotFather.
- Gõ or chọn lệnh /newbot.
- Chọn tên for bot (tên must kết thúc bằng bot or _bot, ví dụ: my_bot).
- Sao chép API token.

## Cách lấy Chat ID

Add bot ando a group chat theo the bước dưới đây. Sau when bot is thêm ando group, you can định tuyến notification alert đến group that.

- Trong Telegram, mở a group có sẵn or tạo group mới.
- Tìm and thêm bot ando group.
- Sao chép chat ID from URL trên thanh địa chỉ of trình duyệt.

URL will có dạng: https://web.telegram.org/a/#-4266674385

Chat ID là dãy số nằm sau ký tự #, ví dụ: -4266674385.

## Thực hiện cấu hình

Để tạo tích hợp Telegram in Grafana Alerting, thực hiện the bước sau:

**Step 1:** Truy cập Alerts → Alerting → Contact points.

[![Alt text](/img/migrated/Screenshot_43-308c5dfa.png)](/img/migrated/Screenshot_43-308c5dfa.png)

**Step 2:** Nhấn + Add contact point.

[![Alt text](/img/migrated/Screenshot_44-c0aae8f0.png)](/img/migrated/Screenshot_44-c0aae8f0.png)

**Step 3:** Enter tên contact point.

**Step 4:** Trong list Integration, chọn Telegram.

- Tại trường BOT API Token, dán bot API token.
- Tại trường Chat ID, dán chat ID.
- Nhấn Test to kiểm tra tích hợp hoạt động đúng.

**Step 5:** Nhấn Save contact point.

Lúc this, Contact point Telegram has been sẵn sàng to nhận notification alert.

[![Alt text](/img/migrated/Screenshot_45-d7a0f258.png)](/img/migrated/Screenshot_45-d7a0f258.png)

**Step 6:** Để gán contact point this for alert, thực hiện the bước sau:

- Trong Grafana, truy cập Alerting → Alert rules.
- Chỉnh sửa alert rule hiện có or tạo alert rule mới.
- Cuộn xuống phần Configure labels and notifications.
- Tại mục Notifications, chọn Select contact point.
- Chọn contact point Telegram has been tạo trước that from list.
- Nhấn Save rule and exit.

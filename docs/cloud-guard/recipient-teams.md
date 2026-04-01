---
id: "recipient-teams"
title: "Tạo mới người nhận qua MSTeams"
sidebar_label: "Tạo mới người nhận qua MSTeams"
sidebar_position: "16"
---

# Tạo mới người nhận qua MSTeams

Tính năng thêm người nhận alert qua Microsoft Teams for phép user cấu hình channel/nhóm chat Teams to nhận notification from hệ thống monitoring security FPT Cloud Guard. Việc tích hợp this giúp đội ngũ vận hành nhận alert kịp thời and phản ứng nhanh trước the sự kiện security.
**Hướng dẫn cấu hình:** **Step 1:** Lấy Webhook URL from Microsoft Teams
  * Truy cập Microsoft Teams → chọn Channel/Chat you muốn nhận alert.
  * Tạo workflow Post to a channel/chat when a webhook request is received
  * Sao chép Webhook URL → nhấn Done. View hướng dẫn tạo workflow và lấy URL webhook tại đây: [Microsoft Support – Create incoming webhooks with workflows](https://support.microsoft.com/en-us/office/create-incoming-webhooks-with-workflows-for-microsoft-teams-8ae491c7-0394-4861-ba59-055e33f75498 "Microsoft Support – Create incoming webhooks with workflows")

**Step 2:** Add người nhận ando Cloud Guard
  * Truy cập FPT Cloud Portal → chọn service Cloud Guard
  * Vào mục Recipient → nhấn Create
  * Chọn Method là Teams
  * Dán Webhook URL has been sao chép from Teams và Send test message để test kết nối và gửi test message từ FPT Cloud Guard tới chat/channel của người dùng
  * Sau when Send test message thành công, nhấn Create để tạo mới recipient [![file](/img/migrated/image-1750750425129-e5027a61.png)](/img/migrated/image-1750750425129-e5027a61.png)

**Step 3:** Gán người nhận ando alert
  * Chuyển to tab Resource alert/Activity alert/Threat alert
  * Chọn cảnh báo muốn gửi về recipient Teams vừa tạo hoặc tạo mới nếu chưa có cảnh báo
  * Add người nhận Teams vào cảnh báo rồi nhấn Update/Create Cảnh báo sẽ được gửi về channel/chat Teams của khách hàng: [![file](/img/migrated/image-1750751150232-eeb9cfc1.png)](/img/migrated/image-1750751150232-eeb9cfc1.png)

---
id: "recipient-teams"
title: "Tạo mới người nhận qua MSTeams"
description: "Tính năng thêm người nhận cảnh báo qua Microsoft Teams cho phép người dùng cấu hình channel/nhóm chat Teams để nhận thô"
sidebar_label: "Tạo mới người nhận qua MSTeams"
sidebar_position: 16
---

# Tạo mới người nhận qua MSTeams

Tính năng thêm người nhận cảnh báo qua Microsoft Teams cho phép người dùng cấu hình channel/nhóm chat Teams để nhận thông báo từ hệ thống giám sát bảo mật FPT Cloud Guard. Việc tích hợp này giúp đội ngũ vận hành nhận cảnh báo kịp thời và phản ứng nhanh trước các sự kiện bảo mật.
**Hướng dẫn cấu hình:** **Bước 1:** Lấy Webhook URL từ Microsoft Teams
  * Truy cập Microsoft Teams → chọn Channel/Chat bạn muốn nhận cảnh báo.
  * Tạo workflow Post to a channel/chat when a webhook request is received
  * Sao chép Webhook URL → nhấn Done. Xem hướng dẫn tạo workflow và lấy URL webhook tại đây: [Microsoft Support – Create incoming webhooks with workflows](https://support.microsoft.com/en-us/office/create-incoming-webhooks-with-workflows-for-microsoft-teams-8ae491c7-0394-4861-ba59-055e33f75498 "Microsoft Support – Create incoming webhooks with workflows")

**Bước 2:** Thêm người nhận vào Cloud Guard
  * Truy cập FPT Cloud Portal → chọn dịch vụ Cloud Guard
  * Vào mục Recipient → nhấn Create
  * Chọn Method là Teams
  * Dán Webhook URL đã sao chép từ Teams và Send test message để test kết nối và gửi test message từ FPT Cloud Guard tới chat/channel của người dùng
  * Sau khi Send test message thành công, nhấn Create để tạo mới recipient [![file](/img/migrated/image-1750750425129-e5027a61.png)](/img/migrated/image-1750750425129-e5027a61.png)

**Bước 3:** Gán người nhận vào cảnh báo
  * Chuyển đến tab Resource alert/Activity alert/Threat alert
  * Chọn cảnh báo muốn gửi về recipient Teams vừa tạo hoặc tạo mới nếu chưa có cảnh báo
  * Thêm người nhận Teams vào cảnh báo rồi nhấn Update/Create Cảnh báo sẽ được gửi về channel/chat Teams của khách hàng: [![file](/img/migrated/image-1750751150232-eeb9cfc1.png)](/img/migrated/image-1750751150232-eeb9cfc1.png)
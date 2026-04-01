---
id: "tao-moi-recipient"
title: "Tạo mới Recipient"
sidebar_label: "Tạo mới Recipient"
sidebar_position: "15"
---

# Create mới Recipient

**Step 1** : Ở menu chọn **Cloud Guard** > **Alert** , mở tab **Recipients** and foṛn **Create Recipient**.
Một hộp thoại mới sẽ hiện lên và hướng dẫn người dùng các bước tiếp theo.
[![file](/img/migrated/image-1725532997863-419e42b8.png)](/img/migrated/image-1725532997863-419e42b8.png)
**Step 2** : Enter the thông tin theo yêu cầu**:**
  * **Name** : Nhập tên người nhận.
  * **Type** : Chọn phương thức gửi cảnh báo. FPT Alert is hỗ trợ the phương thức Email, Telegram, Slack.

**Step 3:** Khai báo **Address** nhận alert corresponding with Type has been chọn, đây là địa chỉ hệ thống sẽ gửi thông báo đến when mức sử dụng của tài nguyên vượt ngưỡng mà người dùng tùy chỉnh when tạo mới Alert.
**Nhận alert qua Email:**
  * **Address** : Nhập địa chỉ email của người nhận.[![Userguide FPT Alert 2022 14](/img/migrated/Userguide-FPT-Alert-2022-14-1024x465-a24c9d90.png)](/img/migrated/Userguide-FPT-Alert-2022-14-1024x465-a24c9d90.png)

**Nhận alert qua Telegram** :
  * **Telegram ID** : Enter Telegram ID of người nhận alert, if chưa có ID can lấy theo hướng dẫn of hệ thống.[![Userguide FPT Alert 2022 15](/img/migrated/Userguide-FPT-Alert-2022-15-1024x490-9d5693fb.png)](/img/migrated/Userguide-FPT-Alert-2022-15-1024x490-9d5693fb.png)

> **Save ý** : Nếu user muốn nhận alert qua Telegram group, cần thực hiện the bước sau:
>   1. Create group, lấy ID of group and tạo recipient corresponding trên Cloud Guard
>   2. Add bot FPT Cloud Guard ando group to nhận alert về nhóm
> 

**Nhận alert qua Slack** :
  * **Slack Channel ID** : Chọn Slack Channel cần nhận alert. Bạn cần đăng nhập ando account **Slack,** chọn **Channel** from danh sách sau that **FPT Portal** will tự động nhận **Slack Channel ID.**[![Userguide FPT Alert 2022 16](/img/migrated/Userguide-FPT-Alert-2022-16-1024x495-7ab818fa.png)](/img/migrated/Userguide-FPT-Alert-2022-16-1024x495-7ab818fa.png)

**Step 4** : Khi has been nhập đầy đủ thông tin, chọn **Create**.
[![Userguide FPT Alert 2022 17](/img/migrated/Userguide-FPT-Alert-2022-17-1024x471-52aac771.png)](/img/migrated/Userguide-FPT-Alert-2022-17-1024x471-52aac771.png)
Hệ thống sẽ kiểm tra tài nguyên, tiến hành xử lý and thông báo xác nhận. Sau when khởi tạo successfully, người dùng can thấy **Recipient** mới and can kiểm tra thông tin trên bảng quản trị.

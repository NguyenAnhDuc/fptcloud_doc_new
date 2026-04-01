---
id: "tao-moi-recipient"
title: "Tạo mới Recipient"
sidebar_label: "Tạo mới Recipient"
sidebar_position: "15"
---

# 新規作成 Recipient

**ステップ1:** Ở menu chọn **Cloud Guard** > **Alert** , mở tab **Recipients** và chọn **Create Recipient**.
Một hộp thoại mới sẽ hiện lên và hướng dẫn người dùng các bước tiếp theo.
[![file](/img/migrated/image-1725532997863-419e42b8.png)](/img/migrated/image-1725532997863-419e42b8.png)
**ステップ2:** Nhập các thông tin theo yêu cầu**:**
  * **Name** : Nhập tên người nhận.
  * **Type** : Chọn phương thức gửi cảnh báo. FPT Alert đang hỗ trợ các phương thức Email, Telegram, Slack.

**ステップ3:** Khai báo **Address** nhận cảnh báo tương ứng với Type đã chọn, đây là địa chỉ hệ thống sẽ gửi thông báo đến khi mức sử dụng của tài nguyên vượt ngưỡng mà người dùng tùy chỉnh khi tạo mới Alert.
**Nhận cảnh báo qua Email:**
  * **Address** : Nhập địa chỉ email của người nhận.[![Userguide FPT Alert 2022 14](/img/migrated/Userguide-FPT-Alert-2022-14-1024x465-a24c9d90.png)](/img/migrated/Userguide-FPT-Alert-2022-14-1024x465-a24c9d90.png)

**Nhận cảnh báo qua Telegram** :
  * **Telegram ID** : Nhập Telegram ID của người nhận cảnh báo, nếu chưa có ID có thể lấy theo hướng dẫn của hệ thống.[![Userguide FPT Alert 2022 15](/img/migrated/Userguide-FPT-Alert-2022-15-1024x490-9d5693fb.png)](/img/migrated/Userguide-FPT-Alert-2022-15-1024x490-9d5693fb.png)

> **Lưu ý** : Nếu người dùng muốn nhận cảnh báo qua Telegram group, cần thực hiện các bước sau:
>   1. Tạo group, lấy ID của group và tạo recipient tương ứng trên Cloud Guard
>   2. Add bot FPT Cloud Guard vào group để nhận cảnh báo về nhóm
> 

**Nhận cảnh báo qua Slack** :
  * **Slack Channel ID** : Chọn Slack Channel cần nhận cảnh báo. Bạn cần đăng nhập vào tài khoản **Slack,** chọn **Channel** từ danh sách sau đó **FPT Portal** sẽ tự động nhận **Slack Channel ID.**[![Userguide FPT Alert 2022 16](/img/migrated/Userguide-FPT-Alert-2022-16-1024x495-7ab818fa.png)](/img/migrated/Userguide-FPT-Alert-2022-16-1024x495-7ab818fa.png)

**ステップ4:** Khi đã nhập đầy đủ thông tin, chọn **Create**.
[![Userguide FPT Alert 2022 17](/img/migrated/Userguide-FPT-Alert-2022-17-1024x471-52aac771.png)](/img/migrated/Userguide-FPT-Alert-2022-17-1024x471-52aac771.png)
Hệ thống sẽ kiểm tra tài nguyên, tiến hành xử lý và thông báo xác nhận. Sau khi khởi tạo thành công, người dùng có thể thấy **Recipient** mới và có thể kiểm tra thông tin trên bảng quản trị.

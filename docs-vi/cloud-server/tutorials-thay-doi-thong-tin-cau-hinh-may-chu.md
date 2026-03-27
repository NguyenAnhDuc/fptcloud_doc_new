---
id: "tutorials-thay-doi-thong-tin-cau-hinh-may-chu"
title: "Thay đổi thông tin, cấu hình máy chủ"
description: "**Resize** là chức năng giúp thay đổi cấu hình Ram-CPU của một máy ảo đã tạo."
sidebar_label: "Thay đổi thông tin, cấu hình máy chủ"
sidebar_position: 17
---

# Tutorials Thay Doi Thong Tin Cau Hinh May Chu

## **1. Resize**
**Resize** là chức năng giúp thay đổi cấu hình Ram-CPU của một máy ảo đã tạo.
Trong quá trình Resize, máy ảo sẽ tạm thời được tắt và tự khởi động lại sau khi quá trình hoàn tất.
Ngoài ra nếu không muốn tắt máy ảo khi Resize trong tương lai, hãy bật tính năng **Hot-add**. Trong trường hợp tính năng **Hot-add** đã được kích hoạt, máy ảo vẫn có thể hoạt động bình thường với cấu hình mới mà không cần thiết phải reboot.
**Bước 1** : Ở menu chọn **Instance Management** , trong phần **Actions** của máy chủ cần thay đổi cấu hình, chọn **Resize VM**.
[![Userguide FPT Cloud Server 2022 41](/img/migrated/Userguide-FPT-Cloud-Server-2022-41-1024x-3163067f.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-41-1024x-3163067f.png)
**Bước 2** : Chọn kích thước mới cho máy ảo, có thể chọn theo template có sẵn hoặc tự chọn cấu hình riêng ở phần **Custom**.
[![Userguide FPT Cloud Server 2022 42](/img/migrated/Userguide-FPT-Cloud-Server-2022-42-6016416a.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-42-6016416a.png)
Sau khi điền thông tin, nhấn **Resize** để xác nhận.
Hệ thống sẽ tiến hành kiểm tra tài nguyên, thay đổi cấu hình máy ảo và thông báo kết quả xử lý
### **2. Rename**
Người dùng có thể đổi tên của máy ảo đã tạo bằng chức năng **Rename**.
**Bước 1** : Ở menu chọn **Instance Management** , trong phần **Actions** của máy chủ cần đổi tên, chọn **Rename**.
[![Userguide FPT Cloud Server 2022 43](/img/migrated/Userguide-FPT-Cloud-Server-2022-43-1024x-f181b90f.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-43-1024x-f181b90f.png)
**Bước 2:** Nhập tên mới cho máy ảo và chọn **Rename.**
[![Userguide FPT Cloud Server 2022 44](/img/migrated/Userguide-FPT-Cloud-Server-2022-44-517e8929.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-44-517e8929.png)
Hệ thống sẽ tiến hành thay đổi tên cho máy ảo và thông báo kết quả xử lý.
## **3. Reset Password**
Với các máy ảo được tạo với phương thức xác thực là **Password** , **FPT Cloud** hỗ trợ người dùng reset lại **Password** cho tài khoản **root** ngay trên **FPT Portal**.
**Bước 1** : Ở menu chọn **Instance Management** , trong phần **Actions** của máy chủ cần thay đổi password chọn **Reset Password**.
[![Userguide FPT Cloud Server 2022 45](/img/migrated/Userguide-FPT-Cloud-Server-2022-45-1024x-17f8c10f.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-45-1024x-17f8c10f.png)
**Bước 2:** Chọn **Reset Password**. Hệ thống sẽ gửi mật khẩu mới về email của người dùng.
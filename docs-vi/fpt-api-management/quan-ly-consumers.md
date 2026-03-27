---
id: "quan-ly-consumers"
title: "Quản lý Consumers"
description: "Sau khi nhà cung cấp public product lên site, phía client chưa thể sử dụng được các API đó, muốn sử dụng được, nhà cung "
sidebar_label: "Quản lý Consumers"
sidebar_position: 9
---

# Quan Ly Consumers

Sau khi nhà cung cấp public product lên site, phía client chưa thể sử dụng được các API đó, muốn sử dụng được, nhà cung cấp phải vào menu Consumer để tạo thông tin của client và chỉ định client đó subscribe một product đã được public trước đó. Khi đó thì client mới sử dụng được API.
## 1. Tạo Consumers mới
**Bước 1:** Ở menu **API Manger** , chọn **Consumers** > **Creat.**
[![Userguide FPT API Management 26](/img/migrated/Userguide-FPT-API-Management-26-1024x538-38542a55.png)](/img/migrated/Userguide-FPT-API-Management-26-1024x538-38542a55.png)
**Bước 2:** Nhập các thông tin theo yêu cầu:
  * **Name:** Tên Consumers.
  * **Site:** Chọn site.
  * **API Key:** Tích chọn xác thực bằng api key hay không.
  * **Title:** Tiêu đề.
  * **Password:** Mật khẩu nếu dùng **Basic Authenticate**.
  * **Confirm password:** Xác nhận lại mật khẩu.
  * **Max per second:** Điền số lần client có thể gọi API trên giây.
  * **Max per minute:** Điền số lần client có thể gọi API trên phút.
  * **Max per hour:** Điền số lần client có thể gọi API trên giờ.

[![Userguide FPT API Management 27](/img/migrated/Userguide-FPT-API-Management-27-1024x538-8505cbdc.png)](/img/migrated/Userguide-FPT-API-Management-27-1024x538-8505cbdc.png)
**Bước 3:** Chọn **OK** để tiến hành tạo.
[![Userguide FPT API Management 28](/img/migrated/Userguide-FPT-API-Management-28-1024x538-29ff8f20.png)](/img/migrated/Userguide-FPT-API-Management-28-1024x538-29ff8f20.png)
## 2. Subscribe product
Sau khi tạo consumer xong, để sử dụng được các API có trong product thì nhà cung cấp phải chỉ định consumer subcribe một product.
**Bước 1:** Ở **Consumer Management** , chọn consumer và click chọn **Product subscription.**
[![Userguide FPT API Management 29](/img/migrated/Userguide-FPT-API-Management-29-1024x538-821efca8.png)](/img/migrated/Userguide-FPT-API-Management-29-1024x538-821efca8.png)
**Bước 2:** Chọn **Subscribe product.**
[![Userguide FPT API Management 30](/img/migrated/Userguide-FPT-API-Management-30-1024x538-a7aedaa1.png)](/img/migrated/Userguide-FPT-API-Management-30-1024x538-a7aedaa1.png)
**Bước 3:** Chọn **Product**.
[![Userguide FPT API Management 31](/img/migrated/Userguide-FPT-API-Management-31-1024x538-85d308c1.png)](/img/migrated/Userguide-FPT-API-Management-31-1024x538-85d308c1.png)
**Bước 4:** Chọn **OK** để lưu.
[![Userguide FPT API Management 32](/img/migrated/Userguide-FPT-API-Management-32-1024x538-401df389.png)](/img/migrated/Userguide-FPT-API-Management-32-1024x538-401df389.png)
Sau khi hoàn tất các bước bên trên, client đã có thể sử dụng các API mà nhà cung cấp đưa ra.
**Lưu ý:** Product cần phải ở trạng thái publish thì consumer mới có thể subcribe.
## 3. Unsubscribe product
**Bước 1:** Ở **Consumer Management** , chọn consumer và click chọn **Product subscription.**
[![Userguide FPT API Management 29](/img/migrated/Userguide-FPT-API-Management-29-1024x538-821efca8.png)](/img/migrated/Userguide-FPT-API-Management-29-1024x538-821efca8.png)
**Bước 2:** Chọn **Unsubscribe product.**
[![Userguide FPT API Management 54](/img/migrated/Userguide-FPT-API-Management-54-1024x538-ae92854b.png)](/img/migrated/Userguide-FPT-API-Management-54-1024x538-ae92854b.png)
**Bước 3:** Chọn **OK** để lưu.
[![Userguide FPT API Management 55](/img/migrated/Userguide-FPT-API-Management-55-16026107.png)](/img/migrated/Userguide-FPT-API-Management-55-16026107.png)
## 4. Thay đổi thông tin Consumer
Để thay đổi thông tin của một **Consumer** , bạn thao tác như sau:
**Bước 1:** Ở **Consumer Management** , chọn **Consumer** cần thay đổi thông tin > Chọn **Edit**.
[![Userguide FPT API Management 56](/img/migrated/Userguide-FPT-API-Management-56-1024x538-cfc6b966.png)](/img/migrated/Userguide-FPT-API-Management-56-1024x538-cfc6b966.png)
**Bước 2:** Nhập các thông tin mới và chọn **OK**.
[![Userguide FPT API Management 57](/img/migrated/Userguide-FPT-API-Management-57-1024x538-7fe0874b.png)](/img/migrated/Userguide-FPT-API-Management-57-1024x538-7fe0874b.png)
**Lưu ý:** Một số trường sẽ không thể thay đổi và sẽ bị disable trên giao diện sửa. Các trường còn lại cần nhập dữ liệu tuân thủ validation tương tự khi tạo **Consumer**.
## 5. Lấy thông tin xác thực của Consumer
Để sử dụng API được tạo từ API Management, admin API cần lấy thông tin xác thực của từng **Consumer** và bàn giao lại cho end user. Hiện tại API Management hỗ trợ 2 phương thức xác thực là Basic Auth (User/Pass) và API Key.
**5.1 Lấy thông tin Username và Password của Basic Auth:**
  * **Username:** Tên user với cấu trúc:

Username = UsernameProvider + tên site + usernameConsumer.
**_Ví dụ:_** _demo123.sitedemo.demoacc_
Hoặc lấy theo hướng dẫn sau:
**Bước 1:** Ở **Consumer Management** , chọn **Consumer** cần lấy Username > Chọn **Edit**.
[![Userguide FPT API Management 58](/img/migrated/Userguide-FPT-API-Management-58-1024x590-c31b656b.png)](/img/migrated/Userguide-FPT-API-Management-58-1024x590-c31b656b.png)
**Bước 2:** Lấy thông tin Username ở trường **Basic Authen User.**
[![Userguide FPT API Management 59](/img/migrated/Userguide-FPT-API-Management-59-1024x590-134f47e5.png)](/img/migrated/Userguide-FPT-API-Management-59-1024x590-134f47e5.png)
  * **Password** : Mật khẩu của user đã khai báo ở bước tạo consumer.

**5.2 Lấy thông tin API Key:**
**Bước 1:** Ở **Consumer Management** , chọn **Consumer** cần lấy API Key > Chọn **Edit**.
[![Userguide FPT API Management 60](/img/migrated/Userguide-FPT-API-Management-60-1024x590-14edb59b.png)](/img/migrated/Userguide-FPT-API-Management-60-1024x590-14edb59b.png)
**Bước 2:** Lấy thông tin API Key ở trường **Api key.**
[![Userguide FPT API Management 61](/img/migrated/Userguide-FPT-API-Management-61-1024x590-bca437e1.png)](/img/migrated/Userguide-FPT-API-Management-61-1024x590-bca437e1.png)
## 6. Xóa Consumer
Để xóa một **Consumer** đã khai báo trước đó khỏi hệ thống, bạn cần đảm bảo **Consumer** đấy đang không subcribe bất cứ Product nào. Để **Unsubscribe Product** , hãy thao tác theo hướng dẫn ở phần **Unsubscribe Product.**
Để xóa **Consumer** , bạn thao tác như sau:
**Bước 1:** Ở **Consumer** **Management** , chọn **Consumer** cần xóa > Chọn **Remove**.
[![Userguide FPT API Management 62](/img/migrated/Userguide-FPT-API-Management-62-1024x538-8c38acd6.png)](/img/migrated/Userguide-FPT-API-Management-62-1024x538-8c38acd6.png)
**Bước 2** : Trong popup xác nhận thông tin, chọn **Yes** để tiến hành xóa.
[![Userguide FPT API Management 55](/img/migrated/Userguide-FPT-API-Management-55-16026107.png)](/img/migrated/Userguide-FPT-API-Management-55-16026107.png)
**Lưu ý:** Nếu gặp lỗi : **Could not remove that consumer as there are still subscriptions of that consumer!**. Bạn cần Unsubscribe toàn bộ Product trước khi thao tác.
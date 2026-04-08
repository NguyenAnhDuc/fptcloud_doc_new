---
id: "notification"
title: Notification
description: "Chức năng **Notification** giúp người dùng cấu hình nhận các thông báo về các sự kiện và trạng thái dịch vụ quan trọng l"
sidebar_label: Notification
sidebar_position: 38
---

# Notification

Chức năng **Notification** giúp người dùng cấu hình nhận các thông báo về các sự kiện và trạng thái dịch vụ quan trọng liên quan đến các cụm cơ sở dữ liệu của mình. Các thông báo này có thể được gửi qua email hoặc kênh bên ngoài như Telegram, giúp bạn kịp thời nắm bắt các tình huống như lịch sao lưu, ngưỡng tài nguyên, mở rộng tài nguyên và các sự kiện quan trọng khác.
Hệ thống hiện hỗ trợ các loại thông báo sau:
  * Thông báo Sao lưu & Khôi phục – bao gồm bật/tắt dịch vụ backup, kết quả thành công/thất bại của job backup và restore.
  * Thông báo Tài nguyên – cảnh báo khi vCPU, RAM hoặc Disk đạt ngưỡng được định trước.
  * Thông báo Mở rộng tài nguyên (Vertical Scaling) – thông báo về các sự kiện tự động tăng CPU/RAM/Disk. 
  * Thông báo bảo trì – thông báo khi FPT có hoạt động bảo trì tác động lên dabatabase cluster. 

Hướng dẫn này giúp bạn thiết lập và quản lý Notification để theo dõi các sự kiện quan trọng trong FPT Database Engine một cách hiệu quả trên FPT Cloud Portal.

## Cấu hình nhận thông báo từ FPT Database Engine
### Bước 1: Truy cập trang thiết lập notification
Đăng nhập vào FPT Cloud Portal. Từ menu chính, chọn "**Database Platform** " → "**All Database** ". Trên trang Database list, chọn Cluster ID của cụm bạn muốn cấu hình thông báo > Chọn tab "**Notification** " để mở màn hình quản lý cấu hình notification.
[![](/img/migrated/notification-scaled-fbca99ff.png)](/img/migrated/notification-scaled-fbca99ff.png)

### Bước 2: Thiết lập danh sách nhận thông báo cho dịch vụ
Nhấn **Add New Alert List** (biểu tượng dấu cộng cạnh **Notification List**) để mở hộp thoại thêm cấu hình nhận thông báo.
[![](/img/migrated/add-alert-scaled-5779954f.png)](/img/migrated/add-alert-scaled-5779954f.png)
Nhập các thông tin cấu hình:
  * **Type** : Chọn hình thức gửi thông báo khi cảnh báo được kích hoạt. Có 2 truỳ chọn: 
    * **Email** : Gửi cảnh báo qua email.
    * **Telegram** : Gửi cảnh báo qua telegram. Hình thức này không hỗ trợ cho dịch vụ "Maintenance".
  * **Current Services Notification** : Chọn dịch vụ sẽ kích hoạt thông báo khi tác vụ hoặc sự kiện tương ứng được thực hiện. Có các lựa chọn: 
    * **Backup** – Thông báo khi chạy backup.
    * **Restore** – Thông báo khi thực hiện restore.
    * **Maintenance** – Thông báo khi hệ thống thực hiện bảo trì dịch vụ.
    * **Resource** – Cảnh báo sử dụng tài nguyên.
    * **Vertical Scaling** – Thông báo khi thay đổi tài nguyên (scale).
  * **Current Recipient List** : Danh sách nhận cảnh báo: 
    * Nếu chọn Type = "Email" -> nhập địa chỉ email sẽ nhận cảnh báo.
    * Nếu chọn Type = "Telegram" -> nhập ID của channel telegram sẽ nhận cảnh báo. Hướng dẫn lấy ID của channel xem tại mục [2. Cấu hình Telegram để nhận thông báo từ FPT Database Engine](/docs/vi/fpt-database-engine/managed-fpt-database-engines-new/)/
  * Điều kiện cảnh báo cho **Current Services Notification** = "Resource": 
    * **vCPU more than (%)** : Nhập ngưỡng sử dụng CPU (theo %). Cảnh báo được kích hoạt khi mức sử dụng vCPU vượt quá giá trị này.
    * **RAM more than (%)** : Nhập ngưỡng sử dụng bộ nhớ (theo %). Cảnh báo được kích hoạt khi RAM vượt quá mức đã cấu hình.
    * **Storage more than (%)** : Nhập ngưỡng sử dụng dung lượng lưu trữ (theo %). Cảnh báo được kích hoạt khi dung lượng sử dụng vượt mức cho phép.
Cảnh báo sẽ được gửi khi ít nhất một điều kiện được thoả mãn. Nếu cả ba điều kiện đều đạt, hệ thống sẽ gửi nhiều thông báo tương ứng. 

Sau khi nhập đầy đủ thông tin nhấn "**Add** " để lưu lại cấu hình.
Tất cả các cảnh báo đã cấu hình sẽ xuất hiện trong **Notification List** trên tab **Notification**. Bạn có thể xem chi tiết người nhận, loại cảnh báo, dịch vụ giám sát và trạng thái (bật/tắt). Có thể thực hiện các thao tác quản lý sau trên một cảnh báo đã cấu hình:
  * Chỉnh sửa cảnh báo – nhấn biểu tượng bút chì bên cạnh alert list để cập nhật người nhận hoặc dịch vụ giám sát.
  * Tắt cảnh báo – vô hiệu hóa tạm thời cảnh báo mà không xóa quy tắc.
  * Bật lại cảnh báo – kích hoạt lại cảnh báo đã tắt trước đó.

**Best Practices:**
  * Cấu hình cảnh báo trước khi bật dịch vụ backup và vertical scaling.
  * Thiết lập ngưỡng hợp lý để tránh spam cảnh báo.
  * Gán thông báo cho đội vận hành và DBA.
  * Kết hợp alert với monitoring dashboard để giám sát toàn diện.

## Cấu hình Telegram để nhận thông báo từ FPT Database Engine
Khi nhận thông báo từ FPT qua Telegram, cần thực hiện nhập ID của channel. Các bước dưới đây hướng dẫn các thao tác cần thực hiện để lấy được ID này.

### Bước 1: Tạo channel trên Telegram
Đăng nhập Telegram, tạo một channel mới dạng Private (ví dụ: FDE Notify) để nhận thông báo từ FPT Database Engine

### Bước 2: Thêm member @fde_notify_bot vào channel vừa tạo
Nhập **@fde_notify_bot** vào ô tìm kiếm member cần thêm vào channel và chọn **FDE NOTIFY** :
[![](/img/migrated/tele_add_noti_bot-scaled-8f932da5.png)](/img/migrated/tele_add_noti_bot-scaled-8f932da5.png)

### Bước 3: Chọn bot @fde_notify_bot làm admin của channel
Đặt **@fde_notify_bot** làm Quản trị viên của kênh vừa tạo để cho phép nó gửi thông báo.
[![](/img/migrated/tele_admin-ab9912a8.png)](/img/migrated/tele_admin-ab9912a8.png)

### Bước 4: Lấy ID của channel vừa tạo
Trên ô Search nhập **@username_to_id_bot** để tìm mã chat IDBot:
[![](/img/migrated/Tele_IDBot-scaled-fab904cb.png)](/img/migrated/Tele_IDBot-scaled-fab904cb.png)
Click vào **IDBot** để mở cửa sổ chat. Nhấn **Start** để bắt đầu. 
Nhấn vào nút mở bảng phím tắt (Keyboard Shortcuts button) và chọn **Channel** :
[![](/img/migrated/tele_channel_select-ad989119.png)](/img/migrated/tele_channel_select-ad989119.png)
Chọn tên channel vừa mới tạo > bấm **Send** để gửi yêu cầu lấy thông tin ID. Telegram sẽ trả về ID của channel. Lưu lại ID này để sử dụng sau này.
[![](/img/migrated/tele_channel_id-431370d0.png)](/img/migrated/tele_channel_id-431370d0.png)

### Bước 5: Khai báo ID của channel FDE Notify vừa tạo vào kênh nhận thông báo trên FPT Console Portal
Thực hiện các thao tác như hướng dẫn ở mục [1. Cấu hình nhận thông báo trên FPT Console Portal](/docs/vi/fpt-database-engine/managed-fpt-database-engines-new/)/. Khi chọn loại thông báo là Telegram, tại bước nhập channel thực hiện copy ID lấy được từ Bước 4 để khai báo.
**Lưu ý** : nếu muốn thêm nhiều channel thì thực hiện tạo nhiều channel trên Telegram như hướng dẫn từ Bước 1 đến Bước 4 để lấy thông tin khai báo.

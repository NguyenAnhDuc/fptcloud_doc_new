---
id: "tao-target"
title: "1. Tạo một Target mới"
sidebar_label: "1. Tạo một Target mới"
sidebar_position: "4"
---

# 1. Tạo a Target mới

**Target** – **Mục tiêu quét** : Là đối tượng is FPT VA rà quét lỗ hổng security, do user tạo and cài đặt trên **FPT Portal**. **Target** can là 1 website, 1 IP public hay 1 dải IP mà user is quản lý.
**Step 1:** Ở menu chọn **Security** > **Cloud VA** , foṛn **Create target**. [![file](/img/migrated/image-1690784417122-8b617f01.bin)](/img/migrated/image-1690784417122-8b617f01.bin)

```
CopyLưu ý: Đối với những Tenant chưa được cấp quyền sử dụng dịch vụ sẽ hiển thị thông báo **You do not have sufficient permissions to view this page!**, hãy chọn đúng Tenant đã được cấp quota để sử dụng dịch vụ.
```

**Step 2:** Cấu hình scan theo nhu cầu bằng theh nhập information ando trường dữ liệu corresponding.  
| **Field**  | **Description**  |  
| --- | --- |  
| **Name**  | Enter tên of mục tiêu quét.  |  
| **Scanning type**  | Chọn loại mục tiêu to thực hiện rà quét  
Website: Create mục tiêu quét là web application to system xác định, đánh giá and report về the lỗ hổng security can tồn tại in a ứng dụng web.  
Network: Create mục tiêu quét là IP or dải IP to system xác định, đánh giá and report về the lỗ hổng security can tồn tại in system network.  |  
| **URL ***  | Enter đường dẫn of web application need to scan  
* Cần nhập if Scanning type là Web application  |  
| **Network auto-scan**  | Enable if muốn thực hiện scan luôn IP of web application  |  
| **IP address**  | Enter IP or dải IP of system network need to scan  
* Cần nhập if Scanning type là Network  |  
| **Scan mode**  | Chọn chế độ quét when scan Network, gồm the loại:  
– Host Discovery: Chỉ quét to phát hiện the thiết bị có in system network  
– Standard Scan: Quét hầu hết the lỗ hổng in network ngoại trừ the lỗ hổng web  
– Deep Scan: Quét tất cả the dạng lỗ hổng, includes cả lỗ hổng web  
– Brute Force Scan: Quét to kiểm tra password yếu and password mặc định  
– Log4Shell Scan: Quét to kiểm tra the lỗ hổng Log4Shell  |  
| **Schedule Scan**  | Configure lịch quét:  
**– Onetime** : Chỉ quét a lần ando thời điểm **Start on** or quét ngay lập tức if chọn **Scan Now**.  
**– Daily** : Định kỳ scan hàng ngày tại thời điểm **Start on**.  
**– Weekly** : Định kỳ scan theo tuần tại thời điểm **Start on** and lặp lại the ngày **Repeat on** in tuần.  
**– Monthly** : Định kỳ scan theo tháng tại thời điểm **Start on** and lặp lại the ngày **Repeat on** in tháng.  |  
| **Start on**  | Thời điểm system bắt đầu scan.  |  
| **Repeat on**  | Ngày system will lặp lại scan in tuần/tháng.  |  
| **Scan Now**  | Scan thêm a lần ở thời điểm tạo, the lần sau scan theo **Schedule Scan.**  |  
| **Notify to**  | Chọn người nhận email notification after system scan successfully mục tiêu has been tạo.  |  
[![file](/img/migrated/image-1690784465895-e0028c0b.bin)](/img/migrated/image-1690784465895-e0028c0b.bin) [![file](/img/migrated/image-1690784498097-f38abd1c.bin)](/img/migrated/image-1690784498097-f38abd1c.bin)
Ngoài ra, user can bật feature Advanced setting to setup quét chuyên sâu hơn.
Trường hợp mục tiêu quét là Web application, cấu hình thêm the trường information sau:  
| **Field**  | **Description**  |  
| --- | --- |  
| **Exclude URLs**  | Danh sách the đường dẫn will bỏ qua in quá trình quét  |  
| **Custom Header**  | Configure tùy chỉnh header to giúp thu thập đường dẫn and rà quét lỗ hổng can thực hiện is in trường hợp need to must đăng nhập and giữ phiên đăng nhập.   
Create mới header bằng theh after đăng nhập ando mục tiêu trên trình duyệt thì lấy tên and giá trị header liên quan đến phiên đăng nhập, sau that đưa ando phần them mới header   
* Hướng dẫn details theh lấy header trang web bên dưới  |  
| **Custom Cookies**  | Configure tùy chỉnh cookie to giúp thu thập đường dẫn and rà quét lỗ hổng can thực hiện is in trường hợp need to must đăng nhập and giữ phiên đăng nhập. Create mới cookie bằng theh after đăng nhập ando mục tiêu trên trình duyệt thì lấy giá trị cookie trên trình duyệt and đưa ando phần thêm mới cookie.  
* Hướng dẫn details theh lấy cookie trang web bên dưới  |  
| **Login using your account**  | Configure đăng nhập sử dụng information account to giúp thu thập đường dẫn and rà quét lỗ hổng in trường hợp need to must đăng nhập and giữ phiên đăng nhập:   
**None** : Không sử dụng feature   
**Basic authentication** : Là cơ chế xác thực đơn giản nhất of a ứng dụng web. Cách hoạt động of Basic Auth là gửi chính username + password of user theo mỗi request.   
**Login form** : Cung cấp information if ứng dụng web sử dụng form đăng nhập.  |  
Trường hợp mục tiêu quét là Network, cấu hình thêm the trường information sau:  
| **Field**  | **Description**  |  
| --- | --- |  
| **Port list**  | Tập the cổng service will kiểm tra  |  
| **Excluded IP**  | Danh sách the IP will bỏ qua in quá trình quét  |  
| **Alive test**  | Phương thức xác định a thiết bị có tồn tại in network hay không  
**Default** : Tự động dò tìm the host is online in network  
**Custom** : Có thể tùy chọn giao thức to tìm kiếm the IP có in network  
**Consider Alive** : Bỏ qua bước tìm the IP có in network and tiếp tục dò quét fromng IP is online  |  
| **Authenticate scan**  | Configure đăng nhập sử dụng information account to giúp thu thập đường dẫn and rà quét lỗ hổng in trường hợp need to must đăng nhập and giữ phiên đăng nhập:  
**None** : Không sử dụng feature  
**SSH** : Giao thức điều whenển from xa for phép user kiểm soát and chỉnh sửa server from xa qua network. Thường dùng for hệ điều hành Linux  
**SMB** : Là a giao thức in hệ điều hành Windows. SMB cung cấp cơ chế to the máy khách (client) can truy cập ando system file server (server), cũng như những thiết bị input/output (ví dụ như máy in)  
**Save ý** : Để system can sử dụng account đăng nhập SMB and rà quét, user need to mở service Remote Registry trên web server.  
* Hướng dẫn mở service Remote Registry trên máy Windows xem details bên dưới  |  
| **Monitor**  | Chức năng monitoring status thiết bị, status cổng service to phát hiện the sự cố bất thường xảy ra in system  |  
[![file](/img/migrated/image-1690785093751-5c01dd76.bin)](/img/migrated/image-1690785093751-5c01dd76.bin)

```
Copy\* Bạn cần chịu toàn bộ trách nhiệm về việc khai báo URL này, hãy đảm bảo chỉ scan các URL thuộc quyền sở hữu của mình.
\*\* Để hệ thống scan được sâu hơn các target cần login, bạn nên khai báo phương thức xác thực phù hợp.
```

[![file](/img/migrated/image-1690785087695-ddeeca40.bin)](/img/migrated/image-1690785087695-ddeeca40.bin)
**Step 3:** Chọn **Create** to khởi tạo. Hệ thống sẽ thông báo xác nhận, kiểm tra tài nguyên and tiến hành xử lý dựa trên the information has been khai báo. [![file](/img/migrated/image-1690785077367-88b11fe4.bin)](/img/migrated/image-1690785077367-88b11fe4.bin)
Sau when khởi tạo successfully, you can thấy target mới tạo trên bảng quản trị. Các **Target** will được displayed đầy đủ information gồm:
  * **Name:** Tên Target.
  * **Scanning type:** Chế độ scan.
  * **Scanning status:** Trạng thái scan gần nhất.
  * **Detected risk:** Số rủi ro phát hiện is ở lần scan gần nhất.
  * **Last scanned:** Thời gian scan gần nhất.

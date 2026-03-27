---
id: "tao-target"
title: "1. Tạo một Target mới"
description: "**Target** – **Mục tiêu quét** : Là đối tượng được FPT VA rà quét lỗ hổng bảo mật, do người dùng tạo và cài đặt trên **F"
sidebar_label: "1. Tạo một Target mới"
sidebar_position: 4
---

# Tao Target

**Target** – **Mục tiêu quét** : Là đối tượng được FPT VA rà quét lỗ hổng bảo mật, do người dùng tạo và cài đặt trên **FPT Portal**. **Target** có thể là 1 website, 1 IP public hay 1 dải IP mà người dùng đang quản lý.
**Bước 1** : Ở menu chọn **Security** > **Cloud VA** , chọn **Create target**. [![file](/img/migrated/image-1690784417122-8b617f01.bin)](/img/migrated/image-1690784417122-8b617f01.bin)

```
CopyLưu ý: Đối với những Tenant chưa được cấp quyền sử dụng dịch vụ sẽ hiển thị thông báo **You do not have sufficient permissions to view this page!**, hãy chọn đúng Tenant đã được cấp quota để sử dụng dịch vụ.
```

**Bước 2** : Cấu hình scan theo nhu cầu bằng cách nhập thông tin vào trường dữ liệu tương ứng.  
| **Field**  | **Description**  |  
| --- | --- |  
| **Name**  | Nhập tên của mục tiêu quét.  |  
| **Scanning type**  | Chọn loại mục tiêu để thực hiện rà quét  
Website: Tạo mục tiêu quét là web application để hệ thống xác định, đánh giá và báo cáo về các lỗ hổng bảo mật có thể tồn tại trong một ứng dụng web.  
Network: Tạo mục tiêu quét là IP hoặc dải IP để hệ thống xác định, đánh giá và báo cáo về các lỗ hổng bảo mật có thể tồn tại trong hệ thống mạng.  |  
| **URL ***  | Nhập đường dẫn của web application cần scan  
* Cần nhập nếu Scanning type là Web application  |  
| **Network auto-scan**  | Bật nếu muốn thực hiện scan luôn IP của web application  |  
| **IP address**  | Nhập IP hoặc dải IP của hệ thống mạng cần scan  
* Cần nhập nếu Scanning type là Network  |  
| **Scan mode**  | Chọn chế độ quét khi scan Network, gồm các loại:  
– Host Discovery: Chỉ quét để phát hiện các thiết bị có trong hệ thống mạng  
– Standard Scan: Quét hầu hết các lỗ hổng trong mạng ngoại trừ các lỗ hổng web  
– Deep Scan: Quét tất cả các dạng lỗ hổng, bao gồm cả lỗ hổng web  
– Brute Force Scan: Quét để kiểm tra mật khẩu yếu và mật khẩu mặc định  
– Log4Shell Scan: Quét để kiểm tra các lỗ hổng Log4Shell  |  
| **Schedule Scan**  | Cấu hình lịch quét:  
**– Onetime** : Chỉ quét một lần vào thời điểm **Start on** hoặc quét ngay lập tức nếu chọn **Scan Now**.  
**– Daily** : Định kỳ scan hàng ngày tại thời điểm **Start on**.  
**– Weekly** : Định kỳ scan theo tuần tại thời điểm **Start on** và lặp lại các ngày **Repeat on** trong tuần.  
**– Monthly** : Định kỳ scan theo tháng tại thời điểm **Start on** và lặp lại các ngày **Repeat on** trong tháng.  |  
| **Start on**  | Thời điểm hệ thống bắt đầu scan.  |  
| **Repeat on**  | Ngày hệ thống sẽ lặp lại scan trong tuần/tháng.  |  
| **Scan Now**  | Scan thêm một lần ở thời điểm tạo, các lần sau scan theo **Schedule Scan.**  |  
| **Notify to**  | Chọn người nhận email thông báo sau khi hệ thống scan thành công mục tiêu đã tạo.  |  
[![file](/img/migrated/image-1690784465895-e0028c0b.bin)](/img/migrated/image-1690784465895-e0028c0b.bin) [![file](/img/migrated/image-1690784498097-f38abd1c.bin)](/img/migrated/image-1690784498097-f38abd1c.bin)
Ngoài ra, người dùng có thể bật tính năng Advanced setting để thiết lập quét chuyên sâu hơn.
Trường hợp mục tiêu quét là Web application, cấu hình thêm các trường thông tin sau:  
| **Field**  | **Description**  |  
| --- | --- |  
| **Exclude URLs**  | Danh sách các đường dẫn sẽ bỏ qua trong quá trình quét  |  
| **Custom Header**  | Cấu hình tùy chỉnh header để giúp thu thập đường dẫn và rà quét lỗ hổng có thể thực hiện được trong trường hợp cần phải đăng nhập và giữ phiên đăng nhập.   
Tạo mới header bằng cách sau khi đăng nhập vào mục tiêu trên trình duyệt thì lấy tên và giá trị header liên quan đến phiên đăng nhập, sau đó đưa vào phần them mới header   
* Hướng dẫn chi tiết cách lấy header trang web bên dưới  |  
| **Custom Cookies**  | Cấu hình tùy chỉnh cookie để giúp thu thập đường dẫn và rà quét lỗ hổng có thể thực hiện được trong trường hợp cần phải đăng nhập và giữ phiên đăng nhập. Tạo mới cookie bằng cách sau khi đăng nhập vào mục tiêu trên trình duyệt thì lấy giá trị cookie trên trình duyệt và đưa vào phần thêm mới cookie.  
* Hướng dẫn chi tiết cách lấy cookie trang web bên dưới  |  
| **Login using your account**  | Cấu hình đăng nhập sử dụng thông tin tài khoản để giúp thu thập đường dẫn và rà quét lỗ hổng trong trường hợp cần phải đăng nhập và giữ phiên đăng nhập:   
**None** : Không sử dụng tính năng   
**Basic authentication** : Là cơ chế xác thực đơn giản nhất của một ứng dụng web. Cách hoạt động của Basic Auth là gửi chính username + password của người dùng theo mỗi request.   
**Login form** : Cung cấp thông tin nếu ứng dụng web sử dụng form đăng nhập.  |  
Trường hợp mục tiêu quét là Network, cấu hình thêm các trường thông tin sau:  
| **Field**  | **Description**  |  
| --- | --- |  
| **Port list**  | Tập các cổng dịch vụ sẽ kiểm tra  |  
| **Excluded IP**  | Danh sách các IP sẽ bỏ qua trong quá trình quét  |  
| **Alive test**  | Phương thức xác định một thiết bị có tồn tại trong mạng hay không  
**Default** : Tự động dò tìm các host đang online trong mạng  
**Custom** : Có thể tùy chọn giao thức để tìm kiếm các IP có trong mạng  
**Consider Alive** : Bỏ qua bước tìm các IP có trong mạng và tiếp tục dò quét từng IP đang online  |  
| **Authenticate scan**  | Cấu hình đăng nhập sử dụng thông tin tài khoản để giúp thu thập đường dẫn và rà quét lỗ hổng trong trường hợp cần phải đăng nhập và giữ phiên đăng nhập:  
**None** : Không sử dụng tính năng  
**SSH** : Giao thức điều khiển từ xa cho phép người dùng kiểm soát và chỉnh sửa server từ xa qua mạng. Thường dùng cho hệ điều hành Linux  
**SMB** : Là một giao thức trong hệ điều hành Windows. SMB cung cấp cơ chế để các máy khách (client) có thể truy cập vào hệ thống file máy chủ (server), cũng như những thiết bị input/output (ví dụ như máy in)  
**Lưu ý** : Để hệ thống có thể sử dụng tài khoản đăng nhập SMB và rà quét, người dùng cần mở dịch vụ Remote Registry trên web server.  
* Hướng dẫn mở dịch vụ Remote Registry trên máy Windows xem chi tiết bên dưới  |  
| **Monitor**  | Chức năng giám sát trạng thái thiết bị, trạng thái cổng dịch vụ để phát hiện các sự cố bất thường xảy ra trong hệ thống  |  
[![file](/img/migrated/image-1690785093751-5c01dd76.bin)](/img/migrated/image-1690785093751-5c01dd76.bin)

```
Copy\* Bạn cần chịu toàn bộ trách nhiệm về việc khai báo URL này, hãy đảm bảo chỉ scan các URL thuộc quyền sở hữu của mình.
\*\* Để hệ thống scan được sâu hơn các target cần login, bạn nên khai báo phương thức xác thực phù hợp.
```

[![file](/img/migrated/image-1690785087695-ddeeca40.bin)](/img/migrated/image-1690785087695-ddeeca40.bin)
**Bước 3** : Chọn **Create** để khởi tạo. Hệ thống sẽ thông báo xác nhận, kiểm tra tài nguyên và tiến hành xử lý dựa trên các thông tin đã khai báo. [![file](/img/migrated/image-1690785077367-88b11fe4.bin)](/img/migrated/image-1690785077367-88b11fe4.bin)
Sau khi khởi tạo thành công, bạn có thể thấy target mới tạo trên bảng quản trị. Các **Target** sẽ được hiển thị đầy đủ thông tin gồm:
  * **Name:** Tên Target.
  * **Scanning type:** Chế độ scan.
  * **Scanning status:** Trạng thái scan gần nhất.
  * **Detected risk:** Số rủi ro phát hiện được ở lần scan gần nhất.
  * **Last scanned:** Thời gian scan gần nhất.
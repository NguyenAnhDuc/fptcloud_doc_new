---
id: "tutorials-su-dung-object-storage-tren-s3-client"
title: "Sử dụng Object Storage trên S3 Browser"
description: "Ngoài việc sử dụng trực tiếp trên FPT Portal, bạn có thể đăng nhập và sử dụng trên tất cả các S3-SDK hoặc S3-Client khác"
sidebar_label: "Sử dụng Object Storage trên S3 Browser"
sidebar_position: 11
---

# Tutorials Su Dung Object Storage Tren S3 Client

Ngoài việc sử dụng trực tiếp trên FPT Portal, bạn có thể đăng nhập và sử dụng trên tất cả các S3-SDK hoặc S3-Client khác theo chuẩn AWS S3.
Dưới đây là hướng dẫn sử dụng trên **S3 Browser** , một client cơ bản với GUI trực quan, dễ dàng tiếp cận nhất. FPT Cloud khuyến khích bạn nên sử dụng ứng dụng này vì nó là phần mềm miễn phí, phổ biến và hỗ trợ đầy đủ chức năng.
Tải và cài đặt S3 Brower tại: <https://s3browser.com/download.aspx>
Các thông tin cần để đăng nhập trên **S3 Browser** :  
| Thông tin đăng nhập  | Ví dụ  |  
| --- | --- |  
| Account Name  | Tên người dùng (Có thể chọn tên tùy chọn bất kỳ)  |  
| Account Type  | S3 Compatible Storage  |  
| REST Endpoint  | Lấy ở FPT Portal với phương thức ENDPOINT HTTPS  |  
| Access Key  | Admin Access Key hoặc SubUser Access Key  |  
| Secret Access Key  | Admin Secret Key hoặc SubUser Secret Key  |  

## Đăng nhập tài khoản FPT Object Storage trên S3 Browser
**Bước 1:** Ở giao diện của ứng dụng **S3 Browser** , chọn menu **Accounts** , chọn **Add new account.**
[![User guide FPT Object Storage 16](/img/migrated/User-guide-FPT-Object-Storage-16-5946a0ca.png)](/img/migrated/User-guide-FPT-Object-Storage-16-5946a0ca.png) **Bước 2:** Nhập các thông tin đã chuẩn bị vào popup **Add New Account**. Chọn **Add new account**.
[![User guide FPT Object Storage 17](/img/migrated/User-guide-FPT-Object-Storage-17-ebb112ea.png)](/img/migrated/User-guide-FPT-Object-Storage-17-ebb112ea.png)
Sau khi kết nối thành công ứng dụng sẽ hiển thị danh sách toàn bộ **Bucket** trong Storage của bạn.
[![User guide FPT Object Storage 18](/img/migrated/User-guide-FPT-Object-Storage-18-d232f82d.png)](/img/migrated/User-guide-FPT-Object-Storage-18-d232f82d.png)

## Tạo Bucket mới
**Bước 1** : Ở giao diện **S3 Browser** , chọn **New bucket.**
[![User guide FPT Object Storage 19](/img/migrated/User-guide-FPT-Object-Storage-19-6d6ada0b.png)](/img/migrated/User-guide-FPT-Object-Storage-19-6d6ada0b.png)
**Bước 2:** Nhập tên bucket mới và chọn **Create new bucket**.
[![User guide FPT Object Storage 20](/img/migrated/User-guide-FPT-Object-Storage-20-8b2e049c.png)](/img/migrated/User-guide-FPT-Object-Storage-20-8b2e049c.png)

## Upload File/Folder vào bucket
**Bước 1** : Di chuyển đến vị trị cần upload File/Folder và chọn **Upload**.
[![User guide FPT Object Storage 21](/img/migrated/User-guide-FPT-Object-Storage-21-b64dc351.png)](/img/migrated/User-guide-FPT-Object-Storage-21-b64dc351.png)
**Bước 2:** Chọn tùy chọn **Upload file** hoặc **Upload folder**.
[![User guide FPT Object Storage 22](/img/migrated/User-guide-FPT-Object-Storage-22-ee46882a.png)](/img/migrated/User-guide-FPT-Object-Storage-22-ee46882a.png)
**Bước 3:** Chọn File/Folder từ local để tiến hành upload lên S3 bucket.
[![User guide FPT Object Storage 23](/img/migrated/User-guide-FPT-Object-Storage-23-715159a2.png)](/img/migrated/User-guide-FPT-Object-Storage-23-715159a2.png)
Sau khi upload thành công, File/Folder sẽ được hiển thị trên **S3 Browser**.
[![User guide FPT Object Storage 24](/img/migrated/User-guide-FPT-Object-Storage-24-11eea5f0.png)](/img/migrated/User-guide-FPT-Object-Storage-24-11eea5f0.png)

## Download File/Folder từ bucket
**Bước 1:** Chọn File/Folder cần download trên danh sách, chọn **Download**.
[![User guide FPT Object Storage 25](/img/migrated/User-guide-FPT-Object-Storage-25-bc174a18.png)](/img/migrated/User-guide-FPT-Object-Storage-25-bc174a18.png)
**Bước 2:** Chọn thư mục ở máy local để lưu **File/Folder** tải về từ S3 bucket > Chọn **Select Folder** để xác nhận.
[![User guide FPT Object Storage 26](/img/migrated/User-guide-FPT-Object-Storage-26-dbef0261.png)](/img/migrated/User-guide-FPT-Object-Storage-26-dbef0261.png)

## Bật tính năng versioning cho bucket
**Versioning** là tính năng giúp lưu và quản lý nhiều biến thể (phiên bản) của cùng một đối tượng trên **FPT Object Storage**. Bạn có thể sử dụng tính năng **Versioning** để lưu trữ, truy xuất và khôi phục mọi phiên bản của mọi đối tượng được lưu trữ trong bucket của bạn.
Để bật tính năng này cho bucket bạn thao tác như sau:
**Bước 1:** Trên giao diện **S3 Browser** , chọn bucket muốn enable tính năng **Versioning** > Chọn **Edit Versioning Settings.**
[![User guide FPT Object Storage 27](/img/migrated/User-guide-FPT-Object-Storage-27-29308078.png)](/img/migrated/User-guide-FPT-Object-Storage-27-29308078.png)
**Bước 2:** Tick chọn **Enable versioning for new-bucket** và chọn **OK** để lưu cài đặt.
[![User guide FPT Object Storage 28](/img/migrated/User-guide-FPT-Object-Storage-28-2a0c389a.png)](/img/migrated/User-guide-FPT-Object-Storage-28-2a0c389a.png)

## Khôi phục lại file đã xóa
Sau khi bật tính năng **Versioning** , mọi thao tác khiến file có sự thay đổi đều sẽ được lưu trữ lại và đánh số. Kể cả thao tác **Xóa**. Nếu bạn muốn khôi phục lại file chỉ cần loại bỏ phiên bản được đánh dấu **Xóa** trên list **Version** là được. File sẽ được rollback về phiên bản bình thường trước khi xóa.
Để thực hiện khôi phục file đã xóa bạn thao tác theo ví dụ sau:
Đầu tiên bạn cần upload một file bất kỳ lên bucket đã bật tính năng **Versioning** sau đó chọn **Delete** để xóa nó.
Lúc này ở tab Versions bạn sẽ thấy version mới nhất được đánh dấu **(delete)**. Bạn chọn version đấy và chọn **Delete.**
[![User guide FPT Object Storage 29](/img/migrated/User-guide-FPT-Object-Storage-29-6f9195da.png)](/img/migrated/User-guide-FPT-Object-Storage-29-6f9195da.png)
File đã được khôi phục trở lại.
[![User guide FPT Object Storage 30](/img/migrated/User-guide-FPT-Object-Storage-30-3bc28457.png)](/img/migrated/User-guide-FPT-Object-Storage-30-3bc28457.png)

## Download version cũ của file
Nếu đã bật **Versioning** , bạn có thể download các phiên bản cũ hơn của file theo hướng dẫn sau:
**Bước 1** : Trên giao diện **S3 Browser** , chọn file cần download các phiên bản cũ.
**Bước 2** : Mở tab **Versions** , chọn đến phiên bản cần download.
**Bước 3** : Chọn **Download** , sau đó chọn vị trí sẽ lưu file trên local và chọn **Select Folder**.

## Thiết lập tính năng bucket lifecycle
Chức năng **Bucket Lifecycle** sẽ giúp bạn tự động xóa 1 file, 1 nhóm file hoặc các version của file khỏi **Storage** sau một thời gian nhất định. Việc xóa các file hoặc version không cần thiết sẽ giúp bạn tiết kiệm được rất nhiều tài nguyên và chi phí cho **Storage**.
Để bật chức năng **Bucket Lifecycle** bạn thao tác như sau:
**Bước 1:** Trên giao diện **S3 Browser** , chọn bucket muốn enable tính năng **Bucket Lifecycle** > Chọn **Lifecycle Configuration.**
[![User guide FPT Object Storage 31](/img/migrated/User-guide-FPT-Object-Storage-31-efabe217.png)](/img/migrated/User-guide-FPT-Object-Storage-31-efabe217.png)
**Bước 2:** Chọn **Add** ở popup **Bucket Lifecycle Rules** để thêm Rule mới:
[![User guide FPT Object Storage 32](/img/migrated/User-guide-FPT-Object-Storage-32-1024x69-2cf67180.png)](/img/migrated/User-guide-FPT-Object-Storage-32-1024x69-2cf67180.png)
**Bước 3:** Tại popup **Add New Lifecycle Rule** bạn cần quan tâm đến 2 tab:
  * **Action for current versions:** Thêm hành động sẽ tác động đến version hiện tại của file.
  * **Action for noncurrent versions:** Thêm hành động sẽ tác động đến các version cũ của file.

Tùy vào nhu cầu mà bạn mở tab tương ứng, tiếp theo chọn **Permanently delete files** ở phần **Expiration.**
[![User guide FPT Object Storage 33](/img/migrated/User-guide-FPT-Object-Storage-33-57db54f0.png)](/img/migrated/User-guide-FPT-Object-Storage-33-57db54f0.png)
**Bước 3:** Chọn chế độ xóa:
  * **After specific number of days after creation:** Các file sẽ bị xóa sau một số ngày nhất định.
  * **On a particular date (UTC Midnight**): Các file sẽ bị xóa tại ngày cụ thể (Tính theo thời gian UTC).[![User guide FPT Object Storage 34](/img/migrated/User-guide-FPT-Object-Storage-34-b83c13b0.png)](/img/migrated/User-guide-FPT-Object-Storage-34-b83c13b0.png)

**Bước 4:** Nhập số lượng ngày hoặc ngày cụ thể tùy theo chế độ xóa và chọn **Add new rule**.
[![User guide FPT Object Storage 35](/img/migrated/User-guide-FPT-Object-Storage-35-f158dc30.png)](/img/migrated/User-guide-FPT-Object-Storage-35-f158dc30.png)
**Bước 5:** Thêm các rule khác tương tự. Sau khi đã thiết lập xong toàn bộ rule bạn chọn **Save.**
[![User guide FPT Object Storage 36](/img/migrated/User-guide-FPT-Object-Storage-36-1024x47-8379d63a.png)](/img/migrated/User-guide-FPT-Object-Storage-36-1024x47-8379d63a.png)

## Thiết lập tính năng bucket ACL
**Bucket ACL** (Access control list) là tính năng giúp bạn quản lý quyền truy cập vào nhóm và các đối tượng.
[![User guide FPT Object Storage 37](/img/migrated/User-guide-FPT-Object-Storage-37-51971e9e.png)](/img/migrated/User-guide-FPT-Object-Storage-37-51971e9e.png)
**Bucket ACL** hỗ trợ 3 dạng user cơ bản với các quyền Full Control, Read, Write, Read Permissions và Write Permissions. Khách hàng có thể thao tác nhanh bằng cách chọn một trong hai dạng ACL:
  * **Make public** : Tất cả người dùng đều có thể truy cập vào bucket với quyền Read.
  * **Make private** : Chỉ có owner có thể thao tác với bucket.[![User guide FPT Object Storage 38](/img/migrated/User-guide-FPT-Object-Storage-38-c1590c92.png)](/img/migrated/User-guide-FPT-Object-Storage-38-c1590c92.png)

## Sử dụng bucket để làm Static website
Tính năng sử dụng bucket để làm static website cho phép người dùng tạo một website tĩnh, có thể public ra Internet và được truy cập bằng **S3 WEBSITE ENDPOINT**.

**Bước 1:** Khách hàng upload toàn bộ source website lên S3 bucket.
[![User guide FPT Object Storage 39](/img/migrated/User-guide-FPT-Object-Storage-39-abc69018.png)](/img/migrated/User-guide-FPT-Object-Storage-39-abc69018.png)
**Bước 2:** Chọn bucket muốn đặt làm Static website > Chọn **Edit Website Configuration.**
[![User guide FPT Object Storage 40](/img/migrated/User-guide-FPT-Object-Storage-40-2ed8a153.png)](/img/migrated/User-guide-FPT-Object-Storage-40-2ed8a153.png)
**Bước 3:** Chọn **Enable static website hosting** > Chọn **Index document** và **Error document** tương ứng trên source đã upload lên bucket.
[![User guide FPT Object Storage 41](/img/migrated/User-guide-FPT-Object-Storage-41-a3d5f504.png)](/img/migrated/User-guide-FPT-Object-Storage-41-a3d5f504.png)
**Bước 4:** Chọn **Permissions** > Thiết lập quyền Read cho tất cả user đối với bucket.
[![User guide FPT Object Storage 42](/img/migrated/User-guide-FPT-Object-Storage-42-3a759306.png)](/img/migrated/User-guide-FPT-Object-Storage-42-3a759306.png)
**Bước 5:** Truy cập vào static web theo link S3 WEBSITE ENDPOINT được cung cấp ở phần **Endpoint** trên **Object Storage Management.**

## Tạo public link trong khoảng thời gian xác định
Tính năng tạo public link trong khoảng thời gian xác định cho phép public source web lưu trữ trong bucket. Thông thường có thể được sử dụng trong trường hợp kiểm thử source web hoặc demo.
**Lưu ý:** Tính năng tạo public link trong khoảng thời gian xác định yêu cầu sử dụng S3 Browser Pro.
**Bước 1:** Chọn file html trong bucket > Chọn **Generate Web URL.**
[![User guide FPT Object Storage 43](/img/migrated/User-guide-FPT-Object-Storage-43-c32fd309.png)](/img/migrated/User-guide-FPT-Object-Storage-43-c32fd309.png)
**Bước 2:** Chọn một trong hai kiểu expire theo phút hoặc expire theo thời gian cụ thể (ngày-tháng-năm-giờ-phút-giây) > Copy và truy cập vào link.
[![User guide FPT Object Storage 44](/img/migrated/User-guide-FPT-Object-Storage-44-205184e3.png)](/img/migrated/User-guide-FPT-Object-Storage-44-205184e3.png)
[![User guide FPT Object Storage 45](/img/migrated/User-guide-FPT-Object-Storage-45-1024x53-08b2a3af.png)](/img/migrated/User-guide-FPT-Object-Storage-45-1024x53-08b2a3af.png)
Khách hàng có thể kiểm tra sau thời gian expire thì link sẽ hết khả năng truy cập được.
[![User guide FPT Object Storage 46](/img/migrated/User-guide-FPT-Object-Storage-46-1024x53-0ae51a51.png)](/img/migrated/User-guide-FPT-Object-Storage-46-1024x53-0ae51a51.png)

## CORS (Cross Origin Resource Sharing)
**Bước 1:** Truy cập vào **CORS Configuration** trên **S3 Browser**.
[![User guide FPT Object Storage 47](/img/migrated/User-guide-FPT-Object-Storage-47-cec0f611.png)](/img/migrated/User-guide-FPT-Object-Storage-47-cec0f611.png)
**Bước 2:** Gán **CORS Configuration Rule** dưới dạng XML > Chọn **Apply.**

```
Copy
   http://www.example.com
   PUT
   POST
   DELETE
   *

   *
   GET

```

[![User guide FPT Object Storage 48](/img/migrated/User-guide-FPT-Object-Storage-48-99ddaff0.png)](/img/migrated/User-guide-FPT-Object-Storage-48-99ddaff0.png)

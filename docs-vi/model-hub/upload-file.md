---
id: "upload-file"
title: "Mục đích: Tải lên bổ sung tệp ở tất cả các định dạng"
description: "Mục đích: Tải lên bổ sung tệp ở tất cả các định dạng"
sidebar_label: "Mục đích: Tải lên bổ sung tệp ở tất cả các định dạng"
sidebar_position: 12
---

# Upload File

Mục đích: Tải lên bổ sung tệp ở tất cả các định dạng 
Các bước thực hiện: 
Bước 1: Click vào 1 model để xem chi tiết > Chọn tab Version 
Bước 2: Click vào dấu 3 chấm cột Action > Chọn Upload
[![](/img/migrated/Picture20-1fbfb321.png)](/img/migrated/Picture20-1fbfb321.png)
Bước 3: Sinh ra thông tin để upload file qua CLI. 
[![](/img/migrated/anh-2-0bfbc3c3.png)](/img/migrated/anh-2-0bfbc3c3.png) Bước 4: Người dùng cần vào menu Configuration để lấy các thông tin Access/Secret key để upload file [![](/img/migrated/anh-3-dc5c31ee.png)](/img/migrated/anh-3-dc5c31ee.png) [![](/img/migrated/anh-4-1295fdc8.png)](/img/migrated/anh-4-1295fdc8.png)
Ví dụ dùng tool S3 Client là WinSCP để upload file, bạn thao tác như sau: 
Bước 1: Cài WinSCP và mở WinSCP 
Bước 2: Nhập các thông tin để login vào WinSCP như sau: 
[![](/img/migrated/Picture22-c505575f.png)](/img/migrated/Picture22-c505575f.png)
  * File protocol: chọn là Amazon S3 
  * Encryption: chọn TLS/SSL Implicit encryption 
  * Các trường Host name, Access key ID, Secret access key bạn thao tác như hướng dẫn bên dưới 
  * Port: 443 

[![](/img/migrated/Screenshot_19-91b976ba.png)](/img/migrated/Screenshot_19-91b976ba.png)
Sau khi login vào WinSCP thành công, bạn có thể thực hiện upload file, quản lí tệp lưu trữ trong model ngay trên đây. 
Trên portal, sau khi tải lên từ S3 Client, các file sẽ hiển thị tương ứng với từng version trong tab File Browser 
Người dùng chuyển sang tab File Browser và chọn version tương ứng để view, download file, delete file. 
[![](/img/migrated/Picture24-50266ec8.png)](/img/migrated/Picture24-50266ec8.png)

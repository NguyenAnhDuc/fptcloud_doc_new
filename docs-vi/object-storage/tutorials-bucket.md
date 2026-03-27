---
id: "tutorials-bucket"
title: "Thêm thư mục mới trong Bucket"
description: "**Bucket** là một đơn vị lưu trữ mang tính logical trên FPT Object Storage, là một vùng chứa các đối tượng (objects), ch"
sidebar_label: "Thêm thư mục mới trong Bucket"
sidebar_position: 4
---

# Tutorials Bucket

**Bucket** là một đơn vị lưu trữ mang tính logical trên FPT Object Storage, là một vùng chứa các đối tượng (objects), chẳng hạn như file dữ liệu, ảnh, video, hoặc các tài liệu khác mà người dùng upload lên. Để xem danh sách các bucket, truy cập [Object Storage Management](https://console.fptcloud.com/), chọn Project cần sử dụng và chọn tab **Buckets**.
  * **Tạo nhiều bucket:** Mỗi tài khoản FPT Object Storage có thể tạo nhiều bucket, giúp bạn tổ chức dữ liệu theo cách bạn muốn.
  * **Cấu hình ACL và set quyền truy cập:** Mỗi bucket có thể có các cấu hình khác nhau về ACL (Access Control List) và quyền truy cập, cho phép bạn kiểm soát ai có thể truy cập và thực hiện các thao tác trên dữ liệu của bạn.
  * **Không giới hạn loại file:** Bạn có thể tải lên bất kỳ loại file nào lên các bucket trong FPT Object Storage mà không bị giới hạn.

## Tạo Bucket
**Bước 1:** Truy cập **Object Storage Management** tại [https://console.fptcloud.com](https://console.fptcloud.com/) và chọn tab **Buckets**.
**Bước 2:** Chọn **Create Bucket**.
**Bước 3:** Nhập tên **Bucket** mới, chọn **Region** từ danh sách. Trong phần **Advanced setting** , người dùng có thể:
  * Chọn **Bucket ACL:** **Public/ Private** để quản lý quyền truy cập.
  * Chọn **Bucket Versioning:** **Disable/ Enable** để quản lý các phiên bản của object.

**Bước 4:** Sau khi hoàn thành, bucket mới sẽ hiển thị trong **Object Storage Management**.
## Xóa Bucket
**Lưu ý:** Thao tác xóa bucket sẽ xóa toàn bộ các object bên trong và không thể phục hồi.
**Bước 1:** Truy cập **Object Storage Management** , chọn tab **Buckets**.
**Bước 2:** Trong phần **Action** của bucket cần xóa, chọn **Delete**.
**Bước 3:** Xác nhận thao tác xóa trong hộp thoại cảnh báo.
## Empty Bucket
Tính năng Empty Bucket giúp bạn xóa toàn bộ dữ liệu của bucket. Các thông tin cấu hình sẽ được giữ nguyên ví dụ như Permission, Policy,…

```
CopyLưu ý: Thời gian xử lý sẽ phụ thuộc vào số lượng object. Hãy cân nhắc dùng tính năng Delete Bucket nếu bucket của bạn có trên 1000 object.

```

  * Chọn action **Empty Bucket**.
  * Xác nhận thao tác xóa trong popup cảnh báo.

## Thêm thư mục mới trong Bucket
Trong mô hình Object Storage phi cấu trúc nói chung và FPT Object Storage nói riêng, không có khái niệm **Folder** như chúng ta thường sử dụng. Thay vào đó, chỉ có khái niệm **Bucket** và **Object**. Tuy nhiên FPT Portal sẽ hiển thị theo cấu trúc thư mục để người dùng dễ sử dụng. Các object cùng chung path sẽ được gom nhóm thành một folder.
Ví dụ bạn có 2 object có path là **bucket_name/folder-1/object-1.txt** và **bucket_name/folder-1/object-2.txt** , FPT Portal sẽ hiển thị **object-1.txt** và **object-2.txt** ở trong thư mục **folder-1**.
Để tạo một folder mới, bạn hãy thao tác như sau:
  * Truy cập **Object Storage Management**.
  * Di chuyển đến vị trí cần thêm thư mục và chọn **New folder**.
  * Nhập tên thư mục mới và chọn **Create**.

## Tìm kiếm Bucket
Sử dụng chức năng tìm kiếm theo tên bucket.
Nhập nội dung cần tìm vào ô **Search** và bấm **Enter**.
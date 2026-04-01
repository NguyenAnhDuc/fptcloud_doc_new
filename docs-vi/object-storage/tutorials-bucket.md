---
id: "tutorials-bucket"
title: "Quản lý bucket"
description: "Hướng dẫn tạo, xóa, làm rỗng bucket và thêm thư mục trong FPT Object Storage."
sidebar_label: "Quản lý bucket"
sidebar_position: 4
---

# Quản lý bucket

**Bucket** là một đơn vị lưu trữ mang tính logical trên FPT Object Storage, dùng để chứa các object như file dữ liệu, ảnh, video và tài liệu. Để xem danh sách các bucket, truy cập [Object Storage Management](https://console.fptcloud.com/), chọn Project và chọn tab **Buckets**.

- **Tạo nhiều bucket:** Mỗi tài khoản FPT Object Storage có thể tạo nhiều bucket để tổ chức dữ liệu theo nhu cầu.
- **Cấu hình ACL và quyền truy cập:** Mỗi bucket có thể có cấu hình ACL (Access Control List) riêng để kiểm soát quyền truy cập.
- **Không giới hạn loại file:** Bạn có thể tải lên bất kỳ loại file nào mà không bị giới hạn.

## Tạo bucket

1. Truy cập **Object Storage Management** tại [https://console.fptcloud.com](https://console.fptcloud.com) và chọn tab **Buckets**.
2. Nhấn **Create Bucket**.
3. Nhập tên **Bucket** mới và chọn **Region** từ danh sách. Trong phần **Advanced setting**, bạn có thể:
   - Chọn **Bucket ACL**: **Public** hoặc **Private** để quản lý quyền truy cập.
   - Chọn **Bucket Versioning**: **Disable** hoặc **Enable** để quản lý các phiên bản của object.
4. Sau khi hoàn thành, bucket mới sẽ hiển thị trong **Object Storage Management**.

## Xóa bucket

:::warning
Thao tác xóa bucket sẽ xóa toàn bộ các object bên trong và không thể phục hồi.
:::

1. Truy cập **Object Storage Management**, chọn tab **Buckets**.
2. Trong phần **Action** của bucket cần xóa, chọn **Delete**.
3. Xác nhận thao tác xóa trong hộp thoại cảnh báo.

## Empty bucket

Tính năng Empty Bucket giúp xóa toàn bộ dữ liệu của bucket trong khi giữ nguyên các thông tin cấu hình như Permission, Policy.

:::note
Thời gian xử lý phụ thuộc vào số lượng object. Hãy cân nhắc dùng tính năng Delete Bucket nếu bucket có trên 1000 object.
:::

1. Chọn action **Empty Bucket**.
2. Xác nhận thao tác xóa trong popup cảnh báo.

## Thêm thư mục mới trong bucket

Trong mô hình Object Storage phi cấu trúc, không có khái niệm **Folder** như truyền thống. Thay vào đó chỉ có **Bucket** và **Object**. Tuy nhiên FPT Portal hiển thị theo cấu trúc thư mục để dễ sử dụng — các object cùng path sẽ được gom nhóm thành một folder.

Ví dụ, nếu có 2 object với path **bucket_name/folder-1/object-1.txt** và **bucket_name/folder-1/object-2.txt**, FPT Portal sẽ hiển thị chúng trong thư mục **folder-1**.

1. Truy cập **Object Storage Management**.
2. Di chuyển đến vị trí cần thêm thư mục và chọn **New folder**.
3. Nhập tên thư mục mới và chọn **Create**.

## Tìm kiếm bucket

1. Nhập nội dung cần tìm vào ô **Search**.
2. Nhấn **Enter** để tìm kiếm theo tên bucket.

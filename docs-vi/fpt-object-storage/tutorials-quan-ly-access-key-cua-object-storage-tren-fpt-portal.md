---
id: "tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal"
title: "Quản lý Access Key"
description: "Cặp Access Key và Private Key là phương thức xác thực cơ bản của dịch vụ FPT Object Storage. Để sử dụng bucket thông qua"
sidebar_label: "Quản lý Access Key"
sidebar_position: 9
---

# Tutorials Quan Ly Access Key Cua Object Storage Tren Fpt Portal

Cặp Access Key và Private Key là phương thức xác thực cơ bản của dịch vụ FPT Object Storage. Để sử dụng bucket thông qua các phương thức khác Portal như SDK, API, S3 Client. Bạn cần có các thông tin sau:
  * Access Key
  * Private Key
  * Endpoint
  * Region (optional)

Các thông tin này trên sẽ được cung cấp đầy đủ trên FPT Unify Portal.
Hãy lưu trữ cẩn thận thông tin này. Access Key được tạo ra ở tab Access Key đều là key với quyền Admin, vì vậy bạn có thể sẽ mất toàn bộ dữ liệu trong các bucket nếu thông tin này lộ lọt ra ngoài. Trong trường hợp cần share quyền sử dụng bucket cho nhiều người, hoặc lưu trữ key ở ứng dụng không an toàn, hãy tạo các SubUser với quyền truy cập giới hạn và sử dụng SubUser Access Key.
Nếu phát hiện bị lộ key hãy truy cập FPT Portal và xóa key đấy ngay lập tức tránh phát sinh các rủi ro khác.

## Tạo Admin Access Key
Hiện tại mỗi tài khoản chỉ được tạo tối đa 5 cặp Admin Access Key tại một region. Nếu muốn sử dụng nhiều hơn 5 cặp key, hãy tạo thêm các SubUser.
Vì lý do bảo mật, Secret Key chỉ được hiển thị một lần duy nhất ở bước tạo. Hãy lưu trữ cẩn thận ở nơi an toàn tránh tính trạng mất quyền truy cập vào bucket.
  1. Truy cập menu **Object Storage** → chọn tab **Access Key** → chọn **Region**.
  2. Nhấn nút **Generate Key**.
  3. Hệ thống tạo ra một cặp **Access Key** và **Secret Key**.
  4. **Sao chép và lưu trữ** key ở nơi an toàn, sau đó nhấn **Confirm Access Key** để hoàn tất.

* * *

## Xoá Access Key
Sau khi xóa, tất cả các ứng dụng hoặc client đang sử dụng key đó sẽ không còn truy cập được nữa.
  1. Truy cập menu **Object Storage** → tab **Access Key** → chọn **Region**.
  2. Tìm Access Key cần xoá → chọn **Delete** tại cột thao tác.
  3. Xác nhận xoá khi hộp thoại hiện lên.

* * *

## Lấy Thông Tin Endpoint
**Endpoint** là địa chỉ HTTPS dùng để kết nối đến FPT Object Storage. Mỗi **region** sẽ có endpoint khác nhau.
  1. Truy cập menu **Object Storage** → tab **Access Key** → chọn **Region**.
  2. Tại cột **Endpoint** , bạn có thể **sao chép URL** tương ứng.

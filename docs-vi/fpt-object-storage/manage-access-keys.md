---
id: "manage-access-keys"
title: "Quản lý access key"
description: "Hướng dẫn quản lý Admin access key và SubUser access key trong FPT Object Storage."
sidebar_label: "Quản lý access key"
sidebar_position: 9
---

# Quản lý access key

Cặp access key và Secret Key là phương thức xác thực cơ bản của dịch vụ FPT Object Storage. Để sử dụng bucket thông qua các phương thức khác như SDK, API, S3 Client, bạn cần có các thông tin sau:

- access key
- Secret Key
- endpoint
- Region (optional)

Các thông tin này sẽ được cung cấp đầy đủ trên FPT Unify Portal.

Hãy lưu trữ cẩn thận thông tin này. Access key được tạo ở tab Access Key đều là key với quyền Admin, vì vậy bạn có thể sẽ mất toàn bộ dữ liệu trong các bucket nếu thông tin này lộ ra ngoài. Trong trường hợp cần chia sẻ quyền sử dụng bucket cho nhiều người, hoặc lưu trữ key ở ứng dụng không an toàn, hãy tạo các SubUser với quyền truy cập giới hạn và sử dụng SubUser access key.

Nếu phát hiện bị lộ key, hãy truy cập FPT Portal và xóa key đó ngay lập tức để tránh phát sinh các rủi ro khác.

## Tạo Admin Access Key

Hiện tại mỗi tài khoản chỉ được tạo tối đa 5 cặp Admin Access Key tại một region. Nếu muốn sử dụng nhiều hơn 5 cặp key, hãy tạo thêm các SubUser.

Vì lý do bảo mật, Secret Key chỉ được hiển thị một lần duy nhất ở bước tạo. Hãy lưu trữ cẩn thận ở nơi an toàn để tránh mất quyền truy cập vào bucket.

1. Truy cập menu **Object Storage**, chọn tab **Access Key** và chọn **Region**.
2. Nhấn nút **Generate Key**.
3. Hệ thống tạo ra một cặp **access key** và **Secret Key**.
4. **Sao chép và lưu trữ** key ở nơi an toàn, sau đó nhấn **Confirm Access Key** để hoàn tất.

---

## Xóa Access Key

Sau khi xóa, tất cả các ứng dụng hoặc client đang sử dụng key đó sẽ không còn truy cập được nữa.

1. Truy cập menu **Object Storage**, chọn tab **Access Key** và chọn **Region**.
2. Tìm access key cần xóa, chọn **Delete** tại cột thao tác.
3. Xác nhận xóa khi hộp thoại hiện lên.

---

## Lấy thông tin endpoint

**Endpoint** là địa chỉ HTTPS dùng để kết nối đến FPT Object Storage. Mỗi **region** sẽ có endpoint khác nhau.

1. Truy cập menu **Object Storage**, chọn tab **Access Key** và chọn **Region**.
2. Tại cột **Endpoint**, bạn có thể **sao chép URL** tương ứng.

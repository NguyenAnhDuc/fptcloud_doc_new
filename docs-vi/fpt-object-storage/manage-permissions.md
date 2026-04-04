---
id: "manage-permissions"
title: "Quản lý permissions"
description: "Hướng dẫn cấu hình bucket ACL, object ACL và bucket policy trong FPT Object Storage."
sidebar_label: "Permissions"
sidebar_position: 6
---

# Quản lý permissions

## Bucket ACL (Access Control List)

Bucket ACL là cơ chế quản lý quyền truy cập cho bucket. FPT Object Storage định nghĩa 2 quyền cơ bản:

- **Private:** Chỉ người dùng đã xác thực và được phân quyền mới có thể truy cập hoặc quản lý bucket.
- **Public:** Mọi người đều có quyền truy cập read-only vào bucket, kể cả anonymous user trên Internet.

:::note
Bucket ACL không có hiệu lực đối với object. Để làm các object trong bucket trở thành công khai, hãy sử dụng Bucket Policy hoặc Object ACL.
:::

Để cấu hình Bucket ACL:

1. Trong phần **Action** của bucket cần cấu hình, chọn **Config**.
2. Chọn **Public** hoặc **Private**.

## Object ACL (Object Permission)

Object Permissions xác định quyền mà user khác có thể thực hiện đối với object, dựa trên cơ chế ACL. Có hai nhóm quyền:

- **Private:** Hạn chế quyền truy cập cho anonymous user. Chỉ người dùng đã xác thực và được phân quyền mới có thể xem object.
- **Public:** Cung cấp quyền đọc (read-only) cho mọi người, kể cả anonymous user, thông qua Object URL.

:::warning
Object Permissions bị ảnh hưởng bởi Bucket Policy. Bucket Policy có hiệu lực cao hơn Object ACL. Hãy cẩn thận khi sử dụng đồng thời cả 2 tầng phân quyền này.
:::

Để cấu hình Object Permissions:

1. Trên **Object Storage Management**, chọn bucket chứa file cần thay đổi quyền.
2. Di chuyển đến vị trí của file. Trong phần **Action**, chọn **Edit Permission**.
3. Tại ô **Read permission**, chọn chế độ **Public** hoặc **Private**, sau đó nhấn **Update** để lưu.

## Cấu hình bucket policy

Bucket Policy là cơ chế quản lý quyền truy cập trên S3 cho phép xác định các quy tắc chi tiết về việc ai có thể truy cập và thực hiện hành động trên object trong bucket. Bạn có thể tạo quy tắc để cho phép hoặc từ chối quyền truy cập dựa trên địa chỉ IP, thời gian, loại hành động (GET, PUT, DELETE).

Bucket Policy được viết dưới dạng JSON theo chuẩn AWS. Bạn có thể sử dụng tool tạo policy của AWS tại [đây](https://awspolicygen.s3.amazonaws.com/policygen.html).

Ví dụ về bucket policy cho phép đọc công khai:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowPublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:GetObject"],
      "Resource": "arn:aws:s3:::example-bucket/*"
    }
  ]
}
```

:::note
- Bucket Policy có hiệu lực cao hơn Object ACL.
- Bucket policy chỉ có hiệu lực ở bucket mà nó được khai báo — không thể cấu hình xuyên bucket.
:::

Để khai báo Bucket Policy:

1. Trong phần **Action** của bucket cần cấu hình, chọn **Config**.
2. Chọn chế độ **JSON Editor** nếu đã có policy sẵn và có kinh nghiệm, hoặc dùng **Visual Editor** nếu chưa quen.
3. Sau khi khai báo đầy đủ thông tin, nhấn **Create** để tạo mới hoặc **Update** để cập nhật.

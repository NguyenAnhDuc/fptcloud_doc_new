---
id: "phan-quyen-su-dung-bucket-cho-cac-subuser"
title: "Phan Quyen Su Dung Bucket Cho Cac Subuser"
description: "Hiện tại FPT Object Storage đã hỗ trợ bạn tạo các SubUser, tuy nhiên role của SubUser sẽ hiệu lực với toàn bộ tài nguyên"
sidebar_label: "Phan Quyen Su Dung Bucket Cho Cac Subuser"
sidebar_position: "19"
---

# Phan Quyen Su Dung Bucket Cho Cac Subuser

## Giới thiệu
Hiện tại FPT Object Storage đã hỗ trợ bạn tạo các SubUser, tuy nhiên role của SubUser sẽ hiệu lực với toàn bộ tài nguyên của Admin. Ví dụ bạn tạo một SubUser với role Read only thì SubUser đấy sẽ có quyền read đối với toàn bộ bucket của Admin.
Để phân quyền cho từng bucket, cần phải sử dụng đến Bucket Policy.
Giả sử chúng ta có 3 bucket là Bucket-1, Bucket-2, Bucket-3 muốn phân quyền cho 3 SubUser SubUser-1, SubUser-2, SubUser-3. Dưới đây là hướng dẫn cấu hình chi tiết trên **FPT Unify Portal**.

## Điều kiện tiên quyết
Bạn cần có tài khoản FPT Cloud, đã được enable dịch vụ Object Storage.
Đã tạo thành công các bucket trên cùng một Region.

## Tổng quan
**Bước 1** : Tạo các SubUser với quyền **None** để đảm bảo SubUser khôg thể truy cập vào các bucket khác.
**Bước 2** : Mở quyền truy cập vào bucket cụ thể cho SubUser. Ở từng bucket, khai báo Bucket Policy theo mẫu sau:

```
Copy{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": ["arn:aws:iam::SUBUSER_ACCOUNT_ID:user/SUBUSER_NAME"]
      },
      "Action": "s3:*",
      "Resource": [
        "arn:aws:s3:::YOUR_BUCKET_NAME",
        "arn:aws:s3:::YOUR_BUCKET_NAME/*"
      ]
    }
  ]
}

```

  * **Version** : Phiên bản của policy (thường là "2012-10-17").
  * **Effect** : Quyền (có thể là "Allow" hoặc "Deny").
  * **Principal** : Người dùng hoặc vai trò cụ thể. Thay thế SUBUSER_ACCOUNT_ID và SUBUSER_NAME bằng thông tin của subuser cần được cấp quyền.
  * **Action** : Hành động mà subuser được phép thực hiện trên bucket (ở đây là "s3:*" cho tất cả các hành động).
  * **Resource** : Tài nguyên mà policy áp dụng (ở đây là bucket và tất cả các object trong bucket).

**Bước 3** : Tạo các SubUser Key và cung cấp cho enduser.

## Kết luận
Với các bước trên, bạn đã sử dụng bucket policy để phân quyền subuser sử dụng bucket khác nhau trong FPT Object Storage.

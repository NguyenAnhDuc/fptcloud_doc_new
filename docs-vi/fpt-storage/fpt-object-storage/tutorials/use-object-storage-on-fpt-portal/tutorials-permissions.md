---
id: "tutorials-permissions"
title: "Quản lý Permissions"
sidebar_label: "Quản lý Permissions"
sidebar_position: 4
---

Permissions


## Bucket **Access Control List** (Bucket ACL)

Bucket ACL là một cơ chế quản lý quyền truy cập cho các bucket. Cho phép bạn kiểm soát ai có quyền xem, viết, hoặc quản lý bucket của bạn và các đối tượng bên trong đó.

Ở FPT Object Storage có 2 quyền cơ bản được định nghĩa là Public và Private.

  * **Private:** Chỉ các người dùng đã xác thực và được phân quyền mới có thể truy cập hoặc quản lý bucket.
  * **Public:** Mọi người đều có quyền truy cập read-only vào bucket, kể cả các Anonymous User trên Internet. Chỉ cần bucket URL là họ sẽ thấy toàn bộ danh sách object trong bucket. Tuy nhiên, Bucket ACL không có hiệu lực đối với Object. Để làm cho các object trong bucket trở thành công khai, bạn cần sử dụng tính năng Bucket Policy hoặc Object ACL.


Để cấu hình Bucket ACL, bạn thao tác như sau:

**Bước 1:** Trong phần **Action** của Bucket cần cấu hình, chọn **Config**.

**Bước 2:** Chọn **Public** hoặc **Private.**

## Object **Access Control List** (Object Permission)

Trong **FPT Object Storage** , **Object Permissions** xác định quyền mà user khác có thể thực hiện đối với object. Để điều chỉnh quyền cho từng object, bạn có thể sử dụng tính năng **Edit Object Permissions** trên FPT Unify Portal, dựa trên cơ chế ACL. Có hai nhóm quyền chính:

  * **Private:** Hạn chế quyền truy cập cho các Anonymous User. Chỉ những người dùng đã xác thực và được phân quyền mới có thể xem đối tượng.
  * **Public:** Cung cấp quyền đọc (read-only) cho mọi người, bao gồm cả các anonymous user, thông qua Object URL.


Lưu ý rằng Object Permissions còn bị ảnh hưởng bởi **Bucket Policy**. Bucket Policy có hiệu lực cao hơn Object ACL. Hãy cẩn thận khi sử dụng đồng thời cả 2 tầng phân quyền này.

Nếu Bucket Policy quy định rằng tất cả các object là công khai, thì tất cả các object sẽ có thể được truy cập công khai (read-only) bất kể quyền ACL của từng object là gì.

Để cấu hình **Object Permissions** trong FPT Object Storage, hãy thực hiện các bước sau:

**Bước 1:** Trên bảng quản trị **Object Storage Management** , chọn Bucket chứa file mà bạn cần thay đổi quyền.

**Bước 2:** Di chuyển đến vị trí của file trong bucket. Trong phần **Action** , chọn **Edit Permission**.

**Bước 3:** Tại ô **Read permission** , chọn chế độ hiển thị mà bạn muốn (Public hoặc Private), sau đó nhấn **Update** để lưu các thay đổi.

## Cấu hình Bucket Policy

Bucket Policy là một cơ chế quản lý quyền truy cập trên S3 cho phép bạn xác định các quy tắc chi tiết về việc ai có thể truy cập và thực hiện các hành động trên các đối tượng trong bucket. Bạn có thể tạo các quy tắc để cho phép hoặc từ chối quyền truy cập dựa trên nhiều yếu tố, bao gồm địa chỉ IP, thời gian, hoặc loại hành động (như GET, PUT, DELETE).

Bucket Policy rất hữu ích cho việc chia sẻ bucket với các tổ chức khác hoặc bảo mật dữ liệu. Bạn có thể cấu hình chính sách để cho phép truy cập từ các dịch vụ khác hoặc các user/subuser cụ thể. Nó cung cấp công cụ để người dùng set các quyền cho subuser và các user khác.

Bucket Policy được viết dưới dạng JSON theo chuẩn AWS. Bạn có thể sử dụng tool để gen policy của AWS tại [đây](<https://awspolicygen.s3.amazonaws.com/policygen.html>) và sử dụng cho FPT Object Storage:

Dưới đây là một ví dụ về bucket policy:
[code]
    Copy{
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

[/code]

Trong ví dụ trên, policy cho phép tất cả các người dùng (_Principal: "_ "_) có quyền đọc (_ Action: s3:GetObject _) các object (_ Resource*) trong bucket có tên "example-bucket". Điều này có nghĩa là bucket example-bucket sẽ ở chế độ công khai và tất cả mọi người đều có quyền get object trong bucket này.

Bucket Policy là một công cụ mạnh mẽ để quản lý quyền truy cập vào dữ liệu trong bucket. Tuy nhiên, cần cẩn trọng khi cấu hình bucket policy để đảm bảo rằng chỉ có những người dùng được ủy quyền mới có thể truy cập vào dữ liệu trong bucket.

Một số lưu ý quan trọng:

  * Bucket Policy có hiệu lực cao hơn Object ACL. Bạn nên cẩn thận khi sử dụng đồng thời cả 2 tầng phân quyền này.
  * Bucket policy chỉ có hiệu lực ở bucket mà nó được khai báo, không thể cấu hình xuyên bucket. Ví dụ bạn có bucket-1 và bucket-2, bạn không thể khai báo rule cho bucket-2 tại Bucket Policy của bucket-1 và ngược lại.


Để khai báo Bucket Policy cho Bucket, bạn thao tác như sau:

**Bước 1:** Trong phần **Action** của Bucket cần cấu hình, chọn **Config**.

**Bước 2:** Nếu bạn đã có sẵn policy ở dạng JSON và có kinh nghiệm sử dụng bucket policy, hãy chọn chế độ JSON Editor, ngược lại hãy dùng Visual Editor.

**Bước 3:** Sau khi khai báo đầy đủ thông tin, bấm Create để tạo mới hoặc Update để cập nhật.

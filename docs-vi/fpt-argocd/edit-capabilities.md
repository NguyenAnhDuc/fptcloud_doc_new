---
id: "edit-capabilities"
title: "FPT Cloud cho phép người dùng cấu hình capbilites của account:"
description: "FPT Cloud cho phép người dùng cấu hình capbilites của account:"
sidebar_label: "FPT Cloud cho phép người dùng cấu hình capbilites của account:"
sidebar_position: 25
---

# Edit Capabilities

FPT Cloud cho phép người dùng cấu hình capbilites của account:
  * **login** : Cho phép user login qua ArgoCD
  * **apiKey** : Cho phép user tạo authen token để truy cập qua API. Lựa chọn này cho phép tích hợp dễ dàng với các quy trình tự động như CI/CD pipeline hoặc các quy trình tự động khác cần tương tác với API của ArgoCD

**Bước 1** : Tại màn hình **Security & Access** > **Local Account** , thực hiện **Edit Account** :
[![](/img/migrated/Picture85-06a2fa3e.png)](/img/migrated/Picture85-06a2fa3e.png)
**Bước 2** : Thực hiện tích chọn bổ sung hoặc bỏ tích chọn đối với lựa chọn đã có.
_Lưu ý: Cần chọn ít nhất 1 lựa chọn capabilities (apiKey/login) cho user_
[![](/img/migrated/Picture86-56c75d94.png)](/img/migrated/Picture86-56c75d94.png)
**Bước 3** : Click Edit để hoàn thành việc edit
Kết quả sau khi edit:
[![](/img/migrated/Picture87-29463c43.png)](/img/migrated/Picture87-29463c43.png)
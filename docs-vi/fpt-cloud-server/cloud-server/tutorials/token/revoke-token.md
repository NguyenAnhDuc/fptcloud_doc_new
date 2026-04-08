---
id: "revoke-token"
title: "Thu hồi token"
description: "Hướng dẫn thu hồi token xác thực trên FPT Cloud Portal"
sidebar_label: "Thu hồi token"
sidebar_position: 4
---

# Thu hồi token

Thu hồi token giúp vô hiệu hóa quyền truy cập API ngay lập tức khi token không còn cần thiết hoặc bị lộ. Thao tác này không thể hoàn tác sau khi xác nhận.

1. Trên trang **Token**, nhấn nút **Revoke** tương ứng với token cần thu hồi.

   [![Danh sách token với nút Revoke ở cột hành động](/img/migrated/image-1731025026905-158de23e.png)](/img/migrated/image-1731025026905-158de23e.png)

2. Xác nhận thu hồi token trong hộp thoại xác nhận.

   [![Hộp thoại xác nhận thu hồi token](/img/migrated/image-1731025048482-957c5ad2.png)](/img/migrated/image-1731025048482-957c5ad2.png)

3. Hệ thống tự động vô hiệu hóa token. Token chuyển sang trạng thái **Revoked** trong danh sách.

   [![Danh sách token hiển thị trạng thái Revoked sau khi thu hồi](/img/migrated/image-1731025071939-e64b80bc.png)](/img/migrated/image-1731025071939-e64b80bc.png)

:::note
Một số token cũ được tạo trước phiên bản nâng cấp của FPT Cloud Portal không hỗ trợ thu hồi. Khi di chuột vào nút Revoke của các token này, hệ thống hiển thị tooltip: "Tokens created earlier cannot be revoked".
:::

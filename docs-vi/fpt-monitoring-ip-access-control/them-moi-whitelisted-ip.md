---
id: "them-moi-whitelisted-ip"
title: "Thêm mới Whitelisted IP"
description: "* Click nút 'Whitelist IP/Range' trên bảng tương ứng."
sidebar_label: "Thêm mới Whitelisted IP"
sidebar_position: 8
---

# Click nút 'Whitelist IP/Range' trên bảng tương ứng.

* Click nút 'Whitelist IP/Range' trên bảng tương ứng. 
  * Nhập IP hoặc dải IP, ngăn cách bởi Enter. 
  * Hệ thống kiểm tra format IP, loại trừ IP đã whitelist hoặc bị trùng.

[![Add whitelisted IP 1](/img/migrated/Screenshot_4-6b6299ec.png)](/img/migrated/Screenshot_4-6b6299ec.png)
  * Click nút Save để xác nhận

[![Add whitelisted IP 2](/img/migrated/Screenshot_5-e4ea3b18.png)](/img/migrated/Screenshot_5-e4ea3b18.png)
Toàn bộ IP sẽ có trạng thái 'Whitelisting', mọi thao tác trên bảng tương ứng sẽ bị vô hiệu hoá tạm thời cho đến khi hoàn tất.
  * Nếu IP/dải IP đã được **whitelist thành công** , sẽ chuyển trạng thái thành **‘Whitelisted’**. Mọi truy cập vào endpoint bằng địa chỉ IP/thuộc dải IP này được thực hiện bình thường. 
  * Nếu IP/dải IP **whitelist không thành công** , sẽ chuyển trạng thái thành **‘Whitelist failed’**. Mọi truy cập vào endpoint bằng địa chỉ IP/thuộc dải IP này vẫn bị chặn. Người dùng cần thao tác retry để whitelist lại.

---
id: "them-moi-whitelisted-ip"
title: "Click nút 'Whitelist IP/Range' trên bảng tương ứng."
sidebar_label: "Click nút 'Whitelist IP/Range' trên bảng tương ứng."
sidebar_position: "8"
---

# Click nút 'Whitelist IP/Range' trên bảng corresponding.

* Click nút 'Whitelist IP/Range' trên bảng corresponding. 
  * Enter IP or dải IP, ngăn theh bởi Enter. 
  * System kiểm tra format IP, loại trừ IP has been whitelist or bị trùng.

[![Add whitelisted IP 1](/img/migrated/Screenshot_4-6b6299ec.png)](/img/migrated/Screenshot_4-6b6299ec.png)
  * Click nút Save to xác nhận

[![Add whitelisted IP 2](/img/migrated/Screenshot_5-e4ea3b18.png)](/img/migrated/Screenshot_5-e4ea3b18.png)
Toàn bộ IP will có status 'Whitelisting', mọi thao tác trên bảng corresponding will bị vô hiệu hoá tạm thời for to when hoàn tất.
  * Nếu IP/dải IP has been is **whitelist successfully** , will chuyển status thành **‘Whitelisted’**. Mọi truy cập ando endpoint bằng địa chỉ IP/thuộc dải IP this is thực hiện bình thường. 
  * Nếu IP/dải IP **whitelist không successfully** , will chuyển status thành **‘Whitelist failed’**. Mọi truy cập ando endpoint bằng địa chỉ IP/thuộc dải IP this vẫn bị chặn. Người dùng need to thao tác retry to whitelist lại.

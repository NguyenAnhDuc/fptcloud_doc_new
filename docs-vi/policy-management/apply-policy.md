---
id: "apply-policy"
title: "Áp dụng policy"
description: "Kịch bản:"
sidebar_label: "Áp dụng policy"
sidebar_position: 5
---

# Apply Policy

Kịch bản:
_Chặn người dùng khởi tạo rule SSH với source IP bằng All IPv4 (Any)_
**Bước 1** : Ở menu chọn **Security Group** , sau đó chọn **Create security group**
[![file](/img/migrated/image-1719821228097-9fd79d5a.png)](/img/migrated/image-1719821228097-9fd79d5a.png)
**Bước 2** : Tại màn hình **Create security group** , chọn **Add rule**
[![file](/img/migrated/image-1719821250324-ab40b63e.png)](/img/migrated/image-1719821250324-ab40b63e.png)
**Bước 3** : Điền các thông tin tương ứng của rule. 
  * **Type** : SSH
  * **Sources** : All IPv4

[![file](/img/migrated/image-1719821264190-f0a280a9.png)](/img/migrated/image-1719821264190-f0a280a9.png)
**Bước 4** : Nhấn Create security group. Hệ thống sẽ báo lỗi: hành động bị cấm bởi policy
[![file](/img/migrated/image-1719821276342-01f0978c.png)](/img/migrated/image-1719821276342-01f0978c.png)
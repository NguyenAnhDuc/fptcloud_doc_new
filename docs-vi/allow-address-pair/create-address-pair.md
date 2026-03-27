---
id: "create-address-pair"
title: "Create Address Pair"
description: "Một Network interface card có thể cấu hình nhiều allow address pair và ngược lại, một address pair có thể cấu hình cho n"
sidebar_label: "Create Address Pair"
sidebar_position: 3
---

# Create Address Pair

Một Network interface card có thể cấu hình nhiều allow address pair và ngược lại, một address pair có thể cấu hình cho nhiều Network interface card của các Instance khác nhau
**Bước 1** : Ở Màn hình quản lý Allow address pair. Chọn **Create allow address pair**
[![file](/img/migrated/image-1708395038189-f6a186ff.png)](/img/migrated/image-1708395038189-f6a186ff.png)
**Bước 2** : Cấu hình allow IP address pair
  * Chọn Instance 
  * Chọn card mạng để cài đặt Allow address pair
  * Nhập IP (hoặc CIDR) để allow

[![file](/img/migrated/image-1708395102833-872f3b79.png)](/img/migrated/image-1708395102833-872f3b79.png)
**Bước 3** : Cấu hình allow MAC address pair (optional). Nếu không chọn, mặc định hệ thống sẽ lấy địa chỉ MAC của chỉ Network interface card đang được chọn
  * Bấm vào Advanced Setting
  * Nhập địa chỉ MAC

[![file](/img/migrated/image-1708395142834-551ea26d.png)](/img/migrated/image-1708395142834-551ea26d.png)
**Bước 4** : Bấm Create allow address pair
[![file](/img/migrated/image-1708395173721-87a3a5e8.png)](/img/migrated/image-1708395173721-87a3a5e8.png)
**Bước 5** : Kiểm tra thông tin. Thông tin được cập nhật ở màn hình danh sách Allow address pair và thông tin trong Network interface của Instance
[![file](/img/migrated/image-1708395209748-2de1f3be.png)](/img/migrated/image-1708395209748-2de1f3be.png)
[![file](/img/migrated/image-1708395219352-74b14a4a.png)](/img/migrated/image-1708395219352-74b14a4a.png)
---
id: "create-subnets"
title: "Tạo Subnets"
description: "**Subnets** là một mạng con được tạo ra trong VPC của bạn. Nó tương đương với mạng LAN ở hệ thống vật lý. Bạn có thể đín"
sidebar_label: "Tạo Subnets"
sidebar_position: 5
---

# Tạo Subnets

**Subnets** là một mạng con được tạo ra trong VPC của bạn. Nó tương đương với mạng LAN ở hệ thống vật lý. Bạn có thể đính kèm một hoặc nhiều Subnet vào máy ảo tùy vào nhu cầu.
**Bước 1:** Tại thanh Menu > Chọn **Networking** > chọn **Subnets**
[![](/img/migrated/Sub1-1e1f2f32.png)](/img/migrated/Sub1-1e1f2f32.png)
**Bước 2:** bấm **Create** , xuất hiện màn hình Create Subnets
[![](/img/migrated/Sub2-a3119de5.png)](/img/migrated/Sub2-a3119de5.png)
Trong đó:
  * **Name:** tên thông tin subnets, ngoài tên gợi ý người dùng có thể chỉnh sửa theo tên dễ nhớ hơn.
  * **Type:**
    * Routed to the internet via a NAT gateway: kết nối internet qua cổng NAT.
    * Isolated subnet won’t route to the internet: sử dụng mạng nội bộ.
  * **CIDR:** nhập IP gateway, được gợi ý theo hệ thống hoặc chỉnh sửa theo giới hạn.
  * **Static IP Pool:** nhập static trong khoảng gợi ý cung cấp CIDR.

**Bước 3:** sau khi nhập các thông tin cần thiết, bấm **Create subnet:**
[![](/img/migrated/Sub3-273cbe12.png)](/img/migrated/Sub3-273cbe12.png)
**Lưu ý:** - Khi tạo xong subnets, người dùng không nên đổi tên subnets.

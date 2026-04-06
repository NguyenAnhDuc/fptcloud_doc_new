---
id: "create-security-groups"
title: Tạo Security Groups
description: "**Bước 1:** Tại thanh **Menu** > chọn **Networking** > Chọn **Security Group**"
sidebar_label: Tạo Security Groups
sidebar_position: 3
---

# Tạo Security Groups

**Bước 1:** Tại thanh **Menu** > chọn **Networking** > Chọn **Security Group**
[![](/img/migrated/B1cua-6.1-a6dd8ad4.png)](/img/migrated/B1cua-6.1-a6dd8ad4.png)
**Bước 2:** bấm Create Security Group, xuất hiện màn hình **Create Security Group**
[![](/img/migrated/B2cua-6.1-db433c04.png)](/img/migrated/B2cua-6.1-db433c04.png)
Nhập các thông tin cần thiết:
  * Trường **Name:** nhập tên group sao cho dễ quản lý nhất. Mặc định hệ thống sẽ tự đặt cho người dùng.
  * Trường **Subnet:** chọn theo list, người dùng chọn dải phù hợp với Database mình đã chon khi tạo.
  * Trường **Applied instances:** Chọn máy chủ cần áp dụng.
  * Trường **Inbound Rules:**
    * **Type:** Chọn loại Database, có thể chọn **All ports** để mở toàn bộ Customize ports để mở một hoặc một dải Port tùy chọn. Ngoài ra hệ thống sẽ đề xuất Port của một số dịch vụ phổ biến như SSH, RDP, MySQL, HTTP, HTTPS, …
    * **Protocol:** Chọn theo list
    * **Port:** Nhập số Port cần mở, …
    * **Action:** Chọn theo list
    * **Source:** Nhập các IP trên Internet có thể kết nối đến Port này vào trường Source. Chọn All để đồng ý tất cả, MyIP để cho phép IP hiện tại của máy, hoặc nhập trực tiếp IP để thêm các IP tùy chọn.
    * **Description:** Nhập chú thích.
  * Chọn **Add rule** để tiếp tục thêm rule mới.

**Bước 3:** Bấm **Create Security group** , người dùng chờ 1-2’ để security có trạng thái **Active** :
[![](/img/migrated/B3-cua6.1-c5041ca1.png)](/img/migrated/B3-cua6.1-c5041ca1.png)

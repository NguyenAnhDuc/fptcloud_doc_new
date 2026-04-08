---
id: "create-acls"
title: "Tạo ACL"
description: "Hướng dẫn tạo ACL để phân quyền truy cập trong FPT Kafka."
sidebar_label: "Tạo ACL"
sidebar_position: 14
---

# Tạo ACL

ACL phân quyền Read/Write cho từng credential trên topic hoặc consumer group, giới hạn hoạt động theo địa chỉ IP nếu cần. Bạn cần tạo credential trước khi có thể tạo ACL.

1. Từ menu, chọn **Application** > **ACLs**, sau đó nhấn **Create**.
2. Điền các thông tin:
   - **Credential** (bắt buộc): Chọn credential đã tạo
   - **Resource Type** (bắt buộc): Topic hoặc Group — xác định đối tượng được phân quyền
   - **Pattern Type** (bắt buộc):
     - **Literal**: Áp dụng cho đúng một topic/group khai báo trong trường "Resource name"
     - **Prefixed**: Áp dụng cho tất cả topic/group có prefix trong trường "Resource name"
   - **Host** (tùy chọn): Địa chỉ IP được phép truy cập; để trống cho phép tất cả IP
   - **Operation** (bắt buộc): Read hoặc Write
   - **Permission** (bắt buộc): Allow hoặc Deny

   [![Màn hình tạo ACL với các tùy chọn phân quyền chi tiết](/img/migrated/Pic1_ACL-194aa4c5.png)](/img/migrated/Pic1_ACL-194aa4c5.png)

3. Nhấn **OK** để hoàn tất.

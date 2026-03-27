---
id: "them-bot-member-cho-server-pool"
title: "Thêm/bớt member cho Server pool"
description: "**Member** là thành viên trong một nhóm máy chủ **(Server pool)** trên **Load Balancer** , và chúng chịu trách nhiệm phụ"
sidebar_label: "Thêm/bớt member cho Server pool"
sidebar_position: 22
---

# Them Bot Member Cho Server Pool

**Member** là thành viên trong một nhóm máy chủ **(Server pool)** trên **Load Balancer** , và chúng chịu trách nhiệm phục vụ các yêu cầu từ người dùng hoặc các thiết bị khác thông qua **Load Balancer.**
**Server pool member** đã được tạo cùng **Load Balancer** khi tạo **Load Balancer.**
Để thêm member cho **Server pool** , bạn làm theo hướng dẫn sau:
**Bước 1:** Tại màn hình hiển thị danh sách **Server pool** , chọn **Server pool** cần thêm member. [![file](/img/migrated/image-1710989399033-82cb406f.png)](/img/migrated/image-1710989399033-82cb406f.png)
**Bước 2:** Tại **Add server,** hộp **Select instance** sẽ hiển thị danh sách **Instance** khả dụng**,** người dùng được thêm **Instance** từ danh sách:
[![file](/img/migrated/image-1710989438271-ca679a80.png)](/img/migrated/image-1710989438271-ca679a80.png)
Người dùng được chỉnh sửa:
  * **Port:** Port mà Member sẽ lắng nghe để xử lý các yêu cầu đến. Port này thường liên quan đến dịch vụ cụ thể mà Member cung cấp
  * **Weight:** Trọng số quy định mức độ ưu tiên của mỗi Pool Member trong việc xử lý các requests. Các Member có trọng số cao sẽ nhận được nhiều request hơn so với các Member có trọng số thấp.

Để xoá **Server pool member,** trong phần **Action** của **Server pool member** cần xoá, chọn **Remove**. [![file](/img/migrated/image-1710989470976-16ee6e91.png)](/img/migrated/image-1710989470976-16ee6e91.png)
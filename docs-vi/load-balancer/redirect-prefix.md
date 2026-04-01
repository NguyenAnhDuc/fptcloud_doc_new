---
id: "redirect-prefix"
title: "Redirect Prefix"
description: "**Redirect prefix** cho phép bạn thêm một chuỗi ký tự (tiền tố) vào đầu URL đích khi thực hiện chuyển hướng, giúp bạn qu"
sidebar_label: "Redirect Prefix"
sidebar_position: 16
---

# Redirect Prefix

**Redirect prefix** cho phép bạn thêm một chuỗi ký tự (tiền tố) vào đầu URL đích khi thực hiện chuyển hướng, giúp bạn quản lý và cấu trúc các URL chuyển hướng một cách hiệu quả hơn, đồng thời tạo điều kiện cho việc chuyển hướng người dùng đến các trang web hoặc nội dung cụ thể. 
**Bước 1:** Tại màn hình hiển thị danh sách Load Balancer, chọn **Load Balancer.**
**Bước 2:** Tại màn hiển thị chi tiết **Load Balancer** , chọn tab **Listener** , tại đây người dùng chọn **Listener**. 
**Bước 3:** Chọn tab **L7 Policy,** tại đây người dùng chọn **Add Policy.**
Nhập các thông tin: 
  * **Policy name:** Tên của policy 
  * **Policy action:** chọn **Redirect prefix**
  * **Redirect to:** Nhập prefix URL bạn muốn chuyển request khi thoả mãn điều kiện. 
  * **Position** : Mức độ ưu tiên của policy, vị trí càng nhỏ thì mức độ ưu tiên càng lớn. 
  * **Redirect HTTP code:** Các giá trị hợp lệ là: 301, 302, 303, 307, hoặc 308. 

**Bước 4:** Nhấn dấu tick để hoàn thành thao tác.
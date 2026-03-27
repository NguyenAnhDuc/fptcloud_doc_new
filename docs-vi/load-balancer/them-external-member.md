---
id: "them-external-member"
title: "Thêm External member cho Load Balancer"
description: "Tính năng thêm **External member** của Load Balancer cho phép bạn thêm các endpoint bên ngoài vào pool server. Endpoint "
sidebar_label: "Thêm External member cho Load Balancer"
sidebar_position: 7
---

# Them External Member

Tính năng thêm **External member** của Load Balancer cho phép bạn thêm các endpoint bên ngoài vào pool server. Endpoint bên ngoài có thể là một máy chủ, dịch vụ hoặc ứng dụng khác đang chạy trên mạng. Việc thêm **External member** giúp bạn mở rộng khả năng xử lý của Load Balancer, tận dụng các tài nguyên bên ngoài và nâng cao hiệu quả hoạt động của hệ thống. 
**External member** đã được thêm khi khởi tạo **Load Balancer,** người dùng tham khảo cách tạo Load Balancer [tại đây.](https://fptcloud.com/documents/load-balancer/?doc=chinh-sua-listener "tại đây.")
Để thêm **External member** cho Load Balancer, người dùng thao tác theo hướng dẫn sau: 
**Bước 1:** Tại màn hình hiển thị danh sách Load Balancer, chọn **Load Balancer** cần thêm **External member.**
**Bước 2:** Tại màn hiển thị chi tiết Load Balancer, chọn tab **Server pool,** tại đây người dùng chọn server pool cần thêm **External member.**
**Bước 3:** Tại mục **Add server** , chọn **Add external member.**
Người dùng nhập các thông tin sau: 
  * **Name** : Tên hiển thị cho **External member**
  * **IP Address** : Địa chỉ IP của **External member**
  * **Port** : Port mà Member sẽ lắng nghe để xử lý các yêu cầu đến. Port này thường liên quan đến dịch vụ cụ thể mà Member cung cấp. 
  * **Weight** : Trọng số quy định mức độ ưu tiên của mỗi **External Member** trong việc xử lý các yêu cầu. Các Member có trọng số cao sẽ nhận được nhiều yêu cầu hơn so với các Member có trọng số thấp. 

**Bước 4:** Nhấn **Update Server pool** để kết thúc thao tác. 
Để xoá **External member** , trong phần **Action** của External member cần xoá, chọn **Remove**.
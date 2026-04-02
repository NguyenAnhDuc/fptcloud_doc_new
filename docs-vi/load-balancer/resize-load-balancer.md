---
id: "resize-load-balancer"
title: "Thay đổi gói Load Balancer (Resize)"
description: "Tính năng **'Thay Đổi gói Load Balancer (Resize)'** là một phần quan trọng trong việc quản lý **Load Balancer.** Nó cho "
sidebar_label: "Thay đổi gói Load Balancer (Resize)"
sidebar_position: 8
---

# Resize Load Balancer

Tính năng **"Thay Đổi gói Load Balancer (Resize)"** là một phần quan trọng trong việc quản lý **Load Balancer.** Nó cho phép bạn tùy chỉnh các gói dịch vụ phù hợp với nhu cầu sử dụng cả về mặt tài chính lẫn vận hành của Load Balancer như: 
  * **Cải thiện hiệu suất:** Tính năng resize giúp đảm bảo rằng ứng dụng của bạn luôn có đủ tài nguyên để xử lý lưu lượng truy cập. 
  * **Tăng khả năng sẵn sàng:** Tính năng resize có thể giúp đảm bảo rằng ứng dụng của bạn luôn sẵn sàng, ngay cả khi lưu lượng truy cập tăng đột biến. 
  * **Tiết kiệm chi phí:** Tính năng resize có thể giúp bạn tiết kiệm chi phí bằng cách đảm bảo rằng bạn chỉ sử dụng các tài nguyên cần thiết, tránh lãng phí tài nguyên và giảm chi phí cloud của bạn. 

Để thay đổi gói cho **Load Balancer** , người dùng thao tác theo các bước sau: 
**Bước 1:** Tại màn hiển thị danh sách Load Balancer, nhấn vào biểu tượng **"ba chấm"** của Load Balancer cần thay đổi gói, nhấn chọn **Resize**. 
**Bước 2:** Một hộp thoại hiện ra bao gồm các gói **Load Balancer** khả dụng, người dùng tiến hành chọn gói phù hợp với nhu cầu sử dụng. 
**Bước 3:** Nhấn chọn **Resize load balancer** để thay đổi gói và **Cancel** để huỷ bỏ. 
**Note:**
  * Trước khi thực hiện resize, đảm bảo VPC đã được cấp quota size mới. 
  * Quá trình **Resize** sẽ diễn ra trong một khoảng thời gian nhất định, do đó, Load Balancer của bạn sẽ bị gián đoạn trong thời gian này và tiếp tục hoạt động bình thường sau khi hoàn tất quá trình. 
  * Sau khi **Resize** thành công, người dùng cần kiểm tra các thông số/dữ liệu thực tế của Load Balancer tại tab Monitor, để đảm bảo rằng gói Load Balancer mới có thể đáp ứng nhu cầu sử dụng thực tế.

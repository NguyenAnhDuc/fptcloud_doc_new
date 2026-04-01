---
id: "load-balancer"
title: "Cân bằng tải"
description: "Cân bằng tải"
sidebar_label: "Cân bằng tải"
sidebar_position: 1
---

# Load Balancer

  * [ ![](/img/migrated/icon-glossary-46e0a6e7.png) Overview ](javascript: "Overview")
  * [ ![](/img/migrated/settings-800de3d1.png) Initial Setup ](javascript: "Initial Setup")
  * [ ![](/img/migrated/quick-starts-c3998e52.png) Load Balancer (Tutorials) ](javascript: "Load Balancer \(Tutorials\)")
  * [ ![](/img/migrated/icon-networking-f57b0b33.png) Classic Load Balancer (Tutorials) ](javascript: "Classic Load Balancer \(Tutorials\)")

Load Balancer
### Giới thiệu về dịch vụ Load Balancer trên FPT Cloud.
Cân bằng tải (Load Balancer) là việc thực hiện phân phối tải lên một nhóm máy chủ ảo hoặc nhóm tài nguyên backend (web server, web app, containers...) sao cho tối ưu nhất.
Các website hay web app hiện nay có thể phải phục vụ lên tới hàng trăm nghìn khách hàng trong một ngày với hàng triệu request đến cùng lúc. Nếu chỉ sử dụng một máy chủ đơn lẻ thì rất khó để đáp ứng được toàn bộ khối lượng công việc này. Phương án tốt nhất để giải quyết là mở rộng hệ thống lên nhiều máy chủ cùng nhau xử lý.
Sau khi được khởi tạo và cấu hình, FPT Load Balancer sẽ chịu trách nhiệm tự động điều phối traffic đến và phân chia đồng đều cho các máy chủ trong group, đảm bảo tất cả các request đều được tối ưu nhất về tốc độ và hiệu suất xử lý. FPT Load Balancer còn sẽ liên tục kiểm tra tính sẵn sàng của các máy chủ, trong trường hợp có một máy bị hỏng không thể kết nối được. Bộ điều khiển sẽ tự động chuyển toàn bộ traffic đến các máy còn lại cho đến khi máy bị hỏng trở lại hoạt động bình thường.
Do các đặc tính này của Load Balancer nên dịch vụ của bạn luôn được đảm bảo về hiệu năng, tốc độ xử lý và tính sẵn sàng của hệ thống sẽ ở mức cao nhất.
Bài viết này sẽ cung cấp cho bạn thông tin về những điều bạn cần biết trước khi tạo một FPT Load Balancer, cách bạn tạo và quản lý nó trên FPT Portal.
### Những điều cần lưu ý trước khi bạn tạo một Load Balancer.
  * **Số lượng máy chủ:** Bạn cần tính toán khối lượng công việc mà các máy chủ cần xử lý để chọn số máy chủ cho phù hợp.
  * **Kích thước của bộ điều khiển Load Balancer:** Hiện tại **FPT Cloud** đang cung cấp các gói khác nhau từ **Basic** cho đến **Premium**. Mỗi gói sẽ có thông số hỗ trợ tối đa khác nhau. Bạn có thể liên hệ với nhân viên hỗ trợ để được tư vấn gói phù hợp nhất.
  * **Vị trí địa lý đặt các máy ảo:** Vị trí địa lý (**Region**) có thể sẽ ảnh hưởng đến tốc độ đường truyền từ internet đến các máy chủ ảo trong quá trình sử dụng. Bạn nên chọn Region gần nhất với đối tượng phát sinh traffic để tối ưu được tốc độ.
  * **Thuật toán cân bằng tải :** FPT đang cung cấp 2 thuật toán chính là **Round Robin** và **Least Connections**. Bạn nên tìm hiểu cơ chế hoạt động và ưu nhược điểm của 2 phương thức này để chọn được thuật toán tối ưu nhất với web/app của mình.

##  Trang chủ 
01Overview 
02Initial Setup 
03Load Balancer (Tutorials) 
04Classic Load Balancer (Tutorials)

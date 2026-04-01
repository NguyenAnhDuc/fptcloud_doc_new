---
id: "load-balancer"
title: "Cân bằng tải"
description: ""
sidebar_label: "Cân bằng tải"
sidebar_position: 1
---

# Load Balancer

  * [ ![](/img/migrated/icon-glossary-46e0a6e7.png) Overview ](javascript: "Overview")
  * [ ![](/img/migrated/settings-800de3d1.png) Initial Setup ](javascript: "Initial Setup")
  * [ ![](/img/migrated/quick-starts-c3998e52.png) Load Balancer (Tutorials) ](javascript: "Load Balancer \(Tutorials\)")
  * [ ![](/img/migrated/icon-networking-f57b0b33.png) Classic Load Balancer (Tutorials) ](javascript: "Classic Load Balancer \(Tutorials\)")
Load Balancer
  1. [FPT Cloud Portal](https://fptcloud.com/danh-sach-tai-lieu/ "FPT Cloud Portal")
  2. Load Balancer

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
![FPT Cloud](/img/migrated/footer-logo-f6780be4.png)
**Hotline:[1900 638 399](tel:1900%20638%20399)**
Địa chỉ:
**Hà Nội:**[FPT Tower, Số 10 Phạm Văn Bạch, Phường Cầu Giấy](https://maps.app.goo.gl/BtHa6J7ToZf7RZbF6)  
**TP. Hồ Chí Minh:** Tòa nhà PJICO, 186 Điện Biên Phủ, Phường Xuân Hòa  
**Tokyo:** 33F, Sumitomo Fudosan Tokyo Mita Garden Tower, 3-5-19 Mita, Minato-ku  

Email: support@fptcloud.com
  * [ ](https://www.facebook.com/fptsmartcloud)
  * [ ](https://www.linkedin.com/company/fpt-cloud/)
  * [ ](https://www.youtube.com/channel/UCJM51jaizo0jSbv35HD2nYA)

[ ![DMCA compliant image](/img/migrated/_dmca_premi_badge_4-f0377188.png) ](https://www.dmca.com/compliance/fptcloud.com "DMCA Compliance information for fptcloud.com")
Về chúng tôi 
  * [ Giới thiệu chung ](https://fptcloud.com/gioi-thieu/ "Giới thiệu chung")
  * [ Đối tác & Khách hàng ](https://fptcloud.com/doi-tac/ "Đối tác & Khách hàng")
  * [ Tin tức - Sự kiện ](https://fptcloud.com/blog/ "Tin tức - Sự kiện")
  * [ Tuyển dụng ](https://fptsmartcloud.com/co-hoi-nghe-nghiep/ "Tuyển dụng")
  * [ Liên hệ ](https://fptcloud.com/lien-he/ "Liên hệ")

Dịch vụ 
  * [ FPT Cloud Server ](https://fptcloud.com/product/cloud-server/ "FPT Cloud Server")
  * [ FPT Backup Service ](https://fptcloud.com/product/backup-service/ "FPT Backup Service")
  * [ FPT Disaster Recovery Services ](https://fptcloud.com/product/disaster-recovery-service/ "FPT Disaster Recovery Services")
  * [ FPT Object storage ](https://fptcloud.com/product/object-storage/ "FPT Object storage")
  * [ FPT Kubernetes Engine ](https://fptcloud.com/product/kubernetes-engine/ "FPT Kubernetes Engine")
  * [ FPT Monitoring ](https://fptcloud.com/product/monitoring/ "FPT Monitoring")
  * [ FPT Load Balancer ](https://fptcloud.com/product/load-balancer/ "FPT Load Balancer")
  * [ FPT Next-Gen Firewall ](https://fptcloud.com/product/fpt-next-gen-firewall/ "FPT Next-Gen Firewall")
  * [ FPT Cloud Desktop ](https://fptcloud.com/product/cloud-desktop/ "FPT Cloud Desktop")

Điều khoản & Chính sách 
  * [ Điều Khoản Sử dụng ](https://fptcloud.com/chinh-sach/#policy-tab-1 "Điều Khoản Sử dụng")
  * [ Chính sách Bảo vệ quyền riêng tư ](https://fptcloud.com/chinh-sach/#policy-tab-1 "Chính sách Bảo vệ quyền riêng tư ")
  * [ Báo cáo lỗ hổng bảo mật hoặc quyền riêng tư ](https://fptcloud.com/chinh-sach/#policy-tab-3 "Báo cáo lỗ hổng bảo mật hoặc quyền riêng tư")
  * [ Chính sách Bảo vệ Dữ liệu Cá nhân ](https://fptcloud.com/chinh-sach/#policy-tab-5 "Chính sách Bảo vệ Dữ liệu Cá nhân")
  * [ Biểu mẫu Báo Cáo Rủi Ro hoặc Vi Phạm ](https://fptcloud.com/chinh-sach/#policy-tab-6 "Biểu mẫu Báo Cáo Rủi Ro hoặc Vi Phạm")

Đăng ký nhận tin 
Gửi 

  * [ Liên hệ ](tel:1900%20638%20399)
Email

Chúng tôi quan tâm đến sự riêng tư của bạn
Trang web này sử dụng cookie để cải thiện trải nghiệm người dùng. Bằng cách sử dụng trang web của chúng tôi, bạn đồng ý với tất cả cookie theo [Chính sách bảo mật](https://fptcloud.com/chinh-sach/#policy-tab-1) của chúng tôi
[Chỉ những cookie cần thiết](javascript:void\(0\);) [Cài đặt](javascript:void\(0\);) [Tôi đồng ý](javascript:void\(0\);)
[ ](tel:1900638399 "Gọi 1900638399")
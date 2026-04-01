---
id: "cloud-guard"
title: "FPT Cloud Guard hỗ trợ cảnh báo đa kênh"
sidebar_label: "FPT Cloud Guard hỗ trợ cảnh báo đa kênh"
sidebar_position: "1"
---

# FPT Cloud Guard

  * [ ![](/img/migrated/icon-glossary-46e0a6e7.png) Overview ](javascript: "Overview")
  * [ ![](/img/migrated/settings-800de3d1.png) Initial Setup ](javascript: "Initial Setup")
  * [ ![](/img/migrated/icon-networking-f57b0b33.png) Hướng dẫn chi tiết (Tutorials) ](javascript: "Hướng dẫn chi tiết \(Tutorials\)")
  * [ ![](/img/migrated/question-45cd06af.png) Các câu hỏi thường gặp (FAQs) ](javascript: "Các câu hỏi thường gặp \(FAQs\)")
  * [ ![](/img/migrated/suggestion-74a9dc8f.png) Một số gợi ý mẫu (Samples) ](javascript: "Một số gợi ý mẫu \(Samples\)")

  1. [FPT Cloud Portal](https://fptcloud.com/danh-sach-tai-lieu/ "FPT Cloud Portal")
  2. FPT Cloud Guard

FPT Cloud Guard - Alert là service giúp khách hàng monitoring, theo dõi status hoạt động of the service khác trên FPT Cloud hoàn toàn tự động (Cloud Server, Load Balancer, Autoscaling, Object Storage, Kubernetes, Database,...). Cho phép khách hàng cấu hình and gửi the alert when tài nguyên bị vượt ngưỡng, hỗ trợ gửi alert qua nhiều kênh (Email, Webhook, Telegram, Slack, SMS, Call,...). Khi sử dụng FPT Cloud Guard, khách hàng can chủ động theo dõi các tài nguyên của mình trên hệ thống FPT Cloud mà không cần nhân sự duy trì and cost ở mức tối thiểu. Tài liệu this will cung cấp for you thông tin về những điều you should cân nhắc before sử dụng FPT Cloud Guard, theh you tạo and quản lý nó.
Những điều cần lưu ý before you tạo a Alert?
  * **Các loại thông số cần theo dõi and ngưỡng bất thường:** Với mỗi loại tài nguyên trên FPT Cloud will có the thông số kỹ thuật khác nhau, tùy ando nhu cầu and mục đích sử dụng tài nguyên mà you cần đưa ra thông số cần theo dõi and ngưỡng bất thường for the thông số đấy.
  * **Phương thức nhận alert:** Bạn cần chọn a phương thức nhận alert phù hợp with tổ chức of mình, giúp người phụ trách nhận is thông tin alert and xử lý sự cố nhanh nhất.
  * **Kịch bản nhận alert:** Bạn should đưa ra the kịch bản alert khác nhau for the trường hợp cụ thể. Ví dụ if vượt ngưỡng will alert in bao nhiêu lâu, alert for bao nhiêu người,…

##  Home page 
01Overview 
02Initial Setup 
03Hướng dẫn chi tiết (Tutorials) 
04Các câu hỏi thường gặp (FAQs) 
05Một số gợi ý mẫu (Samples) 
## Release note
### FPT Cloud Guard (Alert 2.0) –Tính năng quản lý and tự động alert tài nguyên trên FPT Cloud Portal
FPT Cloud chính thức ra mắt feature FPT Cloud Guard trên giao diện Portal. Với feature this, user can dễ dàng thiết lập the kịch bản alert and cài đặt người nhận alert corresponding qua phương thức Email. FPT Cloud Guard will monitoring, tính toán liên tục and gửi alert when mức sử dụng of tài nguyên vượt ngưỡng has been đặt. Từ that giúp user tiết kiệm thời gian monitoring and quản lý tài nguyên trên FPT Cloud Portal. Các feature of FPT Cloud Guard - AlertTạo và tùy chỉnh mức cảnh báo when tài nguyên RAM/CPU của máy chủ ảo vượt ngưỡng.Tạo cảnh báo mức sử dụng RAM/CPU for các Autoscale Group and thiết lập kịch bản Scale In hoặc Scale Out tự độngKiểm tra trạng thái trên giao diện theo thời gian thựcBật/ tắt chức năng gửi cảnh báo and quản phương thức nhận alertView lại the lịch sử and chi tiết alertTại sao you should sử dụng FPT Cloud Guard - AlertChủ động in quản lý tài nguyên, không cần thường xuyên kiểm tra mà chỉ cần vào when có cảnh báo gửi về email giúp tiết kiệm thời gian quản lý and and kịp thời xử lý các tình huống khẩn cấp.Đơn giản hóa công việc quản lý bằng giao diện Alert tinh giản giúp thao tác cài đặt, quản trị nhanh chóng and dễ dàng. 
### FPT Cloud Guard (Alert 2.1) ra mắt the alert mới về băng thông network and ổ cứng
FPT Cloud chính thức ra mắt the alert về băng thông network and ổ cứng includes:Network bandwidth in/out (Mbps): Cảnh báo về băng thông to/đi of tất cả the Network Interface Card (NIC) of server if vượt ngưỡng.Total network bandwidth (Mbps): Cảnh báo về tổng băng thông to and đi of tất cả the Network Interface Card (NIC) of server if vượt ngưỡngDisk IOPS (IOPS): Cảnh báo về hiệu năng đọc ghi ổ cứng (In/Out per second) if vượt ngưỡng, hỗ trợ đặt alert for ổ cứng of fromng server.Disk Read/Write Bandwidth (MBps): Cảnh báo về băng thông đọc/ghi of ổ cứng if vượt ngưỡng, hỗ trợ đặt alert for ổ cứng of fromng server.Ngoài ra, version 2.1 có thêm the feature sửa alert has been đặt, sửa xóa người nhận, xem chi tiết lịch sử bắn alert and hỗ trợ trên cả 2 nền tảng ảo hóa Openstack and VMWare. 
### FPT Cloud Guard hỗ trợ alert đa kênh
FPT Cloud Guard cập nhật thêm the phương thức nhận alert mới and phổ biến hiện nay là:- Slack- TelegramNgoài ra, version 2.2 for phép user dễ dàng thêm mới alert with feature chọn nhiều server áp dụng in điều kiện of 1 alert (apply to multiple virtual machine) Hình 1: Create alert cùng lúc for tất cả server Hình 2: Chọn phương thức alert qua Slack and Telegram Vì sao should sử dụng FPT Cloud Guard v2.2Dễ dàng tạo and quản lý alert for nhiều server có cùng a điều kiện alert.Đa dạng phương thức nhận thông tin alert 

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
  * [ Introduction chung ](https://fptcloud.com/gioi-thieu/ "Introduction chung")
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
  * [ Chính sách Bảo vệ permission riêng tư ](https://fptcloud.com/chinh-sach/#policy-tab-1 "Chính sách Bảo vệ permission riêng tư ")
  * [ Báo cáo lỗ hổng security or permission riêng tư ](https://fptcloud.com/chinh-sach/#policy-tab-3 "Báo cáo lỗ hổng security or permission riêng tư")
  * [ Chính sách Bảo vệ Dữ liệu Cá nhân ](https://fptcloud.com/chinh-sach/#policy-tab-5 "Chính sách Bảo vệ Dữ liệu Cá nhân")
  * [ Biểu mẫu Báo Cáo Rủi Ro or Vi Phạm ](https://fptcloud.com/chinh-sach/#policy-tab-6 "Biểu mẫu Báo Cáo Rủi Ro or Vi Phạm")

Register nhận tin 
Gửi 

  * [ Liên hệ ](tel:1900%20638%20399)
Email

Chúng tôi quan tâm to sự riêng tư of you
Trang web this sử dụng cookie to cải thiện trải nghiệm user. Bằng theh sử dụng trang web of chúng tôi, you đồng ý with tất cả cookie theo [Chính sách security](https://fptcloud.com/chinh-sach/#policy-tab-1) of chúng tôi
[Chỉ những cookie cần thiết](javascript:void\(0\);) [Cài đặt](javascript:void\(0\);) [Tôi đồng ý](javascript:void\(0\);)
[ ](tel:1900638399 "Gọi 1900638399")

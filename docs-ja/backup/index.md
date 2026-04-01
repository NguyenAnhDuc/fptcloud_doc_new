---
id: "backup"
title: "Sao lưu"
sidebar_label: "Sao lưu"
sidebar_position: "1"
---

# Backup

  * [ ![](/img/migrated/icon-glossary-46e0a6e7.png) Initial Setup ](javascript: "Initial Setup")
  * [ ![](/img/migrated/icon-networking-0257e14b.png) Hướng dẫn chi tiết (Tutorials) ](javascript: "Hướng dẫn chi tiết \(Tutorials\)")
  * [ ![](/img/migrated/question-45cd06af.png) Các câu hỏi thường gặp (FAQs) ](javascript: "Các câu hỏi thường gặp \(FAQs\)")
Backup
  1. [FPT Cloud Portal](https://fptcloud.com/danh-sach-tai-lieu/ "FPT Cloud Portal")
  2. Backup

Backup
## 1.1. Backup Native là gì?
Backup Native là dịch vụ sao lưu dữ liệu dành cho Cloud Server (VM) và Volume trên FPT Cloud.
Dịch vụ giúp người dùng tạo ra các bản sao lưu (backup) theo lịch hẹn hoặc thủ công, và có thể khôi phục lại hệ thống về thời điểm mong muốn khi xảy ra lỗi, sự cố, hay nhầm lẫn thao tác.
Các bản sao lưu được quản lý ngay trong giao diện Backup Management, dễ theo dõi, dễ thao tác, và hoàn toàn tự động.
## 1.2. Những lợi ích khi sử dụng
Backup Native mang đến cho bạn các lợi ích sau:
  * **Bảo vệ dữ liệu toàn diện**
Các bản sao lưu định kỳ giúp bạn luôn có điểm khôi phục an toàn khi VM hoặc Volume gặp sự cố.
  * **Khôi phục nhanh chóng**
Chỉ vài thao tác là có thể đưa hệ thống trở lại trạng thái trước đó mà không cần xử lý thủ công phức tạp.
  * **Hoạt động tự động**
Các job sao lưu được tạo theo lịch, chạy ngầm, không làm gián đoạn ứng dụng đang sử dụng.
  * **Hỗ trợ cả VM và Volume**
Linh hoạt cho nhiều loại workload: ứng dụng, database, file server, môi trường dev/test…
  * **Dễ quản lý, dễ theo dõi**
Toàn bộ trạng thái job, lịch sử chạy, report… được hiển thị rõ ràng trong một giao diện duy nhất.
  * **An tâm vận hành dài hạn**
Hạn chế rủi ro mất dữ liệu do lỗi thao tác, lỗi phần mềm, hoặc sự cố bất ngờ.

## 1.3. Các đối tượng được hỗ trợ
Backup Native hiện hỗ trợ hai nhóm tài nguyên chính:
### Cloud Server (VM)
  * Sao lưu toàn bộ trạng thái VM tại thời điểm backup.
  * Phù hợp cho các ứng dụng, website, hệ thống chạy trực tiếp trên máy chủ.

### PVC của FPT Kubernetes Engine (FKE)
  * Chỉ các volume được tạo ra bởi dịch vụ **FKE** mới được phép tạo job backup.
  * Hỗ trợ sao lưu dữ liệu ứng dụng đang chạy trong cluster K8S (database, file storage, ứng dụng stateful…).
  * Phù hợp cho workload containerized cần đảm bảo tính toàn vẹn dữ liệu.

## 1.4. Các usecase phổ biến
Dưới đây là những tình huống mà khách hàng thường sử dụng Backup Native:
  * **Khôi phục dữ liệu khi xóa nhầm file hoặc config**
Bạn có thể restore volume về bản sao gần nhất.
  * **Rollback ứng dụng khi update lỗi**
Khi deploy phiên bản mới gây lỗi, bạn có thể khôi phục VM về snapshot an toàn.
  * **Bảo vệ dữ liệu định kỳ**
Lên lịch backup mỗi ngày/tuần/tháng để đảm bảo hệ thống luôn có điểm an toàn.
  * **Sao lưu trước khi thực hiện thay đổi lớn**
Ví dụ nâng cấp hệ điều hành, thay đổi cấu trúc database, nâng cấp phần mềm.
  * **Lưu bản backup cho môi trường test/dev**
Giúp đội dev/QA dễ dàng quay lại trạng thái ban đầu khi test chức năng.

##  Trang chủ 
01Initial Setup 
02Hướng dẫn chi tiết (Tutorials) 
03Các câu hỏi thường gặp (FAQs) 
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
  * [ 紹介 chung ](https://fptcloud.com/gioi-thieu/ "紹介 chung")
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

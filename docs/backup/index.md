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
Backup Native là service backup dữ liệu dành for Cloud Server (VM) and Volume trên FPT Cloud.
Dịch vụ giúp user tạo ra the bản backup (backup) theo lịch hẹn or thủ công, and can restore lại hệ thống về thời điểm mong muốn when xảy ra lỗi, sự cố, hay nhầm lẫn thao tác.
Các bản backup is quản lý ngay in giao diện Backup Management, dễ theo dõi, dễ thao tác, and hoàn toàn tự động.
## 1.2. Những lợi ích when sử dụng
Backup Native mang to for you the lợi ích sau:
  * **Bảo vệ dữ liệu toàn diện**
Các bản backup định kỳ giúp you luôn có điểm restore an toàn when VM or Volume gặp sự cố.
  * **Khôi phục nhanh chóng**
Chỉ andi thao tác là can đưa hệ thống trở lại status trước that mà không cần xử lý thủ công phức tạp.
  * **Hoạt động tự động**
Các job backup is tạo theo lịch, chạy ngầm, không làm gián đoạn ứng dụng is sử dụng.
  * **Hỗ trợ cả VM and Volume**
Linh hoạt for nhiều loại workload: ứng dụng, database, file server, môi trường dev/test…
  * **Dễ quản lý, dễ theo dõi**
Toàn bộ status job, lịch sử chạy, report… is displayed rõ ràng in a giao diện duy nhất.
  * **An tâm vận hành dài hạn**
Hạn chế rủi ro mất dữ liệu do lỗi thao tác, lỗi phần mềm, or sự cố bất ngờ.

## 1.3. Các đối tượng is hỗ trợ
Backup Native hiện hỗ trợ hai nhóm tài nguyên chính:
### Cloud Server (VM)
  * Sao lưu toàn bộ status VM tại thời điểm backup.
  * Phù hợp for the ứng dụng, website, hệ thống chạy trực tiếp trên server.

### PVC of FPT Kubernetes Engine (FKE)
  * Chỉ the volume is tạo ra bởi service **FKE** mới is phép tạo job backup.
  * Hỗ trợ backup dữ liệu ứng dụng is chạy in cluster K8S (database, file storage, ứng dụng stateful…).
  * Phù hợp for workload containerized cần đảm bảo tính toàn vẹn dữ liệu.

## 1.4. Các usecase phổ biến
Dưới đây là những tình huống mà khách hàng thường sử dụng Backup Native:
  * **Khôi phục dữ liệu when xóa nhầm file or config**
Bạn can restore volume về bản sao gần nhất.
  * **Rollback ứng dụng when update lỗi**
Khi deploy version mới gây lỗi, you can restore VM về snapshot an toàn.
  * **Bảo vệ dữ liệu định kỳ**
Lên lịch backup mỗi ngày/tuần/tháng to đảm bảo hệ thống luôn có điểm an toàn.
  * **Sao lưu before thực hiện thay đổi lớn**
Ví dụ upgrade hệ điều hành, thay đổi cấu trúc database, upgrade phần mềm.
  * **Save bản backup for môi trường test/dev**
Giúp đội dev/QA dễ dàng quay lại status ban đầu when test chức năng.

##  Home page 
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

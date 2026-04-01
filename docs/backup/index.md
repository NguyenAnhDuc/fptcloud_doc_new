---
id: "backup"
title: "Sao lưu"
sidebar_label: "Sao lưu"
sidebar_position: "1"
---

# Backup

  * [ ![](/img/migrated/icon-glossary-46e0a6e7.png) Initial Setup ](javascript: "Initial Setup")
  * [ ![](/img/migrated/icon-networking-0257e14b.png) Hướng dẫn details (Tutorials) ](javascript: "Hướng dẫn details \(Tutorials\)")
  * [ ![](/img/migrated/question-45cd06af.png) Các câu hỏi thường gặp (FAQs) ](javascript: "Các câu hỏi thường gặp \(FAQs\)")

Backup
## 1.1. Backup Native là gì?
Backup Native là service backup dữ liệu dành for Cloud Server (VM) and Volume trên FPT Cloud.
Dịch vụ giúp user tạo ra the bản backup (backup) theo lịch hẹn or thủ công, and can restore lại system về thời điểm mong muốn when xảy ra lỗi, sự cố, hay nhầm lẫn thao tác.
Các bản backup is quản lý ngay in interface Backup Management, dễ theo dõi, dễ thao tác, and hoàn toàn tự động.
## 1.2. Những lợi ích when sử dụng
Backup Native mang đến for you the lợi ích sau:
  * **Bảo vệ dữ liệu toàn diện**
Các bản backup định kỳ giúp you luôn có điểm restore an toàn when VM or Volume gặp sự cố.
  * **Khôi phục nhanh chóng**
Chỉ andi thao tác là can đưa system trở lại status trước that mà không need to xử lý thủ công phức tạp.
  * **Hoạt động tự động**
Các job backup is tạo theo lịch, chạy ngầm, không làm gián đoạn ứng dụng is sử dụng.
  * **Hỗ trợ cả VM and Volume**
Linh hoạt for nhiều loại workload: ứng dụng, database, file server, môi trường dev/test…
  * **Dễ quản lý, dễ theo dõi**
Toàn bộ status job, lịch sử chạy, report… is displayed rõ ràng in a interface duy nhất.
  * **An tâm vận hành dài hạn**
Hạn chế rủi ro mất dữ liệu do lỗi thao tác, lỗi phần mềm, or sự cố bất ngờ.

## 1.3. Các đối tượng is hỗ trợ
Backup Native hiện hỗ trợ hai nhóm tài nguyên chính:
### Cloud Server (VM)
  * Sao lưu toàn bộ status VM tại thời điểm backup.
  * Phù hợp for the ứng dụng, website, system chạy trực tiếp trên server.

### PVC of FPT Kubernetes Engine (FKE)
  * Chỉ the volume is tạo ra bởi service **FKE** mới is phép tạo job backup.
  * Hỗ trợ backup dữ liệu ứng dụng is chạy in cluster K8S (database, file storage, ứng dụng stateful…).
  * Phù hợp for workload containerized need to đảm bảo tính toàn vẹn dữ liệu.

## 1.4. Các usecase phổ biến
Dưới đây là những tình huống mà customer thường sử dụng Backup Native:
  * **Khôi phục dữ liệu when xóa nhầm file or config**
Bạn can restore volume về bản sao gần nhất.
  * **Rollback ứng dụng when update lỗi**
Khi deploy version mới gây lỗi, you can restore VM về snapshot an toàn.
  * **Bảo vệ dữ liệu định kỳ**
Lên lịch backup mỗi ngày/tuần/tháng to đảm bảo system luôn có điểm an toàn.
  * **Sao lưu before thực hiện thay đổi lớn**
Ví dụ nâng cấp hệ điều hành, thay đổi cấu trúc database, nâng cấp phần mềm.
  * **Save bản backup for môi trường test/dev**
Giúp đội dev/QA dễ dàng quay lại status ban đầu when test chức năng.

##  Trang chủ 
01Initial Setup 
02Hướng dẫn details (Tutorials) 
03Các câu hỏi thường gặp (FAQs)

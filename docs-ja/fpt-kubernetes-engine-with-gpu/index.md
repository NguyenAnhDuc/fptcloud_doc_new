---
id: "fpt-kubernetes-engine-with-gpu"
title: "Fpt Kubernetes Engine With Gpu"
sidebar_label: "Fpt Kubernetes Engine With Gpu"
sidebar_position: "1"
---

# FPT Kubernetes Engine with GPU

  * [ ![](/img/migrated/icon-networking-2-09c1ef04.png) Hướng dẫn sử dụng ](javascript: "Hướng dẫn sử dụng")
  1. [FPT Cloud Portal](https://fptcloud.com/danh-sach-tai-lieu/ "FPT Cloud Portal")
  2. FPT Kubernetes Engine with GPU

FPT Cloud cung cấp Kubernetes sử dụng GPU NVIDIA có các tính năng chính sau:
  * Cấu hình GPU linh hoạt với nhiều loại GPU, bộ nhớ GPU tùy chọn, áp dụng theo từng Worker Group.
  * Quản lý và cấp phát tài nguyên GPU trong Kubernetes tự động với NVIDIA Operator
  * Trực quan hóa và giám sát GPU bằng NVIDIA DCGM.
  * Tự động tăng/giảm Container/Node với Autoscaler khi ứng dụng yêu cầu sử dụng tài nguyên GPU tăng lên/giảm đi.
  * Hỗ trợ GPU sharing với cơ chế Multi-Instance, giúp tối ưu hóa tài nguyên và chi phí sử dụng GPU.

FPT Cloud sử dụng NVIDIA GPU Operator cung cấp công cụ tự động quản lý tất cả các thành phần phần mềm cần thiết để sử dụng GPU trên Kubernetes. GPU Operator cho phép người dùng sử dụng tài nguyên GPU giống như sử dụng CPU trong cụm Kubernetes.
Các thành phần của Operator bao gồm:
  * NVIDIA Drivers (CUDA, MIG,…)
  * NVIDIA Device Plugin
  * NVIDIA Container Toolkit
  * NVIDIA GPU Feature Discovery
  * NVIDIA Data Center GPU Manager (Monitoring)

Trên region **Hanoi** và **Saigon** , FPT Cloud hiện tại đang hỗ trợ Kubernetes sử dụng GPU Nvidia A30 với các MIG profile sau:  
| **No.**  | **GPU A30 Profile**  | **Strategy**  | **Number instance**  | **Instance resource**  |  
| --- | --- | --- | --- | --- |  
| 1  | all-1g.6gb  | single  | 4  | 1g.6gb  |  
| 2  | all-2g.12gb  | single  | 2  | 2g.12gb  |  
| 3  | all-balanced  | mixed  | 2  | 1g.6gb  |  
| 4  |   |   | 1  | 2g.12gb  |  
| 5  | none (no label)  | none  | 0  | 0 (Entire)  |  
Trên region Hanoi 2 và Japan, FPT Cloud hiện tại đang hỗ trợ Kubernetes sử dụng GPU Nvidia H100 và GPU Nvidia H200  
| **No.**  | **GPU H100 SXM5**  | **Strategy**  | **Number instance**  | **Instance resource**  |  
| --- | --- | --- | --- | --- |  
| 1  | all-1g.10gb  | single  | 7  | 1g.10gb  |  
| 2  | all-1g.20gb  | single  | 4  | 1g.20gb  |  
| 3  | all-2g.20gb  | single  | 3  | 2g.20gb  |  
| 4  | all-3g.40gb  | single  | 2  | 3g.40gb  |  
| 5  | all-4g.40gb  | single  | 1  | 4g.40gb  |  
| 6  | all-7g.80gb  | single  | 1  | 7g.80gb  |  
| 7  | all-balanced  | mixed  | 2  
1  
1  | 1g.10gb  
2g.20gb  
3g.40gb  |  
| 8  | none (no label)  | none  | 0  | 0 (Entire)  |  
| **No.**  | **GPU H200 SXM5**  | **Strategy**  | **Number instance**  | **Instance resource**  |  
| --- | --- | --- | --- | --- |  
| 1  | all-1g.18gb  | single  | 7  | 1g.18gb  |  
| 2  | all-1g.35gb  | single  | 4  | 1g.35gb  |  
| 3  | all-2g.25gb  | single  | 3  | 2g.25gb  |  
| 4  | all-3g.71gb  | single  | 2  | 3g.71gb  |  
| 5  | all-4g.71gb  | single  | 1  | 4g.71gb  |  
| 6  | all-7g.141gb  | single  | 1  | 7g.141gb  |  
| 7  | all-balanced  | mixed  | 2  
1  
1  | 1g.18gb  
2g.35gb  
3g.71gb  |  
| 8  | none (no label)  | none  | 0  | 0 (Entire)  |  
**_Ví dụ:_**
👉 Nếu chọn cấu hình strategy single: all-1g.6gb, card GPU A30 trên worker được chia nhỏ thành 4 mig-devices có tài nguyên gpu logic (bằng ¼ GPU vật lý) và 6GB GPU RAM.
👉 Nếu chọn cấu hình strategy single: all-1g.10gb, card GPU H100 trên worker được chia nhỏ thành 7 mig-devices có tài nguyên gpu logic (bằng 1⁄7 GPU vật lý) và 10GB GPU RAM.
**_Chú ý:_**
MIG config áp dụng cho tất cả các card gắn trên worker. MIG strategy trên các worker group của cùng cluster phải cùng 1 loại (single/mixed/none).
##  Trang chủ 
01Hướng dẫn sử dụng 
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

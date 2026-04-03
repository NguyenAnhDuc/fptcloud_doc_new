---
id: "overview"
title: "Overview"
description: "**GPU Virtual Machine (GPU VM)** enables you to **deploy and manage high-performance GPU servers** with ease. **GPU VM u"
sidebar_label: "Overview"
sidebar_position: "2"
---

# Overview

### GPU Virtual Machine là gì?
**GPU Virtual Machine (GPU VM)** cho phép bạn **triển khai và quản lý các máy chủ GPU hiệu năng cao** một cách dễ dàng. **GPU VM sử dụng GPU passthrough để có được GPU chuyên dụng**, các ứng dụng truy cập GPU thông qua các lớp của hệ điều hành khách và hypervisor. Các tài nguyên VM quan trọng khác mà ứng dụng sử dụng, như RAM, storage và networking, cũng được ảo hóa.
Hiện tại chúng tôi cung cấp hai loại máy ảo (VM), mỗi loại có tùy chọn storage khác nhau.

### Loại GPU VM
| **Loại GPU VM**  | **Loại Storage**  | **Đặc điểm chính của Storage**  |
| --- | --- | --- |
| **Type #1**  | **Block Storage – Ephemeral Disk (NVMe)**  | - Dung lượng cố định theo gói GPU Instance<br/>- **Tối ưu cho các khối lượng công việc training hiệu năng cao**<br/>- Không phù hợp cho lưu trữ dữ liệu dài hạn<br/>- Không có tính năng backup/restore tự động<br/>- Dữ liệu sẽ không bị xóa khi bạn dừng VM |
| **Type #2**  | **Block Storage – Persistent Disk**  | - **Storage có thể mở rộng theo nhu cầu, từ 100GB**<br/>- **Lý tưởng cho lưu trữ dữ liệu dài hạn**<br/>- Hỗ trợ backup & restore tự động<br/>- Storage được tính phí riêng biệt với chi phí GPU Instance |

### Cách hoạt động
GPU VM hoạt động như một máy tính mạnh mẽ trên đám mây với GPU chuyên dụng cho các khối lượng công việc chuyên sâu. Bạn có thể:
  * **Dễ dàng triển khai GPU VM** với các thế hệ GPU mới nhất chỉ trong vài phút thông qua FPT Cloud Portal.
  * **Chạy các tác vụ AI, machine learning và xử lý dữ liệu** ở tốc độ cao với khả năng tăng tốc GPU tiên tiến.
  * **Quản lý mọi thứ từ một cổng trực tuyến đơn giản**, không cần đội ngũ IT nội bộ.

### Tại sao chọn GPU Virtual Machine?
  * **Triển khai một cú nhấp** từ FPT Smart Cloud Portal.
  * **Cấu hình đơn giản** về networking, storage và security.
  * **AI training & deep learning nhanh hơn:** Các GPU thế hệ tiên tiến mang lại tốc độ và hiệu quả vượt trội, hoàn hảo cho các mô hình AI và machine learning quy mô lớn.
  * **Tối ưu cho AI inference:** Xử lý dữ liệu và đưa ra quyết định thời gian thực nhanh hơn bao giờ hết.

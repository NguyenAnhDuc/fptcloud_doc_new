---
id: "thay-doi-cau-hinh-flavor-cua-worker-pool"
title: "Thay đổi cấu hình flavor của worker pool"
description: "Dịch vụ MFKE không cho phép update cấu hình flavor của worker trong worker pool một cách trực tiếp, thay vào đó người dù"
sidebar_label: "Thay đổi cấu hình flavor của worker pool"
sidebar_position: 54
pagination_next: null
---

# Thay Doi Cau Hinh Flavor Cua Worker Pool

Dịch vụ MFKE không cho phép update cấu hình flavor của worker trong worker pool một cách trực tiếp, thay vào đó người dùng cần tạo worker pool mới với cấu hình flavor mong muốn cho worker. Điều này đã được đề cập trong mục số 9 của tài liệu FAQs dịch vụ MFKE 
[http://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=mfke-faqs](http://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=mfke-faqs)
**Cách thay đổi flavor của worker pool trong dịch vụ MFKE**
**Bước 1: Tạo worker pool mới**
  * Tạo một worker pool mới với cấu hình flavor mà bạn mong muốn.
  * Đảm bảo các node trong pool mới đã hoạt động ổn định và tham gia vào cluster.

**Bước 2: Sau khi tạo worker pool mới, người dùng cần chuyển ứng dụng từ worker pool có cấu hình flavor cũ sang worker pool có cấu hình flavor mới**
Việc chuyển ứng dụng này người dùng có thể tham khảo một vài cách ví dụ như sau:
Trường hợp 1: Ứng dụng được deploy sử dụng nodeSelector
  1. Gán label của worker pool mới giống với worker pool cũ
  2. Sau đó, xóa worker pool cũ khỏi cluster → Các pod của ứng dụng này sẽ được tạo mới ở trên worker pool mới. Đến khi pod ứng dụng được tạo mới thành công, các pod ứng dụng trên worker pool cũ sẽ xóa đi. Khi các ứng dụng trên worker pool cũ được evict hoàn toàn, các worker trong worker pool cũ sẽ bị drain và xóa bỏ khỏi cluster.
Trường hợp 2: Ứng dụng không dùng nodeSelector
  3. Chạy lệnh cordon để ngăn các node trong worker pool cũ nhận pod mới.
  4. Sau đó, thực hiện rollout restart để khởi động lại các pod ứng dụng để các mới sẽ được khởi tạo sang worker pool mới, các pod trên worker cũ sẽ bị terminate đi
  5. Sau khi các pod ứng dụng chuyển thành công hàn toàn sang worker pood mới, người dùng thực hiện xóa worker pool cũ trên portal
Lưu ý quá trình cluster drain và xóa bỏ worker pool cũ có thể không được thực hiện thành công tự động hoàn toàn do một vài lý do như:

  * Ứng dụng dùng Pod Disruption Budget (PDB) – giới hạn số pod có thể bị xóa cùng lúc.
  * Ứng dụng có sử dụng Persistent Volume Claim (PVC) dạng block.
  * Trong các trường hợp trên, bạn cần chủ động kiểm tra và evict thủ công các pod chưa bị xóa, để đảm bảo ứng dụng chuyển hết sang worker pool mới.
Khuyến nghị
  * Nên thực hiện thay đổi này vào giờ thấp điểm để tránh ảnh hưởng đến người dùng thật.
  * Theo dõi trạng thái pod và ứng dụng sau khi chuyển để đảm bảo mọi thứ hoạt động ổn định.
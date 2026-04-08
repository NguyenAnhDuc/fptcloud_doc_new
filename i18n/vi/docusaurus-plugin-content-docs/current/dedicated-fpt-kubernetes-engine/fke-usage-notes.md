---
id: "fke-usage-notes"
title: "Lưu ý khi sử dụng FKE"
description: "Các khuyến nghị và lưu ý khi sử dụng dịch vụ Dedicated FPT Kubernetes Engine."
sidebar_label: "Lưu ý khi sử dụng FKE"
sidebar_position: "29"
draft: true
---

# Lưu ý khi sử dụng FKE

### 1. Chọn HA Master Nodes
Để đảm bảo tính sẵn sàng, hãy chọn HA Master Nodes cho các hệ thống quan trọng. Có thể chọn non-HA cho môi trường Dev/Test.

### 2. Sử dụng namespace
Tạo namespace để phân tách ứng dụng hoặc môi trường, giúp quản lý dễ dàng hơn. Không nên triển khai ứng dụng trong các namespace do hệ thống tạo sẵn.

### 3. Sử dụng Readiness & Liveness Probe
Giúp đảm bảo tính sẵn sàng của ứng dụng.
Readiness Probe đảm bảo rằng các yêu cầu chỉ được chuyển đến Pod khi Pod đã sẵn sàng tiếp nhận. Vì Pod thường mất thời gian để khởi động, việc cấu hình Readiness Probe giúp ngăn dịch vụ chuyển yêu cầu đến các Pod đang khởi động (ứng dụng chưa sẵn sàng).
Liveness Probe đảm bảo rằng Pod chạy ứng dụng đang ở trạng thái Running. Nếu Liveness Probe thất bại, Pod sẽ được khởi động lại.

### 4. Cấu hình Resource Requests & Limits
Đảm bảo container có đủ tài nguyên để chạy mà không vượt quá mức cho phép. Nếu không đặt limits, Pod có thể tiêu thụ nhiều tài nguyên hơn mức cho phép và khiến Node bị crash.

### 5. Sử dụng Autoscale
Sử dụng tính năng Autoscale của FKE dựa trên Kubernetes HPA để ứng dụng phản hồi nhanh khi lưu lượng tăng. Khi mức sử dụng thấp, hệ thống tự động giảm Pod/Node xuống mức tối thiểu.

### 6. Sử dụng nhiều Pod (>=2)
Để đảm bảo HA, sử dụng ít nhất 2 Pod cho mỗi dịch vụ. Dùng anti-affinity để phân tán các replica Pod ra các Node khác nhau.

### 7. Sử dụng Persistent Volume
FKE hỗ trợ Block và File Storage.
  * Block Storage là lựa chọn mặc định của hệ thống, hỗ trợ RWO và có hiệu suất tốt theo Storage Policy.
  * File Storage hỗ trợ RWX qua NFS. Không sử dụng File Storage cho cơ sở dữ liệu.

### 8. Backup
Lên lịch backup cluster theo hướng dẫn. Người dùng phải tự backup dữ liệu trên các PVC (nếu có). Dữ liệu có thể được backup lên VM và sau đó backup bằng giải pháp FCloud Backup & Recovery.

### 9. Monitoring & Logging
Sử dụng FMON để tích hợp giám sát và logging với Kubernetes cluster. Cấu hình cảnh báo cho hệ thống.

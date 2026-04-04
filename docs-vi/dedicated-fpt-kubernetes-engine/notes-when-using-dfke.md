---
id: "notes-when-using-dfke"
title: "Lưu ý khi sử dụng DFKE"
description: "Để đảm bảo tính sẵn sàng, hãy bật HA Master Nodes cho các hệ thống quan trọng. Non-HA có thể dùng cho môi trường Dev và Test."
sidebar_label: "Lưu ý khi sử dụng DFKE"
sidebar_position: "24"
---

# Lưu ý khi sử dụng DFKE

### 1. Bật HA Master Nodes:
Để đảm bảo tính sẵn sàng, hãy bật HA Master Nodes cho các hệ thống quan trọng. Non-HA có thể dùng cho môi trường Dev và Test.

### 2. Sử dụng Namespace:
Tạo namespace để phân chia ứng dụng hoặc môi trường, giúp quản lý dễ dàng hơn. Tránh sử dụng các namespace do hệ thống tạo sẵn để triển khai ứng dụng.

### 3. Sử dụng Readiness & Liveness Probe:
Đảm bảo tính sẵn sàng của ứng dụng. Readiness Probe đảm bảo rằng các yêu cầu chỉ được chuyển đến pod khi pod đã sẵn sàng tiếp nhận. Pod thường mất thời gian để khởi động ứng dụng, vì vậy cấu hình Readiness Probe giúp ngăn các yêu cầu được gửi đến pod trong khi đang khởi động. Liveness Probe đảm bảo pod chạy ứng dụng đang ở trạng thái "Running"; nếu thất bại, pod sẽ được khởi động lại.

### 4. Cấu hình Resource Requests & Limits:
Giúp container đảm bảo có đủ tài nguyên để chạy và không vượt quá giới hạn tài nguyên cho phép. Nếu không đặt limits, pod có thể sử dụng nhiều tài nguyên hơn mức cho phép, có thể gây crash node.

### 5. Sử dụng Autoscale:
Tận dụng tính năng Autoscale của FKE dựa trên Kubernetes HPA để ứng dụng phản hồi nhanh khi lưu lượng truy cập tăng. Khi mức sử dụng thấp, hệ thống tự động scale down pod/node xuống mức tối thiểu.

### 6. Sử dụng nhiều Pod (>=2):
Đảm bảo tính sẵn sàng cao bằng cách sử dụng ít nhất 2 pod cho mỗi dịch vụ. Dùng anti-affinity để phân tán các replica pod ra các node khác nhau.

### 7. Sử dụng Persistent Volume:
D-FKE hỗ trợ Block và File Storage. Block Storage là lựa chọn mặc định của hệ thống, hỗ trợ RWO và có hiệu suất tốt theo Storage Policy. File Storage hỗ trợ RWX qua NFS. **Không sử dụng File Storage cho Cơ sở dữ liệu**.

### 8. Backup:
Người dùng nên tự backup dữ liệu trên Persistent Volume Claims (PVC). Có thể backup lên máy ảo và sử dụng giải pháp FCloud Backup & Recovery để backup VM.

### 9. Monitoring & Logging:
Sử dụng FMON để tích hợp giám sát và logging với Kubernetes cluster. Cấu hình cảnh báo cho hệ thống.

---
id: "notes-when-using-mfke"
title: "Lưu ý khi sử dụng MFKE"
description: "Các lưu ý quan trọng khi sử dụng dịch vụ Managed FPT Kubernetes Engine."
sidebar_label: "Lưu ý khi sử dụng MFKE"
sidebar_position: "27"
draft: true
---

# Lưu ý khi sử dụng MFKE

### 1. Sử dụng Namespace:
Tạo namespace để phân chia ứng dụng hoặc môi trường, giúp quản lý dễ dàng hơn. Tránh sử dụng các namespace do hệ thống tạo sẵn để triển khai ứng dụng.

### 2. Sử dụng Worker Group:
Khi tạo Kubernetes cluster, cần ít nhất một worker group (base) để chứa các thành phần hệ thống (connector, metrics-server, v.v.). Đối với môi trường production yêu cầu tính sẵn sàng cao, hãy cấu hình tối thiểu 3 worker cho nhóm base và sử dụng worker group riêng biệt cho ứng dụng.

### 3. Sử dụng Readiness & Liveness Probe:
Đảm bảo ứng dụng sẵn sàng trước khi nhận traffic. Readiness Probe đảm bảo chỉ gửi request đến pod khi pod đã sẵn sàng tiếp nhận. Pod thường cần thời gian để khởi động ứng dụng, vì vậy cài đặt Readiness Probe giúp tránh gửi request trong lúc pod đang khởi động. Liveness Probe đảm bảo pod đang chạy ứng dụng ở trạng thái "Running"; nếu thất bại, pod sẽ được khởi động lại.

### 4. Đặt Resource Request & Limit:
Giúp container đảm bảo có đủ tài nguyên để chạy và không vượt quá giới hạn tài nguyên cho phép. Nếu không đặt giới hạn, pod có thể sử dụng nhiều tài nguyên hơn mức cho phép, có thể gây sập node.

### 5. Sử dụng Autoscale:
Tận dụng tính năng Autoscale của FKE dựa trên Kubernetes HPA để ứng dụng có thể phản hồi nhanh khi lượng truy cập tăng. Khi ít người dùng, hệ thống tự động giảm số pod/node xuống mức tối thiểu.

### 6. Sử dụng nhiều Pod (>=2):
Đảm bảo tính sẵn sàng cao bằng cách sử dụng ít nhất hai pod cho mỗi service. Sử dụng anti-affinity để phân phối các replica pod trên các node khác nhau.

### 7. Sử dụng Persistent Volume:
M-FKE hỗ trợ Block Storage — lựa chọn mặc định của hệ thống, hỗ trợ RWO và có hiệu suất tốt theo Storage Policy.

### 8. Backup:
Người dùng nên thực hiện sao lưu dữ liệu trên Persistent Volume Claim (PVC). Có thể sao lưu lên máy ảo, và sử dụng giải pháp FCloud Backup & Recovery để sao lưu VM.

### 9. Monitoring & Logging:
Sử dụng FMON để tích hợp monitoring và logging với Kubernetes cluster. Thiết lập cảnh báo cho hệ thống.

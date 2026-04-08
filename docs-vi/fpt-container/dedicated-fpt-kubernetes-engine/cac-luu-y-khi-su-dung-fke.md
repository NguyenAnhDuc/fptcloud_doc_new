---
id: "cac-luu-y-khi-su-dung-fke"
title: "Các lưu ý khi sử dụng FKE"
description: "Để đảm bảo tính sẵn sàng, chọn HA Master Nodes cho các hệ thống quan trọng. Có thể chọn non-HA cho các hệ thống Dev Test"
sidebar_label: "Các lưu ý khi sử dụng FKE"
sidebar_position: 3
---

# Các lưu ý khi sử dụng FKE

### 1. Chọn HA Master Nodes
Để đảm bảo tính sẵn sàng, chọn HA Master Nodes cho các hệ thống quan trọng. Có thể chọn non-HA cho các hệ thống Dev Test.

### 2. Sử dụng Namespaces
Tạo namespace để phân chia ứng dụng hoặc môi trường để dễ dàng quản lý. Tránh sử dụng các namespace được hệ thống tạo sẵn để deploy ứng dụng.

### 3. Sử dụng Readiness & Liveness Probes
Giúp đảm bảo tính sẵn sàng của ứng dụng.
Readiness Probes đảm bảo request được điều hướng tới pod chỉ khi pod đó ở trạng thái sẵn sàng để nhận request. Các Pod thường tốn thời gian để start ứng dụng, việc đặt Readiness Probes giúp service không điều hướng request đến các Pod khi start (ứng dụng chưa ready).
Liveness Probes đảm bảo Pod chạy ứng dụng đang ở trạng thái Running, nếu Liveness Probes fail, pod sẽ được restart.

### 4. Đặt Resource Requests & Limits
Giúp container đảm bảo đủ lượng resources để chạy và không chạy quá lượng resource cho phép. Nếu không có limits, pod có thể sử dụng nhiều resource quá tài nguyên cho phép, có thể làm Node crash.

### 5. Sử dụng Autoscale
Sử dụng tính năng Autoscale của FKE dựa trên Kubernetes HPA giúp ứng dụng đáp ứng nhanh khi lượng truy cập tăng cao. Khi lưu lượng sử dụng sử dụng thấp, hệ thống sẽ tự động giảm các Pod/Nodes về mức tối thiểu.

### 6. Sử dụng nhiều Pod (>=2)
Để đảm bảo HA, nên sử dụng >=2 Pod cho mỗi service. Sử dụng anti-affinity để các replica pods nằm trên các Nodes khác nhau.

### 7. Sử dụng Persistent Volume
FKE hỗ trợ Block và File Storage.
  * Block Storage là lựa chọn mặc định cho hệ thống, hỗ trợ RWO, đáp ứng performance tốt theo Storage Policy.
  * File Storage hỗ trợ RWX sử dụng NFS. Không sử dụng File storage cho Database.

### 8. Backup
Đặt lịch Backup Cluster theo hướng dẫn. Người sử dụng cần tự thực hiện việc backup dữ liệu trên PVC (nếu có). Có thể backup ra VM sau đó thực hiện backup VM sử dụng giải pháp FCloud Backup & Recovery.

### 9. Monitoring & Logging
Sử dụng FMON để tích hợp monitor & log với Kubernetes cluster. Đặt cảnh báo cho hệ thống.

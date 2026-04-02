---
id: "tinh-nang-tang-cuong-bao-mat-mfke"
title: "Tính năng tăng cường bảo mật cho M-FKE"
description: "Tổng quan về các tính năng tăng cường bảo mật trong FPT Cloud Managed Kubernetes Engine."
sidebar_label: "Tính năng tăng cường bảo mật cho M-FKE"
sidebar_position: 29
---

# Tính năng tăng cường bảo mật cho M-FKE

FPT Cloud Managed Kubernetes Engine (M-FKE) cung cấp nhiều tính năng tăng cường bảo mật cho cluster.

Các tính năng bảo mật hiện có:

- **[Benchmark Security](./tinh-nang-benchmark-cluster.md)**: Đánh giá cấu hình kubelet của worker node dựa trên tiêu chuẩn CIS (Center for Internet Security).
- **[Runtime Security](./tinh-nang-runtime-security-cluster.md)**: Phát hiện hành vi bất thường trong Kubernetes cluster theo thời gian thực bằng Falco. Bạn có thể nhận cảnh báo qua Telegram hoặc Gmail.
- **[Workload Scan](./tinh-nang-workload-scan.md)**: Quét lỗ hổng bảo mật trong container image, đánh giá cấu hình RBAC và tạo báo cáo kiểm tra cấu hình bằng Trivy.
- **[Audit Log](./audit-log-vn.md)**: Ghi lại tất cả API request và thao tác gửi đến kube-apiserver, hỗ trợ phân tích bảo mật và tuân thủ quy định.

:::note
Tất cả các tính năng tăng cường bảo mật chỉ khả dụng sau khi cluster được tạo thành công (trạng thái Succeeded/Running).
:::

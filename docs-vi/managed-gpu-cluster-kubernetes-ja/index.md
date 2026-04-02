---
id: "managed-gpu-cluster-kubernetes-ja"
title: "Managed GPU Cluster (Kubernetes)"
description: "Tài liệu tổng hợp về Managed GPU Cluster (Kubernetes)"
sidebar_label: "Managed GPU Cluster (Kubernetes)"
sidebar_position: 1
---

# Managed GPU Cluster (Kubernetes)

**FPT Managed GPU Cluster** là dịch vụ dựa trên nền tảng mã nguồn mở K8s, tự động hóa việc triển khai, sao chép và quản lý các ứng dụng container. FPT Managed GPU Cluster tích hợp đầy đủ các thành phần điều phối container, lưu trữ, mạng, bảo mật và PaaS, cung cấp môi trường tối ưu để bạn phát triển và triển khai ứng dụng trên đám mây.

**FPT Managed GPU Cluster** cung cấp mô hình dịch vụ Managed GPU Cluster cho FKE. Khi sử dụng MANAGED GPU CLUSTER, FPT Cloud quản lý toàn bộ các thành phần control plane, còn bạn triển khai và quản lý các worker node. MANAGED GPU CLUSTER giúp bạn tập trung vào việc triển khai ứng dụng mà không cần tốn tài nguyên cho việc quản lý K8s cluster.

**FPT Managed GPU Cluster** là mô hình dịch vụ dựa trên Kubernetes – nền tảng mã nguồn mở, hỗ trợ tự động hóa triển khai, sao chép và quản lý các ứng dụng container. FPT Managed GPU Cluster không chỉ tích hợp đầy đủ các thành phần điều phối container, lưu trữ, mạng, bảo mật và PaaS, mà còn cung cấp tài nguyên GPU để hỗ trợ các tác vụ tính toán phức tạp.

**Lưu ý trước khi sử dụng Managed GPU Cluster:**
- **Vị trí của Managed GPU Cluster:** Vị trí địa lý (region) có thể ảnh hưởng đến tốc độ truy cập vào các server đang sử dụng. Để tối ưu tốc độ, bạn cần chọn region gần nhất với đối tượng tạo ra traffic.
- **Số lượng node và cấu hình từng node:** Tài khoản FPT Cloud của bạn có giới hạn nhất định về RAM, CPU, lưu trữ, IP và các tài nguyên khác. Do đó, bạn cần xác định tài nguyên sử dụng và giới hạn tối đa để FPT Cloud hỗ trợ bạn tốt nhất.

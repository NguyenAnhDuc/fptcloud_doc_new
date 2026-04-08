---
id: "managed-fpt-kubernetes-engine"
title: "Managed FPT Kubernetes Engine"
description: "Managed FPT Kubernetes Engine (M-FKE) là dịch vụ Kubernetes được quản lý hoàn toàn trên FPT Cloud."
sidebar_label: "Managed FPT Kubernetes Engine"
sidebar_position: 1
draft: true
---

# Managed FPT Kubernetes Engine

FPT Kubernetes Engine dựa trên nền tảng mã nguồn mở Kubernetes, giúp tự động hoá việc triển khai, mở rộng và quản lý các ứng dụng container. FPT Kubernetes Engine tích hợp đầy đủ các thành phần: Container Orchestration, Storage, Networking, Security và PaaS, cung cấp môi trường tốt nhất để bạn phát triển và triển khai ứng dụng trên Cloud.

M-FKE (Managed FPT Kubernetes Engine) là mô hình cung cấp dịch vụ Kubernetes của FKE. Với M-FKE, FPT Cloud quản trị toàn bộ thành phần control plane, còn bạn chỉ cần triển khai và quản trị các worker node. M-FKE giúp bạn tập trung vào việc triển khai ứng dụng mà không cần tốn nguồn lực vào việc quản trị Kubernetes cluster.

## Lưu ý trước khi sử dụng M-FKE

- **Vị trí địa lý (Region):** Vị trí địa lý có thể ảnh hưởng đến tốc độ truy cập. Bạn nên chọn region gần nhất với đối tượng phát sinh traffic để tối ưu tốc độ.
- **Số lượng và cấu hình node:** Mỗi tài khoản FPT Cloud được cấp hạn mức tài nguyên nhất định (RAM, CPU, Storage, IP). Bạn nên xác định số lượng tài nguyên cần sử dụng và giới hạn tối đa cần đáp ứng để được hỗ trợ tốt nhất.

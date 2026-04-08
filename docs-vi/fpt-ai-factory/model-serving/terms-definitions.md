---
id: "terms-definitions"
title: "Thuật ngữ và định nghĩa"
description: "Các thuật ngữ chính trong Model Serving trên FPT AI Factory."
sidebar_label: "Thuật ngữ và định nghĩa"
sidebar_position: "4"
---

# Thuật ngữ và định nghĩa

| **Thuật ngữ** | **Định nghĩa** |
| --- | --- |
| Model | Mô hình hoặc mô hình AI là một chương trình máy tính được thiết kế để mô phỏng trí tuệ của con người |
| Model Serving | Là sản phẩm Platform as a Service (PaaS) cho phép triển khai và vận hành các mô hình AI trên nền tảng Kubernetes do FPT Cloud cung cấp |
| Model Type | Loại mô hình cần triển khai, bao gồm/không bao gồm image |
| Image | Template để đóng gói ứng dụng dưới dạng container để triển khai |
| Image Source | Loại nguồn cho image triển khai: Private/Public |
| Image Registry | Địa chỉ nơi lưu trữ image triển khai |
| Image Tag | Tag của image triển khai |
| Cluster | Cụm Kubernetes để triển khai mô hình |
| Instance | Đơn vị công suất xử lý |
| Instance Replica | Số lượng instance giống hệt nhau cung cấp công suất xử lý cho một mô hình |
| Resource Type Flavor | Loại tài nguyên công suất xử lý (CPU/RAM/DISK/GPU) |
| Deployment Strategy | Chiến lược triển khai trên Kubernetes (Recreate/Rolling Update) |
| Startup Command | Lệnh khởi động hoặc lệnh khởi tạo |
| Environment Variable | Các biến môi trường cần cấu hình |
| Nodes Selector | Lựa chọn nhãn cho worker node để triển khai mô hình |
| Tags | Nhãn cho mô hình đã triển khai |
| Services Type | Loại kết nối ngoài cho mô hình đã triển khai trên Kubernetes (Load Balancer/ClusterIP/Ingress) |
| Traffic Type | Loại kết nối dữ liệu (Public/Private) |
| Port | Cổng kết nối ngoài và container ingress (TCP) |
| GPU Sharing Mode | Loại ảo hóa dùng để phân chia GPU (MIG/MPS/Time-slice) |

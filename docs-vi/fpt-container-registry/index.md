---
id: "fpt-container-registry"
title: "FPT Container Registry"
description: "Dịch vụ lưu trữ và quản lý container image trên FPT Cloud."
sidebar_label: "FPT Container Registry"
sidebar_position: 1
---

# FPT Container Registry

**FPT Container Registry** là dịch vụ lưu trữ container image do FPT Cloud cung cấp. Dịch vụ giúp bạn đơn giản hóa và thống nhất quản lý toàn bộ vòng đời của container image, bao gồm lưu trữ, bảo mật, sao chép và quản trị, đồng thời tích hợp liền mạch với các công cụ DevOps, CI/CD, Kubernetes Engine và Virtual Machines.

## Những điều cần cân nhắc trước khi sử dụng

- **Vị trí địa lý (Region):** Region ảnh hưởng trực tiếp đến tốc độ pull/push image. Chọn Region gần nhất với nguồn traffic để tối ưu hiệu suất.
- **Số lượng repository và dung lượng:** Mỗi tài khoản FPT Cloud được cấp hạn mức nhất định. Xác định số lượng repository và dung lượng tối đa cần thiết trước khi kích hoạt.

## Lợi ích chính

- Kho lưu trữ image đồng nhất, tích hợp sẵn trên nền tảng S3 của FPT Cloud.
- Dễ dàng tích hợp vào pipeline CI/CD để triển khai ứng dụng trên nhiều môi trường.
- Không giới hạn số lần pull/push image (tùy gói dịch vụ). FPT Cloud có hai region Hà Nội và TP. HCM giúp tối ưu tốc độ tải và nạp image.

:::note
Dịch vụ này chỉ có thể được kích hoạt bởi Tenant Owner.
:::

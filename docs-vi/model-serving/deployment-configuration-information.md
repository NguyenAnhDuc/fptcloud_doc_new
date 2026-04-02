---
id: "deployment-configuration-information"
title: "Cấu hình deployment"
description: "Thông tin cấu hình của deployment Model Serving."
sidebar_label: "Cấu hình deployment"
sidebar_position: "10"
---

# Cấu hình deployment

Truy cập AI Platform --> Model Serving --> Deployment --> Tên Deployment --> Deployment Settings

[![Alt text](/img/migrated/13-de89c5f6.png)](/img/migrated/13-de89c5f6.png)

| **Thông tin** | **Mô tả** | **Hành động có thể thực hiện** |
| --- | --- | --- |
| Instance Replica | Số Instance trong Deployment | Chỉnh sửa tăng/giảm instance |
| Resource Flavor | Cấu hình sẵn của CPU/RAM/DISK/GPU | Chỉnh sửa thay đổi Flavor |
| vCPU | Cấu hình bộ xử lý (core) | Chỉnh sửa tăng/giảm vCPU |
| RAM | Cấu hình bộ nhớ (GB) | Chỉnh sửa tăng/giảm RAM |
| GPU | Cấu hình bộ xử lý đồ họa (chiếc) | Chỉnh sửa tăng/giảm GPU |
| Storage Type | Loại dung lượng lưu trữ | Chỉnh sửa thay đổi loại Storage |
| Access Mode | Loại truy cập lưu trữ | Chỉnh sửa thay đổi loại truy cập |
| Mount Path | Đường dẫn trong Instance kết nối đến Storage | Chỉnh sửa thay đổi đường dẫn kết nối đến Storage |
| Volume Capacity | Dung lượng lưu trữ (GB) | Chỉnh sửa tăng/giảm dung lượng lưu trữ |
| Deployment Strategy | Chiến lược triển khai (trong K8S) | Chỉnh sửa thay đổi chiến lược triển khai |
| Startup Command | Lệnh chạy khi khởi động instance | Chỉnh sửa thay đổi lệnh khởi chạy |
| Arguments | Tham số khởi động instance | Chỉnh sửa thay đổi tham số khởi chạy |
| Environment Variable | Các biến môi trường được gán cho instance | Chỉnh sửa thay đổi biến môi trường |
| Nodes Selector | Cấu hình nhãn Worker node/Worker group để triển khai đến | Chỉnh sửa thay đổi nhãn |
| Application Health Check | Cấu hình kiểm tra sức khỏe ứng dụng | Chỉnh sửa để thay đổi cấu hình kiểm tra sức khỏe |
| Readiness Probe | Kiểm tra xem instance đã sẵn sàng chưa | Chỉnh sửa để thay đổi cấu hình kiểm tra sức khỏe |
| Liveness Probe | Kiểm tra xem instance có đang chạy không | Chỉnh sửa để thay đổi cấu hình kiểm tra sức khỏe |
| Startup Probe | Kiểm tra xem instance đã khởi động chưa | Chỉnh sửa để thay đổi cấu hình kiểm tra sức khỏe |
| Tags | Gán nhãn cho Deployment | Chỉnh sửa để thêm, sửa, hoặc xóa nhãn được gán cho Deployment |

**Lưu ý:**

| **Tiêu đề** | **Mô tả** |
| --- | --- |
| Thay đổi Deployment Flavor | Hiện tại, việc thay đổi tài nguyên deployment từ Flavor sang Custom không được hỗ trợ. Tính năng này sẽ được phát triển sau. |
| Quy trình thay đổi | Khi thông tin trong Deployment Setting được cập nhật, Instance sẽ được triển khai lại theo cấu hình mới. |

---
id: "storage"
title: "Storage"
description: "GPU Container cung cấp High-Performance Storage (HPS) tồn tại trong suốt vòng đời của container."
sidebar_label: "Storage"
sidebar_position: 12
---

# Storage

## Ổ đĩa liên tục (Persistent Disk)
GPU Container cung cấp High-Performance Storage (HPS) tồn tại trong suốt vòng đời của container. Nó hoạt động tương tự như ổ cứng, cho phép bạn lưu trữ dữ liệu cần được giữ lại kể cả khi container bị dừng.
**Đặc điểm chính:**
  * Khả dụng cho đến khi container bị xóa vĩnh viễn.
  * Ngăn mất dữ liệu bằng cách lưu trữ dữ liệu, mô hình hoặc file cần được bảo toàn qua các lần khởi động lại hoặc cấu hình lại container.

## Ổ đĩa tạm thời (Temporary Disk)
Ổ đĩa tạm thời (NVMe) là loại lưu trữ cung cấp không gian lưu trữ tạm thời cho container. Mọi dữ liệu trên ổ đĩa tạm thời sẽ bị mất khi container bị dừng hoặc xóa, vì vậy hãy sao lưu dữ liệu quan trọng trước khi tắt container.
## So sánh các loại lưu trữ
| Tính năng | Ổ đĩa tạm thời | Ổ đĩa liên tục |
| --- | --- | --- |
| Tính bền vững của dữ liệu | Mất khi dừng | Giữ lại cho đến khi xóa container |
| Vòng đời | Gắn trực tiếp với phiên hoạt động của container | Gắn với thời hạn thuê container |
| Hiệu suất | Nhanh nhất (gắn trực tiếp) | Đáng tin cậy, nhìn chung chậm hơn ổ đĩa tạm thời |
| Dung lượng | Cố định theo GPU instance đã chọn | Có thể chọn khi tạo |
| Chi phí | MIỄN PHÍ | $ 0.0066 GB/giờ |
| Phù hợp nhất cho | Dữ liệu phiên tạm thời, cache | Dữ liệu ứng dụng liên tục, mô hình, dataset |

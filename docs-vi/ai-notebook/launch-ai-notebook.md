---
id: "launch-ai-notebook"
title: "Khởi chạy AI Notebook"
description: "Khởi chạy và truy cập AI Notebook từ FPT AI Factory console."
sidebar_label: "Khởi chạy AI Notebook"
sidebar_position: 4
---

# Khởi chạy AI Notebook

**Bước 1:** Từ menu bên trái, chọn **AI Notebook**. Notebook cần khoảng 1–2 phút để khởi động.

[![Mục AI Notebook trong thanh điều hướng bên trái của FPT AI Factory](/img/migrated/Screenshot-2025-09-23-at-00.09.41-63c1169b.png)](/img/migrated/Screenshot-2025-09-23-at-00.09.41-63c1169b.png)

**Bước 2:** Khi sẵn sàng, trình duyệt sẽ tự động mở **AI Notebook** Launcher. Nếu pop-up bị chặn, nhấn **Open AI Notebook** để vào Launcher.

[![Nút Open AI Notebook hiển thị sau khi notebook sẵn sàng](/img/migrated/image-1-a9094741.png)](/img/migrated/image-1-a9094741.png)

## Tổng quan Launcher

Launcher là điểm khởi đầu trong **JupyterLab**. Tại đây bạn có thể tạo notebook mới, mở console và chọn loại tài nguyên (CPU hoặc GPU) để chạy công việc.

[![Giao diện JupyterLab Launcher với các tùy chọn notebook và console](/img/migrated/Screenshot-2025-09-22-at-23.03.54-468257d4.png)](/img/migrated/Screenshot-2025-09-22-at-23.03.54-468257d4.png)

**1. Truy cập nhanh trên thanh điều hướng**
  * **File Browser**
Trung tâm quản lý file và thư mục trong môi trường AI Notebook. Mở, đổi tên, xóa hoặc sắp xếp file nhanh chóng.
  * **Running Kernels / Notebooks**
Hiển thị tất cả kernel và notebook đang hoạt động. Dùng để theo dõi phiên làm việc, kiểm tra mức sử dụng GPU/CPU và dừng các phiên nhàn rỗi để giải phóng tài nguyên.
  * **Table of Contents**
Cung cấp cái nhìn có cấu trúc về các phần trong notebook. Dễ dàng chuyển giữa các tiêu đề mà không cần cuộn qua notebook dài.
  * **GPU Kernel Management**
Kiểm soát và giám sát GPU kernel. Kiểm tra trạng thái phân bổ/sử dụng GPU và tắt các GPU kernel không dùng đến.
  * **Extensions Manager**
Cho phép mở rộng AI Notebook với các công cụ và tích hợp bổ sung. Cài đặt, bật hoặc tắt các extension như Git hoặc công cụ định dạng code để nâng cao năng suất.

**2. Tùy chọn notebook và console**

**Phần Notebook**
Dùng khi bạn muốn môi trường tương tác kết hợp code và output. Lý tưởng để phát triển, trực quan hóa và tài liệu hóa code với Markdown, biểu đồ và ghi chú.
Chọn phiên notebook mới với các tài nguyên khác nhau:
  * CPU (Free)
  * 1x GPU H100 SXM5
  * 2x GPU H100 SXM5
  * 4x GPU H100 SXM5
  * 8x GPU H100 SXM5

**Phần Console**
Dùng khi bạn chỉ cần giao diện dòng lệnh nhẹ để chạy script nhanh hoặc kiểm tra đoạn code — không cần text định dạng hay output trực quan.
Khởi động phiên console (dòng lệnh + thực thi code) với cùng các tùy chọn tài nguyên.

**Phần Other**
Tạo thêm các loại file như:
  * Text File
  * Markdown File
  * Python File

**3. Bảng chọn tài nguyên và giá**
  * Nhắc nhở: Ngắt kết nối và xóa các runtime không dùng để tránh chi phí phát sinh thêm.
  * Hiển thị các cấu hình GPU có sẵn với thông tin chi tiết (CPU, RAM, VRAM, chi phí mỗi giờ).

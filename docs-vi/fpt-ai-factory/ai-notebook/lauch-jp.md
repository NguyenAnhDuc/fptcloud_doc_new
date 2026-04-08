---
id: "lauch-jp"
title: "Khởi chạy AI Notebook"
description: "Khởi chạy và truy cập AI Notebook từ FPT AI Factory console."
sidebar_label: "Khởi chạy AI Notebook"
sidebar_position: "4"
---

# Khởi chạy AI Notebook

**Bước 1:** Từ menu bên trái, chọn **AI Notebook**. Notebook mất khoảng 1–2 phút để khởi động.

[![Mục AI Notebook trong menu điều hướng bên trái FPT AI Factory](/img/migrated/worddavdaac2e493a386a877fe5a19fab86a552-8d1e03ba.png)](/img/migrated/worddavdaac2e493a386a877fe5a19fab86a552-8d1e03ba.png)

**Bước 2:** Khi sẵn sàng, trình duyệt sẽ tự động mở **AI Notebook Launcher**. Nếu pop-up bị chặn, nhấn **Open AI Notebook** để vào Launcher.

[![Nút Open AI Notebook hiển thị sau khi notebook sẵn sàng](/img/migrated/image-3-1-2c056774.png)](/img/migrated/image-3-1-2c056774.png)

## Tổng quan về Launcher

Launcher là điểm khởi đầu trong **JupyterLab**. Bạn có thể tạo notebook mới, mở console và chọn loại tài nguyên (CPU hoặc GPU) để thực hiện công việc.

[![Giao diện JupyterLab Launcher với các tùy chọn notebook và console](/img/migrated/worddavb7138276623cb606022343836db461c8-5f6816ad.png)](/img/migrated/worddavb7138276623cb606022343836db461c8-5f6816ad.png)

**1. Truy cập nhanh trên thanh điều hướng**

- **File Browser:** Trung tâm quản lý tệp và thư mục trong môi trường AI Notebook. Nhanh chóng mở, đổi tên, xóa hoặc sắp xếp tệp.
- **Running Kernels / Notebooks:** Hiển thị tất cả kernel đang hoạt động và notebook đang mở. Dùng để theo dõi phiên làm việc, kiểm tra mức sử dụng GPU/CPU và dừng các kernel nhàn rỗi để giải phóng tài nguyên.
- **Table of Contents:** Cung cấp chế độ xem có cấu trúc các phần của notebook. Dễ dàng chuyển giữa các tiêu đề mà không cần cuộn qua notebook dài.
- **GPU Kernel Management:** Kiểm soát và giám sát GPU kernel. Kiểm tra trạng thái phân bổ/sử dụng GPU và tắt các GPU kernel không dùng.
- **Extensions Manager:** Mở rộng AI Notebook với các công cụ và tích hợp bổ sung. Cài đặt, bật hoặc tắt các extension như Git hoặc công cụ định dạng code để nâng cao năng suất.

**2. Tùy chọn notebook và console**

**Phần Notebook:**
Sử dụng khi bạn muốn môi trường code tương tác kết hợp với đầu ra. Lý tưởng để phát triển, trực quan hóa và lập tài liệu code với Markdown, biểu đồ và ghi chú.
Chọn phiên notebook mới với các tài nguyên khác nhau:

- CPU (Miễn phí)
- 1x GPU H100 SXM5
- 2x GPU H100 SXM5
- 4x GPU H100 SXM5
- 8x GPU H100 SXM5

**Phần Console:**
Sử dụng khi bạn chỉ cần giao diện dòng lệnh nhẹ để chạy script nhanh hoặc kiểm tra đoạn code — không cần văn bản đa dạng thức hay đầu ra trực quan. Khởi động phiên console (dòng lệnh + thực thi code) với cùng các tùy chọn tài nguyên.

**Phần Other:**
Tạo các tệp bổ sung như:

- Text File
- Markdown File
- Python File

**3. Bảng chọn tài nguyên và giá**

- Lưu ý: Ngắt kết nối và xóa các runtime không dùng để tránh phát sinh chi phí.
- Hiển thị các cấu hình GPU có sẵn với thông tin chi tiết (CPU, RAM, VRAM, chi phí mỗi giờ).

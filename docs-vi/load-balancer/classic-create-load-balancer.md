---
id: "classic-create-load-balancer"
title: "Khởi tạo Classic Load Balancer"
description: "Hướng dẫn tạo mới một Classic Load Balancer trên FPT Cloud."
sidebar_label: "Khởi tạo Classic Load Balancer"
sidebar_position: 23
---

# Khởi tạo Classic Load Balancer

**Bước 1:** Truy cập trang **Load Balancer Management** và nhấn **Create**.

[![](/img/migrated/Userguide-FPT-Load-Balancer-2022-1-1024x-f04d52f1.png)](/img/migrated/Userguide-FPT-Load-Balancer-2022-1-1024x-f04d52f1.png)

Hộp thoại hiển thị để hướng dẫn các bước tiếp theo.

**Bước 2:** Cấu hình Load Balancer:

| Trường | Mô tả |
| --- | --- |
| **Name** | Nhập tên cho Load Balancer. |
| **Size** | Chọn kích thước phù hợp. FPT Cloud cung cấp bốn kích thước từ Basic đến Premium. |
| **Public IP** | Gán Public IP từ VPC. Để trống nếu muốn tạo Load Balancer nội bộ (không truy cập Internet). Để có thêm Public IP, xem phần Floating IP Management. |
| **Instances** | Chọn các máy ảo cần cân bằng tải. Chỉ có thể chọn các máy ảo trong cùng VPC. |
| **Rules** | Định nghĩa cách traffic được phân phối từ Load Balancer đến các máy ảo. Hiện tại hỗ trợ một rule mỗi Load Balancer. |
| **Certificate** | Nếu chọn **HTTPS**, cần có chứng chỉ. Chọn chứng chỉ có sẵn hoặc thêm mới. |
| **Settings** | Cài đặt bổ sung (FPT Cloud cung cấp giá trị mặc định được khuyến nghị). Nhấn **Edit Setting** để thay đổi: **Algorithm** (Round Robin hoặc Least Connections), **Sticky Session** (bật/tắt), **Health check** (HTTP, TCP hoặc PING). |

[![](/img/migrated/Userguide-FPT-Load-Balancer-2022-2-7408982a.png)](/img/migrated/Userguide-FPT-Load-Balancer-2022-2-7408982a.png)

**Bước 3:** Nhấn **Create** để tạo Load Balancer. Hệ thống xác nhận tài nguyên, bắt đầu quá trình tạo và hiển thị trạng thái.

Sau khi tạo thành công, Load Balancer mới và trạng thái hoạt động xuất hiện trong bảng quản lý.

[![](/img/migrated/Userguide-FPT-Load-Balancer-2022-3-1024x-5bd1ea96.png)](/img/migrated/Userguide-FPT-Load-Balancer-2022-3-1024x-5bd1ea96.png)

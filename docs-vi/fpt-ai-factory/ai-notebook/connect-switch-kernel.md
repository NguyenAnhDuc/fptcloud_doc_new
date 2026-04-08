---
id: "connect-switch-kernel"
title: "Kết nối và chuyển kernel"
description: "Chuyển đổi giữa các môi trường kernel trong AI Notebook."
sidebar_label: "Kết nối và chuyển kernel"
sidebar_position: 10
---

# Kết nối và chuyển kernel

**Bước 1:** Mở menu cấu hình kernel

Trong Notebook IDE, mở **kernel configuration menu** (góc trên bên phải).

| Tùy chọn | Mô tả | Khi nào dùng |
| --- | --- | --- |
| **Running Kernels** | Kết nối với kernel đang hoạt động (ví dụ: Python 3). | Tiếp tục công việc nhanh, tiết kiệm tài nguyên |
| **Start Other Kernels** | Khởi động kernel mới với tài nguyên GPU tùy chọn (1x, 2x, 4x, 8x H100). | Thử nghiệm mới hoặc tác vụ nặng |
| **No Kernel** | Mở notebook mà không gắn bất kỳ tài nguyên tính toán nào. | Xem hoặc chỉnh sửa code mà không chạy |

* * *

**Bước 2a:** Khởi động kernel mới

  1. Trong **Start Other Kernels**, chọn loại GPU bạn muốn.
  2. Nhấn **Confirm** và xác nhận trên hộp thoại.

[![Hộp thoại xác nhận chọn GPU kernel](/img/migrated/image-6-dd343caf.png)](/img/migrated/image-6-dd343caf.png)

  3. Chờ khoảng **1–2 phút** để notebook sẵn sàng.
  4. Sau khi kết nối, kernel mới sẽ xuất hiện trong **Running Kernels**.

* * *

**Bước 2b:** Chuyển sang kernel hiện có

  1. Trong **Running Kernels**, chọn kernel bạn muốn kết nối.
  2. Chờ khoảng **1–2 phút** để notebook sẵn sàng.
  3. Sau khi kết nối, kernel được chọn sẽ hiển thị trong **Running Kernels**.

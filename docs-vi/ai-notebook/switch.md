---
id: "switch"
title: "Kết nối và chuyển kernel"
description: "Chuyển đổi giữa các môi trường kernel khác nhau trong AI Notebook của bạn."
sidebar_label: "Kết nối và chuyển kernel"
sidebar_position: "6"
---

# Kết nối và chuyển kernel

**Bước 1:** Trong Notebook IDE, mở **kernel configuration menu** (góc trên bên phải).

[![Màn hình kernel configuration menu trong AI Notebook IDE](/img/migrated/worddav6371362747fec3bad8be91cf1e057a7c-0bc7f485.png)](/img/migrated/worddav6371362747fec3bad8be91cf1e057a7c-0bc7f485.png)

| **Tùy chọn** | **Mô tả** | **Khi nào sử dụng** |
| --- | --- | --- |
| **Running Kernels** | Kết nối với kernel đang hoạt động (ví dụ: Python 3). | Tiếp tục công việc nhanh chóng, tiết kiệm tài nguyên |
| **Start Other Kernels** | Khởi động kernel mới với tài nguyên GPU đã chọn (1x, 2x, 4x, 8x H100). | Thử nghiệm mới hoặc khối lượng công việc lớn |
| **No Kernel** | Mở notebook mà không gắn bất kỳ tài nguyên tính toán nào. | Xem hoặc chỉnh sửa code mà không chạy |

---

**Bước 2a: Khởi động kernel mới**

1. Trước khi bắt đầu, hãy đảm bảo tài khoản có đủ credit để trả ít nhất 1 giờ sử dụng GPU.
2. Trong **Start Other Kernels**, chọn loại GPU bạn muốn.
3. Nhấn **Confirm** và xác nhận pop-up xác nhận.

[![Màn hình pop-up xác nhận chọn GPU kernel](/img/migrated/worddavcbde47ee263356d9fcbb156662265af0-2f05a191.png)](/img/migrated/worddavcbde47ee263356d9fcbb156662265af0-2f05a191.png)

4. Chờ khoảng **1–2 phút** để notebook sẵn sàng.
5. Sau khi kết nối, kernel mới sẽ hiển thị trong **Running Kernels**.

---

**Bước 2b: Chuyển sang kernel hiện có**

1. Trong **Running Kernels**, chọn kernel bạn muốn kết nối.
2. Chờ khoảng **1–2 phút** để notebook sẵn sàng.
3. Sau khi kết nối, kernel đã chọn sẽ được hiển thị trong **Running Kernels**.

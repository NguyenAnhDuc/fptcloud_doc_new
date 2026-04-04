---
id: "IPアドレス（フローティングIP）の割り当て"
title: "Cấp phát Floating IP"
description: "Sau khi tạo GPU VM thành công, điều hướng đến Network > Floating IPs để cấp phát địa chỉ IP công cộng."
sidebar_label: "Cấp phát Floating IP"
sidebar_position: "7"
---

# Cấp phát Floating IP

**Bước 1:** Sau khi tạo GPU VM thành công, vào **Network** > **Floating IPs**.

[![Alt text](/img/migrated/12-1-90c05a89.png)](/img/migrated/12-1-90c05a89.png)

**Bước 2:** Nhấp nút **Allocate IP address** để tạo Floating IP mới.

**Bước 3:** Trong cửa sổ popup **Allocate IP address**, điền các trường sau.

  * **IP address:** Chọn một IP khả dụng, hoặc chọn **Allocate new from pool** để yêu cầu IP mới nếu việc cấp phát cho phép.
  * **Resource:** Chọn **Instance** và chọn **GPU VM** mới tạo để liên kết với Floating IP.
  * **IP port:** Nên đặt giống với Instance port (22).
  * **Instance port:** Phải đặt là **22**.
  * **Add tag:** Tùy chọn — giúp cải thiện quản lý tài nguyên.

**Bước 4:** Sau khi nhập thông tin, nhấp **Allocate floating IP** để xác nhận. Floating IP mới tạo xuất hiện trong danh sách.

[![Alt text](/img/migrated/13-1-642b169c.png)](/img/migrated/13-1-642b169c.png)

---
id: "floating-ip"
title: "Floating Ip"
description: "Floating Ip trên GPU Virtual Machine."
sidebar_label: "Floating Ip"
sidebar_position: 9
---

# Floating Ip

### Tổng quan
**Floating IP** (còn được gọi là **Public IP**) là địa chỉ IPv4 tĩnh có thể truy cập công khai.
Bạn có thể **gán hoặc gán lại** Floating IP đã đặt trước cho **GPU Virtual Machine** để máy ảo có thể truy cập từ internet.
Floating IP có thể được **gỡ bỏ bất kỳ lúc nào** khi không còn cần truy cập từ bên ngoài.

### Gắn Floating IP
Sau khi tạo GPU VM thành công, bạn có thể gán **Floating IP** (Public IP có thể linh hoạt gắn hoặc tháo) để Instance có thể truy cập từ internet.

#### Bước 1: Truy cập tính năng Allocate IP Address
Bạn có thể cấp phát Floating IP bằng một trong các phương pháp sau:

**Phương pháp 1:**
  * Trong menu bên trái, vào **Networking → Floating IPs**.

[![Alt text](/img/migrated/Floating-IP-1-568fdf5c.png)](/img/migrated/Floating-IP-1-568fdf5c.png)
  * Nhấp **Allocate IP Address** để tạo Floating IP mới.

**Phương pháp 2:**
  * Trong menu bên trái, vào **Instance Management**.
  * Chọn VM bạn muốn gán Floating IP.

[![Alt text](/img/migrated/Floating-IP-2-85d76e05.png)](/img/migrated/Floating-IP-2-85d76e05.png)
  * Nhấp nút **Floating IP** để cấp phát địa chỉ mới.

#### Bước 2: Điền thông tin địa chỉ IP
Sau khi mở tính năng **Allocate IP Address**, một cửa sổ popup sẽ xuất hiện yêu cầu bạn nhập các thông tin cần thiết để cấp phát địa chỉ IP.

[![Alt text](/img/migrated/Floating-IP-3-381e49df.png)](/img/migrated/Floating-IP-3-381e49df.png)

| **Trường**  | **Mô tả**  |
| --- | --- |
| **Add Tag**  | Tùy chọn, để giúp phân loại và quản lý tài nguyên.  |
| **Instance Port**  | • Port nội bộ trên Instance nhận lưu lượng được chuyển tiếp.<br/>• Bạn cũng có thể cấu hình các **NAT rule** riêng cho các Instance port cụ thể.<br/>• Mỗi port trên Instance phải **duy nhất** và không được chồng chéo với các rule khác.<br/>• Nếu để trống, hệ thống sẽ chuyển tiếp lưu lượng trên **tất cả port theo mặc định**.  |
| **IP Address**  | • Chọn IP có sẵn (đã đặt trước), hoặc<br/>• Chọn **Allocate new from pool** để yêu cầu IP mới (nếu quota cho phép).  |
| **IP Port**  | • Port bên ngoài trên Floating IP được sử dụng để chuyển tiếp lưu lượng đến đến Instance.<br/>• Bạn có thể cấu hình các **NAT rule** riêng cho các port cụ thể.<br/>• Mỗi port trên một IP phải **duy nhất** và không được chồng chéo với các rule khác.<br/>• Nếu để trống, hệ thống sẽ chuyển tiếp lưu lượng trên **tất cả port theo mặc định**.  |
| **Resource**  | • Chọn **Instance**, sau đó<br/>• Chọn **tên GPU VM** từ danh sách thả xuống để liên kết với Floating IP.<br/>_Nếu bạn mở popup này từ **Instance Management**, trường VM sẽ được điền sẵn tự động._<br/>• Nếu bạn chưa muốn gắn Floating IP vào máy ảo (ví dụ: bạn dự định sử dụng sau), chọn **Not assign IP to instance**.  |

Lưu ý:
Nếu **GPU VM của bạn sử dụng Ephemeral (NVMe) disk**, các cài đặt port sau là bắt buộc:
  * **IP Port:** Khuyến nghị khớp với **Instance Port (22)** để truy cập SSH.
  * **Instance Port:** Đặt thành **22** để truy cập SSH.

_Bạn có thể lặp lại bước này để thêm các port bổ sung nếu cần._

Nếu **GPU VM của bạn sử dụng Block Storage - Persistent disk**, các cấu hình port này là **tùy chọn**.

#### Bước 3: Xác nhận cấp phát
Sau khi hoàn thành các trường bắt buộc, nhấp **Allocate Floating IP** để xác nhận.
Floating IP mới được tạo sẽ xuất hiện trong danh sách và có thể được gắn vào VM của bạn.

### Tháo Floating IP
Nếu bạn không còn cần sử dụng Floating IP hoặc muốn tháo nó để gán cho máy ảo khác, hãy thực hiện các bước sau:

**Bước 1:**
Trong trang **Floating IP Management**, tìm địa chỉ IP bạn muốn tháo.
Trong cột **Actions**, chọn **Disconnect Instance**.
[![Alt text](/img/migrated/Floating-IP-4-ed2f4d96.png)](/img/migrated/Floating-IP-4-ed2f4d96.png)

**Bước 2:**
Một popup xác nhận sẽ xuất hiện.
Để xác nhận tháo, nhấp **Disconnect**.
[![Alt text](/img/migrated/Floating-IP-5-cc51b9fd.png)](/img/migrated/Floating-IP-5-cc51b9fd.png)

### Giải phóng Floating IP khỏi VPC
Nếu Floating IP không còn cần thiết, bạn có thể giải phóng nó khỏi VPC như sau:

**Bước 1:**
Trong trang **Floating IP Management**, tìm địa chỉ IP bạn muốn gỡ bỏ.
Trong cột **Actions**, chọn **Release IP**.
[![Alt text](/img/migrated/Floating-IP-6-49da5f96.png)](/img/migrated/Floating-IP-6-49da5f96.png)

**Bước 2:**
Một popup xác nhận sẽ xuất hiện.
Để xác nhận giải phóng, nhấp **Release**.
[![Alt text](/img/migrated/Floating-IP-7-fc5fc5ad.png)](/img/migrated/Floating-IP-7-fc5fc5ad.png)

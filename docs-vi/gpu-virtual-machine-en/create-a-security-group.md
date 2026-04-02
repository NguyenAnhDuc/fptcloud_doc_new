---
id: "create-a-security-group"
title: "Create A Security Group"
description: "Create A Security Group trên GPU Virtual Machine."
sidebar_label: "Create A Security Group"
sidebar_position: 10
---

# Create A Security Group

### Tổng quan
**Security Group** là dịch vụ tường lửa stateful dựa trên mạng cho **GPU Virtual Machine**. Dịch vụ này được cung cấp miễn phí.
Security Group kiểm soát cả lưu lượng **inbound** và **outbound** — bất kỳ lưu lượng nào không được cho phép rõ ràng bởi một rule sẽ tự động bị chặn.

**Lưu ý**
  * Tổng số rule trên tất cả Security Group bị giới hạn ở **100**.
  * Để yêu cầu tăng giới hạn này, vui lòng liên hệ **FPT Smart Cloud support**.

### Default Security Group
Default Security Group được tạo tự động khi bạn tạo **VPC** và cho phép tất cả lưu lượng **outbound**. Các rule cho Security Group này không thể được chỉnh sửa.
Các outbound rule sau được thêm theo mặc định:

| **Type**  | **Protocol**  | **Port**  | **Action**  | **IP Version**  | **Destination**  |
| --- | --- | --- | --- | --- | --- |
| Custom  | UDP  | 547  | ALLOW  | IPv6  | ff02::1:2/128  |
| HTTP  | TCP  | 80  | ALLOW  | IPv4  | 169.254.169.254  |
| Custom  | UDP  | 67  | ALLOW  | IPv4  | All  |
| HTTP  | TCP  | 80  | ALLOW  | IPv6  | fe80::a9fe:a9fe/128  |

### Tạo Security Group
**Bước 1:** Trong menu bên trái, vào **Networking → Security Group**, sau đó nhấp **Create Security Group**.
[![Alt text](/img/migrated/Floating-IP-8-95cd2212.png)](/img/migrated/Floating-IP-8-95cd2212.png)

**Bước 2:** Nhập thông tin cần thiết trong form **Create Security Group**:
[![Alt text](/img/migrated/Floating-IP-9-84fa52ef.png)](/img/migrated/Floating-IP-9-84fa52ef.png)
  * **Name:** Nhập tên cho Security Group. Hệ thống tự động tạo tên mặc định để thiết lập nhanh.
  * **Applied Instances:** Chọn tên GPU VM để liên kết với Security Group.
  * **Add Tags:** Tùy chọn, để tổ chức tài nguyên tốt hơn.
  * **Configure Security Rules:** Cập nhật các rule **Inbound** và **Outbound**.

**Bước 3:** Xác nhận bằng cách nhấp **Create Security Group**. Security Group mới được tạo sẽ xuất hiện trong danh sách.

### Quản lý Rules
Một Security Group có thể chứa nhiều rule **Inbound** và **Outbound**.
  1. **Inbound Rules:**

[![Alt text](/img/migrated/Floating-IP-10-4c8ca3bb.png)](/img/migrated/Floating-IP-10-4c8ca3bb.png)
  * Kiểm soát lưu lượng đến Instance.
  * Xác định các port nào trên Instance được mở và địa chỉ IP nào từ internet có thể truy cập chúng (**Source**).

  2. **Outbound Rules:**

[![Alt text](/img/migrated/Floating-IP-11-22c982cf.png)](/img/migrated/Floating-IP-11-22c982cf.png)
  * Kiểm soát lưu lượng đi từ Instance.
  * Xác định các port nào trên Instance có thể gửi lưu lượng ra và đến địa chỉ đích nào.

### Thêm hoặc chỉnh sửa Rules
**Bước 1:** Trong trang **Security Group Management**, chọn Security Group bạn muốn quản lý để mở trang chi tiết của nó.

**Bước 2:** Trong phần **Inbound Rules** hoặc **Outbound Rules**, nhấp **Add New**.
[![Alt text](/img/migrated/Floating-IP-12-458c7de9.png)](/img/migrated/Floating-IP-12-458c7de9.png)

**Bước 3:**
Điền thông tin rule:
  * **Port:** Chọn port(s) cần mở.
    * Chọn **All Ports** để mở tất cả port.
    * Chọn **Customize Ports** để chỉ định một hoặc một dải port.
    * Hệ thống cung cấp các tùy chọn nhanh cho các dịch vụ phổ biến như **SSH (22)**, **RDP (3389)**, **MySQL (3306)**, **HTTP (80)** và **HTTPS (443)**.
  * **Sources / Destinations:** Nhập các địa chỉ IP được phép kết nối đến các port đã chỉ định.
    * **All IPv4:** Cho phép kết nối từ tất cả IP.
    * **My IP:** Chỉ cho phép IP công cộng hiện tại của bạn.
    * **Custom:** Nhập một hoặc nhiều địa chỉ IP cụ thể.

⚠️ _Đối với các port nhạy cảm như 22 (SSH) hoặc 3389 (RDP), hệ thống sẽ hiển thị cảnh báo nếu bạn cho phép All IPv4:_ _"Chúng tôi khuyến nghị chỉ cho phép SSH từ các IP đáng tin cậy."_
  * **Description:** Ghi chú tùy chọn cho rule.

Nhấp **Add Rule** để tiếp tục thêm, hoặc **Edit Security Group** để lưu thay đổi.
Hệ thống sẽ xử lý cấu hình và hiển thị thông báo kết quả.

⚠️ Khuyến nghị
  * Thêm inbound rule mới để truy cập SSH: **Type:** SSH; **Port Range:** 22; **Source:** All IPv4
  * Để tăng cường bảo mật khi bật truy cập SSH, vui lòng chỉ cho phép các địa chỉ IP đáng tin cậy và tránh sử dụng "All IPv4" (0.0.0.0/0).

### Gắn GPU VM
**Bước 1:**
Trong trang **Security Group Management**, chọn Security Group bạn muốn gắn vào máy ảo.
[![Alt text](/img/migrated/Floating-IP-13-9ab432a1.png)](/img/migrated/Floating-IP-13-9ab432a1.png)

**Bước 2:**
Trong phần **Apply To**, chọn các máy ảo cần gắn.
Bạn cũng có thể chỉ định **dải CIDR** để áp dụng Security Group cho một phân đoạn mạng.
Nhấp **Apply Instances** để xác nhận.
Hệ thống sẽ xử lý và hiển thị kết quả.
[![Alt text](/img/migrated/Floating-IP-14-faf1db2e.png)](/img/migrated/Floating-IP-14-faf1db2e.png)

### Tháo GPU VM
**Bước 1:**
Trong trang **Security Group Management**, chọn Security Group hiện đang được gắn vào máy ảo.
[![Alt text](/img/migrated/Floating-IP-15-97c985a4.png)](/img/migrated/Floating-IP-15-97c985a4.png)

**Bước 2:**
Trong phần **Apply To**, tìm Instance bạn muốn gỡ bỏ.
Nhấp biểu tượng **X** bên cạnh nó, sau đó nhấp **Apply Instances** để xác nhận.
Hệ thống sẽ xử lý và hiển thị kết quả.
[![Alt text](/img/migrated/Floating-IP-16-ddb03cce.png)](/img/migrated/Floating-IP-16-ddb03cce.png)

### Xóa Security Group
Nếu bạn không còn cần Security Group, bạn có thể xóa nó khỏi VPC.

⚠️ Lưu ý: Tất cả rule phải được xóa trước khi Security Group có thể được gỡ bỏ.

**Bước 1:**
Trong trang **Security Group Management**, chọn Security Group bạn muốn xóa để mở trang chi tiết của nó.
[![Alt text](/img/migrated/Floating-IP-17-8a58c758.png)](/img/migrated/Floating-IP-17-8a58c758.png)

**Bước 2:**
Xóa tất cả rule bằng cách nhấp biểu tượng **thùng rác** bên cạnh mỗi rule và xác nhận xóa.
[![Alt text](/img/migrated/Floating-IP-18-c3350e3f.png)](/img/migrated/Floating-IP-18-c3350e3f.png)

**Bước 3:**
Sau khi tất cả rule đã được xóa, quay lại danh sách Security Group.
Trong cột **Actions**, chọn **Delete** cho Security Group bạn muốn xóa.

**Bước 4:**
Một popup xác nhận sẽ xuất hiện.
Nhấp **Delete Security Group** để xác nhận.
Hệ thống sẽ xử lý và hiển thị kết quả.
[![Alt text](/img/migrated/Floating-IP-19-31f64acb.png)](/img/migrated/Floating-IP-19-31f64acb.png)

---
id: "pfsense-network-gateway"
title: "Pfsense Network Gateway"
description: "Pfsense Network Gateway trên GPU Virtual Machine."
sidebar_label: "Pfsense Network Gateway"
sidebar_position: 15
---

# Pfsense Network Gateway

Bài viết này sẽ giới thiệu cách xây dựng **network gateway có tính khả dụng cao (HA)** bằng **pfSense**. Phần mềm mã nguồn mở dựa trên FreeBSD này giúp bạn đạt được **môi trường mạng ổn định và đáng tin cậy**.

### pfSense là gì?
**pfSense** là **phần mềm router/firewall mã nguồn mở** dựa trên **FreeBSD** có thể triển khai nhiều chức năng mạng như **router**, **firewall**, **VPN** và **proxy**.
Cấu hình của virtual network gateway khi xây dựng **ExpressRoute / Site-to-Site VPN** cũng được mô tả trong tài liệu chính thức, giúp pfSense an toàn và phù hợp với nhiều **môi trường doanh nghiệp**.

### Chuẩn bị file
**Bước 1:** **Tải xuống file ISO pfSense**
Truy cập trang web chính thức của pfSense: <https://www.pfsense.org/download/>
Tải xuống **ISO image** mới nhất.

**Bước 2:** **Đăng nhập vào FPT Cloud Console**
Truy cập <https://console.fptcloud.jp/> và đăng nhập bằng thông tin đăng nhập đã được cấp.

**Bước 3:** **Tải lên file ISO**
Chọn **file ISO pfSense** đã tải xuống và tải lên portal. Bạn sẽ nhận được thông báo xác nhận khi quá trình tải lên hoàn tất.

[![Alt text](/img/migrated/Gateway-1-b47c3b2f.png)](/img/migrated/Gateway-1-b47c3b2f.png) [![Alt text](/img/migrated/Gateway-2-4be6ba54.png)](/img/migrated/Gateway-2-4be6ba54.png) [![Alt text](/img/migrated/Gateway-3-8fdf7850.png)](/img/migrated/Gateway-3-8fdf7850.png) [![Alt text](/img/migrated/Gateway-4-7cdc3ec5.png)](/img/migrated/Gateway-4-7cdc3ec5.png) [![Alt text](/img/migrated/Gateway-5-aa96ffd0.png)](/img/migrated/Gateway-5-aa96ffd0.png)

### Chuẩn bị môi trường mạng
**Bước 1:** **Tạo Subnet mới**
Trong **FPT Cloud Console**, tạo **Subnet** mới theo yêu cầu mạng của bạn, điều này sẽ cho phép bạn gán các **địa chỉ IP** cần thiết cho các giao diện mạng của pfSense.

[![Alt text](/img/migrated/Gateway-6-cf98cf61.png)](/img/migrated/Gateway-6-cf98cf61.png) [![Alt text](/img/migrated/Gateway-7-d413d86c.png)](/img/migrated/Gateway-7-d413d86c.png)

**Bước 2:** **Tạo Security Group**
Xác định **các quy tắc bảo mật** cho môi trường của bạn và tạo **security group** phù hợp để kiểm soát giao tiếp và lưu lượng mạng giữa các máy ảo pfSense.

[![Alt text](/img/migrated/Gateway-8-2c508ffb.png)](/img/migrated/Gateway-8-2c508ffb.png) [![Alt text](/img/migrated/Gateway-9-17ab1b36.png)](/img/migrated/Gateway-9-17ab1b36.png)

### Tạo máy ảo pfSense
**Bước 1:** **Compute Engine**
Vào menu **Compute** trong FPT Cloud console và nhấp **"Create Instance"**.

[![Alt text](/img/migrated/Gateway-10-cf1a7517.png)](/img/migrated/Gateway-10-cf1a7517.png)

**Bước 2:** **Cài đặt thông tin cơ bản**
Đặt tên Instance (ví dụ: `pfsense-master` hoặc `pfsense-slave`) và chọn **pfSense ISO** bạn đã tải lên trước đó trong tùy chọn **ISO image**.

[![Alt text](/img/migrated/Gateway-11-0e9c7479.png)](/img/migrated/Gateway-11-0e9c7479.png) [![Alt text](/img/migrated/Gateway-12-cf0e56bf.png)](/img/migrated/Gateway-12-cf0e56bf.png) [![Alt text](/img/migrated/Gateway-13-e79938e2.png)](/img/migrated/Gateway-13-e79938e2.png)

**Bước 3:** **Cấu hình tài nguyên và mạng**
Chọn **kích thước tài nguyên phù hợp (CPU/RAM)** cho môi trường của bạn và kết nối các mạng cần thiết.

[![Alt text](/img/migrated/Gateway-14-b72cf14a.png)](/img/migrated/Gateway-14-b72cf14a.png) [![Alt text](/img/migrated/Gateway-15-97f134de.png)](/img/migrated/Gateway-15-97f134de.png)

**Bước 4:** **Gắn Security Group**
Gắn **security group** đã tạo trước đó và **tạo máy ảo**.

[![Alt text](/img/migrated/Gateway-16-e6cfe33e.png)](/img/migrated/Gateway-16-e6cfe33e.png) [![Alt text](/img/migrated/Gateway-17-2ff59be5.png)](/img/migrated/Gateway-17-2ff59be5.png)

### Yêu cầu HA (High Availability)
**Yêu cầu tối thiểu để triển khai High Availability (HA):**
  * Ít nhất **ba IP mỗi Subnet** trên giao diện mạng pfSense
    * Một cho **master**
    * Một cho **slave**
    * Một **virtual IP** để giao tiếp bên ngoài
  * **Thiết bị Layer 2** phải hỗ trợ **multicast**
  * **Upstream / ISP / router** phải có quyền truy cập vào **virtual IP** được sử dụng bởi **CARP**

### Cấu hình giao diện pfSense
[![Alt text](/img/migrated/Gateway-18-f3d63a40.png)](/img/migrated/Gateway-18-f3d63a40.png)

#### Mạng mới: Thêm card mạng
  1. Chọn **"Assignment"** từ menu **Interface** và nhấp **"Add"** để thêm giao diện mới.
  2. Nhấp đúp vào giao diện **OPT1** và nhập thông tin cần thiết.
  3. Sau khi thiết lập, nhấp **"Save"**, sau đó **"Apply Changes"**.

#### Firewall: Tạo Rules
  1. Chọn **"Rules"** từ menu **Firewall** và chuyển sang tab **"Sync"**.
  2. Nhấp **"Add"** để tạo rule mới và nhập thông tin cần thiết.
  3. Sau khi cấu hình hoàn tất, nhấp **"Save and Apply Changes"**.
  4. Lặp lại cấu hình tương tự trên cả hai **máy chủ pfSense**.

### Cấu hình CARP (High Availability Protocol)

#### Cấu hình CARP trên Master
  * Chọn **"High Availability Synchronization"** từ menu **System** và nhập thông tin cần thiết.
  * Tên người dùng và mật khẩu cho hệ thống từ xa chỉ định thông tin đăng nhập của người dùng có đặc quyền cao trên máy ảo pfSense slave.

[![Alt text](/img/migrated/Gateway-19-9a29037e.png)](/img/migrated/Gateway-19-9a29037e.png)

#### Cấu hình CARP trên Slave
  * Tương tự, chọn **"High Availability Synchronization"** từ menu **System** và nhập thông tin cần thiết.
  * Các cài đặt sẽ khác với cài đặt của master, vì vậy hãy làm theo hướng dẫn để thiết lập phù hợp.

[![Alt text](/img/migrated/Gateway-20-db71fe38.png)](/img/migrated/Gateway-20-db71fe38.png)

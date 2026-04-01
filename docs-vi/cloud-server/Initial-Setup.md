---
id: "Initial-Setup"
title: "Thiết lập ban đầu"
description: "Tạo tài khoản, cấu hình SSH Key, Subnet và Security Group trước khi sử dụng FPT Cloud Server."
sidebar_label: "Thiết lập ban đầu"
sidebar_position: 2
---

# Thiết lập ban đầu

Trước khi sử dụng FPT Cloud Server, bạn cần hoàn thành các bước thiết lập sau để đảm bảo môi trường sẵn sàng cho việc khởi tạo máy ảo.

## Điều kiện tiên quyết

- ✅ Có tài khoản FPT Cloud.
- ✅ Đã được cấp quyền truy cập Tenant, Region, VPC.

## Đăng nhập vào FPT Cloud Portal

1. Truy cập [https://console.fptcloud.com](https://console.fptcloud.com/).
2. Đăng nhập bằng tài khoản và mật khẩu FPT Cloud đã được cấp.
3. Chọn đúng **Tenant**, **Region**, **VPC** cần sử dụng dịch vụ.

:::tip
Nếu chưa có tài khoản FPT Cloud, truy cập [https://fptcloud.com](https://fptcloud.com/), chọn **Sign Up** và nhập thông tin theo hướng dẫn. Bộ phận hỗ trợ sẽ liên hệ để xác nhận và tạo tài khoản.
:::

## Tạo cặp SSH Key

FPT Cloud hỗ trợ hai phương thức bảo mật cho máy chủ Linux: **Password** và **SSH Key**. SSH Key được khuyến nghị vì bảo mật hơn so với Password.

1. Chọn **Compute Engine** → **SSH Management** từ menu, nhấn **Import SSH key**.

   [![Màn hình SSH Management với nút Import SSH key](/img/migrated/Userguide-FPT-Cloud-Server-2022-1-1024x5-8b0e181c.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-1-1024x5-8b0e181c.png)

2. Nhập thông tin:
   - **Name**: Tên SSH Key.
   - **Public Key**: Nhập Public Key có sẵn hoặc chọn **Generate new key pair** để hệ thống tạo tự động.

   [![Hộp thoại Import SSH key](/img/migrated/Userguide-FPT-Cloud-Server-2022-2-f88ee771.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-2-f88ee771.png)

3. Nhấn **Save**. Hệ thống tạo cặp SSH Key và tự động download file Private Key với định dạng `.pem`.

   [![SSH Key đã tạo thành công](/img/migrated/Userguide-FPT-Cloud-Server-2022-3-1024x5-3df2476e.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-3-1024x5-3df2476e.png)

:::danger
File Private Key `.pem` chỉ được cung cấp một lần duy nhất. Lưu trữ ở nơi an toàn để tránh mất quyền truy cập vào máy chủ.
:::

## Kiểm tra và tạo Subnet

Để khởi tạo máy ảo, bạn cần có một Subnet đang hoạt động trong VPC — hệ thống sẽ lấy một Private IP từ Subnet này để gắn cho máy ảo.

1. Chọn **Networking** → **Subnets** từ menu, nhấn **Create subnet**.

   [![Màn hình Subnets với nút Create subnet](/img/migrated/image-1744794276761-161dcee6.png)](/img/migrated/image-1744794276761-161dcee6.png)

2. Nhập các thông tin:
   - **Name**: Tên gợi nhớ của Subnet.
   - **Type**: Routed (định tuyến internet qua NAT) hoặc Isolated (không kết nối internet).
   - **Network Address (CIDR)**: Nhập CIDR hợp lệ.
   - **Gateway IP**: Nhập địa chỉ Gateway hợp lệ.
   - **Static IP Pool** *(tùy chọn)*: Dải IP muốn sử dụng.
   - **Primary DNS**: Địa chỉ DNS IPv4 (mặc định 8.8.8.8).
   - **Secondary DNS** *(tùy chọn)*: DNS phụ.
   - **Add tag** *(tùy chọn)*: Chọn tag gắn cho Subnet.

   [![Hộp thoại Create subnet](/img/migrated/image-1744794289261-ead4183b.png)](/img/migrated/image-1744794289261-ead4183b.png)

3. Nhấn **Create subnet**.

Subnet mới hiển thị trong bảng **Subnets**.

[![Danh sách Subnet sau khi tạo](/img/migrated/image-1744794442277-c162eaf9.png)](/img/migrated/image-1744794442277-c162eaf9.png)

## Tạo Security Group

Security Group hoạt động như tường lửa mạng ảo, kiểm soát traffic vào/ra cho máy ảo — giúp bảo vệ máy ảo khỏi các cuộc tấn công từ internet.

FPT Cloud hỗ trợ hai loại:
- **Security Group**: Kiểm soát traffic ra vào internet.
- **Distributed Firewall**: Kiểm soát traffic trong mạng nội bộ.

1. Chọn **Security group** → **Networking** từ menu, nhấn **New Security Group**.

   [![Màn hình Security Group với nút New Security Group](/img/migrated/image-1711095113934-f0d896b0.png)](/img/migrated/image-1711095113934-f0d896b0.png)

2. Nhập các thông tin:
   - **Name**: Tên Security Group.
   - **Type**: Security Group hoặc Distributed Firewall.
   - **Subnet**: Chọn Subnet từ danh sách.
   - **Applied CIDR / instances** *(tùy chọn)*: Chọn máy ảo hoặc dãy CIDR áp dụng.
   - **Configure security rule**: Cấu hình Inbound rule và Outbound rule theo nhu cầu.

   [![Hộp thoại New Security Group](/img/migrated/image-1711095173572-26de46ab.png)](/img/migrated/image-1711095173572-26de46ab.png)

3. Nhấn **Create security group**.

Security Group mới hiển thị trong bảng **Security Group**.

[![Danh sách Security Group sau khi tạo](/img/migrated/image-1711095189056-ddaa6e99.png)](/img/migrated/image-1711095189056-ddaa6e99.png)

## Bước tiếp theo

- [Tạo một máy ảo](./quick-starts-tao-mot-may-ao.md)

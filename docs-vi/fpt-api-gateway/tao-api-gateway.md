---
id: "tao-api-gateway"
title: "Tạo API Gateway"
description: "Hướng dẫn tạo mới API Gateway trên FPT Cloud."
sidebar_label: "Tạo API Gateway"
sidebar_position: 3
---

# Tạo API Gateway

Để tạo **API Gateway**, bạn thực hiện các bước sau:

**Bước 1:** Tại thanh menu chọn **Integration** > chọn **API Gateway**.

**Bước 2:** Nhấn **Create an API Gateway cluster** để hiển thị màn hình **Create API Gateway**.

**Bước 3:** Trong form tạo **API Gateway**, nhập thông tin màn **Basic Information**:

- **Name** (bắt buộc): Tên API Gateway. Tên có thể chứa ký tự chữ thường a-z hoặc số 0-9. Không dùng dấu cách — thay bằng dấu gạch ngang "-".
- **Description** (tùy chọn): Mô tả.
- **Version** (bắt buộc): Chọn version.
- **Access type** (bắt buộc): Chọn Public hoặc Private.

[![Hình ảnh](/img/migrated/SCR-20250924-nhqw-2c9ba0dd.png)](/img/migrated/SCR-20250924-nhqw-2c9ba0dd.png)

**Bước 4:** Nhấn **Next Step** để chuyển sang màn hình **Details**.

Nhập thông tin sau:

- **Launch Configuration**
  - **Subnet** (bắt buộc): Chọn Subnet.
  - **Storage policy** (bắt buộc): Chọn Storage Policy.
  - **Flavor** (bắt buộc): Chọn Flavor.
  - **Worker nodes** (bắt buộc): Nhập số lượng node (từ 1 đến 10).

[![Hình ảnh](/img/migrated/SCR-20250924-nnrh-2a698b21.png)](/img/migrated/SCR-20250924-nnrh-2a698b21.png)

- **Autoscaling configuration**
  - **Enabled** (bắt buộc): Bật/tắt tính năng autoscaling. Mặc định: Enabled. Khi Disabled, các trường từ Minimum Nodes đến Memory scale-out threshold sẽ không hiển thị.
  - **Minimum Nodes** (bắt buộc): Số node tối thiểu (1–10). Phải nhỏ hơn Maximum Nodes. Khuyến nghị: 3 node cho môi trường production.
  - **Maximum Nodes** (bắt buộc): Số node tối đa (1–10). Phải lớn hơn Minimum Nodes. Tối đa 50 VM instance/node.
  - **CPU scale-out threshold (%)** (bắt buộc): Ngưỡng sử dụng CPU trung bình. Mặc định: 80%.
  - **Memory scale-out threshold (%)** (bắt buộc): Ngưỡng sử dụng RAM trung bình. Mặc định: 80%.

[![Hình ảnh](/img/migrated/SCR-20250924-nogx-60a8a374.png)](/img/migrated/SCR-20250924-nogx-60a8a374.png)

- **Etcd — Self-managed ETCD**: Cho phép bạn tự cài đặt ETCD hoặc sử dụng ETCD do hệ thống quản lý. Mặc định: Unchecked (disabled).
  - Khi **Unchecked**: Chọn **ETCD Flavor** để cấu hình size volume và deployment.

[![Hình ảnh](/img/migrated/SCR-20250924-nonz-76855a0c.png)](/img/migrated/SCR-20250924-nonz-76855a0c.png)

  - Khi **Checked**: Nhập thông tin ETCD thủ công:
    - **Hostname** (bắt buộc): DNS name hoặc IP address.
    - **Port** (bắt buộc): Số từ 1–65535 (mặc định: 2379).
    - **Prefix** (bắt buộc): Prefix lưu trữ cấu hình API Gateway (mặc định: /apisix).
    - **Username** (bắt buộc): Tài khoản xác thực khi Security protocol là SASL_PLAINTEXT hoặc SASL_SSL.
    - **Password** (bắt buộc): Mật khẩu xác thực ETCD.

[![Hình ảnh](/img/migrated/SCR-20250924-nopt-0a88606a.png)](/img/migrated/SCR-20250924-nopt-0a88606a.png)

- **Load balancer configuration**
  - **Load Balancer Size** (bắt buộc): Chọn flavor LoadBalancer phù hợp với tải của ứng dụng.

[![Hình ảnh](/img/migrated/SCR-20250924-noyr-4f810109.png)](/img/migrated/SCR-20250924-noyr-4f810109.png)

- **Endpoint**
  - **Domain** (bắt buộc): Địa chỉ kết nối dịch vụ API Gateway sau khi khởi tạo. Bao gồm a-z, A-Z, 0-9, dấu gạch ngang (-), dấu chấm (.). Tối đa 100 ký tự. Ví dụ: domain-name.com.
  - **CA bundle** (bắt buộc): Chuỗi chứng chỉ CA ở định dạng PEM. Bắt đầu bằng `-----BEGIN CERTIFICATE-----`.
  - **Private key** (bắt buộc): Private key ở định dạng PEM. Bắt đầu bằng `-----BEGIN PRIVATE KEY-----`.

[![Hình ảnh](/img/migrated/SCR-20250924-npeh-f148e5c5.png)](/img/migrated/SCR-20250924-npeh-f148e5c5.png)

**Bước 5:** Nhấn **Next Step** để chuyển sang màn hình **Service Configuration**.

- **Dashboard Configuration**
  - **Enable Dashboard**: Chọn có cài đặt Dashboard hay không. Mặc định: Unchecked.
  - **Dashboard Flavor** (bắt buộc): Kích thước cluster khi cài đặt Dashboard.
  - **Domain** (bắt buộc): Địa chỉ truy cập APISIX Dashboard. Ví dụ: dashboard-api.example.com.
  - **CA bundle** (bắt buộc): Chuỗi chứng chỉ CA ở định dạng PEM.
  - **Private key** (bắt buộc): Private key ở định dạng PEM.

[![Hình ảnh](/img/migrated/SCR-20250924-njbo-8895a431.png)](/img/migrated/SCR-20250924-njbo-8895a431.png)

**Bước 6:** Nhấn **Next Step** để chuyển sang màn hình **Review and Create**.

[![Hình ảnh](/img/migrated/z7045251311917_2c4a0a33e279bb20581a482a6-ec3afc93.jpg)](/img/migrated/z7045251311917_2c4a0a33e279bb20581a482a6-ec3afc93.jpg)

**Bước 7:** Kiểm tra lại thông tin, sau đó nhấn **Create** để hoàn thành việc khởi tạo **API Gateway**.

**API Gateway** hoàn thành khởi tạo khi **Status** chuyển sang **Healthy** (khoảng 25 phút).

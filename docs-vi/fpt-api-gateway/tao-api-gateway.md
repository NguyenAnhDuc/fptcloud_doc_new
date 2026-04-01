---
id: "tao-api-gateway"
title: "Tao api Gateway"
description: "Để tạo **API Gateway** người dùng thực hiện các bước sau:"
sidebar_label: "Tao api Gateway"
sidebar_position: 3
---

# Tao api Gateway

Để tạo **API Gateway** người dùng thực hiện các bước sau: 
**Bước 1:** Tại thanh menu chọn **Integration** > chọn **API Gateway**
**Bước 2:** Nhấn **Create an API Gateway cluster** > hiển thị màn hình **Create API Gateway**
**Bước 3:** Trong form tạo **API Gateway,** nhập thông tin màn **Basic Information** : 
  * **Name** (required): Tên api gateway 

Chú ý: Tên API Gateway có thể chứa các kí tự chữ cái thường a-z hoặc các kí tự số 0-9. Đặc biệt không dùng dấu cách có thể thay dấu cách bằng dấu “-”. 
  * **Description** (optional): Mô tả 
  * **Version** (required): chọn version 
  * **Access type** ( required) : chọn type Public/Private 
[![Hỉnh ảnh](/img/migrated/SCR-20250924-nhqw-2c9ba0dd.png)](/img/migrated/SCR-20250924-nhqw-2c9ba0dd.png)

**Bước 4:** Nhấn **Next Step** để chuyển sang màn nhập thông tin **Details**
Nhập thông tin sau: 
  * **Launch Configuration**
    * **Subnet** (required): chọn Subnet 
    * **Storage policy** (required): chọn Storage Policy 
    * **Flavor** (required): chọn Flavor 
    * **Worker nodes** (required): Nhập số lượng nodes (từ 1 đến 10). 
[![Hình ảnh](/img/migrated/SCR-20250924-nnrh-2a698b21.png)](/img/migrated/SCR-20250924-nnrh-2a698b21.png)
  * **Autoscaling configuration:**
    * **Enabled (required)** : Bật/tắt tính năng autoscaling cho API Gateway cluster. 
      * Default: **Enabled**. 
      * Nếu **Disabled** → các trường cấu hình từ _Minimum Nodes_ đến _Memory scale-out threshold_ sẽ không hiển thị. 
    * **Minimum Nodes (required)** : Số lượng node tối thiểu của cluster. 
      * Giá trị hợp lệ: 1–10 nodes. 
      * Phải nhỏ hơn _Maximum Nodes_. 
      * Khuyến nghị: 3 nodes cho môi trường production. 
    * **Maximum Nodes (required)** : Số lượng node tối đa của cluster. 
      * Giá trị hợp lệ: 1–10 nodes. 
      * Phải lớn hơn _Minimum Nodes_. 
      * Số lượng node tối đa cho 1 cụm API Gateway: 50 VM instance/node. 
    * **CPU scale-out threshold (%)**(required): Ngưỡng phần trăm sử dụng CPU trung bình của node. 
      * Default: 80%. 
      * Nếu vượt ngưỡng, hệ thống sẽ xem xét scale out 
      * Statistic: Average. 
    * **Memory scale-out threshold (%)**(required): Ngưỡng phần trăm sử dụng RAM trung bình của node. 
      * Default: 80%. 
      * Nếu vượt ngưỡng, hệ thống sẽ kích hoạt scale out. 
      * Statistic: Average. 
      * Operator: greater than. 
[![Hình ảnh](/img/migrated/SCR-20250924-nogx-60a8a374.png)](/img/migrated/SCR-20250924-nogx-60a8a374.png)
    * **Etcd:** Self-managed ETCD: Cho phép người dùng lựa chọn tự cài đặt ETCD hoặc sử dụng ETCD được hệ thống quản lý. 
      * Default: **Unchecked** (disabled). 
      * Khi **Unchecked** : 
        * Người dùng chọn **ETCD Flavor** để cấu hình size volume và deployment của ETCD. 
        * Cấu hình resource limit: 
[![Hình ảnh](/img/migrated/SCR-20250924-nonz-76855a0c.png)](/img/migrated/SCR-20250924-nonz-76855a0c.png)
      * Khi **Checked** : 
        * Hiển thị các trường để nhập thông tin ETCD thủ công: 
        * **Hostname**(required): DNS name hoặc IP address, 
        * **Port**(required): Số từ 1–65535 (default: 2379). 
        * **Prefix** :(required) Prefix lưu trữ cấu hình API Gateway (default: /apisix). 
        * **Username** (required): Tài khoản xác thực khi Security protocol là SASL_PLAINTEXT hoặc SASL_SSL. 
        * **Password** (required): Mật khẩu xác thực ETCD (áp dụng khi Security protocol là SASL_PLAINTEXT hoặc SASL_SSL). 
[![Hình ảnh](/img/migrated/SCR-20250924-nopt-0a88606a.png)](/img/migrated/SCR-20250924-nopt-0a88606a.png)
  * **Load balancer configuration:**
    * Load Balancer Size (required): Chọn cấu hình flavor của LoadBalancer để đáp ứng tải tương ứng của ứng dụng đằng sau backend của LoadBalancer pool 
[![Hình ảnh](/img/migrated/SCR-20250924-noyr-4f810109.png)](/img/migrated/SCR-20250924-noyr-4f810109.png)
  * **Endpoint:**
    * **Domain (required):** Địa chỉ kết nối dịch vụ Event Gateway sau khi khởi tạo dịch vụ 
      * Bao gồm a-z, A-Z, 0-9, dấu gạch ngang (-), dấu chấm (.); tối đa 100 ký tự 
      * Tên domain không bắt đầu và kết thúc bằng dấu gạch nối (-) hoặc dấu chấm (.) 
      * Top level tối thiểu 2, tối đa 6 ký tự 
      * Ví dụ: domain-name.com 
    * **CA bundle ( required):** Chuỗi chứng chỉ CA ở dịnh dạng PEM 
      * Bắt đầu bằng -----BEGIN CERTIFICATE----- và kết thúc đúng chuẩn PEM 
    * **Private key (required):** Private key ở định dạng PEM 
      * Bắt đầu bằng -----BEGIN PRIVATE KEY----- và kết thúc đúng chuẩn PEM 
[![Hình ảnh](/img/migrated/SCR-20250924-npeh-f148e5c5.png)](/img/migrated/SCR-20250924-npeh-f148e5c5.png)

**Bước 5:** Nhấn **Next Step** để chuyển sang màn **Service Configuration**
  * **Dashboard Configuration**
    * **Enable Dashboard** : Người dùng lựa chọn cài đặt Dashboard hay không. 
  * Default: **Unchecked**. 
  * **Dashboard Flavor (required)** : Kích thước cluster khi cài đặt Dashboard. 
    * **Domain (required)** : Địa chỉ truy cập APISIX Dashboard. 
      * Cho phép: a–z, A–Z, 0–9, dấu gạch ngang (-), dấu chấm (.) 
      * Không được bắt đầu/kết thúc bằng dấu gạch ngang (-) hoặc dấu chấm (.) 
      * Độ dài tối đa: 100 ký tự 
      * Top level domain: tối thiểu 2, tối đa 6 ký tự 
      * Ví dụ: dashboard-api.example.com 
    * **CA bundle (required)** : Chuỗi chứng chỉ CA ở định dạng PEM. 
      * Phải bắt đầu bằng: -----BEGIN CERTIFICATE----- 
      * Phải kết thúc đúng chuẩn PEM. 
    * **Private key (required)** : Private key ở định dạng PEM. 
      * Phải bắt đầu bằng: -----BEGIN PRIVATE KEY----- 
      * Phải kết thúc đúng chuẩn PEM.
[![Hình ảnh](/img/migrated/SCR-20250924-njbo-8895a431.png)](/img/migrated/SCR-20250924-njbo-8895a431.png)

**Bước 6:** Nhấn **Next Step** để chuyển sang màn **Review and Create**
[![Hình ảnh](/img/migrated/z7045251311917_2c4a0a33e279bb20581a482a6-ec3afc93.jpg)](/img/migrated/z7045251311917_2c4a0a33e279bb20581a482a6-ec3afc93.jpg)
**Bước 7** : Kiểm tra thông tin nhập sau đó nhấn **Create** để hoàn thành việc khởi tạo **API Gateway**
**API Gateway** hoàn thành khởi tạo khi **Status** của **API Gateway** là **Healthy** (~25 phút)

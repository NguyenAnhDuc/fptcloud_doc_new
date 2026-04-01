---
id: "tao-api-gateway"
title: "Tao api Gateway"
sidebar_label: "Tao api Gateway"
sidebar_position: "3"
---

# Tao api Gateway

Để tạo **API Gateway** user thực hiện the bước sau: 
**Step 1:** Tại thanh menu chọn **Integration** > chọn **API Gateway**
**Step 2:** Click **Create an API Gateway cluster** > displayed màn hình **Create API Gateway**
**Step 3:** Trong form tạo **API Gateway,** nhập information màn **Basic Information** : 
  * **Name** (required): Tên api gateway 

Chú ý: Tên API Gateway can chứa the kí tự chữ cái thường a-z or the kí tự số 0-9. Đặc biệt không dùng dấu theh can thay dấu theh bằng dấu “-”. 
  * **Description** (optional): Mô tả 
  * **Version** (required): chọn version 
  * **Access type** ( required) : chọn type Public/Private 
[![Hỉnh ảnh](/img/migrated/SCR-20250924-nhqw-2c9ba0dd.png)](/img/migrated/SCR-20250924-nhqw-2c9ba0dd.png)

**Step 4:** Click **Next Step** to chuyển sang màn nhập information **Details**
Enter the information sau: 
  * **Launch Configuration**
    * **Subnet** (required): chọn Subnet 
    * **Storage policy** (required): chọn Storage Policy 
    * **Flavor** (required): chọn Flavor 
    * **Worker nodes** (required): Enter số lượng nodes (from 1 đến 10). 
[![Hình ảnh](/img/migrated/SCR-20250924-nnrh-2a698b21.png)](/img/migrated/SCR-20250924-nnrh-2a698b21.png)
  * **Autoscaling configuration:**
    * **Enabled (required)** : Bật/tắt feature autoscaling for API Gateway cluster. 
      * Default: **Enabled**. 
      * Nếu **Disabled** → the trường cấu hình from _Minimum Nodes_ đến _Memory scale-out threshold_ will không displayed. 
    * **Minimum Nodes (required)** : Số lượng node tối thiểu of cluster. 
      * Giá trị hợp lệ: 1–10 nodes. 
      * Phải nhỏ hơn _Maximum Nodes_. 
      * Khuyến nghị: 3 nodes for môi trường production. 
    * **Maximum Nodes (required)** : Số lượng node tối đa of cluster. 
      * Giá trị hợp lệ: 1–10 nodes. 
      * Phải lớn hơn _Minimum Nodes_. 
      * Số lượng node tối đa for 1 cụm API Gateway: 50 VM instance/node. 
    * **CPU scale-out threshold (%)**(required): Ngưỡng phần trăm sử dụng CPU trung bình of node. 
      * Default: 80%. 
      * Nếu vượt ngưỡng, system will xem xét scale out 
      * Statistic: Average. 
    * **Memory scale-out threshold (%)**(required): Ngưỡng phần trăm sử dụng RAM trung bình of node. 
      * Default: 80%. 
      * Nếu vượt ngưỡng, system will kích hoạt scale out. 
      * Statistic: Average. 
      * Operator: greater than. 
[![Hình ảnh](/img/migrated/SCR-20250924-nogx-60a8a374.png)](/img/migrated/SCR-20250924-nogx-60a8a374.png)
    * **Etcd:** Self-managed ETCD: Cho phép user lựa chọn tự cài đặt ETCD or sử dụng ETCD is system quản lý. 
      * Default: **Unchecked** (disabled). 
      * Khi **Unchecked** : 
        * Người dùng chọn **ETCD Flavor** to cấu hình size volume and deployment of ETCD. 
        * Configure resource limit: 
[![Hình ảnh](/img/migrated/SCR-20250924-nonz-76855a0c.png)](/img/migrated/SCR-20250924-nonz-76855a0c.png)
      * Khi **Checked** : 
        * Hiển thị the trường to nhập information ETCD thủ công: 
        * **Hostname**(required): DNS name or IP address, 
        * **Port**(required): Số from 1–65535 (default: 2379). 
        * **Prefix** :(required) Prefix lưu trữ cấu hình API Gateway (default: /apisix). 
        * **Username** (required): Tài khoản xác thực when Security protocol là SASL_PLAINTEXT or SASL_SSL. 
        * **Password** (required): Mật khẩu xác thực ETCD (áp dụng when Security protocol là SASL_PLAINTEXT or SASL_SSL). 
[![Hình ảnh](/img/migrated/SCR-20250924-nopt-0a88606a.png)](/img/migrated/SCR-20250924-nopt-0a88606a.png)
  * **Load balancer configuration:**
    * Load Balancer Size (required): Chọn cấu hình flavor of LoadBalancer to đáp ứng tải corresponding of ứng dụng đằng sau backend of LoadBalancer pool 
[![Hình ảnh](/img/migrated/SCR-20250924-noyr-4f810109.png)](/img/migrated/SCR-20250924-noyr-4f810109.png)
  * **Endpoint:**
    * **Domain (required):** Địa chỉ kết nối service Event Gateway after khởi tạo service 
      * Bao gồm a-z, A-Z, 0-9, dấu gạch ngang (-), dấu chấm (.); tối đa 100 ký tự 
      * Tên domain không bắt đầu and kết thúc bằng dấu gạch nối (-) or dấu chấm (.) 
      * Top level tối thiểu 2, tối đa 6 ký tự 
      * Example: domain-name.com 
    * **CA bundle ( required):** Chuỗi chứng chỉ CA ở dịnh dạng PEM 
      * Bắt đầu bằng -----BEGIN CERTIFICATE----- and kết thúc đúng chuẩn PEM 
    * **Private key (required):** Private key ở định dạng PEM 
      * Bắt đầu bằng -----BEGIN PRIVATE KEY----- and kết thúc đúng chuẩn PEM 
[![Hình ảnh](/img/migrated/SCR-20250924-npeh-f148e5c5.png)](/img/migrated/SCR-20250924-npeh-f148e5c5.png)

**Step 5:** Click **Next Step** to chuyển sang màn **Service Configuration**
  * **Dashboard Configuration**
    * **Enable Dashboard** : Người dùng lựa chọn cài đặt Dashboard hay không. 
  * Default: **Unchecked**. 
  * **Dashboard Flavor (required)** : Kích thước cluster when cài đặt Dashboard. 
    * **Domain (required)** : Địa chỉ truy cập APISIX Dashboard. 
      * Cho phép: a–z, A–Z, 0–9, dấu gạch ngang (-), dấu chấm (.) 
      * Không is bắt đầu/kết thúc bằng dấu gạch ngang (-) or dấu chấm (.) 
      * Độ dài tối đa: 100 ký tự 
      * Top level domain: tối thiểu 2, tối đa 6 ký tự 
      * Example: dashboard-api.example.com 
    * **CA bundle (required)** : Chuỗi chứng chỉ CA ở định dạng PEM. 
      * Phải bắt đầu bằng: -----BEGIN CERTIFICATE----- 
      * Phải kết thúc đúng chuẩn PEM. 
    * **Private key (required)** : Private key ở định dạng PEM. 
      * Phải bắt đầu bằng: -----BEGIN PRIVATE KEY----- 
      * Phải kết thúc đúng chuẩn PEM.
[![Hình ảnh](/img/migrated/SCR-20250924-njbo-8895a431.png)](/img/migrated/SCR-20250924-njbo-8895a431.png)

**Step 6:** Click **Next Step** to chuyển sang màn **Review and Create**
[![Hình ảnh](/img/migrated/z7045251311917_2c4a0a33e279bb20581a482a6-ec3afc93.jpg)](/img/migrated/z7045251311917_2c4a0a33e279bb20581a482a6-ec3afc93.jpg)
**Step 7:** Check information nhập sau that nhấn **Create** to hoàn thành việc khởi tạo **API Gateway**
**API Gateway** hoàn thành khởi tạo when **Status** of **API Gateway** là **Healthy** (~25 phút)

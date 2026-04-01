---
id: "tao-event-gateway"
title: "Tao Event Gateway"
sidebar_label: "Tao Event Gateway"
sidebar_position: "3"
---

# Tao Event Gateway

Để tạo **Event Gateway** người dùng thực hiện các bước sau: 
**Step 1:** Tại thanh menu chọn **Integration** > chọn **Event Gateway**
**Step 2:** Nhấn **Create a Event Gateway** > hiển thị popup **Choose Event Gateway Mode** > chọn **REST Events to Kafka** > **Continue**
**Step 3:** Trong form tạo **Event Gateway,** nhập thông tin màn **Basic Information** : 
  * **Name** (required): Tên event gateway 

Chú ý: Tên Event Gateway có thể chứa các kí tự chữ cái thường a-z hoặc chữ cái in hoa A-Z hoặc các kí tự số 0-9. Đặc biệt không dùng dấu cách có thể thay dấu cách bằng dấu “-” hoặc “_”. 
  * **Description** (optional): Mô tả 
  * **Version** (required): chọn version 
  * **Type** ( required) : chọn type Public/Private 

[![Hình ảnh](/img/migrated/imagef-d52b4a53.png)](/img/migrated/imagef-d52b4a53.png)
**Step 4:** Nhấn **Next Step** để chuyển sang màn nhập thông tin **Details**
Nhập thông tin sau: 
  * **Launch Configuration**
    * **Subnet** (required): chọn Subnet 
    * **Storage policy** (required): chọn Storage Policy 
    * **Flavor** (required): chọn Flavor, giá trị mặc định Medium-4 (2 CPU - 4 GB RAM) x 2 Node 
    * **Load Balancer Size** (required): chọn LB size 
[![Hình ảnh](/img/migrated/image11-c4b59aa2.png)](/img/migrated/image11-c4b59aa2.png)
  * **Kafka Cluster Information:** Có hai lựa chọn: From FPT Database Engine, Manual configuration 
  * **Trường hợp chọn Manual configuration**
Nhập và chọn các thông tin sau: 
    * **Bootstrap server endpoint:** nhập địa chỉ Bootstrap server endpoint 
    * **Security protocol** : chọn một trong các giao thức bảo mật sau: 
      * **SASL_PLAINTEXT** : là cơ chế xác thực đơn giản thông qua Username và password 
        * SASL Mechanism 
        * SASL Username 
        * SASL Password 
      * **SASL_SSL:** cung cấp một lớp bảo mật toàn diện cho việc xác thực và mã hóa dữ liệu thông qua Username và password 
        * SASL Mechanism1 
        * SASL Username 
        * SASL Password 
      * **PLAINTEXT:** dữ liệu truyền qua mạng không được mã hóa, không khuyến khích sử dụng 
      * **SSL:** là một giao thức bảo mật mạng được sử dụng để bảo vệ dữ liệu khi truyền qua mạng Internet 
    * **Username (required)** : Tên đăng nhập cho xác thực 
      * Hiển thị nếu Security protocol: SASL_PLAINTEXT hoặc SASL_SSL 
      * Bao gồm a-z, A-Z, 0-9, dấu gạch dưới (_), dấu gạch ngang (-), dấu chấm (.); Không chứa khoảng trắng ở đầu, cuối hoặc giữa chuỗi; Tối đa 64 ký tự 
    * **Password (required)** : Mật khẩu cho xác thực 
      * Hiển thị nếu Security protocol: SASL_PLAINTEXT hoặc SASL_SSL 
      * Không chứa khoảng trắng ở đầu, cuối hoặc giữa chuỗi; Tối đa 64 ký tự 

[![Hình ảnh](/img/migrated/image12-76852251.png)](/img/migrated/image12-76852251.png)
  * **Trường hợp chọn From FPT Database Engine**
Nhập và chọn các thông tin sau: 
    * **Database Name (required):** chọn Database 
    * **Bootstrap server endpoint:** nhập địa chỉ Bootstrap server endpoint 
    * **Security protocol** : chọn một trong các giao thức bảo mật sau: 
      * **SASL_PLAINTEXT** : là cơ chế xác thực đơn giản thông qua Username và password 
        * SASL Mechanism 
        * SASL Username 
        * SASL Password 
      * **SASL_SSL** : cung cấp một lớp bảo mật toàn diện cho việc xác thực và mã hóa dữ liệu thông qua Username và password 
        * SASL Mechanism 
        * SASL Username 
        * SASL Password 
      * **PLAINTEXT** : dữ liệu truyền qua mạng không được mã hóa, không khuyến khích sử dụng 
      * **SSL** : là một giao thức bảo mật mạng được sử dụng để bảo vệ dữ liệu khi truyền qua mạng Internet 
    * **Username (required)** : Tên đăng nhập cho xác thực 
      * Hiển thị nếu Security protocol: SASL_PLAINTEXT hoặc SASL_SSL 
      * Bao gồm a-z, A-Z, 0-9, dấu gạch dưới (_), dấu gạch ngang (-), dấu chấm (.); không chứa khoảng trắng ở đầu, cuối hoặc giữa chuỗi; tối đa 64 ký tự 
    * **Password (required)** : Mật khẩu cho xác thực 
      * Hiển thị nếu Security protocol: SASL_PLAINTEXT hoặc SASL_SSL 
      * Không chứa khoảng trắng ở đầu, cuối hoặc giữa chuỗi; Tối đa 64 ký tự 

[![Hình ảnh](/img/migrated/image13-a13cf585.png)](/img/migrated/image13-a13cf585.png)
  * **Endpoint:**
    * **Domain (required):** Địa chỉ kết nối dịch vụ Event Gateway sau khi khởi tạo dịch vụ 
      * Bao gồm a-z, A-Z, 0-9, dấu gạch ngang (-), dấu chấm (.); tối đa 100 ký tự 
      * Tên domain không bắt đầu và kết thúc bằng dấu gạch nối (-) hoặc dấu chấm (.) 
      * Top level tối thiểu 2, tối đa 6 ký tự 
      * Example: domain-name.com 
    * **CA bundle ( required):** Chuỗi chứng chỉ CA ở dịnh dạng PEM 
      * Bắt đầu bằng -----BEGIN CERTIFICATE----- và kết thúc đúng chuẩn PEM 
    * **Private key (required):** Private key ở định dạng PEM 
      * Bắt đầu bằng -----BEGIN PRIVATE KEY----- và kết thúc đúng chuẩn PEM 
[![Hình ảnh](/img/migrated/image14-3754b0d7.png)](/img/migrated/image14-3754b0d7.png)

**Step 5:** Nhấn **Next Step** để chuyển sang màn **Configure**
Nhập các thông tin sau: 
  * **JWT auth:** Bật/Tắt cơ chế xác thực JWT Token - Mặc định Tắt 
    * **Name (required):** Tên JWT auth 
      * Bao gồm a-z, A-Z, -, _ và số; bắt đầu bằng chữ cái; tối đa 30 ký tự 
    * **Claim key:** Danh sách claim key: 
      * Issuer 
      * Issued At 
      * Expiration 
      * Audience 
      * Subject 
      * Scope 
        * Giá trị mặc định claim key là "Issuer" 
        * Giao diện hiển thị mặc 1 định 1 cặp claim key-value nếu Bật JWT Auth 
        * Mặc định render 2 input: Issuer và Audience, cả hai đều required 
    * **Value** : Giá trị tương ứng với mỗi claim key (nếu có) 
      * Tối đa 100 ký tự 
    * **Public key ( required):** Chuỗi public key ở dịnh dạng PEM 
      * Bắt đầu bằng -----BEGIN PUBLIC KEY----- và kết thúc đúng chuẩn PEM 
Nhấn **Add claim** để thêm claim key-value Và **Remove claim** để xoá claim key-value 

[![Hình ảnh](/img/migrated/image15-ea59e130.png)](/img/migrated/image15-ea59e130.png)
  * **Routers:**
    * **Name ( required):** Tên Router 
      * Bao gồm a-z, A-Z, -, _ và số, bắt đầu bằng chữ cái, tối đa 30 ký tự 
    * **Mode (required):** Loại Router 
      * Lựa chọn từ danh sách: 
      * Oneway 
      * Sync 
      * Async 
      * Giao diện hiển thị mặc định 3 template router tương ứng với 3 mode 
    * **Authentication(required):** Router có/không sử dụng xác thực 
      * Mặc định None 
      * Lựa chọn từ danh sách: 
      * None: không sử dụng xác thực 
      * : sử dụng xác thực với JWT auth (nếu bật cấu hình JWT auth) 
    * **Path ( required):** Đường dẫn gửi (POST) lấy (FETCH) dữ liệu 
      * Bắt đầu bằng dấu /
      * Bao gồm a-z, A-Z, 0-9, dấu gạch ngang (-), gạch dưới (_), /, {, }, = 
      * Tối đa 100 ký tự 
    * **Method ( required):** Phương thức của API trong Router 
    * **Scope ( required):** Quy định giá trị (value) của claim "scope" trong JWT token để xác thực khi request API 
      * Tối đa 50 ký tự 
    * **Topic ( required):** Tên topic kafka nhận dữ liệu trong mode Oneway 
    * **Request topic ( required):** Tên topic kafka nhận dữ liệu trong mode Sync hoặc Async 
      * Bao gồm a-z, A-Z, 0-9, dấu gạch ngang (-), gạch dưới (_), dấu chấm (.)
      * Bắt đầu bằng chữ cái; Tối đa 249 ký tự 
    * **Response topic ( required):** Tên topic kafka lấy dữ liệu trong mode Sync hoặc Async 
      * Bao gồm a-z, A-Z, 0-9, dấu gạch ngang (-), gạch dưới (_), dấu chấm (.)
      * Bắt đầu bằng chữ cái; Tối đa 249 ký tự 
Nhấn **Add router** để thêm template giao diện tương ứng với mỗi loại Mode của Router 
Nhấn **Remove router** để Xoá Router 

[![Hình ảnh](/img/migrated/image16-b9271d2a.png)](/img/migrated/image16-b9271d2a.png)
**Step 7:** Nhấn **Next Step** để chuyển sang màn **Review and Create**
[![Hình ảnh](/img/migrated/image17-f42b2736.png)](/img/migrated/image17-f42b2736.png)
**Step 8** : Kiểm tra thông tin nhập sau đó nhấn **Create** để hoàn thành việc khởi tạo **Event Gateway**
**Event Gateway** hoàn thành khởi tạo khi **Status** của **Event Gateway** là **Healthy** (~15 phút)

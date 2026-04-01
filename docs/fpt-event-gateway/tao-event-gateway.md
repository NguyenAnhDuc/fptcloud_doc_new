---
id: "tao-event-gateway"
title: "Tao Event Gateway"
sidebar_label: "Tao Event Gateway"
sidebar_position: "3"
---

# Tao Event Gateway

Để tạo **Event Gateway** user thực hiện the bước sau: 
**Step 1:** Tại thanh menu chọn **Integration** > chọn **Event Gateway**
**Step 2:** Click **Create a Event Gateway** > displayed popup **Choose Event Gateway Mode** > chọn **REST Events to Kafka** > **Continue**
**Step 3:** Trong form tạo **Event Gateway,** nhập thông tin màn **Basic Information** : 
  * **Name** (required): Tên event gateway 

Chú ý: Tên Event Gateway can chứa the kí tự chữ cái thường a-z or chữ cái in hoa A-Z or the kí tự số 0-9. Đặc biệt không dùng dấu theh can thay dấu theh bằng dấu “-” or “_”. 
  * **Description** (optional): Mô tả 
  * **Version** (required): chọn version 
  * **Type** ( required) : chọn type Public/Private 

[![Hình ảnh](/img/migrated/imagef-d52b4a53.png)](/img/migrated/imagef-d52b4a53.png)
**Step 4:** Click **Next Step** to chuyển sang màn nhập thông tin **Details**
Enter thông tin sau: 
  * **Launch Configuration**
    * **Subnet** (required): chọn Subnet 
    * **Storage policy** (required): chọn Storage Policy 
    * **Flavor** (required): chọn Flavor, giá trị mặc định Medium-4 (2 CPU - 4 GB RAM) x 2 Node 
    * **Load Balancer Size** (required): chọn LB size 
[![Hình ảnh](/img/migrated/image11-c4b59aa2.png)](/img/migrated/image11-c4b59aa2.png)
  * **Kafka Cluster Information:** Có hai lựa chọn: From FPT Database Engine, Manual configuration 
  * **Trường hợp chọn Manual configuration**
Enter and chọn the thông tin sau: 
    * **Bootstrap server endpoint:** nhập địa chỉ Bootstrap server endpoint 
    * **Security protocol** : chọn a in the giao thức security sau: 
      * **SASL_PLAINTEXT** : là cơ chế xác thực đơn giản thông qua Username and password 
        * SASL Mechanism 
        * SASL Username 
        * SASL Password 
      * **SASL_SSL:** cung cấp a lớp security toàn diện for việc xác thực and mã hóa dữ liệu thông qua Username and password 
        * SASL Mechanism1 
        * SASL Username 
        * SASL Password 
      * **PLAINTEXT:** dữ liệu truyền qua network không is mã hóa, không khuyến khích sử dụng 
      * **SSL:** là a giao thức security network is sử dụng to bảo vệ dữ liệu when truyền qua network Internet 
    * **Username (required)** : Tên đăng nhập for xác thực 
      * Hiển thị if Security protocol: SASL_PLAINTEXT or SASL_SSL 
      * Bao gồm a-z, A-Z, 0-9, dấu gạch dưới (_), dấu gạch ngang (-), dấu chấm (.); Không chứa khoảng trắng ở đầu, cuối or giữa chuỗi; Tối đa 64 ký tự 
    * **Password (required)** : Mật khẩu for xác thực 
      * Hiển thị if Security protocol: SASL_PLAINTEXT or SASL_SSL 
      * Không chứa khoảng trắng ở đầu, cuối or giữa chuỗi; Tối đa 64 ký tự 

[![Hình ảnh](/img/migrated/image12-76852251.png)](/img/migrated/image12-76852251.png)
  * **Trường hợp chọn From FPT Database Engine**
Enter and chọn the thông tin sau: 
    * **Database Name (required):** chọn Database 
    * **Bootstrap server endpoint:** nhập địa chỉ Bootstrap server endpoint 
    * **Security protocol** : chọn a in the giao thức security sau: 
      * **SASL_PLAINTEXT** : là cơ chế xác thực đơn giản thông qua Username and password 
        * SASL Mechanism 
        * SASL Username 
        * SASL Password 
      * **SASL_SSL** : cung cấp a lớp security toàn diện for việc xác thực and mã hóa dữ liệu thông qua Username and password 
        * SASL Mechanism 
        * SASL Username 
        * SASL Password 
      * **PLAINTEXT** : dữ liệu truyền qua network không is mã hóa, không khuyến khích sử dụng 
      * **SSL** : là a giao thức security network is sử dụng to bảo vệ dữ liệu when truyền qua network Internet 
    * **Username (required)** : Tên đăng nhập for xác thực 
      * Hiển thị if Security protocol: SASL_PLAINTEXT or SASL_SSL 
      * Bao gồm a-z, A-Z, 0-9, dấu gạch dưới (_), dấu gạch ngang (-), dấu chấm (.); không chứa khoảng trắng ở đầu, cuối or giữa chuỗi; tối đa 64 ký tự 
    * **Password (required)** : Mật khẩu for xác thực 
      * Hiển thị if Security protocol: SASL_PLAINTEXT or SASL_SSL 
      * Không chứa khoảng trắng ở đầu, cuối or giữa chuỗi; Tối đa 64 ký tự 

[![Hình ảnh](/img/migrated/image13-a13cf585.png)](/img/migrated/image13-a13cf585.png)
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
[![Hình ảnh](/img/migrated/image14-3754b0d7.png)](/img/migrated/image14-3754b0d7.png)

**Step 5:** Click **Next Step** to chuyển sang màn **Configure**
Enter the thông tin sau: 
  * **JWT auth:** Bật/Disable cơ chế xác thực JWT Token - Mặc định Disable 
    * **Name (required):** Tên JWT auth 
      * Bao gồm a-z, A-Z, -, _ and số; bắt đầu bằng chữ cái; tối đa 30 ký tự 
    * **Claim key:** List claim key: 
      * Issuer 
      * Issued At 
      * Expiration 
      * Audience 
      * Subject 
      * Scope 
        * Giá trị mặc định claim key là "Issuer" 
        * Interface displayed mặc 1 định 1 cặp claim key-value if Enable JWT Auth 
        * Mặc định render 2 input: Issuer and Audience, cả hai đều required 
    * **Value** : Giá trị corresponding with mỗi claim key (if có) 
      * Tối đa 100 ký tự 
    * **Public key ( required):** Chuỗi public key ở dịnh dạng PEM 
      * Bắt đầu bằng -----BEGIN PUBLIC KEY----- and kết thúc đúng chuẩn PEM 
Click **Add claim** to thêm claim key-value Và **Remove claim** to xoá claim key-value 

[![Hình ảnh](/img/migrated/image15-ea59e130.png)](/img/migrated/image15-ea59e130.png)
  * **Routers:**
    * **Name ( required):** Tên Router 
      * Bao gồm a-z, A-Z, -, _ and số, bắt đầu bằng chữ cái, tối đa 30 ký tự 
    * **Mode (required):** Loại Router 
      * Lựa chọn from danh sách: 
      * Oneway 
      * Sync 
      * Async 
      * Interface displayed mặc định 3 template router corresponding with 3 mode 
    * **Authentication(required):** Router có/không sử dụng xác thực 
      * Mặc định None 
      * Lựa chọn from danh sách: 
      * None: không sử dụng xác thực 
      * : sử dụng xác thực with JWT auth (if bật cấu hình JWT auth) 
    * **Path ( required):** Đường dẫn gửi (POST) lấy (FETCH) dữ liệu 
      * Bắt đầu bằng dấu /
      * Bao gồm a-z, A-Z, 0-9, dấu gạch ngang (-), gạch dưới (_), /, {, }, = 
      * Tối đa 100 ký tự 
    * **Method ( required):** Phương thức of API in Router 
    * **Scope ( required):** Quy định giá trị (value) of claim "scope" in JWT token to xác thực when request API 
      * Tối đa 50 ký tự 
    * **Topic ( required):** Tên topic kafka nhận dữ liệu in mode Oneway 
    * **Request topic ( required):** Tên topic kafka nhận dữ liệu in mode Sync or Async 
      * Bao gồm a-z, A-Z, 0-9, dấu gạch ngang (-), gạch dưới (_), dấu chấm (.)
      * Bắt đầu bằng chữ cái; Tối đa 249 ký tự 
    * **Response topic ( required):** Tên topic kafka lấy dữ liệu in mode Sync or Async 
      * Bao gồm a-z, A-Z, 0-9, dấu gạch ngang (-), gạch dưới (_), dấu chấm (.)
      * Bắt đầu bằng chữ cái; Tối đa 249 ký tự 
Click **Add router** to thêm template giao diện corresponding with mỗi loại Mode of Router 
Click **Remove router** to Xoá Router 

[![Hình ảnh](/img/migrated/image16-b9271d2a.png)](/img/migrated/image16-b9271d2a.png)
**Step 7:** Click **Next Step** to chuyển sang màn **Review and Create**
[![Hình ảnh](/img/migrated/image17-f42b2736.png)](/img/migrated/image17-f42b2736.png)
**Step 8** : Check thông tin nhập sau that nhấn **Create** to hoàn thành việc khởi tạo **Event Gateway**
**Event Gateway** hoàn thành khởi tạo when **Status** of **Event Gateway** là **Healthy** (~15 phút)

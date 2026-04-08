---
id: "tao-open-metadata-service"
title: "Tạo Open Metadata service"
sidebar_label: "Tạo Open Metadata service"
description: "Tạo Open Metadata service"
sidebar_position: 2
---

# Tạo Open Metadata service

Để tạo **Open Metadata** service, người dùng thực hiện các bước sau:

**Bước 1:** Tại thanh menu chọn **Data Platform** > chọn **Workspace Management** > chọn **Workspace name**

**Bước 2:** Tại phần **My services** nhấn **Create** > hiển thị popup **New service** chọn **Open Metadata** > **Create**

![Hình ảnh](images/tao-open-metadata-service/img-001.png)

**Bước 3:** Trong form tạo **Open Metadata**, nhập thông tin màn **Basic Information**:

 * **Orchestration service name** (required): Lựa chọn Orchestration service điều phối hoạt động của các Spark Job

 * **Name** (required): tên dịch vụ

Chú ý: Tên dịch vụ có thể chứa các kí tự chữ cái thường a-z hoặc chữ cái in hoa A-Z hoặc các kí tự số 0-9. Đặc biệt không dùng dấu cách có thể thay dấu cách bằng dấu “-” hoặc “_”.

 * **Description** (optional): mô tả dịch vụ

 * **Version** (required): phiên bản dịch vụ

![Hình ảnh](images/tao-open-metadata-service/img-002.png)

**Bước 4:** Nhấn **Next Step** để chuyển sang màn nhập thông tin **Nodes Configuration**

Nhập các thông tin sau:

 * **Storage policy**: chọn Storage policy

 * **Disk size**: chọn size cấu hình Disk

 * **Type**: chọn flavor

 * **Number of nodes**: nhập số node

:::warning
số node phải lớn hơn hoặc bằng 1
:::

Nếu người dùng cần auto scale dịch vụ thì tích chọn Enable auto scaling và nhập số node mong muốn

:::warning
số node scale phải lớn hơn **Number of node**:::

![Hình ảnh](images/tao-open-metadata-service/img-003.png)

**Bước 5:** Nhấn **Next** để chuyển sang màn **Advanced**

 * **Database** (thông tin Database lưu dữ liệu cho **Data governance**, người dùng có thể sử dụng Database đã tạo trên dịch vụ **FPT Database Engine** hoặc các **Database** khác của người dùng)

Trường hợp chọn **type** là **PostgreSQL**

 * **Select Database** (required): Chọn Database

 * **Host name** (required): Hostname hoặc IP của Postgres server

 * **Port** (required): Postgres server port, mặc định là 5432

 * **Database** (required): tên database

 * **Username** (required): Tên tài khoản truy cập tới Database

 * **Password** (required): Mật khẩu truy cập tới Database

Trường hợp chọn **Manual configuration**

 * **Host name** (required): Hostname hoặc IP của Postgres server

 * **Port** (required): Postgres server port, mặc định là 5432

 * **Database** (required): tên database

 * **Username** (required): user truy cập tới Database

 * **Password** (required): Password truy cập tới Database

Sau khi nhập đầy đủ thông tin **Database**, người dùng ấn **Test connection** để kiểm tra kết nối từ **Workspace** đến **Database** đã nhập

 * **Search Engine Database**

 * **Type (required)**: Opensearch hoặc Elasticsearch

 * **Database** (required): tên database

 * **Protocol (required)**: chọn http hoặc https

 * **Host name (required)**: địa chỉ truy cập

 * **Port (required)**: cổng kết nối

 * **Username (required)**: tên tài khoản

 * **Password (required)**: mật khẩu

 * **Index (required):** index

Nhấn **Test connection** để kiểm tra kết nối từ **Workspace** tới **Search Engine Database**

![Hình ảnh](images/tao-open-metadata-service/img-004.png)

 * **Single Sign On**

 * Nếu không tích chọn Single Sign On, Superset được khởi tạo xác thực bằng **Basic authen**

 * Nếu tích chọn **Single Sign On:**

 * **Provider: FPT ID** \- Người dùng nhập các thông tin sau:

 * **Email**: địa chỉ email FPT
 * **Provider: Google** \- Người dùng nhập các thông tin sau:

 * **Client ID**: một đoạn mã ID được sử dụng để xác thực client với google

 * **Client Secret**: mật khẩu được sử dụng để xác thực client với google

 * **Email**: địa chỉ email

 * **Provider: Keycloak** \- Người dùng nhập các thông tin sau:

 * **Auth Provider name**: Tên provider

 * **Realm**: là một không gian quản lý mà trong đó, tất cả người dùng, nhóm, vai trò, khách hàng (clients) và các đối tượng khác đều được quản lý và bảo mật một cách độc lập

 * **Auth server url**: là URL cơ bản của máy chủ Keycloak, được sử dụng bởi các clients để thực hiện xác thực

 * **Client ID**: một đoạn mã ID được sử dụng để xác thực client với Keycloak

 * **Client Secret**: mật khẩu được sử dụng để xác thực client với Keycloak

 * **Username**: Tên username trong keycloak

 * **Email**: địa chỉ email trong keycloak

 * **Custom Domain:**

 * **Domain (required):** Địa chỉ kết nối dịch vụ Event Gateway sau khi khởi tạo dịch vụ

 * Bao gồm a-z, A-Z, 0-9, dấu gạch ngang (-), dấu chấm (.); tối đa 100 ký tự

 * Tên domain không bắt đầu và kết thúc bằng dấu gạch nối (-) hoặc dấu chấm (.)

 * Top level tối thiểu 2, tối đa 6 ký tự

 * Ví dụ: domain-name.com

 * **CA bundle ( required):** Chuỗi chứng chỉ CA ở dịnh dạng PEM

 * Bắt đầu bằng -----BEGIN CERTIFICATE----- và kết thúc đúng chuẩn PEM
 * **Private key (required):** Private key ở định dạng PEM

 * Bắt đầu bằng -----BEGIN PRIVATE KEY----- và kết thúc đúng chuẩn PEM

![Alt text](images/tao-open-metadata-service/img-005.png)

 * **Custom Domain**

 * **Mục đích:** Cho phép cấu hình domain tùy chỉnh để truy cập services.

 * **Với Workspace Public:** Dùng để gán domain và certificate mà không cần bật/tắt TLS (HTTPS luôn khả dụng).

 * **Với Workspace Private:** Ngoài domain và certificate, người dùng có thể tùy chọn bật hoặc tắt TLS/SSL để quyết định dùng HTTPS hay HTTP.

 * **Workspace là Public**

 * **Custom domain**: Tích để bật domain tùy chỉnh.

 * **Domain**: Nhập tên miền (VD: abc.local, jupyter.example.com).

 * **Certificate name**: Chọn từ danh sách certificate đã import trong **Certificate Manager**.

 * **Nút**:

 * **Manage certificate**: Mở màn hình quản lý certificate.

 * **Validate**: Kiểm tra chứng chỉ hợp lệ với domain.

 * 
:::note
Ở Workspace Public **không hiển thị** tùy chọn **TLS/SSL certificate** — hệ thống mặc định hỗ trợ HTTPS.
:::

![Hình ảnh](images/tao-open-metadata-service/img-006.jpg)

 * **Workspace là Private**

 * **Custom domain**: Tích để bật domain tùy chỉnh.

 * **Domain**: Nhập tên miền.

 * **TLS/SSL certificate**: Tích để bật HTTPS cho services.

 * **Certificate name**: Chọn từ danh sách certificate.

 * **Nút**:

 * **Manage certificate**: Mở quản lý certificate.

 * **Validate**: Kiểm tra chứng chỉ.

 * 
:::note
Nếu bỏ tích **TLS/SSL certificate**, dịch vụ sẽ chạy HTTP và không yêu cầu certificate.
:::

![Hình ảnh](images/tao-open-metadata-service/img-007.jpg)

**Bước 6:** Nhấn **Next** để chuyển sang màn **Review & create**

![Alt text](images/tao-open-metadata-service/img-008.png)

**Bước 7.** Kiểm tra thông tin nhập sau đó nhấn **Create** để hoàn thành khởi tạo **Open Metadata**

**Orchestration** hoàn thành khởi tạo khi **Worker Status** là **Succeeded** và **Status** của **Open Metadata** là **Healthy** (~10 phút)

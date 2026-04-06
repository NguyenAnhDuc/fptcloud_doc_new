---
id: "tao-query-engine"
title: "Tạo Query engine"
sidebar_label: "Tạo Query engine"
description: "Tạo Query engine"
---

# Tạo Query engine

**FPT Query engine** sử dụng **Trino** là một công cụ truy vấn SQL phân tán, mã nguồn mở, được thiết kế để xử lý các truy vấn nhanh và hiệu quả trên các tập dữ liệu lớn. Trino cho phép bạn truy vấn dữ liệu từ nhiều nguồn khác nhau, bao gồm cơ sở dữ liệu quan hệ, kho dữ liệu, và các hệ thống lưu trữ dữ liệu phi quan hệ, mà không cần phải di chuyển hoặc sao chép dữ liệu.

Để tạo **Query engine**, người dùng thực hiện các bước sau:

**Bước 1:** Tại thanh menu chọn **Data Platform** > chọn **Workspace Management** > chọn **Workspace name**

**Bước 2:** Tại phần **My services** nhấn **Create** > hiển thị popup chọn **New service** chọn **Trino** > **Create**

![Hình ảnh](images/tao-query-engine/img-001.png)

**Bước 3:** Trong form tạo **Query engine**, nhập thông tin màn **Basic Information**:

 * **Name** (required): Tên dịch vụ

Chú ý: Tên dịch vụ phải từ 1 đến 30 kí tự. Có thể chứa các kí tự chữ cái thường a-z hoặc chữ cái in hoa A-Z hoặc các kí tự số 0-9

 * **Description** (optional): Mô tả

 * **Version** (required): chọn version

![Hình ảnh](images/tao-query-engine/img-002.png)

**Bước 4:** Nhấn **Next** để chuyển sang màn nhập thông tin **Node configuration**

Nhập thông tin sau:

 * **Storage policy** (required): chọn Storage cho Query engine

 * **Type** (required): chọn type cấu hình cho Query engine

 * **Number of coordinator**: Mặc định là 1

 * **Number of workers** (required): nhập số worker

**Chú ý:** số **Worker** phải lớn hơn hoặc bằng **1** và nhỏ hơn hoặc bằng **10**

Nếu người dùng muốn tự động tăng cấu hình Worker của Airflow, tích chọn **Enable worker auto scaling** > nhập số node tối đa cho Worker

![Hình ảnh](images/tao-query-engine/img-003.png)

**Bước 5:** Nhấn **Next** để chuyển sang màn **Additional Properties**

Nhập các thông tin sau:

 * **Max memory (GB)**: nhập số Max memory, giá trị mặc định là 20

Đây là lượng bộ nhớ tối đa mà một truy vấn có thể sử dụng trên toàn bộ cụm. Bộ nhớ người dùng được phân bổ trong quá trình thực thi cho các tác vụ trực tiếp liên quan đến, hoặc có thể kiểm soát bởi, truy vấn của người dùng. Ví dụ, bộ nhớ được sử dụng bởi các bảng băm (hash tables) được tạo trong quá trình thực thi, bộ nhớ được sử dụng trong quá trình sắp xếp, v.v. Khi lượng bộ nhớ người dùng được phân bổ cho một truy vấn trên tất cả các worker đạt đến giới hạn này, truy vấn đó sẽ bị dừng.
**Chú ý:** số **Max memory** phải lớn hơn hoặc bằng 1

 * **Retry policy**: chọn Retry policy, giá trị mặc định là **NONE**

 * **NONE**: Tắt chế độ thực thi chịu lỗi.

 * **TASK**: Thử lại các tác vụ (task) riêng lẻ trong một truy vấn khi xảy ra lỗi. Yêu cầu cấu hình một **exchange manager**.

 * **QUERY**: Thử lại toàn bộ truy vấn khi xảy ra lỗi.

![Hình ảnh](images/tao-query-engine/img-004.png)

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

![Hình ảnh](images/tao-query-engine/img-005.jpg)

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

![Hình ảnh](images/tao-query-engine/img-006.jpg)

**Bước 6:** Nhấn **Next** để chuyển sang màn **Auth**

**Authentication Type:**

 * **Authentication Type = Basic**

 * Query engine được khởi tạo xác thực bằng **Basic authen**

![Alt text](images/tao-query-engine/img-007.png)

 * **Authentication Type: OAuth2**

 * **Provider: FPT ID**. Người dùng nhập thông tin sau:

 * Email (required): địa chỉ email FPT dùng làm tài khoản quản trị.

![Alt text](images/tao-query-engine/img-008.png)

 * **Provider: Google**. Người dùng nhập thông tin sau:

 * **Client ID (required)**: mã định danh ứng dụng (lấy ở Google Cloud → OAuth Credentials).

 * **Client Secret (required)**: chuỗi bí mật đi kèm Client ID, dùng để xác thực ứng dụng.

 * **Email (required)**: địa chỉ Gmail hoặc Workspace của quản trị viên khởi tạo engine.

Trước khi test kết nối, hãy bảo đảm Google Cloud đã thêm redirect URI của Query Engine vào danh sách cho phép.

![Alt text](images/tao-query-engine/img-009.png)

 * **Provider: Keycloak,**. Người dùng nhập các thông tin sau:

 * Auth Provider Name (optional): Tên provider

 * Realm (required): là một không gian quản lý mà trong đó, tất cả người dùng, nhóm, vai trò, khách hàng (clients) và các đối tượng khác đều được quản lý và bảo mật một cách độc lập

 * Auth Server URL (required): là URL cơ bản của máy chủ Keycloak, được sử dụng bởi các clients để thực hiện xác thực, **phải kết thúc bằng dấu “/”**.

 * Client ID (required): một đoạn mã ID được sử dụng để xác thực client với Keycloak

 * Client Secret (required): mật khẩu được sử dụng để xác thực client với Keycloak

 * Email (required): địa chỉ email trong keycloak

![Alt text](images/tao-query-engine/img-010.png)

 * **Authentication Type: LDAP**. Người dùng nhập các thông tin sau:

 * **URL (required)**: đường dẫn LDAP, ví dụ ldap://ldap.example.com:389 hoặc ldaps://ldap.example.com:636.

 * **Base DN (required)**: gốc truy vấn, chẳng hạn dc=example,dc=com.

 * **Username (required)**: bind DN có quyền search (ví dụ cn=admin,dc=example,dc=com).

 * **Password (required)**: mật khẩu bind DN.

 * **User Bind Pattern (optional)**: mẫu DN tìm người dùng, ví dụ uid={0},ou=People,dc=example,dc=com.

 * **Group Auth Pattern (required)**: mẫu DN truy vấn nhóm, ví dụ cn={0},ou=Groups,dc=example,dc=com.

![Alt text](images/tao-query-engine/img-011.png)

 * **Authentication Type: JWT**

Người dùng nhập các thông tin sau:

 * **Issuer (required)**: giá trị claim iss mà Query Engine phải khớp.

 * **Audience (optional)**: giá trị claim aud (nếu hệ thống JWT sử dụng trường này).

 * **Principal Field (required)**: tên claim chứa username (thường là sub hoặc email).

 * **Public Key (required)**: khóa công khai định dạng PEM (dán trực tiếp hoặc tải file) để Query Engine kiểm tra chữ ký JWT.

 * Khuyến nghị dùng khóa RSA hoặc EC 2048 bit trở lên; tệp PEM phải bắt đầu bằng -----BEGIN PUBLIC KEY-----.

![Alt text](images/tao-query-engine/img-012.png)

**Authorization: Integrate Ranger**

 * **Enable Ranger** = False (Query Engine khởi tạo theo chế độ tiêu chuẩn, **không** áp dụng bất kỳ policy nào từ Ranger.)

 * **Enable Ranger** = True

 * Tick **Enable Ranger** → UI tự động hiển thị nút **Test connection**.

 * Ấn **Test connection** để kiểm tra kết nối tới **Ranger** cho tích hợp. **Query engine** chỉ có thể khởi tạo với **Authentication type** là **Integrate Ranger** khi Test Connection thành công.

Để sự dụng Ranger cho kiểm soát xác thực, phân quyền cho Trino, người dùng cần khởi tạo dịch vụ **Data Governance** (**Ranger**) trước khi khởi tạo dịch vụ **Query engine**

Khởi tạo **Ranger** [tại đây](<https://fptcloud.com/documents/cloud-data-platform/?doc=tao-ranger>)

![Alt text](images/tao-query-engine/img-013.png)

**Bước 7:** Nhấn **Next** để chuyển sang màn **Review & Create**

**Bước 8.** Kiểm tra thông tin nhập sau đó nhấn **Create** để hoàn thành.

**Query Engine** hoàn thành khởi tạo khi **Worker Status** là **Succeeded** và **Status** của **Trino** là **Healthy** (~10 phút)

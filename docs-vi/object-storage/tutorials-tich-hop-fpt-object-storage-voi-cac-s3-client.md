---
id: "tutorials-tich-hop-fpt-object-storage-voi-cac-s3-client"
title: "Tích hợp FPT Object Storage với các S3-Client"
description: "FPT Object Storage hỗ trợ tích hợp vào các S3-SDK hoặc S3-Client tuân theo chuẩn AWS S3. Điều này cho phép bạn sử dụng c"
sidebar_label: "Tích hợp FPT Object Storage với các S3-Client"
sidebar_position: 12
---

# Tutorials Tich Hop Fpt Object Storage Voi Cac S3 Client

FPT Object Storage hỗ trợ tích hợp vào các S3-SDK hoặc S3-Client tuân theo chuẩn AWS S3. Điều này cho phép bạn sử dụng các công cụ và thư viện phổ biến để tương tác với dữ liệu trên bucket của mình.
## S3CMD (Unix/Linux)
**S3CMD:** Đây là một công cụ dòng lệnh cho Linux/Unix cho phép bạn quản lý dữ liệu trên FPT Object Storage hoặc AWS S3. Bạn có thể tải lên, tải xuống và quản lý các tệp và thư mục.
### A. Cài đặt:
**CentOS/RHEL:**

```
Copy$ sudo yum install s3cmd -y
```

**Ubuntu/Debian:**

```
Copy$ sudo apt-get install s3cmd
```

**MacOS:**

```
Copy$ brew install s3cmd
```

Các hệ điều hành khác có thể tham khảo tại trang chủ của S3CMD: <https://s3tools.org/download>
### B. Cấu hình:
**Bước 1:** Mở terminal và chạy lệnh sau để bắt đầu quá trình cấu hình:

```
Copy$ s3cmd --configure
```

**Bước 2:** Lệnh trên sẽ yêu cầu bạn nhập thông tin sau:
  * **Access Key:** Access Key lấy từ FPT Portal.
  * **Secret Key:** Secret Key lấy từ FPT Portal.
  * **Default Region:** Lấy từ FPT Portal.
  * **S3 Endpoint:** Endpoint lấy từ FPT Portal (loại bỏ "https://"). Ví dụ: s3-sgn09.fptcloud.com.
  * **DNS-style bucket+hostname:** Bỏ trống.
  * **Encryption password:** Bỏ trống.
  * **Use HTTPS protocol:**
  * **HTTP Proxy server name:** Bỏ trống.

Sau khi nhập đúng thông tin, S3CMD sẽ tự động lưu các cấu hình này trong tệp cấu hình của nó.
Bạn cũng có thể tạo một tệp cấu hình riêng bằng cách tạo hoặc chỉnh sửa tệp ~/.s3cfg. Dưới đây là một ví dụ về nội dung tệp cấu hình:

```
Copy[default]

access_key = YOUR_ACCESS_KEY

secret_key = YOUR_SECRET_KEY

bucket_location = YOUR_BUCKET_LOCATION

host_base = YOUR_S3_ENDPOINT

host_bucket = YOUR_S3_ENDPOINT

use_https = True

signature_v2 = False
```

**Bước 3:** Kiểm tra kết nối
Sau khi đã cấu hình xong, bạn có thể sử dụng lệnh sau để kiểm tra tình trạng kết nối và hiển thị danh sách các bucket:

```
Copy$ s3cmd ls
```

Nếu bạn thấy danh sách bucket được hiển thị, điều này có nghĩa là bạn đã kết nối thành công với FPT Object Storage.
## Cyberduck (Mac and Windows)
**CyberDuck:** Đây là một ứng dụng mã nguồn mở có GUI dành cho Mac và Windows, cho phép bạn quản lý tệp trực tiếp trên FPT Object Storage hoặc AWS S3. Nó cung cấp môi trường trực quan hơn cho việc tải lên, tải xuống và quản lý tệp.
### A. Cài đặt:
Truy cập trang chủ của Cyberduck để tải phiên bản phù hợp cho thiết bị của bạn: <https://cyberduck.io/download>
Sau khi tải xuống, mở tệp cài đặt và làm theo hướng dẫn của ứng dụng để hoàn tất quá trình cài đặt Cyberduck.
### B. Cấu hình:
**Bước 1:** Mở ứng dụng Cyberduck sau khi cài đặt.
**Bước 2:** Nhấp vào nút **Open Connection** trên giao diện chính hoặc chọn **File** -> **Open Connection** từ menu. [![file](/img/migrated/image-1692698326176-ef4d33a6.png)](/img/migrated/image-1692698326176-ef4d33a6.png) **Bước 3:** Một hộp thoại **Open Connection** sẽ xuất hiện. Trong hộp thoại này, nhập các thông tin xác thực như sau:
  * **Protocol:** Chọn **Amazon S3**.
  * **Server:** Endpoint của FPT Object Storage. Lưu ý bỏ phần https, ví dụ: s3-sgn09.fptcloud.com.
  * **Port:** 443 (port mặc định cho HTTPS).
  * **Access Key ID:** Access Key lấy từ FPT Portal.
  * **Secret Key ID:** Secret Key lấy từ FPT Portal. [![file](/img/migrated/image-1692698347523-bab6ef92.png)](/img/migrated/image-1692698347523-bab6ef92.png) Sau khi đã nhập thông tin xác thực, nhấn **Connect** để kết nối.

Cyberduck sẽ thực hiện kết nối với FPT Object Storage sử dụng các thông tin xác thực bạn đã cung cấp. Sau khi kết nối thành công, bạn sẽ thấy cấu trúc thư mục trên FPT Object Storage xuất hiện trong cửa sổ Cyberduck. [![file](/img/migrated/image-1692698365189-9866d9f6.png)](/img/migrated/image-1692698365189-9866d9f6.png) Từ đây, bạn có thể thực hiện các thao tác tải lên, tải xuống và quản lý tệp trực tiếp thông qua giao diện trực quan của Cyberduck.
## AWS CLI (Linux, Mac and Windows)
### A. Cài đặt:
Tải xuống phiên bản mới nhất từ trang web chính thức của AWS CLI hoặc cài đặt thông qua hướng dẫn sau:
**Linux/Unix:**
Sử dụng cURL để tải xuống tệp zip của AWS CLI:

```
Copy$ curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
```

Giải nén tệp zip:

```
Copy$ unzip awscliv2.zip
```

Chạy tệp cài đặt:

```
Copy$ sudo ./aws/install
```

**Windows:**
Mở Command Prompt hoặc PowerShell của Windows.
Gõ lệnh sau để tải xuống và cài đặt AWS CLI sử dụng tệp MSI:

```
Copymsiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi
```

Tiếp tục theo hướng dẫn trên màn hình để hoàn tất quá trình cài đặt.
### B. Cấu hình:
Sau khi đã cài đặt, mở Command Prompt, PowerShell hoặc Terminal tùy theo hệ điều hành của bạn.
Gõ lệnh sau để bắt đầu quá trình cấu hình:

```
Copyaws configure
```

Lần lượt nhập các thông tin sau:
  * **Access Key ID:** Access Key lấy từ FPT Portal.
  * **Secret Access Key:** Secret Key lấy từ FPT Portal.
  * **Default region name:** Default Region lấy từ FPT Portal.
  * **Default output format:** Nhập "json".
  * **S3 Endpoint:** Endpoint lấy từ FPT Portal. Lưu ý bỏ phần https, ví dụ: s3-sgn09.fptcloud.com.

Sau khi nhập đúng thông tin, AWS CLI sẽ tự động lưu cấu hình này và bạn đã hoàn tất việc cấu hình.
**Kiểm tra cài đặt và cấu hình:**
Để kiểm tra xem AWS CLI đã được cài đặt và cấu hình thành công hay chưa, bạn có thể sử dụng lệnh sau để xem phiên bản AWS CLI:

```
Copyaws --version
```

Nếu lệnh trên trả về phiên bản của AWS CLI, điều này chứng tỏ bạn đã cài đặt và cấu hình thành công.
## WinSCP (Windows)
WinSCP là viết tắt của **Windows Secure Copy Protocol** , là một ứng dụng miễn phí trên windows dùng để truyền tải tập tin an toàn giữa máy tính cá nhân và máy chủ từ xa. Nó chủ yếu được sử dụng để quản lý và truyền tải tập tin qua các giao thức như SFTP (Secure File Transfer Protocol), SCP (Secure Copy Protocol), FTP (File Transfer Protocol), AWS S3,… thông qua giao diện dễ sử dụng.
### A. Cài đặt:
Truy cập trang chính thức của WinSCP để tải xuống và cài đặt phần mềm: <https://winscp.net/eng/download.php>
Sau khi tải xuống, mở tệp cài đặt và làm theo hướng dẫn để hoàn tất quá trình cài đặt WinSCP.
### B. Cấu hình:
**Bước 1.** Mở ứng dụng WinSCP sau khi cài đặt.
**Bước 2.** Nhấp vào **New Session** để bắt đầu thiết lập một phiên kết nối mới. [![file](/img/migrated/image-1692698404134-52896479.png)](/img/migrated/image-1692698404134-52896479.png) **Bước 3.** Trong cửa sổ **Login** , thực hiện các bước sau:
  * **File protocol:** Chọn **"Amazon S3"**
  * **Access Key ID:** Access Key lấy từ FPT Portal.
  * **Secret Access Key:** Secret Key lấy từ FPT Portal.
  * **Host name:** Endpoint lấy từ FPT Portal. Lưu ý bỏ phần https, ví dụ: s3-sgn09.fptcloud.com.
  * **Port number:** 443. [![file](/img/migrated/image-1692698415054-1e029ed5.png)](/img/migrated/image-1692698415054-1e029ed5.png) **Bước 4.** Nhấn **Save** để lưu cấu hình và **Login** để thực hiện kết nối.

Sau khi kết nối thành công, bạn sẽ thấy danh sách bucket trên FPT Object Storage xuất hiện trong cửa sổ WinSCP.
Từ đây, bạn có thể thực hiện các thao tác kéo thả để tải lên, tải xuống và quản lý tệp trực tiếp thông qua giao diện trực quan của WinSCP.
## Tool S3sync (FreeBSD, Linux, OpenBSD, MacOS)
s3sync là một công cụ mã nguồn mở được phát triển để quản lý và đồng bộ hóa tệp tin giữa máy tính cá nhân hoặc máy chủ với các dịch vụ lưu trữ đám mây sử dụng giao thức S3, chẳng hạn như Amazon S3 của Amazon Web Services, FPT Object Storage của FPT Cloud. Công cụ này cho phép bạn tải lên (upload) và tải xuống (download) các tệp tin cũng như thực hiện các thao tác đồng bộ hóa (sync) giữa các buckets trên các dịch vụ lưu trữ đám mây khác nhau.
### A. Cài đặt:
Truy cập link của project để tải xuống và cài đặt phần mềm: <https://github.com/larrabee/s3sync/releases>
Sau khi tải xuống, giải nén và làm theo hướng dẫn để hoàn tất quá trình cài đặt WinSCP.
### B. Cấu hình:
Bạn cần truyền thông tin xác thực vào các câu lệnh thực thi để tool có thể hoạt động.
Tham số cơ bản:
  * **sk** : Access key của nguồn (source).
  * **ss** : Secret key của nguồn (source).
  * **se** : Endpoint của nguồn (source).
  * **tk** : Access key của đích (target).
  * **ts** : Secret key của đích (target).
  * **te** : Endpoint của đích (target).
  * **w** : Số lượng worker được sử dụng để thực hiện việc đồng bộ.
  * **sync-progress** : Hiển thị quá trình thực hiện đồng bộ.
  * **s3-acl** : Quyền của file khi upload (private, public-read, public-read-write). Giá trị mặc định là private.
  * **disable-http2** : Tắt chế độ HTTP2 của client.
  * **ratelimit-objects** : RATELIMIT-OBJECTS (Rate limit objects per second).
  * **ratelimit-bandwidth** : RATELIMIT-BANDWIDTH (Set bandwidth rate limit, byte/s, Allow suffixes: K, M, G).

**Các câu lệnh thường dùng:**
Upload dữ liệu từ local lên FPT Object Storage:

```
Copy./s3sync --tk  --ts  --te "target endpoint" -w 64 fs:// s3://  --sync-progress --s3-acl public-read

```

Download dữ liệu từ FPT Object Storage về local:

```
Copy./s3sync --sk  --ss  --se "source endpoint" -w 64 s3:// fs://   --sync-progress --disable-http2

```

Copy dữ liệu từ bucket này sang bucket khác:

```
Copy./s3sync --sk  --ss  --se "source endpoint" --tk  --ts  --te "target endpoint" -w 64 s3:// s3:// --sync-progress --s3-acl public-read --disable-http2
```

Đồng bộ dữ liệu từ Amazon S3 về FPT Object Storage

```
Copy./s3sync --sk  --ss  --tk  --ts  --te "target endpoint" -w 64 s3:// s3:// --sync-progress --s3-acl public-read --disable-http2
```

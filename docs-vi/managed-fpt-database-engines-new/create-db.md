---
id: "create-db"
title: "Khởi tạo cơ sở dữ liệu"
description: "Chức năng **Khởi tạo cơ sở dữ liệu** cho phép triển khai nhanh các cơ sở dữ liệu khác nhau trên nền tảng FPT Database En"
sidebar_label: "Khởi tạo cơ sở dữ liệu"
sidebar_position: 21
---

# Create Db

Chức năng **Khởi tạo cơ sở dữ liệu** cho phép triển khai nhanh các cơ sở dữ liệu khác nhau trên nền tảng FPT Database Engine mà không cần cấu hình chi tiết hạ tầng vật lý. Việc khởi tạo một cụm cơ sở dữ liệu mới yêu cầu bạn nhập các cấu hình liên quan đến loại engine, network, định danh cluster, và các dịch vụ bổ sung như backup và auto-scaling. Hướng dẫn chi tiết mô tả ngay dưới đây.
### Bước 1: Mở màn hình tạo cơ sở dữ liệu
Truy cập trang danh sách cơ sở dữ liệu tương ứng với loại cơ sở dữ liệu cần tạo (chi tiết xem mục [Xem danh sách cơ sở dữ liệu](../managed-fpt-database-engines-new/index.md), chọn **Create a Database Engine** hoặc **Create** để bắt đầu quá trình khởi tạo một cơ sở dữ liệu mới. Màn hình **Create New Database** sẽ được mở, cho phép bạn cấu hình các thông số cần thiết để định nghĩa và triển khai cơ sở dữ liệu trong môi trường FPT Database Engine. Tiến trình triển khai gồm 3 bước:
  * Step 1 – Database Configuration
  * Step 2 – Additional Service Configuration
  * Step 3 – Review & Create

### Bước 2: Định nghĩa cấu hình cơ sở dữ liệu
[![](/img/migrated/DBaaS_ProvisionDB_step1-1-02908cce.png)](/img/migrated/DBaaS_ProvisionDB_step1-1-02908cce.png)
Màn hình này là bước đầu tiên trong quy trình khởi tạo cơ sở dữ liệu, dùng để cấu hình các tham số nền tảng như engine, mạng, thông tin xác thực và tài nguyên. Tùy theo loại engine được chọn, một số trường thông tin có thể khác nhau.
Mô tả các trường trên màn hình:  
| 1. Section General Information (Thông tin chung)  |  
| --- |  
| Trường  | Mô tả  |  
| Engine Type  | Chọn loại cơ sở dữ liệu. Tùy thuộc vào menu đã chọn, hệ thống sẽ hiển thị các tùy chọn tương ứng: 
* Với Relational Databases sẽ hiển thị các giá trị: “PostgreSQL”, “MySQL”, “MariaDB”, “SQL Server”
* Với NoSQL sẽ hiển thị các giá trị: “MongoDB”, “Cassandra”, “Redis”
* Với Search Engine sẽ hiển thị các giá trị: “OpenSearch”
* Với Data Streaming sẽ hiển thị các giá trị: “Kafka”
* Với Time Series Database sẽ hiển thị các giá trị: “TimescaleDB”
* Với OLAP sẽ hiển thị các giá trị: “Clickhouse”
 |  
| Edition  | Chọn loại edition, bao gồm các giá trị: “Enterprise”, “Standard”, “Web”.   
Trường này chỉ hiển thị đối với Engine Type là "SQL Server".  |  
| Engine Version  | Chọn phiên bản engine được hệ thống hỗ trợ theo Chính sách phiên bản Database Engine.  |  
 |  
| 2. Section Network Information (Thông tin mạng)  |  
| Trường  | Mô tả  |  
| Edge Gateway  | Chọn Edge Gateway để định tuyến lưu lượng mạng giữa database và các hệ thống khác.  |  
| Network  | Chọn Network/Subnet nơi database instance sẽ được triển khai. Network này quyết định phạm vi truy cập và mức độ cô lập.  |  
| 3. Section Engine Information (Thông tin cơ sở dữ liệu)  |  
| Trường  | Mô tả  |  
| Cluster Name  | Tên định danh cho cơ sở dữ liệu, độ dài từ 8–25 ký tự, chỉ bao gồm chữ cái, số và dấu gạch ngang (-). Bắt đầu bằng chữ cái.  |  
| Database Name  | Tên database mặc định được tạo trong cụm, độ dài từ 8–25 ký tự, chỉ bao gồm chữ cái in thường, chữ số và dấu gạch dưới (_). Bắt đầu bằng chữ thường.   
Trường này không được hiển thị đối với Engine Type là Redis hoặc Kafka.  |  
| VHost Name  | Tên VHost mặc định được tạo trong cụm, độ dài từ 8–25 ký tự, chỉ bao gồm chữ cái in thường, chữ số và dấu gạch dưới (_). Bắt đầu bằng chữ thường.  
Chỉ hiển thị đối với Engine Type là RabbitMQ.  |  
| Password/ Confirm Password  | Mật khẩu cho tài khoản quản trị database, độ dài từ 12–20 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt, đồng thời **không được chứa khoảng trắng hoặc các ký tự đặc biệt sau:** / \ " ' < > ? % ; : $ ! [ ] { } ( ) , & +   |  
| 4. Section Node Configuration (Cấu hình node)  |  
| Trường  | Mô tả  |  
| Storage Policy  | Chọn Storage Policy xác định hiệu năng lưu trữ (IOPS). Khuyến nghị chọn IOPS ≥ 4,000 cho môi trường production để đảm bảo hiệu suất và ổn định.  |  
| High Availability  | Bật High Availability (HA) để triển khai cụm database nhiều node với khả năng automatic failover.   
Với Engine Type là Cassandra thì không hiển thị trường này.  ⚠️ **Lưu ý quan trọng khi sử dụng HA cho engine ClickHouse:**
  * Khi tạo một cụm cơ sở dữ liệu **ClickHouse với tính năng HA** được bật, dịch vụ sẽ tự động tạo thêm replica cho mỗi shard. Tuy nhiên, để sử dụng tính năng replication, người dùng cần tạo các bảng hỗ trợ replication. Để biết thêm chi tiết, tham khảo tài liệu chính thức của ClickHouse tại [Replicated* table engines | ClickHouse Doc](https://clickhouse.com/docs/engines/table-engines/mergetree-family/replication)
  * **Replication** (nhân bản dữ liệu) chỉ được hỗ trợ cho các bảng thuộc họ **MergeTree** , bao gồm các loại bảng sau: 
    * ReplicatedMergeTree
    * ReplicatedSummingMergeTree
    * ReplicatedReplacingMergeTree
    * ReplicatedAggregatingMergeTree
    * ReplicatedCollapsingMergeTree
    * ReplicatedVersionedCollapsingMergeTree
    * ReplicatedGraphiteMergeTree
  * **Replication** hoạt động ở **mức độ bảng** không phải toàn bộ server. Điều này có nghĩa là trên cùng một server có thể tồn tại cả bảng có replication và không có replication.
  * Replication không phụ thuộc vào sharding. Mỗi shard có cơ chế replication độc lập với các shard khác. Ví dụ, nếu người dùng tạo bảng **MergeTree** (không phải ReplicatedMergeTree), bảng đó sẽ không được nhân bản và dữ liệu chỉ có trên node được ghi vào.

 |  
| Number Of Nodes  | Chọn số node cần tạo cho cụm database.   
Chỉ hiển thị đối với Engine Type là Cassandra.  |  
| Flavor  | Chọn Flavor để xác định tài nguyên compute cho mỗi node (vCPU, RAM).  |  
| Data Disk Size (GB)  | Dung lượng ổ đĩa dữ liệu cho database, tính theo đơn vị GB với giá trị tối thiểu là 20 GB.  |  
Sau khi nhập đầy đủ thông tin, nhấn **Next Step** để chuyển sang cấu hình các dịch vụ đi kèm.
### Bước 3: Cấu hình dịch vụ add-on
[![](/img/migrated/create-db-step-2-2-d636b5e2.png)](/img/migrated/create-db-step-2-2-d636b5e2.png)
Màn hình này cho phép cấu hình các dịch vụ bổ sung (optional) cho database cluster như backup, tự động mở rộng tài nguyên, và thông báo, nhằm tăng độ sẵn sàng, khả năng mở rộng và khả năng vận hành.
**Khuyến nghị bật dịch vụ Backup và Auto Scaling ngay khi khởi tạo để đảm bảo an toàn dữ liệu, ổn định và liên tục vận hành của hệ thống.**
Mô tả các trường trên màn hình:
  * **Enable Additional Service** : Bật/tắt các dịch vụ add-on cho cụm cơ sở dữ liệu, gồm backup và auto scaling. Khi tắt, cụm cơ sở dữ liệu sẽ được tạo mà không được kích hoạt các dịch vụ này. Bạn có thể bật các dịch vụ add-on sau khi cụm được tạo thành công.
  * **Backup Service Configuration** : Kích hoạt dịch vụ này để hệ thống thực hiện backup toàn bộ cơ sở dữ liệu hàng ngày, giúp bảo vệ dữ liệu trước các sự cố. Các trường thông tin cần nhập bao gồm:

  
| Trường  | Mô tả  |  
| --- | --- |  
| Backup Capacity (GB)  | Dung lượng lưu trữ dành cho backup, tính theo đơn vị GB với giá trị tối thiểu là 10 GB.  |  
| Storage Policy  | Chính sách lưu trữ backup, xác định hiệu năng và độ bền của storage.  |  
| Backup Job Name  | Tên định danh cho backup job, độ dài từ 6–25 ký tự và chỉ được chứa chữ cái, chữ số, khoảng trắng, dấu gạch ngang (-) và dấu gạch dưới (_).  |  
| Backup Retention  | Số lượng bản backup toàn bộ cơ sở dữ liệu được giữ lại. Khi số lượng bản backup vượt quá giới hạn này, các bản backup cũ nhất sẽ được tự động xóa.  |  
| Hour / Minute / Day of Week  | Cấu hình lịch chạy backup định kỳ: 
* Hour: Giờ chạy backup.
* Minute: Phút chạy backup.
* Day of Week: Ngày chạy backup trong tuần. 
**Cảnh báo** : Đối với Engine Type là Kafka, thao tác backup có thể gây gián đoạn tạm thời. Bạn nên lên lịch chạy backup vào khung thời gian ít tải để hạn chế ảnh hưởng đến dịch vụ.   |  
  * **Vertical Scaling Service Configuration:** Kích hoạt dịch vụ này cho phép hệ thống tự động mở rộng tài nguyên compute hoặc storage khi vượt ngưỡng sử dụng. Các trường thông tin cần nhập bao gồm:

  
| 1. Section Compute Scaling (Cấu hình tự động mở rộng compute)  |  
| --- |  
| Trường  | Mô tả  |  
| CPU Threshold (%)  | Ngưỡng sử dụng CPU để kích hoạt auto scaling cho cơ sở dữ liệu.  |  
| RAM Threshold (%)  | Ngưỡng sử dụng RAM để kích hoạt auto scaling cho cơ sở dữ liệu.  |  
| Tracing Interval  | Chu kỳ giám sát mức sử dụng tài nguyên CPU và RAM để đưa ra quyết định scale.  |  
| Current Flavor  | Flavor hiện tại của database node (vCPU / RAM).  |  
| List Flavor Scaling  | Danh sách các flavor được phép scale lên khi auto scaling được kích hoạt. Danh sách sẽ được sắp xếp tăng dần và được scale theo đúng thứ tự từ bé đến lớn.  |  
 |  
| 2. Section Storage Scaling (cấu hình tự động mở rộng storage)  |  
| Trường  | Mô tả  |  
| Current Storage (GB)  | Dung lượng storage hiện tại của database.  |  
| Storage Threshold (%)  | Ngưỡng sử dụng storage để kích hoạt auto scaling.  |  
| Storage Scale (%)  | Tỷ lệ mở rộng dung lượng storage mỗi lần scale.  |  
  * **Maintenance Window** : Khai báo khung thời gian mà hệ thống được phép thực hiện bảo trì:
    * **Day of Week** : Ngày trong tuần thực hiện bảo trì, cho phép lựa chọn từ “Monday” đến “Sunday”.
    * **Start Time** : Thời điểm bắt đầu được phép thực hiện bảo trì trong ngày đã chọn. Thời lượng bảo trì: 1 giờ, tính từ thời điểm Start Time đã cấu hình.
  * **Notification Recipients List** : Nhập danh sách email để nhận thông báo khi có sự kiện backup hoặc scaling được thực hiện. Bạn có thể thêm nhiều email bằng cách nhấn icon "+" để nhập email mới vào danh sách.

Sau khi nhập đầy đủ thông tin, nhấn **Next Step** để chuyển sang bước kiểm tra các thông tin đã nhập và xác nhận việc khởi tạo cơ sở dữ liệu.
### Bước 4: Kiểm tra thông tin & xác nhận khởi tạo
Người dùng cần kiểm tra toàn bộ thông tin đã cấu hình cho cơ sở dữ liệu trước khi xác nhận khởi tạo:
  * Nếu cần chỉnh sửa, nhấn “Back” để quay lại bước trước và cập nhật thông tin.
  * Nếu thông tin đã chính xác, nhấn “Create” để xác nhận khởi tạo cơ sở dữ liệu.

Sau khi xác nhận:
  * Hệ thống sẽ kiểm tra tài nguyên, hiển thị thông báo khởi tạo và bắt đầu quá trình triển khai cơ sở dữ liệu mới dựa trên cấu hình đã nhập.
  * Người dùng sẽ được chuyển về màn hình danh sách, trong đó cơ sở dữ liệu vừa tạo sẽ hiển thị ở trạng thái **“Processing”** ở đầu danh sách.

Quá trình khởi tạo thường kéo dài 5–7 phút. Khi hoàn tất, cơ sở dữ liệu sẽ chuyển sang trạng thái **“Running”** và sẵn sàng để sử dụng. **Lưu ý** : Nếu quá trình khởi tạo thất bại, vui lòng xóa database bị lỗi và thực hiện khởi tạo lại.
Để kết nối tới cơ sở dữ liệu vừa tạo, xem hướng dẫn tại mục [Kết nối cơ sở dữ liệu](../managed-fpt-database-engines-new/index.md).
Để vận hành cơ sở dữ liệu, xem hướng dẫn tại mục “7.2.4. Vận hành cơ sở dữ liệu”.

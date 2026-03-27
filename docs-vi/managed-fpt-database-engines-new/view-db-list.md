---
id: "view-db-list"
title: "Xem danh sách cơ sở dữ liệu"
description: "Chức năng **Xem danh sách cơ sở dữ liệu** cung cấp cái nhìn tổng quan về toàn bộ các cụm cơ sở dữ liệu đang vận hành tro"
sidebar_label: "Xem danh sách cơ sở dữ liệu"
sidebar_position: 20
---

# View Db List

Chức năng **Xem danh sách cơ sở dữ liệu** cung cấp cái nhìn tổng quan về toàn bộ các cụm cơ sở dữ liệu đang vận hành trong môi trường FPT Database Engine, cho phép người dùng theo dõi nhanh trạng thái (status), cấu hình (configuration) và thực hiện các tác vụ quản trị (management operations) trên từng cơ sở dữ liệu.
Để truy cập danh sách các cụm cơ sở dữ liệu, người dùng đăng nhập vào FPT Cloud Portal. Từ menu chính, chọn **Database Platform > All Databases** hoặc lựa chọn menu tương ứng với nhóm cơ sở dữ liệu theo nhu cầu sử dụng, bao gồm:
  * **Relational Databases** : PostgreSQL, MySQL, MariaDB, Microsoft SQL Server.
  * **NoSQL** : MongoDB, Cassandra, Redis.
  * **Search Engine** : OpenSearch.
  * **Data Streaming** : Kafka.
  * **Time Series Database** : TimescaleDB.
  * **OLAP** : Clickhouse.

Màn hình **Database List** sẽ hiển thị danh sách các cơ sở dữ liệu hiện có trong môi trường, kèm theo trạng thái hoạt động và các thông tin chính phục vụ cho việc giám sát và quản lý:
  * **Trường hợp chưa có cơ sở dữ liệu nào** : Danh sách sẽ trống và hiển thị tùy chọn tạo cơ sở dữ liệu, cho phép người dùng khởi tạo cụm cơ sở dữ liệu mới.

[![](/img/migrated/dblist_nodb-scaled-af2686bc.png)](/img/migrated/dblist_nodb-scaled-af2686bc.png)
  * **Trường hợp đã có cơ sở dữ liệu** : Danh sách hiển thị toàn bộ các cơ sở dữ liệu đã được triển khai trong VPC, bao gồm thông tin tổng quan và các thao tác quản lý cần thiết (start/stop/restart/delete).

[![](/img/migrated/db-list-warning-a77a8c3c.png)](/img/migrated/db-list-warning-a77a8c3c.png)
Thông tin hiển thị trong danh sách như sau:  
| Tên cột  | Mô tả  |  
| --- | --- |  
| ID  | Hiển thị ID của cơ sở dữ liệu.   
**Cảnh báo khởi động lại cơ sở dữ liệu:**   
Trường hợp cơ sở dữ liệu được điều chỉnh tài nguyên compute (CPU/RAM) nhưng chưa được restart để áp dụng cấu hình mới, hệ thống sẽ hiển thị biểu tượng cảnh báo (warning icon).   
Để các cấu hình mới có hiệu lực đầy đủ và đảm bảo hiệu năng cũng như độ ổn định của cơ sở dữ liệu, người dùng cần thực hiện thao tác restart tại thời điểm có lưu lượng truy cập thấp.   
Sau khi việc restart hoàn tất và cấu hình mới được áp dụng cảnh báo sẽ không hiển thị nữa.   |  
| Name  | Hiển thị tên của cơ sở dữ liệu.  |  
| Type  | Hiển thị loại engine của cơ sở dữ liệu.  |  
| Tag  |  Hiển thị danh sách tag đã được gắn cho cơ sở dữ liệu.   |  
| Version  | Hiển thị phiên bản của cơ sở dữ liệu: 
* Phiên bản Beta: Gắn nhãn “Beta”
* Phiên bản General Availability (GA): Hiển thị bình thường, không có nhãn đi kèm.
* Phiên bản Deprecated: Gắn nhãn “Dep.”
* Phiên bản End of Support: Gắn nhãn “EoS”
 |  
| Node  | Hiển thị số node trong cụm cơ sở dữ liệu.  |  
| Status  | Hiển thị trạng thái hiện tại của cơ sở dữ liệu (Running, Stopped, Warning, ...).  |  
| Backup  | Hiển thị trạng thái kích hoạt dịch vụ Backup.  |  
| Vertical scaling  | Hiển thị trạng thái kích hoạt dịch vụ Vertical Scaling  |  
| Monitoring  | Hiển thị trạng thái kích hoạt dịch vụ Monitoring.  |  
| Created at  | Hiển thị thời gian khởi tạo cơ sở dữ liệu.  |  
| Action  | Hiển thị các thao tác có thể thực hiện với cơ sở dữ liệu (Start, Stop, Restart, Delete, Resize, …).  |
---
id: "oracle-source-connector"
title: "Oracle Source Connector"
sidebar_label: "Oracle Source Connector"
description: "Oracle Source Connector"
---

# Oracle Source Connector

### Tạo connector source Oracle
**Trường hợp tạo connector:** Type là **source**, Database là **Oracle**.

**Pre-condition:** Status CDC service phải là **healthy**.

Oracle Source connector sử dụng **Oracle LogMiner** để đọc redo logs và capture các thay đổi dữ liệu (CDC). Connector hỗ trợ 3 chế độ snapshot:

 * **initial**: Snapshot toàn bộ dữ liệu hiện có, sau đó tiếp tục capture changes.
 * **initial_only**: Chỉ snapshot dữ liệu hiện có, không capture changes.
 * **no_data**: Không snapshot, chỉ capture changes từ thời điểm khởi chạy.

#### Cấu hình Oracle Database (bắt buộc trước khi tạo connector)

**1\. Tạo Oracle user cho CDC:**

```
CREATE USER cdc_user IDENTIFIED BY <PASSWORD>;
```

**2\. Oracle source connector yêu cầu các permissions sau:**

```
GRANT CREATE SESSION TO cdc_user;
 GRANT SELECT ON V$DATABASE TO cdc_user;
 GRANT FLASHBACK ANY TABLE TO cdc_user;
 GRANT SELECT ANY TABLE TO cdc_user;
 GRANT SELECT_CATALOG_ROLE TO cdc_user;
 GRANT EXECUTE_CATALOG_ROLE TO cdc_user;
 GRANT SELECT ANY TRANSACTION TO cdc_user;
 GRANT LOGMINING TO cdc_user;
```

Hoặc gán quyền trên schema cụ thể:

```
GRANT SELECT ON <SCHEMA_NAME>.<TABLE_NAME> TO cdc_user;
```

**3\. Enable Archive Log Mode:** Kiểm tra Archive Log đã enabled chưa:

```
SELECT LOG_MODE FROM V$DATABASE;
```

Kết quả phải là: **ARCHIVELOG** Nếu kết quả là **NOARCHIVELOG**, enable Archive Log Mode:

```
SHUTDOWN IMMEDIATE;
 STARTUP MOUNT;
 ALTER DATABASE ARCHIVELOG;
 ALTER DATABASE OPEN;
```

Verify lại:

```
SELECT LOG_MODE FROM V$DATABASE;
```

**4\. Enable Supplemental Logging:**

Oracle CDC yêu cầu Supplemental Logging để capture đầy đủ thông tin thay đổi.

Enable Supplemental Logging ở database level:

```
ALTER DATABASE ADD SUPPLEMENTAL LOG DATA;
```

Enable Supplemental Logging cho từng table cần CDC:

```
ALTER TABLE <SCHEMA_NAME>.<TABLE_NAME> ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;
```

Kiểm tra Supplemental Logging:

```
SELECT SUPPLEMENTAL_LOG_DATA_MIN, SUPPLEMENTAL_LOG_DATA_PK,
 SUPPLEMENTAL_LOG_DATA_UI, SUPPLEMENTAL_LOG_DATA_FK,
 SUPPLEMENTAL_LOG_DATA_ALL
 FROM V$DATABASE;
```

**5\. Kiểm tra quyền LogMiner:**

Verify user có quyền truy cập LogMiner:

```
SELECT * FROM DBA_ROLE_PRIVS WHERE GRANTEE = 'CDC_USER';
```

Test query LogMiner:

```
SELECT * FROM V$LOGMNR_CONTENTS WHERE ROWNUM <= 10;
```

_**Để tạo connector, người dùng thực hiện các bước sau:**_ **Bước 1:** Tại thanh menu chọn **Data Platform** > chọn **Workspace Management** > chọn Workspace name

**Bước 2.** Tại phần **My services** chọn **CDC service**

**Bước 3:** Tại màn detail **CDC service** > Chọn tab **Connectors** > nhấn **Create a connector**

**Bước 4:** Nhập các thông tin màn **Connector Information:**

![Alt text](images/oracle-source-connector/img-001.jpg)

 * **Name** (required): tên connector __
__
__

_Chú ý:_ Tên connector có thể chứa các ký tự a-z, A-Z, 0-9, dấu gạch ngang "-". Đặc biệt không được dùng ký tự đặc biệt và khoảng trắng.

 * **Type** (required): chọn source

 * **Database** (required): chọn Oracle

**Bước 5:** Nhấn **Next** để chuyển qua màn **Properties**

Nhập thông tin màn Properties:

**Trường hợp chọn Manual configuration**

![Alt text](images/oracle-source-connector/img-002.jpg)

Điền các thông tin:

 * **Host name** (required): Hostname hoặc IP của Oracle Database

 * **Port** (required): Oracle server port, mặc định là: '1521'

 * **Container database name**: Container database name (CDB) - áp dụng cho Oracle 12c trở lên với kiến trúc Multitenant

 * **Pluggable database name** (required): Pluggable database name (PDB) - database thực tế chứa dữ liệu

 * **Username** (required): Username có quyền LogMiner (vd: cdc_user)

 * **Password** (required): Password của user

 * **Archive log** (required): Chọn chế độ Archive Log (phải là ARCHIVELOG)

 * **Topic prefix** (required): Tiền tố cho Kafka topics. Format topic:

```
<topic_prefix>.<schema>.<table>
```

**Lưu ý:** Sau khi điền đầy đủ thông tin, bắt buộc phải click **Test connection** để kiểm tra kết nối. Chỉ khi test connection thành công mới có thể chuyển sang bước tiếp theo.

**Bước 6:** Nhấn **Next** để chuyển qua màn **Additional properties**

Nhập thông tin màn Additional properties:

 * **Mode** (required): Chọn chế độ snapshot

 * **initial**: Connector sẽ snapshot toàn bộ dữ liệu đã tồn tại trong các bảng, sau đó tiếp tục capture data changes thông qua LogMiner

 * **initial_only**: Connector sẽ chỉ snapshot toàn bộ dữ liệu đã tồn tại trong các bảng, sau đó dừng (không lắng nghe changes)

 * **no_data**: Connector sẽ không snapshot dữ liệu đã tồn tại mà chỉ capture các changes từ thời điểm khởi chạy

 * **Schema**: Chọn schema của database (có thể chọn nhiều)

 * **Table**: Chọn các bảng cần CDC (có thể chọn nhiều)

 * **Column**: Chọn các cột cần CDC (mặc định là tất cả: .*)

Sử dụng nút + để thêm bảng vào danh sách CDC. Sử dụng icon delete để xóa bảng khỏi danh sách **Bước 7:** Nhấn **Next** để chuyển qua màn **Review**

![Alt text](images/oracle-source-connector/img-003.jpg)

Màn hình Review hiển thị toàn bộ cấu hình đã nhập ở các bước trước. Kiểm tra lại thông tin:

 * **Basic Information**: Name, Type, Database

 * **Database Information**: Host name, Port, Container database name, Pluggable database name, Username, Password

 * **Archive log**: Archive log mode

 * **Kafka topic**: Topic prefix

 * **Snapshot**: Mode

 * **Include**: Schema, Table, Column

Nếu cần chỉnh sửa, click nút **Back** để quay lại bước trước.

 sink connector")

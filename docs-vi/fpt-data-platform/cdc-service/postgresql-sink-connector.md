---
id: "postgresql-sink-connector"
title: "PostgreSQL Sink Connector"
sidebar_label: "PostgreSQL Sink Connector"
description: "PostgreSQL Sink Connector"
---

# PostgreSQL Sink Connector

*_Tạo connector, Type là sink, Database là PostgreSQL_

**Pre-condition:** Status CDC service healthy

## Cấu hình PostgreSQL - Cấp quyền trên schema

```
GRANT USAGE ON SCHEMA public TO username;
 GRANT CREATE ON SCHEMA public TO username;
```

## Các bước tạo connector:

**Bước 1:** Tại thanh menu chọn **Data Platform** > chọn **Workspace Management** > chọn Workspace name

**Bước 2:** Tại phần **My services** chọn **CDC service**

**Bước 3:** Tại màn detail **CDC service** > Chọn tab **Connectors** > nhấn **Create a connector** ![image-1](images/postgresql-sink-connector/img-001.png)

**Bước 4:** Nhập các thông tin màn **Connector Information**:

 * **Name** (required): tên connector

Chú ý: Tên connector có thể chứa các kí tự chữ cái thường a-z hoặc các kí tự số 0-9. Đặc biệt không dùng dấu cách có thể thay dấu cách bằng dấu “-”.

 * **Type** (required): chọn sink

 * **Database** (required): chọn PostgreSQL ![image-2](images/postgresql-sink-connector/img-002.png)

**Bước 5.** Nhấn **Next** để chuyển qua màn **Properties**

Nhập thông tin màn Properties

 * Trường hợp chọn **Manual configuration** \- Điền các thông tin:

 * **Database name** (required): chọn database

 * **Host Name** (required): Hostname hoặc IP của PostgreSQL

 * **Port (** required): PostgreSQL server port, mặc định là: `5432`.

 * **Database name** (required): Database đích mà Connector sẽ sink dữ liệu vào

 * **Username** (required): Username sử dụng bởi Connector

 * **Password** (required): Password sử dụng bởi Connector

 * Nhấn vào dấu `(+)` để lấy danh sách các topics Connector sẽ consume và sink dữ liệu vào database đích, và được ngăn cách bởi dấu ","

Chú ý: Giới hạn chỉ lấy tối đa 100 topic ![image-3](images/postgresql-sink-connector/img-003.png)

 * Trường hợp chọn **From Database Engine** \- Điền các thông tin:

 * **Host Name** (required): Hostname hoặc IP của PostgreSQL

 * **Port** (required): PostgreSQL server port, mặc định là: `5432`.

 * **Database name** (required): Database đích mà Connector sẽ sink dữ liệu vào

 * **Username** (required): Username sử dụng bởi Connector

 * **Password** (required): Password sử dụng bởi Connector

 * Nhấn vào dấu (+) để lấy danh sách các topics Connector sẽ consume và sink dữ liệu vào database đích, và được ngăn cách bởi dấu ","

Chú ý: Giới hạn chỉ lấy tối đa 100 topic ![image-4](images/postgresql-sink-connector/img-004.png)

 * Nhấn **Test connection** để kiểm tra kết nối từ Workspace tới Database đã nhập

 * **Converter**

 * **Converter key**: chọn giá trị key cho converter

 * **Converter key schema enable**: chọn giá trị có/không sử dụng schema trong Converter key

 * **Converter value**: chọn giá trị value cho converter

 * **Converter value schema enable**: chọn giá trị có/không sử dụng schema trong Converter value

**Bước 6:** Nhấn **Next** để chuyển qua màn **Additional Properties**

Nhập các thông tin sau:

 * **Timezone:** chọn Timezone phù hợp của dữ liệu từ database nguồn

 * **Task max:** số task xử lý cùng nhau

 * **Type:** chọn loại Database source

 * **Name**: tên Schema

 * **Create new table**: mặc định là ON

 * **Enable filter errors**: Mặc định là OFF

Chú ý: tích chọn Enable filter error để lọc những table name đang lỗi

 * **Mode** (required): Hành vi của Connector khi không thể xử lý được message

 * **None**: Connector sẽ bỏ qua các messages không thể sink vào CSDL

 * **All**: Các message lỗi sẽ được gửi vào topic được nhập ![image-5](images/postgresql-sink-connector/img-005.png)

**Bước 7.** Nhấn **Next** để chuyển qua màn **Review** ![image-6](images/postgresql-sink-connector/img-006.png)

**Bước 8:** Kiểm tra thông tin và nhấn nút **Create** để hoàn thành việc tạo connector.

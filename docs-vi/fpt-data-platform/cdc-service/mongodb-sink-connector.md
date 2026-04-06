---
id: "mongodb-sink-connector"
title: "MongoDB Sink Connector"
sidebar_label: "MongoDB Sink Connector"
description: "MongoDB Sink Connector"
---

# MongoDB Sink Connector

**Trường hợp tạo connector, Type là sink, Database là MongoDB**

**Pre-condition:** Status CDC service healthy

## Các bước tạo connector:

**Bước 1:** Tại thanh menu chọn **Data Platform** > chọn **Workspace Management** > chọn **Workspace name**

**Bước 2:** Tại phần **My services** chọn **CDC service**

**Bước 3:** Tại màn detail **CDC service** > Chọn tab **Connectors** > nhấn **Create a connector** ![image-1](images/mongodb-sink-connector/img-001.png)

**Bước 4:** Nhập các thông tin màn **Connector Information**:

 * **Name (required):** tên connector

Chú ý: Tên connector có thể chứa các kí tự chữ cái thường a-z hoặc các kí tự số 0-9. Không. Đặc biệt không dùng dấu cách có thể thay dấu cách bằng dấu “-”.

 * Type****(required):** chọn sink

 * Database (required):** chọn MongoDB ![image-2](images/mongodb-sink-connector/img-002.png)

**Bước 5:** Nhấn **Next** để chuyển qua màn **Properties**

**Bước 6:** Có hai lựa chọn: From FPT Database Engine, Manual configuration

 * Trường hợp chọn **Manual configuration** \- Điền các thông tin:

 * **Connection string** (required): MongoDB connection uri

 * **Database** (required): tên database

Chú ý: tên Database có thể là các chữ cái thường và các chữ cái hoa hoặc các chữ số từ 1-9. Đặc biệt không dùng dấu cách, có thể thay dấu cách bằng dấu ‘-’ và ‘_’

 * **Topics** (required): Danh sách các topics ![image-3](images/mongodb-sink-connector/img-003.png)
 * Trường hợp chọn **From FPT Database Engine** \- Điền các thông tin:

 * **Connection string** (required): MongoDB connection uri

 * **Database** (required): tên database

Chú ý: tên Database có thể là các chữ cái thường và các chữ cái hoa hoặc các chữ số từ 1-9. Đặc biệt không dùng dấu cách, có thể thay dấu cách bằng dấu ‘-’ và ‘_’

 * **Topics** (required): Danh sách các topics
 * **Converter**

 * **Converter key**: chọn giá trị key cho converter

 * **Converter key schema enable**: chọn giá trị có/không sử dụng schema trong Converter key

 * **Converter value**: chọn giá trị value cho converter

 * **Converter value schema enable**: chọn giá trị có/không sử dụng schema trong Converter value

**Bước 7:** Nhấn **Next** ở góc phải màn hình để chuyển qua màn **Additional Properties**

**Bước 8:** Điền các thông tin:

 * **Tasks max(required):** Số lượng task mà connector có thể chạy đồng thời, nếu topics có số lượng partition lớn hơn 1 ![image-4](images/mongodb-sink-connector/img-004.png)

**Bước 9.** Nhấn **Next** để chuyển qua màn **Review** ![image-5](images/mongodb-sink-connector/img-005.png)

**Bước 10:** Kiểm tra thông tin và nhấn nút **Create** để hoàn thành việc tạo connector. ![image-6](images/mongodb-sink-connector/img-006.png)

 sink connector")

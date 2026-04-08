---
id: "s3-sink-connector"
title: "S3 Sink Connector"
sidebar_label: "S3 Sink Connector"
description: "S3 Sink Connector"
sidebar_position: 19
---

# S3 Sink Connector

*_Tạo connector, Type là sink, Database là S3_

**Pre-condition:** Status CDC service Healthy

## Các bước tạo connector:

**Bước 1:** Tại thanh menu chọn **Data Platform** > chọn **Workspace Management** > chọn **Workspace name**

**Bước 2:** Tại phần **My services** chọn **CDC service**

**Bước 3:** Tại màn detail **CDC service** > Chọn tab **Connectors** > nhấn **Create a connector**

**Bước 4:** Nhập các thông tin màn **Connector Information**:

 * **Name** (required): tên connector

Chú ý: Tên connector có thể chứa các kí tự chữ cái thường a-z hoặc các kí tự số 0-9. Đặc biệt không dùng dấu cách có thể thay dấu cách bằng dấu “-”.

 * **Type** (required): chọn **sink**

 * **Database** (required): chọn **S3** ![image-1](images/s3-sink-connector/img-001.png)

**Bước 5:** Nhấn **Next** ở góc phải màn hình để chuyển qua màn **Properties**

 * **S3 Storage**

Nhập thông tin **S3 storage**

 * **Endpoint:** Địa chỉ truy cập S3 storage

 * **Access key:** khóa truy cập

 * **Secret:** mật khẩu truy cập

 * **Bucket name:** tên bucket

 * **Path prefix:** đường dẫn tới folder trong storage

Nhấn **Test Connection** để kiểm tra kết nối từ Workspace tới S3 đã nhập

 * **Converter**

 * **Converter key**: chọn giá trị key cho converter

 * **Converter key schema enable**: chọn giá trị có/không sử dụng schema trong Converter key

 * **Converter value**: chọn giá trị value cho converter

 * **Converter value schema enable**: chọn giá trị có/không sử dụng schema trong Converter value

 * **Kafka topic**

 * **Nhấn vào dấu ‘+’ để lấy thông tin topic

 * **Chú ý: giới hạn chỉ lấy tối đa 100 topic ![image-2](images/s3-sink-connector/img-002.png)

**Bước 6.** Nhấn **Next** chuyển qua màn **Additional Properties**

 * **Number of tasks**: số lượng tác vụ tối đa có thể thực hiện song song

 * **Database type**: chọn loại Database source

 * **Timezone**: chọn timezon

 * **File format**: chọn định dạng file

 * **Mode**: chọn mode ![image-3](images/s3-sink-connector/img-003.png)

**Bước 7.** Nhấn **Next** ở góc phải màn hình để chuyển qua màn **Review** ![image-4](images/s3-sink-connector/img-004.png)

**Bước 8.** Kiểm tra thông tin, sau đó nhấn **Create** để hoàn thành việc tạo connector

 Sink Connector")

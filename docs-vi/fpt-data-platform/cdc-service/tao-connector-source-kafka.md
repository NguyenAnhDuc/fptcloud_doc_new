---
id: "tao-connector-source-kafka"
title: "Tạo connector source Kafka"
sidebar_label: "Tạo connector source Kafka"
description: "Tạo connector source Kafka"
---

# Tạo connector source Kafka

Kết nối và ingest dữ liệu từ một hoặc nhiều Kafka topic của một Kafka cluster khác (có thể là nguồn ngoài hoặc hệ thống khác).

Cho phép **đồng bộ**, **chuyển tiếp** dữ liệu giữa các cluster

**Trường hợp tạo connector, Type là source, Database là Kafka**

**Pre-condition:** Status CDC service H**ealthy**

Để tạo connector, người dùng thực hiện các bước sau:

**Bước 1:** Tại thanh menu chọn **Data Platform** > chọn **Workspace Management** > chọn Workspace name

**Bước 2:** Tại phần **My services** chọn **CDC service**

**Bước 3:** Tại màn detail **CDC service** > Chọn tab **Connectors** > nhấn **Create a connector**

![create-connector](images/tao-connector-source-kafka/img-001.png)

**Bước 4:** Nhập các thông tin màn connector information:

 * **Name** (required): tên connector

Chú ý: Tên connector có thể chứa các kí tự chữ cái thường a-z hoặc các kí tự số 0-9. Đặc biệt không dùng dấu cách có thể thay dấu cách bằng dấu “-”.

 * **Type** (required): chọn source

 * **Database** (required): chọn Kafka

![Hình ảnh](images/tao-connector-source-kafka/img-002.png)

**Bước 5:** Nhấn **Next** để chuyển qua màn **Properties**

Có hai lựa chọn: From FPT Database Engine, Manual configuration

 * **Trường hợp chọn Manual configuration**

Nhập và chọn các thông tin sau:

 * **Cluster alias name**: Tên alias đại diện cho Kafka cluster, chỉ gồm chữ cái, số, dấu “-”; sử dụng làm tiền tố cho tên topic khi replicate dữ liệu.

 * **Bootstrap server endpoint:** nhập địa chỉ Bootstrap server endpoint

 * **Security protocol**: chọn một trong các giao thức bảo mật sau:

 * **SASL_PLAINTEXT**: là cơ chế xác thực đơn giản thông qua Username và password

 * SASL Mechanism

 * SASL Username

 * SASL Password

 * **SASL_SSL:** cung cấp một lớp bảo mật toàn diện cho việc xác thực và mã hóa dữ liệu thông qua Username và password

 * SASL Mechanism1

 * SASL Username

 * SASL Password

 * **PLAINTEXT:** dữ liệu truyền qua mạng không được mã hóa, không khuyến khích sử dụng

 * **SSL:** là một giao thức bảo mật mạng được sử dụng để bảo vệ dữ liệu khi truyền qua mạng Internet

![Hình ảnh](images/tao-connector-source-kafka/img-003.png)

 * **Trường hợp chọn From FPT Database Engine**

Nhập và chọn các thông tin sau:

 * **Database Name (required):** chọn Database

 * **Cluster alias name**: Tên alias đại diện cho Kafka cluster, chỉ gồm chữ cái, số, dấu “-”; sử dụng làm tiền tố cho tên topic khi replicate dữ liệu.

 * **Bootstrap server endpoint:** nhập địa chỉ Bootstrap server endpoint

 * **Security protocol**: chọn một trong các giao thức bảo mật sau:

 * **SASL_PLAINTEXT**: là cơ chế xác thực đơn giản thông qua Username và password

 * SASL Mechanism

 * SASL Username

 * SASL Password

 * **SASL_SSL**: cung cấp một lớp bảo mật toàn diện cho việc xác thực và mã hóa dữ liệu thông qua Username và password

 * SASL Mechanism

 * SASL Username

 * SASL Password

 * **PLAINTEXT**: dữ liệu truyền qua mạng không được mã hóa, không khuyến khích sử dụng

 * **SSL**: là một giao thức bảo mật mạng được sử dụng để bảo vệ dữ liệu khi truyền qua mạng Internet

![Hình ảnh](images/tao-connector-source-kafka/img-004.png)

 * **Kafka topic**

Nhấn vào dấu ‘+’ để lấy thông tin topic

Chú ý: giới hạn chỉ lấy tối đa 100 topic

Nhấn **Test Connection** để kiểm tra kết nối từ **Workspace** tới **Kafka Cluster**

**Bước 6:** Nhấn **Next** để chuyển qua màn **Additional properties**

Nhập và chọn các thông tin sau:

 * **Task:**

 * Number of tasks: Nhập số lượng task cho connector. _(Số này thường nhỏ hơn hoặc bằng số partition của Kafka topic.)_
 * _**Replication**:_

 * Replication policy: Chọn policy khi replicate topic.

 * _DefaultReplicationPolicy_ : Thêm prefix alias cluster nguồn vào tên topic replicate.

VD: topic-name sẽ thành alias-name.topic-name

 * _IdentityReplicationPolicy_ : Giữ nguyên tên topic.

VD: topic-name sẽ thành topic-name

 * Replication factor: Nhập số bản sao cho mỗi partition Kafka topic.

 * Nhập -1 nếu muốn sử dụng replication factor mặc định của broker.

![Hình ảnh](images/tao-connector-source-kafka/img-005.png)

**Bước 7:** Nhấn **Next** để chuyển qua màn **Review**

![Hình ảnh](images/tao-connector-source-kafka/img-006.png)

**Bước 8:** Kiểm tra thông tin và nhấn nút **Create** để hoàn thành việc tạo connector.

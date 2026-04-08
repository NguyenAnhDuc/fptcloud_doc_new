---
id: "tao-processing-service"
title: "Tạo Processing service"
sidebar_label: "Tạo Processing service"
description: "Tạo Processing service"
sidebar_position: 2
---

# Tạo Processing service

Để tạo **Processing service**, người dùng thực hiện các bước sau:

**Pre-condition**: Tạo thành công Orchestration service

**Bước 1:** Tại thanh menu chọn **Data Platform** > chọn chọn **Workspace Management** > chọn **Workspace name**

**Bước 2:** Tại phần **Workspace Details** nhấn **Create** > hiển thị popup **Services** chọn **Processing service** > **Create Service**

![Hình ảnh](images/tao-processing-service/img-001.png)

**Bước 3:** Trong form tạo **Processing service**, nhập các thông tin màn **Basics Information**

 * **Orchestration service name** (required): Lựa chọn Orchestration service điều phối hoạt động của các Spark Job

 * **Name** (required): tên dịch vụ

Chú ý: Tên dịch vụ có thể chứa các kí tự chữ cái thường a-z hoặc chữ cái in hoa A-Z hoặc các kí tự số 0-9. Đặc biệt không dùng dấu cách có thể thay dấu cách bằng dấu “-” hoặc “_”.

 * **Description** (optional): mô tả dịch vụ

 * **Version** (required): phiên bản dịch vụ

![Hình ảnh](images/tao-processing-service/img-002.png)

**Bước 4.** Nhấn **Next Step** để chuyển qua màn **Nodes Configuration**

 * **Instance type = General**

Nhập các thông tin sau:

 * **Name**: (required): tên compute

Chú ý: Tên compute có thể chứa các kí tự chữ cái thường a-z hoặc chữ cái in hoa A-Z hoặc các kí tự số 0-9. Đặc biệt không dùng dấu cách có thể thay dấu cách bằng dấu “-” hoặc “_”.

 * **Storage policy**: chọn Storage policy

 * **Disk size**: chọn size cấu hình Disk (Disk >=40)

 * **Type**: chọn flavor

 * **Number of nodes**: nhập số node

:::warning
số node phải lớn hơn hoặc bằng 1 và nhỏ hơn hơn hoặc bằng 10
:::

![Hình ảnh](images/tao-processing-service/img-003.png)

 * **Instance type = GPU**

Nhập các thông tin sau:

 * **Name**: (required): tên compute

Chú ý: Tên compute có thể chứa các kí tự chữ cái thường a-z hoặc chữ cái in hoa A-Z hoặc các kí tự số 0-9. Đặc biệt không dùng dấu cách có thể thay dấu cách bằng dấu “-” hoặc “_”.

 * **GPU type** (required nếu chọn GPU)

 * **GPU driver installation type** (required): chọn kiểu cài driver

 * **Select a driver version** (required): chọn phiên bản driver

 * **GPU sharing type** (required): chọn kiểu chia sẻ GPU

 * Nếu chọn None, **không hiển thị** các input: GPU sharing client

 * Nếu chọn khác None, **hiển thị** input GPU sharing client

 * **Policy** (required): chọn policy

 * **Storage policy**: chọn Storage policy

 * **Disk size**: chọn size cấu hình Disk (Disk >=40)

 * **Type**: chọn flavor

 * **Number of nodes**: nhập số node

:::warning
số node phải lớn hơn hoặc bằng 1 và nhỏ hơn hơn hoặc bằng 10
:::

![Hình ảnh](images/tao-processing-service/img-004.png)

**Bước 5.** Nhấn **Next Step** để chuyển qua màn **Advanced**

Nhập các thông tin sau:

**Enable Spark history**

 * Checkbox = true = enable history

 * Checkbox = false = disable history

![Hình ảnh](images/tao-processing-service/img-005.png)

**Bước 6:** Nhấn **Next Step** để chuyển qua màn **Review & Create.**

**Bước 7.** Kiểm tra thông tin nhập, sau đó nhấn **Create** để hoàn thành việc khởi tạo dịch vụ Processing service.

**Processing service** hoàn thành khởi tạo khi **Worker Status** là **Succeeded** và **Status** của **Processing service** là **Healthy** (~15 phút)

---
id: "chinh-sua-ingestion"
title: "Chỉnh sửa thông tin Ingestion"
sidebar_label: "Chỉnh sửa thông tin Ingestion"
description: "Chỉnh sửa thông tin Ingestion"
sidebar_position: 5
---

# Chỉnh sửa thông tin Ingestion

Để sửa thông tin **Ingestion service**, người dùng thực hiện các bước sau:

**Bước 1:** Tại thanh menu chọn **Data Platform** > chọn chọn **Workspace Management** > chọn **Workspace name**:::warning
Người dùng có thể vào trực tiếp dịch vụ Ingestion service bằng cách: Tại thanh menu chọn Data Platform > chọn Ingestion service
:::

**Bước 2:** Trong phần **My Service**, chọn **Ingestion Service**. Tại màn hình **Detail Ingestion Service**, nhấn vào biểu tượng **Edit** ở mục bạn muốn chỉnh sửa thông tin

 * Update **Instance Information**:

 * Hiển thị màn hình sửa thông tin **Instance Information**, cho phép sửa các thông tin sau:

 * **Name** ( Required): Tên dịch vụ

:::warning
Tên dịch vụ phải từ 1 đến 30 kí tự. Có thể chứa các kí tự chữ cái thường a-z hoặc chữ cái in hoa A-Z hoặc các kí tự số 0-9.
:::

 * **Description** (optional): Mô tả dịch vụ

![Hình ảnh](images/chinh-sua-ingestion/img-001.png)

 * Update **Node Configuration**:

 * Hiển thị màn hình sửa thông tin **Node Configuration**, cho phép sửa các thông tin sau:

 * **Type**: Chọn type cấu hình cho dịch vụ

 * **Number of node:** chọn số node phù hợp

:::warning
số node phải lớn hơn hoặc bằng 1 và nhỏ hơn hoặc bằng 10
:::

 * **Storage policy**: chọn storage policy

 * **Disk (GB**): nhập số disk

:::warning
số disk phải lớn hơn hoặc bằng 100 và nhỏ hơn hoặc bằng 1000
:::

![Hình ảnh](images/chinh-sua-ingestion/img-002.png)

**Bước 3:** Nhấn Save để hoàn thành.

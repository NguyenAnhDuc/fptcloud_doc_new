---
id: "huong-dan-su-dung-open-metadata"
title: "Hướng dẫn sử dụng Open Metadata"
sidebar_label: "Hướng dẫn sử dụng Open Metadata"
description: "Hướng dẫn sử dụng Open Metadata"
---

# Hướng dẫn sử dụng Open Metadata

### 1\. Tạo Service

**Bước 1.** Truy cập Open Metadata, menu trái chọn Settings > Services > Databases, chọn Add New Service

![Hình ảnh](images/huong-dan-su-dung-open-metadata/img-001.png)

**Bước 2.** Chọn Service Type **Trino**, ấn **Next**

![Hình ảnh](images/huong-dan-su-dung-open-metadata/img-002.png)

**Bước 3.** Nhập thông tin

 * Service name: tên service

 * Description: mô tả service

Ấn Next

![Hình ảnh](images/huong-dan-su-dung-open-metadata/img-003.png)

**Bước 4.** Nhập thông tin Connection Details

 * **Username**: tên tài khoản

 * Auth Configuration Type: chọn Basic Auth

 * **Host and Port**: nhập thông tin kết nối Trino

 * **Catalog** (optional): nhập chính xác catalog cần lấy thông tin. Nếu bỏ trống, hệ thống thực hiện lấy tất thông tin của tất cả các Catalog có qua Trino

 * **DatabaseSchemas** (optional): nhập chính xác Schema cần lấy thông tin. Nếu bỏ trống, hệ thống thực hiện lấy tất thông tin của tất cả các Schema có qua Trino

![Hình ảnh](images/huong-dan-su-dung-open-metadata/img-004.png)

Ấn **Test connection** để kiểm tra kết nối với Trino

![Hình ảnh](images/huong-dan-su-dung-open-metadata/img-005.png)

**Bước 5.** Ấn **Save** để hoàn thành tạo **Service**

### 2\. Cấu hình Pipeline

Thực hiện cấu hình Pipeline lấy dữ liệu từ Service vào Open Metadata

Bước 1: Tại màn hình danh sách Service vừa khởi tạo, chọn ấn xem chi tiết

![Hình ảnh](images/huong-dan-su-dung-open-metadata/img-006.png)

Bước 2: Tại giao diện chi tiết Service, chọn tab Ingestion, ấn Add Ingestion > Add Metadata Ingestion

![Hình ảnh](images/huong-dan-su-dung-open-metadata/img-007.png)

**Bước 3.** Tại giao diện Add Metadata Ingestion

 * **Name**: Tên pipeline

 * Database Filter Pattern

 * **Includes**: nhập thông tin database sẽ lấy dữ liệu

 * **Exclude** (optional): nhập thông tin database sẽ loại trừ lấy dữ liệu

 * Schema Filter Pattern

 * **Includes**: nhập thông tin schema sẽ lấy dữ liệu

 * **Exclude** (optional): nhập thông tin schema sẽ loại trừ lấy dữ liệu

 * Table Filter Pattern

 * **Includes**: nhập thông tin table sẽ lấy dữ liệu

 * **Exclude** (optional): nhập thông tin table sẽ loại trừ lấy dữ liệu

Ấn **Next**

 * Chọn **Schedule** để thiết lập lịch tần suất Ingest dữ liệu

 * Chọn **On demand** để chạy ingestion thủ công

 * **Number of retries**: số lần thử lại nếu ingest lỗi

Ấn **Add & Deploy**, để hoàn thành thêm Ingestion và triển khai Job Ingestion

### 3\. Chạy pipeline

Bước 1: Tại màn hình danh sách Service vừa khởi tạo, chọn ấn xem chi tiết

![Hình ảnh](images/huong-dan-su-dung-open-metadata/img-008.png)

Bước 2: Tại giao diện chi tiết **Service**, chọn tab **Ingestion**

Bước 3: Tại pipeline vừa khởi tạo, ấn Action **Run**

![Hình ảnh](images/huong-dan-su-dung-open-metadata/img-009.png)

Sau khi ấn **Run**, Job Ingestion được thực thi để lấy dữ liệu **Metadata** về hệ thống

Nếu Job Ingestion được lập lịch, các Pipeline sẽ được tự động thực thi theo thời gian đã thiết lập

### 4\. Exlplore

Sau khi chạy các Ingestion, Explore dữ liệu tại Menu Explore

![Hình ảnh](images/huong-dan-su-dung-open-metadata/img-010.png)

![Hình ảnh](images/huong-dan-su-dung-open-metadata/img-011.png)

### 5\. Tạo Testcase

Kiểm tra chất lượng dữ liệu

**Bước 1.** Từ giao diện **Explore**, chọn bảng cần tạo **Testcase**, ấn **Add Test** (Table để kiểm tra trên bảng, Column để kiểm tra trên cột)

![Hình ảnh](images/huong-dan-su-dung-open-metadata/img-012.png)

**Bước 2.** Tạo Add Column Test

![Hình ảnh](images/huong-dan-su-dung-open-metadata/img-013.png)

Ấn **Submit** để tạo Test

### 6\. Tạo Pipeline Test

**Bước 1.** Từ giao diện **Explore**, tại bảng có Test case vừa tạo, chọn tab **Pipeline**, ấn **Add**

![Hình ảnh](images/huong-dan-su-dung-open-metadata/img-014.png)

**Bước 2.** Nhập thông tin Scheduler for Test Cases

 * Name: Tên lịch chạy test

 * Chọn Schedule để lập lịch chạy định kỳ

 * Chọn On Demand để chạy thủ công

 * Chọn các testcase sẽ chạy trong pipeline

Ấn **Submit** để hoàn thành tạo lịch cho testcase

Sau khi pipeline test được chạy, hệ thống sẽ tiến hành kiểm tra dữ liệu theo testcase đã cấu hình và trả về kết quả theo bảng và theo tổng quan cả hệ thống

![Hình ảnh](images/huong-dan-su-dung-open-metadata/img-015.png)

![Hình ảnh](images/huong-dan-su-dung-open-metadata/img-016.png)

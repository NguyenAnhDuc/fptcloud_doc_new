---
id: "quan-ly-connectors"
title: "Quản lý Connectors"
sidebar_label: "Quản lý Connectors"
description: "Quản lý Connectors"
---

# Quản lý Connectors

Hiển thị thông tin các **Connector** của **Query engine**

![Hình ảnh](images/quan-ly-connectors/img-001.png)

**Thêm Connector:**

 * **Bước 1.** Tại màn hình **Connectors**, Ấn **Create a connector**, Chọn **Connector Type** là **Iceberg Catalog – Hive**

 * **Bước 2.** Nhập thông tin cho **Connector**

 * **Enable S3 SSE:**

 * Mọi file ghi lên S3 được mã hoá tự động. Khi bạn xem hoặc tải file, Workspace tự giải mã. → Tăng mức bảo mật dữ liệu.

 * Keyvault: chọn keystore bạn đã tạo (Tạo Keystore)

 * Không bật S3 SSE → file lưu nguyên bản, không mã hoá.

 * **Catalog name**: tên Catalog

 * **Catalog type**: nhập hive

 * **Catalog URL**: địa chỉ kết nối Hive Metastore

 * **File Format**: định dạng file (parquet/orc/avro)

 * **Default Warehouse Directory**: đường dẫn thư mục (**s3a:// /path**)

 * **S3 Endpoint**: địa chỉ truy cập S3 (https://)

 * **S3 Access Key**: Khoá truy cập

 * **S3 Secret Key**: Mã truy cập

 * **Bước 3.** Ấn **Create** để tạo **Connector**, ấn **Cancel** để huỷ bỏ (sau khi Create Connector, Query Engine chuyển trạng thái **Processing** và thực hiện tạo cấu hình **~3 phút**)

![Hình ảnh](images/quan-ly-connectors/img-002.png)

**Xoá Connector**

 * **Bước 1.** Tại màn hình **Connectors**, chọn connector name cần xoá, chọn Action > Delete

 * **Bước 2.** Xác nhận xoá hoặc huỷ bỏ thao tác xoá tại hộp thoại xác nhận

![Hình ảnh](images/quan-ly-connectors/img-003.png)

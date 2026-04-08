---
id: "create-connection"
title: "Tạo kết nối"
description: "Tạo kết nối tới Object Storage để sử dụng với Data Hub."
sidebar_label: "Tạo kết nối"
sidebar_position: "3"
---

# Tạo kết nối

Kết nối Data Hub với FPT Object Storage để quản lý dữ liệu.

1. Truy cập quản lý Object Storage tại [FPT Cloud Console](https://console.fptcloud.com) và chọn tab **Buckets**.
2. Chọn **Create Bucket**. Chi tiết xem tại [Tạo bucket](../fpt-object-storage/tutorials-bucket.md).
3. Upload dữ liệu vào bucket. Chi tiết xem tại [Upload objects](../fpt-object-storage/tutorials-object.md).
4. Truy cập dịch vụ **Data Hub**, chọn **Connection List** và nhấn **Create Connection**.

[![Tạo kết nối Data Hub](/img/migrated/image-1742974995525.33.34-760613b1.png)](/img/migrated/image-1742974995525.33.34-760613b1.png)

5. Điền thông tin kết nối:

   - **Name**: Tên kết nối (chỉ dùng chữ a–z, số 0–9, dấu gạch ngang; độ dài 3–64 ký tự).
   - **Data Source**: Chọn nguồn dữ liệu.
   - **Endpoint URL**: Địa chỉ endpoint của bucket, ví dụ: `https://test-bucket-name.s3-han02.fptcloud.com`.
   - **Access Key** và **Secret Key**: Thông tin xác thực quyền truy cập.

[![Điền thông tin kết nối](/img/migrated/image-1742975565417.51.05-8588afb6.png)](/img/migrated/image-1742975565417.51.05-8588afb6.png)

6. Nhấn **Save** để tạo kết nối.

---
id: "huong-dan-tich-hop-database"
title: "Hướng dẫn tích hợp Database"
sidebar_label: "Hướng dẫn tích hợp Database"
sidebar_position: "15"
---

# Hướng dẫn tích hợp Database

## Step 1: Truy cập chức năng

- Sau when active service Monitoring and khởi tạo workspace successfully, trên Console portal, you ando detail a cụm Database and select Monitoring
- Hệ thống displayed list the metrics and logs theo loại database. Các metric or log chưa is tích hợp with FPT Monitoring will có Status = "Disabled".

[![Alt text](/img/migrated/Screenshot_33-828878ed.png)](/img/migrated/Screenshot_33-828878ed.png)

## Step 2: Tích hợp/huỷ tích hợp

### Tích hợp (Integrate)

Enable thu thập metrics/logs for cluster.

- Tại màn hình Monitoring, chọn hành động "Integrate" ứng with workspace need to tích hợp

<ảnh is is update>

- Confirm thao tác in hộp thoại alert to complete.

<ảnh is is update>

- Sau when tích hợp successfully, Integrated Status will chuyển sang **"Enabled"**, system FPT Monitoring bắt đầu thu thập the chỉ số corresponding.

<ảnh is is update>

### Huỷ tích hợp (Disintegrate)

Disable thu thập metrics/logs for database cluster.

- Tại màn hình Monitoring, chọn hành động **"Disintegrate"** ứng with workspace need to huỷ monitoring.
- Confirm thao tác in hộp thoại alert to complete.
- Sau when huỷ tích hợp successfully, Integrated Status will chuyển sang **"Disabled"**, system FPT Monitoring ngừng thu thập the chỉ số corresponding.

<ảnh is is update>

## Step 3: Truy cập dashboard Grafana and xem information monitoring

- Sau when tích hợp monitoring successfully (Integrated Status = "Enabled"), click ando Dashboard URL to đi tới trang Grafana
- Sau that tích hợp the dashboard template corresponding, tham khảo guide tại mục [**3.1. Tích hợp Dashboard Template**](../huong-dan-su-dung-grafana/index.md)
- Mở dashboard has been tích hợp and xem information monitor

[![Alt text](/img/migrated/Screenshot_34-e8f6a87c.png)](/img/migrated/Screenshot_34-e8f6a87c.png)

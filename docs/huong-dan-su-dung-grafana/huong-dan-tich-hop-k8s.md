---
id: "huong-dan-tich-hop-k8s"
title: "Hướng dẫn tích hợp K8s"
sidebar_label: "Hướng dẫn tích hợp K8s"
sidebar_position: "9"
---

# Hướng dẫn tích hợp K8s

## Step 1: Truy cập chức năng Monitoring

- Trên Console Portal, truy cập details a Cluster
- Select the tab Monitoring

System displayed màn hình tích hợp Monitoring.

[![Alt text](/img/migrated/Screenshot_20-99aa1fa8.png)](/img/migrated/Screenshot_20-99aa1fa8.png)

## Step 2: Tích hợp/huỷ tích hợp

### 1. Tích hợp (Integrate)

Enable thu thập metrics/logs for cluster.

- Tại màn hình Monitoring, chọn hành động **"Integrate"** ứng with workspace need to tích hợp

<ảnh minh họa is cập nhật>

- Confirm thao tác in hộp thoại alert to hoàn tất.

<ảnh minh họa is cập nhật>

- Sau when tích hợp successfully, Integrated Status will chuyển sang **"Enabled"**, system FPT Monitoring bắt đầu thu thập the chỉ số corresponding.

<ảnh minh họa is cập nhật>

### 2. Huỷ tích hợp (Disintegrate)

Disable thu thập metrics/logs for database cluster.

- Tại màn hình Monitoring, chọn hành động **"Disintegrate"** ứng with workspace need to huỷ monitoring.
- Confirm thao tác in hộp thoại alert to hoàn tất.
- Sau when huỷ tích hợp successfully, Integrated Status will chuyển sang **"Disabled"**, system FPT Monitoring ngừng thu thập the chỉ số corresponding.

<ảnh minh họa is cập nhật>

## Step 3: Truy cập dashboard Grafana and xem information monitoring

- Sau when tích hợp monitoring successfully (Integrated Status = "Enabled"), click ando Dashboard URL

<ảnh minh họa is cập nhật>

- Sau that tích hợp the dashboard template corresponding, tham khảo guide tại mục **3.1. Tích hợp Dashboard Template**
- Mở dashboard has been tích hợp and xem information Monitoring

*Ảnh minh họa*

[![Alt text](/img/migrated/Screenshot_21-31d7364e.png)](/img/migrated/Screenshot_21-31d7364e.png)

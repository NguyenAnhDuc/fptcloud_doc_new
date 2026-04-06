---
id: "monitoring"
title: "Monitoring"
sidebar_label: "Monitoring"
description: "Monitoring"
---

# Monitoring

### 1.Kết nối với Monitoring Workspace

Để tích hợp với Monitoring Workspace, người dùng thực hiện các bước sau:

**Bước 1:** Tại màn hình Details của Workspace > chuyển sang tab **Monitoring**

**Bước 2:** Tại bảng thông tin Monitoring Workspace, kiểm tra các thông tin:

 * **ID**: ID của Workspace

 * **Workspace name**: Tên Workspace

 * **URL**: Đường dẫn truy cập Monitoring Dashboard

 * **Datasource type**: Loại datasource (Metric)

 * **Datasource status**: Trạng thái datasource (Activating, Active, Active Failed, Inactive, Deactivate Failed)

 * **Integrated status**: Trạng thái tích hợp (Enabled/Disabled)

**Bước 3:** Nhấn button **Integrate** tại cột Action

**Bước 4:** Hệ thống thực hiện kết nối với Monitoring Workspace

![Ảnh](images/monitoring/img-001.png)

### 2\. Cấu hình và sử dụng Monitoring Dashboard

Sau khi tích hợp thành công, để xem và cấu hình Monitoring Dashboard, người dùng thực hiện các bước sau:

**A. Truy cập Monitoring Dashboard**

**Bước 1:** Tại tab **Monitor** của Workspace, click vào **URL** trong bảng thông tin Monitoring Workspace

**Bước 2:** Hệ thống mở Monitoring Dashboard trong tab mới

**B. Import Dashboard Template**

**Bước 3:** Tại Monitoring Dashboard, chọn menu bên trái > **Dashboards**

**Bước 4:** Nhấn button **New** > chọn **New folder**

**Bước 5:** Nhập tên folder (ví dụ: " Workspace Monitoring") > nhấn **Create**

**Bước 6:** Truy cập vào folder vừa tạo > nhấn button **New** > chọn **Import**

 * [Link template](<https://fptsoftware362.sharepoint.com/:f:/r/sites/FCI_CLOUD/XPLAT/Shared%20Documents/PRODUCT/FDP%20\(Data%20Platform\)/Documentation/4.%20User%20Guide/Template?csf=1&web=1&e=G2aD50>)

**Bước 7:** Tại màn hình Import Dashboard:

 * Click **Upload JSON file** hoặc kéo thả file template dashboard vào

 * File template dashboard được cung cấp bởi hệ thống (định dạng .json)

**Bước 8:** Sau khi upload thành công:

 * Kiểm tra thông tin dashboard (Name, UID, Folder)

 * Chọn **Datasource** tương ứng với API Gateway đã tích hợp

 * Nhấn **Import** để hoàn tất

**Bước 9:** Dashboard được tạo và hiển thị metrics của services

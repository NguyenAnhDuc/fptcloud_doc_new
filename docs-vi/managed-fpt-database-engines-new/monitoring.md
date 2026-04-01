---
id: "monitoring"
title: "Monitoring"
description: "Tính năng Monitoring cung cấp khả năng quan sát theo thời gian thực về tình trạng vận hành, hiệu năng và mức sử dụng tài"
sidebar_label: "Monitoring"
sidebar_position: 39
---

# Monitoring

Tính năng Monitoring cung cấp khả năng quan sát theo thời gian thực về tình trạng vận hành, hiệu năng và mức sử dụng tài nguyên của các cớ ở dữ liệu trên FPT Cloud. Monitoring thu thập và trực quan hóa các chỉ số (metrics) và log quan trọng, giúp:
  * Phát hiện sớm các bất thường.
  * Đánh giá tải truy vấn.
  * Chủ động đưa ra quyết định để tối ưu hiệu năng và tính sẵn sàng.

Monitoring trong FPT Database Engine được tích hợp với hệ thống FPT Monitoring để thu thập metrics và logs, đồng thời cung cấp dashboard và cảnh báo khi cần thiết.
Hướng dẫn này mô tả cách truy cập, cấu hình và sử dụng Monitoring để theo dõi sức khỏe và hiệu suất của database clusters trên FPT Cloud Portal.
### Bước 1: Truy cập chức năng
Đăng nhập vào FPT Cloud Portal. Từ menu chính, chọn “**Database Platform** ” → “**All Database** ”. Trên trang Database list, chọn cụm cơ sở dữ liệu cần giám sát > chọn tab “**Monitor** ” để vào chức năng. Tùy theo trạng thái kích hoạt Monitoring, màn hình hiển thị như sau:
  * Chưa kích hoạt monitoring: Hệ thống hiển thị màn hình yêu cầu liên hệ FPT Support. Khách hàng cần liên hệ đội hỗ trợ để kích hoạt Monitoring.

[![](/img/migrated/monitor-not-available-scaled-665c70e9.png)](/img/migrated/monitor-not-available-scaled-665c70e9.png)
  * Đã kích hoạt monitoring: Hệ thống hiển thị danh sách các metrics và logs theo loại database. Các metric hoặc log chưa được tích hợp với FPT Monitoring sẽ có Intergrated Status = “**Disabled** ”.

[![](/img/migrated/monitor-enable-ba8960c7.png)](/img/migrated/monitor-enable-ba8960c7.png)
### Bước 2: Tích hợp/huỷ tích hợp giám sát
  * **Tích hợp giám sát (Integrate)** : Bật thu thập metrics/logs cho database cluster. Để thực hiện, trên **Workspace List** , chọn hành động “**Integrate** ” ứng với workspace cần giám sát. Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất. Sau khi tích hợp thành công, **Integrated Status** sẽ chuyển sang “**Enabled** ”, hệ thống FPT Monitoring bắt đầu thu thập các chỉ số tương ứng.
  * **Huỷ tích hợp giám sát (Disintegrate)** : Tắt thu thập metrics/logs cho database cluster. Để thực hiện, trên **Workspace List** , chọn hành động “**Disintegrate** ” ứng với workspace cần huỷ giám sát. Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất. Sau khi huỷ tích hợp thành công, **Integrated Status** sẽ chuyển sang “**Disabled** ”, hệ thống FPT Monitoring ngừng thu thập các chỉ số tương ứng.

### Bước 3: Xem thông tin workspace
Sau khi tích hợp giám sát thành công (Integrated Status = “**Enabled** ”), nhấn vào workspace name để mở trang chi tiết workspace. Tại đây, bạn có thể xem các thông tin liên quan: Monitoring dashboards, Contact points và Datasources.
[![](/img/migrated/view-workspace-detail-4d7a2af8.png)](/img/migrated/view-workspace-detail-4d7a2af8.png)
### Bước 4: Xem thông tin monitoring
Bạn có thể xem các dashboards hiển thị metrics theo thời gian thực và dữ liệu lịch sử trên Grafana bằng cách nhấn vào Dashboard URL để chuyển đến trang đăng nhập:
[![](/img/migrated/login-grafana-ee39a38d.png)](/img/migrated/login-grafana-ee39a38d.png)
Nhập thông tin đăng nhập là **Basic Authentication – Username** và **Basic Authentication – Password** được cung cấp trên trang chi tiết workspace và nhấn **Login** để vào trang chủ Grafana:
[![](/img/migrated/grafana-home-ff1e4760.png)](/img/migrated/grafana-home-ff1e4760.png)
#### Xem Metrics:
Nhấn vào “**Toggle Menu** ” > chọn “**Dashboards** ”. Màn hình Dashboards được hiển thị. Chọn Template tương ứng với loại database engine để xem các folders có sẵn.
[![](/img/migrated/metric-dashboard-19d10d37.png)](/img/migrated/metric-dashboard-19d10d37.png)
Chọn folder cần xem để hiển thị các metric:
[![](/img/migrated/metric-dashboard1-81a75568.png)](/img/migrated/metric-dashboard1-81a75568.png)
#### Xem Logs:
Nhấn vào “**Toggle Menu** ” > chọn “**Explore** ”:
[![](/img/migrated/dashboard-log1-1-64999825.png)](/img/migrated/dashboard-log1-1-64999825.png)
Chọn “Loki”:
[![](/img/migrated/dashboard-log2-8404b97b.png)](/img/migrated/dashboard-log2-8404b97b.png)
Trong ô label filter, chọn nhãn cần xem log:
[![](/img/migrated/dashboard-log-filter-51eae0b5.png)](/img/migrated/dashboard-log-filter-51eae0b5.png)
Trong ô value, chọn đối tượng cần xem log:
[![](/img/migrated/dashboard-log-runquery-1becce67.png)](/img/migrated/dashboard-log-runquery-1becce67.png)
Thông tin log được hiển thị như sau:
[![](/img/migrated/dashboard-log-view-9c882ffa.png)](/img/migrated/dashboard-log-view-9c882ffa.png)

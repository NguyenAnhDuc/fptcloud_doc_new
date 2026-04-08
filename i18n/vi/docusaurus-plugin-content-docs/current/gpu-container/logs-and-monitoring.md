---
id: "logs-and-monitoring"
title: "Logs And Monitoring"
description: "GPU Container cung cấp logs container và metrics để giúp bạn giám sát và khắc phục sự cố workload."
sidebar_label: "Logs And Monitoring"
sidebar_position: 10
---

# Logs And Monitoring

GPU Container cung cấp **logs container** và **metrics** để giúp bạn giám sát và khắc phục sự cố workload. Để xem logs và metrics, bạn mở màn hình Chi tiết Container, chọn tab Logs hoặc Monitoring. Tính năng này giúp dễ dàng chẩn đoán sự cố hoặc theo dõi hoạt động của container.

## Logs Container
Logs container bao gồm tất cả logs ứng dụng. Lưu ý rằng logs chỉ được lưu trong 14 ngày và dấu thời gian hiển thị theo múi giờ UTC. [![Alt text](/img/migrated/Logs_screen-6445c59e.png)](/img/migrated/Logs_screen-6445c59e.png)
  1. Download: Tải xuống logs trong 14 ngày gần nhất của container.
  2. Search: Nhập từ khóa để tìm kiếm trong nội dung log.
  3. Time Filter: Lọc logs theo khoảng thời gian cụ thể.
  4. Refresh: Khoảng thời gian logs container được tự động cập nhật.

## Giám sát Metrics
Metrics giám sát được thu thập để theo dõi hiệu suất, tính khả dụng và mức sử dụng tài nguyên của các dịch vụ container, giúp phát hiện sự cố và tối ưu hóa hoạt động. Lưu ý rằng dữ liệu metrics được lưu trong 14 ngày.
Có 4 nhóm metrics:
  * **Metrics sử dụng**: Giám sát mức sử dụng CPU, bộ nhớ và GPU để đánh giá hiệu suất hệ thống và hiệu quả tài nguyên.
  * **Metrics ổ đĩa**: Theo dõi tốc độ đọc/ghi ổ đĩa và độ trễ để phát hiện sự cố lưu trữ hoặc tắc nghẽn.
  * **Metrics mạng**: Đo lường lưu lượng mạng, độ trễ và lỗi để xác định sự cố kết nối và đảm bảo độ tin cậy dịch vụ.
  * **Metrics nhiệt độ và điện năng**: Giám sát nhiệt độ phần cứng và mức tiêu thụ điện năng để ngăn ngừa quá nhiệt và duy trì sức khỏe phần cứng. [![Alt text](/img/migrated/Monitoring_screen-5c33d142.png)](/img/migrated/Monitoring_screen-5c33d142.png)

  1. **Time Filter**: Lọc metrics theo khoảng thời gian cụ thể.
  2. **Refresh**: Khoảng thời gian metrics container được tự động cập nhật.

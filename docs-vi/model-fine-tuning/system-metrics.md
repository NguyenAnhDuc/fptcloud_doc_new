---
id: "system-metrics"
title: "System Metrics"
description: "System metrics được thu thập để theo dõi hiệu suất phần cứng và cơ sở hạ tầng trong quá trình training model."
sidebar_label: "System Metrics"
sidebar_position: 26
---

# System Metrics

[![Alt text](https://fptcloud.com/wp-content/uploads/2025/02/System-metrics.png)](https://fptcloud.com/wp-content/uploads/2025/02/System-metrics.png)

**System metrics** được thu thập để theo dõi hiệu suất phần cứng và cơ sở hạ tầng trong quá trình training và đánh giá model. Các số liệu này giúp xác định các điểm nghẽn tài nguyên, tối ưu hóa việc sử dụng phần cứng và đảm bảo quá trình training ổn định và hiệu quả.

| Số liệu | Đánh giá gì |
| --- | --- |
| **GPU Utilization (%)** | Đo lường mức độ sức mạnh xử lý của GPU đang được sử dụng. Giá trị cao cho thấy GPU đang hoạt động tích cực; giá trị thấp có thể chỉ ra điểm nghẽn ở nơi khác (ví dụ: tải dữ liệu). |
| **CPU Utilization (%)** | Cho biết mức độ CPU đang được sử dụng. Hữu ích để phát hiện xem CPU có phải là điểm nghẽn trong quá trình tiền xử lý dữ liệu hoặc các thao tác I/O hay không. |
| **GPU Power Usage (W)** | Hiển thị mức tiêu thụ điện năng thực tế của GPU tính bằng watt. Giúp theo dõi hiệu quả năng lượng và giới hạn nhiệt. |
| **GPU Power Usage (%)** | Phần trăm công suất tối đa của GPU đang được sử dụng. Hữu ích để hiểu GPU gần đến giới hạn công suất đến mức nào. |
| **GPU Memory Usage (MB)** | Lượng bộ nhớ GPU hiện đang sử dụng. Quan trọng để đảm bảo model và dữ liệu vừa với bộ nhớ khả dụng. |
| **GPU Memory Usage (%)** | Phần trăm tổng bộ nhớ GPU đang được sử dụng. Sử dụng cao có thể gây tràn bộ nhớ hoặc mất ổn định. |
| **RAM Usage (MB)** | Lượng RAM hệ thống hiện đang sử dụng. Giúp theo dõi áp lực bộ nhớ từ việc tải dữ liệu, tiền xử lý hoặc các thành phần model. |
| **RAM Usage (%)** | Phần trăm tổng RAM hệ thống đang sử dụng. Giá trị cao có thể chỉ ra nhu cầu tối ưu hóa bộ nhớ hoặc nâng cấp phần cứng. |
| **Network - Bandwidth** | Đo tốc độ truyền dữ liệu qua mạng. Quan trọng trong distributed training hoặc khi tải dữ liệu từ nguồn từ xa. Băng thông thấp có thể làm chậm quá trình training. |

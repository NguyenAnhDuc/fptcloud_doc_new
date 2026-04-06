---
id: "hanh-dong-voi-snapshot"
title: "Hành động với Snapshot"
sidebar_label: "Hành động với Snapshot"
description: "Hành động với Snapshot"
---

# Hành động với Snapshot

Trường hợp sử dụng:

Hành động | Mô tả
---|---
**Execute** | Bắt đầu thực hiện quá trình snapshot. Quá trình này không block bảng được snapshot và luồng stream vẫn hoạt động.

**Ảnh hưởng:**
\- Snapshot status chuyển sang In-progress
\- Kafka topic bắt đầu nhận dữ liệu từ snapshot
\- Connector và tasks vẫn hoạt động bình thường

**Khi nào sử dụng:**
\- Khi muốn snapshot toàn bộ dữ liệu hiện tại của database vào Kafka topic
\- Khi cần khởi tạo dữ liệu ban đầu cho hệ thống
\- Khi muốn chạy lại snapshot sau khi đã Completed hoặc Failed
**Pause** | Tạm dừng incremental snapshot. Sau khi có tín hiệu này, connector sẽ tạm dừng hoạt động snapshot đang thực thi. Toàn bộ data collection sẽ được dừng lại tại thời điểm nhận tín hiệu dừng snapshot.

**Ảnh hưởng:**
\- Snapshot status chuyển sang Paused
\- Kafka topic ngưng nhận dữ liệu từ snapshot
\- Tiến trình snapshot được lưu lại, có thể Resume để tiếp tục
\- Connector và tasks vẫn hoạt động bình thường

**Khi nào sử dụng:**
\- Khi cần tạm dừng snapshot trong giờ cao điểm để tránh ảnh hưởng hiệu năng
\- Khi cần bảo trì hệ thống hoặc khắc phục sự cố tạm thời
**Resume** | Tiếp tục một incremental snapshot đã bị tạm dừng. Sau tín hiệu này, connector sẽ tiếp tục hoạt động snapshot đã bị tạm dừng trước đó.

**Ảnh hưởng:**
\- Snapshot status chuyển sang In-progress
\- Kafka topic tiếp tục nhận dữ liệu từ vị trí đã pause
\- Snapshot tiếp tục chạy cho đến khi hoàn tất

**Khi nào sử dụng:**
\- Sau khi đã Pause và muốn tiếp tục snapshot
\- Khi hệ thống đã ổn định và có thể tiếp tục xử lý snapshot
**Stop** | Dừng, hủy bỏ bản snapshot ad hoc đang chạy. Toàn bộ tiến trình snapshot hiện tại sẽ bị hủy bỏ.

**Ảnh hưởng:**
\- Snapshot status chuyển sang Completed
\- Kafka topic ngưng nhận dữ liệu từ snapshot ngay lập tức
\- Tiến trình snapshot bị hủy bỏ, cần Execute lại từ đầu nếu muốn snapshot

**Khi nào sử dụng:**
\- Khi không còn cần snapshot nữa
\- Khi phát hiện lỗi trong quá trình snapshot và muốn dừng ngay
\- Khi cần giải phóng tài nguyên hệ thống

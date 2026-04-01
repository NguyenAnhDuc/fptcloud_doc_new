---
id: "log"
title: "Event Logs"
description: "Chức năng **Event Logs** trong FPT Database Engine cho phép người dùng theo dõi và kiểm soát toàn bộ hoạt động vận hành "
sidebar_label: "Event Logs"
sidebar_position: 40
---

# Log

Chức năng **Event Logs** trong FPT Database Engine cho phép người dùng theo dõi và kiểm soát toàn bộ hoạt động vận hành của hệ thống cơ sở dữ liệu thông qua hai loại log chính:
  * **Process Log (Process Monitoring)** – hiển thị luồng xử lý chi tiết của các tác vụ hệ thống.
  * **Event Logs** – ghi lại các sự kiện quan trọng liên quan đến vòng đời và cấu hình của cơ sở dữ liệu, không hiển thị chi tiết từng bước xử lý nội bộ.

Chức năng này hỗ trợ:
  * Xác minh thao tác đã thực hiện thành công hay chưa.
  * Theo dõi lịch sử thay đổi (audit trail).
  * Kiểm tra các hành động quản trị (administrative operations).

Để truy cập trang **Event Logs** , thực hiện đăng nhập FPT Cloud Console. Sau khi đăng nhập thành công, từ menu chính, chọn “**Database Platform** ” > “**All Databases** ”. Nhấn vào ID của database cluster cần quản lý > chọn tab “**Event Logs** ”.
  * Chọn tab “**Process Monitoring** ” để xem process log. Chọn action và nhấn “**View** ” để xem kết quả.

[![](/img/migrated/view-process-monitor-scaled-85e128b6.png)](/img/migrated/view-process-monitor-scaled-85e128b6.png)
  * Chọn tab “**Event Logs** ” để xem event log.

[![](/img/migrated/view-event-log-scaled-61adb5ff.png)](/img/migrated/view-event-log-scaled-61adb5ff.png)

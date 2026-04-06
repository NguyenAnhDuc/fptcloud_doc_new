---
id: "create-schedule-snapshotVM"
title: "Tạo lịch snapshot máy ảo"
sidebar_label: "Tạo lịch snapshot máy ảo"
sidebar_position: 96
---

# Tạo lịch snapshot máy ảo


Để tạo mời một Lịch snapshot máy ảo bạn thao tác như sau

**Bước 1:** Ở menu chọn Compute Engine > Schedule Management, chọn tab Instance snapshot schedule

![file](images/create-schedule-snapshotVM/img-001.png)

**Bước 2:** Nhập các thông tin theo yêu cầu của hệ thống

  * Name: tên lịch

  * Time: chỉ có chọn time sau ít nhất 2h kể từ thời điểm chỉnh sửa để đảm bảo lịch chạy chính xác

  * Start date: ngày bắt đầu lặp lịch snapshot, nếu bỏ trống thì tính từ thời điểm tạo lịch thành công

  * End date: ngày kết thúc lịch snapshot, nếu bỏ trống thì lịch không có giới hạn

  * Frequency: tần suất cho việc thực hiện hành động snapshot

  *     * Daily: lịch chạy theo giờ mỗi ngày
  *     * Weekly: lịch chạy theo tuần, bạn có thể chọn ngày trong tuần
  * Applied Instance: Các máy ảo được gắn vào lịch (Lưu ý: mỗi máy ảo cùng lúc chỉ được cho phép gắn với 1 lịch)


![file](images/create-schedule-snapshotVM/img-002.png)

**Bước 3:** Chọn Create Schedule. Hệ thống sẽ tiền hành khởi tạo và thông báo kết quả. Nếu thành công, lịch mới sẽ được hiển thị ở trang Instance snapshot schedule

![file](images/create-schedule-snapshotVM/img-003.png)

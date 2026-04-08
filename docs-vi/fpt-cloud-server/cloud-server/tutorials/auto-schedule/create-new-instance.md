---
id: "create-new-instance"
title: "Tạo một instance schedule mới"
description: "Hướng dẫn tạo mới instance schedule để tự động bật/tắt máy ảo trên FPT Cloud."
sidebar_label: "Tạo một instance schedule mới"
sidebar_position: 4
---

# Tạo một instance schedule mới

Để tạo mới một instance schedule, thực hiện các bước sau:

**Bước 1:** Trên menu, chọn **Compute Engine > Instance Schedule**, sau đó chọn **Create schedule**.

[![Màn hình danh sách instance schedule](/img/migrated/image-1709893783815-21178c51.png)](/img/migrated/image-1709893783815-21178c51.png)

**Bước 2:** Điền các thông tin theo yêu cầu:

- **Name**: Tên của instance schedule.
- **Description**: Mô tả về instance schedule.
- **Start time**: Thời gian bật máy ảo.
- **Stop time**: Thời gian tắt máy ảo.
- **Start Date**: Ngày bắt đầu thực hiện lịch. _(Nếu để trống, lịch sẽ chạy vô thời hạn kể từ khi tạo.)_
- **End Date**: Ngày kết thúc thực hiện lịch. _(Nếu để trống, lịch sẽ chạy vô thời hạn cho đến khi bị xóa.)_
- **Frequency**: Tần suất thực hiện hành động bật/tắt (hàng ngày, hàng tuần hoặc hàng tháng).
- **Applied instances**: Danh sách máy ảo được gắn vào lịch. _(Mỗi máy ảo chỉ được phép gắn với 1 lịch tại một thời điểm.)_

[![Biểu mẫu tạo instance schedule](/img/migrated/image-1695608983434-0ca4b6ed.png)](/img/migrated/image-1695608983434-0ca4b6ed.png)

**Bước 3:** Chọn **Create schedule**. Hệ thống sẽ khởi tạo và thông báo kết quả.

Nếu thành công, instance schedule mới sẽ xuất hiện trong trang **Instance Schedule Management**.

[![Kết quả tạo instance schedule thành công](/img/migrated/image-1695608998324-75646c28.png)](/img/migrated/image-1695608998324-75646c28.png)

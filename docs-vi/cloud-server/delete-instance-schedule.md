---
id: "delete-instance-schedule"
title: "Xóa Instance Schedule"
description: "Xóa lịch tự động tắt/bật máy ảo."
sidebar_label: "Xóa Instance Schedule"
sidebar_position: 94
pagination_next: null
---

# Xóa Instance Schedule

:::warning
Thao tác này sẽ không thực hiện được nếu lịch đã và đang chạy dở chưa xong. Việc xóa Instance Schedule sẽ không thể khôi phục lại được.
:::

**Bước 1**: Trên bảng quản trị **Instance Schedule Management**, trong phần **Action**, chọn **Delete**.

![Chọn Delete Schedule](images/delete-instance-schedule/img-001.png)

**Bước 2**: Một hộp thoại cảnh báo sẽ hiện lên, hiển thị tên schedule và yêu cầu người dùng xác nhận. Gõ **delete** và chọn **Delete schedule** để tiến hành xóa.

![Xác nhận xóa Schedule](images/delete-instance-schedule/img-002.png)

Sau đó hệ thống sẽ xóa hoàn toàn schedule và các máy ảo đang gắn kèm (nếu có) sẽ được giải phóng, giữ nguyên trạng thái hiện tại.

---
id: "delete-instance-group"
title: "Xóa Instance Group"
description: "Xóa Instance Group khi không còn nhu cầu sử dụng."
sidebar_label: "Xóa Instance Group"
sidebar_position: 81
pagination_next: null
---

# Xóa Instance Group

:::warning
Thao tác này sẽ đồng thời gỡ Instance Group khỏi các instance đã gắn với nó. Việc xóa Instance Group sẽ không thể khôi phục lại được.
:::

_Tính năng áp dụng cho người dùng sử dụng dịch vụ General và Specific._

**Bước 1**: Ở menu chọn **Instance Group**, trong phần **Actions**, chọn **Delete**.

![Chọn Delete Instance Group](images/delete-instance-group/img-001.png)

**Bước 2**: Một hộp thoại cảnh báo sẽ hiện lên, hiển thị tên Instance Group và yêu cầu người dùng xác nhận. Nhập **delete** và chọn **Delete instance group** để xác nhận xóa.

![Xác nhận xóa Instance Group](images/delete-instance-group/img-002.png)

Hệ thống sẽ tiến hành gỡ các máy ảo gắn với Instance Group, sau đó xóa hoàn toàn Instance Group.

---
id: "xoa-policy"
title: "Xóa Policy"
description: "Hướng dẫn xóa Autoscale Policy trên FPT Autoscale."
sidebar_label: "Xóa Policy"
sidebar_position: 17
pagination_next: null
---

# Xóa Policy

1. Truy cập trang **Autoscaling > Autoscale Policy**. Trên dòng tương ứng với policy cần xóa, chọn biểu tượng **Delete**.

   [![Biểu tượng xóa Policy](/img/migrated/Screenshot-2024-10-02-071116-37f91343.png)](/img/migrated/Screenshot-2024-10-02-071116-37f91343.png)

2. Một hộp thoại xuất hiện. Nếu tên policy chính xác, chọn **Delete policy** để xác nhận. Chọn **Cancel** để hủy thao tác.

   [![Hộp thoại xác nhận xóa Policy](/img/migrated/Screenshot-2024-10-02-071213-f062f4ca.png)](/img/migrated/Screenshot-2024-10-02-071213-f062f4ca.png)

:::warning
Nếu nhận được thông báo lỗi sau:

[![Thông báo lỗi khi xóa Policy đang được liên kết với Group](/img/migrated/Screenshot-2024-10-02-071245-ee662fd2.png)](/img/migrated/Screenshot-2024-10-02-071245-ee662fd2.png)

Policy đang được liên kết với một hoặc nhiều Autoscale Group. Hãy đảm bảo policy đã được detach hoàn tất khỏi tất cả các group trước khi thực hiện xóa.
:::

---
id: "xoa-profile"
title: "Xóa Profile"
description: "Hướng dẫn xóa Autoscale Profile trên FPT Autoscale."
sidebar_label: "Xóa Profile"
sidebar_position: 5
pagination_next: null
---

# Xóa Profile

1. Truy cập trang **Autoscaling > Autoscale Profile**. Trên dòng tương ứng với profile cần xóa, chọn biểu tượng **Delete**.

   [![Biểu tượng xóa Profile](/img/migrated/Screenshot-2024-10-01-171413-fec288a5.png)](/img/migrated/Screenshot-2024-10-01-171413-fec288a5.png)

2. Một hộp thoại xuất hiện. Nếu tên profile chính xác, chọn **Delete profile** để xác nhận. Chọn **Cancel** để hủy thao tác.

   [![Hộp thoại xác nhận xóa Profile](/img/migrated/Screenshot-2024-10-01-171633-abcf343f.png)](/img/migrated/Screenshot-2024-10-01-171633-abcf343f.png)

:::warning
Nếu nhận được thông báo lỗi sau:

[![Thông báo lỗi khi xóa Profile đang được sử dụng](/img/migrated/Screenshot-2024-10-01-174412-8d122a6f.png)](/img/migrated/Screenshot-2024-10-01-174412-8d122a6f.png)

Profile đang được sử dụng làm tham chiếu bởi một hoặc nhiều Autoscale Group hoặc Instance Node. Hãy đảm bảo xóa hoàn tất các đối tượng liên kết trước khi xóa profile.
:::

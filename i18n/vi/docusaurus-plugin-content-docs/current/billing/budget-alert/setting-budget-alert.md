---
id: "setting-budget-alert"
title: "Ngăn chặn tạo resource mới khi đạt ngưỡng ngân sách"
description: "Hướng dẫn cài đặt tự động chặn tạo resource Compute/Network khi đạt ngưỡng cảnh báo ngân sách."
sidebar_label: "Ngăn chặn tạo resource khi đạt ngưỡng"
sidebar_position: 7
pagination_next: null
---

# Ngăn chặn tạo resource mới khi đạt ngưỡng ngân sách

Tính năng Attach option giúp bạn tự động chặn việc tạo thêm resource Compute và Network khi chi phí đạt ngưỡng cảnh báo — tránh phát sinh chi phí ngoài kiểm soát.

Tại bước 2 khi khởi tạo Budget Alert, chọn **Attach option**:

- Nếu chọn **No** (mặc định): hệ thống không chặn tạo resource mới khi đạt ngưỡng ngân sách.

  ![Attach option No](/img/migrated/image-1727168996714-d093ff1d.png)

- Nếu chọn **Yes**: khi resource được chọn tại bước 1 đạt ngưỡng cảnh báo, hệ thống tự động chặn tạo thêm resource Compute và Network (bao gồm: Instance, VPC, Storage, Snapshot, IP, Load Balancer).

  ![Attach option Yes](/img/migrated/image-1727169010489-9c081e43.png)

  ![Thông báo chặn tạo resource](/img/migrated/image-1727169025409-df35c1e8.png)

:::warning
- Mỗi Budget chỉ được chọn Attach option ở một alert.
- Nếu cùng một tenant/VPC có nhiều Budget với nhiều mốc alert được bật Attach option, alert nào cảnh báo trước sẽ chặn tạo resource tại thời điểm đó.
:::

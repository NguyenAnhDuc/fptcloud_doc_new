---
id: "Cài đặt ngăn chặn tạo resource Compute-Network mới khi đã đạt ngưỡng ngân sách"
title: "Cài Đặt Ngăn Chặn Tạo Resource Compute Network Mới Khi Đã Đạt Ngưỡng Ngân Sách"
description: "Tại bước 2 khi khởi tạo budget alert, chọn Attach option."
sidebar_label: "Cài Đặt Ngăn Chặn..."
sidebar_position: 7
---

# Cài Đặt Ngăn Chặn Tạo Resource Compute Network Mới Khi Đã Đạt Ngưỡng Ngân Sách

Tại bước 2 khi khởi tạo budget alert, chọn Attach option. 
  * Nếu đặt mặc định option No, hệ thống không chặn tạo resource mới khi đạt ngưỡng ngân sách.

![file](/img/migrated/image-1727168996714-d093ff1d.png)
  * Nếu chọn option Yes, khi các resource được chọn tại bước 1 đạt ngưỡng cảnh báo, hệ thống sẽ tự động chặn không cho phép tạo thêm resource Compute và Network (bao gồm: Instance/ VPC/ Storage/ Snapshot/ IP/ LB)

![file](/img/migrated/image-1727169010489-9c081e43.png) ![file](/img/migrated/image-1727169025409-df35c1e8.png)
**Lưu ý:**
  * Mỗi bugdet chỉ được chọn Attach option ở 1 alert.
  * Cùng 1 Tenant/VP có nhiều budget và nhiều mốc alert được set attach option, alert nào cảnh báo trước thì sẽ chặn hành động tạo mới resource tại thời điểm cảnh báo đó.
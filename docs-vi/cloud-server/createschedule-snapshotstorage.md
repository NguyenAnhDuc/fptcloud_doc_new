---
id: "createschedule-snapshotstorage"
title: "Tạo lịch snapshot ổ đĩa"
description: "Tạo lịch tự động snapshot ổ đĩa theo tần suất Daily hoặc Weekly."
sidebar_label: "Tạo lịch snapshot ổ đĩa"
sidebar_position: 101
---

# Tạo lịch snapshot ổ đĩa

## Tạo lịch

1. Chọn **Compute Engine** → **Schedule Management**, chọn tab **Storage snapshot schedule**.

   [![Tab Storage snapshot schedule](/img/migrated/image-1766044844669-47ffb5e0.png)](/img/migrated/image-1766044844669-47ffb5e0.png)

2. Nhập thông tin:
   - **Name**: Tên lịch.
   - **Time**: Chọn thời gian (ít nhất 2h sau thời điểm hiện tại).
   - **Start date** / **End date** *(tùy chọn)*.
   - **Frequency**: Daily hoặc Weekly.
   - **Applied Storage**: Ổ đĩa gắn vào lịch.

   [![Hộp thoại Create Schedule](/img/migrated/image-1766044938913-12b00e98.png)](/img/migrated/image-1766044938913-12b00e98.png)

:::note
Mỗi ổ đĩa chỉ được gắn vào 1 lịch snapshot cùng lúc.
:::

3. Nhấn **Create Schedule**.

   [![Lịch đã tạo](/img/migrated/image-1766044968475-8510c5bd.png)](/img/migrated/image-1766044968475-8510c5bd.png)

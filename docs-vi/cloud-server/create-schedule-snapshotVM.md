---
id: "create-schedule-snapshotVM"
title: "Tạo lịch snapshot máy ảo"
description: "Tạo lịch tự động snapshot máy ảo theo tần suất Daily hoặc Weekly."
sidebar_label: "Tạo lịch snapshot máy ảo"
sidebar_position: 96
---

# Tạo lịch snapshot máy ảo

## Tạo lịch

1. Chọn **Compute Engine** → **Schedule Management**, chọn tab **Instance snapshot schedule**.

   [![Tab Instance snapshot schedule](/img/migrated/image-1766044251626-e224453b.png)](/img/migrated/image-1766044251626-e224453b.png)

2. Nhập thông tin:
   - **Name**: Tên lịch.
   - **Time**: Chọn thời gian (ít nhất 2h sau thời điểm hiện tại).
   - **Start date** *(tùy chọn)*: Ngày bắt đầu.
   - **End date** *(tùy chọn)*: Ngày kết thúc.
   - **Frequency**: Daily (hàng ngày) hoặc Weekly (chọn ngày trong tuần).
   - **Applied Instance**: Máy ảo gắn vào lịch.

   [![Hộp thoại Create Schedule](/img/migrated/image-1766044359045-49bb8a07.png)](/img/migrated/image-1766044359045-49bb8a07.png)

:::note
Mỗi máy ảo chỉ được gắn vào 1 lịch snapshot cùng lúc.
:::

3. Nhấn **Create Schedule**.

   [![Lịch đã tạo](/img/migrated/image-1766044391396-79f5a3e3.png)](/img/migrated/image-1766044391396-79f5a3e3.png)

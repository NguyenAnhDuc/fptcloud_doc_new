---
id: "tutorials-backup-may-chu-voi-snapshot"
title: "Backup máy chủ với Snapshot"
description: "Tạo, quản lý và khôi phục Snapshot cho máy ảo và Storage Disk trên FPT Cloud Server."
sidebar_label: "Backup máy chủ với Snapshot"
sidebar_position: 18
---

# Backup máy chủ với Snapshot

Snapshot chụp nhanh hiện trạng máy ảo tại một thời điểm cụ thể — giúp bạn khôi phục hệ thống khi gặp sự cố hoặc mất dữ liệu.

:::tip
Nếu cần lưu trữ định kỳ ở nhiều thời điểm, hãy tham khảo dịch vụ FPT Backup.
:::

## Snapshot từ máy ảo

### Tạo Snapshot

1. Tại **Instance Management**, chọn **Actions** → **Snapshot** → **Create snapshot**.

   [![Menu Actions với tùy chọn Create snapshot](/img/migrated/image-1712656669900-805aff75.png)](/img/migrated/image-1712656669900-805aff75.png)

2. Hộp thoại **Create instance snapshot** hiển thị. Nhấn **Create snapshot**.

   [![Hộp thoại Create instance snapshot](/img/migrated/image-1734595203830-4982aec6.png)](/img/migrated/image-1734595203830-4982aec6.png)

Snapshot hiển thị tại màn hình **Snapshots**.

[![Snapshot đã tạo thành công](/img/migrated/image-1734595376651-974ca75e.png)](/img/migrated/image-1734595376651-974ca75e.png)

### Tạo máy ảo từ Snapshot

1. Tại **Snapshot**, chọn **Actions** → **Launch as Instance**.

   [![Menu Actions với tùy chọn Launch as Instance](/img/migrated/image-1734595412087-f0bc6c13.png)](/img/migrated/image-1734595412087-f0bc6c13.png)

2. Hộp thoại **Create instance** từ Snapshot hiển thị. Cấu hình và nhấn **Create**.

   [![Hộp thoại Create instance từ Snapshot](/img/migrated/image-1712653436496-23f6c725.png)](/img/migrated/image-1712653436496-23f6c725.png)

Máy ảo mới hiển thị tại **Instance Management**.

[![Máy ảo tạo từ Snapshot](/img/migrated/image-1734595491154-0444976f.png)](/img/migrated/image-1734595491154-0444976f.png)

### Xóa Snapshot

1. Tại **Snapshot**, chọn **Actions** → **Delete Image**.

   [![Menu Actions với tùy chọn Delete Image](/img/migrated/image-1734595518655-0f965a42.png)](/img/migrated/image-1734595518655-0f965a42.png)

2. Nhấn **Delete snapshot** để xác nhận. Tích chọn **Delete all volume snapshots attached to this image** nếu muốn xóa cả snapshot từ storage disk gắn trong máy ảo.

   [![Hộp thoại xác nhận xóa Snapshot](/img/migrated/image-1712653461557-c3a5551d.png)](/img/migrated/image-1712653461557-c3a5551d.png)

## Snapshot từ Storage Disk

### Tạo Snapshot

1. Tại **Storage Disk**, chọn **Actions** → **Snapshot** → **Create volume snapshot**.

   [![Menu Actions với tùy chọn Create volume snapshot](/img/migrated/image-1734595578696-e2a9d562.png)](/img/migrated/image-1734595578696-e2a9d562.png)

2. Nhấn **Create volume snapshot**.

   [![Hộp thoại Create volume snapshot](/img/migrated/image-1744797304260-c56185cf.png)](/img/migrated/image-1744797304260-c56185cf.png)

Snapshot hiển thị tại **Snapshots** trong phần **Storage snapshot**.

[![Storage snapshot đã tạo](/img/migrated/image-1734595691770-9cda8337.png)](/img/migrated/image-1734595691770-9cda8337.png)

### Tạo Storage Disk từ Snapshot

1. Tại **Snapshot**, chọn **Actions** → **Create storage disk**.

   [![Menu Actions với tùy chọn Create storage disk](/img/migrated/image-1734595729279-9bdc6a8e.png)](/img/migrated/image-1734595729279-9bdc6a8e.png)

2. Nhấn **Create storage disk**.

   [![Hộp thoại Create storage disk](/img/migrated/image-1712653495975-03166cff.png)](/img/migrated/image-1712653495975-03166cff.png)

### Xóa Snapshot từ Storage Disk

1. Tại **Snapshot**, chọn **Actions** → **Delete Snapshot**.

   [![Menu Actions với tùy chọn Delete Snapshot](/img/migrated/image-1734595780158-c6454938.png)](/img/migrated/image-1734595780158-c6454938.png)

2. Nhấn **Delete snapshot**.

   [![Hộp thoại xác nhận xóa Storage snapshot](/img/migrated/image-1712653549274-050d524e.png)](/img/migrated/image-1712653549274-050d524e.png)

## Snapshot cho dịch vụ Specific

### Tạo Snapshot

1. Tại **Instance Management**, chọn **Actions** → **Create snapshot**.

   [![Menu Actions với tùy chọn Create snapshot (Specific)](/img/migrated/image-1734595898541-1f53740c.png)](/img/migrated/image-1734595898541-1f53740c.png)

2. Nhấn **Create** để xác nhận.

   [![Hộp thoại xác nhận tạo Snapshot](/img/migrated/image-1712818258855-797847d8.png)](/img/migrated/image-1712818258855-797847d8.png)

:::note
Mỗi Instance chỉ lưu 1 Snapshot. Snapshot mới sẽ ghi đè lên Snapshot cũ. Quá trình tạo mất khoảng 30 phút tùy dòng máy và dữ liệu.
:::

### Khôi phục máy ảo từ Snapshot

1. Tại **Instance Management**, chọn **Actions** → **Restore snapshot**.

   [![Menu Actions với tùy chọn Restore snapshot](/img/migrated/image-1734596025787-1725e2ff.png)](/img/migrated/image-1734596025787-1725e2ff.png)

2. Nhấn **Restore instance** để xác nhận.

   [![Hộp thoại xác nhận Restore](/img/migrated/image-1712818286728-db082ce3.png)](/img/migrated/image-1712818286728-db082ce3.png)

:::warning
Trong quá trình khôi phục (khoảng 30 phút), máy ảo có thể tạm tắt và bạn không thể thao tác cho đến khi hoàn tất.
:::

### Xóa Snapshot (Specific)

1. Tại **Instance Management**, chọn **Actions** → **Delete snapshot**.

   [![Menu Actions với tùy chọn Delete snapshot](/img/migrated/image-1734596064066-5bcf4544.png)](/img/migrated/image-1734596064066-5bcf4544.png)

2. Nhấn **Delete snapshot**.

   [![Hộp thoại xác nhận xóa Snapshot](/img/migrated/image-1712818777331-c575dc0c.png)](/img/migrated/image-1712818777331-c575dc0c.png)

:::danger
Snapshot đã xóa không thể khôi phục lại.
:::

## Bước tiếp theo

- [Xóa máy ảo](./tutorials-xoa-may-ao.md)

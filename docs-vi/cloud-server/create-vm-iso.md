---
id: "create-vm-iso"
title: "Lưu ý khi tạo máy ảo từ file ISO"
description: "Các lưu ý quan trọng khi tạo máy ảo từ file ISO trên FPT Cloud Server."
sidebar_label: "Lưu ý khi tạo máy ảo từ file ISO"
sidebar_position: 4
pagination_next: null
---

# Lưu ý khi tạo máy ảo từ file ISO

FPT Cloud Server hỗ trợ tạo máy ảo từ file ISO, cho phép bạn cài đặt hệ điều hành tùy chỉnh. Dưới đây là các lưu ý quan trọng để đảm bảo quá trình tạo máy ảo thành công.

## Lưu ý khi tạo máy ảo từ file ISO

- Khi tạo máy ảo từ file ISO, hệ thống tự động tạo thêm một ổ đĩa boot cho ổ Root. Không xóa ổ đĩa này trong khi đang tạo máy ảo.
- Dung lượng ổ đĩa trống phải bằng hoặc lớn hơn dung lượng file ISO. Hệ thống làm tròn đến hàng đơn vị (ví dụ: file 0.5 GB cần 1 GB, file 1.5 GB cần 2 GB).

:::warning
Sau khi tạo máy thành công, hãy xóa ổ đĩa boot tạm. Cần un-mount ổ đĩa khỏi máy ảo trước khi xóa.
:::

## Hỗ trợ disk bus SATA cho ổ Root

Hệ thống mặc định sử dụng disk bus **Virtio** cho ổ Root. Nếu file ISO không tương thích với Virtio, chọn checkbox **SATA** để chuyển sang chế độ SATA.

[![Tùy chọn disk bus SATA khi tạo máy ảo từ ISO](/img/migrated/image-1724300919876-13e63751.png)](/img/migrated/image-1724300919876-13e63751.png)

:::note
Disk bus SATA có thể làm giảm hiệu suất ổ đĩa. Chỉ sử dụng khi file ISO không tương thích với Virtio.
:::

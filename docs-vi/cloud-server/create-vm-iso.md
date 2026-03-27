---
id: "create-vm-iso"
title: "Lưu ý khi tạo máy ảo từ file iso"
description: "Hiện tại hệ thống Unify Portal hỗ trợ khách hàng tạo máy ảo từ file ISO"
sidebar_label: "Lưu ý khi tạo máy ảo từ file iso"
sidebar_position: 4
---

# Create Vm Iso

Hiện tại hệ thống Unify Portal hỗ trợ khách hàng tạo máy ảo từ file ISO 
**1) Các lưu ý khi tạo máy ảo từ file ISO**
  * Khi tạo máy ảo từ file ISO, hệ thống sẽ tự động tạo thêm một ổ đĩa để boot cho ổ Root, không xóa ổ đĩa này khi đang tạo máy ảo. 
  * Người dùng cần để trống dung lượng ổ đĩa tối thiểu bằng hoặc lớn hơn dung lượng file ISO, hệ thống sẽ làm tròn đến hàng đơn vị (Ví dụ: file 0.5 GB -> cần 1GB, file 1.5 GB -> cần 2 GB, file 2 GB cần tối thiểu 2 GB)

**Lưu ý: Xóa ổ đĩa tạm sau khi tạo máy từ file ISO**
  * Người dùng xóa ổ đĩa boot sau khi đã tạo máy thành công. (cần Un-mount ổ đĩa khỏi máy ảo trước khi xóa)

**2) Hỗ trợ tính năng sử dụng disk bus SATA cho ổ Root**
  * Hệ thống mặc định sử dụng disk bus Virtio cho ổ Root. Tuy nhiên, đối với một số file ISO cũ không được Virtio hỗ trợ, người dùng cần chuyển sang chế độ SATA bằng cách chọn vào ô checkbox tương ứng. 
  * Lưu ý rằng việc sử dụng disk bus SATA có thể làm giảm hiệu suất của ổ đĩa, vì vậy chỉ nên sử dụng tính năng này khi file ISO của bạn không tương thích với Virtio. Vui lòng tham khảo hướng dẫn từ nhà sản xuất để chọn chế độ phù hợp.
[![file](/img/migrated/image-1724300919876-13e63751.png)](/img/migrated/image-1724300919876-13e63751.png)
---
id: "quick-starts-tao-mot-may-ao"
title: "Tạo một máy ảo"
description: "Khởi tạo máy ảo mới trên FPT Cloud Server với cấu hình CPU, RAM, Storage và Network theo nhu cầu."
sidebar_label: "Tạo một máy ảo"
sidebar_position: 3
---

# Tạo một máy ảo

Khởi tạo máy ảo (Instance) giúp bạn triển khai workload trên cloud nhanh chóng — chọn cấu hình phù hợp với nhu cầu từ ứng dụng web đến machine learning.

## Điều kiện tiên quyết

- ✅ Đã hoàn thành [Thiết lập ban đầu](./Initial-Setup.md).
- ✅ Có Subnet đang hoạt động trong VPC.

## Tạo máy ảo

1. Chọn **Compute Engine** → **Instance Management** từ menu, nhấn **Create instance**.

   [![Màn hình Instance Management với nút Create instance](/img/migrated/image-1712739862804-d5b7552c.png)](/img/migrated/image-1712739862804-d5b7552c.png)

   Hộp thoại tạo máy ảo hiển thị.

   [![Hộp thoại Create instance](/img/migrated/Userguide-FPT-Cloud-Server-2022-18-1024x-f0c8f0c9.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-18-1024x-f0c8f0c9.png)

2. Cấu hình máy ảo theo các mục sau:

### Configuration

- **Instance Type**: Chọn dòng máy phù hợp — **General** cho nhu cầu cơ bản, **GPU** cho nhu cầu hiệu suất cao.

  [![Chọn Instance Type](/img/migrated/image-1724657781979-ab2ee565.png)](/img/migrated/image-1724657781979-ab2ee565.png)

- **Image**: Chọn OS phù hợp. Mỗi nhóm OS có nhiều phiên bản. Bạn cũng có thể tạo máy ảo từ Custom Image, ISO hoặc Snapshot.

  [![Chọn Image cho General](/img/migrated/image-1724661980458-423745c9.png)](/img/migrated/image-1724661980458-423745c9.png)

- **Resource type**: Chọn cấu hình CPU, RAM hoặc tạo cấu hình tùy chọn.

  [![Chọn Resource type](/img/migrated/image-1724662047559-1be6927b.png)](/img/migrated/image-1724662047559-1be6927b.png)

### Storage Disk

- **Storage Policy**: Chọn loại storage.
- **Size**: Chọn kích thước ổ đĩa.

  [![Cấu hình Storage](/img/migrated/image-1724662063044-c293e47c.png)](/img/migrated/image-1724662063044-c293e47c.png)

### Network

- **Subnet** và **Private IP**: Chọn network cho máy ảo. Có thể nhập Private IP hoặc để hệ thống tự sinh.
- **Security Group** *(tùy chọn)*: Chọn Security Group kiểm soát traffic.

  [![Cấu hình Network](/img/migrated/image-1724662077573-14ea2c24.png)](/img/migrated/image-1724662077573-14ea2c24.png)

### Authentication

- **SSH Key**: Hệ thống chọn SSH Key mới nhất (có thể thay đổi).

  [![Chọn SSH Key](/img/migrated/image-1724662090638-f8be1084.png)](/img/migrated/image-1724662090638-f8be1084.png)

- **Password**: Nếu chọn phương thức Standard, cần ghi nhớ và bảo mật mật khẩu.

  [![Nhập Password](/img/migrated/image-1724662104611-d3e63623.png)](/img/migrated/image-1724662104611-d3e63623.png)

### Advanced

  [![Cấu hình Advanced](/img/migrated/image-1724662116137-16450e30.png)](/img/migrated/image-1724662116137-16450e30.png)

- **Instance group** *(tùy chọn)*: Chọn để cấu hình vị trí đặt máy ảo trên host vật lý.
- **Tên instance**: Nhập tên máy ảo — đây cũng là hostname của máy ảo.
- **User data** *(tùy chọn)*: Chứa cloud-init script để tự động cấu hình khi khởi động.

3. Nhấn **Create Instance**.

   [![Xác nhận tạo Instance](/img/migrated/image-1724664453215-c36b4dde.png)](/img/migrated/image-1724664453215-c36b4dde.png)

Máy ảo mới hiển thị trên bảng quản trị với thông tin tên, cấu hình (RAM, CPU, Storage), IP address và trạng thái hoạt động.

[![Danh sách Instance sau khi tạo](/img/migrated/Userguide-FPT-Cloud-Server-2022-21-1024x-e04e8c2e.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-21-1024x-e04e8c2e.png)

## Bước tiếp theo

- [Lưu ý khi tạo máy ảo từ file ISO](./create-vm-iso.md)
- [Kết nối vào máy ảo Windows](./tutorials-ket-noi-vao-may-ao-windows.md)
- [Kết nối vào máy ảo Linux](./tutorials-ket-noi-vao-may-ao-linux.md)

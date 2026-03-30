---
id: "tutorials-khoi-tao-mot-may-ao-moi"
title: "Khởi tạo một máy ảo mới"
description: "Hướng dẫn chi tiết khởi tạo máy ảo mới trên FPT Cloud Server với đầy đủ cấu hình."
sidebar_label: "Khởi tạo một máy ảo mới"
sidebar_position: 11
---

# Khởi tạo một máy ảo mới

Hướng dẫn chi tiết từng bước khởi tạo máy ảo mới trên FPT Cloud Server — bao gồm cấu hình Instance Type, Image, Storage, Network và Authentication.

## Điều kiện tiên quyết

- ✅ Đã hoàn thành [Thiết lập ban đầu](./Initial-Setup.md).
- ✅ Có Subnet đang hoạt động trong VPC.

## Tạo máy ảo

1. Chọn **Compute Engine** → **Instance Management** từ menu, nhấn **Create instance**.

   [![Màn hình Instance Management](/img/migrated/Screenshot_19-1024x464-45a4bfd7.png)](/img/migrated/Screenshot_19-1024x464-45a4bfd7.png)

2. Cấu hình máy ảo:
   - **Instance Type**: Chọn **General** (nhu cầu cơ bản) hoặc **GPU** (hiệu suất cao, Machine Learning).
   - **Image**: Chọn OS phù hợp. Bạn có thể upload file ISO hoặc tạo từ template đã có.
   - **Resource type**: Chọn cấu hình CPU, RAM hoặc tạo cấu hình tùy chọn.
   - **Storage**: Chọn **Storage Policy** (loại storage) và **Size** (kích thước).
   - **Instance group** *(tùy chọn)*: Cấu hình vị trí đặt máy ảo trên host vật lý.
   - **Subnet** và **Private IP**: Chọn network cho máy ảo. Có thể nhập Private IP hoặc để hệ thống tự sinh.
   - **Security Group** *(tùy chọn)*: Chọn Security Group kiểm soát traffic.
   - **Tên instance**: Nhập tên máy ảo — đây cũng là hostname.
   - **Authentication type**: Chọn **SSH Key** hoặc **Standard** (Password).
   - **User data** *(tùy chọn)*: Chứa [cloud-init script](https://cloudinit.readthedocs.io/en/latest/reference/examples.html) để tự động cấu hình khi khởi động.

   [![Hộp thoại Create instance](/img/migrated/Screenshot_20-1-1024x546-bf37ac18.png)](/img/migrated/Screenshot_20-1-1024x546-bf37ac18.png)

   [![Cấu hình Network và Authentication](/img/migrated/Screenshot_21-1-1024x676-96e3971b.png)](/img/migrated/Screenshot_21-1-1024x676-96e3971b.png)

   [![Cấu hình Advanced](/img/migrated/Screenshot_22-1-1024x537-9a27a8d4.png)](/img/migrated/Screenshot_22-1-1024x537-9a27a8d4.png)

**Cloud-init script mẫu cho Linux:**

```yaml
#cloud-config
users:
- name: testcloudinit
  sudo: ALL=(ALL) NOPASSWD:ALL
  lock_passwd: false
  shell: /bin/bash
  passwd: $6$rounds=4096$V6anciWl30$xKbcljqks1gUkMiM80pyKzhvyhn7U1n.jXcGCUfkUlX.rnllUWKUrmDEzekhhhP8aERSylRuC7gfDhJ32Xv0A1
- name: testcloudinit2
  groups: sudo
  lock_passwd: false
  shell: /bin/bash
  plain_text_passwd: abc@123Abc123
- hostname: testcloudinit
```

**Cloud-init script mẫu cho Windows:**

```yaml
#cloud-config
users:
- name: testcloudinit
  primary_group: Administrators
  groups: Administrators
  passwd: abc@123Abc123
```

:::note
Nếu máy ảo khởi tạo bằng Windows, cần reboot lại để khởi chạy các script từ cloud-init.
:::

3. Nhấn **Create Instance**.

   [![Xác nhận tạo Instance](/img/migrated/Screenshot_24-1-1024x656-a594dc63.png)](/img/migrated/Screenshot_24-1-1024x656-a594dc63.png)

Máy ảo mới hiển thị trên bảng quản trị với thông tin tên, cấu hình, IP address và trạng thái.

[![Danh sách Instance sau khi tạo](/img/migrated/Screenshot_25-1024x522-c45b80c7.png)](/img/migrated/Screenshot_25-1024x522-c45b80c7.png)

## Bước tiếp theo

- [Lưu ý khi tạo máy ảo từ file ISO](./create-vm-iso.md)
- [Kết nối vào máy ảo Windows](./tutorials-ket-noi-vao-may-ao-windows.md)
- [Kết nối vào máy ảo Linux](./tutorials-ket-noi-vao-may-ao-linux.md)

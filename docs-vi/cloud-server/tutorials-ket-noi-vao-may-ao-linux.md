---
id: "tutorials-ket-noi-vao-may-ao-linux"
title: "Kết nối vào máy ảo Linux"
description: "Kết nối vào máy ảo Linux qua Web Console, SSH Client hoặc PuTTY/Bitvise."
sidebar_label: "Kết nối vào máy ảo Linux"
sidebar_position: 13
---

# Kết nối vào máy ảo Linux

Khi máy ảo Linux (Ubuntu, CentOS, Debian) được tạo thành công, bạn có thể truy cập qua **Web Console** (mặc định) hoặc **SSH Client** / **PuTTY** / **Bitvise** (nếu máy ảo có Floating IP).

## Kết nối bằng Web Console

Web Console hỗ trợ điều khiển tất cả máy ảo Linux trên FPT Cloud, kể cả máy chưa có Public IP.

1. Tại **Instance Management**, chọn máy ảo cần kết nối, nhấn **Actions** → **Console**.

   [![Menu Actions với tùy chọn Console](/img/migrated/Userguide-FPT-Cloud-Server-2022-22-1024x-8e9a3fe1.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-22-1024x-8e9a3fe1.png)

Trình duyệt mở cửa sổ mới chứa màn hình máy chủ.

[![Màn hình Web Console Linux](/img/migrated/Userguide-FPT-Cloud-Server-2022-28-6638a596.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-28-6638a596.png)

## Cấu hình kết nối từ xa qua SSH

Để kết nối bằng SSH Client, máy ảo cần có **Floating IP** và đã mở **port SSH** qua Security Group.

1. Khởi tạo máy ảo Linux, gắn **Floating IP** và khởi chạy.

   [![Máy ảo Linux với Floating IP](/img/migrated/Userguide-FPT-Cloud-Server-2022-29-1024x-5490201f.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-29-1024x-5490201f.png)

2. Gắn **Security Group** đã mở port SSH vào máy ảo.

   [![Security Group với port SSH](/img/migrated/image-1744794012514-cdf8c2ce.png)](/img/migrated/image-1744794012514-cdf8c2ce.png)

3. Kết nối bằng SSH Client với **Floating IP**, **Port SSH**, file **SSH Key** hoặc **Password**.

## Kết nối bằng SSH Client (CMD/PowerShell)

1. Mở **CMD** hoặc **PowerShell** trên Windows.

2. Kết nối bằng Password:

   ```bash
   ssh <USERNAME>@<FLOATING_IP>
   ```

   [![Kết nối SSH bằng Password](/img/migrated/Userguide-FPT-Cloud-Server-2022-32-88cbc1e0.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-32-88cbc1e0.png)

   Kết nối bằng SSH Key:

   ```bash
   cd <ĐƯỜNG_DẪN_THƯ_MỤC_CHỨA_FILE_PEM>
   ssh -i "<TÊN_FILE_KEY>" <USERNAME>@<FLOATING_IP>
   ```

   [![Di chuyển đến thư mục chứa SSH Key](/img/migrated/Userguide-FPT-Cloud-Server-2022-33-bf7c47a3.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-33-bf7c47a3.png)

3. Nếu lần đầu kết nối, nhập **yes** khi được nhắc xác minh Host fingerprint.

   [![Xác minh Host fingerprint](/img/migrated/Userguide-FPT-Cloud-Server-2022-34-2185365d.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-34-2185365d.png)

Kết nối thành công.

[![Kết nối SSH thành công](/img/migrated/Userguide-FPT-Cloud-Server-2022-35-35e7f42a.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-35-35e7f42a.png)

:::tip
Nếu gặp lỗi **WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!**, xóa Host fingerprint đã lưu:

```bash
ssh-keygen -R "<FLOATING_IP>"
```
:::

## Bước tiếp theo

- [Gắn thêm card mạng (NIC) vào máy ảo](./attach-a-network-card-to-the-virtual-machine.md)

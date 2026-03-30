---
id: "tutorials-ket-noi-vao-may-ao-windows"
title: "Kết nối vào máy ảo Windows"
description: "Kết nối vào máy ảo Windows qua Web Console hoặc Remote Desktop Connection (RDC)."
sidebar_label: "Kết nối vào máy ảo Windows"
sidebar_position: 12
---

# Kết nối vào máy ảo Windows

Khi máy ảo Windows được tạo thành công, bạn có thể truy cập qua **Web Console** (mặc định) hoặc **Remote Desktop Connection** (nếu máy ảo có Floating IP).

## Kết nối bằng Web Console

Web Console hỗ trợ điều khiển tất cả máy ảo Windows trên FPT Cloud, kể cả máy chưa có Public IP.

1. Tại **Instance Management**, chọn máy ảo cần kết nối, nhấn **Actions** → **Console**.

   [![Menu Actions với tùy chọn Console](/img/migrated/Userguide-FPT-Cloud-Server-2022-22-1024x-8e9a3fe1.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-22-1024x-8e9a3fe1.png)

Trình duyệt mở cửa sổ mới chứa màn hình máy chủ, bạn có thể toàn quyền điều khiển từ đây.

[![Màn hình Web Console Windows](/img/migrated/Userguide-FPT-Cloud-Server-2022-23-297x3-27ea7392.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-23-297x3-27ea7392.png)

## Kết nối bằng Remote Desktop Connection

Để sử dụng RDC, máy ảo cần có **Floating IP** và đã mở **port 3389** cho RDP Connection qua Security Group.

1. Khởi tạo máy ảo Windows, gắn **Floating IP** và khởi chạy.

   [![Máy ảo Windows với Floating IP](/img/migrated/Userguide-FPT-Cloud-Server-2022-24-1024x-d7f8ec18.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-24-1024x-d7f8ec18.png)

2. Gắn **Security Group** đã mở port RDP 3389 vào máy ảo.

   [![Security Group với port RDP 3389](/img/migrated/Userguide-FPT-Cloud-Server-2022-26-1024x-d2598fa0.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-26-1024x-d2598fa0.png)

3. Kết nối bằng Remote Desktop Connection với Floating IP và port 3389.

   [![Kết nối Remote Desktop Connection](/img/migrated/Userguide-FPT-Cloud-Server-2022-27-258x3-461bd875.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-27-258x3-461bd875.png)

:::tip
Nếu không thể kết nối, kiểm tra: máy ảo đã bật chưa, Floating IP có chính xác không, port 3389 đã mở trong Security Group chưa.
:::

## Bước tiếp theo

- [Kết nối vào máy ảo Linux](./tutorials-ket-noi-vao-may-ao-linux.md)

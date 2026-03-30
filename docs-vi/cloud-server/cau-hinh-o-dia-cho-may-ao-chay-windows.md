---
id: "cau-hinh-o-dia-cho-may-ao-chay-windows"
title: "Cấu hình ổ đĩa cho máy ảo chạy Windows"
description: "Cấu hình ổ đĩa Storage Disk sau khi gắn vào máy ảo Windows."
sidebar_label: "Cấu hình ổ đĩa cho máy ảo chạy Windows"
sidebar_position: 37
---

# Cấu hình ổ đĩa cho máy ảo chạy Windows

Sau khi gắn Storage Disk vào máy ảo trên FPT Cloud Portal, máy Linux tự động nhận ổ đĩa mới. Với máy Windows, bạn cần cấu hình thủ công trong Disk Management.

## Cấu hình ổ đĩa

1. Truy cập vào máy ảo Windows.

2. Mở **Disk Management**: nhấn **Windows + R**, nhập `diskmgmt.msc` và nhấn **Enter**.

   [![Mở Disk Management](/img/migrated/Userguide-FPT-Cloud-Server-2022-62-12b5cc80.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-62-12b5cc80.png)

3. Disk Management hiển thị ổ cứng mới với trạng thái **Offline**.

   [![Ổ cứng mới trạng thái Offline](/img/migrated/Userguide-FPT-Cloud-Server-2022-63-8bb2c4a2.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-63-8bb2c4a2.png)

4. Chuột phải lên biểu tượng đĩa, chọn **Online**.

   [![Chọn Online cho ổ đĩa](/img/migrated/Userguide-FPT-Cloud-Server-2022-64-9b1d70d8.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-64-9b1d70d8.png)

5. Ổ cứng chuyển sang **Online** và **Not Initialized**. Chuột phải và chọn **Initialize Disk**.

   [![Chọn Initialize Disk](/img/migrated/Userguide-FPT-Cloud-Server-2022-65-e709db22.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-65-e709db22.png)

6. Chọn **Partition style** phù hợp, nhấn **OK**.

   [![Chọn Partition style](/img/migrated/Userguide-FPT-Cloud-Server-2022-66-9e4f3cf7.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-66-9e4f3cf7.png)

7. Chuột phải lên vùng trống của ổ cứng, chọn **New Simple Volume**.

   [![Chọn New Simple Volume](/img/migrated/Userguide-FPT-Cloud-Server-2022-67-b8dd64a9.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-67-b8dd64a9.png)

8. Làm theo wizard: nhấn **Next**.

   [![New Simple Volume Wizard](/img/migrated/Userguide-FPT-Cloud-Server-2022-68-4a3afeda.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-68-4a3afeda.png)

9. Nhập dung lượng ổ đĩa tại **Simple volume size in MB**, nhấn **Next** và hoàn tất wizard.

Ổ đĩa mới sẵn sàng sử dụng trên máy ảo Windows.

## Bước tiếp theo

- [Gỡ Storage Disk khỏi máy ảo](./go-storage-disk-khoi-may-ao.md)

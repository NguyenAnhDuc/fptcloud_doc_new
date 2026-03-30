---
id: "nat-instance"
title: "NAT Instance"
description: "Cấu hình NAT Instance để các máy ảo trong mạng isolated truy cập internet."
sidebar_label: "NAT Instance"
sidebar_position: 54
---

# NAT Instance

NAT Instance hỗ trợ các máy ảo trong mạng cô lập (isolated network) truy cập internet — phục vụ cài đặt phần mềm hoặc kết nối về On-premise.

## Cài đặt NAT Instance

1. Tạo NAT Instance từ image do FCI cung cấp.

   [![Chọn NAT Instance image](/img/migrated/image-1719483610635-8c2b0ddb.png)](/img/migrated/image-1719483610635-8c2b0ddb.png)

   [![Cấu hình NAT Instance](/img/migrated/image-1744796146357-3f0ad3a4.png)](/img/migrated/image-1744796146357-3f0ad3a4.png)

:::warning
Trường Subnet cần chọn subnet có thể truy cập internet.
:::

   [![Chọn Subnet](/img/migrated/image-1744796019571-e2a7f4b2.png)](/img/migrated/image-1744796019571-e2a7f4b2.png)

2. Gắn **Floating IP** cho NAT Instance (bỏ qua nếu đã gắn khi khởi tạo).

   [![Gắn Floating IP](/img/migrated/image-1719483638728-722a763b.png)](/img/migrated/image-1719483638728-722a763b.png)

3. Cấu hình các máy ảo trong isolated network chuyển default gateway về NIC của NAT Instance.

:::note
Một NAT Instance có thể hỗ trợ tối đa 9 isolated network (ngoài primary NIC dùng cho routed network).
:::

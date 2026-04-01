---
id: "them-moi-stream-host"
title: "Thêm mới stream host"
description: "Hướng dẫn tạo stream host để chuyển tiếp lưu lượng TCP/UDP qua WAF Dashboard."
sidebar_label: "Thêm mới stream host"
sidebar_position: 18
---

# Thêm mới stream host

**Stream host** là tính năng của Nginx dùng để chuyển tiếp lưu lượng (traffic) TCP/UDP trực tiếp đến một máy tính khác trong mạng.

1. Chọn **Hosts** > **Streams** từ menu để mở màn hình quản lý stream host.

   [![Màn hình quản lý stream host](/img/migrated/Userguide-FPT-WAF-2022-29-1024x503-9a982ba9.png)](/img/migrated/Userguide-FPT-WAF-2022-29-1024x503-9a982ba9.png)

2. Chọn **Create Stream** để mở màn hình thêm mới và nhập thông tin:

   - **Incoming Port**
   - **Forward Host**
   - **Forward Port**

   Tính năng mở rộng tùy theo nhu cầu:
   - **TCP Forwarding**
   - **UDP Forwarding**

   [![Nhập thông tin stream host](/img/migrated/Userguide-FPT-WAF-2022-30-1024x502-e7c3ef10.png)](/img/migrated/Userguide-FPT-WAF-2022-30-1024x502-e7c3ef10.png)

3. Chọn **Create Stream** để tạo, hoặc **Create & Add Another** để tạo và tiếp tục thêm stream host khác.

   [![Chi tiết stream host sau khi tạo](/img/migrated/Userguide-FPT-WAF-2022-31-1024x504-c73172be.png)](/img/migrated/Userguide-FPT-WAF-2022-31-1024x504-c73172be.png)

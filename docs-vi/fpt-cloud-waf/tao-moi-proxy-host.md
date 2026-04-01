---
id: "tao-moi-proxy-host"
title: "Tạo mới proxy host"
description: "Hướng dẫn tạo proxy host mới trong WAF Dashboard để chuyển tiếp traffic qua WAF."
sidebar_label: "Tạo mới proxy host"
sidebar_position: 12
---

# Tạo mới proxy host

1. Trong **WAF Dashboard**, chọn **Hosts** > **Proxy**, sau đó chọn **Create Proxy**.

   [![Màn hình Proxy Host — tạo mới](/img/migrated/Userguide-FPT-WAF-2022-5-1024x538-0fdd5518.png)](/img/migrated/Userguide-FPT-WAF-2022-5-1024x538-0fdd5518.png)

2. Nhập các thông tin theo hướng dẫn:

   - **Source:**
     - **Hostname**: Nhập domain name.
     - **Port**: Mặc định là 80; nếu có SSL certificate thì chọn port 443.
   - **Destination:**
     - **Forward Scheme**: Chọn http hoặc https.
     - **Forward Hostname/IP**: Nhập IP Public hoặc Domain của Web Server. Nếu WAF và Web Server cùng subnet, có thể dùng IP Private.
     - **Forward Port**: Nhập port Web Server đang sử dụng.

   :::note
   Forward Port phải là port đã được mở kết nối trên Web Server.
   :::

   Một số tính năng mở rộng tùy theo nhu cầu:
   - **Cache Assets**
   - **Block Common Exploits**
   - **Websockets Support**

   Các trường bổ sung:
   - **Rule Set**: Mặc định áp dụng tập luật FPT Cloud WAF. Có thể chọn rule set tùy chỉnh đã tạo sẵn.
   - **Access List**: Chọn access list đã tạo để áp dụng cho proxy host.
   - **SSL Certificate**: Chọn SSL certificate tương ứng cho domain/website. Nếu chưa có, chọn **None**.

   [![Nhập thông tin proxy host](/img/migrated/Userguide-FPT-WAF-2022-6-1024x538-144ab6ab.png)](/img/migrated/Userguide-FPT-WAF-2022-6-1024x538-144ab6ab.png)

3. Chọn **Create Proxy** để tạo, hoặc **Create & Add Another** để tạo và tiếp tục thêm proxy host khác.

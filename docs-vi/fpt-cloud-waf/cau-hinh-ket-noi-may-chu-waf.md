---
id: "configure-waf-server-connection"
title: "Cấu hình kết nối máy chủ WAF"
description: "Hướng dẫn kết nối máy chủ WAF với Web Server, thêm proxy host và SSL certificate."
sidebar_label: "Cấu hình kết nối máy chủ WAF"
sidebar_position: 5
---

# Cấu hình kết nối máy chủ WAF

## Kết nối máy chủ WAF đến Web Server

- Nếu Web Server cùng thuộc một VPC với máy chủ WAF trên FPT Cloud, hãy đảm bảo Web Server thuộc Subnet của máy chủ WAF.
- Nếu Web Server nằm ngoài VPC của FPT Cloud, máy chủ WAF cần kết nối đến Web Server thông qua IP Public của Web Server đó.

## Thêm proxy host để chuyển tiếp request

1. Trong **WAF Dashboard**, chọn **Hosts** > **Proxy**, sau đó chọn **Create Proxy**.

   [![Màn hình Proxy Host — tạo mới](/img/migrated/Userguide-FPT-WAF-2022-5-1024x538-0fdd5518.png)](/img/migrated/Userguide-FPT-WAF-2022-5-1024x538-0fdd5518.png)

2. Nhập thông tin theo hướng dẫn:

   [![Nhập thông tin proxy host](/img/migrated/Userguide-FPT-WAF-2022-6-1024x538-144ab6ab.png)](/img/migrated/Userguide-FPT-WAF-2022-6-1024x538-144ab6ab.png)

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

   - **Security**: Chọn Default Rule (**CyWAF Rule**) để áp dụng tập luật tối ưu của FPT Cloud WAF.

## Thêm SSL certificate

1. Trong **WAF Dashboard**, chọn **SSL Certificates**, sau đó chọn **Create SSL Certificates**.

   [![Tạo SSL certificate — bước 1](/img/migrated/Userguide-FPT-WAF-2022-7-1024x538-743bb54d.png)](/img/migrated/Userguide-FPT-WAF-2022-7-1024x538-743bb54d.png)

2. Nhập các thông tin theo hướng dẫn ở phần [Quản lý SSL Certificates](quan-ly-ssl-certificates.md).

   [![Nhập thông tin SSL certificate](/img/migrated/Userguide-FPT-WAF-2022-8-1024x538-dac448e9.png)](/img/migrated/Userguide-FPT-WAF-2022-8-1024x538-dac448e9.png)

## Theo dõi Dashboard Overview

Sau khi kết nối thành công domain/website với máy chủ WAF, quay lại trang **Overview** để theo dõi trạng thái máy chủ WAF.

[![Dashboard Overview](/img/migrated/Userguide-FPT-WAF-2022-9-1024x538-d28bf827.png)](/img/migrated/Userguide-FPT-WAF-2022-9-1024x538-d28bf827.png)

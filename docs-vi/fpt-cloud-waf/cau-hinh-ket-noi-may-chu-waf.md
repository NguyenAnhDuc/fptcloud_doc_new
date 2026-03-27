---
id: "cau-hinh-ket-noi-may-chu-waf"
title: "Cấu hình kết nối máy chủ WAF"
description: "* Nếu Web Server của người dùng cùng thuộc 1 VPC với máy chủ WAF trên FPT Cloud, cần đảm bảo Web Server thuộc Subnet của"
sidebar_label: "Cấu hình kết nối máy chủ WAF"
sidebar_position: 5
---

# Cau Hinh Ket Noi May Chu Waf

## 1. Kết nối máy chủ WAF đến Web Server của người dùng
  * Nếu Web Server của người dùng cùng thuộc 1 VPC với máy chủ WAF trên FPT Cloud, cần đảm bảo Web Server thuộc Subnet của máy chủ WAF.
  * Nếu Web Server của người dùng nằm ngoài VPC của FPT Cloud thì máy chủ WAF cần kết nối được với Web Server thông qua IP Public của Web Server đó.

## 2. Thêm mới Proxy Host để forward request của end user đi qua máy chủ WAF đến Web Server
**Bước 1:** Ở **WAF Dashboard** , chọn **Hosts** > **Proxy**. Chọn **Creat Proxy.**
[![Userguide FPT WAF 2022 5](/img/migrated/Userguide-FPT-WAF-2022-5-1024x538-0fdd5518.png)](/img/migrated/Userguide-FPT-WAF-2022-5-1024x538-0fdd5518.png)
**Bước 2:** Nhập các thông tin theo hướng dẫn 
[![Userguide FPT WAF 2022 6](/img/migrated/Userguide-FPT-WAF-2022-6-1024x538-144ab6ab.png)](/img/migrated/Userguide-FPT-WAF-2022-6-1024x538-144ab6ab.png)
  * Nhập thông tin **Source** :
  *     * **Hostname** : Nhập domain name
    * **Port** : Mặc định là 80, nếu có SSL Certificate thì có thể chọn port 443
  * Nhập thông tin **Destination** :
  *     * **Forward Scheme** : Chọn http/https
    * **Forward Hostname/IP** : Nhập **IP** **Public** hoặc **Domain** của Web Server. Nếu WAF và Web Server cùng thuộc 1 subnet, bạn có thể dùng **IP Private.**
    * **Forward Port:** Nhập port của Web Server đang sử dụng
**Lưu ý:** Forward Port là port đã được mở kết nối trên Web Server 
  * **Security** chọn Default Rule ( **CyWAF Rule**) để áp dụng tập luật tối ưu của FPT Cloud WAF

## 3. Thêm mới SSL Certificate
**Bước 1:** Ở **WAF Dashboard** , chọn **SSL Certificates**. Chọn **Creat SSL Certificates.**
[![Userguide FPT WAF 2022 7](/img/migrated/Userguide-FPT-WAF-2022-7-1024x538-743bb54d.png)](/img/migrated/Userguide-FPT-WAF-2022-7-1024x538-743bb54d.png)
**Bước 2:** Nhập các thông tin theo hướng dẫn ở phần **Quản lý SSL Certificates**
[![Userguide FPT WAF 2022 8](/img/migrated/Userguide-FPT-WAF-2022-8-1024x538-dac448e9.png)](/img/migrated/Userguide-FPT-WAF-2022-8-1024x538-dac448e9.png)
## 4. Theo dõi Dashboard Overview
Sau khi kết nối thành công domain/website với máy chủ WAF, quản trị viên quay lại trang **Overview** để theo dõi trạng thái của máy chủ WAF 
[![Userguide FPT WAF 2022 9](/img/migrated/Userguide-FPT-WAF-2022-9-1024x538-d28bf827.png)](/img/migrated/Userguide-FPT-WAF-2022-9-1024x538-d28bf827.png)
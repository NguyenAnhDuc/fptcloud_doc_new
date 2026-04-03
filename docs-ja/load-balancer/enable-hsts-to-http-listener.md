---
id: "enable-hsts-to-http-listener"
title: "Enable HSTS to HTTPS Listener"
description: "HSTS (HTTP Strict Transport Security) là một chính sách bảo mật giúp ngăn chặn các cuộc tấn công man-in-the-middle"
sidebar_label: "Enable HSTS to HTTPS Listener"
sidebar_position: "17"
---

# Enable Hsts To Http Listener

**HSTS (HTTP Strict Transport Security)** là một chính sách bảo mật giúp ngăn chặn các cuộc tấn công "man-in-the-middle" bằng cách yêu cầu trình duyệt luôn sử dụng kết nối an toàn (HTTPS) khi giao tiếp với máy chủ. 
Tính năng **"Enable HSTS to HTTPS Listener"** của **FPT Load Balancer** cho ép bạn tăng cường bảo mật cho ứng dụng của mình bằng cách yêu cầu trình duyệt chỉ giao tiếp qua HTTPS. 
Người dùng **Enable HSTS** để sử dụng tính năng: 
  * **HSTS max age:** Nhập số nguyên, giới hạn 256 ký tự, không nhập số âm. Mặc định là 31536000. 

Thời lượng (tính bằng giây) trong đó HSTS policy sẽ được trình duyệt thực hiện. Giúp xác định trong bao lâu trình duyệt sẽ nhớ rằng một trang web chỉ được truy cập thông qua HTTPS. 
  * **Include Subdomain:** Cấu hình HSTS có apply cho tất cả các subdomain không hay chỉ apply cho domain này. 
  * **Preload:** Domain có được đưa vào danh sách preload của web browser hay không. 

Nhấn chọn **Create Listener** để tiến hành tạo hoặc **Cancel** để huỷ bỏ.

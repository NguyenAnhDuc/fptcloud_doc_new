---
id: "redirect-http-request-sang-https"
title: "Redirect Http Request Sang Https"
sidebar_label: "Redirect Http Request Sang Https"
sidebar_position: 15
---

Cấu hình redirect HTTP request sang HTTPS


Để bảo vệ dữ liệu và toàn vẹn, người dùng có thể lựa chọn việc redirect toàn bộ các lưu lượng **HTTP sang HTTPS** , người dùng làm theo hướng dẫn sau:

**Bước 1:** Tạo mới một **Listener** sử dụng giao thức **HTTP, port 80** sau đó, enable tính năng **Redirect HTTP to HTTPS** tại màn hình cấu hình **L7 policy** của **Listener** này, người dùng tham khảo cách tạo **Listener** **[tại đây.](<https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-listener> "tại đây.")**

> **Note:** **Listener HTTP, port 80** mới tạo không cần thiết phải gắn Server pool tương ứng, do đã enable redirect toàn bộ request **HTTP thành HTTPS**.

**Bước 2:** Tạo mới một **Listener** sử dụng **HTTPS, port 443** để xử lý các request HTTPS, gắn **Server pool** tương ứng và **SSL Certificate** cho **Listener** , người dùng tham khảo cách tạo **Listener** **[tại đây.](<https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-listener> "tại đây.")** Nếu chưa có **SSL Certificate,** người dùng tham khảo cách tạo **[tại đây.](<https://fptcloud.com/documents/load-balancer/?doc=import-ssl-certificate-cho-load-balancer> "tại đây.")**

Kiểm tra truy cập **HTTP** đã tự động redirect sang **HTTPS**.

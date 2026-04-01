---
id: "redirect-http-request-sang-https"
title: "Cấu hình redirect HTTP request sang HTTPS"
description: "Để bảo vệ dữ liệu và toàn vẹn, người dùng có thể lựa chọn việc redirect toàn bộ các lưu lượng **HTTP sang HTTPS** , ngườ"
sidebar_label: "Cấu hình redirect HTTP request sang HTTPS"
sidebar_position: 15
---

# Redirect Http Request Sang Https

Để bảo vệ dữ liệu và toàn vẹn, người dùng có thể lựa chọn việc redirect toàn bộ các lưu lượng **HTTP sang HTTPS** , người dùng làm theo hướng dẫn sau:
> **Note:** **Listener HTTP, port 80** mới tạo không cần thiết phải gắn Server pool tương ứng, do đã enable redirect toàn bộ request **HTTP thành HTTPS**.
Kiểm tra truy cập **HTTP** đã tự động redirect sang **HTTPS**.
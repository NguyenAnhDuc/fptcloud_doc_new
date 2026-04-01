---
id: "docker-login"
title: "Docker Login"
description: "Đăng nhập vào FPT Container Registry từ Docker CLI."
sidebar_label: "Docker Login"
sidebar_position: 7
---

# Docker Login

Để push hoặc pull image từ FPT Container Registry, bạn cần xác thực Docker CLI với thông tin đăng nhập lấy từ FPT Portal.

1. Trên menu **FPT Portal**, chọn **Container Registry** > **Get Token** để lấy **Username** và **Secret**.

   [![Màn hình lấy token Container Registry](/img/migrated/Picture8-1-23a4563b.png)](/img/migrated/Picture8-1-23a4563b.png)

2. Di chuột vào icon **ⓘ** để xem câu lệnh login.

   [![Câu lệnh Docker Login](/img/migrated/Picture9-1-4bf5cdaf.png)](/img/migrated/Picture9-1-4bf5cdaf.png)

3. Sử dụng Docker CLI để đăng nhập với thông tin đã lấy từ Portal.

   [![Kết quả Docker Login thành công](/img/migrated/Picture10-1-aec1f1a9.png)](/img/migrated/Picture10-1-aec1f1a9.png)

   Ví dụ:

   ```bash
   docker login registry.fke.fptcloud.com
   ```

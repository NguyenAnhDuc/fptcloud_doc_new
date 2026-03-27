---
id: "huong-dan-tao-jobs-tren-jenkins-chay-tren-fpt-cloud-agent"
title: "Hướng dẫn tạo jobs trên Jenkins chạy trên FPT Cloud Agent"
description: "Tuỳ từng phiên bản của hệ thống Jenkins sẽ có các cách cấu hình khác nhau để phù hợp cho mỗi phiên bản."
sidebar_label: "Hướng dẫn tạo jobs trên Jenkins chạy trên FPT Cloud Agent"
sidebar_position: 23
---

# Huong Dan Tao Jobs Tren Jenkins Chay Tren Fpt Cloud Agent

Tuỳ từng phiên bản của hệ thống Jenkins sẽ có các cách cấu hình khác nhau để phù hợp cho mỗi phiên bản.
Từ phiên bản 2.451.0 do FPT Cloud cung cấp, để sử dụng kubenetes agent cần phải tạo folder và cấu hình agent có thể sử dụng cho folder. Đối với việc quản lý các dự án được triển khai CI/CD trên Jenkins, người dùng nên tạo folder cho từng dự án và cấu hình các service trong folder dự án, hành động này sẽ giúp người dùng có thể phân quyền cho user vào từng project và dễ dàng quản lý các project.
Để tạo một jobs jenkins cần các thông tin sau:
  * * **Label của agent:** [![](/img/migrated/Picture103-c115e03c.png)](/img/migrated/Picture103-c115e03c.png) Trong trường hợp người dùng tạo một job bình thường loại freestyle và cấu hình chạy trên agent của FPT Cloud sẽ báo lỗi như sau: [![](/img/migrated/Picture104-4ee62b2a.png)](/img/migrated/Picture104-4ee62b2a.png) Để có thể tạo job và chạy trên jenkins người dùng có thể thực hiện các bước như sau:

**Bước 1.** Tạo folder để quản lý các job trên Jenkins
***Trên Dashboard Jenkins > New Item: [![](/img/migrated/Picture105-46822182.png)](/img/migrated/Picture105-46822182.png)
***Tạo item dạng folder: [![](/img/migrated/Picture106-2d903e4d.png)](/img/migrated/Picture106-2d903e4d.png)
***Cấu hình kubenetes agent được sử dụng trong folder: [![](/img/migrated/Picture107-13b71bc6.png)](/img/migrated/Picture107-13b71bc6.png)
**Bước 2.** Tạo một job đơn giản chạy trên Jenkins:
* **Trong folder vừa tạo > Chọn **New item/ Create a job:** [![](/img/migrated/Picture108-8729b0b8.png)](/img/migrated/Picture108-8729b0b8.png)
***Tạo jobs loại Freestyle để cấu hình jobs: [![](/img/migrated/Picture110-c5cac842.png)](/img/migrated/Picture110-c5cac842.png)
***Nhập label agent chạy jobs: [![](/img/migrated/Picture111-e24ed221.png)](/img/migrated/Picture111-e24ed221.png)
***Cấu hình một execute shell để test jobs: [![](/img/migrated/Picture112-fd5e8c52.png)](/img/migrated/Picture112-fd5e8c52.png)
Cấu hình execute shell > Save jobs: [![](/img/migrated/Picture113-5be28d74.png)](/img/migrated/Picture113-5be28d74.png)
**Bước 3.** Chạy thử jobs jenkins đã tạo [![](/img/migrated/Picture114-a0689b0d.png)](/img/migrated/Picture114-a0689b0d.png) **Bước 4.** Kết quả chạy jobs [![](/img/migrated/Picture115-145b00f7.png)](/img/migrated/Picture115-145b00f7.png) Kết quả chạy jobs: [![](/img/migrated/Picture116-7605e149.png)](/img/migrated/Picture116-7605e149.png) [![](/img/migrated/Picture117-806d0758.png)](/img/migrated/Picture117-806d0758.png)
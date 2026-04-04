---
id: "initial-setup"
title: "Thiết lập ban đầu"
description: "Hướng dẫn thiết lập ban đầu trước khi sử dụng dịch vụ FPT Kubernetes Engine lần đầu tiên."
sidebar_label: "Thiết lập ban đầu"
sidebar_position: "2"
---

# Thiết lập ban đầu

Nếu đây là lần đầu tiên bạn sử dụng dịch vụ **FPT Kubernetes Engine**, hãy đảm bảo đã hoàn thành các bước sau:

### 1. Tạo tài khoản FPT Cloud và đăng nhập vào FPT Cloud Portal

Sau khi hoàn thành bước này, bạn có thể bắt đầu sử dụng dịch vụ **FPT Kubernetes Engine** trên FPT Cloud.
Để đăng ký tài khoản FPT Cloud, truy cập [FPT Cloud Portal](https://console.fptcloud.com).
Chọn nút **Sign Up** ở cuối trang và làm theo hướng dẫn để tạo tài khoản. Bộ phận hỗ trợ khách hàng sẽ liên hệ để xác minh thông tin và tạo tài khoản cho bạn.
Để đăng nhập vào FPT Cloud Portal, truy cập [FPT Cloud Portal](https://console.fptcloud.com).
Nhập email và mật khẩu, sau đó chọn **Sign In**. Tiếp theo, chọn đúng Tenant, Region và VPC.
Nếu gặp lỗi trong quá trình thực hiện, vui lòng liên hệ bộ phận Hỗ trợ để được trợ giúp ngay.

### 2. Tạo Subnet với Static Pool

Kubernetes Cluster chỉ hoạt động với **Subnet** có tùy chọn **Static Pool** được bật. Vì vậy, bạn cần tạo Subnet với Static Pool theo hướng dẫn sau:

**Bước 1:** Trong mục **Networking**, chọn tab **Subnets**.
[![](/img/migrated/1-d9b2ba73.png)](/img/migrated/1-d9b2ba73.png)

**Bước 2:** Chọn **Create** trên trang **Subnets Management**.
[![](/img/migrated/2-3cc44b36.png)](/img/migrated/2-3cc44b36.png)

**Bước 3:** Nhập các thông tin sau:
  * **Name:** Nhập tên dễ nhớ cho Subnet.
  * **CIDR:** Nhập CIDR hợp lệ.
  * Tích chọn tùy chọn **Advanced settings**.
  * **Static IP Pool:** Nhập dải IP hợp lệ thuộc CIDR đã nhập.

Chọn **Save** để tạo Subnet mới. Hệ thống sẽ xử lý yêu cầu và thông báo kết quả.
[![](/img/migrated/3-4d84255a.png)](/img/migrated/3-4d84255a.png)

### 3. Yêu cầu kích hoạt dịch vụ FKE và cấp phát quota tài nguyên

Nếu đây là lần đầu sử dụng FPT Cloud, một số dịch vụ có thể chưa được kích hoạt cho tài khoản của bạn. Liên hệ bộ phận hỗ trợ và cung cấp thông tin cấu hình mong muốn. Chúng tôi sẽ cấp phát tài nguyên cần thiết như RAM, CPU, Storage, Public IP, v.v. để bạn sử dụng dịch vụ FKE.

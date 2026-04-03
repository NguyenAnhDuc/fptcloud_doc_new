---
id: "initial-setup"
title: "Thiết lập ban đầu"
description: "Hướng dẫn thiết lập ban đầu trước khi sử dụng dịch vụ FPT Kubernetes Engine."
sidebar_label: "Thiết lập ban đầu"
sidebar_position: 2
---

# Thiết lập ban đầu

Nếu đây là lần đầu tiên bạn sử dụng FPT Kubernetes Engine, hãy kiểm tra và hoàn thành các bước sau trước khi bắt đầu.

## Tạo tài khoản FPT Cloud và đăng nhập vào FPT Portal

1. Truy cập trang chủ tại https://fptcloud.com/ và chọn **Sign Up**.
2. Nhập các thông tin theo hướng dẫn của hệ thống.
3. Liên hệ đội ngũ hỗ trợ để xác nhận thông tin và kích hoạt tài khoản.
4. Đăng nhập vào FPT Portal bằng tài khoản và mật khẩu đã được cấp.
5. Chọn đúng Tenant, Region và VPC.

:::note
Nếu không chắc chắn về các thông tin trên hoặc hệ thống phản hồi lỗi sau 3 lần thử, hãy liên hệ đội ngũ hỗ trợ để được tư vấn.
:::

## Tạo subnet với Static Pool

Kubernetes cluster chỉ hoạt động với subnet đã bật tùy chọn Static Pool. Thực hiện các bước sau để tạo subnet:

1. Ở phần **Networking**, chọn tab **Subnets**.
[![Userguide K8s 1](/img/migrated/Userguide-K8s-1-1024x520-cf033d8c.png)](/img/migrated/Userguide-K8s-1-1024x520-cf033d8c.png)
2. Chọn **Create** ở trang **Subnets Management**.
[![Userguide K8s 2](/img/migrated/Userguide-K8s-2-1024x202-6de849e4.png)](/img/migrated/Userguide-K8s-2-1024x202-6de849e4.png)
3. Nhập các thông tin sau:
   - **Name:** Nhập tên gợi nhớ của subnet.
   - **CIDR:** Nhập CIDR hợp lệ.
   - Tích chọn **Advanced settings**.
   - **Static IP Pool:** Nhập một dải IP hợp lệ được lấy từ CIDR.
4. Chọn **Save** để tạo subnet mới.
[![Userguide K8s 3](/img/migrated/Userguide-K8s-3-c5aca27b.png)](/img/migrated/Userguide-K8s-3-c5aca27b.png)

## Yêu cầu kích hoạt dịch vụ FKE và cấp quota tài nguyên

Nếu đây là lần đầu sử dụng FPT Cloud, một số dịch vụ có thể chưa được mở cho tài khoản của bạn. Hãy liên hệ với đội ngũ hỗ trợ và cung cấp thông tin về cấu hình mong muốn. FPT Cloud sẽ cấp các tài nguyên cần thiết như RAM, CPU, Storage, Public IP để bạn sử dụng dịch vụ FKE.

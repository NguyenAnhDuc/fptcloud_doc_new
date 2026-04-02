---
id: "initial-set-up"
title: "Thiết lập ban đầu"
description: "Các bước cần hoàn thành trước khi sử dụng Model Serving lần đầu tiên."
sidebar_label: "Thiết lập ban đầu"
sidebar_position: "3"
---

# Thiết lập ban đầu

**_Nếu đây là lần đầu tiên bạn sử dụng FPT Model Serving, hãy kiểm tra và hoàn thành các tác vụ sau:_**

  1. **Tạo tài khoản FPT Cloud và đăng nhập vào FPT Portal**

Để bắt đầu sử dụng FPT Model Serving, bạn cần đăng nhập vào FPT Portal.
Vui lòng truy cập [https://console.fptcloud.com](https://console.fptcloud.com) và đăng nhập bằng tài khoản và mật khẩu FPT Cloud đã được cung cấp. Đảm bảo chọn đúng Tenant, Region và VPC để sử dụng dịch vụ.
Nếu bạn chưa có tài khoản FPT Cloud, hãy truy cập trang chủ tại [https://fptcloud.com/](https://fptcloud.com/) và chọn chức năng "Đăng ký", sau đó nhập thông tin theo hướng dẫn của hệ thống. Đội ngũ hỗ trợ của chúng tôi sẽ liên hệ với bạn sớm để xác minh thông tin và tạo tài khoản.

  2. **Kích hoạt gói tài nguyên để bắt đầu sử dụng**

Sau khi đăng nhập thành công vào console.fptcloud.com, người dùng vào phần **AI Platform**, chọn **Active Service** và nhấn **Active**.

[![Alt text](/img/migrated/4-f5b92cfa.png)](/img/migrated/4-f5b92cfa.png)

  3. **Khởi tạo cụm Kubernetes (K8S) để serving**

Để sử dụng Model Serving, cần có một Kubernetes Cluster để cung cấp sức mạnh xử lý cho các mô hình AI.

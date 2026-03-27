---
id: "trien-khai-ung-dung-tren-worker-managed-gpu-cluster"
title: "Trien Khai Ung Dung Tren Worker Managed Gpu Cluster"
description: "Ollama là một công cụ mã nguồn mở cho phép chạy, quản lý và tùy chỉnh các mô hình ngôn ngữ lớn (LLMs) trên máy tính cá n"
sidebar_label: "Trien Khai Ung Dung..."
sidebar_position: 14
---

# Trien Khai Ung Dung Tren Worker Managed Gpu Cluster

Ollama là một công cụ mã nguồn mở cho phép chạy, quản lý và tùy chỉnh các mô hình ngôn ngữ lớn (LLMs) trên máy tính cá nhân hoặc server, hỗ trợ nhiều mô hình khác nhau như Llama, DeepSeek, Mistral,.... Open-WebUI là giao diện web mã nguồn mở được thiết kế đặc biệt để tương tác với Ollama, cung cấp trải nghiệm người dùng thân thiện và dễ dàng trong việc quản lý và sử dụng các mô hình LLM.
Tài liệu này sẽ hướng dẫn các bước triển khai mô hình DeepSeek-R1 lên FPT Managed GPU Cluster sử dụng Ollama và Open-WebUI để người dùng có thể sử dụng một cách đơn giản và dễ dàng.
**Bước 1** : Clone mã nguồn và script đã có của Open-WebUI

```
Copy> git clone https://github.com/open-webui/open-webui
> cd open-webui/kubernetes
```

**Bước 2** : Chạy các script để triển khai ollama và open-webui. Bên trong thư mục đã bao gồm tất cả các file cần thiết để triển khai như **namespace** , **ollama statefulSet** , **ollama service** , **open-webui deployment** và **open-webui service**.

```
Copy> cd kubernetes
> kubectl apply -f ./kubernetes/manifest
```

**Bước 3** : Truy cập vào open-webui trên trình duyệt tại port đã được forward, ví dụ: _<http://localhost:52433>_. Với lần đầu tiên cài đặt và sử dụng OpenWebUI, người dùng sẽ cần cấu hình các thông tin: tên, email, mật khẩu.
[![](/img/migrated/36-bb032555.png)](/img/migrated/36-bb032555.png)
**Bước 4** : Sau khi cài đặt xong, người dùng lựa chọn model để sử dụng. Ví dụ ở đây, ta sẽ cài đặt mô hình DeepSeek-R1, phiên bản **1.5b**.
[![](/img/migrated/37-51db1bb9.png)](/img/migrated/37-51db1bb9.png)
**Bước 5** : Sau khi mô hình đã được tải và chạy, người dùng có thể tương tác với mô hình rất đơn giản và trực quan thông qua giao diện.
[![](/img/migrated/38-b9243be2.png)](/img/migrated/38-b9243be2.png)
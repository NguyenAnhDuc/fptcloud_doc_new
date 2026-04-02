---
id: "Ollama と Open WebUI を使用した DeepSeek-R1 モデルのデプロイ"
title: "Triển khai mô hình DeepSeek-R1 bằng Ollama và Open WebUI"
description: "Hướng dẫn triển khai mô hình DeepSeek-R1 lên FPT Managed GPU Cluster bằng Ollama và Open WebUI"
sidebar_label: "Triển khai mô hình DeepSeek-R1..."
sidebar_position: 14
pagination_next: null
---

# Triển khai mô hình DeepSeek-R1 bằng Ollama và Open WebUI

Ollama là công cụ mã nguồn mở cho phép chạy, quản lý và tùy chỉnh các mô hình ngôn ngữ lớn (LLM) trên máy tính cá nhân hoặc server, hỗ trợ nhiều mô hình khác nhau như Llama, DeepSeek, Mistral. Open-WebUI là giao diện web mã nguồn mở chuyên dùng để tương tác với Ollama, cung cấp trải nghiệm UX thân thiện và dễ sử dụng trong việc quản lý và sử dụng các mô hình LLM.

Tài liệu này hướng dẫn các bước triển khai mô hình DeepSeek-R1 lên FPT Managed GPU Cluster bằng Ollama và Open-WebUI để bạn có thể sử dụng dễ dàng.

**Bước 1:** Clone source code Open-WebUI và các script có sẵn.

```bash
git clone https://github.com/open-webui/open-webui
cd open-webui/kubernetes
```

**Bước 2:** Chạy script để triển khai ollama và open-webui. Trong thư mục có đủ tất cả các file cần thiết để deploy bao gồm **namespace, ollama statefulSet, ollama service, open-webui deployment, open-webui service**.

```bash
cd kubernetes
kubectl apply -f ./kubernetes/manifest
```

**Bước 3:** Truy cập open-webui trên trình duyệt qua port đã forward (ví dụ: http://localhost:52433). Nếu lần đầu cài đặt và sử dụng OpenWebUI, bạn cần thiết lập thông tin tên, email và mật khẩu.

[![](/img/migrated/36-bb032555.png)](/img/migrated/36-bb032555.png)

**Bước 4:** Sau khi cài đặt xong, bạn chọn mô hình muốn sử dụng. Ví dụ: cài đặt mô hình DeepSeek-R1 (phiên bản **1.5b**).

[![](/img/migrated/37-51db1bb9.png)](/img/migrated/37-51db1bb9.png)

**Bước 5:** Sau khi mô hình được tải về và chạy, bạn có thể dễ dàng tương tác với mô hình trên giao diện.

[![](/img/migrated/38-b9243be2.png)](/img/migrated/38-b9243be2.png)

---
id: "trien-khai-ung-dung-tren-worker-managed-gpu-cluster"
title: "Trien Khai Ung Dung Tren Worker Managed Gpu Cluster"
sidebar_label: "Trien Khai Ung Dung Tren Worker Managed Gpu Cluster"
sidebar_position: "14"
---

# Trien Khai Ung Dung Tren Worker Managed Gpu Cluster

Ollama là a công cụ mã nguồn mở for phép chạy, quản lý and tùy chỉnh the mô hình ngôn ngữ lớn (LLMs) trên máy tính cá nhân or server, hỗ trợ nhiều mô hình khác nhau như Llama, DeepSeek, Mistral,.... Open-WebUI là giao diện web mã nguồn mở is thiết kế đặc biệt to tương tác with Ollama, cung cấp trải nghiệm user thân thiện and dễ dàng in việc quản lý and sử dụng the mô hình LLM.
Tài liệu this will hướng dẫn the bước triển khai mô hình DeepSeek-R1 lên FPT Managed GPU Cluster sử dụng Ollama and Open-WebUI to user can sử dụng a theh đơn giản and dễ dàng.
**Step 1** : Clone mã nguồn and script has been có of Open-WebUI

```
Copy> git clone https://github.com/open-webui/open-webui
> cd open-webui/kubernetes
```

**Step 2** : Chạy the script to triển khai ollama and open-webui. Bên in thư mục has been includes tất cả the file cần thiết to triển khai như **namespace** , **ollama statefulSet** , **ollama service** , **open-webui deployment** and **open-webui service**.

```
Copy> cd kubernetes
> kubectl apply -f ./kubernetes/manifest
```

**Step 3** : Truy cập ando open-webui trên trình duyệt tại port has been is forward, ví dụ: _<http://localhost:52433>_. Với lần đầu tiên cài đặt and sử dụng OpenWebUI, user will cần cấu hình the thông tin: tên, email, password.
[![](/img/migrated/36-bb032555.png)](/img/migrated/36-bb032555.png)
**Step 4** : Sau when cài đặt xong, user lựa chọn model to sử dụng. Ví dụ ở đây, ta will cài đặt mô hình DeepSeek-R1, version **1.5b**.
[![](/img/migrated/37-51db1bb9.png)](/img/migrated/37-51db1bb9.png)
**Step 5** : Sau when mô hình has been is tải and chạy, user can tương tác with mô hình rất đơn giản and trực quan thông qua giao diện.
[![](/img/migrated/38-b9243be2.png)](/img/migrated/38-b9243be2.png)

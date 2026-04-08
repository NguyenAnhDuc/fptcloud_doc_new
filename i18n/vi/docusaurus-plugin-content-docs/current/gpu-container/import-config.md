---
id: "import-config"
title: "Nhập cấu hình"
description: "Sử dụng tính năng nhập cấu hình để tạo container từ file cấu hình có sẵn thay vì cấu hình thủ công qua giao diện."
sidebar_label: "Nhập cấu hình"
sidebar_position: 6
---

# Nhập cấu hình

Để triển khai nhanh hoặc khi bạn đã có sẵn file cấu hình, hãy sử dụng tính năng này để tạo container thay vì cấu hình thủ công qua giao diện.

### Bước 1: Mở modal Import Configuration
1. Điều hướng đến GPU Container từ menu bên.
2. Nhấp **Import Configuration** ở góc trên bên phải của trang danh sách container.

[![Alt text](/img/migrated/import-1-4a9b93de.png)](/img/migrated/import-1-4a9b93de.png)

### Bước 2: Cung cấp file cấu hình định dạng YAML
Bạn có thể nhập cấu hình theo hai cách:
- Dán YAML trực tiếp vào trình soạn thảo YAML.
- Tải file YAML lên bằng cách nhấp nút **Upload file**. Hiện tại, GPU Container chỉ hỗ trợ file YAML.

Bạn có thể tải mẫu YAML bằng cách nhấp **Download template**.

[![Alt text](/img/migrated/import-3-83178ce0.png)](/img/migrated/import-3-83178ce0.png)

| Trường | Kiểu dữ liệu | Dữ liệu mẫu | Mô tả |
| --- | --- | --- | --- |
| name | string | my-container | Tên container. Phải là duy nhất trong tenant |
| instance_type | string | GPU-H100-1 | Site Việt Nam hỗ trợ 1xH100 -> 8xH100; Site Nhật Bản hỗ trợ 1xH200 -> 8xH200 |
| **image_setting** | | | Vì container chỉ có 1 image, hãy cung cấp **template_name** hoặc **image_url + image_tag** |
| template_name | string | Jupyter Notebook | Tên template có sẵn. Nhập tên chính xác: `Jupyter Notebook`, `Code Server`, `vllm-openai`, `vllm-openai-v0.10.1`, `ollama`, `ollama-openwebui`, `Ubuntu 24.04`, `Tensorflow 2.19.0`, `Nvidia Cuda 12.9.1`, `NVIDIA Pytorch 25.03` |
| image_url | string | registry/myimage:latest | (Tùy chọn) URL image tùy chỉnh. Để trống nếu dùng template có sẵn |
| image_tag | string | v1.0 | (Tùy chọn) Tag cho image tùy chỉnh |
| image_user | string | admin | (Tùy chọn) Tên đăng nhập registry image riêng |
| image_password | string | password123 | (Tùy chọn) Mật khẩu registry image riêng |
| **access_container** | | | |
| tcp_ports | list[int] | [22, 33] | Các TCP port được expose |
| http_ports | list[int] | [8888, 6006] | Các HTTP port được expose |
| ssh_keys | | | Cung cấp từng cặp name-key SSH. Tối đa 10 key |
| name | string | key01 | Tên SSH key |
| key | string | "ssh-rsa AAAAB3..." | SSH public key |
| **advanced_settings** | | | |
| persistent_disk | | | |
| mount_capacity | int (GB) | 20 | Dung lượng lưu trữ bền vững cần gắn |
| mount_path | string | /workspace | Đường dẫn gắn persistent disk trong container |
| environment_variables | | | |
| key | string | USERNAME | Biến môi trường được đưa vào khi chạy |
| value | string | admin | |
| startup_commands | | | |
| cmds | list[string] | | Lệnh khởi động (tùy chọn) |
| args | list[string] | | Tham số lệnh khởi động (tùy chọn) |

### Bước 3: Xem lại cấu hình

:::info
Nút "Review" chỉ được bật khi tất cả các kiểm tra trong trình soạn thảo YAML đã vượt qua.
:::

Nhấp **Review** để tiếp tục. Trên màn hình này, bạn có thể:
- Xác minh cấu hình container bao gồm template, GPU, CPU, RAM và phân bổ disk.
- Kiểm tra tóm tắt giá để xem chi phí ước tính theo giờ. [![Alt text](/img/migrated/import-4-efe3185f.png)](/img/migrated/import-4-efe3185f.png)

### Bước 4: Tạo container
Sau khi xác nhận, nhấp **Create Container** để bắt đầu triển khai. Hệ thống sẽ tự động tạo và khởi động container dựa trên file cấu hình đã cung cấp.

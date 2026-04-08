---
id: "connect-container"
title: "Kết nối container"
description: "Hướng dẫn kết nối vào GPU Container bằng các phương thức khác nhau."
sidebar_label: "Kết nối container"
sidebar_position: 8
---

# Kết nối container

Bạn có thể kết nối vào GPU Container bằng một vài phương thức khác nhau, tùy thuộc vào nhu cầu, tùy chọn và template đã dùng để tạo container.

## HTTP Services
Kết nối vào container qua HTTP rất tiện lợi, nhanh chóng và bảo mật qua HTTPS. Để kết nối bằng HTTP Service:

### Bước 1: Khi container đang chạy, điều hướng đến trang Container Details

### Bước 2: Tìm endpoint, sao chép vào clipboard hoặc nhấp để mở trên trình duyệt

### Bước 3: Làm theo hướng dẫn phù hợp với template của bạn

| Template | Jupyter, Code Server | Ollama WebUI | Ollama | vLLM |
| --- | --- | --- | --- | --- |
| Điều kiện | Không có | Không có | Không có | Hugging Face Token (*) |
| Các bước tiếp theo | Mở endpoint trên trình duyệt. Dùng trường **Username** và **Password** trong mục _Environment Variables_ của trang Container Details để truy cập. | Mở endpoint trên trình duyệt. Tạo tài khoản Open WebUI mới hoặc dùng tài khoản hiện có. Chọn model để tải về và kiểm tra. | Kiểm tra container bằng Postman (*) | Kiểm tra container bằng Postman (*) |

(*) Hugging Face Token: Token Hugging Face trong mục Environment Variable là bắt buộc khi dùng template Ollama. Nếu bạn chưa có Hugging Face Token, làm theo [hướng dẫn này](https://huggingface.co/docs/hub/en/security-tokens).

(*) Kiểm tra container bằng Postman: Thêm **/v1/models** vào endpoint, sau đó cung cấp API_TOKEN trong phần Authorization. Nếu bạn dùng template vLLM, hãy thêm HUGGING_FACE_HUB_TOKEN vào tham số yêu cầu để kiểm tra container.

## TCP Ports
Để truy cập instance qua public endpoint, bạn cần thêm TCP port vào cấu hình container. Khi container được tạo, bạn sẽ nhận được tên miền công khai và cổng public bên ngoài để truy cập dịch vụ. Cổng public bên ngoài được chọn ngẫu nhiên trong khoảng 30000-40000.

Định dạng sẽ là DOMAIN:EXTERNAL_PORT -> INTERNAL_PORT. Ví dụ:

```
tcp-endpoint-stg.serverless.fptcloud.com:34771 → :22
```

## SSH Terminal
1. Để lấy lệnh SSH cho container, điều hướng đến trang Container Details. Sao chép lệnh trong mục SSH command.

[![Alt text](/img/migrated/Screenshot-2025-06-30-173735-63580c87.png)](/img/migrated/Screenshot-2025-06-30-173735-63580c87.png)

Lệnh sẽ có dạng:

```
ssh root@tcp-endpoint-stg.serverless.fptcloud.com -p 34771 ~/.ssh/id_e25595
```

2. Chạy lệnh đã sao chép trong terminal trên máy tính để kết nối vào container.

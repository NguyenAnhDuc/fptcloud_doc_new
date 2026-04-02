---
id: "how-to-integrate-model"
title: "How To Integrate Model"
description: "Hướng dẫn integrate model qua API trong Model Testing – Interactive Sessions."
sidebar_label: "How To Integrate Model"
sidebar_position: "16"
---

# How To Integrate Model

**Lưu ý:** Get API Endpoint chỉ được bật khi trạng thái session là **RUNNING**.

[![Alt text](https://fptcloud.com/wp-content/uploads/2025/05/Get-API-Endpoint.png)](https://fptcloud.com/wp-content/uploads/2025/05/Get-API-Endpoint.png)

### Bước 1: Lấy thông tin cần thiết

Chúng tôi cung cấp:

| Đối tượng | Mô tả |
| --- | --- |
| Endpoint URL | Địa chỉ nơi ứng dụng của bạn gửi requests để tương tác với dịch vụ. |
| Bearer token | Chuỗi xác nhận rằng bạn có quyền truy cập API. **Lưu ý:** Không bao giờ để lộ token trong code công khai hoặc repository. Lưu trữ trong biến môi trường hoặc vault bảo mật. |
| Model | Định danh duy nhất cho một model AI cụ thể được lưu trữ trên nền tảng Interactive Sessions. |
| Sample code | Chi tiết hơn, bao gồm: Endpoint URL, Bearer token, Model ID, Messages (system, user, assistant), Temperature. |

### Bước 2: Chọn nền tảng integrate

Chọn ngôn ngữ hoặc nền tảng bạn muốn sử dụng để integrate model.

### Bước 3: Gửi request đến API

Ví dụ sử dụng Python:

```python
import requests
url = "https://api.gptcloud.com/aiam/v1/chat/completions"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer pR2vV0zGZ0nP6tQ3gFJk9wXn0"
}
payload = {
    "model": "62d8b2e6-42f9-4c17-95f8-4ca93d74f396",
    "messages": [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello!"}
    ],
    "temperature": 0.7
}
response = requests.post(url, headers=headers, json=payload)
print(response.json())
```

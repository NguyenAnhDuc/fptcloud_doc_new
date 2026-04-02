---
id: "vllm-use-case"
title: "Vllm Use Case"
description: "Trong trường Biến môi trường, hãy tùy chỉnh giá trị để khớp với API key và Hugging Face token của bạn."
sidebar_label: "Vllm Use Case"
sidebar_position: 19
---

# Vllm Use Case

## Bước 1: Tạo GPU Container sử dụng template vllm-openai
Trong trường Biến môi trường, hãy tùy chỉnh giá trị để khớp với API key (dùng cho yêu cầu suy luận) và Hugging Face token của bạn để tải mô hình từ Hugging Face.
Trong hướng dẫn này, chúng ta đang sử dụng Deepseek-R1-Distill-Qwen-1.5B. Hãy thay thế giá trị của MODEL bằng mô hình khác bạn muốn dùng để suy luận. ![Alt text](/img/migrated/vllm1-9fddd89f.png)
Hãy nhớ thay thế giá trị Hugging Face token của bạn vào trường HF_TOKEN.
![Alt text](/img/migrated/vllm2-f52567f6.png)
![Alt text](/img/migrated/Screenshot-2025-05-29-at-09.08.47-2425298a.png)
## Bước 2: Kiểm tra bằng Postman. Sử dụng API_Token đã thêm ở Bước 1 để xác thực

```
{HTTP Endpoint}/v1/completions
```

![Alt text](/img/migrated/Screenshot-2025-05-29-at-09.05.23-0782f6dc.png)

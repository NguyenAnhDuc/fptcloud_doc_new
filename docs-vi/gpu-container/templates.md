---
id: "templates"
title: "Templates"
description: "Templates được dùng để khởi chạy image dưới dạng container và xác định dung lượng ổ đĩa, volume, đường dẫn volume và cổng cần thiết."
sidebar_label: "Templates"
sidebar_position: 11
---

# Templates

Templates được dùng để khởi chạy image dưới dạng container và xác định dung lượng ổ đĩa container, volume, đường dẫn volume và cổng cần thiết. Bạn cũng có thể định nghĩa biến môi trường và lệnh khởi động trong template.
## Templates tích hợp sẵn
Các template này được duy trì bởi FPT AI Factory. Hiện chúng tôi cung cấp các template tích hợp sẵn:
  1. vLLM v0.8.1
     * Mục đích sử dụng: Image container vLLM này được xây dựng và duy trì bởi AI Factory. Template này cho phép suy luận mô hình thông lượng cao sử dụng tài nguyên GPU với engine tiên tiến nhất.

  * Biến môi trường: Một số biến môi trường hữu ích được cung cấp để tùy chỉnh container.

| Biến | Kiểu | Mô tả |
| --- | --- | --- |
| HUGGING_FACE_HUB_TOKEN | string | Token truy cập người dùng Hugging Face của bạn |

  * Lệnh khởi động:

| Lệnh | Tham số |
| --- | --- |
| python | --model deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B --dtype bfloat16 --gpu-memory-utilization 0.9 --max-model-len 8192 --api-key your_api_key |
| -m | / |
| vllm.entrypoints.openai.api_server | / |

  * Cổng:

| Loại | Cổng |
| --- | --- |
| HTTP | 8000 |

  2. Jupyter Notebook

  * Mục đích sử dụng: Template này cung cấp Jupyter Lab để hỗ trợ phát triển từ xa cho các nhà khoa học AI/Dữ liệu mà không bị giới hạn bởi phần cứng local.
  * Biến môi trường: Một số biến môi trường hữu ích được cung cấp để tùy chỉnh container.

| Biến | Kiểu | Mặc định | Mô tả |
| --- | --- | --- | --- |
| USERNAME | string | admin | Tên đăng nhập truy cập Jupyter Notebook |
| PASSWORD | string |   | Mật khẩu truy cập Jupyter Notebook _(Được hệ thống tạo)_ |

  * Cổng:

| Loại | Cổng |
| --- | --- |
| HTTP | 8000 |

  3. Ollama WebUI

  * Mục đích sử dụng: Template này hỗ trợ chạy nhiều chương trình mô hình ngôn ngữ lớn (LLM), bao gồm Ollama và các API tương thích với OpenAI, giúp người dùng dễ dàng tùy chỉnh theo quy trình làm việc.
  * Cổng:

| Loại | Cổng |
| --- | --- |
| HTTP | 8080 |

  4. Ollama

  * Mục đích sử dụng: Template này cho phép suy luận mô hình thông lượng cao sử dụng tài nguyên GPU với engine tiên tiến nhất.
  * Biến môi trường:

| Biến | Kiểu | Mô tả |
| --- | --- | --- |
| API_TOKEN | string | Tự động xác thực với các dịch vụ bên ngoài _(Được hệ thống tạo)_ |

  * Cổng:

| Loại | Cổng |
| --- | --- |
| HTTP | 8000 |

  5. Code Server

  * Mục đích sử dụng: Template này cung cấp VS Code dựa trên đám mây với GPU để huấn luyện, kiểm tra và gỡ lỗi mô hình AI từ xa với đầy đủ tính năng IDE.
  * Biến môi trường:

| Biến | Kiểu | Mặc định | Mô tả |
| --- | --- | --- | --- |
| PUID | int | 0 | UserID |
| PGID | int | 0 | GroupID |
| TZ | string | Etc/UTC | Múi giờ của bạn |
| PROXY_DOMAIN | string | code-server.my.domain | Domain được proxy cho subdomain proxying |
| DEFAULT_WORKSPACE | string | / | Thư mục mặc định khi truy cập code-server |
| PASSWORD | string | / | Mật khẩu truy cập code-server _(Được hệ thống tạo)_ |

  * Cổng:

| Loại | Cổng |
| --- | --- |
| HTTP | 8443 |

  6. Ubuntu

  * Mục đích sử dụng: Đây là Ubuntu tối giản với một số bổ sung hữu ích để cải thiện trải nghiệm người dùng. Tài khoản root vẫn khả dụng như thường, chúng tôi đã tạo một người dùng hệ thống thông thường để tiện lợi hơn.
  * Cổng:

| Loại | Cổng |
| --- | --- |
| TCP | 22 |

  * Phần mềm bổ sung
    * Docker: Docker được cài đặt và tự động khởi động. Người dùng mặc định đã được thêm vào nhóm docker, cho phép quản lý container mà không cần quyền root.
    * Nvidia CUDA: Driver Nvidia phiên bản 550.90.07 được cài đặt sẵn trong container, cung cấp CUDA phiên bản 12.4.

  7. vLLM v0.10.1
     * Mục đích sử dụng: Image container vLLM này được xây dựng và duy trì bởi AI Factory. Template này cho phép suy luận mô hình thông lượng cao sử dụng tài nguyên GPU với engine tiên tiến nhất.
     * Biến môi trường:

| Biến | Kiểu | Mô tả |
| --- | --- | --- |
| HUGGING_FACE_HUB_TOKEN | string | Token truy cập người dùng Hugging Face của bạn |

  * Lệnh khởi động:

| Lệnh | Tham số |
| --- | --- |
| python | --model openai/gpt-oss-20b --dtype bfloat16 --gpu-memory-utilization 0.9 --max-model-len 8192 --api-key your_api_key |
| -m | / |
| vllm.entrypoints.openai.api_server | / |

  * Cổng:

| Loại | Cổng |
| --- | --- |
| HTTP | 8000 |

  8. NVIDIA Pytorch 25.03

  * Cổng:

| Loại | Cổng |
| --- | --- |
| TCP | 22 |
| HTTP | 8888 |

  * Lệnh khởi động:

| Lệnh | Tham số |
| --- | --- |
| /bin/bash | / |
| -c | / |
| /usr/sbin/sshd && jupyter lab --ip=0.0.0.0 --port=8888 --allow-root --NotebookApp.token='your_token' --NotebookApp.password='' --notebook-dir=/workspace | / |

  9. Tensorflow 2.19.0

  * Cổng:

| Loại | Cổng |
| --- | --- |
| TCP | 22 |

  10. NVIDIA CUDA 12.9.1

  * Cổng:

| Loại | Cổng |
| --- | --- |
| TCP | 22 |

## Templates tùy chỉnh
Bạn có thể sử dụng **Docker image** của riêng mình bằng cách nhấp vào **"Custom Template"** và ghi đè bằng image:tag của bạn. Nếu image của bạn từ kho Docker riêng tư, hãy cung cấp tên đăng nhập và mật khẩu để xác thực.
[![Alt text](/img/migrated/Screenshot-2025-06-19-154727-8b486ae9.png)](/img/migrated/Screenshot-2025-06-19-154727-8b486ae9.png)

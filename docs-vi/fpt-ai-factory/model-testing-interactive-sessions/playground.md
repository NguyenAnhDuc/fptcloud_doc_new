---
id: "playground"
title: "Playground"
description: "Playground là không gian bạn tương tác với model AI theo định dạng chat để evaluate và kiểm thử."
sidebar_label: "Playground"
sidebar_position: "14"
---

# Playground

**Playground** là không gian bạn tương tác với các model AI theo định dạng chat. Đây là nơi được thiết kế để kiểm thử tin nhắn, evaluate phản hồi của model và điều chỉnh hành vi model.

[![Alt text](https://fptcloud.com/wp-content/uploads/2025/05/Playground-Interactive-Session-1.png)](https://fptcloud.com/wp-content/uploads/2025/05/Playground-Interactive-Session-1.png)

Bạn có thể làm theo hướng dẫn để evaluate model của mình:

### Bước 1: Điều chỉnh tham số

Các tham số bao gồm:

| Tên | Mô tả | Kiểu | Giá trị hỗ trợ |
| --- | --- | --- | --- |
| Temperature | Kiểm soát tính ngẫu nhiên trong phản hồi. Thấp hơn = tập trung hơn, cao hơn = sáng tạo hơn. | Float | [0.00, 2.00] (thường 1.00 là cân bằng) |
| Add stop sequence | Xác định nơi model dừng tạo văn bản. | String | Chuỗi tùy chỉnh |
| Output length | Giới hạn số token trong phản hồi. | Int | [0, 8192] |
| Top-P | Kiểm soát sự đa dạng qua nucleus sampling. Thấp hơn = tập trung hơn. | Float | (0.00, 1.00] |

Chúng tôi khuyến nghị bạn điều chỉnh tham số theo từng mục đích:

| Mục đích | Temperature | Add stop sequence | Output length | Top-P |
| --- | --- | --- | --- | --- |
| Viết sáng tạo | 1.0–1.5 |  | 500+ | 0.8–1.0 |
| Giải thích kỹ thuật | 0.2–0.5 |  | 200–500 | 0.3–0.6 |
| Tóm tắt | 0.2–0.5 |  | 150–300 | 0.3–0.6 |
| Tạo code | 0.1–0.4 | "n" hoặc "#" |  | 0.3–0.6 |
| Trợ lý hội thoại | 0.7–1.0 |  | 200–600 | 0.8–1.0 |

### Bước 2: Bắt đầu trò chuyện

Giao diện Playground được xây dựng xung quanh **Completions**, bao gồm:

| Prompts | Mô tả |
| --- | --- |
| System messages | Xác định hành vi và giọng điệu của trợ lý. Giúp hướng dẫn cách model phản hồi trong suốt cuộc trò chuyện. **Ví dụ:** You are a creative writing assistant. Always write with vivid imagery, emotional depth, and a storytelling tone. |
| User messages | Đại diện cho đầu vào hoặc truy vấn từ bạn. Bạn có thể gõ văn bản để kiểm thử model LLM hoặc tải lên hình ảnh để kiểm thử model VLM. |
| Assistant responses | Phản hồi của model AI dựa trên tin nhắn người dùng và system messages. |

Bạn có thể tương tác với model theo thời gian thực, quan sát cách model phản hồi và lặp lại dựa trên mục tiêu của mình.

### Bước 3: Tinh chỉnh prompts

Để cải thiện hoặc khám phá các hành vi khác nhau:

* Chỉnh sửa **system message** để thay đổi tính cách hoặc giọng điệu của trợ lý.
* Điều chỉnh **user message** để kiểm thử các loại truy vấn khác nhau.
* Tinh chỉnh các **tham số** để quan sát sự thay đổi trong đầu ra của model.

### Bước 4: Xóa completion

1. Nhấp vào biểu tượng **Clear** để đặt lại và bắt đầu một completion mới.
2. Sau khi xóa completion, completion đó được hoàn thành và lưu vào completion history.

---
id: "faq"
title: "Faq"
description: "Các câu hỏi thường gặp về Model Testing – Interactive Sessions."
sidebar_label: "Faq"
sidebar_position: "17"
pagination_next: null
---

# Faq

### 1. Model Testing – Interactive Sessions là gì?

Model Testing – Interactive Sessions là dịch vụ trong FPT AI Factory Portal cho phép bạn **kiểm thử và xác thực các model AI đã fine-tune** trong các tình huống thực tế thông qua giao diện dạng chat.

### 2. Khi nào nên sử dụng Model Testing – Interactive Sessions?

Bạn nên sử dụng khi muốn:

* Mô phỏng các tương tác người dùng thực tế.
* Evaluate giọng điệu, phong cách và tính phù hợp ngữ cảnh.
* Xác định các trường hợp ngoại lệ hoặc hành vi không mong muốn trước khi triển khai.

### 3. Model nào có thể sử dụng trong Model Testing – Interactive Sessions?

Chỉ các model đáp ứng các tiêu chí sau:

* **Loại model:** LLM (chỉ văn bản) hoặc VLM (văn bản + hình ảnh)
* **Kích thước model:** lớn hơn 0
* **Giai đoạn học:** Phải là Instruction-tuned

### 4. Làm thế nào để tạo một session?

1. Đi đến **Model Testing --> Interactive Sessions**.
2. Nhấp **Create New Session**.
3. Điền tên session, mô tả, chọn model và thiết lập session stop.
4. Gửi session.

### 5. Tôi có thể khởi động lại một session đã dừng không?

Không. Sau khi dừng, một session không thể khởi động lại. Bạn phải tạo một session mới.

### 6. Playground là gì?

Playground là nơi bạn:

* Trò chuyện với model.
* Điều chỉnh các tham số (temperature, top-p, output length, thêm stop sequence).
* Tinh chỉnh tin nhắn và evaluate phản hồi.

### 7. Làm thế nào để integrate model qua API?

1. Nhấp **Get API Endpoint** trong Playground.
2. Sao chép sample code để gửi requests.

---
id: "test-models-response"
title: "Kiểm thử phản hồi mô hình"
description: "Hướng dẫn kiểm thử phản hồi mô hình trong interactive session"
sidebar_label: "Kiểm thử phản hồi mô hình"
sidebar_position: 5
---

# Kiểm thử phản hồi mô hình

Chọn session để xem phản hồi của mô hình. Hệ thống sẽ mở test playground để bạn tương tác với mô hình.

[![file](/img/migrated/image-1746694482798.30.25-2511f2f2.png)](/img/migrated/image-1746694482798.30.25-2511f2f2.png)

### **1. System message**

Chỉ thị thiết lập hành vi và giọng điệu của mô hình AI. Bạn có thể hướng dẫn mô hình phản hồi như thế nào xuyên suốt cuộc trò chuyện.

System message có thể thay đổi theo sở thích. Mặc định: _"Bạn là một trợ lý hữu ích"_

**Ví dụ:** _Bạn là chuyên gia cloud computing, hỗ trợ người dùng giải quyết các vấn đề kỹ thuật._

### **2. User message**

Đầu vào hoặc câu hỏi mà người dùng cung cấp cho AI. Đây là prompt chính mà mô hình phản hồi trong cuộc trò chuyện.

**Ví dụ:** _Lợi ích của việc sử dụng private cloud là gì?_

Hỗ trợ tải lên hình ảnh định dạng **.jpeg** và **.jpg** để kiểm thử với VLM (Vision-Language Models). Danh sách mô hình hỗ trợ kiểm thử hình ảnh:

- Meta-llama/Llama-3.2-11B-Vision-Instruct
- Qwen/Qwen2-VL-2B-Instruct
- Qwen/Qwen2-VL-7B-Instruct
- Qwen/Qwen2-VL-72B-Instruct
- Qwen/Qwen2.5-VL-3B-Instruct
- Qwen/Qwen2.5-VL-7B-Instruct
- Qwen/Qwen2.5-VL-72B-Instruct
- google/gemma-3-12b-it
- google/gemma-3-27b-it
- google/gemma-3-4b-it

### **3. Cài đặt**

- **Temperature:** Mức độ sáng tạo được phép trong câu trả lời, thường trong khoảng **0 đến 2**.

Mặc định: **1**

- **Temperature thấp (gần 0):**
  - Mô hình tạo ra các phản hồi **có thể dự đoán và xác định** hơn.
  - Ưu tiên các từ và token có xác suất cao, tạo ra đầu ra **tập trung và chính xác** hơn.
- **Temperature cao (trên 1):**
  - Mô hình tạo ra các phản hồi **sáng tạo**, đa dạng và **bất ngờ** hơn.
  - Lấy mẫu từ phạm vi từ rộng hơn nên đầu ra **đa dạng hơn** nhưng có thể kém chính xác hơn.

- **Cài đặt nâng cao:**
  - Thêm stop sequence: Stop sequence cho phép bạn chỉ định một hoặc nhiều chuỗi sẽ dừng mô hình khi phát hiện, giúp kiểm soát **độ dài và nội dung** văn bản được tạo ra.
  - Độ dài đầu ra: Kiểm soát độ dài văn bản được tạo trong mô hình, thiết lập số token tối đa (từ hoặc subword) mà mô hình có thể tạo ra để phản hồi prompt. Mặc định: **8192**
  - Top-P: Được dùng trong mô hình sinh để quản lý tính ngẫu nhiên và đa dạng của văn bản được tạo ra, hoạt động như một thay thế cho temperature khi lấy mẫu từ phân phối đầu ra của mô hình. Mặc định: **0.95**

Ví dụ cài đặt mô hình đầu ra:

- Thêm stop sequence: third-party
- Độ dài đầu ra: 1000
- Top-P: 0.95

[![file](/img/migrated/image-1746696612804.30.02-38f9b349.png)](/img/migrated/image-1746696612804.30.02-38f9b349.png)

→ Mô hình sẽ dừng khi gặp stop sequence hoặc đạt giới hạn token tối đa.

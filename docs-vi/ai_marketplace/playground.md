---
id: "playground"
title: "Playground"
description: "Playground của AI Marketplace cho phép bạn kiểm thử và tương tác với các mô hình AI mà không cần lập trình — bao gồm tạo văn bản, text-to-speech, speech-to-text, các tác vụ thị giác và embedding."
sidebar_label: "Playground"
sidebar_position: 6
---

# Playground

## Cách bắt đầu với Playground?

Playground của AI Marketplace cho phép bạn kiểm thử và tương tác với các mô hình AI mà không cần lập trình — bao gồm tạo văn bản, text-to-speech, speech-to-text, các tác vụ thị giác và embedding.

- Trên trang chủ, nhấp **Playground** trong thanh điều hướng phía trên (giữa Pricing và Support Center).
- Nhấp **Get API Key** để đến trang My API Key, nơi bạn có thể tạo hoặc quản lý các API key.

[![Giao diện chính của Playground với lựa chọn mô hình và ô nhập prompt](/img/migrated/playgr1-06ea6eb8.png)](/img/migrated/playgr1-06ea6eb8.png)

- Nhấp **View Code** để mở pop-up hiển thị các đoạn code mẫu (có sẵn cho **cURL**, **Python** và **Node.js**) cùng với phản hồi mẫu cho yêu cầu của bạn.

[![Pop-up View Code hiển thị các đoạn mẫu cURL, Python và Node.js](/img/migrated/playgr6-sample-code-01622553.png)](/img/migrated/playgr6-sample-code-01622553.png)

---

## Large Language Model (LLM)

**Mô tả:**
Trợ lý dựa trên văn bản được huấn luyện trên lượng lớn thông tin (sách, trang web, bài viết, hội thoại). Mô hình có thể hiểu yêu cầu của bạn và phản hồi bằng văn bản tự nhiên, giống người thật.

[![Giao diện playground LLM với các mẫu quick action](/img/migrated/playgr1-06ea6eb8.png)](/img/migrated/playgr1-06ea6eb8.png)

**Các mẫu quick action có sẵn:**

- Tạo outline cho blog
- Tạo kế hoạch go-to-market
- Tóm tắt báo cáo này dưới dạng bullet point
- Giúp tôi chuẩn bị các điểm trình bày cho cuộc họp
- Chuyên nghiệp hóa email của tôi
- Viết danh sách công việc cho dự án cá nhân

**Các bước thực hiện:**

1. Nhấp vào tác vụ phù hợp nhất với nhu cầu của bạn. Hệ thống sẽ tự động chuẩn bị phản hồi dựa trên đầu vào của bạn.
2. Nhập câu hỏi, chủ đề hoặc yêu cầu cụ thể liên quan đến tác vụ đã chọn vào ô văn bản.
3. Nhấp **Send** — kết quả sẽ hiện ra ở bên phải.

**Cài đặt nâng cao (bảng bên trái):**

- **System prompt** — thiết lập phong cách/hành vi của trợ lý.
- **Temperature**, **Max output tokens**, **Top P**, **Top K**, **Penalties** — tinh chỉnh độ sáng tạo, độ dài và độ ngẫu nhiên.

---

## Mô hình Text to Speech (TTS)

[![Giao diện playground TTS với các dropdown voice, speed và language](/img/migrated/playgr3-TTS-0593ab37.png)](/img/migrated/playgr3-TTS-0593ab37.png)

**Mô tả:**
Chuyển đổi văn bản thành giọng nói.

**Các bước thực hiện:**

1. Chọn loại giọng trong dropdown **Voice**.
2. Chọn tốc độ giọng trong dropdown **Speed**.
3. Chọn ngôn ngữ trong dropdown **Language**.
4. Nhập tối đa 500 ký tự vào ô **Text**.
5. Nhấp **Run** — hệ thống sẽ tạo file âm thanh, có thể phát hoặc tải xuống.

---

## Mô hình Speech to Text (STT)

[![Giao diện playground STT với lựa chọn mô hình và tải lên âm thanh](/img/migrated/playgr4-STT-26b13380.png)](/img/migrated/playgr4-STT-26b13380.png)

**Mô tả:**
Chuyển đổi giọng nói thành văn bản.

**Các bước thực hiện:**

1. Chọn **Model** từ dropdown.
2. Chọn **Response format** (ví dụ: json hoặc text).
3. Đặt **Source language**.
4. Chọn **Task**:
   - **Transcription** — chuyển đổi giọng nói thành văn bản.
   - **Translation** — chuyển đổi giọng nói thành văn bản bằng ngôn ngữ khác.
5. Tải lên hoặc ghi âm (các định dạng hỗ trợ: **MP3/WAV**, độ dài tối đa **15s**).
6. Nhấp **Run** — văn bản được phiên âm hoặc dịch sẽ xuất hiện trong phần Result.

---

## Vision Language Model (VLM)

[![Giao diện playground VLM với tải ảnh và ô nhập câu hỏi](/img/migrated/playgr5-VLM-b29ce5ee.png)](/img/migrated/playgr5-VLM-b29ce5ee.png)

**Mô tả:**
Trợ lý kết hợp thị giác máy tính (hiểu hình ảnh) và xử lý ngôn ngữ tự nhiên (hiểu văn bản) để nhận thức thế giới theo cách gần với con người hơn.

**Các bước thực hiện:**

1. Tải lên ảnh của bạn (**JPEG**, **PNG**, **JPG**, tối đa 2 file, 20 MB mỗi file).
2. Đặt câu hỏi về ảnh trong ô văn bản.
3. Nhấp **Run** — mô hình sẽ phản hồi dựa trên nội dung ảnh.

---

## Mô hình Embedding

[![Giao diện playground Embedding với dropdown input type và encoding format](/img/migrated/playgr2-embedding-8e2eef2b.png)](/img/migrated/playgr2-embedding-8e2eef2b.png)

**Mô tả:**
Mô hình embedding là các mạng neural dựa trên transformer, chuyển đổi các đoạn tài liệu (đoạn văn bản) thành biểu diễn số hay vector.
Các vector này nắm bắt ý nghĩa ngữ nghĩa của văn bản và được dùng cho các tác vụ như tìm kiếm, gợi ý và so sánh độ tương đồng.

**Các bước thực hiện:**

1. Chọn loại đầu vào bạn muốn kiểm thử trong dropdown **Input type**.
2. Chọn định dạng đầu ra mong muốn cho embedding trong dropdown **Encoding format**.
3. Chọn cách xử lý đầu vào vượt quá giới hạn token trong dropdown **Truncate**.
4. Nhập tối đa 500 ký tự vào ô **Text**.
5. Nhấp **Run** — hệ thống sẽ hiển thị embedding vector (biểu diễn số) trong phần Result.

:::note
Tính năng Guardrail sẽ sớm ra mắt để tăng cường an toàn nội dung.
:::

---

## Cách sử dụng các điều khiển bổ sung trong Playground?

- **System prompt** — hướng dẫn hành vi và phong cách của mô hình.
- **Enable streaming** — hiển thị kết quả một phần trong khi đang tạo.
- **Stop sequences** — dừng phản hồi của mô hình tại các từ hoặc cụm từ cụ thể.
- **Fine-tune this model** — liên kết để bắt đầu tùy chỉnh mô hình cho trường hợp sử dụng của bạn.

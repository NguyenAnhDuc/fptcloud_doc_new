---
id: "fpt-ai-factory-solution"
title: "Fpt Ai Factory Solution"
description: "Giải pháp FPT AI Factory hỗ trợ JAIST xây dựng LLM tiếng Nhật hàng đầu."
sidebar_label: "Fpt Ai Factory Solution"
sidebar_position: 33
---

# Fpt Ai Factory Solution

Dự án đầy tham vọng của JAIST nhằm xây dựng một LLM tiếng Nhật hàng đầu đòi hỏi một đối tác có thể cung cấp không chỉ sức mạnh tính toán thô mà còn một nền tảng tinh vi để quản lý toàn bộ vòng đời phát triển model. FPT AI Factory, với các dịch vụ FPT AI Studio và FPT AI Inference tích hợp, đã cung cấp giải pháp end-to-end mà JAIST cần.

  * **Khám phá dữ liệu**

Sự hợp tác bắt đầu bằng việc tìm kiếm có hệ thống tổ hợp dữ liệu training hiệu quả nhất. Sử dụng FPT AI Studio, các nhà nghiên cứu của JAIST đã training model Qwen3-0.6B trên 768 tổ hợp dữ liệu training duy nhất, tương đương với 768 lần chạy training riêng biệt. Giai đoạn quan trọng này cũng được đẩy nhanh bằng cách sử dụng các embedding model của FPT AI Inference để phân tích và phân loại các miền văn bản trong dữ liệu training hỗn hợp.

  * **Các giai đoạn training**

Sau khi xác định được tổ hợp dữ liệu lý tưởng, JAIST bắt tay vào nỗ lực continual pre-training quy mô lớn sử dụng Qwen2.5-32B làm base model. Quá trình này được chia thành ba giai đoạn riêng biệt, đòi hỏi tính toán chuyên sâu, tất cả được quản lý trong FPT AI Studio:
  * **Giai đoạn 1:** Base model được training trên dataset 100B token, sử dụng cụm 30 node mạnh mẽ, mỗi node được trang bị 8 GPU NVIDIA H100.
  * **Giai đoạn 2:** Quá trình training được mở rộng đáng kể, với model học từ dataset 267B token chạy trên 29 node. Chúng tôi đã phát hiện kịp thời một node bị lỗi và tiến hành cô lập nó.
  * **Giai đoạn 3:** Giai đoạn cuối liên quan đến dataset 273B token. Dataset này bao gồm 267B token từ giai đoạn trước, được bổ sung bằng dữ liệu instruction mới được tạo ra bởi model Qwen3-235B-A22B, một tác vụ được thực hiện bởi dịch vụ FPT AI Inference. Giai đoạn này tái sử dụng cụm GPU H100 30 node để training.

Trong suốt quá trình phức tạp này, các kỹ sư của FPT AI Factory đã cung cấp hỗ trợ chặt chẽ và tận tâm, đảm bảo thực thi liền mạch các job training quy mô lớn này.

  * **Đánh giá**

Để đánh giá, JAIST đã sử dụng đầy đủ các tính năng của FPT AI Studio. Các model được continual pre-trained trải qua **LoRA fine-tuning** và được đánh giá chuẩn nghiêm ngặt so với Nejumi Leaderboard 3 sử dụng tính năng **Test Jobs**. Hơn nữa, tính năng **Interactive Session** cho phép các nhà nghiên cứu JAIST phục vụ các model đã fine-tuned và tiến hành các bài đánh giá nội bộ tùy chỉnh của riêng họ.

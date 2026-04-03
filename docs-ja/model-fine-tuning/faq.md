---
id: "faq"
title: "Faq"
description: "Các câu hỏi thường gặp về Model Fine-tuning."
sidebar_label: "Faq"
sidebar_position: "35"
---

# Faq

### 1. Model Fine-tuning là gì?
Model Fine-tuning là quá trình huấn luyện lại một base language model trên một dataset chuyên biệt để model đạt hiệu suất tốt hơn trong một lĩnh vực cụ thể hoặc cho một use case mục tiêu.

### 2. Nên chọn model nào để fine-tuning?
  * Model nhỏ (<=1B tham số) → để kiểm thử hoặc khối lượng công việc nhẹ
  * Model trung bình (7B-13B) → cân bằng hiệu suất và chi phí
  * Model lớn (30B+) → cho các tác vụ phức tạp, thường yêu cầu cấu hình đa node
  * Các model instruction-tuned được ưu tiên nếu tác vụ của bạn dựa trên prompt-response

### 3. Fine-tuning mất bao lâu?
Thời gian phụ thuộc vào:
  * Kích thước model (vài giờ cho model nhỏ, vài ngày cho model rất lớn)
  * Kích thước dataset
  * Cài đặt phần cứng của bạn (hyperparameter & infrastructure)

Thông thường, thời gian dao động từ vài giờ đến vài ngày.

### 4. Bạn cần chuẩn bị gì trước khi fine-tuning một model?
Bạn cần:
  * Dữ liệu sạch, đa dạng và không trùng lặp.
  * Mục tiêu rõ ràng cho fine-tuning (ví dụ: hỗ trợ kỹ thuật, chăm sóc khách hàng, viết nội dung, v.v.).

### 5. Cần bao nhiêu GPU để fine-tuning một model?
Số lượng phụ thuộc vào kích thước model:
  * <1B tham số: 1 GPU (24 GB VRAM) là đủ
  * Model 7B: 2-4 GPU (40 GB VRAM mỗi cái)
  * Model 13B: khuyến nghị 4-8 GPU
  * Model 30B+: yêu cầu 8+ GPU và cấu hình đa node

### 6. Có cần nhiều node hay chỉ một node?
  * Đối với model nhỏ đến trung bình (đến 13B), một node với nhiều GPU là đủ.
  * Đối với model lớn hơn (30B+), cấu hình đa node được khuyến nghị để có bộ nhớ và hiệu suất tốt hơn.

### 7. Yêu cầu bộ nhớ GPU tối thiểu là bao nhiêu?
  * Ít nhất **24GB VRAM mỗi GPU** cho fine-tuning tiêu chuẩn
  * Với **phương pháp LoRA/QLoRA**, bạn có thể fine-tuning trên GPU với 8-16GB VRAM

### 8. Kích thước training dataset có ảnh hưởng đến nhu cầu phần cứng không?
Có. Dataset lớn hơn yêu cầu nhiều VRAM, RAM và dung lượng lưu trữ hơn.
  * Dataset < 20GB → có thể dùng **Managed volume**
  * Dataset > 20GB → yêu cầu **Dedicated network volume**

---
id: "how-to-create-pipeline"
title: "How To Create Pipeline"
description: "Hướng dẫn từng bước tạo pipeline fine-tuning trên FPT AI Factory."
sidebar_label: "How To Create Pipeline"
sidebar_position: 14
---

# How To Create Pipeline

### Bước 1
  * **Chọn Base Model:**
    * Chọn một model nền tảng từ Model Catalog (ví dụ: DeepSeek, Gemma, Llama, Qwen) hoặc kho lưu trữ Private Model của bạn. Các model khác nhau về kích thước (từ 0.5B đến 72B tham số), loại (LLM, VLM) và giai đoạn training (pre-trained hoặc instruction-tuned).
  * **Chọn Trainer:**
    * Chọn phương pháp training như SFT (Supervised Fine-tuning), DPO (Direct Preference Optimization) hoặc Pre-training, tùy thuộc vào tác vụ và loại dữ liệu của bạn.
  * **Chọn Volume:**
    * Chọn loại lưu trữ dựa trên kích thước dataset: Managed Volume cho dataset dưới 20GiB hoặc Dedicated Network Volume cho dataset lớn hơn cần cấp phát thủ công.

### Bước 2
  * **Chọn Dataset Format:**
    * Chọn định dạng phù hợp (Alpaca, ShareGPT, Corpus, v.v.) dựa trên trainer đã chọn.
  * **Chọn Dataset:**
    * Tải lên training dataset và evaluation dataset hoặc kết nối với Data Hub. Đảm bảo chất lượng dữ liệu, tính nhất quán và định dạng đúng để tối ưu hóa hiệu suất model.

### Bước 3
  * **Thiết lập Hyperparameter:**
    * Cấu hình các tham số training như batch size, learning rate, epoch và cài đặt optimizer. Các tùy chọn nâng cao có sẵn cho DPO, LoRA và tối ưu hóa runtime.
  * **Thiết lập Infrastructure:**
    * Hỗ trợ cả cấu hình single-node và multi-node, với tối đa 16 node

### Bước 4
  * **Hoàn tất:**
    * Đặt tên cho pipeline và tùy chọn thêm mô tả. Bạn sẽ nhận được thông báo qua email khi pipeline thành công hoặc thất bại.

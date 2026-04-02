---
id: "when-to-use-model-fine-tuning"
title: "When To Use Model Fine Tuning"
description: "Model Fine-tuning hữu ích khi bạn cần model hiểu kiến thức chuyên ngành hoặc thực hiện tốt hơn một tác vụ cụ thể."
sidebar_label: "When To Use Model..."
sidebar_position: 4
---

# When To Use Model Fine Tuning

Model Fine-tuning hữu ích khi:
  * Bạn muốn model hiểu **kiến thức chuyên ngành** (ví dụ: y tế, pháp lý, tài chính).
  * Bạn muốn hiệu suất tốt hơn cho **một tác vụ cụ thể** (ví dụ: dịch thuật, tóm tắt, tạo mã).
  * Bạn cần model phù hợp với **giọng điệu và phong cách cụ thể** (ví dụ: văn bản trang trọng, giọng điệu thương hiệu).
  * Bạn cần **độ chính xác cao hơn** so với những gì prompt engineering hoặc embedding có thể cung cấp.

Nhưng Model Fine-tuning **không** cần thiết khi:
  * Tác vụ của bạn có thể giải quyết bằng **prompt engineering** hoặc **one-shot/few-shot examples**.
  * Bạn chỉ cần lọc/phân loại nội dung (embedding model + bộ phân loại có thể đủ dùng).

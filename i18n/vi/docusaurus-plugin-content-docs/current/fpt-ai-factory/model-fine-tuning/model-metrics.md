---
id: "model-metrics"
title: "Model Metrics"
description: "Lưu ý: Model metrics chỉ được bật khi execution pipeline đang ở trạng thái Running và giai đoạn Training."
sidebar_label: "Model Metrics"
sidebar_position: 37
---

# Model Metrics

**Lưu ý:** Model metrics chỉ được bật khi execution pipeline đang ở trạng thái **Running** và giai đoạn **Training**.

[![Alt text](https://fptcloud.com/wp-content/uploads/2025/02/Model-metrics-1.png)](https://fptcloud.com/wp-content/uploads/2025/02/Model-metrics-1.png)

**Model metrics** được thu thập để theo dõi hiệu suất training của các model AI trong và sau quá trình fine-tuning. Các số liệu này giúp phát hiện các bất thường trong training, hướng dẫn điều chỉnh hyperparameter và cải thiện hiệu suất model.

Số liệu training:

| Số liệu | Đánh giá gì |
| --- | --- |
| **loss** | Đo lường mức độ học của model. Loss cao nghĩa là dự đoán kém; loss thấp nghĩa là model đang khớp tốt với dữ liệu. |
| **learning_rate** | Kiểm soát tốc độ học của model. Learning rate quá cao có thể gây mất ổn định; quá thấp có thể làm chậm quá trình training. |
| **grad_norms** | Cho biết độ lớn của gradient. Giúp phát hiện các vấn đề như vanishing hoặc exploding gradient, ảnh hưởng đến việc học. |
| **epoch** | Theo dõi số lần model đã duyệt qua toàn bộ dữ liệu training. Hữu ích để theo dõi tiến trình học theo thời gian. |

Số liệu đánh giá:

**Lưu ý:** Chỉ hiển thị khi sử dụng dữ liệu đánh giá.

| Số liệu | Đánh giá gì |
| --- | --- |
| **eval_runtime** | Đo lường thời gian thực hiện quá trình đánh giá. Hữu ích để đánh giá hiệu năng. |
| **eval_samples_per_second** | Cho biết thông lượng đánh giá. Giá trị cao hơn tốt hơn cho xác thực model nhanh hơn. |
| **eval_steps_per_second** | Đo số bước đánh giá hoàn thành mỗi giây. Phản ánh hiệu quả đánh giá. |
| **eval_loss** | Đo lường mức độ model tổng quát hóa trên dữ liệu chưa thấy. Giúp phát hiện overfitting hoặc underfitting. |

Số liệu hiệu suất training:

| Số liệu | Đánh giá gì |
| --- | --- |
| **train_runtime** | Tổng thời gian dành cho training. Hữu ích để ước tính chi phí và hiệu quả training. |
| **train_samples_per_second** | Đo thông lượng training. Giá trị cao hơn cho thấy training nhanh hơn. |
| **train_steps_per_second** | Cho biết số bước training hoàn thành mỗi giây. Phản ánh tốc độ training. |
| **total_flos** | Tổng số phép tính dấu phẩy động được sử dụng. Giúp ước tính chi phí tính toán và độ phức tạp của model. |
| **train_loss** | Đo lường mức độ model khớp với dữ liệu training. Nên giảm theo thời gian nếu training có hiệu quả. |

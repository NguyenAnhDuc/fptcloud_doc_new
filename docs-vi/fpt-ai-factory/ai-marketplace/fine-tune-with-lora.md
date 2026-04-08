---
id: "fine-tune-with-lora"
title: "Fine-tune với LoRA"
description: "Tìm hiểu cách tạo và quản lý các công việc fine-tune bằng LoRA trên AI Marketplace."
sidebar_label: "Fine-tune với LoRA"
sidebar_position: 7
---

# Fine-tune với LoRA

[![Sơ đồ quy trình fine-tune hiển thị các giai đoạn tải dữ liệu, huấn luyện và triển khai](https://fptcloud.com/wp-content/uploads/2025/02/Finetune.png)](https://fptcloud.com/wp-content/uploads/2025/02/Finetune.png)

## Cách tạo công việc fine-tune với LoRA?

Để fine-tune một mô hình với LoRA, làm theo hướng dẫn bên dưới.

:::note
- Bạn phải đăng nhập trước khi bắt đầu công việc fine-tune.
- Đảm bảo bạn có đủ số dư (credit).
- Phải có ít nhất một base model sẵn sàng để fine-tune.
:::

### Các bước thực hiện

1. **Vào trang Fine-tuning Jobs** và nhấp **+ Fine-tune model**.
2. Trong pop-up, nhập **Tên** cho công việc fine-tune của bạn.
   - Xác thực: bắt buộc, tối đa 100 ký tự, hỗ trợ chữ cái Unicode, chữ số, `-`, `_`, `.`

[![Pop-up tạo công việc fine-tune với các trường tên và base model](https://fptcloud.com/wp-content/uploads/2025/02/pop-up-fine-tune.png)](https://fptcloud.com/wp-content/uploads/2025/02/pop-up-fine-tune.png)

3. **Chọn base model** từ danh sách dropdown.
   - Ví dụ: `gemma-3-27b-it`, `Qwen3-4B-Instruct-2507`, `Llama-3.3-70B-Instruct`
4. **Chọn định dạng dataset** từ danh sách dropdown: Alpaca / ShareGPT / ShareGPT_Image.
5. **Tải lên file dữ liệu huấn luyện** của bạn.
   - Các định dạng hỗ trợ: CSV, JSON, JSONL, ZIP, Parquet (< 100 MB).
6. _(Tùy chọn)_ **Tải lên dữ liệu validation**.

[![Pop-up fine-tune hiển thị các trường cấu hình hyperparameter](https://fptcloud.com/wp-content/uploads/2025/02/pop-up2.png)](https://fptcloud.com/wp-content/uploads/2025/02/pop-up2.png)

7. _(Tùy chọn)_ **Cấu hình hyperparameter**:
   - **Learning rate:** số thực, `1e-6 → 1e-4` (ví dụ: `0.00001`)
   - **Number of epochs:** số nguyên `1–20` (mặc định = `5`)
8. Nhấp **Create** để bắt đầu công việc fine-tune.
   - Công việc sẽ xuất hiện trong bảng với trạng thái **Running**.

:::tip
Fine-tune với LoRA thường chỉ mất vài phút.
:::

---

## Cách quản lý các công việc fine-tune?

Trên trang **Fine-tuning Jobs**, bạn có thể:

- **View detail** — mở chi tiết pipeline trong AI Studio.
- **Deploy model** — sau khi huấn luyện hoàn thành, triển khai mô hình LoRA.
- **Cancel job** — hủy một công việc đang chạy (yêu cầu xác nhận).
- **Delete job** — xóa vĩnh viễn một công việc (yêu cầu xác nhận).

### Trạng thái

- **Running** (vàng)
- **Succeeded** (xanh lá)
- **Failed** (đỏ)
- **Canceled** (xám)

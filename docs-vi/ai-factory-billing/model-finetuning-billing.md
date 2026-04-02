---
id: "model-finetuning-billing"
title: "Billing Model Fine-Tuning"
description: "Chi tiết tính phí dịch vụ Model Fine-Tuning trên FPT AI Factory."
sidebar_label: "Billing Model Fine-Tuning"
sidebar_position: 12
---

# Billing Model Fine-Tuning

| **Logic tính phí** | **Mức dùng tối thiểu tính phí** | **Thời điểm tính phí** |
| --- | --- | --- |
| - Dựa trên thời gian sử dụng của một pipeline<br/>- Lượng sử dụng chưa tính phí còn lại sẽ được làm tròn lên đến bội số 15 phút gần nhất | 15 phút | Sử dụng ≥ 1/4 GPU-hour |

**Công thức tính phí:**
  * **Thời gian sử dụng**: Tính bằng GPU-hour (làm tròn lên đến bội số 15 phút)
  * **GPU**: Số GPU đã sử dụng
  * **Chi phí**: `Thời gian sử dụng (giờ) × số GPU × đơn giá từ bảng giá`

**Ví dụ:**
> Bạn sử dụng **1 GPU NVIDIA H100 SXM5** giá **$5.5/GPU-hour** để huấn luyện model Qwen/Qwen3-32B trong **8 phút**
  * Thời gian sử dụng: 8 phút → làm tròn lên 15 phút (0.25 GPU-hour)
  * GPU: 1
  * Chi phí: `$5.5 × 1 GPU × 0.25 GPU-hour = $1.375`

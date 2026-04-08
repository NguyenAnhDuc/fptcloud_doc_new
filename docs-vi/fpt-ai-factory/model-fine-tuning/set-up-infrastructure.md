---
id: "set-up-infrastructure"
title: "Set Up Infrastructure"
description: "Chúng tôi hỗ trợ cả cấu hình single-node và multi-node, với tối đa 16 node."
sidebar_label: "Set Up Infrastructure"
sidebar_position: 25
---

# Set Up Infrastructure

Chúng tôi hỗ trợ cả cấu hình single-node và multi-node, với tối đa 16 node:

[![Alt text](https://fptcloud.com/wp-content/uploads/2025/02/Infrastructure.png)](https://fptcloud.com/wp-content/uploads/2025/02/Infrastructure.png)

Chúng tôi khuyến nghị bạn mở rộng infrastructure phù hợp như sau:
  * Số lượng GPU phụ thuộc vào kích thước model:
    * **< 1B tham số**: 1 GPU (2GB VRAM) là đủ
    * **7B tham số**: 2-4 GPU (40GB VRAM mỗi cái)
    * **13B tham số**: khuyến nghị 4-8 GPU
    * **30B+ tham số**: yêu cầu 8+ GPU và cấu hình đa node
  * Khi nào dùng single-node hoặc multi-node:
    * Đối với model nhỏ đến trung bình (đến 13B), **single-node** với nhiều GPU là đủ
    * Đối với model lớn (30B+), cấu hình **multi-node** được khuyến nghị để có bộ nhớ và hiệu suất tốt hơn
  * Yêu cầu bộ nhớ GPU tối thiểu:
    * Ít nhất 24GB mỗi GPU cho fine-tuning tiêu chuẩn.
    * Bạn có thể fine-tuning trên GPU với 8-16GB VRAM sử dụng phương pháp LoRA hoặc QLoRA.

**Ví dụ:**

Model: Llama-3.1-8B-Instruct
  * Training type: Full
    * Số lượng GPU: có thể vừa với 2 GPU (gần 99% sử dụng) -> 4 GPU để runtime ổn định hơn
    * Distributed backend: DeepSpeed
    * ZeRO stage: 3
    * Batch size per device: 1
    * Tất cả các tham số khác có thể để mặc định
  * Training type: LoRA
    * Số lượng GPU: có thể vừa với 1 GPU
    * LoRA rank: 16
    * Batch size per device: 1
    * Tất cả các tham số khác có thể để mặc định
  * Để tính toán cấu hình training phù hợp nhất, bạn có thể tham khảo tại đây: <https://rahulschand.github.io/gpu_poor/> (overhead 10-20%)

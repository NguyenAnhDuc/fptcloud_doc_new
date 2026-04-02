---
id: "modas-billing"
title: "Billing MoDaS"
description: "Chi tiết tính phí dịch vụ MoDaS trên FPT AI Factory."
sidebar_label: "Billing MoDaS"
sidebar_position: 13
---

# Billing MoDaS

| **Logic tính phí** | **Mức dùng tối thiểu tính phí** | **Thời điểm tính phí** |
| --- | --- | --- |
| Dựa trên khối lượng sử dụng (số token/ký tự) | 1 token | Mỗi 5 phút |

**Công thức tính phí:**
  * **Token sử dụng**: Input tokens + Output tokens
  * **Chi phí**: `Input tokens × giá input / 1M` + `Output tokens × giá output / 1M`

**Ví dụ:**
> Bạn sử dụng model **Qwen3-32B** giá **$0.165/1M input tokens** và **$0.187/1M output tokens**, với **13.394 input tokens** và **127 output tokens**
  * Token sử dụng: 13.394 input tokens và 127 output tokens
  * Chi phí = `(13.394 × 0.165 + 127 × 0.187) / 1.000.000 = $0.0022`

---
id: "model-hub-billing"
title: "Billing Model Hub"
description: "Chi tiết tính phí dịch vụ Model Hub trên FPT AI Factory."
sidebar_label: "Billing Model Hub"
sidebar_position: 12
---

# Billing Model Hub

Tính phí dựa trên khối lượng sử dụng và thời gian sử dụng của một pipeline.
  * Mỗi giờ được chia thành 12 block — **1 block = 5 phút**.
  * Các block nhỏ hơn có nghĩa là bạn không bị tính phí cho thời gian nhàn rỗi.
  * Nếu model của bạn đang hoạt động, chúng tôi đo lượng storage (tính bằng GB) đã sử dụng trong block đó.
  * Nếu model của bạn bị xóa, không có gì được ghi lại và bạn không bị tính phí cho block đó.
  * Vào cuối giờ, chúng tôi cộng tổng tất cả lượng sử dụng đã ghi lại để tính hóa đơn.

**Đơn giá**: `01 GB/giờ` (Mỗi 1 giờ)

---

### Công thức tính phí

Lượng sử dụng storage theo giờ = Tổng lượng sử dụng trong 1 giờ = Tổng (Lượng sử dụng trong mỗi block 5 phút)

---

### Ví dụ

| Khung giờ | Kích thước block ghi nhận (GB) | Giá / 1 phút | Lượng sử dụng |
| --- | --- | --- | --- |
| 00:00–00:05 | 5 | 0.000013 | 5GB × 0.000013 × 5 phút = 0.000325 |
| 00:05–00:10 | 5 | 0.000013 | 5GB × 0.000013 × 5 phút = 0.000325 |
| 00:10–00:15 | 5 | 0.000013 | 5GB × 0.000013 × 5 phút = 0.000325 |
| 00:15–00:20 | 7 | 0.000013 | 7GB × 0.000013 × 5 phút = 0.000455 |
| 00:20–00:25 | 7 | 0.000013 | 7GB × 0.000013 × 5 phút = 0.000455 |
| 00:25–00:30 | 7 | 0.000013 | 7GB × 0.000013 × 5 phút = 0.000455 |
| 00:30–00:35 | 7 | 0.000013 | 7GB × 0.000013 × 5 phút = 0.000455 |
| 00:35–00:40 | 7 | 0.000013 | 7GB × 0.000013 × 5 phút = 0.000455 |
| 00:40–00:45 | 7 | 0.000013 | 7GB × 0.000013 × 5 phút = 0.000455 |
| 00:45–00:50 | 7 | 0.000013 | 7GB × 0.000013 × 5 phút = 0.000455 |
| 00:50–00:55 | 7 | 0.000013 | 7GB × 0.000013 × 5 phút = 0.000455 |
| 00:55–01:00 | 7 | 0.000013 | 7GB × 0.000013 × 5 phút = 0.000455 |

---

**TỔNG CỘNG (1 giờ)**
Tổng 12 bản ghi = **$0.0050**

---
id: "gpu-container-billing"
title: "Billing GPU Container"
description: "Chi tiết tính phí dịch vụ GPU Container trên FPT AI Factory."
sidebar_label: "Billing GPU Container"
sidebar_position: 11
---

# Billing GPU Container

| **Logic tính phí** | **Mức dùng tối thiểu tính phí** | **Thời điểm tính phí** |
| --- | --- | --- |
| - GPU Instance:<br/>- Số GPU<br/>- Thời gian sử dụng (phút)<br/>- Trạng thái: Running<br/><br/>- Persistent Storage:<br/>- Dung lượng GB<br/>- Thời gian sử dụng (phút)<br/>- Trạng thái: Running/Stopped | 1 phút | Mỗi 15 phút |

**Công thức tính phí:**
  * **Thời gian sử dụng**: Tính bằng giờ (không làm tròn lên)
  * **Dung lượng storage**: Tính bằng GB
  * **Chi phí GPU**: Số giờ sử dụng × giá GPU theo giờ
  * **Chi phí storage**: Số giờ sử dụng × GB × giá storage theo giờ
  * **Tổng chi phí**: `Chi phí GPU + Chi phí storage`

**Ví dụ:**
> Bạn sử dụng một container với một GPU H100 (15 CPU, 250 GB RAM, 1 GPU) và 1000 GB temporary storage giá $2.31/giờ cùng với 1000 GB persistent storage giá $0.00013/GB/giờ trong 30 phút
  * Thời gian sử dụng: 30 phút = 0.5 giờ
  * Chi phí GPU: `0.5 × $2.31 = $1.16`
  * Chi phí storage: `1000 × $0.00013 × 0.5 = $0.0015`
  * Tổng: `$1.16 + $0.0015 = $1.1615`

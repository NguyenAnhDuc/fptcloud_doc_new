---
id: "auto-blocking-filter"
title: "Auto Blocking Filter"
description: "Thực hiện đưa vào ‘Blocking list’ các ip thỏa mãn theo 'HTTP Dos/Risk Level by Rule' đã thiết lập"
sidebar_label: "Auto Blocking Filter"
sidebar_position: 3
---

# Auto Blocking Filter

Thực hiện đưa vào ‘Blocking list’ các ip thỏa mãn theo 'HTTP Dos/Risk Level by Rule' đã thiết lập
[![file](/img/migrated/image-1714116699139-ec997656.png)](/img/migrated/image-1714116699139-ec997656.png)
Risk Level by Rule: thiết lập các trường điều kiện để đưa ip vào blocklist bao gồm:
  * Duration: Phạm vi thời gian tích lũy risk level
  * Cumulative Risk Level: Mức độ rủi ro tích lũy tương ứng với mỗi rule risk trong Policy Settings. Khi đạt đến ngưỡng, tự động block ip và đưa vào ‘Blocking list’
  * Blocking Duration: Thời gian thực hiện block. Tự động xóa bỏ khỏi IP Filter và danh sách block khi hết thời gian HTTP DoS: Thiết lập các trường điều kiện nhằm chống DoS và đưa ip attack vào blacklist bao gồm:

  1. Slow HTTP Header DoS, Slow HTTP Read DoS:
     * Duration: Thời gian ghi nhận attack
     * Traffic Latency: Thời gian trì hoãn, kéo dài từ cùng mội IP Source
     * No. of Attempts: Số lần trì hoãn, kéo dài được ghi nhận trong giới hạn. Nếu vượt quá số lần, đưa ip vào blocklist
     * Blocking Duration: Thời gian thực hiện block
  2. Slow HTTP POST DoS (tính năng thêm)
     * Duration(s): Thời gian ghi nhận attack
     * Traffic Volume(bytes): Nếu lưu lượng thấp hơn mức đặt, đó là một cuộc attack
     * Exclude from Auto Blocking: Thiết lập ngoại lệ

---
id: "auto-blocking-filter"
title: "Auto Blocking Filter"
sidebar_label: "Auto Blocking Filter"
sidebar_position: "21"
---

# Auto Blocking Filter

Thực hiện đưa ando ‘Blocking list’ the ip thỏa mãn theo 'HTTP Dos/Risk Level by Rule' has been setup
[![file](/img/migrated/image-1714116699139-ec997656.png)](/img/migrated/image-1714116699139-ec997656.png)
Risk Level by Rule: setup the trường điều kiện to đưa ip ando blocklist including:
  * Duration: Phạm vi thời gian tích lũy risk level
  * Cumulative Risk Level: Mức độ rủi ro tích lũy corresponding with mỗi rule risk in Policy Settings. Khi đạt đến ngưỡng, tự động block ip and đưa ando ‘Blocking list’
  * Blocking Duration: Thời gian thực hiện block. Tự động xóa bỏ khỏi IP Filter and list block when hết thời gian HTTP DoS: Thiết lập the trường điều kiện nhằm chống DoS and đưa ip attack ando blacklist including:

  1. Slow HTTP Header DoS, Slow HTTP Read DoS:
     * Duration: Thời gian ghi nhận attack
     * Traffic Latency: Thời gian trì hoãn, kéo dài from cùng mội IP Source
     * No. of Attempts: Số lần trì hoãn, kéo dài is ghi nhận in giới hạn. Nếu vượt quá số lần, đưa ip ando blocklist
     * Blocking Duration: Thời gian thực hiện block
  2. Slow HTTP POST DoS (feature thêm)
     * Duration(s): Thời gian ghi nhận attack
     * Traffic Volume(bytes): Nếu lưu lượng thấp hơn mức đặt, that là a cuộc attack
     * Exclude from Auto Blocking: Thiết lập ngoại lệ

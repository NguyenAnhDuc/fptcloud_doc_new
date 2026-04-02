---
id: "giam-sat-group"
title: "Giám sát Group"
description: "Hướng dẫn giám sát hiệu suất và tài nguyên của Autoscale Group trên FPT Autoscale."
sidebar_label: "Giám sát Group"
sidebar_position: 8
---

# Giám sát Group

1. Truy cập trang **Autoscaling > Autoscale Group**. Nhấn vào tên group cần giám sát.

   [![Danh sách group, nhấn vào tên group](/img/migrated/Screenshot-2024-10-02-042416-72202578.png)](/img/migrated/Screenshot-2024-10-02-042416-72202578.png)

2. Chuyển đến tab **Monitoring**.

   Trang Monitoring cung cấp các biểu đồ trực quan về hành vi sử dụng tài nguyên của group. Thông qua việc giám sát thường xuyên, bạn có căn cứ để xây dựng chiến lược scale hiệu quả cho từng cụm dịch vụ cụ thể.

   [![Bảng điều khiển Monitoring](/img/migrated/screencapture-viewvm-hcm10-fptcloud-d-Ko-7d7256c2.png)](/img/migrated/screencapture-viewvm-hcm10-fptcloud-d-Ko-7d7256c2.png)

   **Compute and memory**

   - CPU Usage (%)
   - RAM Usage (%)

   **Network**

   - Bandwidth (bps)
   - Total Packets Transmitted (pps)

   **Storage**

   - Disk Read/Write
   - Total Disks Throughput

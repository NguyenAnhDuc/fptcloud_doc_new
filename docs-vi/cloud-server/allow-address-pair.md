---
id: "allow-address-pair"
title: "Tổng quan Allow Address Pair"
description: "Thêm cặp IP-MAC vào card NIC để hỗ trợ HA và cấu hình mạng nâng cao."
sidebar_label: "Tổng quan Allow Address Pair"
sidebar_position: 71
pagination_next: null
---

# Tổng quan Allow Address Pair

Mặc định, máy ảo cặp địa chỉ MAC và IP để chống giả mạo. Allow Address Pair cho phép thêm cặp IP (hoặc CIDR) và MAC vào card NIC — hữu ích cho cấu hình HA (High Availability).

:::note
Một card NIC có thể cấu hình nhiều Address Pair. Một Address Pair có thể cấu hình cho nhiều card NIC của các Instance khác nhau.
:::

## Thêm Address Pair

1. Tại trang **Instance Detail**, mở tab **Network Interface**.
2. Chọn card NIC cần cấu hình, nhấn **Allow Address Pair**.
3. Nhập IP/CIDR và MAC address, nhấn **Save**.

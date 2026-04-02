---
id: "question"
title: "NAT Instance có thể được sử dụng như một instance thông thường không?"
description: "Giải đáp câu hỏi về việc sử dụng NAT Instance và số lượng isolated network tối đa có thể hỗ trợ."
sidebar_label: "NAT Instance có thể được sử dụng như một instance thông thường không?"
sidebar_position: 6
---

# NAT Instance có thể được sử dụng như một instance thông thường không?

NAT Instance được xây dựng trên hệ điều hành Ubuntu, được cài đặt thêm các rule hỗ trợ NAT, và có thể được sử dụng như một instance thông thường của hệ thống.

## Một NAT Instance có thể hỗ trợ NAT cho tối đa bao nhiêu isolated network?

Ngoài primary NIC dùng cho routed network, NAT Instance có thể thêm tối đa 9 NIC khác, mỗi NIC thuộc một isolated network. Các instance trong mỗi network cần truy cập Internet chỉ cần chuyển default gateway về IP của NIC NAT Instance tương ứng.

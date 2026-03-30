---
id: "question-"
title: "NAT Instance có thể sử dụng như Instance thông thường không?"
description: "Câu hỏi thường gặp về NAT Instance."
sidebar_label: "FAQ: NAT Instance"
sidebar_position: 107
---

# NAT Instance có thể sử dụng như Instance thông thường không?

Có. NAT Instance được xây dựng trên Ubuntu, cài thêm các rule hỗ trợ NAT — và có thể sử dụng như một Instance thông thường.

Ngoài primary NIC dùng cho routed network, NAT Instance có thể thêm tối đa 9 NIC thuộc 9 dãy isolated network. Các Instance trong mỗi network chỉ cần chuyển default gateway về NIC của NAT Instance để truy cập internet.

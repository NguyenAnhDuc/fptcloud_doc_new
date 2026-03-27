---
id: "question"
title: "Nat Instance có thể được sử dụng như 1 instance thông thường không?"
description: "Nat instance được xây dựng trên hệ điều hành Ubuntu, được cài đặt thêm các rule hỗ trợ nat, và được sử dụng như một inst"
sidebar_label: "Nat Instance có thể được sử dụng như 1 instance thông thường không?"
sidebar_position: 6
---

# Question

Nat instance được xây dựng trên hệ điều hành Ubuntu, được cài đặt thêm các rule hỗ trợ nat, và được sử dụng như một instance thông thường của hệ thống.
Một Nat instance có thể hỗ trợ Nat cho tối đa bao nhiêu isolated network
Ngoài trừ primary NIC cần dùng cho routed network, Nat instance thể add thêm 9 NIC khác thuộc vào 9 dãy isolated network. Các instance trong mỗi network cần truy cập Internet chỉ cần chuyển default gateway về NIC của Nat instance.
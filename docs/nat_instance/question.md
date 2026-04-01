---
id: "question"
title: "Nat Instance có thể được sử dụng như 1 instance thông thường không?"
sidebar_label: "Nat Instance có thể được sử dụng như 1 instance thông thường không?"
sidebar_position: "6"
---

# Question

Nat instance is xây dựng trên hệ điều hành Ubuntu, is cài đặt thêm the rule hỗ trợ nat, and is sử dụng như a instance thông thường of hệ thống.
Một Nat instance can hỗ trợ Nat for tối đa bao nhiêu isolated network
Ngoài trừ primary NIC cần dùng for routed network, Nat instance thể add thêm 9 NIC khác thuộc ando 9 dãy isolated network. Các instance in mỗi network cần truy cập Internet chỉ cần chuyển default gateway về NIC of Nat instance.

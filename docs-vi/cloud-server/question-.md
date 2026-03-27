---
id: "question-"
title: "Question "
description: "* Nat instance được xây dựng trên hệ điều hành Ubuntu, được cài đặt thêm các rule hỗ trợ Nat, và được sử dụng như một in"
sidebar_label: "Question"
sidebar_position: 107
---

# Question 

* Nat instance được xây dựng trên hệ điều hành Ubuntu, được cài đặt thêm các rule hỗ trợ Nat, và được sử dụng như một instance thông thường của hệ thống.

Một Nat instance có thể hỗ trợ Nat cho tối đa bao nhiêu isolated network
  * Ngoài trừ primary NIC cần dùng cho routed network, Nat instance thể add thêm 9 NIC khác thuộc vào 9 dãy isolated network. Các instance trong mỗi network cần truy cập Internet chỉ cần chuyển default gateway về NIC của Nat instance.
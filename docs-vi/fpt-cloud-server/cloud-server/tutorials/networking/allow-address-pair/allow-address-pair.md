---
id: "allow-address-pair"
title: "Tổng quan Allow Address Pair"
description: "Allow Address Pair là tính năng cho phép thêm cặp địa chỉ IP và MAC vào interface của instance, hỗ trợ cấu hình High Availability."
sidebar_label: "Tổng quan Allow Address Pair"
sidebar_position: 1
---

# Tổng quan Allow Address Pair

## Giới thiệu

Theo mặc định, máy tính (hoặc máy ảo) sẽ liên kết cặp địa chỉ MAC và IP với nhau nhằm chống giả mạo thông tin. Điều này có nghĩa là traffic đến một địa chỉ IP sẽ được gửi đến máy có địa chỉ MAC tương ứng.

Tính năng Allow Address Pair cho phép bạn thêm cặp địa chỉ IP (hoặc CIDR) và địa chỉ MAC vào một interface (card NIC) của instance. Người quản trị có thể tận dụng tính năng này cho nhiều mục đích, đặc biệt là cấu hình HA (High Availability).

---
id: "change-network-config"
title: "Thay đổi cấu hình mạng"
description: "Hướng dẫn thay đổi địa chỉ IP tĩnh sau khi chỉnh sửa cấu hình NIC trên FPT Smart Cloud."
sidebar_label: "Thay đổi cấu hình mạng"
sidebar_position: 1
---

# Thay đổi cấu hình mạng

Khi bạn thay đổi cấu hình card NIC trên hệ thống Cloud của FPT Smart Cloud, địa chỉ IP bên trong máy sẽ không tự cập nhật theo. Bạn cần cấu hình thủ công địa chỉ IP tĩnh mới trực tiếp trong hệ điều hành.

## Giới thiệu

Có nhiều lý do khiến bạn cần đặt lại địa chỉ IP tĩnh, chẳng hạn như cấu hình máy chủ cố định hoặc kiểm soát dải IP trong mạng nội bộ.

:::caution
Đặt địa chỉ IP tĩnh là tính năng mạng nâng cao, yêu cầu kiến thức cơ bản về TCP/IP. Cấu hình sai có thể gây xung đột mạng hoặc làm thiết bị mất kết nối.
:::

Tài liệu này hướng dẫn cách cập nhật IP tĩnh trên ba hệ điều hành phổ biến:

- Ubuntu Server
- Windows Server
- CentOS

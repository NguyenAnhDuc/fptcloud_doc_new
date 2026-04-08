---
id: "affinity-anti-affinity"
title: "Tổng quan Affinity & Anti-Affinity"
description: "Quản lý Instance Group với chính sách Affinity & Anti-Affinity trên FPT Cloud."
sidebar_label: "Tổng quan"
sidebar_position: 1
---

# Tổng quan Affinity & Anti-Affinity

Affinity và Anti-Affinity giúp bạn kiểm soát cách đặt các máy ảo trên các máy chủ vật lý — đặc biệt khi bạn cần đảm bảo hiệu năng hoặc tính sẵn sàng cao.

Bạn có thể tạo các Instance Group với chính sách Soft Affinity hoặc Soft Anti-Affinity. Khi khởi chạy máy ảo, hệ thống sẽ dựa vào chính sách của Instance Group để quyết định vị trí đặt máy ảo.

## Các chính sách hỗ trợ

| Chính sách | Mô tả |
|---|---|
| **Soft Affinity** | Ưu tiên đặt các máy ảo trong cùng Instance Group trên cùng một máy chủ vật lý. |
| **Soft Anti-Affinity** | Ưu tiên đặt các máy ảo trong cùng Instance Group trên các máy chủ vật lý khác nhau. |

## Giới hạn

- Tối đa 10 Instance Group mỗi tenant.
- Mỗi Instance Group chứa tối đa 10 Instance.

## Hướng dẫn sử dụng

- [Thiết lập ban đầu](/vi/docs/fpt-cloud-server/cloud-server/tutorials/manage-instance-group-affinity-and-anti-affinity/initial-setup)
- [Khởi tạo Instance Group](/vi/docs/fpt-cloud-server/cloud-server/tutorials/manage-instance-group-affinity-and-anti-affinity/create-instance-group)
- [Gắn Instance vào Instance Group](/vi/docs/fpt-cloud-server/cloud-server/tutorials/manage-instance-group-affinity-and-anti-affinity/add-instance-instance-group)
- [Xóa Instance Group](/vi/docs/fpt-cloud-server/cloud-server/tutorials/manage-instance-group-affinity-and-anti-affinity/delete-instance-group)

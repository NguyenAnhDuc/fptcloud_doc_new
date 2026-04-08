---
id: "hpc-snapshot-backup"
title: "Sao lưu image"
description: "Tạo bản sao lưu (Snapshot) cho image trên HPC Portal để khôi phục khi gặp sự cố."
sidebar_label: "Sao lưu image"
sidebar_position: 5
---

# Sao lưu image

Snapshot tạo bản sao lưu của ổ đĩa, phần mềm và ứng dụng trên máy — giúp bạn khôi phục bất cứ lúc nào nếu gặp sự cố.

:::warning
- Cần tắt máy trước khi tạo Snapshot.
- Sử dụng tính năng sau khi đã thiết lập môi trường hoàn tất.
- Mặc định mỗi tài khoản có thể tạo 1 bản Snapshot. Liên hệ quản trị viên để cấp thêm tài nguyên backup.
:::

## Tạo Snapshot

1. Chọn **Action** → **Snapshot**.
2. Tại hộp thoại **Snapshot image**, nhấn **Create snapshot**, nhập thông tin và nhấn **Create**.

## Khôi phục từ Snapshot

Nhấn **Restore** trên bản Snapshot đã tạo.

:::note
Để tạo bản Snapshot mới, chọn **Action** → **Remove** bản Snapshot cũ rồi tạo lại từ đầu.
:::

## Bước tiếp theo

- [Cố định máy vật lý](/docs/vi/fpt-cloud-server/cloud-server/tutorials/manage-gpu-server-with-hpc-portal/hpc-hardware-fixation)

---
id: "create-instance-group"
title: "Khởi tạo Instance Group"
description: "Hướng dẫn tạo mới một Instance Group với chính sách Affinity hoặc Anti-Affinity."
sidebar_label: "Khởi tạo Instance Group"
sidebar_position: 3
---

# Khởi tạo Instance Group

Bạn có thể tạo một Instance Group mới với chính sách Soft Affinity hoặc Soft Anti-Affinity.

:::warning
Instance Group sau khi tạo không thể chỉnh sửa. Nếu cần thay đổi, hãy xóa nhóm hiện tại và tạo nhóm mới.
:::

1. Chọn **Compute Engine** → **Instance Group** → **Create Instance Group**.

   ![Màn hình Instance Group Management](/img/migrated/image-1705024581953-a55d4346.png)

2. Điền các thông tin:
   - **Name**: tên Instance Group.
   - **Policy**: chọn **Soft Affinity** hoặc **Soft Anti-Affinity**.

   ![Form tạo Instance Group](/img/migrated/image-1705024842925-f64a0e6f.png)

3. Nhấn **Create Instance Group**.

Instance Group mới hiển thị trong danh sách **Instance Group Management**.

![Instance Group đã tạo thành công](/img/migrated/image-1705024897223-9b650495.png)

---
id: "configure-timereconcile"
title: "Cấu hình TimeReconcile"
description: "Hướng dẫn cấu hình thời gian kiểm tra đồng bộ giữa cluster Kubernetes và repository"
sidebar_label: "Cấu hình TimeReconcile"
sidebar_position: 18
---

# Cấu hình TimeReconcile

ArgoCD kiểm tra thay đổi giữa cluster Kubernetes và repository deployment theo chu kỳ. Mặc định chu kỳ là 3 phút. FPT Cloud hỗ trợ cấu hình chu kỳ này qua giao diện Portal.

1. Tại màn hình **Configuration** > **TimeReconcile**.

[![](/img/migrated/Picture37-4-2e5b4285.png)](/img/migrated/Picture37-4-2e5b4285.png)

2. Nhập thời gian reconcile mong muốn.

:::note
Ví dụ giá trị hợp lệ: `10s`, `20s`, `30s`, `1h`
:::

[![](/img/migrated/Picture38-4-9e381d9c.png)](/img/migrated/Picture38-4-9e381d9c.png)

[![](/img/migrated/Picture39-4-21be09d3.png)](/img/migrated/Picture39-4-21be09d3.png)

3. Kết quả sau khi cấu hình:

[![](/img/migrated/Picture40-2-90742bf4.png)](/img/migrated/Picture40-2-90742bf4.png)

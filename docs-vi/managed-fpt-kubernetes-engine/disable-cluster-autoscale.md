---
id: "disable-cluster-autoscale"
title: "Tắt tính năng Cluster Autoscale"
description: "Hướng dẫn tắt tính năng Cluster Autoscale trên cluster Managed FPT Kubernetes Engine."
sidebar_label: "Tắt tính năng Cluster Autoscale"
sidebar_position: "15"
---

# Tắt tính năng Cluster Autoscale

**Bước 1:** Ở menu chọn **Kubernetes** để mở trang **Kubernetes Management**. Chọn cluster muốn tắt tính năng Cluster Autoscale.

[![](/img/migrated/30-1-afd6524b.png)](/img/migrated/30-1-afd6524b.png)

**Bước 2:** Chọn **Configure Worker Groups**.

[![](/img/migrated/31-1-f850853b.png)](/img/migrated/31-1-f850853b.png)

**Bước 3:** Đặt số lượng worker tối thiểu và tối đa bằng nhau.

[![](/img/migrated/32-1-dd7a83a3.png)](/img/migrated/32-1-dd7a83a3.png)

:::note
Khi số lượng worker tối thiểu và tối đa trong một worker pool bằng nhau, tính năng Cluster Autoscale sẽ được tắt tự động.
:::

**Bước 4:** Kiểm tra lại thông tin và chọn **Save**.

[![](/img/migrated/33-1-ea1e7929.png)](/img/migrated/33-1-ea1e7929.png)

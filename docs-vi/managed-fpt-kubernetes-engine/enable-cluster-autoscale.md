---
id: "enable-cluster-autoscale"
title: "Bật tính năng Cluster Autoscale"
description: "Hướng dẫn bật tính năng Cluster Autoscale trên cluster Managed FPT Kubernetes Engine."
sidebar_label: "Bật tính năng Cluster Autoscale"
sidebar_position: "14"
---

# Bật tính năng Cluster Autoscale

**Bước 1:** Ở menu chọn **Kubernetes** để mở trang **Kubernetes Management**. Chọn cluster muốn bật tính năng Cluster Autoscale.

[![](/img/migrated/27-1-baec35bd.png)](/img/migrated/27-1-baec35bd.png)

**Bước 2:** Chọn **Configure Worker Groups**.

[![](/img/migrated/28-1-b4b32aec.png)](/img/migrated/28-1-b4b32aec.png)

**Bước 3:** Điều chỉnh số lượng worker tối thiểu và tối đa theo nhu cầu sử dụng.

[![](/img/migrated/29-1-67174b85.png)](/img/migrated/29-1-67174b85.png)

:::note
Khi số lượng worker tối đa lớn hơn số lượng worker tối thiểu, tính năng Cluster Autoscale sẽ được bật tự động.
:::

**Bước 4:** Kiểm tra lại thông tin và chọn **Save** để bật tính năng Cluster Autoscale.

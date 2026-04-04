---
id: "get-cluster-access-information"
title: "Lấy thông tin truy cập cluster"
description: "Hướng dẫn tải file kubeconfig để truy cập cluster Managed FPT Kubernetes Engine."
sidebar_label: "Lấy thông tin truy cập cluster"
sidebar_position: "7"
---

# Lấy thông tin truy cập cluster

**Bước 1:** Ở menu chọn **Kubernetes** để mở trang **Kubernetes Management**. Chọn cluster muốn lấy thông tin truy cập.

[![](/img/migrated/10-1b870f1f.png)](/img/migrated/10-1b870f1f.png)

**Bước 2:** Tại mục **Advanced Config** > **Configuration**, tải file `.kubeconfig` để đăng nhập cluster thông qua kubectl hoặc các công cụ khác.

[![](/img/migrated/11-fa42218b.png)](/img/migrated/11-fa42218b.png)

M-FKE sử dụng native Kubernetes, vì vậy bạn có thể tương tác với cluster bằng kubectl, các công cụ dashboard và các công cụ Kubernetes tiêu chuẩn khác.

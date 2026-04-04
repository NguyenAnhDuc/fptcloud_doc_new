---
id: "access-clusters-detail-information"
title: "Truy cập thông tin chi tiết của cluster"
description: "Hướng dẫn xem thông tin chi tiết của cluster Managed FPT Kubernetes Engine."
sidebar_label: "Truy cập thông tin chi tiết của cluster"
sidebar_position: "6"
---

# Truy cập thông tin chi tiết của cluster

**Bước 1:** Ở menu chọn **Kubernetes** để mở trang **Kubernetes Management**. Chọn tab **Managed** và chọn cluster muốn xem thông tin.

[![](/img/migrated/8-c8cfd8da.png)](/img/migrated/8-c8cfd8da.png)

**Bước 2:** Tab **Overview** hiển thị các thông tin chi tiết của cluster:

[![](/img/migrated/9-316e6773.png)](/img/migrated/9-316e6773.png)

- **Thông tin chung:** Thông tin cơ bản của cluster bao gồm tên, phiên bản Kubernetes, network và trạng thái.
- **Cấu hình worker group:** Danh sách các worker group và cấu hình của từng nhóm (số node tối thiểu/tối đa, CPU, memory, disk).
- **Cấu hình nâng cao:** Các tham số Kubernetes nâng cao (pod network, service network, v.v.).
- **API:** URL của API server.
- **Kubernetes config:** Tải file `.kubeconfig` để truy cập cluster.
- **SSH key:** Tải file SSH key để truy cập các worker node.

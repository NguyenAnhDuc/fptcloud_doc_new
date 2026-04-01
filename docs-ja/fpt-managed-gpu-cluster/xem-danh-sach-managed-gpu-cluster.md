---
id: "xem-danh-sach-managed-gpu-cluster"
title: "Xem Danh Sach Managed Gpu Cluster"
sidebar_label: "Xem Danh Sach Managed Gpu Cluster"
sidebar_position: "5"
---

# Xem Danh Sach Managed Gpu Cluster

Bạn có thể xem và quản lý danh sách các GPU Cluster đã tạo trên trang Managed GPU Cluster Management. Để mở trang Management, hãy thao tác như sau:
Trên **FPT Portal** , ở menu chọn **AI Infrastructure** > **Managed GPU Cluster**. Hệ thống sẽ hiển thị danh sách Cluster đã tạo với các thông tin quan trọng như : **Name** , **Version** , **Worker Group** , **Status** , **Created At** , **Actions**.
[![](/img/migrated/8-1-75374b83.png)](/img/migrated/8-1-75374b83.png)
**Truy cập thông tin chi tiết của cụm cluster**
**Bước 1** : Ở menu chọn **Managed GPU Cluster** , hệ thống sẽ hiển thị trang **Managed GPU Management**. Chọn Cluster muốn xem thông tin chi tiết.
[![](/img/migrated/9-1-1670bae1.png)](/img/migrated/9-1-1670bae1.png)
**Bước 2** : Tab **Essential Properties** sẽ hiển thị các thông tin của Cluster.
[![](/img/migrated/10-1-6e0a4cbd.png)](/img/migrated/10-1-6e0a4cbd.png)
**• Cluster Information** : Thông tin cơ bản về Cluster bao gồm: 
Cluster Name
Managed GPU Cluster version
File Managed GPU Cluster Config
Status
Network
**• Load Balancer Service** : Thông tin Internal LB Subnet đã nhập 
**• API** : API URL dẫn đến cụm Cluster 
**Bước 3** : Tab **Node Pools** sẽ hiển thị toàn bộ Worker Group thuộc cụm Cluster và thông tin cấu hình của từng Worker Group.
[![](/img/migrated/11-1-3eeaf351.png)](/img/migrated/11-1-3eeaf351.png)
**• Name** : Tên Worker Group 
**• Is Based** : Hiển thị () nếu là Worker base, và (✘) nếu không phải là Worker Base 
**• Flavor Type** : Hiển thị resource flavor đã chọn 
**• Number of Server** : Số server metal cloud của Worker

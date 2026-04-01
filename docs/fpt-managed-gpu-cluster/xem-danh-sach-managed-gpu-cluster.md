---
id: "xem-danh-sach-managed-gpu-cluster"
title: "Xem Danh Sach Managed Gpu Cluster"
sidebar_label: "Xem Danh Sach Managed Gpu Cluster"
sidebar_position: "5"
---

# View Danh Sach Managed Gpu Cluster

Bạn can xem and quản lý danh sách the GPU Cluster has been tạo trên trang Managed GPU Cluster Management. Để mở trang Management, hãy thao tác as follows:
Trên **FPT Portal** , ở menu chọn **AI Infrastructure** > **Managed GPU Cluster**. System will displayed danh sách Cluster has been tạo with the thông tin quan trọng như : **Name** , **Version** , **Worker Group** , **Status** , **Created At** , **Actions**.
[![](/img/migrated/8-1-75374b83.png)](/img/migrated/8-1-75374b83.png)
**Truy cập thông tin chi tiết of cụm cluster**
**Step 1** : Ở menu chọn **Managed GPU Cluster** , hệ thống will displayed trang **Managed GPU Management**. Chọn Cluster muốn xem thông tin chi tiết.
[![](/img/migrated/9-1-1670bae1.png)](/img/migrated/9-1-1670bae1.png)
**Step 2** : Tab **Essential Properties** will displayed the thông tin of Cluster.
[![](/img/migrated/10-1-6e0a4cbd.png)](/img/migrated/10-1-6e0a4cbd.png)
**• Cluster Information** : Information cơ bản về Cluster includes: 
Cluster Name
Managed GPU Cluster version
File Managed GPU Cluster Config
Status
Network
**• Load Balancer Service** : Information Internal LB Subnet has been nhập 
**• API** : API URL dẫn to cụm Cluster 
**Step 3** : Tab **Node Pools** will displayed toàn bộ Worker Group thuộc cụm Cluster and thông tin cấu hình of fromng Worker Group.
[![](/img/migrated/11-1-3eeaf351.png)](/img/migrated/11-1-3eeaf351.png)
**• Name** : Tên Worker Group 
**• Is Based** : Hiển thị () if là Worker base, and (✘) if không phải là Worker Base 
**• Flavor Type** : Hiển thị resource flavor has been chọn 
**• Number of Server** : Số server metal cloud of Worker

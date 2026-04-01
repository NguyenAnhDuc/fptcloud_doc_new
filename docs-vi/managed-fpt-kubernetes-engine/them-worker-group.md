---
id: "them-worker-group"
title: "Thêm Worker Group"
description: "**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**. Chọn **Cluster** muốn th"
sidebar_label: "Thêm Worker Group"
sidebar_position: 12
---

# Them Worker Group

**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**. Chọn **Cluster** muốn thêm Worker Group.
[![](/img/migrated/Picture21-59a1a031.png)](/img/migrated/Picture21-59a1a031.png)
**Bước 2** : Chọn **Node Pools** > **Edit Workers**.
[![](/img/migrated/Picture22-21285b05.png)](/img/migrated/Picture22-21285b05.png)
**Bước 3** : Chọn **ADD WORKER GROUP**.
[![](/img/migrated/Picture23-51511b2e.png)](/img/migrated/Picture23-51511b2e.png)
**Bước 4:** Nhập các trường thông tin theo yêu cầu.
[![](/img/migrated/Picture24-753cbc70.png)](/img/migrated/Picture24-753cbc70.png)
  * **Instance Type:** Chọn loại Instance (CPU hoặc GPU) cho các **Worker Node**
  * **Type:** Chọn cấu hình (CPU & Memory) cho các **Worker Node**
  * **Container Runtime:** Chọn **Containerd**. 
  * **Storage Policy:** Chọn loại **Storage Policy** (tương ứng với IOPS) cho Worker Node Disk. 
  * **Disk (GB):** Chọn dung lượng root disk cho các **Worker Node**. 
  * **Network:** Subnet sử dụng để deploy các VM của Kubernetes Cluster. 
  * **Scale min:** Số VM instance Worker Node tối thiểu cho cụm k8s. Recommend tối thiểu là 03 Nodes cho môi trường Production. 
  * **Scale max:** Số VM instance Worker Node tối đa cho một worker group trong cụm k8s. 
  * **Label:** Đánh Label cho **Worker Group**
  * **Taint:** Đánh Taint cho **Worker Group**

**Bước 5** : Kiểm tra lại thông tin, chọn **Save** để thực hiện thêm mới Worker.
[![](/img/migrated/Picture25-131290d6.png)](/img/migrated/Picture25-131290d6.png)
Quá trình Scale Cluster sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang **Processing**. Cluster vẫn hoạt động bình thường khi thực hiện thêm Worker Group mới.

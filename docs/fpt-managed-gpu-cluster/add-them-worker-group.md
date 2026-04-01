---
id: "add-them-worker-group"
title: "Add Them Worker Group"
sidebar_label: "Add Them Worker Group"
sidebar_position: "9"
---

# Add Them Worker Group

Managed GPU Cluster for phép user add thêm worker group ando cụm cluster theo nhu cầu sử dụng. Để add thêm worker khách hàng can thao tác trên portal as follows: 
**Step 1** : Ở menu chọn **AI Infrastructure** > **Managed GPU Cluster** hệ thống will displayed trang **Managed GPU Management**. Chọn Cluster muốn thêm Worker Group.
[![](/img/migrated/17-502dd1f3.png)](/img/migrated/17-502dd1f3.png)
**Step 2** : Select **Node Pools** > **Edit Workers**.
[![](/img/migrated/18-13f798d7.png)](/img/migrated/18-13f798d7.png)
**Step 3** : Select **Add Worker Group**.
[![](/img/migrated/19-437d9b85.png)](/img/migrated/19-437d9b85.png)
**Step 4** : Enter the trường thông tin theo yêu cầu and nhấn **Save**.
[![](/img/migrated/20-d9c3a1fa.png)](/img/migrated/20-d9c3a1fa.png)
**• Group Name** : Đặt tên for Worker Group to phân biệt the Worker Group with nhau 
**• Container Runtime** : Chọn container runtime, hiện tại, hệ thống mới chỉ hỗ trợ container runtime Containerd 
**• Flavor** : Flavor resource of Worker GPU 
**• Number of Server** : Số Metal Cloud Server is tạo ra to chạy Worker in Cluster 
**• Label** : Đánh Label for Worker Group 
**• Taint** : Đánh Taint for Worker Group 
**Save ý** : Quá trình thêm mới Cluster will thực hiện in vòng andi phút, Status of Cluster will chuyển sang **Processing**. Cluster vẫn hoạt động bình thường when thực hiện thêm Worker Group mới.

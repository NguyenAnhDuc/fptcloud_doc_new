---
id: "khoi-tao-managed-gpu-cluster-moi"
title: "Lưu ý :"
sidebar_label: "Lưu ý :"
sidebar_position: "4"
---

# Save ý :

**Save ý** : 
Một số điều kiện bắt buộc to thực hiện thao tác this: 
Quota Metal Cloud (Bare Metal HPC) phải đáp ứng đủ số lượng mong muốn of Cluster. 
Ít nhất 01 BM server Network
Ít nhất 01 Network for Load Balancer
**Step 1** : Trên menu of **FPT Portal** chọn **AI Infrastructure** > **Managed GPU Cluster** > **Create a Managed GPU Cluster**. 
[![](/img/migrated/3-1-a6d7eef2.png)](/img/migrated/3-1-a6d7eef2.png)
**Step 2** : Enter thông tin tại tab General Information of cụm Cluster sau that click button 
[![](/img/migrated/4-15b5adf9.png)](/img/migrated/4-15b5adf9.png)
  * General Information: 

**• Name** : Enter tên Cluster, tên of the Cluster phải khác nhau and đúng quy tắc.
**• Network** : Chọn from dải subnet has been tạo for Bare Metal GPU Servers 
**• Version** : Chọn version Kubernetes phù hợp with ứng dụng hiện tại of khách hàng. 
**• Internal LB Subnet** : Configure dải private IP for service type Load Balancer 
**• SSH Public Key** : SSH Key to SSH ando Worker node of Cluster 
**Step 3** : Enter thông tin tại tab Nodes Pool of cụm Cluster sau that click button 
Những điểm cần lưu ý when tạo cụm Cluster MANAGED GPU CLUSTER: 
  * **Managed GPU Cluster** quản lý the Worker nodes thông qua Worker Group, là a nhóm includes the Worker nodes có cấu hình giống nhau. Người sử dụng can phân chia Worker Groups for the ứng dụng phù hợp. System yêu cầu tối thiểu phải có 01 Worker Group (Base), người sử dụng cannot xoá Worker Group this. 
  * Trong mục cấu hình Worker Group, user can thực hiện gán label for Worker Group mong muốn. Label this will is áp dụng for tất cả the Worker nodes thuộc Worker Group. Người dùng can thêm nhiều or bỏ bớt the label, cũng như chỉnh sửa key/value of the label có sẵn. Các label this giúp user dễ dàng in việc triển khai ứng dụng trên the Worker Group riêng biệt theo nhu cầu. 

[![](/img/migrated/5-1-467b1d56.png)](/img/migrated/5-1-467b1d56.png)
➤ **Worker group 1 (Base)** : 
**• Group Name** : Đặt tên for Worker Group to phân biệt the Worker Group with nhau. 
**• Runtime** : Chọn container runtime, hiện tại, hệ thống mới chỉ hỗ trợ container runtime Containerd. 
**• Number of Server** : Số Metal Cloud Server is tạo ra to chạy Worker in Cluster. 
**• Flavor** : Flavor type of Metal cloud GPU server, mặc định là H100. 
**• Label** : Đánh Label in Kubernetes for tất cả Worker in Worker Group 
Người dùng can thêm the worker group when khởi tạo k8s cluster bằng theh click button **ADD WORKER GROUP**. [![](/img/migrated/Screenshot_2-708902f7.png)](/img/migrated/Screenshot_2-708902f7.png)
Ngoài ra, from Worker Group 2 trở đi user can cấu hình taint for the worker group nhằm mục đích schedule ứng dụng trên the worker nodes. Các taint cũng can thêm, xóa, chỉnh sửa dễ dàng. 
[![](/img/migrated/Screenshot_1-c7d01a04.png)](/img/migrated/Screenshot_1-c7d01a04.png)
**Save ý** : Người dùng when cấu hình label/taint for worker group trên Unify Portal will cannot xóa label/taint for node in worker group that bằng kubectl (System will tự động thêm lại label/taint for node theo cấu hình trên Unify Portal) do that cần xóa cấu hình label/taint trên Unify Portal. 
➤ **Worker Group n** :
Người dùng can thêm the Worker Group when khởi tạo K8s Cluster bằng theh nhấn button ADD WORKER GROUP. 
Ngoài ra, from Worker Group 2 trở đi user can cấu hình taint for the Worker Group nhằm mục đích schedule ứng dụng trên the Worker nodes. Các taint cũng can thêm, xóa, chỉnh sửa dễ dàng. 
Tìm hiểu thêm về Taints [here](http://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)
**Save ý** : Người dùng when cấu hình label/taint for Worker Group trên Portal will cannot xóa label/taint for node in Worker Group that bằng kubectl (System will tự động thêm lại label/taint for node theo cấu hình trên Portal) do that cần xóa cấu hình label/taint trên Portal. 
**Step 4** : Phần **Advanced** là the cài đặt nâng cao
[![](/img/migrated/6-1-126a59ae.png)](/img/migrated/6-1-126a59ae.png)
**• Pod Network** : Network sử dụng for Pod in Cluster. 
**• Service Network** : Network sử dụng for Service in Cluster. 
**• Network Node Prefix** : Số Pod tối đa trên mỗi Managed GPU Node. 
**• Max Pod per Node** : Loại CNI is cài for Cluster, chỉ hỗ trợ loại Calico 
Step 5: Màn hình Review & Create sẽ displayed the thông tin cụm Cluster user has been cấu hình trước that and hệ thống tự động kiểm tra quota Bare Metal GPU server có đủ to khởi tạo Cluster hay không 
[![](/img/migrated/7-1-0c3879d8.png)](/img/migrated/7-1-0c3879d8.png)
Sau when hệ thống kiểm tra tài nguyên successfully, nhấn button Create a Managed GPU Cluster to tiến hành tạo cụm Cluster.

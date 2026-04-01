---
id: "khoi-tao-managed-gpu-cluster-moi"
title: "Lưu ý :"
sidebar_label: "Lưu ý :"
sidebar_position: "4"
---

# Lưu ý :

**Lưu ý** : 
Một số điều kiện bắt buộc để thực hiện thao tác này: 
Quota Metal Cloud (Bare Metal HPC) phải đáp ứng đủ số lượng mong muốn của Cluster. 
Ít nhất 01 BM server Network
Ít nhất 01 Network cho Load Balancer
**ステップ1:** Trên menu của **FPT Portal** chọn **AI Infrastructure** > **Managed GPU Cluster** > **Create a Managed GPU Cluster**. 
[![](/img/migrated/3-1-a6d7eef2.png)](/img/migrated/3-1-a6d7eef2.png)
**ステップ2:** Nhập thông tin tại tab General Information của cụm Cluster sau đó click button 
[![](/img/migrated/4-15b5adf9.png)](/img/migrated/4-15b5adf9.png)
  * General Information: 

**• Name** : Nhập tên Cluster, tên của các Cluster phải khác nhau và đúng quy tắc.
**• Network** : Chọn từ dải subnet đã tạo cho Bare Metal GPU Servers 
**• Version** : Chọn version Kubernetes phù hợp với ứng dụng hiện tại của khách hàng. 
**• Internal LB Subnet** : Cấu hình dải private IP cho service type Load Balancer 
**• SSH Public Key** : SSH Key để SSH vào Worker node của Cluster 
**ステップ3:** Nhập thông tin tại tab Nodes Pool của cụm Cluster sau đó click button 
Những điểm cần lưu ý khi tạo cụm Cluster MANAGED GPU CLUSTER: 
  * **Managed GPU Cluster** quản lý các Worker nodes thông qua Worker Group, là một nhóm bao gồm các Worker nodes có cấu hình giống nhau. Người sử dụng có thể phân chia Worker Groups cho các ứng dụng phù hợp. Hệ thống yêu cầu tối thiểu phải có 01 Worker Group (Base), người sử dụng không thể xoá Worker Group này. 
  * Trong mục cấu hình Worker Group, người dùng có thể thực hiện gán label cho Worker Group mong muốn. Label này sẽ được áp dụng cho tất cả các Worker nodes thuộc Worker Group. Người dùng có thể thêm nhiều hoặc bỏ bớt các label, cũng như chỉnh sửa key/value của các label có sẵn. Các label này giúp người dùng dễ dàng trong việc triển khai ứng dụng trên các Worker Group riêng biệt theo nhu cầu. 

[![](/img/migrated/5-1-467b1d56.png)](/img/migrated/5-1-467b1d56.png)
➤ **Worker group 1 (Base)** : 
**• Group Name** : Đặt tên cho Worker Group để phân biệt các Worker Group với nhau. 
**• Runtime** : Chọn container runtime, hiện tại, hệ thống mới chỉ hỗ trợ container runtime Containerd. 
**• Number of Server** : Số Metal Cloud Server được tạo ra để chạy Worker trong Cluster. 
**• Flavor** : Flavor type của Metal cloud GPU server, mặc định là H100. 
**• Label** : Đánh Label trong Kubernetes cho tất cả Worker trong Worker Group 
Người dùng có thể thêm các worker group khi khởi tạo k8s cluster bằng cách click button **ADD WORKER GROUP**. [![](/img/migrated/Screenshot_2-708902f7.png)](/img/migrated/Screenshot_2-708902f7.png)
Ngoài ra, từ Worker Group 2 trở đi người dùng có thể cấu hình taint cho các worker group nhằm mục đích schedule ứng dụng trên các worker nodes. Các taint cũng có thể thêm, xóa, chỉnh sửa dễ dàng. 
[![](/img/migrated/Screenshot_1-c7d01a04.png)](/img/migrated/Screenshot_1-c7d01a04.png)
**Lưu ý** : Người dùng khi cấu hình label/taint cho worker group trên Unify Portal sẽ không thể xóa label/taint cho node trong worker group đó bằng kubectl (Hệ thống sẽ tự động thêm lại label/taint cho node theo cấu hình trên Unify Portal) do đó cần xóa cấu hình label/taint trên Unify Portal. 
➤ **Worker Group n** :
Người dùng có thể thêm các Worker Group khi khởi tạo K8s Cluster bằng cách nhấn button ADD WORKER GROUP. 
Ngoài ra, từ Worker Group 2 trở đi người dùng có thể cấu hình taint cho các Worker Group nhằm mục đích schedule ứng dụng trên các Worker nodes. Các taint cũng có thể thêm, xóa, chỉnh sửa dễ dàng. 
Tìm hiểu thêm về Taints [tại đây](http://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)
**Lưu ý** : Người dùng khi cấu hình label/taint cho Worker Group trên Portal sẽ không thể xóa label/taint cho node trong Worker Group đó bằng kubectl (Hệ thống sẽ tự động thêm lại label/taint cho node theo cấu hình trên Portal) do đó cần xóa cấu hình label/taint trên Portal. 
**ステップ4:** Phần **Advanced** là các cài đặt nâng cao
[![](/img/migrated/6-1-126a59ae.png)](/img/migrated/6-1-126a59ae.png)
**• Pod Network** : Network sử dụng cho Pod trong Cluster. 
**• Service Network** : Network sử dụng cho Service trong Cluster. 
**• Network Node Prefix** : Số Pod tối đa trên mỗi Managed GPU Node. 
**• Max Pod per Node** : Loại CNI được cài cho Cluster, chỉ hỗ trợ loại Calico 
ステップ5: Màn hình Review & Create sẽ hiển thị các thông tin cụm Cluster người dùng đã cấu hình trước đó và hệ thống tự động kiểm tra quota Bare Metal GPU server có đủ để khởi tạo Cluster hay không 
[![](/img/migrated/7-1-0c3879d8.png)](/img/migrated/7-1-0c3879d8.png)
Sau khi hệ thống kiểm tra tài nguyên thành công, nhấn button Create a Managed GPU Cluster để tiến hành tạo cụm Cluster.

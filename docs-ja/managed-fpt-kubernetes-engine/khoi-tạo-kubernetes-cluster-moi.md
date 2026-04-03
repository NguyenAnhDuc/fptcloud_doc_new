---
id: "khoi-tạo-kubernetes-cluster-moi"
title: "Khởi tạo Kubernetes Cluster mới"
description: "**Lưu ý:** Một số điều kiện bắt buộc để thực hiện thao tác này:"
sidebar_label: "Khởi tạo Kubernetes Cluster mới"
sidebar_position: "4"
---

# Khoi TạO Kubernetes Cluster Moi

**Lưu ý:** Một số điều kiện bắt buộc để thực hiện thao tác này:
  * Quota CPU, RAM, Storage, Instance phải đủ cho cấu hình mong muốn của Cluster.
  * 01 Public IP Available với loại Public & Private Controlplane Access Mode: Sử dụng cho việc expose apiserver cluster endpoint.
  * 01 VM Subnet: subnet được sử dụng cho Kubernetes Nodes. Cần tạo Subnet có Static IP Pool. 

### **Tạo cluster với những VPC đã hỗ trợ Private Cluster**
**Bước 1:** Trên menu của FPT Portal chọn **Containers** >**Kubernetes** > **Create a Kubernetes Engine**.
[![](/img/migrated/Screenshot-2025-03-20-134507-e724ae33.png)](/img/migrated/Screenshot-2025-03-20-134507-e724ae33.png)
**Bước 2:** Nhập thông tin cơ bản của cụm cluster sau đó click button 
1.1. **Basics Information:**
[![](/img/migrated/Picture1-12-ba0b92de.png)](/img/migrated/Picture1-12-ba0b92de.png)
  * **Name:** Nhập tên Cluster.
  * **Network** : Subnet sử dụng để deploy các Virtual Machine (VM) của Kubernetes Cluster. 
  * **Version:** Chọn version của Kubernetes Cluster.
  * **Cluster Endpoint Access** : Tùy chọn truy cập Endpoint cụm Kubernetes 

**Public** : Apiserver endpoint của cụm k8s có thể truy cập từ public. Kết nối từ worker nodes tới apiserver đi qua đường public. 
**Public & Private**: Apiserver endpoint của cụm k8s có thể truy cập từ public. Kết nối từ worker nodes tới apiserver đi qua đường private. 
**Private** : Apiserver endpoint của cụm k8s chỉ có thể truy cập private trong VPC. Kết nối từ worker nodes tới apiserver đi qua đường private. 
**Cách chọn Cluster Endpoint phù hợp**
➤ **Public** : Nếu khách hàng cần truy cập Kubernetes API Endpoint từ bên ngoài VPC, sử dụng tùy chọn này. 
➤ **Public & Private**: Dùng khi cần Endpoint có thể truy cập công khai và muốn whitelist IP truy cập vào apiserver endpoint này.
➤ **Private** : Dùng khi chỉ cần truy cập vào Endpoint trong nội bộ VPC. 
[![](/img/migrated/Screenshot_3-3db7fd69.png)](/img/migrated/Screenshot_3-3db7fd69.png)
**Giải thích về Allow CIDR**
  * CIDR (Classless Inter-Domain Routing) là định dạng để xác định dải IP có quyền truy cập vào Kubernetes API Endpoint. 
  * Nếu để trống, tức là mặc định là 0.0.0.0/0, Endpoint sẽ có thể truy cập từ bất kỳ địa chỉ IP nào. 
  * Nếu nhập một giá trị cụ thể (ví dụ: 192.168.1.0/24), chỉ các IP trong dải 192.168.1.0 - 192.168.1.255 mới có thể truy cập. 
**Lưu ý:**

➤ Khách hàng cần chọn Cluster Endpoint Access phù hợp dựa trên yêu cầu bảo mật và kiến trúc mạng của hệ thống. Nếu cần bảo mật cao, khách hàng nên hạn chế CIDR chỉ cho phép các dải IP nội bộ thay vì 0.0.0.0/0. 
➤ Nếu chọn Public & Private hoặc Private, sẽ xuất hiện thêm trường Allow CIDR để nhập danh sách các dải địa chỉ IP có quyền truy cập vào Endpoint của Kubernetes Cluster. 
➤ Với cluster endpoint access mode Public hoặc Public & Private, người dùng cần thêm IP SNAT của tất cả worker (trong trường hợp VPC sử dụng external firewall hoặc worker được gắn floating IP) vào trong các CIDR có thể kết nối tới controlplane của cluster. 
**_Ví dụ:_**
  * Dải subnet của worker được SNAT bằng IP 103.174.214.26, người dùng cần thêm CIDR 103.174.214.26/32 vào danh sách các CIDR được phép kết nối tới controlplane.
  * Worker trong cluster được gắn floatingIP 103.174.215.27, người dùng cần thêm CIDR 103.174.215.27/32 vào danh sách các CIDR được phép kết nối tới controlplane.
**Bước 3:** Cấu hình Nodes Pool theo nhu cầu sử dụng sau đó click button 

[![Alt text](/img/migrated/Create-K8s-1-92a23d1f.png)](/img/migrated/Create-K8s-1-92a23d1f.png) [![Alt text](/img/migrated/Create-K8s-2-fea4fe96.png)](/img/migrated/Create-K8s-2-fea4fe96.png)

### **Những điểm cần lưu ý khi tạo cụm cluster M-FKE:**
➤ M-FKE quản lý các worker nodes thông qua Worker Group, là một group bao gồm các worker nodes có cấu hình giống nhau. Người sử dụng có thể phân chia worker groups cho các ứng dụng phù hợp. Hệ thống yêu cầu tối thiểu phải có 01 Worker Group (Base), người sử dụng không thể remove worker group này.
➤ Trong mục cấu hình Worker Group, người dùng có thể thực hiện gán label cho worker group mong muốn. Label này sẽ được áp dụng cho tất cả các worker nodes thuộc worker group. Người dùng có thể thêm nhiều hoặc bỏ bớt các label, cũng như chỉnh sửa key/value của các label có sẵn. Các label này giúp người dùng dễ dàng trong việc triển khai ứng dụng trên các worker group riêng biệt theo nhu cầu. 
  1. **Worker Group 1 (Base):**
     * **Instance Type:** Chọn loại Instance (CPU hoặc GPU) cho các **Worker Node**
     * **Type:** Chọn cấu hình (CPU & Memory) cho các **Worker Node**. 
     * **Container Runtime:** Chọn **Containerd**. 
     * **Storage Policy:** Chọn loại **Storage Policy** (tương ứng với IOPS) cho Worker Node Disk. 
     * **Disk (GB):** Chọn dung lượng root disk cho các **Worker Node**. 
     * **Network:** Subnet sử dụng để deploy các VM của Kubernetes Cluster. 
     * **Scale min:** Số VM instance Worker Node tối thiểu cho cụm k8s. Recommend tối thiểu là 03 Nodes cho môi trường Production. 
     * **Scale max:** Số VM instance Worker Node tối đa cho một worker group trong cụm k8s. 
     * **Label:** Đánh Label cho **Worker Group**
  2. **Worker Group n:**

  * Người dùng có thể thêm các worker group khi khởi tạo k8s cluster bằng cách click button **ADD WORKER GROUP**. [![Alt text](/img/migrated/Add-worker-group-f3ed8556.png)](/img/migrated/Add-worker-group-f3ed8556.png)

Ngoài ra, từ Worker Group 2 trở đi người dùng có thể cấu hình taint cho các worker group nhằm mục đích schedule ứng dụng trên các worker nodes. Các taint cũng có thể thêm, xóa, chỉnh sửa dễ dàng. 
[![](/img/migrated/Taints-f9656e33.png)](/img/migrated/Taints-f9656e33.png)
**Lưu ý** : Người dùng khi cấu hình label/taint cho worker group trên Unify Portal sẽ không thể xóa label/taint cho node trong worker group đó bằng kubectl (Hệ thống sẽ tự động thêm lại label/taint cho node theo cấu hình trên Unify Portal) do đó cần xóa cấu hình label/taint trên Unify Portal. 
**Bước 4:** Tab **Advanced** là các cài đặt nâng cao dành cho người dùng. Ngoài ra, FPT Cloud hỗ trợ người dùng chỉ định subnet cho dải IP internal của LoadBalancer tích hợp trong Kubernetes. Nếu bạn không cần tùy chỉnh các tham số nâng cao này, hãy để mặc định.
[![](/img/migrated/Screenshot-2025-04-08-135836-4ee98ecc.png)](/img/migrated/Screenshot-2025-04-08-135836-4ee98ecc.png)
  * **Pod Network** : Network sử dụng cho Pod trong cluster. 
  * **Service Network** : Network sử dụng cho Service trong cluster. 
  * **Network Node Prefix** : Subnet Prefix cho Pod trong Node 
  * **Max Pod per Node** : Số Pod tối đa trên mỗi Kubernetes Node. 
  * **Internal subnet Load Balancer(CIDR)** : CIDR dùng để cấp phát IP cho các Load Balancer nội bộ. Có thể để trống nếu không dùng, hệ thống sẽ tự động cấp phát IP trong một subnet bất kỳ.
  * **Internal Classic Loadbalancer IP Range (Deprecated)** : Dải IP dành cho Load Balancer Classic hay còn gọi là LBv1 (sẽ ngừng cấp phát từ 19/04/2025).
**Cách cấu hình Internal subnet Load Balancer (CIDR) hợp lệ:**

[![](/img/migrated/Screenshot_4-847baa92.png)](/img/migrated/Screenshot_4-847baa92.png)
Dải CIDR cấu hình cho Internal subnet Load Balancer **không được** trùng bất kỳ CIDR subnet nào trong tab **Network > Subnets**
**Bước 5** : Màn hình **Review & Create**, hệ thống sẽ hiển thị các thông tin cụm cluster người dùng đã cấu hình trước đó, kiểm tra tài nguyên RAM, CPU, Storage,… 
[![](/img/migrated/Screenshot-2025-04-08-140012-9692da06.png)](/img/migrated/Screenshot-2025-04-08-140012-9692da06.png)
Sau khi hệ thống kiểm tra tài nguyên thành công, click button **Create a Kubernetes** để tiến hành tạo cụm cluster.

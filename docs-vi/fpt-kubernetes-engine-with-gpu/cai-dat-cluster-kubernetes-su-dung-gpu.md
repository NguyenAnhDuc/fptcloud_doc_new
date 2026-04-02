---
id: "cai-dat-cluster-kubernetes-su-dung-gpu"
title: "Cài đặt và khởi tạo Cluster Kubernetes sử dụng GPU"
description: "⚠️ **Lưu ý:**"
sidebar_label: "Cài đặt và khởi tạo Cluster Kubernetes sử dụng GPU"
sidebar_position: 3
---

# Cài đặt và khởi tạo Cluster Kubernetes sử dụng GPU

⚠️ **Lưu ý:**
FPT cloud hỗ trợ các card sau:
  * Trên region Hanoi và SGN hỗ trợ card GPU A30
  * Trên region Hanoi 2 và Japan hỗ trợ card GPU A30, H100 SXM5, H200 SXM5

✅ **Yêu cầu bắt buộc:**
  * Quota CPU, GPU, RAM, Storage, Instance: đáp ứng đủ cho cấu hình cluster Kubernetes mong muốn. Nếu muốn sử dụng Autoscale, số lượng GPU phải đáp ứng đủ số Max node mong muốn (chú ý phần cài đặt Min node và Max node). 
  * 01 Network subnet: Network sử dụng cho Kubernetes Nodes, subnet cần có Static IP Pool. 

👉 **Các bước khởi tạo 1 cluster sử dụng GPU:**
1️⃣ **GPU A30**
**Bước 1** : Truy cập portal FPT Cloud [console.fptcloud.com](https://console.fptcloud.com/), chọn mục Kubernetes, ấn "Create a Kubernetes Engine". 
[![](/img/migrated/Picture1-5-1a7a3b43.png)](/img/migrated/Picture1-5-1a7a3b43.png)
**Bước 2:** Nhập thông tin cơ bản của cụm cluster sau đó click button 
1.1. **Basics Information:**
[![](/img/migrated/Picture1-12-ba0b92de.png)](/img/migrated/Picture1-12-ba0b92de.png)
  * **Name:** Nhập tên Cluster.
  * **Network** : Subnet sử dụng để deploy các Virtual Machine (VM) của Kubernetes Cluster. 
  * **Version:** Chọn version của Kubernetes Cluster.
  * **Cluster Endpoint Access** : Tùy chọn truy cập Endpoint cụm Kubernetes 

▪ **Public** : Apiserver endpoint của cụm k8s có thể truy cập từ public. Kết nối từ worker nodes tới apiserver đi qua đường public. 
▪ **Public & Private**: Apiserver endpoint của cụm k8s có thể truy cập từ public. Kết nối từ worker nodes tới apiserver đi qua đường private. 
▪ **Private** : Apiserver endpoint của cụm k8s chỉ có thể truy cập private trong VPC. Kết nối từ worker nodes tới apiserver đi qua đường private. 
💡 **Cách chọn Cluster Endpoint phù hợp**
➤ **Public** : Nếu khách hàng cần truy cập Kubernetes API Endpoint từ bên ngoài VPC, sử dụng tùy chọn này. 
➤ **Public & Private**: Dùng khi cần Endpoint có thể truy cập công khai và muốn whitelist IP truy cập vào apiserver endpoint này.
➤ **Private** : Dùng khi chỉ cần truy cập vào Endpoint trong nội bộ VPC. 
[![](/img/migrated/Screenshot_3-3db7fd69.png)](/img/migrated/Screenshot_3-3db7fd69.png)
⚠️ **Lưu ý:**
  * Khách hàng cần chọn Cluster Endpoint Access phù hợp dựa trên yêu cầu bảo mật và kiến trúc mạng của hệ thống. 
  * Nếu chọn Public & Private hoặc Private, sẽ xuất hiện thêm trường Allow CIDR để nhập danh sách các dải địa chỉ IP có quyền truy cập vào Endpoint của Kubernetes Cluster. 

👉 **Giải thích về Allow CIDR**
  * CIDR (Classless Inter-Domain Routing) là định dạng để xác định dải IP có quyền truy cập vào Kubernetes API Endpoint. 
  * Nếu để trống, tức là mặc định là 0.0.0.0/0, Endpoint sẽ có thể truy cập từ bất kỳ địa chỉ IP nào. 
  * Nếu nhập một giá trị cụ thể (ví dụ: 192.168.1.0/24), chỉ các IP trong dải 192.168.1.0 - 192.168.1.255 mới có thể truy cập. 

⚠️ Lưu ý: Nếu cần bảo mật cao, khách hàng nên hạn chế CIDR chỉ cho phép các dải IP nội bộ thay vì 0.0.0.0/0. 
**Bước 3** : Nhập vào thông tin cụm Kubernetes cần khởi tạo. Ngoài các thông tin khởi tạo cho Kubernetes thông thường, cần chọn cấu hình cho GPU trong Worker Group: 
  * Chọn lnstance type: GPU 
  * Chọn GPU type: Nvidia Tesla A30
  * Chọn cấu hình GPU sharing
  * Chọn cấu hình type GPU (CPU/RAM/GPU RAM) 

[![](/img/migrated/Picture3-4-b64ef83c.png)](/img/migrated/Picture3-4-b64ef83c.png)
_Chú ý:_
  1. Ở phần "GPU Driver Installation Type" có 2 options là **Pre-install** và **User-install**. 
  2. Driver là một chương trình để cho phép hệ điều hành giao tiếp với phần cứng, cụ thể ở đây là giữa hệ điều hành của worker (windows, ubuntu ...) với GPU, hệ điều hành không thể sử dụng GPU nếu không có driver. 
  3. Đối với lựa chọn "Pre-install", cụm của khách hàng sẽ được thêm Nvidia GPU driver một cách tự động. 
  4. Đối với lựa chọn "User-install", khách hàng có thể cài đặt thủ công GPU driver để lựa chọn phiên bản driver phù hợp. 

**Bước 4** : Ấn Create và kiểm tra lại các thông tin khởi tạo. 
**Bước 5** : Theo dõi trạng thái khởi tạo cụm Kubernetes. Sau khi trạng thái Successed (Running) thì tiến hành sử dụng, triển khai ứng dụng.
2️⃣ **GPU H100 SXM5**
**Bước 1:** Trên menu của FPT Portal chọn **Containers** >**Kubernetes** > **Create a Kubernetes Engine**.
[![](/img/migrated/Screenshot-2025-03-20-134507-e724ae33.png)](/img/migrated/Screenshot-2025-03-20-134507-e724ae33.png)
**Bước 2:** Nhập thông tin cơ bản của cụm cluster sau đó click button 
1.1. **Basics Information:**
[![](/img/migrated/Picture1-12-ba0b92de.png)](/img/migrated/Picture1-12-ba0b92de.png)
  * **Name:** Nhập tên Cluster.
  * **Network** : Subnet sử dụng để deploy các Virtual Machine (VM) của Kubernetes Cluster. 
  * **Version:** Chọn version của Kubernetes Cluster.
  * **Cluster Endpoint Access** : Tùy chọn truy cập Endpoint cụm Kubernetes 

**Bước 3:** Cấu hình Nodes Pool theo nhu cầu sử dụng sau đó click button 
Đối với card H100, portal không hỗ trợ tạo worker GPU là worker group base, khách hàng vui lòng tạo worker GPU từ worker group 2 trở đi.
  * **Worker Group base:**

□ Instance Type: Chọn loại Instance General
□ Type: Chọn cấu hình (CPU & Memory) cho các **Worker Node**. 
□ Container Runtime: Chọn **Containerd**. 
□ Policy: Chọn loại **Storage Policy** (tương ứng với IOPS) cho Worker Node Disk. 
□ Disk: Chọn dung lượng root disk cho các **Worker Node**. 
□ Scale min: Số VM instance Worker Node tối thiểu cho cụm k8s. Recommend tối thiểu là 03 Nodes cho môi trường Production. 
□ Scale max: Số VM instance Worker Node tối đa cho một worker group trong cụm k8s. 
□ Label: Đánh Label cho **Worker Group**
  * **Worker Group n:**

□ Chọn lnstance type: GPU 
□ Chọn GPU type: Nvidia H100 SXM5
□ Chọn cấu hình GPU sharing
□ Chọn cấu hình type GPU (CPU/RAM/GPU RAM) 
_Chú ý:_
  1. Ở phần "GPU Driver Installation Type" có 2 options là **Pre-install** và **User-install**. 
  2. Driver là một chương trình để cho phép hệ điều hành giao tiếp với phần cứng, cụ thể ở đây là giữa hệ điều hành của worker (windows, ubuntu ...) với GPU, hệ điều hành không thể sử dụng GPU nếu không có driver. 
  3. Đối với lựa chọn "Pre-install", cụm của khách hàng sẽ được thêm Nvidia GPU driver một cách tự động. 
  4. Đối với lựa chọn "User-install", khách hàng có thể cài đặt thủ công GPU driver để lựa chọn phiên bản driver phù hợp. 

**Bước 4** : Ấn Create và kiểm tra lại các thông tin khởi tạo. 
**Bước 5** : Theo dõi trạng thái khởi tạo cụm Kubernetes. Sau khi trạng thái Successed (Running) thì tiến hành sử dụng, triển khai ứng dụng.
3️⃣ **GPU H200 SXM5**
**Bước 1:** Trên menu của FPT Portal chọn **Containers** >**Kubernetes** > **Create a Kubernetes Engine**.
[![](/img/migrated/Screenshot-2025-03-20-134507-e724ae33.png)](/img/migrated/Screenshot-2025-03-20-134507-e724ae33.png)
**Bước 2:** Nhập thông tin cơ bản của cụm cluster sau đó click button 
1.1. **Basics Information:**
[![](/img/migrated/Picture1-12-ba0b92de.png)](/img/migrated/Picture1-12-ba0b92de.png)
  * **Name:** Nhập tên Cluster.
  * **Network** : Subnet sử dụng để deploy các Virtual Machine (VM) của Kubernetes Cluster. 
  * **Version:** Chọn version của Kubernetes Cluster.
  * **Cluster Endpoint Access** : Tùy chọn truy cập Endpoint cụm Kubernetes 

⚠️ **Lưu ý:**
  * Khách hàng cần chọn Cluster Endpoint Access phù hợp dựa trên yêu cầu bảo mật và kiến trúc mạng của hệ thống. 
  * Nếu chọn Public & Private hoặc Private, sẽ xuất hiện thêm trường Allow CIDR để nhập danh sách các dải địa chỉ IP có quyền truy cập vào Endpoint của Kubernetes Cluster. 

**Bước 3:** Cấu hình Nodes Pool theo nhu cầu sử dụng sau đó click button 
Đối với card H200, portal không hỗ trợ tạo worker GPU là worker group base, khách hàng vui lòng tạo worker GPU từ worker group 2 trở đi.
  * **Worker Group base:**

□ Instance Type: Chọn loại Instance General
□ Type: Chọn cấu hình (CPU & Memory) cho các **Worker Node**. 
□ Container Runtime: Chọn **Containerd**.
□ Policy: Chọn loại **Storage Policy** (tương ứng với IOPS) cho Worker Node Disk.
□ Disk: Chọn dung lượng root disk cho các **Worker Node**.
□ Scale min: Số VM instance Worker Node tối thiểu cho cụm k8s. Recommend tối thiểu là 03 Nodes cho môi trường Production.
□ Scale max: Số VM instance Worker Node tối đa cho một worker group trong cụm k8s. 
□ Label: Đánh Label cho **Worker Group**
  * Worker Group n:

□ Chọn lnstance type: GPU 
□ Chọn GPU type: Nvidia H200 SXM5
□ Chọn cấu hình GPU sharing
□ Chọn cấu hình type GPU (CPU/RAM/GPU RAM) 
_Chú ý:_
  1. Ở phần "GPU Driver Installation Type" có 2 options là **Pre-install** và **User-install**. 
  2. Driver là một chương trình để cho phép hệ điều hành giao tiếp với phần cứng, cụ thể ở đây là giữa hệ điều hành của worker (windows, ubuntu ...) với GPU, hệ điều hành không thể sử dụng GPU nếu không có driver. 
  3. Đối với lựa chọn "Pre-install", cụm của khách hàng sẽ được thêm Nvidia GPU driver một cách tự động. 
  4. Đối với lựa chọn "User-install", khách hàng có thể cài đặt thủ công GPU driver để lựa chọn phiên bản driver phù hợp. 

**Bước 4** : Ấn Create và kiểm tra lại các thông tin khởi tạo. 
**Bước 5** : Theo dõi trạng thái khởi tạo cụm Kubernetes. Sau khi trạng thái Successed (Running) thì tiến hành sử dụng, triển khai ứng dụng.

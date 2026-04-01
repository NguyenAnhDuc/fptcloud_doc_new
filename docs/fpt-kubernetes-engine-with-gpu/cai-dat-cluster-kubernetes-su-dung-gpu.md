---
id: "cai-dat-cluster-kubernetes-su-dung-gpu"
title: "Cài đặt và khởi tạo Cluster Kubernetes sử dụng GPU"
sidebar_label: "Cài đặt và khởi tạo Cluster Kubernetes sử dụng GPU"
sidebar_position: "3"
---

# Cài đặt and khởi tạo Cluster Kubernetes sử dụng GPU

⚠️ **Note:**
FPT cloud hỗ trợ the card sau:
  * Trên region Hanoi and SGN hỗ trợ card GPU A30
  * Trên region Hanoi 2 and Japan hỗ trợ card GPU A30, H100 SXM5, H200 SXM5

✅ **Requirements bắt buộc:**
  * Quota CPU, GPU, RAM, Storage, Instance: đáp ứng đủ for cấu hình cluster Kubernetes mong muốn. Nếu muốn sử dụng Autoscale, số lượng GPU must đáp ứng đủ số Max node mong muốn (chú ý phần cài đặt Min node and Max node). 
  * 01 Network subnet: Network sử dụng for Kubernetes Nodes, subnet need to có Static IP Pool. 

👉 **Các bước khởi tạo 1 cluster sử dụng GPU:**
1️⃣ **GPU A30**
**Step 1** : Truy cập portal FPT Cloud [console.fptcloud.com](https://console.fptcloud.com/), chọn mục Kubernetes, ấn “Create a Kubernetes Engine”. 
[![](/img/migrated/Picture1-5-1a7a3b43.png)](/img/migrated/Picture1-5-1a7a3b43.png)
**Step 2:** Enter information cơ bản of cụm cluster sau that click button 
1.1. **Basics Information:**
[![](/img/migrated/Picture1-12-ba0b92de.png)](/img/migrated/Picture1-12-ba0b92de.png)
  * **Name:** Enter tên Cluster.
  * **Network** : Subnet sử dụng to deploy the Virtual Machine (VM) of Kubernetes Cluster. 
  * **Version:** Chọn version of Kubernetes Cluster.
  * **Cluster Endpoint Access** : Tùy chọn truy cập Endpoint cụm Kubernetes 

▪ **Public** : Apiserver endpoint of cụm k8s can truy cập from public. Kết nối from worker nodes tới apiserver đi qua đường public. 
▪ **Public & Private**: Apiserver endpoint of cụm k8s can truy cập from public. Kết nối from worker nodes tới apiserver đi qua đường private. 
▪ **Private** : Apiserver endpoint of cụm k8s chỉ can truy cập private in VPC. Kết nối from worker nodes tới apiserver đi qua đường private. 
💡 **Cách chọn Cluster Endpoint phù hợp**
➤ **Public** : Nếu customer need to truy cập Kubernetes API Endpoint from bên ngoài VPC, sử dụng tùy chọn this. 
➤ **Public & Private**: Dùng when need to Endpoint can truy cập công khai and muốn whitelist IP truy cập ando apiserver endpoint this.
➤ **Private** : Dùng when chỉ need to truy cập ando Endpoint in nội bộ VPC. 
[![](/img/migrated/Screenshot_3-3db7fd69.png)](/img/migrated/Screenshot_3-3db7fd69.png)
⚠️ **Note:**
  * Khách hàng need to chọn Cluster Endpoint Access phù hợp dựa trên yêu cầu security and kiến trúc network of system. 
  * Nếu chọn Public & Private or Private, will appears thêm trường Allow CIDR to nhập list the dải địa chỉ IP có permission truy cập ando Endpoint of Kubernetes Cluster. 

👉 **Giải thích về Allow CIDR**
  * CIDR (Classless Inter-Domain Routing) là định dạng to xác định dải IP có permission truy cập ando Kubernetes API Endpoint. 
  * Nếu to trống, tức là mặc định là 0.0.0.0/0, Endpoint will can truy cập from bất kỳ địa chỉ IP nào. 
  * Nếu nhập a giá trị cụ thể (ví dụ: 192.168.1.0/24), chỉ the IP in dải 192.168.1.0 - 192.168.1.255 mới can truy cập. 

⚠️ Note: Nếu need to security cao, customer should hạn chế CIDR chỉ for phép the dải IP nội bộ thay vì 0.0.0.0/0. 
**Step 3** : Enter ando information cụm Kubernetes need to khởi tạo. Ngoài the information khởi tạo for Kubernetes thông thường, need to chọn cấu hình for GPU in Worker Group: 
  * Chọn lnstance type: GPU 
  * Chọn GPU type: Nvidia Tesla A30
  * Chọn cấu hình GPU sharing
  * Chọn cấu hình type GPU (CPU/RAM/GPU RAM) 

[![](/img/migrated/Picture3-4-b64ef83c.png)](/img/migrated/Picture3-4-b64ef83c.png)
_Chú ý:_
  1. Ở phần “GPU Driver Installation Type” có 2 options là **Pre-install** and **User-install**. 
  2. Driver là a chương trình to for phép hệ điều hành giao tiếp with phần cứng, cụ thể ở đây là giữa hệ điều hành of worker (windows, ubuntu ...) with GPU, hệ điều hành cannot sử dụng GPU if không có driver. 
  3. Đối with lựa chọn “Pre-install”, cụm of customer will is thêm Nvidia GPU driver a theh tự động. 
  4. Đối with lựa chọn “User-install”, customer can cài đặt thủ công GPU driver to lựa chọn version driver phù hợp. 

**Step 4** : Ấn Create and kiểm tra lại the information khởi tạo. 
**Step 5** : Monitor status khởi tạo cụm Kubernetes. Sau when status Successed (Running) thì tiến hành sử dụng, triển khai ứng dụng.
2️⃣ **GPU H100 SXM5**
**Step 1:** Trên menu of FPT Portal chọn **Containers** >**Kubernetes** > **Create a Kubernetes Engine**.
[![](/img/migrated/Screenshot-2025-03-20-134507-e724ae33.png)](/img/migrated/Screenshot-2025-03-20-134507-e724ae33.png)
**Step 2:** Enter information cơ bản of cụm cluster sau that click button 
1.1. **Basics Information:**
[![](/img/migrated/Picture1-12-ba0b92de.png)](/img/migrated/Picture1-12-ba0b92de.png)
  * **Name:** Enter tên Cluster.
  * **Network** : Subnet sử dụng to deploy the Virtual Machine (VM) of Kubernetes Cluster. 
  * **Version:** Chọn version of Kubernetes Cluster.
  * **Cluster Endpoint Access** : Tùy chọn truy cập Endpoint cụm Kubernetes 

**Step 3:** Configure Nodes Pool theo nhu cầu sử dụng sau that click button 
Đối with card H100, portal không hỗ trợ tạo worker GPU là worker group base, customer vui lòng tạo worker GPU from worker group 2 trở đi.
  * **Worker Group base:**

□ Instance Type: Chọn loại Instance General
□ Type: Chọn cấu hình (CPU & Memory) for the **Worker Node**. 
□ Container Runtime: Select **Containerd**. 
□ Policy: Chọn loại **Storage Policy** (corresponding with IOPS) for Worker Node Disk. 
□ Disk: Chọn dung lượng root disk for the **Worker Node**. 
□ Scale min: Số VM instance Worker Node tối thiểu for cụm k8s. Recommend tối thiểu là 03 Nodes for môi trường Production. 
□ Scale max: Số VM instance Worker Node tối đa for a worker group in cụm k8s. 
□ Label: Đánh Label for **Worker Group**
  * **Worker Group n:**

□ Chọn lnstance type: GPU 
□ Chọn GPU type: Nvidia H100 SXM5
□ Chọn cấu hình GPU sharing
□ Chọn cấu hình type GPU (CPU/RAM/GPU RAM) 
_Chú ý:_
  1. Ở phần “GPU Driver Installation Type” có 2 options là **Pre-install** and **User-install**. 
  2. Driver là a chương trình to for phép hệ điều hành giao tiếp with phần cứng, cụ thể ở đây là giữa hệ điều hành of worker (windows, ubuntu ...) with GPU, hệ điều hành cannot sử dụng GPU if không có driver. 
  3. Đối with lựa chọn “Pre-install”, cụm of customer will is thêm Nvidia GPU driver a theh tự động. 
  4. Đối with lựa chọn “User-install”, customer can cài đặt thủ công GPU driver to lựa chọn version driver phù hợp. 

**Step 4** : Ấn Create and kiểm tra lại the information khởi tạo. 
**Step 5** : Monitor status khởi tạo cụm Kubernetes. Sau when status Successed (Running) thì tiến hành sử dụng, triển khai ứng dụng.
3️⃣ **GPU H200 SXM5**
**Step 1:** Trên menu of FPT Portal chọn **Containers** >**Kubernetes** > **Create a Kubernetes Engine**.
[![](/img/migrated/Screenshot-2025-03-20-134507-e724ae33.png)](/img/migrated/Screenshot-2025-03-20-134507-e724ae33.png)
**Step 2:** Enter information cơ bản of cụm cluster sau that click button 
1.1. **Basics Information:**
[![](/img/migrated/Picture1-12-ba0b92de.png)](/img/migrated/Picture1-12-ba0b92de.png)
  * **Name:** Enter tên Cluster.
  * **Network** : Subnet sử dụng to deploy the Virtual Machine (VM) of Kubernetes Cluster. 
  * **Version:** Chọn version of Kubernetes Cluster.
  * **Cluster Endpoint Access** : Tùy chọn truy cập Endpoint cụm Kubernetes 

⚠️ **Note:**
  * Khách hàng need to chọn Cluster Endpoint Access phù hợp dựa trên yêu cầu security and kiến trúc network of system. 
  * Nếu chọn Public & Private or Private, will appears thêm trường Allow CIDR to nhập list the dải địa chỉ IP có permission truy cập ando Endpoint of Kubernetes Cluster. 

**Step 3:** Configure Nodes Pool theo nhu cầu sử dụng sau that click button 
Đối with card H200, portal không hỗ trợ tạo worker GPU là worker group base, customer vui lòng tạo worker GPU from worker group 2 trở đi.
  * **Worker Group base:**

□ Instance Type: Chọn loại Instance General
□ Type: Chọn cấu hình (CPU & Memory) for the **Worker Node**. 
□ Container Runtime: Select **Containerd**.
□ Policy: Chọn loại **Storage Policy** (corresponding with IOPS) for Worker Node Disk.
□ Disk: Chọn dung lượng root disk for the **Worker Node**.
□ Scale min: Số VM instance Worker Node tối thiểu for cụm k8s. Recommend tối thiểu là 03 Nodes for môi trường Production.
□ Scale max: Số VM instance Worker Node tối đa for a worker group in cụm k8s. 
□ Label: Đánh Label for **Worker Group**
  * Worker Group n:

□ Chọn lnstance type: GPU 
□ Chọn GPU type: Nvidia H200 SXM5
□ Chọn cấu hình GPU sharing
□ Chọn cấu hình type GPU (CPU/RAM/GPU RAM) 
_Chú ý:_
  1. Ở phần “GPU Driver Installation Type” có 2 options là **Pre-install** and **User-install**. 
  2. Driver là a chương trình to for phép hệ điều hành giao tiếp with phần cứng, cụ thể ở đây là giữa hệ điều hành of worker (windows, ubuntu ...) with GPU, hệ điều hành cannot sử dụng GPU if không có driver. 
  3. Đối with lựa chọn “Pre-install”, cụm of customer will is thêm Nvidia GPU driver a theh tự động. 
  4. Đối with lựa chọn “User-install”, customer can cài đặt thủ công GPU driver to lựa chọn version driver phù hợp. 

**Step 4** : Ấn Create and kiểm tra lại the information khởi tạo. 
**Step 5** : Monitor status khởi tạo cụm Kubernetes. Sau when status Successed (Running) thì tiến hành sử dụng, triển khai ứng dụng.

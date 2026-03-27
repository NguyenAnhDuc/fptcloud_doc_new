---
id: "change-network-config"
title: "_Tính năng chỉ áp dụng cho khách hàng mua dich vụ loại Speicific_"
description: "_Tính năng chỉ áp dụng cho khách hàng mua dich vụ loại Speicific_"
sidebar_label: "_Tính năng chỉ áp dụng cho khách hàng mua dich vụ loại Speicific_"
sidebar_position: 65
---

# Change Network Config

_Tính năng chỉ áp dụng cho khách hàng mua dich vụ loại Speicific_
Có nhiều lý do khiến bạn có thể cần thay đổi và đặt lại địa chỉ IP tĩnh cho thiết bị của mình, chẳng hạn như cấu hình 1 máy chủ cố định hoặc cần đặt quy luật cho một nhóm máy tính trong nội bộ. Một kịch bản nữa là khi bạn thay đổi cấu hình card NIC trên hệ thống Cloud được cung cấp bởi FPT Smart Cloud, địa chỉ IP bên trong máy sẽ không tự cập nhật theo và bạn cần cấu hình thủ công (ngoài ra có một số phương pháp khác xử lý trong tình huống này nhưng không được đề cập trong nội dung bài viết).
**Những điều cần lưu ý trước khi bạn thay** **đổi thông tin file config network** : 
Đặt địa chỉ IP tĩnh có thể giúp tránh xung đột mạng nhưng có thể khiến một số thiết bị ngừng hoạt động bình thường. Đặt địa chỉ IP tĩnh là một chức năng mạng nâng cao và cần có kiến thức cơ bản về TCP/IP. 
### **Sửa static IP trên Ubuntu server**
**Bước 1:** Kiểm tra tình trạng hiện tại 
  * Sau khi edit NIC, IP NIC là 132.0.0.190
[![NIC VM ubuntu](/img/migrated/NIC-VM-ubuntu-1024x372-84e18337.png)](/img/migrated/NIC-VM-ubuntu-1024x372-84e18337.png)
  * Bấm vào Console và đăng nhập vào hệ thống
  * Nhập ifconfig

[![NIC VM ubuntu console](/img/migrated/NIC-VM-ubuntu-console-949ea6c3.png)](/img/migrated/NIC-VM-ubuntu-console-949ea6c3.png)
**Bước 2:** Mở file 00-installer-config.yaml 
“vi 00-installer-config.yaml 
[![Screenshot 2023 07 11 at 1.06.36 PM](/img/migrated/Screenshot-2023-07-11-at-1.06.36-PM-c1e702aa.png)](/img/migrated/Screenshot-2023-07-11-at-1.06.36-PM-c1e702aa.png)
Và chuyển sang mode “Insert” (nhấn phím “i”) 
**Bước 3:** Sửa lại các thông số cần thiết. 
[![Screenshot 2023 07 11 at 1.06.53 PM](/img/migrated/Screenshot-2023-07-11-at-1.06.53-PM-68a5c578.png)](/img/migrated/Screenshot-2023-07-11-at-1.06.53-PM-68a5c578.png)
  * Write and quit: Nhấn “Esc” sau đó nhập :wq, sau đó nhấn “Enter”

[![Screenshot 2023 07 11 at 1.07.26 PM](/img/migrated/Screenshot-2023-07-11-at-1.07.26-PM-46cc3684.png)](/img/migrated/Screenshot-2023-07-11-at-1.07.26-PM-46cc3684.png)
**Bước 4:** Nhâp lệnh sau đây để cập nhật thay đổi: 
  * Sudo netplan apply
[![Screenshot 2023 07 11 at 1.10.56 PM](/img/migrated/Screenshot-2023-07-11-at-1.10.56-PM-0a072ee4.png)](/img/migrated/Screenshot-2023-07-11-at-1.10.56-PM-0a072ee4.png)

**Bước 5** : Check lại địa chỉ IP đã thay bằng lệnh ifconfig 
[![Screenshot 2023 07 11 at 1.12.57 PM](/img/migrated/Screenshot-2023-07-11-at-1.12.57-PM-223067ab.png)](/img/migrated/Screenshot-2023-07-11-at-1.12.57-PM-223067ab.png)[![Screenshot 2023 07 11 at 1.13.18 PM](/img/migrated/Screenshot-2023-07-11-at-1.13.18-PM-87f0f02a.png)](/img/migrated/Screenshot-2023-07-11-at-1.13.18-PM-87f0f02a.png)
### **Sửa static IP trên Window server**
**Bước 1:** Kiểm tra tình trạng hiện tại 
Sau khi edit NIC, IP NIC là 132.0.0.182 
[![NIC VM window 2012](/img/migrated/NIC-VM-window-2012-1024x372-cdd0fc49.png)](/img/migrated/NIC-VM-window-2012-1024x372-cdd0fc49.png)
  * Bấm vào Console và đăng nhập vào hệ thống
  * Vào Power Shell hoặc Comand Line – Nhập “ipconfig” – Enter

[![NIC VM window power shell](/img/migrated/NIC-VM-window-power-shell-1b543bec.png)](/img/migrated/NIC-VM-window-power-shell-1b543bec.png)
**Bước 2** : vào Run – Nhập “ncpa.cpl” 
[![NIC VM window run ncpa.cpl](/img/migrated/NIC-VM-window-run-ncpa.cpl_-4147bd62.png)](/img/migrated/NIC-VM-window-run-ncpa.cpl_-4147bd62.png)
**Bước 3:** Phải chuột vào card mạng cần thay đổi Config, chọn propertise 
[![NIC VM window network setting](/img/migrated/NIC-VM-window-network-setting-ee7e82cd.png)](/img/migrated/NIC-VM-window-network-setting-ee7e82cd.png)
**Bước 4** : Thay đổi các thông số theo cấu hình mới – OK 
[![NIC VM window network setting config IPv4 ok](/img/migrated/NIC-VM-window-network-setting-config-IPv-ab0305c9.png)](/img/migrated/NIC-VM-window-network-setting-config-IPv-ab0305c9.png)
**Bước 5:** Kiểm tra lại các thay đổi và ping thử 
[![NIC VM window network setting config IPv4 test](/img/migrated/NIC-VM-window-network-setting-config-IPv-9b70a68d.png)](/img/migrated/NIC-VM-window-network-setting-config-IPv-9b70a68d.png)
### **Sửa static IP trên CentOS**
**Bước 1:** Kiểm tra tình trạng hiện tại 
Sau khi edit NIC, IP NIC là 132.0.0.70 
[![NIC VM Centos](/img/migrated/NIC-VM-Centos-1024x372-9c72aa69.png)](/img/migrated/NIC-VM-Centos-1024x372-9c72aa69.png)
  * Vào Console check bằng lệnh: “ip a” – Enter

[![NIC VM CentOS console](/img/migrated/NIC-VM-CentOS-console-1024x311-3cb187fe.png)](/img/migrated/NIC-VM-CentOS-console-1024x311-3cb187fe.png)
**Bước 2:** Vào file ifcfg-eth0, và sửa thông số: 
  * vi /etc/sysconfig/network-scripts/ifcfg-eth0

[![Screenshot 2023 07 11 at 1.25.01 PM](/img/migrated/Screenshot-2023-07-11-at-1.25.01-PM-ca5cfd61.png)](/img/migrated/Screenshot-2023-07-11-at-1.25.01-PM-ca5cfd61.png)
**Bước 3** : Sửa thông số cấu hình 
  * Chuyển sang mode insert: nhấn phím “i”
  * Nhập thông số mới

[![NIC VM CentOS console insert](/img/migrated/NIC-VM-CentOS-console-insert-4b7c2644.png)](/img/migrated/NIC-VM-CentOS-console-insert-4b7c2644.png)
  * Nhấn “ESC”
  * Nhập :wq – enter để lưu lại

[![NIC VM CentOS console insert wq](/img/migrated/NIC-VM-CentOS-console-insert-wq-baea240e.png)](/img/migrated/NIC-VM-CentOS-console-insert-wq-baea240e.png)
**Bước 4** : Restart Networking service bằng lệnh: 
  * service network restart

[![Screenshot 2023 07 11 at 1.28.27 PM](/img/migrated/Screenshot-2023-07-11-at-1.28.27-PM-418b264e.png)](/img/migrated/Screenshot-2023-07-11-at-1.28.27-PM-418b264e.png)
**Bước 5** : Kiểm tra lại cấu hình vào ping test 
[![Screenshot 2023 07 11 at 1.28.45 PM](/img/migrated/Screenshot-2023-07-11-at-1.28.45-PM-b786390c.png)](/img/migrated/Screenshot-2023-07-11-at-1.28.45-PM-b786390c.png)
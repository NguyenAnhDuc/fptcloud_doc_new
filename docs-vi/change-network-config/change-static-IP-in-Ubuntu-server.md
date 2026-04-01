---
id: "change-static-IP-in-Ubuntu-server"
title: "Change Static ip in Ubuntu Server"
description: "**Bước 1:** Kiểm tra tình trạng hiện tại"
sidebar_label: "Change Static ip in Ubuntu Server"
sidebar_position: 3
---

# Change Static ip in Ubuntu Server

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
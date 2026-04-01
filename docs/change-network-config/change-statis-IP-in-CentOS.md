---
id: "change-statis-IP-in-CentOS"
title: "Change Statis ip in Centos"
sidebar_label: "Change Statis ip in Centos"
sidebar_position: "5"
---

# Change Statis ip in Centos

**Step 1:** Check tình trạng hiện tại 
Sau khi edit NIC, IP NIC là 132.0.0.70 
[![NIC VM Centos](/img/migrated/NIC-VM-Centos-1024x372-9c72aa69.png)](/img/migrated/NIC-VM-Centos-1024x372-9c72aa69.png)
  * Vào Console check bằng lệnh: “ip a” – Enter

[![NIC VM CentOS console](/img/migrated/NIC-VM-CentOS-console-1024x311-3cb187fe.png)](/img/migrated/NIC-VM-CentOS-console-1024x311-3cb187fe.png)
**Step 2:** Vào file ifcfg-eth0, và sửa thông số: 
  * vi /etc/sysconfig/network-scripts/ifcfg-eth0

[![Screenshot 2023 07 11 at 1.25.01 PM](/img/migrated/Screenshot-2023-07-11-at-1.25.01-PM-ca5cfd61.png)](/img/migrated/Screenshot-2023-07-11-at-1.25.01-PM-ca5cfd61.png)
**Step 3** : Sửa thông số cấu hình 
  * Chuyển sang mode insert: nhấn phím “i”
  * Nhập thông số mới

[![NIC VM CentOS console insert](/img/migrated/NIC-VM-CentOS-console-insert-4b7c2644.png)](/img/migrated/NIC-VM-CentOS-console-insert-4b7c2644.png)
  * Nhấn “ESC”
  * Nhập :wq – enter để lưu lại

[![NIC VM CentOS console insert wq](/img/migrated/NIC-VM-CentOS-console-insert-wq-baea240e.png)](/img/migrated/NIC-VM-CentOS-console-insert-wq-baea240e.png)
**Step 4** : Restart Networking service bằng lệnh: 
  * service network restart

[![Screenshot 2023 07 11 at 1.28.27 PM](/img/migrated/Screenshot-2023-07-11-at-1.28.27-PM-418b264e.png)](/img/migrated/Screenshot-2023-07-11-at-1.28.27-PM-418b264e.png)
**Step 5** : Check lại cấu hình vào ping test 
[![Screenshot 2023 07 11 at 1.28.45 PM](/img/migrated/Screenshot-2023-07-11-at-1.28.45-PM-b786390c.png)](/img/migrated/Screenshot-2023-07-11-at-1.28.45-PM-b786390c.png)

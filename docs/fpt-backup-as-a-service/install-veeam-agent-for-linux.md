---
id: "install-veeam-agent-for-linux"
title: "Install Veeam Agent for Linux"
sidebar_label: "Install Veeam Agent for Linux"
sidebar_position: "3"
---

# Install Veeam Agent for Linux

**Step 1** : Trên server need to backup, login ando trang portal with account of you:
Backup as a Service : <https://baas.fptcloud.com>
[![file](/img/migrated/image-1695290664395-24434403.png)](/img/migrated/image-1695290664395-24434403.png)
Đây là interface quản trị of you after login successfully:
[![file](/img/migrated/image-1695290688881-d34bc29d.png)](/img/migrated/image-1695290688881-d34bc29d.png)
**Step 2** : Vào mục **Managed Computers** chọn **Download Agent** sau that chọn **Linux**.
[![file](/img/migrated/image-1695290710281-8dee543b.png)](/img/migrated/image-1695290710281-8dee543b.png)
Chỉnh thời gian Token hết hạn theo nhu cầu. Mặc định là 12 Tháng.
[![file](/img/migrated/image-1695290727809-1b6f23f5.png)](/img/migrated/image-1695290727809-1b6f23f5.png)
**Step 3** : Sau when download successfully file LinuxAgentPackages.sh you need to copy ando in server and tiến hành cài đặt.
Chạy lệnh sau:

```
sudo chmod +x LinuxAgentPackages.sh  
sudo ./LinuxAgentPackages.sh  
  

```

[![file](/img/migrated/image-1695290745234-3e4654e1.png)](/img/migrated/image-1695290745234-3e4654e1.png)
**Step 4** : Veeam will tự động cài đặt Veeam Agent after script chạy successfully.
Check status kết nối bằng command sau:

```
veeamconsoleconfig -s
```

[![file](/img/migrated/image-1695290759883-5ebe5284.png)](/img/migrated/image-1695290759883-5ebe5284.png)
**Step 5** : Check quá trình cài đặt successfully
[![file](/img/migrated/image-1695290772560-933364fa.png)](/img/migrated/image-1695290772560-933364fa.png)
Check job backup has been có in mục Backup Job.
[![file](/img/migrated/image-1695290783350-f99963d4.png)](/img/migrated/image-1695290783350-f99963d4.png)

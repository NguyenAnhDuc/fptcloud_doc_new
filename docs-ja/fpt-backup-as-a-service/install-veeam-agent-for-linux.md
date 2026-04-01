---
id: "install-veeam-agent-for-linux"
title: "Install Veeam Agent for Linux"
sidebar_label: "Install Veeam Agent for Linux"
sidebar_position: "3"
---

# Install Veeam Agent for Linux

**ステップ 1** : Trên server cần backup, login vào trang portal với account của bạn:
Backup as a Service : <https://baas.fptcloud.com>
[![file](/img/migrated/image-1695290664395-24434403.png)](/img/migrated/image-1695290664395-24434403.png)
Đây là giao diện quản trị của bạn sau khi login thành công:
[![file](/img/migrated/image-1695290688881-d34bc29d.png)](/img/migrated/image-1695290688881-d34bc29d.png)
**ステップ 2** : Vào mục **Managed Computers** chọn **Download Agent** sau đó chọn **Linux**.
[![file](/img/migrated/image-1695290710281-8dee543b.png)](/img/migrated/image-1695290710281-8dee543b.png)
Chỉnh thời gian Token hết hạn theo nhu cầu. Mặc định là 12 Tháng.
[![file](/img/migrated/image-1695290727809-1b6f23f5.png)](/img/migrated/image-1695290727809-1b6f23f5.png)
**ステップ 3** : Sau khi download thành công file LinuxAgentPackages.sh bạn cần copy vào trong server và tiến hành cài đặt.
Chạy lệnh sau:

```
sudo chmod +x LinuxAgentPackages.sh  
sudo ./LinuxAgentPackages.sh  
  

```

[![file](/img/migrated/image-1695290745234-3e4654e1.png)](/img/migrated/image-1695290745234-3e4654e1.png)
**ステップ 4** : Veeam sẽ tự động cài đặt Veeam Agent sau khi script chạy thành công.
Kiểm tra trạng thái kết nối bằng command sau:

```
veeamconsoleconfig -s
```

[![file](/img/migrated/image-1695290759883-5ebe5284.png)](/img/migrated/image-1695290759883-5ebe5284.png)
**ステップ 5** : Kiểm tra quá trình cài đặt thành công
[![file](/img/migrated/image-1695290772560-933364fa.png)](/img/migrated/image-1695290772560-933364fa.png)
Kiểm tra job backup đã có trong mục Backup Job.
[![file](/img/migrated/image-1695290783350-f99963d4.png)](/img/migrated/image-1695290783350-f99963d4.png)

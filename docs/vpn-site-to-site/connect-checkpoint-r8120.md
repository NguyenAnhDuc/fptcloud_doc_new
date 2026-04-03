---
id: "connect-checkpoint-r8120"
title: "Cấu hình VPN Site-to-Site với CheckPoint R81.20"
description: "**Bài viết này hướng dẫn build thiết bị Router để đấu nối VPN_S2S với dịch vụ VPN Site-to-Site của FPT Smart Cloud.**"
sidebar_label: "Cấu hình VPN Site-to-Site với CheckPoint R81.20"
sidebar_position: "19"
---

# Connect Checkpoint R8120

**Bài viết này hướng dẫn build thiết bị Router để đấu nối VPN_S2S với dịch vụ VPN Site-to-Site của FPT Smart Cloud.**
  * [Bước 1: Build CheckPoint for Cloud](../vpn-site-to-site/index.md)
  * [Bước 2: Cấu hình cho VPN Site-to-Site](../vpn-site-to-site/index.md)
  * [Bước 3: Cấu hình cho CheckPoint](../vpn-site-to-site/index.md)
  * [Bước 4: Debug- Tracert](../vpn-site-to-site/index.md)

Cần đảm bảo các điều kiện sau: 
  * VPN Site-to-Site trên trang portal
  * CheckPoint R81.20 đã được download và boot image trên cloud với tên: **Check_Point_R82.10_T462_Gaia**
  * Smartconsole phiên bản R81.20 đã được tích hợp với CheckPoint R81.20
  * Public IP, giảm độ phức tạp thì gắn trực tiếp vào VM, không dùng Floating IP
  * 1 VM Pfsense để phục vụ debug (Optional) 

## Bước 1: Build CheckPoint for Cloud
  * **Build Image trên Horizon với cấu hình 2C4G- 1 IP public gắn trực tiếp, 1IP mạng Local cần VPN**

Chạy các command sau để boot VM từ image:
> **Openstack command**
> 
```
Copyopenstack volume create --type Premium-SSD --image Check_Point_R82.10_T462_Gaia --size 20 --bootable DISK-CD  -- Output ID  {`DISK-CD`}

```

> **Openstack command**
> 
```
Copyopenstack volume create --type Premium-SSD --size 100 --bootable DISK-OS-- Output ID  {`DISK-OS`}
```

> **Openstack command**
> 
```
Copyopenstack network list
--output ID {'IP PUBLIC'}
```

> **Openstack command**
> 
```
Copynova boot --availability-zone nova --flavor 2C4G --nic net-id={`IP PUBLIC`} --block-device id=`DISK-OS`},source=volume,dest=volume,bus=virtio,device=/dev/vda,shutdown=preserve,bootindex=0 --block-device id= {`DISK-CD`},source=volume,dest=volume,bus=ide,device=/dev/hda,type=cdrom,bootindex=1 CheckpointServer
```

  * **Để boot VM trên NoVNC, thao tác theo hướng dẫn sau:**

- Chọn **Install Gaia on this system**  
![file](/img/migrated/image-1744167760192-81a6a944.png)
- Chọn OK ![file](/img/migrated/image-1744167845702-dae767e0.png) - Tại màn Keyboard Selection, chọn **US→ OK** ![file](/img/migrated/image-1744167953227-ad1fc5f8.png) - Chọn OK.  
_(Có thể nhập cấu hình phù hợp hoặc chọn cấu hình default sẵn có)_ ![file](/img/migrated/image-1744167975414-e8f1057c.png) - Nhập password đăng nhập cho giao diện console VM ![file](/img/migrated/image-1744167988315-c3b3ea8f.png)
- Nhập password cho Smartconsole ![file](/img/migrated/image-1744167999412-e6160631.png) - Nhập IP public gắn trực tiếp đã request ở đầu phần này + Netmask là "255.255.255.255" và sau đó chọn OK. ![file](/img/migrated/image-1744168009356-1d3960bd.png) - Hoàn thành quá trình cài đặt. ![file](/img/migrated/image-1744168018268-7b88383e.png)

## Bước 2: Cấu hình cho VPN Site-to-Site
Truy cập và tạo VPN Site To Site trên trang <https://console.fptcloud.com/>
- Tạo Customer Gateway:
**- Remote private network:** dãy Lan Subnet cần peering của Checkpoint  
**- Remote IP public:** IP public của CheckPoint  
  

![](/img/migrated/photo_1_2025-07-09_17-35-39-4cb64a1a.jpg)
- Tạo VPN Connection:
Thông số của VPN Connection sẽ bao gồm 3 mục chính:
  * General information (chứa các thông tin chung của kết nối VPN)
  * Remote VPN Information (chứa các thông tin mã hóa và thông tin của quý khách hàng)
  * Dead Peer Detection (số lần hệ thống tự động retry kết nối khi bị vấn đề)

**Phần 1: General information**
![](/img/migrated/photo_2_2025-07-09_17-35-39-d0b49f4e.jpg)
Với thông số **"Pre-shared key"** cần lưu lại để điền vào CheckPoint.
**Phần 2: Remote VPN information**
![](/img/migrated/photo_3_2025-07-09_17-35-39-5b3401dd.jpg)
Quý khách hàng lựa chọn Providers = "others" sau đó làm theo các bước sau:
  * Bước 1: Điền providers name = "checkpoint" 
  * Bước 2: Điền thông tin cho IKE và IPSec cụ thể như sau:

**Đối với IKE:**
  * Authorization algorithm: sha256
  * Encryption algorithm: aes 256
  * IKE version: ikev2
  * DH group: group14
  * Lifetime: 3600 seconds
  * Phase1 negotiation mode: main

**Đối với IPsec:**
  * Authorization algorithm: sha256
  * Encryption algorithm: aes 256
  * Encapsulation mode: tunnel
  * Transform protocol: esp
  * Perfect Forward Secrecy (PFS): group14
  * Lifetime: 3600 seconds

**Phần 3: Remote VPN information**
![](/img/migrated/Screenshot-2025-08-18-110311-7-e1d4980a.png)
Điền thông số Delay và max failure và chọn **Create VPN Connection**

## Bước 3: Cấu hình cho CheckPoint
- Đăng nhập vào console VNC của VM CheckPoint theo account đã tạo trên và chạy lệnh: "Cpstart"
- Đăng nhập vào website theo địa chỉ IP: [https://{`IP`}](https://ip./) và tải về SmartConsole theo link với phiên bản mà trang web đề xuất
- Cài đặt và đăng nhập app SmartConsole theo thông tin đã được cung cấp  
_Lưu ý: có license đã kích hoạt mới có thể vào được trong SmartConsole_
Thac tác thành công hiển thị như ảnh dưới đây: ![file](/img/migrated/image-1744168234439-4a5359ac.png) - Tạo network LAN ![file](/img/migrated/image-1744168343186-88e28778.png) - Tạo Interoperable Devices với IP Public của VPN Site-to-Site thao tác như sau:
**Tại New→ More → Network Object → More → Interoperable Device** ![file](/img/migrated/image-1744168357612-ce4eb460.png) Thực hiện điền các thông tin: Name, IPv4 Address và chọn OK ![file](/img/migrated/image-1744168371868-13b38d47.png) ![file](/img/migrated/image-1744168384964-71312a97.png) - Tạo VPN Communication **_Star_** thao tác như sau:
**Tại New → More → VPN Community → Star Community** ![file](/img/migrated/image-1744168404637-63c48190.png) - Với các thông như bên dưới:
  * Chọn **Center Gateway** có tên: CheckPoint (ta vừa tạo ở trên)
  * Chọn **Satellite Gateway** là Interoperable Devices
  * Chọn **VPN Domain** là các dãy mạng tương ứng Lan/local và Remote/peer ![file](/img/migrated/image-1744168435213-4c97287e.png) ![file](/img/migrated/image-1744168459774-ff41d81d.png)
  * Chọn cấu hình Encryption tương xứng như mục đã chọn ở portal của FPT Smart Cloud, mẫu như sau: ![file](/img/migrated/image-1744168470511-0c22a58e.png) ![file](/img/migrated/image-1744168494302-49000229.png) - Sau khi tạo VPN Community, ta quay ngược trở lại Interoperable Devices để cập nhật: ![file](/img/migrated/image-1744168513930-fedde2ae.png) - Quay trở lại VPN Communication Meshed, dùng **Pre-Share Key** đã tạo ở portal của VPN Site-to-Site ![file](/img/migrated/image-1744168529624-ff1e394d.png)
  * Sau đó ấn chọn **"Publish"** tiến hành tạo ra VPN Community trên Checkpoint ![file](/img/migrated/image-1744168554131-7c16e7a4.png) - Thiết lập firewall cho thông 2 chiều giữa 2 subnet và thông 2 chiều giữa 2 IP Gateway như hình sau, sau đó ấn chọn **"Publish"**  
![file](/img/migrated/image-1744168578028-40a006ae.png)
  * Cuối cùng là set route cho mạng bên trong Checkpoint (phía VPN Site-to-Site đã được set sẵn)

Trên CheckPoint Gaia OS, bạn có thể sử dụng lệnh set static-route để thêm route. Dưới đây là cú pháp và ví dụ:
> **Openstack command**
> 
```
Copyset static-route <destination-network> nexthop gateway address <gateway-ip> on
```

Ví dụ: Để định tuyến lưu lượng đến mạng `192.168.1.0/24` qua gateway `10.0.0.1`, sử dụng:
> **Openstack command**
> 
```
Copyset static-route 192.168.1.0/24 nexthop gateway address 10.0.0.1 on
```

Sau khi thêm route, hãy chạy lệnh sau để lưu lại cấu hình:
> **Openstack command**
> 
```
Copysave config
```

## Bước 4: Debug- Tracert
  * Thử từ một máy trong mạng và thực hiện ping lẫn nhau, nếu đã thông thì thực hiện thao tác thành công.

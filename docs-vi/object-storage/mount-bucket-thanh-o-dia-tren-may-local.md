---
id: "mount-bucket-thanh-o-dia-tren-may-local"
title: "Mount bucket thành ổ đĩa trên máy local"
description: "Ngoài trường hợp sử dụng qua **FPT Portal** , **S3 Browser** chúng ta có thể sử dụng trực tiếp S3 bucket trên **FPT Obje"
sidebar_label: "Mount bucket thành ổ đĩa trên máy local"
sidebar_position: 17
---

# Mount Bucket Thanh O Dia Tren May Local

## Mount bucket với Windows
Ngoài trường hợp sử dụng qua **FPT Portal** , **S3 Browser** chúng ta có thể sử dụng trực tiếp S3 bucket trên **FPT Object Storage** như một ổ đĩa của máy tính sử dụng hệ điều hành Windows thông qua công cụ TntDrive qua các bước sau:
**Bước 1:** Truy cập và tiến hành download công tụ **TntDrive.**
**Bước 2:** Mở **TntDrive** > Chọn **Accounts** > **Add new account.**
[![User guide FPT Object Storage 55](/img/migrated/User-guide-FPT-Object-Storage-55-7eb6bc1c.png)](/img/migrated/User-guide-FPT-Object-Storage-55-7eb6bc1c.png)
**Bước 3:** Nhập các thông tin tương tự khi sử dụng **S3 Browser.**
[![User guide FPT Object Storage 56](/img/migrated/User-guide-FPT-Object-Storage-56-57f8f183.png)](/img/migrated/User-guide-FPT-Object-Storage-56-57f8f183.png)
**Bước 4:** Khách hàng sau khi đã nhập thông tin account trong công cụ **TntDrive** > Chọn **Add New Mapped Drive**.
[![User guide FPT Object Storage 57](/img/migrated/User-guide-FPT-Object-Storage-57-0f158d91.png)](/img/migrated/User-guide-FPT-Object-Storage-57-0f158d91.png)
**Bước 5** : Chọn các thông tin như sau:
  * **Storage account:** Chọn tên account vừa thêm.
  * **Amazon S3 Bucket:** Chọn bucket muốn mount.Bạn có thể nhập trực tiếp tên hoặc chọn icon để chọn.
  * **Mapped drive letter:** Chọn tên ổ đĩa để map với bucket.[![User guide FPT Object Storage 58](/img/migrated/User-guide-FPT-Object-Storage-58-f37e041c.png)](/img/migrated/User-guide-FPT-Object-Storage-58-f37e041c.png)

**Bước 6** : Chọn **Add new drive**. Lúc này ở giao diện **TntDrive** sẽ hiển thị trạng thái ổ đĩa đã mount
[![User guide FPT Object Storage 59](/img/migrated/User-guide-FPT-Object-Storage-59-8342cb83.png)](/img/migrated/User-guide-FPT-Object-Storage-59-8342cb83.png)
Bạn có thể kiểm tra trong File Explorer
[![User guide FPT Object Storage 60](/img/migrated/User-guide-FPT-Object-Storage-60-c5d9eea8.png)](/img/migrated/User-guide-FPT-Object-Storage-60-c5d9eea8.png)
## Mount bucket với Linux
Trong hướng dẫn này sẽ hướng dẫn khách hàng thực hiện mount bucket thông qua hệ điều hành Ubuntu 20.04 thông qua công cụ S3FS.
**Bước 1:** Cài đặt S3FS.

```
Copysudo apt-get install s3fs
```

**Bước 2:** Tạo file chứa access key và secret key.

```
Copyecho XRRS541KWS8T9DMDRCFY:gknj5Rpmgifmr4Bc90euHF8GIaZEY7xJD6bVDm7D > s3-password   
chmod 600 s3-password 
```

[![User guide FPT Object Storage 61](/img/migrated/User-guide-FPT-Object-Storage-61-10af958f.png)](/img/migrated/User-guide-FPT-Object-Storage-61-10af958f.png)
**Bước 3:** Tạo thư mục mount.

```
Copymkdir /mnt/bucket-01 

```

**Bước 4:** Thực hiện mount với fstab.

```
Copyecho bucket-01 /mnt/bucket-01 fuse.s3fs \_netdev,allow\_other,passwd\_file=/root/s3-password,use\_path\_request\_style,nonempty,uid=0,gid=0,use\_cache=/tmp,dbglevel=info,curldbg,url=https://s3-hfx03.fptcloud.com 0 0 >> /etc/fstab 

```

Kết quả:
**[![User guide FPT Object Storage 62](/img/migrated/User-guide-FPT-Object-Storage-62-ee682ee3.png)](/img/migrated/User-guide-FPT-Object-Storage-62-ee682ee3.png)**
**Bước 5:** Thực hiện mount bucket

```
Copymount -a 

```

**[![User guide FPT Object Storage 63](/img/migrated/User-guide-FPT-Object-Storage-63-37afcc4b.png)](/img/migrated/User-guide-FPT-Object-Storage-63-37afcc4b.png)**
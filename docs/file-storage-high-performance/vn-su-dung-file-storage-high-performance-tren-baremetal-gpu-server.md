---
id: "vn-su-dung-file-storage-high-performance-tren-baremetal-gpu-server"
title: "Vn Su Dung File Storage High Performance Tren Baremetal Gpu Server"
description: "Sau khi request cấp phát dịch vụ được chấp nhận, bạn sẽ nhận được các thông tin để sử dụng File Storage trên Baremetal."
sidebar_label: "Vn Su Dung File Storage High Performance Tren Baremetal Gpu Server"
sidebar_position: "5"
---

# Create Mount Point

## **1. Tổng quan**
Sau khi request cấp phát dịch vụ được chấp nhận, bạn sẽ nhận được các thông tin để sử dụng File Storage trên Baremetal.
Một số lưu ý quan trọng:
  * Mỗi subnet sẽ có 1 endpoint khác nhau dùng để access vào data File Storage. Trước khi mount hãy kiểm tra thật kỹ các thông tin đã được cung cấp để tránh bị lỗi trong quá trình cấu hình.

## **2. Hướng dẫn sử dụng**
### **A. Sử dụng image từ FPT AI FACTORY**
**Bước 1: Tạo mountpoint trên OS**

```
mkdir /mnt/hps
```

**Bước 2: Mount File System**
Thay endpoint **10.101.33.1** bằng Endpoint được cung cấp
**Mount VAST NFS qua TCP**

```
Copymount -o proto=tcp,vers=3 10.101.33.1:/test /mnt/hps
mount -o proto=tcp,vers=3,nconnect=64 10.101.33.1:/mountpoint /mnt/hps
```

**Mount VAST NFS qua RDMA**

```
Copymount -o proto=rdma,port=20049,vers=3 10.101.33.1:/mountpoint /mnt/hps
mount -o proto=rdma,port=20049,nconnect=64,vers=3 10.101.33.1:/mountpoint /mnt/hps
```

**Mount Multi-Path RDMA**

```
Copysudo mount -v -o vers=3,proto=rdma,port=20049,spread_reads,spread_writes,nconnect=64,localports=10.101.32.41,remoteports=10.101.33.1-10.101.33.64 10.101.33.1:/test /mnt/hps
```

**Bước 3: Cấu hình tự động mount khi khởi động lại**
Chỉnh sửa file `/etc/fstab`:

```
Copy# Write followings entries to /etc/fstab
10.101.33.1:/test /mnt/hps nfs vers=3,proto=rdma,port=20049,spread_reads,spread_writes,nconnect=64,localports=10.101.32.41,remoteports=10.101.33.1-10.101.33.64 0 0
```

**Lưu ý** : Chạy lệnh để kiểm tra lại xem cấu hình mount có lỗi gì không.

```
Copymount -a
```

### **B. Sử dụng custom Ubuntu OS**
Nếu bạn dùng image tuỳ chỉnh thì cần cài thêm VAST Client theo hướng dẫn sau:
**Bước 1:** Cài đặt **VAST NFS Client**

```
Copyapt update && apt install -y nfs-common dpkg-dev autotools-dev debhelper curl
curl -sSf <https://s3-sgn10.fptcloud.com/file-storage-resource/download.sh> | bash -s
tar xvf vastnfs-*.tar.xz
cd vastnfs-*/
./build.sh bin
sudo apt install ./dist/*.deb
sudo depmod -a
sudo update-initramfs -u -k $(uname -r)
sudo apt update
sudo apt install nfs-common -y
sudo reboot
```

**Bước 2: Tạo mountpoint trên OS**

```
Copy# Create Mount Point
mkdir /mnt/hps
```

**Bước 3: Mount File System**
Thay endpoint **10.101.33.1** bằng Endpoint được cung cấp
**Mount VAST NFS qua TCP**

```
Copymount -o proto=tcp,vers=3 10.101.33.1:/test /mnt/hps
mount -o proto=tcp,vers=3,nconnect=64 10.101.33.1:/mountpoint /mnt/hps
```

**Mount VAST NFS qua RDMA**

```
Copymount -o proto=rdma,port=20049,vers=3 10.101.33.1:/mountpoint /mnt/hps
mount -o proto=rdma,port=20049,nconnect=64,vers=3 10.101.33.1:/mountpoint /mnt/hps
```

**Mount Multi-Path RDMA**

```
Copysudo mount -v -o vers=3,proto=rdma,port=20049,spread_reads,spread_writes,nconnect=64,localports=10.101.32.41,remoteports=10.101.33.1-10.101.33.64 10.101.33.1:/test /mnt/hps
```

**Bước 4: Cấu hình tự động mount khi khởi động lại**
Chỉnh sửa file `/etc/fstab`:

```
Copy## LustreFS ##
# Write followings entries to /etc/fstab
10.101.33.1:/test /mnt/hps nfs vers=3,proto=rdma,port=20049,spread_reads,spread_writes,nconnect=64,localports=10.101.32.41,remoteports=10.101.33.1-10.101.33.64 0 0
```

**Lưu ý** : Chạy lệnh để kiểm tra lại xem cấu hình mount có lỗi gì không.

```
Copymount -a
```

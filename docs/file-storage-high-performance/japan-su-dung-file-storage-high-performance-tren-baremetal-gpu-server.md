---
id: "japan-su-dung-file-storage-high-performance-tren-baremetal-gpu-server"
title: "Sử dụng File Storage - High Performance trên Baremetal (GPU Server)"
description: "Dịch vụ File Storage - High Performance hiện đã sẵn sàng cho hạ tầng Baremetal tại khu vực Nhật Bản. Để yêu cầu sử dụng,"
sidebar_label: "Sử dụng File Storage - High Performance trên Baremetal (GPU Server)"
sidebar_position: "8"
---

# Select option 2

## Tổng quan
Dịch vụ File Storage - High Performance hiện đã sẵn sàng cho hạ tầng Baremetal tại khu vực Nhật Bản. Để yêu cầu sử dụng, vui lòng liên hệ sale hoặc hỗ trợ kỹ thuật và cung cấp các thông tin sau:
  * **Dung lượng yêu cầu (quota)**
  * **Subnet cần kết nối**

## Hướng dẫn sử dụng
### A. Sử dụng image từ FPT AI FACTORY
Nếu bạn đang dùng các image được cung cấp bởi FPT AI FACTORY thì DDN client đã được cài đặt sẵn, các bạn thực hiện theo hướng dẫn sau:
**Bước 1: Tạo thư mục mount**

```
Copy# Create Mount Point
mkdir /mnt/hps
```

**Bước 2: Thực hiện lệnh mount thủ công**

```
Copy# Create Mount Point
mount -t lustre 100.69.252.1@o2ib,100.69.252.2@o2ib:100.69.252.3@o2ib,100.69.252.4@o2ib:100.69.252.5@o2ib,100.69.252.6@o2ib:100.69.252.7@o2ib,100.69.252.8@o2ib:/scratch /mnt/hps
```

**Bước 3: Cấu hình tự động mount khi khởi động lại**
Chỉnh sửa file `/etc/fstab`:

```
Copy## LustreFS ##
100.69.252.1@o2ib,100.69.252.2@o2ib:100.69.252.3@o2ib,100.69.252.4@o2ib:100.69.252.5@o2ib,100.69.252.6@o2ib:100.69.252.7@o2ib,100.69.252.8@o2ib:/scratch /mnt/hps lustre flock,defaults 0 0
```

**Giải thích từng phần**
  * `"100.69.252.1@o2ib,100.69.252.2@o2ib:...:100.69.252.8@o2ib:/scratch**"**`
    * 100.69.252.1,100.69.252.2..,100.69.252.8 là dải endpoint cố định.
    * `/scratch` là đường dẫn của filesystem trên Lustre server.
  * **`/mnt/hps`**
    * Mount Point trên client (đã tạo ở bước 1).

**Lưu ý** : Chạy lệnh để kiểm tra lại xem cấu hình mount có lỗi gì không.

```
Copymount -a
```

**Bước 4: Kiểm tra**

```
Copydf -h -t lustre
```

Kết quả mong đợi:

```
CopyFilesystem                    Size  Used Avail Use% Mounted on
...:/scratch                 11T   8.0K   11T   1%   /mnt/hps
```

### B. Nếu bạn sử dụng image Ubuntu tuỳ chỉnh
Nếu bạn dùng image tuỳ chỉnh thì cần tự build Packages theo hướng dẫn sau:
**Bước 1: Build Lustre Client**
Bạn có thể bỏ qua nếu đã build cho kernel hiện tại.

```
Copywget https://s3-sgn10.fptcloud.com/file-storage-resource/exa-client-6.3.2.tar.gz
tar xzvf exa-client-6.3.2.tar.gz
cd exa-client
./exa_client_deploy.py

# Wait for configure and build
# After installation is finished, select option 6
# (compiled packages are saved in /opt/ddn/exascaler/debs)
```

Nếu phiên bản OS Ubuntu bạn đang dùng kernel 5.15.0-130-generic các bạn có thể bỏ qua bước build và tải các bản build sẵn ở dưới đây:

```
Copy# Install Lustre Pkg (for kernel 5.15.0-130-generic)

wget https://s3-sgn10.fptcloud.com/package-pub/lustre-dev_2.14.0-ddn184-1_amd64.deb
wget https://s3-sgn10.fptcloud.com/package-pub/lustre-client-modules-5.15.0-130-generic_2.14.0-ddn184-1_amd64.deb
wget https://s3-sgn10.fptcloud.com/package-pub/lustre-client-utils_2.14.0-ddn184-1_amd64.deb
```

**Bước 2. Cài đặt Lustre Client**
Cài đặt Lustre Client bằng cách sử dụng các gói `.deb` đã được build từ bước B1 hoặc có sẵn.
  * Bước này **chỉ thực hiện nếu đã có sẵn gói`.deb` phù hợp**.
  * Nếu không có sẵn gói, cần quay lại **bước 1** để build gói trước khi cài đặt.
  * Nếu kernel không khớp với gói `.deb`, có thể gặp lỗi và cần build lại tương thích với kernel hiện tại.

```
Copy# Install Lustre Pkg (for kernel 5.15.0-130-generic)

sudo dpkg -i lustre-dev_2.14.0-ddn184-1_amd64.deb \
             lustre-client-modules-5.15.0-130-generic_2.14.0-ddn184-1_amd64.deb \
             lustre-client-utils_2.14.0-ddn184-1_amd64.deb
```

**Bước 3. Tối ưu cấu hình**
Chỉnh sửa `/etc/modprobe.d/lustre.conf`:

```
Copy# Edit or create file /etc/modprobe.d/lustre.conf like below 
[/etc/modprobe.d/lustre.conf]
options lnet networks=o2ib(bond0)    <==HERE!
options ko2iblnd peer_credits=32 peer_credits_hiw=16 concurrent_sends=64
```

Chỉnh sửa `/etc/lustre_client`:

```
Copy# Edit or create file /etc/lustre_client like below
[/etc/lustre_client]

#++++++++++++++++++++++++++++++++++++
# LNET Interface
IF1=bond0        <==HERE!
IF2=none
IF3=none
IF4=none
IF5=none
IF6=none
IF7=none
IF8=none
```

**Bước 4. Tạo mountpoint**

```
Copy# Create Mount Point
mkdir /mnt/hps
```

**Bước 5. Thực hiện lệnh mount thủ công**

```
Copy# Create Mount Point

mount -t lustre 100.69.252.1@o2ib,100.69.252.2@o2ib:100.69.252.3@o2ib,100.69.252.4@o2ib:100.69.252.5@o2ib,100.69.252.6@o2ib:100.69.252.7@o2ib,100.69.252.8@o2ib:/scratch /mnt/hps
```

**B6. Cấu hình tự động mount**
Chỉnh sửa file `/etc/fstab`:

```
Copy# Write followings entries to /etc/fstab
##LustreFS##

100.69.252.1@o2ib,100.69.252.2@o2ib:100.69.252.3@o2ib,100.69.252.4@o2ib:100.69.252.5@o2ib,100.69.252.6@o2ib:100.69.252.7@o2ib,100.69.252.8@o2ib:/scratch /mnt/hps lustre flock,defaults 0 0
```

**Giải thích từng phần**
  * `"100.69.252.1@o2ib,100.69.252.2@o2ib:...:100.69.252.8@o2ib:/scratch**"**`
    * 100.69.252.1,100.69.252.2..,100.69.252.8 là dải endpoint cố định.
    * `/scratch` là đường dẫn của filesystem trên Lustre server.
  * **`/mnt/hps`**
    * Mount Point trên client (đã tạo ở bước 1).

**Lưu ý** : Chạy lệnh để kiểm tra lại xem cấu hình mount có lỗi gì không.

```
Copymount -a
```

**Bước 4: Kiểm tra**

```
Copydf -h -t lustre
```

### C. KH VM GPU - OS Ubuntu
Nếu bạn dùng image tuỳ chỉnh chạy Ubuntu thì cần tự build Packages theo hướng dẫn sau:
**1. Build Packages**
Bước này để **build gói Lustre Client** từ mã nguồn trong trường hợp chưa có gói cài đặt phù hợp với kernel hiện tại của hệ thống.

```
Copy# Build Packages (skip if already built for same kernel)

wget https://s3-sgn10.fptcloud.com/file-storage-resource/exa-client-6.3.2.tar.gz
tar xzvf exa-client-6.3.2.tar.gz
cd exa-client
./exa_client_deploy.py

# Select option 2
# Wait for configure and build
# After installation is finished, select option 6
# (compiled packages are saved in /opt/ddn/exascaler/debs)

```

**2. Thiết lập Lustre Client**
Bổ sung các config giúp tối ưu hiệu năng:

```
Copy# Edit or create file /etc/modprobe.d/lustre.conf like below 
[/etc/modprobe.d/lustre.conf]
options lnet networks=tcp(eth1)    <==HERE!
options ko2iblnd peer_credits=32 peer_credits_hiw=16 concurrent_sends=64

```

```
Copy# Edit or create file /etc/lustre_client like below
[/etc/lustre_client]

#++++++++++++++++++++++++++++++++++++
# LNET Interface
IF1=eth1        <==HERE!
IF2=none
IF3=none
IF4=none
IF5=none
IF6=none
IF7=none
IF8=none
```

**3. Tạo mountpoint trên OS**

```
Copy# Create Mount Point
mkdir /mnt/hps
```

**4. Run mount command thủ công.**

```
Copy# Create Mount Point

mount -t lustre 100.69.252.1@tcp,100.69.252.2@tcp:100.69.252.3@tcp,100.69.252.4@tcp:100.69.252.5@tcp,100.69.252.6@tcp:100.69.252.7@tcp,100.69.252.8@tcp:/scratch /mnt/hps
```

**5. Thêm mục mount Lustre vào file /etc/fstab**
Cấu hình hệ thống để tự động mount Lustre filesystem bằng cách thêm một dòng vào file /etc/fstab.

```
Copy# Write followings entries to /etc/fstab
##LustreFS##

100.69.252.1@tcp,100.69.252.2@tcp:100.69.252.3@tcp,100.69.252.4@tcp:100.69.252.5@tcp,100.69.252.6@tcp:100.69.252.7@tcp,100.69.252.8@tcp:/scratch /mnt/hps lustre flock,defaults 0 0
```

**Giải thích:**
  * "100.69.252.1@tcp,100.69.252.2@tcp:...:100.69.252.8@tcp:/scratch" 
    * 100.69.252.1,100.69.252.2..,100.69.252.8 là dải endpoint của DDN cố định cho tất cả khách hàng.
    * /scratch là đường dẫn của filesystem trên Lustre server.
  * /mnt/hps 
    * Mount Point trên client (sẽ tạo ở bước 4).

**Lưu ý** : Chạy lệnh để kiểm tra lại xem cấu hình mount có lỗi gì không.

```
Copymount -a
```

**6. Confirm**

```
Copy# Confirm Client can mount lustre
df -h -t lustre

Filesystem                                                                       Size  Used Avail Use% Mounted on
100.69.252.1@tcp,100.69.252.2@tcp:100.69.252.3@tcp,100.69.252.4@tcp:100.69.252.5@tcp,100.69.252.6@tcp:100.69.252.7@tcp,100.69.252.8@tcp:/scratch   11T  8.0K   11T   1% /mnt/hps

```

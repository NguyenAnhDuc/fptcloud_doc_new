---
id: "vn-using-file-storage-high-performance-on-baremetal-gpu-server"
title: "Create mount point (Vietnam)"
description: "After your service provisioning request is approved, you will receive the necessary information to use File Storage on B"
sidebar_label: "Create mount point (Vietnam)"
sidebar_position: "5"
---

# Create mount point (Vietnam)

## **1. Overview**
After your service provisioning request is approved, you will receive the necessary information to use File Storage on Baremetal.
Important notes:
  * Each subnet will have a different endpoint for accessing File Storage data. Before mounting, make sure to carefully check the provided information to avoid configuration errors.

## **2. User Guide**
### **A. Using image from FPT AI FACTORY**
**Step 1: Create mountpoint on OS**

```
mkdir /mnt/hps
```

**Step 2: Mount File System**
Replace endpoint **10.101.33.1** with the one provided to you.
**Mount VAST NFS over TCP**

```
Copymount -o proto=tcp,vers=3 10.101.33.1:/test /mnt/hps
mount -o proto=tcp,vers=3,nconnect=64 10.101.33.1:/mountpoint /mnt/hps
```

**Mount VAST NFS over RDMA**

```
Copymount -o proto=rdma,port=20049,vers=3 10.101.33.1:/mountpoint /mnt/hps
mount -o proto=rdma,port=20049,nconnect=64,vers=3 10.101.33.1:/mountpoint /mnt/hps
```

**Mount Multi-Path RDMA**

```
Copysudo mount -v -o vers=3,proto=rdma,port=20049,spread_reads,spread_writes,nconnect=64,localports=10.101.32.41,remoteports=10.101.33.1-10.101.33.64 10.101.33.1:/test /mnt/hps
```

**Step 3: Configure auto-mount on boot**
Edit the `/etc/fstab` file:

```
Copy# Write followings entries to /etc/fstab
10.101.33.1:/test /mnt/hps nfs vers=3,proto=rdma,port=20049,spread_reads,spread_writes,nconnect=64,localports=10.101.32.41,remoteports=10.101.33.1-10.101.33.64 0 0
```

**Note:** Run the following command to verify the mount configuration:

```
Copymount -a
```

### **B. Using a custom Ubuntu OS**
If you're using a custom image, you will need to manually install the VAST Client as follows:
**Step 1: Install VAST NFS Client**

```
Copyapt update && apt install -y nfs-common dpkg-dev autotools-dev debhelper curl
curl -sSf https://s3-sgn10.fptcloud.com/file-storage-resource/download.sh | bash -s
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

**Step 2: Create mountpoint on OS**

```
Copy# Create Mount Point
mkdir /mnt/hps
```

**Step 3: Mount File System**
Replace endpoint **10.101.33.1** with the one provided to you.
**Mount VAST NFS over TCP**

```
Copymount -o proto=tcp,vers=3 10.101.33.1:/test /mnt/hps
mount -o proto=tcp,vers=3,nconnect=64 10.101.33.1:/mountpoint /mnt/hps
```

**Mount VAST NFS over RDMA**

```
Copymount -o proto=rdma,port=20049,vers=3 10.101.33.1:/mountpoint /mnt/hps
mount -o proto=rdma,port=20049,nconnect=64,vers=3 10.101.33.1:/mountpoint /mnt/hps
```

**Mount Multi-Path RDMA**

```
Copysudo mount -v -o vers=3,proto=rdma,port=20049,spread_reads,spread_writes,nconnect=64,localports=10.101.32.41,remoteports=10.101.33.1-10.101.33.64 10.101.33.1:/test /mnt/hps
```

**Step 4: Configure auto-mount on boot**
Edit the `/etc/fstab` file:

```
Copy## LustreFS ##
# Write followings entries to /etc/fstab
10.101.33.1:/test /mnt/hps nfs vers=3,proto=rdma,port=20049,spread_reads,spread_writes,nconnect=64,localports=10.101.32.41,remoteports=10.101.33.1-10.101.33.64 0 0
```

**Note:** Run the following command to verify the mount configuration:

```
Copymount -a
```

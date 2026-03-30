---
id: "japan-using-file-storage-high-performance-on-baremetal-gpu-server"
title: "Create Mount Point"
description: "The File Storage - High Performance service is now available for Baremetal infrastructure in the Japan region. To reques"
sidebar_label: "Create Mount Point"
sidebar_position: 8
pagination_next: null
---

# Create Mount Point

## 1. Overview
The File Storage - High Performance service is now available for Baremetal infrastructure in the Japan region. To request access, please contact Sales or Technical Support and provide the following information:
  * **Requested storage quota**
  * **Subnet to connect**

## 2. User Guide
### A. Using image provided by FPT AI FACTORY
If you are using images provided by **FPT AI FACTORY** , the DDN client is already pre-installed. Please follow the steps below:
**Step 1: Create mount directory**

```
mkdir /mnt/hps

```

**Step 2: Manually mount the file system**

```
Copy# Create Mount Point
mount -t lustre 100.69.252.1@o2ib,100.69.252.2@o2ib:100.69.252.3@o2ib,100.69.252.4@o2ib:100.69.252.5@o2ib,100.69.252.6@o2ib:100.69.252.7@o2ib,100.69.252.8@o2ib:/scratch /mnt/hps

```

**Step 3: Configure auto-mount on boot**
Edit the file `/etc/fstab`:

```
Copy## LustreFS ##
100.69.252.1@o2ib,100.69.252.2@o2ib:100.69.252.3@o2ib,100.69.252.4@o2ib:100.69.252.5@o2ib,100.69.252.6@o2ib:100.69.252.7@o2ib,100.69.252.8@o2ib:/scratch /mnt/hps lustre flock,defaults 0 0

```

**Explanation**
  * `"100.69.252.1@o2ib,100.69.252.2@o2ib:...:100.69.252.8@o2ib:/scratch"`
    * `100.69.252.1` to `100.69.252.8` are fixed endpoint addresses.
    * `/scratch` is the filesystem path on the Lustre server.
  * **`/mnt/hps`**
    * Mount point on the client (created in step 1).

**Note:** Run the following command to check for mount errors:

```
Copymount -a

```

**Step 4: Verify**

```
Copydf -h -t lustre

```

Expected output:

```
CopyFilesystem                    Size  Used Avail Use% Mounted on
...:/scratch                 11T   8.0K   11T   1%   /mnt/hps

```

### B. If you are using a custom Ubuntu image
If you are using a custom image, you need to build the packages manually by following the instructions below:
**Step 1: Build Lustre Client**
You may skip this step if the client has already been built for your current kernel.

```
Copywget <https://s3-sgn10.fptcloud.com/file-storage-resource/exa-client-6.3.2.tar.gz>
tar xzvf exa-client-6.3.2.tar.gz
cd exa-client
./exa_client_deploy.py

# Select option 2
# Wait for configure and build
# After installation is finished, select option 6
# (compiled packages are saved in /opt/ddn/exascaler/debs)

```

If your Ubuntu OS is running kernel `5.15.0-130-generic`, you can skip the build and use pre-built packages below:

```
Copy# Install Lustre Pkg (for kernel 5.15.0-130-generic)

wget <https://s3-sgn10.fptcloud.com/package-pub/lustre-dev_2.14.0-ddn184-1_amd64.deb>
wget <https://s3-sgn10.fptcloud.com/package-pub/lustre-client-modules-5.15.0-130-generic_2.14.0-ddn184-1_amd64.deb>
wget <https://s3-sgn10.fptcloud.com/package-pub/lustre-client-utils_2.14.0-ddn184-1_amd64.deb>

```

**Step 2: Install Lustre Client**
Install the Lustre Client using `.deb` packages built in step 1 or downloaded above.
  * Only perform this step if the matching `.deb` packages are available.
  * If not, return to **Step 1** to build the required packages.
  * If the kernel version does not match the package, errors may occur and a rebuild will be necessary.

```
Copy# Install Lustre Pkg (for kernel 5.15.0-130-generic)

sudo dpkg -i lustre-dev_2.14.0-ddn184-1_amd64.deb \\
             lustre-client-modules-5.15.0-130-generic_2.14.0-ddn184-1_amd64.deb \\
             lustre-client-utils_2.14.0-ddn184-1_amd64.deb

```

**Step 3: Optimize configuration**
Edit `/etc/modprobe.d/lustre.conf`:

```
Copy# Edit or create file /etc/modprobe.d/lustre.conf like below
[/etc/modprobe.d/lustre.conf]
options lnet networks=o2ib(bond0)    <==HERE!
options ko2iblnd peer_credits=32 peer_credits_hiw=16 concurrent_sends=64

```

Edit `/etc/lustre_client`:

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

**Step 4: Create mount point**

```
Copy# Create Mount Point
mkdir /mnt/hps

```

**Step 5: Manually mount the file system**

```
Copy# Create Mount Point

mount -t lustre 100.69.252.1@o2ib,100.69.252.2@o2ib:100.69.252.3@o2ib,100.69.252.4@o2ib:100.69.252.5@o2ib,100.69.252.6@o2ib:100.69.252.7@o2ib,100.69.252.8@o2ib:/scratch /mnt/hps

```

**Step 6: Configure auto-mount**
Edit the file `/etc/fstab`:

```
Copy# Write followings entries to /etc/fstab
##LustreFS##

100.69.252.1@o2ib,100.69.252.2@o2ib:100.69.252.3@o2ib,100.69.252.4@o2ib:100.69.252.5@o2ib,100.69.252.6@o2ib:100.69.252.7@o2ib,100.69.252.8@o2ib:/scratch /mnt/hps lustre flock,defaults 0 0

```

**Explanation**
  * `"100.69.252.1@o2ib,100.69.252.2@o2ib:...:100.69.252.8@o2ib:/scratch"`
    * `100.69.252.1` to `100.69.252.8` are fixed endpoint addresses.
    * `/scratch` is the filesystem path on the Lustre server.
  * **`/mnt/hps`**
    * Mount point on the client (created in step 1).

**Note:** Run the command below to check if the mount configuration is valid:

```
Copymount -a

```

**Step 7: Verify**

```
Copydf -h -t lustre

```

### C. VM GPU - OS Ubuntu
If you are using a custom image running Ubuntu, you need to manually build the packages by following the steps below:
**1. Build Packages**
This step is to **build the Lustre Client package** from source code in case there is no available package compatible with the current kernel of the system.

```
Copy# Build Packages (skip if already built for same kernel)

wget <https://s3-sgn10.fptcloud.com/file-storage-resource/exa-client-6.3.2.tar.gz>
tar xzvf exa-client-6.3.2.tar.gz
cd exa-client
./exa_client_deploy.py

# Select option 2
# Wait for configure and build
# After installation is finished, select option 6
# (compiled packages are saved in /opt/ddn/exascaler/debs)

```

**2. Configure Lustre Client**
Add the following configurations to optimize performance:

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

**3. Create mount point on OS**

```
Copy# Create Mount Point
mkdir /mnt/hps

```

**4. Run the mount command manually**

```
Copy# Create Mount Point

mount -t lustre 100.69.252.1@tcp,100.69.252.2@tcp:100.69.252.3@tcp,100.69.252.4@tcp:100.69.252.5@tcp,100.69.252.6@tcp:100.69.252.7@tcp,100.69.252.8@tcp:/scratch /mnt/hps

```

**5. Add Lustre mount entry to /etc/fstab**
Configure the system to automatically mount the Lustre filesystem by adding a line to the `/etc/fstab` file.

```
Copy# Write followings entries to /etc/fstab
##LustreFS##

100.69.252.1@tcp,100.69.252.2@tcp:100.69.252.3@tcp,100.69.252.4@tcp:100.69.252.5@tcp,100.69.252.6@tcp:100.69.252.7@tcp,100.69.252.8@tcp:/scratch /mnt/hps lustre flock,defaults 0 0

```

**Explanation:**
  * "100.69.252.1@tcp,100.69.252.2@tcp:...:100.69.252.8@tcp:/scratch" 
    * 100.69.252.1, 100.69.252.2 … 100.69.252.8 are the fixed DDN endpoints for all customers.
    * /scratch is the filesystem path on the Lustre server.
  * /mnt/hps 
    * The mount point on the client (created in step 4).

**Note:** Run the command to verify if the mount configuration has any errors.

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
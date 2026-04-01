---
id: "mountpoint-management"
title: "Mount point management"
description: "In the FPT File Storage – High Performance system, a Mount Point is a logical access point that allows users to connect "
sidebar_label: "Mount point management"
sidebar_position: 4
---

# Mount point management

## **1. Mount Point Overview**
### **What is a Mount Point?**
In the FPT File Storage – High Performance system, a Mount Point is a logical access point that allows users to connect to a specific directory (path) within the storage pool.
To mount data from a Bare Metal server, you need to create a Mount Point with the following configuration details:
  * **Path** : Specific directory path in the storage system you want to access.
  * **Access protocol** : Such as NFSv3 or NFSv4.
  * **Access Subnet** : Only servers within the specified subnet are allowed to mount. If a server is not in this subnet list, the mount request will be denied.

### **Role of the Mount Point**  
| Component  | Role  |  
| --- | --- |  
| Mount Point  | Access point from internal network to file storage via NFSv3/NFSv4/S3.  |  
| Client (server)  | Mounts data from file storage, shown as a local disk.  |  
| Storage Backend (VAST)  | Underlying storage infrastructure.  |  
| QoS Policy  | Attached to mount point to limit IOPS, throughput, etc.  |  
### **Mount Point Structure**  
| **Field**  | **Description**  |  
| --- | --- |  
| Name  | Display name in the portal  |  
| Path  | Actual path, e.g., /ml-data  |  
| Protocol  | Protocol: NFSv3 or NFSv4  |  
| Subnet  | CIDR network range allowed to access  |  
| Endpoint Range  | Connection endpoint  |  
| QoS Policy  | Performance control policy  |  
| NFS Alias  | Alias path shown in the OS  |  
**Relationships with other components**
  * **VPC & Subnet**: A Mount Point can be assigned to multiple subnets across the same or different VPCs. Only servers in the assigned subnets can access it.
  * **QoS Policy** : Controls performance through: 
    * Max Throughput (MB/s)
    * Max IOPS
    * Burst Limit
  * **NFS Protocol** : Supports TCP and RDMA. In particular: 
    * **TCP** : Common and easy to use.
    * **RDMA** : High performance, low latency.
    * **Multi-Path RDMA** : For large workloads, allows parallel connections.

* * *
## **2. Creating a Mount Point**
### **Important Principles**
  * **Bind to specific subnet** : Only servers in the assigned subnet can mount.
  * **Do not create at root path ("/")** : Use subdirectories, e.g., `/project-a`, `/team1/data`.
  * **One path – one mount point** : No duplicates allowed.
  * **Unlimited number of mount points** : As long as paths are not duplicated.
  * **NFSv4 requires full path export** : All parent directories in the path must also be exported.

> Example: To mount `/project-a/team1/data` using NFSv4, `/project-a` and `/project-a/team1` must also be exported.
### **Steps to Create a Mount Point on Unify Portal**
  1. Go to the **MountPoint** tab, click **Create MountPoint**.
  2. Fill in the information: 
     * **Region** : Select the usage region.
     * **VPC / Subnet** : Choose the subnet containing GPU servers.
     * **Mount Point Name** : 3–63 characters, letters/numbers/“_”, cannot start/end with a special character.
     * **Protocol** : NFSv3 or NFSv4. 
       * If NFSv3: You can add an NFS Alias.
       * If NFSv4: Ensure **all parent folders in the path also use NFSv4**.
     * **Path** : Must start with "/", not end with "/" or space, and must be unique.
     * **Options** : Tick "Create new directory" if the path does not exist.
     * **QoS Policy** : Select an existing one or create a new one.
  3. Click **Create** to finish.

### **Result**
  * **Success** : Mount Point will appear on the portal and can be mounted from servers in the subnet.
  * **Failure** : An error will be displayed – review the entered information.

* * *
## **3. Deleting a Mount Point**
You can delete a Mount Point when it is no longer in use, to:
  * Revoke access.
  * Safely disconnect between servers and the storage system.
  * Support reconfiguration or network infrastructure changes.

### **How to Do It**
  1. Go to the **Resource** tab on Unify Portal.
  2. Find the Mount Point to delete, choose **Action > Delete**.
  3. Confirm the operation when prompted.

> ⚠️ Note:
>   * Ensure all applications have unmounted before deletion.
>   * **Deleting a Mount Point does not delete the data** in the assigned directory.
>

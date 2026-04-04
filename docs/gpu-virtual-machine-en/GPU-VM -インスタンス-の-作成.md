---
id: "GPU-VM -インスタンス-の-作成"
title: "Create a GPU VM Instance"
description: "Step 1: In the console, navigate to Compute Engine > Instance Management and click Create Instance."
sidebar_label: "Create a GPU VM Instance"
sidebar_position: "6"
---

# Create a GPU VM Instance

**Step 1:** In the console, navigate to **Compute Engine** > **Instance Management** and click **Create Instance**.

[![Alt text](/img/migrated/3-9c690a71.png)](/img/migrated/3-9c690a71.png)

**Step 2:** Configure the virtual machine according to your needs using the following options.

**A/ Configuration**

  * **Instance type:** Select the most suitable instance type for your requirements. Two main types are available: **General** and **GPU**.
    * **General:** Suitable for basic computing needs.
    * **GPU:** Designed for high-performance computing, **machine learning**, and other demanding tasks.
  * **FPT Cloud Server** offers various **GPU options** to meet different needs. In this section, you can select **NVIDIA H100 SXM5** or **NVIDIA H200 SXM**.

[![Alt text](/img/migrated/1-3-581d480d.png)](/img/migrated/1-3-581d480d.png)

**B/ Image:** Select the appropriate operating system (OS) for your needs.
For GPU configurations, choose an OS compatible with the virtual machine setup.

[![Alt text](/img/migrated/5-3ed4d4a1.png)](/img/migrated/5-3ed4d4a1.png)

**C/ Resource type:** Each GPU virtual machine comes with a different configuration for **vCPU, RAM, and the number of attached GPUs**.
Select the configuration that best suits your needs.

[![Alt text](/img/migrated/6-c6b90c3c.png)](/img/migrated/6-c6b90c3c.png)

**D/ Storage disk information**

  * **Storage:** The storage options attached to the virtual machine are as follows.
  * **Storage policy:** Defines the type of storage. By default, **GPU Virtual Machines support NVMe-SSD only**.
  * **Size:** The storage size is **automatically set based on the selected resource type**.

[![Alt text](/img/migrated/7-b1e0633b.png)](/img/migrated/7-b1e0633b.png)

**E/ Network information**
Includes Subnet and advanced settings such as **Private IP, Floating IP, and Security Group**.

  * **Subnet and Private IP:** Select the appropriate network to ensure the virtual machine can connect to the required resources and services. This allows the VM to communicate with other devices on the network and access external resources such as the internet. You can enter the **Private IP** manually or let the system assign it automatically based on the selected Subnet.
  * **Floating IP:** For GPU Virtual Machines, **Floating IP** is configured after the VM has been successfully created. By default, this setting cannot be configured at creation time.
  * **Security Group:** You can assign a **Security Group** to control inbound and outbound traffic for the virtual machine. This field can be left blank and configured later as needed.

[![Alt text](/img/migrated/2-3-27e2f9a8.png)](/img/migrated/2-3-27e2f9a8.png)

**F/ Authentication**
Select **SSH Key** or **Password** as the authentication type.

  * If you select **SSH Key**, the system automatically uses the most recent SSH key (changeable).

[![Alt text](/img/migrated/3-3-8c3590ef.png)](/img/migrated/3-3-8c3590ef.png)

  * If you use the **Password** authentication method, you must remember the password and store it in a safe place.

[![Alt text](/img/migrated/10-ec8c6078.png)](/img/migrated/10-ec8c6078.png)

**G/ Advanced settings**

[![Alt text](/img/migrated/11-eed26672.png)](/img/migrated/11-eed26672.png)

  * **Tag:** Select previously created tags to help manage and categorize resources.
  * **User data:** This field stores a **cloud-init script**. When the virtual machine starts, **cloud-init** reads metadata from the cloud and configures the system accordingly. This is typically used to set up **networking, storage, SSH keys, and other system settings**.

**Sample cloud-init script:** With the script provided, the system automatically creates a user **"testcloudinit"** with the password **"Abc123"**. A second user **"testcloudinit2"** is created with the password **"P@ssw0rd!"**.

```yaml
# cloud-config
users:
- name: testcloudinit
  sudo: ALL=(ALL) NOPASSWD:ALL
  lock_passwd: false
  shell: /bin/bash
  passwd: $6$rounds=4096$V6anciWl30$xKbcljqks1gUkMiM80pyKzhvyhn7U1n.jXcGCUfkUlX.rnllUWKUrmDEzekhhhP8aERSylRuC7gfDhJ32Xv0A1
- name: testcloudinit2
  groups: sudo
  lock_passwd: false
  shell: /bin/bash
  plain_text_passwd: P@ssw0rd!
- hostname: testcloudinit
```

**Step 3: Create the GPU Virtual Machine.**
Click **Create Instance** to start the virtual machine creation process. The system verifies available resources and proceeds to create the new virtual machine based on your selected configuration.

Once the instance is successfully created, you can view the newly created virtual machine and check its details in the **Instance Management** dashboard. Each VM displays complete information including **name, configuration, and current status**.

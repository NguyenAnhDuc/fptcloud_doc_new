---
id: "quick-starts-tao-mot-may-ao"
title: "Create a Virtual Machine"
sidebar_label: "Create a Virtual Machine"
sidebar_position: 1
---

Create a Virtual Machine


**Step 1**: In the menu, select **Compute Engine** > **Instance Management**, then click **Create instance**.

![file](images/quick-starts-tao-mot-may-ao/img-001.png)

A new dialog box will appear to guide users through the next steps.

![Userguide FPT Cloud Server 2022 18](images/quick-starts-tao-mot-may-ao/img-002.png)

**Step 2**: Configure the virtual machine according to your needs with the following options:

### Configuration Information
**Instance Type**: Users can choose the machine type that best suits their needs. Currently there are 2 common types: General and GPU.

  * **General** is a machine type that serves basic needs well.

  * **GPU** serves needs that require high performance (High Performance Computing), Machine Learning, etc.


![file](images/quick-starts-tao-mot-may-ao/img-003.png)

**Image:** Select the main OS that suits your needs. Each OS group includes different versions. The default is the latest version. Users can customize as needed by uploading their own ISO files or creating a virtual machine from previously initialized templates.

**For general**

  * When creating a virtual machine from an OS


![file](images/quick-starts-tao-mot-may-ao/img-004.png)

  * When creating a virtual machine from an Image: users can choose a custom image or ISO image (See additional notes: Link)


![file](images/quick-starts-tao-mot-may-ao/img-005.png)

  * When creating a virtual machine from a Snapshot/NAT Instance


![file](images/quick-starts-tao-mot-may-ao/img-006.png)

![file](images/quick-starts-tao-mot-may-ao/img-007.png)

**For specific**

![file](images/quick-starts-tao-mot-may-ao/img-008.png)

**Resource type**: Each machine type has different CPU and RAM configurations, or users can create a custom configuration.

![file](images/quick-starts-tao-mot-may-ao/img-009.png)

### Storage Disk Information
**Storage**: Storage attached to the virtual machine includes:

  * **Storage Policy**: Storage type

  * **Size**: Storage size


![file](images/quick-starts-tao-mot-may-ao/img-010.png)

### Network Information
Includes Subnet and Advanced information such as Private IP, Floating IP, Security group.

  * **Subnet** & **Private IP**: Users select a network to ensure the virtual machine has connectivity to the resources and network services it needs to operate. This allows the virtual machine to communicate with other devices on the network and access external resources such as the internet. Users can enter a private IP address for the virtual machine or the system will auto-generate one based on the selected Subnet (if this field is left blank).

  * **Security Group**: Users select a security group to control traffic to and from the virtual machine. Users can leave this field blank and configure it later.


![file](images/quick-starts-tao-mot-may-ao/img-011.png)

### Authentication Information
**Authentication type**: **SSH key** or **Password**

  * If SSH Key is selected, the system will use the most recent SSH key (can be changed).


![file](images/quick-starts-tao-mot-may-ao/img-012.png)

  * If using the Standard method, users should remember and keep the password secure in a safe location.


![file](images/quick-starts-tao-mot-may-ao/img-013.png)

### Advanced Information
![file](images/quick-starts-tao-mot-may-ao/img-014.png)

  * **Instance group**: Users can optionally choose an Instance group to configure the placement of the virtual machine on the physical host.

  * **Instance name**: Enter the virtual machine name for easy management. This will also be the hostname of the virtual machine.

  * **User data**: Contains the cloud-init script. When the virtual machine boots, cloud-init will read the metadata provided by the cloud and initialize the system based on it. Cloud-init is commonly used to set up networking, storage, SSH keys, and other parts of the system. Note: If the virtual machine is initialized with a Windows operating system, a reboot is required to run the scripts from cloud-init.


**Sample cloud-init script**: With this sample script, the system will automatically create user "testcloudinit" with password "Abc123" and user "testcloudinit2" with password "abc@123Abc123".
[code]
    Copy#cloud-config
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
      plain_text_passwd: abc@123Abc123
    - hostname: testcloudinit

[/code]

Note for Windows: Cloud base init script format will be used.

**Sample script:**
[code]
    Copy#cloud-config
    users:
    - name: testcloudinit
      primary_group: Administrators
      groups: Administrators
      passwd: abc@123Abc123
[/code]

**Step 3**: Click **Create Instance** to create the virtual machine. The system will display a confirmation, verify resources, and proceed with the initialization of the new virtual machine based on the selected configuration.

![file](images/quick-starts-tao-mot-may-ao/img-015.png)

After successful initialization, users can see the newly created virtual machine and check its information on the management dashboard. Each virtual machine will display complete information about its name, configuration (RAM, CPU, Storage), IP address, and operating status (Off/On/Suspended) on the panel.

**![Userguide FPT Cloud Server 2022 21](images/quick-starts-tao-mot-may-ao/img-016.png)**

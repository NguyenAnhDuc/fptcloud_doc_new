---
id: "setting-nat-instance"
title: "Configure NAT Instance"
description: "Step-by-step guide to configuring a NAT Instance to allow isolated network instances to access the Internet."
sidebar_label: "Configure NAT Instance"
sidebar_position: 5
---

# Configure NAT Instance

1. Create a NAT Instance from the image provided by FCI.

   [![Select NAT Instance image](/img/migrated/image-1719483610635-8c2b0ddb.png)](/img/migrated/image-1719483610635-8c2b0ddb.png)
   [![Create NAT Instance screen](/img/migrated/image-1719483615596-32d8b6da.png)](/img/migrated/image-1719483615596-32d8b6da.png)

   :::warning
   In the Subnet field, select a subnet that has Internet access.
   :::

   [![Select Internet-accessible subnet](/img/migrated/image-1719483627834-69d59364.png)](/img/migrated/image-1719483627834-69d59364.png)

2. Attach a Floating IP to the NAT Instance. Skip this step if a Floating IP was already assigned during instance creation.

   [![Floating IP list](/img/migrated/image-1719483638728-722a763b.png)](/img/migrated/image-1719483638728-722a763b.png)
   [![Attach Floating IP](/img/migrated/image-1719483643946-bcd8d209.png)](/img/migrated/image-1719483643946-bcd8d209.png)
   [![Confirm Floating IP attachment](/img/migrated/image-1719483648767-91c83524.png)](/img/migrated/image-1719483648767-91c83524.png)

3. Attach a security group to the NAT Instance and open the required rules to allow instances in the isolated network to reach the Internet. You can also open ICMP to enable ping testing. Skip this step if a security group was already attached during instance creation.

   [![Security group list](/img/migrated/image-1719483661177-fbc71ad5.png)](/img/migrated/image-1719483661177-fbc71ad5.png)
   [![Attach security group](/img/migrated/image-1719483666245-93b5fa24.png)](/img/migrated/image-1719483666245-93b5fa24.png)

4. Add a Network Interface Card (NIC) on the same subnet as the isolated subnet of the instance that needs Internet access.

   [![Add NIC](/img/migrated/image-1719483681542-c695fbb8.png)](/img/migrated/image-1719483681542-c695fbb8.png)
   [![Select isolated subnet](/img/migrated/image-1719483686233-68077f61.png)](/img/migrated/image-1719483686233-68077f61.png)
   [![Confirm NIC addition](/img/migrated/image-1719483693216-09b07e4b.png)](/img/migrated/image-1719483693216-09b07e4b.png)

5. Allow address pair `0.0.0.0/0` on the NIC belonging to the isolated network.

   [![Configure allowed address pair](/img/migrated/image-1719483704950-51c12336.png)](/img/migrated/image-1719483704950-51c12336.png)
   [![Confirm allowed address pair](/img/migrated/image-1719483711778-66dc215f.png)](/img/migrated/image-1719483711778-66dc215f.png)

6. Access the instance in the isolated network and change the default gateway to the IP of the NAT Instance's NIC. The example below uses a Windows instance.

   [![Configure gateway on Windows instance](/img/migrated/image-1719483727521-1d1e34d1.png)](/img/migrated/image-1719483727521-1d1e34d1.png)
   [![Enter NAT Instance NIC IP](/img/migrated/image-1719483733636-77084b42.png)](/img/migrated/image-1719483733636-77084b42.png)
   [![Confirm gateway configuration](/img/migrated/image-1719483740704-1b21dfa7.png)](/img/migrated/image-1719483740704-1b21dfa7.png)

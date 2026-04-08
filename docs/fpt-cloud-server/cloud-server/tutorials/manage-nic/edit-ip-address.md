---
id: "edit-ip-address"
title: "Edit IP address"
description: "How to change the IP address of a NIC card on FPT Cloud."
sidebar_label: "Edit IP address"
sidebar_position: "8"
---

# Edit IP address

1. Select the NIC card whose IP address you want to change.

:::warning
This action may affect services such as Kubernetes and Load Balancer. Consider carefully before proceeding. After the change, update the network settings in the operating system configuration file. See: [How to change Config file](/docs/en/fpt-cloud-server/cloud-server/tutorials/change-network-config/)/.
:::

[![Select NIC card](/img/migrated/image-1691383107122-1741e5c6.png)](/img/migrated/image-1691383107122-1741e5c6.png)

2. Configure the new IP address.

   FPT Cloud suggests an IP address from your Subnet. You can keep the suggestion or enter a different IP address as needed.

[![IP address suggestion](/img/migrated/image-1691383118729-01e836f2.png)](/img/migrated/image-1691383118729-01e836f2.png)

   After selecting the IP address, confirm the change.

[![Confirm IP change](/img/migrated/image-1691383130785-5d815e59.png)](/img/migrated/image-1691383130785-5d815e59.png)

3. Wait for the system to process.

[![System processing](/img/migrated/image-1691383142781-8006bcac.png)](/img/migrated/image-1691383142781-8006bcac.png)

4. The card moves to **Active** status. The Instance can connect to the network with the new IP address.

[![NIC card Active with new IP](/img/migrated/image-1691383157084-b076238f.png)](/img/migrated/image-1691383157084-b076238f.png)

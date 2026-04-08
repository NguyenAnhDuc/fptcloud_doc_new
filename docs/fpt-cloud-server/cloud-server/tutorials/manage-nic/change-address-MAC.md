---
id: "change-address-MAC"
title: "Change MAC address"
description: "How to reset and assign a new MAC address to a NIC card on FPT Cloud."
sidebar_label: "Change MAC address"
sidebar_position: "9"
---

# Change MAC address

This feature allows the system to automatically assign a new MAC address to a NIC card, replacing the existing one. It is available for both primary and standard NIC cards.

1. Select the NIC card whose MAC address you want to reset.

:::warning
This action may affect services such as Kubernetes and Load Balancer. Consider carefully before proceeding. After the change, update the network settings in the operating system configuration file. See: [How to change Config file](/docs/en/fpt-cloud-server/cloud-server/tutorials/change-network-config/)/.
:::

[![Select NIC card for MAC reset](/img/migrated/image-1691395036893-7a3595d7.png)](/img/migrated/image-1691395036893-7a3595d7.png)

2. Confirm the MAC address change.

[![Confirm MAC change](/img/migrated/image-1691395221482-354899e7.png)](/img/migrated/image-1691395221482-354899e7.png)

3. Wait for the system to process.

[![System processing](/img/migrated/image-1691395253477-ac20d597.png)](/img/migrated/image-1691395253477-ac20d597.png)

4. The system has assigned a new MAC address to the NIC card.

[![NIC card with new MAC address](/img/migrated/image-1691395309290-5b6daaff.png)](/img/migrated/image-1691395309290-5b6daaff.png)

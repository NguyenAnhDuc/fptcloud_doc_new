---
id: "convert-card"
title: "Convert a NIC card to primary"
description: "How to convert a standard NIC card to the primary NIC on FPT Cloud."
sidebar_label: "Convert card to primary"
sidebar_position: "7"
---

# Convert a NIC card to primary

FPT Cloud supports converting a standard NIC card to the primary NIC quickly and easily. This action is disabled for cards that are already primary.

1. Select the NIC card you want to convert to primary.

[![Select NIC card](/img/migrated/image-1691382928697-43633c94.png)](/img/migrated/image-1691382928697-43633c94.png)

[![Card selected](/img/migrated/image-1691382936808-5dc5b74f.png)](/img/migrated/image-1691382936808-5dc5b74f.png)

2. Confirm the conversion to primary.

:::warning
This action may affect services such as Kubernetes and Load Balancer. Consider carefully before proceeding. After the change, update the network settings in the operating system configuration file. See: [How to change Config file](../change-network-config/index.md).
:::

[![Confirm conversion](/img/migrated/image-1691382948749-d9b6edea.png)](/img/migrated/image-1691382948749-d9b6edea.png)

3. Wait for the system to process.

[![System processing](/img/migrated/image-1691382962972-4c8ba6b5.png)](/img/migrated/image-1691382962972-4c8ba6b5.png)

4. The standard card becomes primary, and the previous primary card becomes a standard card. The Instance can connect to the network through the new primary card.

[![Conversion result](/img/migrated/image-1691382975861-64b7aa9e.png)](/img/migrated/image-1691382975861-64b7aa9e.png)

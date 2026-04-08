---
id: "create-address-pair-on-instance-management"
title: "Create an address pair from Instance Management"
description: "You can create an allow address pair directly from the Instance Management screen via the network interface actions menu."
sidebar_label: "Create an address pair from Instance Management"
sidebar_position: 4
---

# Create an address pair from Instance Management

1. Go to **Network Interface** in Instance Management.

   [![Network Interface screen in Instance Management](/img/migrated/image-1708395287542-5f97bc70.png)](/img/migrated/image-1708395287542-5f97bc70.png)

2. Click the three-dot action button.

   [![Three-dot action button on network interface](/img/migrated/image-1708395308051-7e4aea2c.png)](/img/migrated/image-1708395308051-7e4aea2c.png)

3. Select **Create allow address pair**.

   [![Select Create allow address pair from action menu](/img/migrated/image-1708395330849-4dc00d57.png)](/img/migrated/image-1708395330849-4dc00d57.png)

4. Configure the allow IP address pair:
   - The system pre-selects the current network interface card.
   - Enter the IP address (or CIDR) to allow.

   [![Configure allow IP address pair](/img/migrated/image-1708395364577-06c64d2e.png)](/img/migrated/image-1708395364577-06c64d2e.png)

5. Configure the allow MAC address pair (optional). If left blank, the system defaults to the MAC address of the selected network interface card.
   - Click **Advanced Setting**.
   - Enter the MAC address.

   [![Configure allow MAC address pair](/img/migrated/image-1708395403972-a559d684.png)](/img/migrated/image-1708395403972-a559d684.png)

6. Click **Create allow address pair**.

   [![Click Create allow address pair button](/img/migrated/image-1708395440253-4bafad85.png)](/img/migrated/image-1708395440253-4bafad85.png)

7. Verify the result. The new entry appears in the Allow address pair list and the instance's Network interface details are updated.

   [![Allow address pair list after creation](/img/migrated/image-1708395474257-047d287b.png)](/img/migrated/image-1708395474257-047d287b.png)

   [![Instance network interface updated after creation](/img/migrated/image-1708395486779-7e386ff3.png)](/img/migrated/image-1708395486779-7e386ff3.png)

---
id: "create-address-pair"
title: "Create an address pair"
description: "A single network interface card can have multiple allow address pairs configured, and a single address pair can be applied to multiple network interface cards across different instances."
sidebar_label: "Create an address pair"
sidebar_position: 3
---

# Create an address pair

A single network interface card can have multiple allow address pairs configured, and a single address pair can be applied to multiple network interface cards across different instances.

1. On the Allow address pair management screen, select **Create allow address pair**.

   [![Allow address pair management screen](/img/migrated/image-1708395038189-f6a186ff.png)](/img/migrated/image-1708395038189-f6a186ff.png)

2. Configure the allow IP address pair:
   - Select the instance.
   - Select the network interface card to configure the allow address pair on.
   - Enter the IP address (or CIDR) to allow.

   [![Configure allow IP address pair](/img/migrated/image-1708395102833-872f3b79.png)](/img/migrated/image-1708395102833-872f3b79.png)

3. Configure the allow MAC address pair (optional). If left blank, the system defaults to the MAC address of the selected network interface card.
   - Click **Advanced Setting**.
   - Enter the MAC address.

   [![Configure allow MAC address pair](/img/migrated/image-1708395142834-551ea26d.png)](/img/migrated/image-1708395142834-551ea26d.png)

4. Click **Create allow address pair**.

   [![Click Create allow address pair button](/img/migrated/image-1708395173721-87a3a5e8.png)](/img/migrated/image-1708395173721-87a3a5e8.png)

5. Verify the result. The new entry appears in the Allow address pair list and the instance's Network interface details are updated.

   [![Allow address pair list after creation](/img/migrated/image-1708395209748-2de1f3be.png)](/img/migrated/image-1708395209748-2de1f3be.png)

   [![Instance network interface updated after creation](/img/migrated/image-1708395219352-74b14a4a.png)](/img/migrated/image-1708395219352-74b14a4a.png)

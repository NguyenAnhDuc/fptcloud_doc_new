---
id: "attach-a-network-card-to-the-virtual-machine"
title: "Attach a network card (NIC) to the virtual machine"
description: "Attach a network card to the virtual machine to connect to multiple Subnets."
sidebar_label: "Attach a network card (NIC) to the virtual machine"
sidebar_position: 14
---

# Attach a network card (NIC) to the virtual machine

You can attach up to 10 network cards to a single virtual machine — allowing the machine to connect to multiple Subnets within the VPC.

## Attach a network card

1. Select **Compute Engine** → **Instance Management**, then select the virtual machine you want to attach a Subnet to, opening the **Instance Detail** page.

   [![Instance Detail page](/img/migrated/image-1712722975848-d937e282.png)](/img/migrated/image-1712722975848-d937e282.png)

2. Open the **Network Interface** tab. Click **Add NIC**.

   [![Network Interface tab with Add NIC button](/img/migrated/image-1744793401110-f9e5bd81.png)](/img/migrated/image-1744793401110-f9e5bd81.png)

3. Select the **Subnet** within the VPC you want to attach, then click **Add NIC** to confirm.

   [![Subnet selection dialog for NIC](/img/migrated/image-1712723037304-4919d058.png)](/img/migrated/image-1712723037304-4919d058.png)

The new network card appears in the **Network** table.

[![New network card attached](/img/migrated/image-1744793530914-729a9887.png)](/img/migrated/image-1744793530914-729a9887.png)

:::note
Typically, Windows and Linux virtual machines will automatically detect the new network card. If the network card does not appear on Linux, restart the virtual machine.
:::

### Manual configuration on Linux (if needed)

View current IP addresses:

```bash
ip a
```

[![View IP addresses](/img/migrated/image-1712723100683-b482495f.png)](/img/migrated/image-1712723100683-b482495f.png)

Set a static IP (Ubuntu 20.04 uses netplan):

```bash
ls /etc/netplan
sudo cp /etc/netplan/01-network-manager-all.yaml 01-network-manager-all.yaml.bak
```

Edit the netplan configuration file with the appropriate interface name, IP address, gateway, and DNS.

[![Netplan configuration](/img/migrated/image-1712723133085-6dc03fdb.png)](/img/migrated/image-1712723133085-6dc03fdb.png)

## Next steps

- [Remove a network card (NIC) from the virtual machine](./remove-the-network-card-from-the-virtual-machine.md)

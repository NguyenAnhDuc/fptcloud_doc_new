---
id: "hpc-hardware-fixation"
title: "Hardware Fixation"
description: "Pin a physical server to an image so that every boot uses the same physical machine."
sidebar_label: "Hardware Fixation"
sidebar_position: 6
---

# Hardware Fixation

By default, when you start a machine the system randomly assigns a physical server for each session. The Hardware Fixation feature records the MAC address of the physical server into the image — ensuring you always use the same physical machine on every boot.

## Enable Hardware Fixation

1. Select the image, then click **Action** → **Hardware fixation**.
2. In the confirmation dialog, select **Enable**.

## Disable Hardware Fixation

1. Select **Hardware fixation**.
2. In the dialog, select **Disable**.

## Next Steps

- [Reset Machine](/docs/fpt-cloud-server/cloud-server/tutorials/manage-gpu-server-with-hpc-portal/hpc-rest-machine)

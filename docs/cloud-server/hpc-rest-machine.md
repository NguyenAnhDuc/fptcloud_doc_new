---
id: "hpc-rest-machine"
title: "Reset Machine"
description: "Reset a GPU Server on HPC Portal when you encounter connection issues."
sidebar_label: "Reset Machine"
sidebar_position: 29
---

# Reset Machine

During use, you may encounter issues such as a black screen, inability to connect to the remote server, or a frozen machine. If waiting 2–3 minutes and reconnecting does not resolve the issue, you need to reset the machine.

## Reset

1. On the **Hosts** screen in HPC Portal, select the image → **Reset machine**.
2. In the confirmation dialog, click **Reset**.

   [![Reset machine confirmation dialog](/img/migrated/reset-1a4b229d.jpg)](/img/migrated/reset-1a4b229d.jpg)

3. Wait a few minutes, then download the RDP file again and reconnect.

:::warning
- Resetting the machine is equivalent to pressing the restart button on a physical server when the machine is unresponsive.
- Use this feature carefully as it may result in data loss.
- If the machine still cannot be connected after reset, contact your administrator for support.
:::

## Next Steps

- [Schedule Shutdown](./hpc-schedule-shutdown.md)

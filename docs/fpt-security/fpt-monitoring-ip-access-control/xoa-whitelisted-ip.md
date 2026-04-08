---
id: "xoa-whitelisted-ip"
title: "Remove a whitelisted IP"
sidebar_label: "Remove a whitelisted IP"
sidebar_position: 9
---

# Remove a whitelisted IP

1. Select one or more whitelisted IPs, then click **Remove**.

[![Remove whitelisted IP](/img/migrated/Screenshot_6-57331a11.png)](/img/migrated/Screenshot_6-57331a11.png)

The status changes to **Blacklisting**, and all actions on the corresponding table are temporarily disabled until the process completes.

- If blacklisting **succeeds**, the IP/CIDR is removed from the table and all access from that IP/CIDR to the endpoint is **blocked**.
- If blacklisting **fails**, the IP/CIDR status changes to **Blacklist Failed**. Access from that IP/CIDR continues normally. Use the Retry action to attempt blacklisting again.

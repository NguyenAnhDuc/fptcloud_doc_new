---
id: "them-moi-whitelisted-ip"
title: "Add New Whitelisted IP"
sidebar_label: "Add New Whitelisted IP"
sidebar_position: 8
---

# Add a whitelisted IP

1. Click the **Whitelist IP/Range** button on the corresponding table.
2. Enter one or more IPs or CIDR ranges, separated by Enter.
3. The system validates the IP format and excludes already-whitelisted or duplicate entries.

[![Add whitelisted IP 1](/img/migrated/Screenshot_4-6b6299ec.png)](/img/migrated/Screenshot_4-6b6299ec.png)

4. Click **Save** to confirm.

[![Add whitelisted IP 2](/img/migrated/Screenshot_5-e4ea3b18.png)](/img/migrated/Screenshot_5-e4ea3b18.png)

All submitted IPs will have the status **Whitelisting**, and all actions on the corresponding table will be temporarily disabled until the process completes.

- If whitelisting **succeeds**, the status changes to **Whitelisted**. All access to the endpoint from those IP addresses is permitted normally.
- If whitelisting **fails**, the status changes to **Whitelist Failed**. Access from those IP addresses is still blocked. Use the Retry action to attempt whitelisting again.

---
id: "configure-whitelist-ip"
title: "Configure IP whitelist"
description: "Guide to configuring the list of IPs allowed to access ArgoCD"
sidebar_label: "Configure IP whitelist"
sidebar_position: 9
---

# Configure IP whitelist

FPT Cloud supports configuring an IP whitelist to control access to the ArgoCD URL via the Portal interface.

1. Go to the **Security & Access** > **Whitelist IP** screen.

[![](/img/migrated/Picture41-2-66349b65.png)](/img/migrated/Picture41-2-66349b65.png)

2. Enter the IP addresses allowed to access ArgoCD.

:::note
Separate IPs with a comma (`,`).
:::

[![](/img/migrated/Picture42-2-a15b14d8.png)](/img/migrated/Picture42-2-a15b14d8.png)

3. The result after configuration:

[![](/img/migrated/Picture43-2-ba2e74dc.png)](/img/migrated/Picture43-2-ba2e74dc.png)

4. Verify the result: accessing ArgoCD from an IP not on the whitelist returns a 403 error.

[![](/img/migrated/Picture44-2-d712e561.png)](/img/migrated/Picture44-2-d712e561.png)

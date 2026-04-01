---
id: "edit-capabilities"
title: "Edit account capabilities"
description: "Guide to configuring login and apiKey capabilities for an ArgoCD account"
sidebar_label: "Edit capabilities"
sidebar_position: 25
---

# Edit account capabilities

FPT Cloud allows you to configure capabilities for each account:
- **login**: allows the account to log in via the ArgoCD interface
- **apiKey**: allows creating authentication tokens to access via API — suitable for CI/CD pipeline integrations or automated workflows that need to interact with the ArgoCD API

1. On the **Security & Access** > **Local Account** screen, click **Edit Account**.

[![](/img/migrated/Picture85-06a2fa3e.png)](/img/migrated/Picture85-06a2fa3e.png)

2. Check or uncheck the desired capabilities.

:::note
At least one capability (`apiKey` or `login`) must be selected for each account.
:::

[![](/img/migrated/Picture86-56c75d94.png)](/img/migrated/Picture86-56c75d94.png)

3. Click **Edit** to save the changes. The result after updating:

[![](/img/migrated/Picture87-29463c43.png)](/img/migrated/Picture87-29463c43.png)

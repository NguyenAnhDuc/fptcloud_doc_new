---
id: "permission-access-guide"
title: "Service authorization management"
description: "Guide to assigning VPN Site-to-Site access permissions to users within the same project"
sidebar_label: "Service authorization management"
sidebar_position: 26
---

# Service authorization management

To assign VPN Site-to-Site access permissions to another user within the same project, follow the steps below.

1. Log in with your admin account at [https://console.fptcloud.com/](https://console.fptcloud.com/).

2. Navigate to **IAM** > **Roles**.

[![IAM Roles](/img/migrated/list_role-36845f2b.png)](/img/migrated/list_role-36845f2b.png)

3. Click to create a new role. Select the **VPN** service and assign the appropriate permissions.

[![Create role - VPN](/img/migrated/2-1-859ad22a.png)](/img/migrated/2-1-859ad22a.png)

4. Add another permission and select the **Network** service with the **Network:List** permission.

:::note
For network ranges that use bare-metal servers, also add the **HPC:ListSubnet** permission.
:::

[![Create role - Network](/img/migrated/3-2-5b07fe07.png)](/img/migrated/3-2-5b07fe07.png)

After completing all information, click **Create role**.

5. Create a user group and assign the **VPN_user** role created in the previous step.

[![User group](/img/migrated/4-2-fdfbf0f8.png)](/img/migrated/4-2-fdfbf0f8.png)

6. Go to the **User** tab and click **Invite user**.

[![Invite user](/img/migrated/5-454403cb.png)](/img/migrated/5-454403cb.png)

7. Enter the user to grant VPN access to, and select the corresponding user group and roles.

[![Assign roles](/img/migrated/6-1-e975ba12.png)](/img/migrated/6-1-e975ba12.png)

8. The invited user receives an email. After accessing the link in the email, they can use the VPN service.

[![Email confirmation](/img/migrated/h-22b3d9cb.png)](/img/migrated/h-22b3d9cb.png)

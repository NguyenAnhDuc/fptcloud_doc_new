---
id: "permission-access-guide"
title: "Permission Access Guide"
description: "To assign permissions for another user to access the VPN Site-to-Site service within the same project, please follow the"
sidebar_label: "Permission Access Guide"
sidebar_position: 26
---

# Permission Access Guide

To assign permissions for another user to access the VPN Site-to-Site service within the same project, please follow the steps below:
**Step 1:** Log in using your admin account on the FCI console at <https://console.fptcloud.com/>
**Step 2:** Navigate to **IAM → Roles** [![](/img/migrated/list_role-36845f2b.png)](/img/migrated/list_role-36845f2b.png)
**Step 3:** Click to create a new role, select the VPN service, and assign the appropriate permissions for the service.
[![](/img/migrated/2-1-859ad22a.png)](/img/migrated/2-1-859ad22a.png)
**Step 4:** Add another permission and select the Network service with the **“Network:List”** permission.
**Note:** For network ranges that use bare-metal servers, you need to add the **HPC:ListSubnet** permission. [![](/img/migrated/3-2-5b07fe07.png)](/img/migrated/3-2-5b07fe07.png)
After completing all information, click **“Create role”** to create the role.
**Step 5:** Create a user group and assign the **“VPN_user”** role created in the previous step. [![](/img/migrated/4-2-fdfbf0f8.png)](/img/migrated/4-2-fdfbf0f8.png)
**Step 6:** Go to the **User** tab and click **“Invite user”.** [![](/img/migrated/5-454403cb.png)](/img/migrated/5-454403cb.png)
**Step 7:** Enter the user you want to grant VPN access to, and select the corresponding user group and roles. [![](/img/migrated/6-1-e975ba12.png)](/img/migrated/6-1-e975ba12.png) **Step 8:** Check the email of the invited account and access the service to start using it. [![](/img/migrated/h-22b3d9cb.png)](/img/migrated/h-22b3d9cb.png)

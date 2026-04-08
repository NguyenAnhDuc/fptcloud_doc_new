---
id: "guide-fcr"
title: "FPT Container Registry integration"
description: "How to configure FPT Container Registry integration in FPT AppSec"
sidebar_label: "FPT Container Registry"
sidebar_position: 5
---

# FPT Container Registry integration

Only **Org Admin** and **Team Manager** have permission to edit the FPT Container Registry (FCR) integration.

See [permission details](/docs/fpt-appsec/tutorials/organization-management/quan-ly-member/).

## Integrate FCR - Add VPC

**Step 1:** After selecting an org/team, click **FPT Container Registry** to go to the integration screen.

[![anhfsec](/img/migrated/fcr1-2-c3f2a38c.png)](/img/migrated/fcr1-2-c3f2a38c.png)

**Step 2:** Click **Add VPC** to add a new VPC to the integration list.

[![anhfsec](/img/migrated/fcr2-1-53c9d4c2.png)](/img/migrated/fcr2-1-53c9d4c2.png)

**Step 3:** Select the VPC to integrate.

[![anhfsec](/img/migrated/infcr3-ddd75d32.png)](/img/migrated/infcr3-ddd75d32.png)

**Step 4:** After selecting the VPC, if you already have a Robot Account, enter the **Robot Account Name**. If you do not have a Robot Account yet, refer to the [FPT Container Registry guide](/docs/fpt-container/fpt-container-registry/)/.

[![anhfsec](/img/migrated/infcr4-55fd52f8.png)](/img/migrated/infcr4-55fd52f8.png)

**Step 5:** Enter the Robot Account **name** and **secret**.

[![anhfsec](/img/migrated/lala1-d546663c.png)](/img/migrated/lala1-d546663c.png)

[![anhfsec](/img/migrated/lala2-91f84e57.png)](/img/migrated/lala2-91f84e57.png)

**Step 6:** After filling in all fields, click **Test Connection**. The system validates the required fields. If valid, it shows **Connected successfully** and enables the **Integrate** button.

[![anhfsec](/img/migrated/lala3-08073379.png)](/img/migrated/lala3-08073379.png)

If the information is invalid (wrong Robot Account or secret), the system shows "Connected failed".

**Step 7:** After a successful connection test, click **Integrate**.

[![anhfsec](/img/migrated/infcr8-c753c69c.png)](/img/migrated/infcr8-c753c69c.png)

Successfully connected VPCs are added to the **Integrated VPCs** list.

[![anhfsec](/img/migrated/infcr9-c2ef4bc4.png)](/img/migrated/infcr9-c2ef4bc4.png)

## View details

Only **Org Admin** and **Team Manager** can view integration details.

After selecting your org/team, click **Configured FPT Container Registry** to view details.

[![anhfsec](/img/migrated/fcr1-2-c3f2a38c.png)](/img/migrated/fcr1-2-c3f2a38c.png)

Here you can view the integration status, the **Integrated VPCs** list with VPC, Robot Account Name, Container Registry Name, and **Access Key** for CI/CD integration.

[![anhfsec](/img/migrated/infcr9-c2ef4bc4.png)](/img/migrated/infcr9-c2ef4bc4.png)

You can **Add VPC**, **Reconfigure**, and **Delete** VPCs, or **Disable** the integration.

## Reconfigure FPT Container Registry VPC

**Step 1:** Go to the FPT Container Registry integration detail screen. Click **Reconfigure** in the Action column of a VPC.

[![anhfsec](/img/migrated/lala4-fe8e1ce9.png)](/img/migrated/lala4-fe8e1ce9.png)

**Step 2:** Follow the same steps as Add VPC.

## Delete a VPC

**Step 1:** Click **Delete** in the Action column of a VPC.

**Step 2:** Type **delete**, then click **Confirm**.

## Disable FPT Container Registry integration

See [GitHub integration guide](/docs/fpt-appsec/tutorials/integration-management/guide-github/).

## Access key for CI/CD pipeline

In the detail screen, beyond General Information, you will find the **access key** for each VPC to use in CI/CD pipelines.

You can copy or reset the access key for CI/CD pipeline integration.

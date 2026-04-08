---
id: "guide-harbor"
title: "Harbor integration"
description: "How to configure Harbor integration in FPT AppSec"
sidebar_label: "Harbor"
sidebar_position: 6
---

# Harbor integration

## Create a Robot Account in Harbor

**Step 1:** Go to your Harbor Server and select **Administration > Robot Accounts**.

**Step 2:** Click **New Robot Account**.

[![anhfsec](/img/migrated/hb1-1-312b6058.png)](/img/migrated/hb1-1-312b6058.png)

**Step 3:** Fill in **Name**, **Description**, and **Expiration time**, then click to proceed.

[![anhfsec](/img/migrated/hb2-184c1f48.png)](/img/migrated/hb2-184c1f48.png)

**Step 4:** Select the required system permissions.

[![anhfsec](/img/migrated/hb3-752643bd.png)](/img/migrated/hb3-752643bd.png)

**Step 5:** Select the projects the Robot Account needs access to and assign Permissions. Ensure the Robot Account has **List, Read Artifacts** and **List, Pull, Read Repository** permissions.

[![anhfsec](/img/migrated/hb4-238ff62a.png)](/img/migrated/hb4-238ff62a.png)

[![anhfsec](/img/migrated/hb5-12df39e4.png)](/img/migrated/hb5-12df39e4.png)

**Step 6:** After filling in all information, click **Finish**.

[![anhfsec](/img/migrated/hb6-1-bf0aa7ff.png)](/img/migrated/hb6-1-bf0aa7ff.png)

**Step 7:** After the Robot Account is created, copy the **Robot Account name** and **secret** for use in the FPT Portal integration screen.

[![anhfsec](/img/migrated/hb7-13cec7b9.png)](/img/migrated/hb7-13cec7b9.png)

## Integrate Harbor

Only **Org Admin** and **Team Manager** have permission.

See [permission details](/docs/en/fpt-appsec/tutorials/organization-management/quan-ly-member/).

**Step 1:** After selecting an org/team, click **Harbor** to go to the integration screen.

[![anhfsec](/img/migrated/hb8-88b6c136.png)](/img/migrated/hb8-88b6c136.png)

**Step 2:** Enter the **Container Registry Name** (Harbor server URL), **Robot Account Name**, and **Robot Account Secret**.

[![Alt text](/img/migrated/hb9-c25dbb06.png)](/img/migrated/hb9-c25dbb06.png)

**Step 3:** After filling in all fields, click **Test Connection**. If valid, the system shows **Connected successfully** and enables the **Integrate** button.

[![Alt text](/img/migrated/hb10-b1a89abe.png)](/img/migrated/hb10-b1a89abe.png)

**Step 4:** After a successful connection test, click **Integrate**.

[![Alt text](/img/migrated/hb11-85d22a70.png)](/img/migrated/hb11-85d22a70.png)

## View Harbor integration details

Only **Org Admin** and **Team Manager** can view integration details.

After selecting your org/team, click **Configured Harbor** to view details.

[![anhfsec](/img/migrated/hb11-85d22a70.png)](/img/migrated/hb11-85d22a70.png)

Here you can view the integration status, the **Integrated VPCs** list with VPC, Robot Account Name, Container Registry Name, and **Access Key** for CI/CD integration.

[![anhfsec](/img/migrated/hb13-b9f618ce.png)](/img/migrated/hb13-b9f618ce.png)

You can **Reintegrate** or **Disable** the Harbor integration.

## Reintegrate Harbor

**Step 1:** Go to the Harbor integration detail screen. Click the **Edit** icon next to **Account Credentials**.

[![anhfsec](/img/migrated/hb14-f0016034.png)](/img/migrated/hb14-f0016034.png)

**Step 2:** Follow the same steps as Integrate Harbor.

## Disable Harbor integration

See [GitHub integration guide](/docs/en/fpt-appsec/tutorials/integration-management/guide-github/).

## Access key for CI/CD pipeline

In the detail screen, beyond General Information, you will find the **access key** to use in CI/CD pipelines.

You can copy or reset the access key for CI/CD pipeline integration.

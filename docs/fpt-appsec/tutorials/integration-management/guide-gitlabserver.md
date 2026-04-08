---
id: "guide-gitlabserver"
title: "GitLab Server integration"
description: "How to configure GitLab Server integration in FPT AppSec"
sidebar_label: "GitLab Server"
sidebar_position: 4
---

# GitLab Server integration

Only **Org Admin** and **Team Manager** have permission to edit the GitLab Server integration.

See [permission details](/docs/fpt-appsec/tutorials/organization-management/quan-ly-member/).

## Configure GitLab Server

**Step 1:** After selecting an org/team, click **GitLab Server** to go to the integration screen.

[![anhfsec](/img/migrated/labs1-34ab9227.png)](/img/migrated/labs1-34ab9227.png)

**Step 2:** Enter the URL of your GitLab Enterprise instance. The **Create a personal access token** button is enabled after entering the URL.

[![anhfsec](/img/migrated/labs2-017fd4b0.png)](/img/migrated/labs2-017fd4b0.png)

**Step 3:** After configuring repository access, click **Create a personal access token**. You will be redirected to GitLab to create a token.

[![anhfsec](/img/migrated/labs3-9887d816.png)](/img/migrated/labs3-9887d816.png)

**Step 4:** Fill in **Token name** and **Token Description**, then select **read_api**.

[![anhfsec](/img/migrated/lab3-255803a1.png)](/img/migrated/lab3-255803a1.png)

[![anhfsec](/img/migrated/lab4-d1e2310b.png)](/img/migrated/lab4-d1e2310b.png)

**Step 5:** Copy the personal access token.

[![anhfsec](/img/migrated/labs3-9887d816.png)](/img/migrated/labs3-9887d816.png)

**Step 6:** Paste the **Personal Access Token** and click **Test Connection**.

[![anhfsec](/img/migrated/labs4-281c798c.png)](/img/migrated/labs4-281c798c.png)

The system validates required fields and the Personal Access Token. If either check fails, a **Test connection Failed** message appears. If successful, **Test connect successfully** is displayed.

**Step 7:** Click **Integrate**.

[![anhfsec](/img/migrated/labs6-cd567134.png)](/img/migrated/labs6-cd567134.png)

## View details

See [GitHub integration guide](/docs/fpt-appsec/tutorials/integration-management/guide-github/).

## Reconfigure GitLab Server

See [GitHub integration guide](/docs/fpt-appsec/tutorials/integration-management/guide-github/).

## Disable GitLab Server integration

See [GitHub integration guide](/docs/fpt-appsec/tutorials/integration-management/guide-github/).

## Access key for CI/CD pipeline

See [GitHub integration guide](/docs/fpt-appsec/tutorials/integration-management/guide-github/).

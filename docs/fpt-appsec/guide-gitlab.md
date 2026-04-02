---
id: "guide-gitlab"
title: "GitLab Cloud integration"
description: "How to configure GitLab Cloud integration in FPT AppSec"
sidebar_label: "GitLab Cloud"
sidebar_position: 19
---

# GitLab Cloud integration

Only **Org Admin** and **Team Manager** have permission to edit the GitLab integration.

See [permission details](./quan-ly-member.md).

## Configure GitLab

**Step 1:** After selecting an org/team, click **GitLab** to go to the GitLab Cloud integration screen.

[![anhfsec](/img/migrated/lab1-1-0a091c8d.png)](/img/migrated/lab1-1-0a091c8d.png)

**Step 2:** After configuring access to Private/public repositories, click **Create a personal access token**. You will be redirected to GitLab to create a token.

[![anhfsec](/img/migrated/lab2-176588cd.png)](/img/migrated/lab2-176588cd.png)

**Step 3:** Fill in **Token name** and **Token Description**, then select **read_api**.

[![anhfsec](/img/migrated/lab3-255803a1.png)](/img/migrated/lab3-255803a1.png)

[![anhfsec](/img/migrated/lab4-d1e2310b.png)](/img/migrated/lab4-d1e2310b.png)

**Step 4:** Copy the personal access token.

[![anhfsec](/img/migrated/lab5-61555338.png)](/img/migrated/lab5-61555338.png)

**Step 5:** Paste the **Personal Access Token** and click **Test Connection**.

[![anhfsec](/img/migrated/lab6-fc2f157e.png)](/img/migrated/lab6-fc2f157e.png)

The system validates required fields and the Personal Access Token. If either check fails, a **Test connection Failed** message appears. If successful, **Test connect successfully** is displayed.

**Step 6:** Click **Integrate**.

[![anhfsec](/img/migrated/lab9-aab31bf0.png)](/img/migrated/lab9-aab31bf0.png)

## View details

See [GitHub integration guide](./guide-github.md).

## Reconfigure GitLab Cloud

See [GitHub integration guide](./guide-github.md).

## Disable GitLab Cloud integration

See [GitHub integration guide](./guide-github.md).

## Access key for CI/CD pipeline

See [GitHub integration guide](./guide-github.md).

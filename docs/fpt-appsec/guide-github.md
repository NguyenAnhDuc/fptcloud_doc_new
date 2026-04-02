---
id: "guide-github"
title: "GitHub Personal/Enterprise Cloud integration"
description: "How to configure GitHub integration in FPT AppSec"
sidebar_label: "GitHub Personal/Enterprise Cloud"
sidebar_position: 18
---

# GitHub Personal/Enterprise Cloud integration

Only **Org Admin** has permission to edit the GitHub integration.

See [permission details](./quan-ly-member.md).

## Configure GitHub

**Step 1:** After selecting an org/team, click **GitHub** to go to the GitHub integration screen.

[![anhfsec](/img/migrated/in-git-1e066503.png)](/img/migrated/in-git-1e066503.png)

**Step 2:** After configuring access to Private/public repositories, click **Create a personal access token**. You will be redirected to GitHub to create a token.

[![anhfsec](/img/migrated/G4-b087642b.png)](/img/migrated/G4-b087642b.png)

**Step 3:** Select **Tokens (classic)** in the left menu and click **Generate new token (Classic)**.

[![anhfsec](/img/migrated/G5-1a2f74b6.png)](/img/migrated/G5-1a2f74b6.png)

[![anhfsec](/img/migrated/G6-94657d49.png)](/img/migrated/G6-94657d49.png)

**Step 4:** Fill in a **Note** and select the **repo** scope to enable all features.

[![anhfsec](/img/migrated/G7-399bf273.png)](/img/migrated/G7-399bf273.png)

**Step 5:** Click **Generate Token**.

[![anhfsec](/img/migrated/G8-cf628d37.png)](/img/migrated/G8-cf628d37.png)

**Step 6:** Copy the token.

[![anhfsec](/img/migrated/G9-0bca59fa.png)](/img/migrated/G9-0bca59fa.png)

**Step 7:** Paste the token into the **Personal Access Token** field and click **Test Connection**.

[![anhfsec](/img/migrated/G10-ace18550.png)](/img/migrated/G10-ace18550.png)

[![anhfsec](/img/migrated/G11-96b6199e.png)](/img/migrated/G11-96b6199e.png)

The system validates required fields and the Personal Access Token. If either check fails, a **Test connection Failed** message appears. If successful, **Test connect successfully** is displayed.

**Step 8:** Click **Integrate**.

## View details

Only **Org Admin** or **Team Manager** can view integration details.

After selecting your org/team, click **Configured GitHub** to view the integration status.

[![anhfsec](/img/migrated/in-git2-849778ed.png)](/img/migrated/in-git2-849778ed.png)

Here you can view **Personal Access Token**, **Repository Access**, **Integrated at**, and the **Access Key** for CI/CD integration.

[![anhfsec](/img/migrated/Screenshot-2025-06-17-155316-8d5a45e0.png)](/img/migrated/Screenshot-2025-06-17-155316-8d5a45e0.png)

You can also **Reintegrate** or **Disable** the GitHub integration.

## Reconfigure GitHub

**Step 1:** Click **Reconfigure** on the GitHub integration detail screen.

[![anhfsec](/img/migrated/in-git3-ac8ba336.png)](/img/migrated/in-git3-ac8ba336.png)

**Step 2:** Follow the same steps as the initial GitHub integration.

## Disable GitHub integration

**Step 1:** Click **Disable** on the GitHub integration detail screen.

[![anhfsec](/img/migrated/in-git4-cd794a67.png)](/img/migrated/in-git4-cd794a67.png)

**Step 2:** Type **disable** and click **Confirm**.

[![anhfsec](/img/migrated/Screenshot-2025-06-17-160052-d7098984.png)](/img/migrated/Screenshot-2025-06-17-160052-d7098984.png)

## Access key for CI/CD pipeline

In the detail screen you will find an access key to use in your CI/CD pipeline. See the [CI/CD integration guide](./cicd-guideline.md).

[![anhfsec](/img/migrated/in-git5-0f0523e9.png)](/img/migrated/in-git5-0f0523e9.png)

You can copy or reset the access key for CI/CD pipeline integration.

[![anhfsec](/img/migrated/in-git6-c0ffda22.png)](/img/migrated/in-git6-c0ffda22.png)

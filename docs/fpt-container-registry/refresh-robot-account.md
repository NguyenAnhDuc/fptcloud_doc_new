---
id: "refresh-robot-account"
title: "Refresh a robot account secret"
description: "Regenerate the secret for a robot account when the token is lost or needs rotation."
sidebar_label: "Refresh a robot account secret"
sidebar_position: "25"
---

# Refresh a robot account secret

A robot account token is only shown once at creation. When a token is lost or needs to be replaced for security reasons, FPT Cloud lets you regenerate the secret without deleting and recreating the robot account.

1. In the **Robot Account** list, select the robot account to refresh, then select **ACTION REFRESH SECRET**.

   [![Select ACTION REFRESH SECRET](/img/migrated/Picture79-c15b2ebd.png)](/img/migrated/Picture79-c15b2ebd.png)

2. Choose one of two methods to refresh the secret:

   **Method 1 - Automatic:** The system generates a new secret. Copy it or click **Export to File** to save.

   [![Automatic secret refresh](/img/migrated/Picture80-b745cd4f.png)](/img/migrated/Picture80-b745cd4f.png)

   [![Save new secret dialog](/img/migrated/Picture81-1d68b601.png)](/img/migrated/Picture81-1d68b601.png)

   **Method 2 - Manual:** Enter a custom secret yourself.

   [![Manual secret configuration](/img/migrated/Picture82-b708581c.png)](/img/migrated/Picture82-b708581c.png)

:::warning
After refreshing, update the new secret in all pipelines and systems that use this robot account.
:::

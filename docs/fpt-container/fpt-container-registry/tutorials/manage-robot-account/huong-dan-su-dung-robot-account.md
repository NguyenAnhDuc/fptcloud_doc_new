---
id: "huong-dan-su-dung-robot-account"
title: "Use a robot account"
description: "Log in and perform pull/push operations using a robot account."
sidebar_label: "Use a robot account"
sidebar_position: "26"
---

# Use a robot account

After creating a robot account, you can use its credentials to perform Docker operations with the configured permissions (pull/push). Robot accounts are ideal for use in CI/CD pipelines and automated environments.

Use the token copied from the Portal or from an exported file to log in:

[![Use token for docker login](/img/migrated/Picture83-e270d618.png)](/img/migrated/Picture83-e270d618.png)

Verify the credentials using the `docker login` command:

[![docker login result with robot account](/img/migrated/Picture84-69496c13.png)](/img/migrated/Picture84-69496c13.png)

After logging in, use `docker pull` or `docker push` to verify the configured permissions.

:::note
If the robot account is deleted, disabled, or the token has expired, `docker login`, `docker pull`, or `docker push` will return an "unauthorized to access repository" error.
:::

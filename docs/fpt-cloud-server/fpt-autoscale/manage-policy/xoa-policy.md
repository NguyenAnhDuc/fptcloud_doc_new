---
id: "xoa-policy"
title: "Delete Policy"
description: "Guide to deleting an Autoscale Policy on FPT Autoscale."
sidebar_label: "Delete Policy"
sidebar_position: 5
pagination_next: null
---

# Delete Policy

## Step 1: Go to Autoscaling > Autoscale Policy. On the row of the policy to delete, click the **Delete** icon.

[![delete policy](/img/migrated/Screenshot-2024-10-02-071116-37f91343.png)](/img/migrated/Screenshot-2024-10-02-071116-37f91343.png)

## Step 2: A confirmation dialog appears. If the policy name is correct, click **Delete policy** to confirm. Click **Cancel** to abort the operation.

[![delete policy confirmation dialog](/img/migrated/Screenshot-2024-10-02-071213-f062f4ca.png)](/img/migrated/Screenshot-2024-10-02-071213-f062f4ca.png)

:::warning
If you receive the following error message:

[![delete policy failed because still linked to a group](/img/migrated/Screenshot-2024-10-02-071245-ee662fd2.png)](/img/migrated/Screenshot-2024-10-02-071245-ee662fd2.png)

The policy is currently linked to one or more Autoscale Groups. Ensure the policy has been fully detached from all groups before deleting it.
:::

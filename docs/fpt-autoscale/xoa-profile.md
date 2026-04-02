---
id: "xoa-profile"
title: "Delete Profile"
description: "Guide to deleting an Autoscale Profile on FPT Autoscale."
sidebar_label: "Delete Profile"
sidebar_position: 5
pagination_next: null
---

# Delete Profile

## Step 1: Go to Autoscaling > Autoscale Profile. On the row of the profile to delete, click the **Delete** icon.

[![delete profile](/img/migrated/Screenshot-2024-10-01-171413-fec288a5.png)](/img/migrated/Screenshot-2024-10-01-171413-fec288a5.png)

## Step 2: A confirmation dialog appears. If the profile name is correct, click **Delete profile** to confirm. Click **Cancel** to abort the operation.

[![delete profile confirmation dialog](/img/migrated/Screenshot-2024-10-01-171633-abcf343f.png)](/img/migrated/Screenshot-2024-10-01-171633-abcf343f.png)

:::warning
If you receive the following error message:

[![delete profile failed because still linked to a group](/img/migrated/Screenshot-2024-10-01-174412-8d122a6f.png)](/img/migrated/Screenshot-2024-10-01-174412-8d122a6f.png)

The profile is currently being referenced by one or more Autoscale Groups or Instance Nodes. Ensure all linked objects are deleted before deleting the profile.
:::

---
id: "thay-doi-profile-cho-group"
title: "Change Profile for Group"
description: "Guide to changing the Profile referenced by an Autoscale Group on FPT Autoscale."
sidebar_label: "Change Profile for Group"
sidebar_position: 9
---

# Change Profile for Group

## Step 1: Go to Autoscaling > Autoscale Group. On the row of the group whose profile you want to change, click the **Action menu** icon.

[![open group action menu](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

## Step 2: In the menu, select **Update profile**.

[![update profile menu option](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

## Step 3: Select the new profile for the group and click **Update**.

[![update profile dialog](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

- **Current profile**: The profile currently referenced by the group.
- **Change to**: Select the new profile to apply to the group.

:::note
Only newly created nodes will reference the new profile. Existing nodes continue to reference the old profile. At any given time, a group references only one profile, but nodes within the group may reference different profiles.
:::

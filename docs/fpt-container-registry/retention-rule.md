---
id: "retention-rule"
title: "Retention Rule"
description: "Configure retention rules to automatically delete unused images."
sidebar_label: "Retention Rule"
sidebar_position: "9"
draft: true
---

# Manage retention rules

As a repository accumulates tags over time, unused tags consume storage. Use FPT Cloud's **Retention Rule** feature to automate image and tag retention or deletion criteria, optimizing storage usage.

## Add a tag retention rule

Define retention criteria to automatically remove unnecessary tags.

1. On the sidebar menu, select **Container Registry** and open the **Policy** tab.

   [![Policy tab](/img/migrated/Picture27-62a35e57.png)](/img/migrated/Picture27-62a35e57.png)

2. Select **ADD RULES** and enter the tag retention rule information.

3. In the **Repositories** menu, select **matching** or **excluding**.

4. In the **By image count or number of days** menu, specify the number of images or the retention period to keep.

   | Option | Description |
   |---|---|
   | retain the most recently pushed # images | Keep the specified number of most recently pushed images |
   | retain the most recently pulled # images | Keep the specified number of most recently pulled images |
   | retain the images pushed within the last # days | Keep images pushed within the specified number of days |
   | retain the images pulled within the last # days | Keep images pulled within the specified number of days |
   | retain always | Always retain |

5. In the **Tag** menu, specify the target tags and click **Add** to save the rule.

## Set a schedule

Configure a schedule to automatically run retention rules on a recurring basis.

1. Select **Container Registry** > **Policy** > **Schedule** > **Edit**.

2. Select the execution frequency (None, Hourly, Daily, Weekly, Custom).

   :::warning
   The schedule applies to all rules. You cannot set different schedules for individual rules.
   :::

3. Click **Save** > **OK** to save the schedule.

## Manage retention runs

- **RUN NOW:** Execute the rule manually and immediately.
- **DRY RUN:** Validate the rule without actually deleting any images.
- **ABORT:** Stop an in-progress retention run.

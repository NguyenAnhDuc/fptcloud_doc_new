---
id: "cau-hinh-lap-lich-chay-retention-rule"
title: "Schedule a retention rule"
description: "Set up a schedule to automatically run retention rules on a recurring basis."
sidebar_label: "Schedule a retention rule"
sidebar_position: "16"
---

# Schedule a retention rule

Instead of running retention rules manually, you can set a schedule so the system executes them automatically on a recurring basis, keeping storage usage consistently optimized.

1. On the **FPT Portal** menu, select **Container Registry** > **Policy** > **Schedule** > **Edit**.

   [![Edit Schedule button](/img/migrated/Picture43-1-fe4aeec3.png)](/img/migrated/Picture43-1-fe4aeec3.png)

2. Select the execution frequency for the retention rule.

   [![Execution frequency options](/img/migrated/Picture44-1-1535ba88.png)](/img/migrated/Picture44-1-1535ba88.png)

   | Option | Description |
   |---|---|
   | None | No schedule — run manually from Portal |
   | Hourly | Run once every hour |
   | Daily | Run every day at 7:00 AM |
   | Weekly | Run once every week |
   | Custom | Enter a custom cron expression |

   :::warning
   If you define multiple rules, the schedule applies to all rules. You cannot set different schedules for individual rules.
   :::

   Custom schedule configuration example:

   [![Custom schedule configuration example](/img/migrated/Picture45-1-20717af0.png)](/img/migrated/Picture45-1-20717af0.png)

3. Click **Save** > **OK** to save the schedule.

   [![Confirm saving the schedule](/img/migrated/Picture46-1-c68ab5ea.png)](/img/migrated/Picture46-1-c68ab5ea.png)

4. Verify the result after configuring the schedule.

   [![Schedule configuration result](/img/migrated/Picture47-1-373e4e1a.png)](/img/migrated/Picture47-1-373e4e1a.png)

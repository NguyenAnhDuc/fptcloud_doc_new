---
id: "tao-moi-recipient"
title: "Create a recipient"
sidebar_label: "Create a recipient"
sidebar_position: 15
---

# Create a recipient

**Step 1:** In the menu, go to **Cloud Guard** > **Alert**, open the **Recipients** tab, and click **Create Recipient**.

A dialog box appears to guide you through the steps.

[![file](/img/migrated/image-1725532997863-419e42b8.png)](/img/migrated/image-1725532997863-419e42b8.png)

**Step 2:** Enter the required information:

- **Name:** Enter the recipient name.
- **Type:** Select the notification method. FPT Alert supports Email, Telegram, and Slack.

**Step 3:** Enter the **Address** corresponding to the selected type. This is where the system sends notifications when resource usage exceeds the configured threshold.

**Receive alerts via Email:**
- **Address:** Enter the recipient's email address.

[![Userguide FPT Alert 2022 14](/img/migrated/Userguide-FPT-Alert-2022-14-1024x465-a24c9d90.png)](/img/migrated/Userguide-FPT-Alert-2022-14-1024x465-a24c9d90.png)

**Receive alerts via Telegram:**
- **Telegram ID:** Enter the recipient's Telegram ID. If you do not have an ID, follow the instructions in the system to obtain one.

[![Userguide FPT Alert 2022 15](/img/migrated/Userguide-FPT-Alert-2022-15-1024x490-9d5693fb.png)](/img/migrated/Userguide-FPT-Alert-2022-15-1024x490-9d5693fb.png)

:::tip
To receive alerts in a Telegram group:
1. Create the group, get the group ID, and create the corresponding recipient in Cloud Guard.
2. Add the FPT Cloud Guard bot to the group to receive alerts.
:::

**Receive alerts via Slack:**
- **Slack Channel ID:** Select the Slack channel to receive alerts. Log in to your Slack account, select a channel from the list, and FPT Portal will automatically retrieve the Slack Channel ID.

[![Userguide FPT Alert 2022 16](/img/migrated/Userguide-FPT-Alert-2022-16-1024x495-7ab818fa.png)](/img/migrated/Userguide-FPT-Alert-2022-16-1024x495-7ab818fa.png)

**Step 4:** When all information is filled in, click **Create**.

[![Userguide FPT Alert 2022 17](/img/migrated/Userguide-FPT-Alert-2022-17-1024x471-52aac771.png)](/img/migrated/Userguide-FPT-Alert-2022-17-1024x471-52aac771.png)

The system processes the request and confirms. After creation, the new recipient appears in the management table.

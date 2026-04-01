---
id: "slack"
title: "Slack"
description: "How to integrate Slack to receive automatic incident notifications"
sidebar_label: "Slack"
sidebar_position: 8
---

# Slack

Integrating **Slack** lets you receive automatic notifications whenever an incident is declared.

To integrate Slack, you need a **Webhook URL**. See instructions for obtaining a Webhook URL [here](https://medium.com/fortum-tech/step-by-step-guide-to-create-a-slack-app-for-incoming-webhooks-3d9b799e8ae1).

## Set up

1. In the Incident Management menu, click **Integration**, find the **Slack** section, and click **Integration**.

   [![Select Integration for Slack](/img/migrated/Screenshot_1-1-00d7a0b4.png)](/img/migrated/Screenshot_1-1-00d7a0b4.png)

2. Click **Show details**, then click **Run when an event fires**.
3. Enter **Name** and **URL**:

   [![Enter Slack trigger information](/img/migrated/Screenshot_2-1-0e317a42.png)](/img/migrated/Screenshot_2-1-0e317a42.png)

   - **Name**: a name of your choice
   - **URL**: the Webhook URL created above

4. Click **Add event action** to complete.

:::note
You can create multiple triggers by clicking **Run when an event fires** again.
:::

After setup, whenever a new incident is created, the system automatically sends a notification to the linked Slack channel with a link to the incident.

[![Example notification on Slack](/img/migrated/Screenshot_3-1-b266990c.png)](/img/migrated/Screenshot_3-1-b266990c.png)

## Delete a trigger

1. Click **Integration** > **Show details**.
2. Click the **Trash** icon for the trigger you want to delete.

   [![Delete Slack trigger](/img/migrated/Screenshot_4-1-8286678a.png)](/img/migrated/Screenshot_4-1-8286678a.png)

3. Click **Yes** in the confirmation dialog.

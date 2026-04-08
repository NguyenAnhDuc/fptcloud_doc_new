---
id: "telegram"
title: "Telegram"
description: "How to integrate Telegram to receive automatic incident notifications"
sidebar_label: "Telegram"
sidebar_position: 13
---

# Telegram

Integrating **Telegram** lets you receive automatic messages in the Telegram app whenever an incident is declared.

## Set up

1. In the Incident Management menu, click **Integration**, find the **Telegram** section, and click **Integration**.

   [![Select Integration for Telegram](/img/migrated/Screenshot_5-1-3ee11c8f.png)](/img/migrated/Screenshot_5-1-3ee11c8f.png)

2. Click **Show details**, then click **Run when an event fires**.
3. Enter **Name**, **Chat ID**, and **Bot API Token**:

   [![Enter Telegram trigger information](/img/migrated/Screenshot_6-1-d525e397.png)](/img/migrated/Screenshot_6-1-d525e397.png)

   - **Name**: a name of your choice
   - **Chat ID**: ID of the Telegram group to receive notifications
   - **Bot API Token**: to get a token, search for **BotFather** in Telegram, click **Start**, then click **/newbot** to create a new bot; the system will generate a token

4. Click **Add event action** to complete.

:::note
You can create multiple triggers by clicking **Run when an event fires** again.
:::

After setup, whenever a new incident is created, the system automatically sends a message via Telegram with a link to the incident.

[![Example notification on Telegram](/img/migrated/Screenshot_7-1-163bac3e.png)](/img/migrated/Screenshot_7-1-163bac3e.png)

## Delete a trigger

1. Click **Integration** > **Show details**.
2. Click the **Trash** icon for the trigger you want to delete.

   [![Delete Telegram trigger](/img/migrated/Screenshot_8-1-c75df4c5.png)](/img/migrated/Screenshot_8-1-c75df4c5.png)

3. Click **Yes** in the confirmation dialog.

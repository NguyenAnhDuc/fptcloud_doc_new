---
id: "microsoft-teams"
title: "Microsoft Teams"
description: "How to integrate Microsoft Teams with Incident Management"
sidebar_label: "Microsoft Teams"
sidebar_position: 10
---

# Microsoft Teams

Integrating **Microsoft Teams** with Incident Management enables fast incident detection and notification.

To get started, you need a **Webhook URL** for Microsoft Teams. See instructions for creating a Webhook URL [here](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=newteams%2Cdotnet).

## Set up

1. In the Incident Management menu, click **Integration**, find the **Microsoft Teams** section, and click **Integration**.
2. Click **Show details**, then click **Run when an event fires**.
3. Enter **Name** and **URL**:

   [![Enter Microsoft Teams trigger information](/img/migrated/Screenshot_9-1-4bed69c6.png)](/img/migrated/Screenshot_9-1-4bed69c6.png)

   - **Name**: a name of your choice
   - **URL**: the Webhook URL created above

4. Click **Add event action** to complete.

:::note
You can create multiple triggers by clicking **Run when an event fires** again.
:::

After setup, whenever a new incident is created, the system automatically sends a message via Microsoft Teams with a link to the incident.

[![Example notification on Microsoft Teams](/img/migrated/Screenshot_10-1-0b2b9825.png)](/img/migrated/Screenshot_10-1-0b2b9825.png)

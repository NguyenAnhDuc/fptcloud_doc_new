---
id: "recipient-teams"
title: "Create a recipient via Microsoft Teams"
sidebar_label: "Create a recipient via Microsoft Teams"
sidebar_position: 3
---

# Create a recipient via Microsoft Teams

The Microsoft Teams recipient feature lets you configure a Teams channel or group chat to receive notifications from the FPT Cloud Guard security monitoring system. This integration helps operations teams receive timely alerts and respond quickly to security events.

## Configuration steps

**Step 1:** Get the Webhook URL from Microsoft Teams

1. Open Microsoft Teams and select the Channel or Chat where you want to receive alerts.
2. Create a workflow: **Post to a channel/chat when a webhook request is received**.
3. Copy the Webhook URL and click **Done**.

For detailed instructions on creating the workflow and getting the webhook URL, see: [Microsoft Support – Create incoming webhooks with Workflows for Microsoft Teams](https://support.microsoft.com/en-us/office/create-incoming-webhooks-with-workflows-for-microsoft-teams-8ae491c7-0394-4861-ba59-055e33f75498).

**Step 2:** Add the recipient to Cloud Guard

1. Go to FPT Cloud Portal and select the **Cloud Guard** service.
2. Go to **Recipient** and click **Create**.
3. Select **Method** = **Teams**.
4. Paste the Webhook URL copied from Teams, then click **Send test message** to test the connection.
5. After the test message succeeds, click **Create** to save the recipient.

[![file](/img/migrated/image-1750750425129-e5027a61.png)](/img/migrated/image-1750750425129-e5027a61.png)

**Step 3:** Assign the recipient to an alert

1. Go to the **Resource alert**, **Activity alert**, or **Threat alert** tab.
2. Select an existing alert, or create a new one.
3. Add the Teams recipient to the alert and click **Update** or **Create**.

Alerts will be delivered to the customer's Teams channel or chat.

[![file](/img/migrated/image-1750751150232-eeb9cfc1.png)](/img/migrated/image-1750751150232-eeb9cfc1.png)

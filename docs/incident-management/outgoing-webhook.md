---
id: "outgoing-webhook"
title: "Outgoing Webhook"
description: "**Outgoing webhook** allows users to receive real-time notifications and real-time updates. When an incident is created,"
sidebar_label: "Outgoing Webhook"
sidebar_position: 5
---

# Outgoing Webhook

**Outgoing webhook** allows users to receive real-time notifications and real-time updates. When an incident is created, updated or closed, it will trigger events, and the incident will be notified to the declared URL.
After integrating the **Outgoing webhook** integration, view its details by clicking **Show details**.
[![](/img/migrated/Screenshot_4-498dd7c9.png)](/img/migrated/Screenshot_4-498dd7c9.png)
### Create a Trigger
**Step 1** : Click **+ Run when an event fires**.
[![](/img/migrated/Picture8-b599aa7e.png)](/img/migrated/Picture8-b599aa7e.png)
**Step 2** : Enter the necessary information:
  * **Name** : Name of the trigger event.
  * **URL** : Webhook URL to POST the event to.
  * **Run this action when** : _Incident is declared_ or _Incident changes_

**Step 3** : After filling in the information, click **Add event action** to create a trigger
_**Note** : You can create multiple triggers._
### Delete a Trigger
To delete a trigger, Click the **Trash** icon.
[![](/img/migrated/Picture10-2bd7c632.png)](/img/migrated/Picture10-2bd7c632.png)
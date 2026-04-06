---
id: "create-incident"
title: "インシデントの作成"
description: "システムでインシデントを作成する方法の概要。"
sidebar_label: "インシデントの作成"
sidebar_position: 15
---

# インシデントの作成

You can create a new incident in two ways, either directly from the system through the **Declare Incident** feature, or via an **Incoming Webhook**.

### Declare Incident
**Step 1** : From the sidebar menu, choose **Apps** , then click **FMON - Incident**
**Step 2** : Click **Declare Incident**
**Step 3** : Enter the necessary information for the incident:
  * **What's going on?** : Describe or name the ongoing incident.
  * **Severity** : Select the severity level of the incident.
  * **Status** : The current status of the incident.
  * **Labels** : List of labels assigned to the incident.

**Step 4** : Click **Declare incident**
[![](/img/migrated/Screenshot_15-c7ec0f86.png)](/img/migrated/Screenshot_15-c7ec0f86.png)

### Incoming Webhook
**Step 1** : From the sidebar menu, choose **Apps** , then click **FMON - Incident**
**Step 2** : Click **Integration**
**Step 3** : Set up **Incoming webhook** as mentioned [here](./incoming-webhook.md)
**Step 4** : After integrating the **Incoming webhook** integration, view its details by clicking **Show details**. The system will provide you with:
  * **Token**
  * **URL** : Incoming webhook URL, used to POST incidents.

[![](/img/migrated/Screenshot_3-9a833b35.png)](/img/migrated/Screenshot_3-9a833b35.png)
To push an accident to an incoming webhook, send a POST request to the webhook. An example using _curl_ :

```
Copycurl "https://api-incident-stg.fci.fmon.fptcloud.com/api/v1/create_incident?title=json(report.title)" --request POST --header 'Authorization: a9210eeee765e209c6a81a13e957574e' --header 'Content-Type: application/json' --data '{"report":{"title":"cool that this title comes from the json"}}'
```

---
id: "incoming-webhook"
title: "Incoming Webhook"
description: "After integrating the **Incoming webhook** integration, view its details by clicking **Show details**. The system will p"
sidebar_label: "Incoming Webhook"
sidebar_position: "4"
---

# Incoming Webhook

After integrating the **Incoming webhook** integration, view its details by clicking **Show details**. The system will provide you with:
  * **Token**
  * **URL** : Incoming webhook URL, used to POST incidents.

[![](/img/migrated/Screenshot_3-9a833b35.png)](/img/migrated/Screenshot_3-9a833b35.png)
To push an accident to an incoming webhook, send a POST request to the webhook. An example using _curl_ :

```
curl "https://api-incident-stg.fci.fmon.fptcloud.com/api/v1/create_incident?title=json(report.title)" --request POST --header 'Authorization: a9210eeee765e209c6a81a13e957574e' --header 'Content-Type: application/json' --data '{"report":{"title":"cool that this title comes from the json"}}'
```

---
id: "create-incident-via-webhook"
title: "Create an incident via incoming webhook"
description: "How to create an incident through an incoming webhook"
sidebar_label: "Create via incoming webhook"
sidebar_position: 24
---

# Create an incident via incoming webhook

1. From the left menu, click **Apps** > **Incident**.
2. Click **Integration**.
3. Set up **Incoming webhook** (if not yet installed, see [Configure integrations](/docs/fpt-monitoring/incident-management/configure-integrations)).
4. After successful setup, click **Show details** to view the details.

[![Incoming webhook details](/img/migrated/Screenshot_27-8a7004f4.png)](/img/migrated/Screenshot_27-8a7004f4.png)

[![Webhook token and URL](/img/migrated/Screenshot_28-222663b7.png)](/img/migrated/Screenshot_28-222663b7.png)

Key information:

- **Token**: authentication string
- **URL**: incoming webhook URL used to POST incidents

## Example using curl

```bash
curl "api-incident-stg.fci.fmon.fptcloud.com/api/v1/create_incident?title=json(report.title)" \
  --request POST \
  --header 'Authorization: a9210eeee765e209c6a81a13e957574e' \
  --header 'Content-Type: application/json' \
  --data '{"report":{"title":"cool that this title comes from the json"}}'
```

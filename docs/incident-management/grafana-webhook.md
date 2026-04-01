---
id: "grafana-webhook"
title: "Grafana webhook"
description: "How to declare incidents from Grafana via webhook"
sidebar_label: "Grafana webhook"
sidebar_position: 5
---

# Grafana webhook

Grafana webhook allows you to declare incidents directly from the **Grafana** system.

## Set up

1. In the Incident Management menu, click **Integration**, find the **Grafana webhook** section, and click **Integration**.
2. Click **Show details** to view the details.

## Example using curl

```bash
curl incident-stg-incident.fci.fmon.fptcloud.com/api/v1/create_incident_from_grafana \
  --header 'Authorization: 92d8d6da870248e737d0a12f7d717da3' \
  --header 'Content-Type: application/json' \
  --data '{
    "alerts": [
      {
        "status": "firing",
        "labels": {
          "alertname": "[TEST] Warning-JACCS-MYSQL Connection is higher than 88000",
          "host": "Jlos-cluster-gyw6lb08-master1",
          "server": "10.42.5.3:3306"
        },
        "annotations": {},
        "valueString": ""
      }
    ]
  }'
```

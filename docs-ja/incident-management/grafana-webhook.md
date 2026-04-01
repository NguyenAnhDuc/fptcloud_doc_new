---
id: "grafana-webhook"
title: "Grafana webhook"
description: "Grafana システムから webhook 経由で Incident を宣言するガイド"
sidebar_label: "Grafana webhook"
sidebar_position: 5
---

# Grafana webhook

Grafana webhook を使用すると、**Grafana** システムから直接 Incident を宣言できます。

## 設定

1. Incident Management のメニューで **Integration** をクリックし、**Grafana webhook** セクションを見つけて **Integration** をクリックします。
2. **Show details** をクリックして詳細情報を確認します。

## curl の使用例

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

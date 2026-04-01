---
id: "grafana-webhook"
title: "Grafana webhook"
description: "Hướng dẫn khai báo incident từ hệ thống Grafana qua webhook"
sidebar_label: "Grafana webhook"
sidebar_position: 5
---

# Grafana webhook

Grafana webhook cho phép khai báo incident trực tiếp từ hệ thống **Grafana**.

## Thiết lập

1. Trong menu Incident Management, nhấn **Integration**, tìm phần **Grafana webhook** và nhấn **Integration**.
2. Nhấn **Show details** để xem thông tin chi tiết.

## Ví dụ sử dụng curl

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

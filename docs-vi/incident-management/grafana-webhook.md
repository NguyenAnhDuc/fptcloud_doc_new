---
id: "grafana-webhook"
title: "Cho phép người dùng khai báo incident từ hệ thống Grafana."
description: "Cho phép người dùng khai báo incident từ hệ thống **Grafana**."
sidebar_label: "Cho phép người dùng khai báo incident từ hệ thống Grafana."
sidebar_position: 5
---

# Grafana Webhook

Cho phép người dùng khai báo incident từ hệ thống **Grafana**. 
**Bước 1** : Trên menu của Incident Management, click **Integration** => Vào phần Grafana webhook, chọn **Integration**
**Bước 2** : Click **Show details**
Ví dụ sau minh họa cách đẩy incident bằng incomming webhook:
curl incident-stg-incident.fci.fmon.fptcloud.com/api/v1/create_incident_from_grafana --header 'Authorization: 92d8d6da870248e737d0a12f7d717da3' --header 'Content-Type: application/json' --data '{ "alerts": [ { "status": "firing", "labels": { "alertname": "[TEST] Warning-JACCS-MYSQL Connection is higher than 88000", "host": "Jlos-cluster-gyw6lb08-master1", "server": "10.42.5.3:3306" }, "annotations": { }, "valueString": "" } ] }'
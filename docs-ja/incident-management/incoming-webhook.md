---
id: "incoming-webhook"
title: "Incoming webhook"
description: "Incoming webhook を使用して Incident を作成するガイド"
sidebar_label: "Incoming webhook"
sidebar_position: 4
---

# Incoming webhook

**Incoming webhook** のインストールが完了したら、**Show details** をクリックして詳細情報を確認します。

[![Incoming webhook の詳細](/img/migrated/Screenshot_27-8a7004f4.png)](/img/migrated/Screenshot_27-8a7004f4.png)

[![Token と URL の情報](/img/migrated/Screenshot_28-222663b7.png)](/img/migrated/Screenshot_28-222663b7.png)

主な情報：

- **Token**: 認証用の文字列
- **URL**: Incident を POST するための incoming webhook URL

## curl の使用例

```bash
curl "api-incident-stg.fci.fmon.fptcloud.com/api/v1/create_incident?title=json(report.title)" \
  --request POST \
  --header 'Authorization: a9210eeee765e209c6a81a13e957574e' \
  --header 'Content-Type: application/json' \
  --data '{"report":{"title":"cool that this title comes from the json"}}'
```

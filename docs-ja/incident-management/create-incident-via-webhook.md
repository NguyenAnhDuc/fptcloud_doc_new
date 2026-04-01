---
id: "create-incident-via-webhook"
title: "Incoming webhookでインシデントを作成する"
description: "Incoming webhookを使用してインシデントを作成する方法。"
sidebar_label: "Incoming webhook経由で作成"
sidebar_position: 17
---

# Incoming webhookでインシデントを作成する

1. 左メニューで **Apps** > **Incident** をクリックします。
2. **Integration** をクリックします。
3. **Incoming webhook** を設定します（未設定の場合は[インテグレーション設定ガイド](./configure-integrations.md)を参照してください）。
4. 設定完了後、**Show details** をクリックして詳細情報を確認します。

[![Incoming webhookの詳細](/img/migrated/Screenshot_27-8a7004f4.png)](/img/migrated/Screenshot_27-8a7004f4.png)

[![WebhookのトークンとURL](/img/migrated/Screenshot_28-222663b7.png)](/img/migrated/Screenshot_28-222663b7.png)

主な情報：

- **Token**: 認証に使用する文字列
- **URL**: インシデントをPOSTするためのIncoming webhook URL

## curlを使用した例

```bash
curl "api-incident-stg.fci.fmon.fptcloud.com/api/v1/create_incident?title=json(report.title)" \
  --request POST \
  --header 'Authorization: a9210eeee765e209c6a81a13e957574e' \
  --header 'Content-Type: application/json' \
  --data '{"report":{"title":"cool that this title comes from the json"}}'
```

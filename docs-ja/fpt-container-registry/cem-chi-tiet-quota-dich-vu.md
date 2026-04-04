---
id: "cem-chi-tiet-quota-dich-vu"
title: "サービス quota の詳細を確認する"
description: "使用中のサービスプランの storage-limit と pull-limit を確認する。"
sidebar_label: "サービス quota の詳細を確認する"
sidebar_position: "28"
---

# サービス quota の詳細を確認する

FPT Container Registry は、storage-limit、pull-limit、利用状況が異なる 4 つのサービスプランを提供しています。quota を監視することで、上限に達する前にプランのアップグレードを計画できます。

サービスをアクティベートすると、デフォルトで **Basic** プランが割り当てられます。

| サービスプラン | Storage-limit | Pull-limit | 状態 |
|---|---|---|---|
| Basic | 10 GB | 50 | Available |
| Standard | 100 GB | 200 | Not Available |
| Premium | 500 GB | Unlimited | Not Available |
| Advanced | 2000 GB | Unlimited | Not Available |

Portal で quota の詳細を確認するには:

**FPT Portal** メニューで **Container Registry** > **Quota** > **View Details** を選択します。

[![Quota 詳細確認画面](/img/migrated/Picture85-55012791.png)](/img/migrated/Picture85-55012791.png)

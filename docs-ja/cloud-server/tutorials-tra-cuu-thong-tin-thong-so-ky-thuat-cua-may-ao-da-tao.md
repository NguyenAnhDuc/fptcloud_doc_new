---
id: "tutorials-tra-cuu-thong-tin-thong-so-ky-thuat-cua-may-ao-da-tao"
title: "仮想マシン情報の確認"
description: "作成済み仮想マシンの詳細情報の表示、リソース監視、アクティビティ履歴の確認方法。"
sidebar_label: "仮想マシン情報の確認"
sidebar_position: 16
---

# 仮想マシン情報の確認

Instance Detailページでは、仮想マシンのすべての情報を確認できます — 構成、ステータスから活動履歴、リソース使用状況まで。

## 詳細情報の確認

1. **Instance Management** で確認する仮想マシンの名前をクリックします。

   [![Instance Managementで仮想マシンを選択](/img/migrated/Userguide-FPT-Cloud-Server-2022-36-1024x-8734718d.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-36-1024x-8734718d.png)

2. 詳細情報を確認します：**Hostname**、構成（RAM、CPU、Storage）、**Operating System**、**Private IP**、**Public IP**（存在する場合）、稼働ステータス。

   [![Instance Detailページ](/img/migrated/Userguide-FPT-Cloud-Server-2022-37-1024x-a8e782ec.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-37-1024x-a8e782ec.png)

Instance Detailページでは、以下の操作も行えます：

- **Allocate Floating IP**: 仮想マシンにPublic IPを割り当てる。
- **Instance Monitoring**: CPU、RAM、ディスクの読み書き速度の使用状況を監視する。
- **Instance Storage**: ローカルストレージと外付けストレージディスクを管理する。
- **Activity Log**: すべてのユーザーによる仮想マシンへの操作履歴を監視する。

[![Instance Detailの各タブ](/img/migrated/Userguide-FPT-Cloud-Server-2022-38-1024x-b9c09c62.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-38-1024x-b9c09c62.png)

## アクティビティ履歴の確認（Activity Log）

Activity Logには、ユーザー名、操作名、日時を含むすべての活動履歴が表示されます。

1. **Instance Detail** にアクセスし、**Activity log** タブを選択します。

   [![Activity Logタブ](/img/migrated/Userguide-FPT-Cloud-Server-2022-39-1024x-bba7cc1a.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-39-1024x-bba7cc1a.png)

## Instanceの監視（Monitor）

MonitorにはリアルタイムのメトリクスとしてInstance vCPU Usage、Instance vCPU Contentionなどが表示されます。

1. **Instance Detail** にアクセスし、**Monitor** タブを選択します。

   [![Monitorタブ](/img/migrated/Userguide-FPT-Cloud-Server-2022-40-1024x-cdc66ccc.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-40-1024x-cdc66ccc.png)

## 次のステップ

- [仮想マシン構成の変更](./tutorials-thay-doi-thong-tin-cau-hinh-may-chu.md)

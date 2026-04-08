---
id: "huong-dan-chi-tiet-su-dung-auto-upgrade"
title: "auto upgrade version 機能の詳細ガイド"
description: "Managed Kubernetes Cluster の auto upgrade version 機能の詳細な使用手順を説明します。"
sidebar_label: "auto upgrade version 機能の詳細ガイド"
sidebar_position: 3
pagination_next: null
---

# auto upgrade version 機能の詳細ガイド

* FPT Cloud がサポートする最も古いバージョンよりも 1 マイナーバージョン以上古い標準サポート終了バージョンを使用している Managed Kubernetes Cluster は、auto upgrade version 機能を使用できません。ユーザーはこれらのクラスターのバージョンを手動でアップグレードする必要があります。
  * 例えば、FPT Cloud が Kubernetes バージョン 1.26 から 1.29 をサポートしており、クラスターがバージョン 1.24.14 を使用している場合、このクラスターはこの機能を使用できません。この機能を使用したい場合は、クラスターを手動でバージョン 1.25 にアップグレードする必要があります。
  * バージョンアップグレードの仕組みは Rolling Update に従います。新しいマイナーバージョンを実行するワーカーが全ワーカーグループで同時に作成されます。これらのワーカーが Ready 状態になり workload を実行する準備ができると、Kubernetes が古いマイナーバージョンのワーカーを drain します。最終的に drain が完了すると古いワーカーが削除されます。このプロセスはグループ内のすべてのワーカーが置き換えられるまで繰り返されます。

**1. Managed Kubernetes Cluster の作成時:**

Managed Kubernetes Cluster を作成する際、Auto Upgrade Version 機能はデフォルトで無効になっています。

[![](/img/migrated/Picture1-5-341fc3c7.png)](/img/migrated/Picture1-5-341fc3c7.png)

FPT Cloud がサポートする Kubernetes バージョンの重要なマイルストーンの詳細を確認するには、「?」アイコンをクリックします。

[![](/img/migrated/Picture2-4-cf1843f2.png)](/img/migrated/Picture2-4-cf1843f2.png)

アップグレード時間を設定せずに Auto Upgrade Version 機能を有効にした場合、デフォルトのアップグレード時刻はそのバージョンの標準サポート終了の初日の 07:00 GMT+7 になります。

[![](/img/migrated/Picture3-4-648a0a23.png)](/img/migrated/Picture3-4-648a0a23.png)

auto upgrade の実行時間を設定した後、現在のバージョンのサポート終了時期、次回の auto upgrade 実行時期、auto upgrade スケジュールの概要を確認できます。

[![](/img/migrated/Picture4-4-a5f4e49f.png)](/img/migrated/Picture4-4-a5f4e49f.png)

クラスター作成プロセスで auto upgrade version のスケジュール設定が完了したら、「Next」をクリックして「Nodes Pool」の設定ステップに進みます。

**2. 既存クラスターの Auto Upgrade Version 設定変更**

_注意:_
_- auto upgrade version が設定されている既存の Managed Kubernetes Cluster では、この機能を有効にしていないクラスターと同様に手動でバージョンをアップグレードすることも引き続き可能です。_
_- Managed Kubernetes Cluster の auto upgrade version スケジュールをキャンセルするには、FPT Cloud が自動アップグレードを実行する日の 01:00 GMT+7 より前に auto upgrade 機能を無効にするか、auto upgrade スケジュールを変更する必要があります。例えば、クラスター A で auto upgrade version が有効になっており、2024/6/25 04:00 GMT+7 に自動アップグレードが設定されている場合、自動アップグレードをキャンセルするには 2024/6/25 01:00 GMT+7 より前に auto upgrade を無効にするかスケジュールを変更する必要があります。この時刻以降の変更は無効となり、自動バージョンアップグレードは 2024/6/25 04:00 GMT+7 に実行されます。_

  * auto upgrade 機能の有効化:

[![](/img/migrated/Picture5-4-f125a391.png)](/img/migrated/Picture5-4-f125a391.png)

[![](/img/migrated/Picture6-4-8611699f.png)](/img/migrated/Picture6-4-8611699f.png)

[![](/img/migrated/Picture7-4-0307b0ad.png)](/img/migrated/Picture7-4-0307b0ad.png)

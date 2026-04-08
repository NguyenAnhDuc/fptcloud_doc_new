---
id: "create-ddos"
title: "DDoS保護の作成"
description: "FPT CloudでDDoS保護を有効化・設定する方法です。"
sidebar_label: "DDoS保護の作成"
sidebar_position: "3"
---

# DDoS保護の作成

[![DDoS保護が未有効化の状態](/img/migrated/corero-not-active-1024x462-fa6af4dd.png)](/img/migrated/corero-not-active-1024x462-fa6af4dd.png)

:::note
FPT Cloud Portal上でDDoS保護を自分で有効化できない場合は、サポートにお問い合わせください。
- ホットライン: **1900 638 399**
- メール: **support@fptcloud.com**
:::

有効化後、以下の機能が利用可能になります。

[![DDoS保護が有効化された状態](/img/migrated/corero-active-1024x462-24b1a42c.png)](/img/migrated/corero-active-1024x462-24b1a42c.png)

システムでは、Tenant内のすべてのIPに対して保護対象IPのリストを管理できます。

[![保護対象IPリスト](/img/migrated/Create-ip-1-1024x416-b730e124.png)](/img/migrated/Create-ip-1-1024x416-b730e124.png)

## 保護対象IPの追加

**Create IP Protection** をクリックし、以下の情報を入力します。

- **Traffic Protection**: IPの保護トラフィックパッケージを選択します。
- **VPC**: VPCを選択して対応するFloating IPのリストを絞り込みます。
- **Floating IP**: 保護するFloating IPを選択します。

:::tip
VPCを先に選択してFloating IPリストを絞り込むことも、Floating IPを先に選択してシステムに対応するVPCを自動入力させることもできます。
:::

---
id: "enable-hsts"
title: "HTTPS リスナーでの HSTS の有効化"
description: "FPT Cloud ロードバランサーの HTTPS リスナーで HTTP Strict Transport Security (HSTS) を有効にする方法を説明します。"
sidebar_label: "HSTS の有効化"
sidebar_position: 10
---

# HTTPS リスナーでの HSTS の有効化

**HSTS (HTTP Strict Transport Security)** は、ブラウザが常に安全な接続（HTTPS）を使用してサーバーと通信することを要求することで、中間者攻撃を防ぐセキュリティポリシーです。

FPT ロードバランサーの HTTPS リスナーで **HSTS** を有効にすると、ブラウザは HTTPS のみで通信するよう強制されます。

リスナーの作成方法については[リスナーの作成](./create-listener.md)を参照してください。

:::note
この機能を使用するには、プロトコルとして **TERMINATED_HTTPS** を選択し、SSL 証明書をリスナーに添付する必要があります。SSL 証明書がない場合は[SSL 証明書のインポート](./import-ssl-certificate.md)を参照してください。
:::

リスナーの作成または更新時に **HSTS** を有効にし、以下を設定します：

- **HSTS max age**: 整数値（最大 256 文字、負の値不可）。デフォルト：31,536,000 秒。ブラウザが HSTS ポリシーを適用する期間と、サイトが HTTPS のみでアクセスされることを記憶する期間を定義します。
- **Include Subdomain**: HSTS ポリシーをすべてのサブドメインに適用するか、このドメインのみに適用するかを設定します。
- **Preload**: ドメインをブラウザのプリロードリストに含めるかどうかを設定します。

**Create Listener** をクリックして作成するか、**Cancel** で取り消します。

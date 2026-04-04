---
id: "enable-hsts-to-http-listener"
title: "HTTPS リスナーでの HSTS の有効化"
description: "FPT Load Balancer の HTTPS リスナーで HSTS (HTTP Strict Transport Security) を有効にする方法を説明します。"
sidebar_label: "HSTS の有効化"
sidebar_position: "17"
---

# HTTPS リスナーでの HSTS の有効化

**HSTS (HTTP Strict Transport Security)** は、ブラウザが常に安全な接続（HTTPS）を使用してサーバーと通信することを要求することで、中間者攻撃を防ぐセキュリティポリシーです。

**FPT Load Balancer** の HTTPS リスナーで **HSTS** を有効にすると、ブラウザは HTTPS のみで通信するよう強制されます。

**HSTS** を有効にする際に設定する項目：

- **HSTS max age**: 整数値（最大 256 文字、負の値不可）。デフォルト：31,536,000 秒。ブラウザが HSTS ポリシーを適用する期間と、サイトが HTTPS のみでアクセスされることを記憶する期間を定義します。
- **Include Subdomain**: HSTS ポリシーをすべてのサブドメインに適用するか、このドメインのみに適用するかを設定します。
- **Preload**: ドメインをブラウザのプリロードリストに含めるかどうかを設定します。

**Create Listener** をクリックして作成するか、**Cancel** で取り消します。

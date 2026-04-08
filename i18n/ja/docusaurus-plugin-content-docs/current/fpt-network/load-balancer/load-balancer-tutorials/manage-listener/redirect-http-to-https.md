---
id: "redirect-http-to-https"
title: "HTTP リクエストの HTTPS へのリダイレクト"
description: "FPT Cloud ロードバランサーで L7 ポリシーを使用して HTTP から HTTPS への自動リダイレクトを設定する方法を説明します。"
sidebar_label: "HTTP から HTTPS へのリダイレクト"
sidebar_position: 7
---

# HTTP リクエストの HTTPS へのリダイレクト

データの完全性を保護するために、すべての HTTP トラフィックを HTTPS にリダイレクトできます。

**手順 1:** プロトコル **HTTP、ポート 80** を使用して新しい**リスナー**を作成し、このリスナーの **L7 Policy** タブで **Redirect HTTP to HTTPS** 機能を有効にします。リスナーの作成方法は[リスナーの作成](/ja/docs/fpt-network/load-balancer/load-balancer-tutorials/manage-listener/create-listener)を参照してください。

:::note
ポート 80 の新しい HTTP リスナーには、すべての HTTP リクエストが HTTPS にリダイレクトされるため、サーバープールを紐付ける必要はありません。
:::

**手順 2:** HTTPS リクエストを処理するために **HTTPS、ポート 443** を使用して新しい**リスナー**を作成します。このリスナーに対応する**サーバープール**と **SSL 証明書**を設定します。リスナーの作成は[リスナーの作成](/ja/docs/fpt-network/load-balancer/load-balancer-tutorials/manage-listener/create-listener)を、SSL 証明書のインポートは[SSL 証明書のインポート](/ja/docs/fpt-network/load-balancer/load-balancer-tutorials/manage-ssl-certificate/import-ssl-certificate)を参照してください。

HTTP トラフィックが自動的に HTTPS にリダイレクトされることを確認します。

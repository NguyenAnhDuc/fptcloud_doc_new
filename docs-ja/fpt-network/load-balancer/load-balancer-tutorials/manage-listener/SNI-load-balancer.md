---
id: "SNI-load-balancer"
title: "ロードバランサーでの SNI 設定"
description: "Load Balancer で SNI (Server Name Indication) を設定し、1 つの Listener で複数のドメインを提供する方法を説明します。"
sidebar_label: "SNI の設定"
sidebar_position: "19"
---

# ロードバランサーでの SNI 設定

**SNI (Server Name Indication)** を設定すると、1 つの Listener で各ホスト名を特定の SSL/TLS 証明書にマッピングすることにより、複数のホスト名を提供できます。これによりリソースを節約し、マルチドメインのデプロイメントをサポートし、HTTPS サービスのセキュリティを向上させます。

## 仕組み

- クライアントが HTTPS リクエストを送信すると、SSL ハンドシェイク中にブラウザまたはアプリケーションがホスト名（SNI ホスト名）を含めます。
- Load Balancer は SNI からホスト名を読み取り、対応する SSL 証明書を選択します。
- ホスト名が設定された SNI と一致する場合、正しい証明書で接続が確立されます。
- 一致する SNI がない場合、Load Balancer は**デフォルト証明書**を使用します。

## SNI を設定する場面

- **同じ IP で複数のドメインをホスト**: 1 つの Load Balancer で複数の HTTPS サイトを運用します。
- **リソースの節約**: ドメインごとに別の Load Balancer を作成する必要がありません。
- **ドメインセキュリティ**: 各ドメインが独自の証明書を使用でき、管理とセキュリティポリシーの遵守が容易になります。

## 設定手順

**手順 1:** **FPT Cloud Portal** のロードバランサー管理ページに移動します。

**手順 2:** Load Balancer 一覧から設定する Load Balancer をクリックします。

**手順 3:** **Listener** タブを選択し、**TERMINATED_HTTPS** プロトコルを使用しているリスナーを選択するか、なければ新規作成します。

**手順 4:** SSL/TLS 証明書を 2 つのフィールドに設定します：

- **Default SSL/TLS certificate**: Listener が使用するデフォルト証明書。
- **SNI SSL/TLS certificate**: 1 つまたは複数の SNI 証明書。

**手順 5:** **Update Listener** または **Create Listener** をクリックして保存します。

**手順 6:** ドメイン名（ホスト名）を Load Balancer のパブリック IP に向け、アクセスをテストします。

L7 ポリシーと組み合わせて各ドメインを異なるプールにルーティングすることもできます：

**手順 1:** 証明書を Listener に設定した後、**L7 Policy** タブに移動します。

**手順 2:** 各ドメイン用の L7 ポリシーを作成します。3 つのドメインの例：

```
Policy1:
- Policy action: Redirect to pool
- Redirect to: Pool1
- Position: 1
- Rule: Type=Hostname, Compare type=Equal to, Value=example1.com, Invert=No

Policy2:
- Policy action: Redirect to pool
- Redirect to: Pool2
- Position: 2
- Rule: Type=Hostname, Compare type=Equal to, Value=example2.com, Invert=No

Policy3:
- Policy action: Redirect to pool
- Redirect to: Pool3
- Position: 3
- Rule: Type=Hostname, Compare type=Equal to, Value=example3.com, Invert=No
```

**手順 3:** 保存し、各ドメインにアクセスして正しくルーティングされることを確認します。

:::note
- **クライアントが SNI をサポートする必要があります**: 最新のブラウザやツールはほぼすべて SNI をサポートしています。古いクライアントはサポートしていない場合があります。
- **SSL 証明書が有効**でホスト名と一致している必要があります。
- **ホスト名は一意**である必要があります。同じホスト名を複数の証明書に設定しないでください。
- **ワイルドカード証明書**: サブドメインの場合、1 つのワイルドカード証明書（例：`*.example.com`）をデフォルト証明書として使用すれば、ホスト名ごとの個別証明書は不要です。
- **L7 ポリシーのフォールバック**: 一致するポリシーがない場合、リクエストはデフォルトプールにルーティングされます。
:::

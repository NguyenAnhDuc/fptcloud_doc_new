---
id: "configure-sni"
title: "ロードバランサーでの SNI の設定"
description: "FPT Cloud で単一の HTTPS リスナーで複数のドメインを提供するための SNI (Server Name Indication) の設定方法を説明します。"
sidebar_label: "SNI の設定"
sidebar_position: 17
---

# ロードバランサーでの SNI の設定

**SNI (Server Name Indication)** を使用すると、1 つのリスナーで各ホスト名を特定の SSL/TLS 証明書にマッピングすることにより、複数のホスト名を提供できます。これによりリソースを節約し、マルチドメインのデプロイメントをサポートし、HTTPS サービスのセキュリティを向上させます。

**仕組み：**

- クライアントが HTTPS リクエストを送信すると、SSL ハンドシェイク中にブラウザまたはアプリケーションがホスト名（SNI ホスト名）を含めます。
- ロードバランサーは SNI からホスト名を読み取り、対応する SSL 証明書を選択します。
- ホスト名が設定された SNI と一致する場合、正しい証明書で接続が確立されます。
- 一致する SNI がない場合、ロードバランサーは**デフォルト証明書**を使用します。

**SNI を使用する場面：**

- **同じ IP で複数のドメインをホスト**: 1 つのロードバランサーで複数の HTTPS サイトを運用します。
- **リソースの節約**: ドメインごとに別のロードバランサーを作成する必要がありません。
- **ドメインセキュリティ**: 各ドメインが独自の証明書を使用でき、管理とセキュリティポリシーの遵守が容易になります。

## 設定手順

**手順 1:** **FPT Cloud Portal** のロードバランサー管理ページに移動します。

**手順 2:** ロードバランサー一覧から設定するロードバランサーをクリックします。

**手順 3:** **Listener** タブを選択し、**TERMINATED_HTTPS** プロトコルを使用しているリスナーを選択するか、なければ新規作成します。

**手順 4:** SSL/TLS 証明書を 2 つのフィールドに設定します：

- **Default SSL/TLS certificate**: リスナーが使用するデフォルト証明書。
- **SNI SSL/TLS certificate**: 1 つまたは複数の SNI 証明書。証明書がない場合は[SSL 証明書のインポート](./import-ssl-certificate.md)を参照してください。

**手順 5:** **Update Listener** または **Create Listener** をクリックして保存します。

**手順 6:** ドメイン名（ホスト名）をロードバランサーのパブリック IP に向け、アクセスをテストします。

## L7 ポリシーを使用したドメインごとの異なるプールへのルーティング

SNI と L7 ポリシーを組み合わせて、各ドメインを異なるプールにルーティングできます：

**手順 1:** 上記の手順でリスナーに証明書をアップロード・設定した後、**L7 Policy** タブに移動します。

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

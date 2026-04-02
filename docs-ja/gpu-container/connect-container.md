---
id: "connect-container"
title: "Connect Container"
description: "GPU Containerへの接続には、ニーズや好み、コンテナ作成に使用したテンプレートに応じて、いくつかの方法があります。"
sidebar_label: "Connect Container"
sidebar_position: 8
---

# Connect Container

GPU Containerへの接続には、ニーズや好み、コンテナ作成に使用したテンプレートに応じて、いくつかの方法があります。
## HTTPサービス
HTTPを使用してコンテナに接続する方法は、HTTPS経由で便利、迅速、かつ安全です。HTTPサービスを使用して接続するには：
### ステップ1：コンテナが実行中になったら、コンテナ詳細ページに移動します。
### ステップ2：エンドポイントを見つけてクリップボードにコピーするか、クリックしてブラウザで開きます。
### ステップ3：使用するテンプレートに合ったガイドに従ってください。
| テンプレート | Jupyter、Code Server | Ollama WebUI | Ollama | vLLM |
| --- | --- | --- | --- | --- |
| 前提条件 | なし | なし | なし | Hugging Faceトークン (*) |
| 次のステップ |
  * ブラウザでエンドポイントを開きます。
  * コンテナ詳細ページの「環境変数」セクションにある **Username** と **Password** フィールドを使用してコンテナにアクセスします。

 |
  * ブラウザでエンドポイントを開きます。
  * 新しいOpen WebUIアカウントを作成するか、既存のアカウントを使用します。
  * モデルを選択してプルし、テストします。

 | Postmanを使用してコンテナをテストします (*) | Postmanを使用してコンテナをテストします (*) |

(*) Hugging Faceトークン：Ollamaテンプレートを使用する場合、環境変数セクションのHugging Faceトークンが必要です。まだHugging Faceトークンをお持ちでない場合は、[このガイド](https://huggingface.co/docs/hub/en/security-tokens)に従ってください。
(*) Postmanを使用したコンテナのテスト：エンドポイントに **/v1/models** を追加し、AuthorizationにAPI_TOKENを指定します。vLLMテンプレートを使用している場合は、コンテナをテストするためにリクエストパラメータにHUGGING_FACE_HUB_TOKENも含めてください。
## TCPポート
パブリックエンドポイント経由でインスタンスにアクセスするには、コンテナの設定にTCPポートを追加する必要があります。コンテナが作成されると、サービスにアクセスするためのパブリックドメインと外部パブリックポートマッピングが提供されます。外部パブリックポートは30000〜40000の範囲からランダムに選択されます。
形式はDOMAIN:EXTERNAL_PORT -> INTERNAL_PORTになります。例：

```
tcp-endpoint-stg.serverless.fptcloud.com:34771 → :22
```

## SSHターミナル
  1. コンテナのSSHコマンドを取得するには、コンテナ詳細ページに移動します。SSHコマンドの下に表示されているコマンドをコピーします。
[![Alt text](/img/migrated/Screenshot-2025-06-30-173735-63580c87.png)](/img/migrated/Screenshot-2025-06-30-173735-63580c87.png)

次のようなコマンドになります：

```
ssh root@tcp-endpoint-stg.serverless.fptcloud.com -p 34771 ~/.ssh/id_e25595
```

  2. コピーしたコマンドをローカルターミナルで実行して、コンテナに接続します。

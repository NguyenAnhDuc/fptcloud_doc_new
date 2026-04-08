---
id: "create-listener"
title: "リスナーの作成・更新・削除"
description: "FPT Cloud ロードバランサーでリスナーを作成・更新・削除する方法を説明します。"
sidebar_label: "リスナーの作成"
sidebar_position: 1
---

# リスナーの作成・更新・削除

**リスナー**は、クライアントからの受信リクエストを受け取り、適切なバックエンドサーバーに転送するコンポーネントです。ロードバランサーがトラフィックを受け取り分散する方法のプロトコル、ポート、その他のパラメーターを定義します。

ロードバランサー作成時にデフォルトのリスナーが自動的に作成されます。

## リスナーの作成

**手順 1:** ロードバランサー名をクリックして詳細ページを開きます。

**手順 2:** **Listener** タブを選択し、**Create Listener** をクリックします。

**手順 3:** リスナーの設定を入力します：

- **Listener name**: リスナーの名前を入力します。
- **Description**: 任意の説明。
- **Protocol**: プロトコルを選択します — **HTTP**、**TERMINATED_HTTPS**、**TCP**、または **UDP**（デフォルト：ポート 80 の HTTP）。
- **Server pool**: 設定された L7 ポリシーに一致しないリクエストを転送するデフォルトプール。
- **Client data timeout (ms)**: クライアント接続がリクエストを送信せずにアイドル状態を維持できる最大時間。デフォルト：50,000 ms。
- **Member connect timeout (ms)**: バックエンドメンバーが接続を受け入れるまでの最大待機時間。デフォルト：5,000 ms。
- **Member data timeout (ms)**: バックエンドメンバー接続がアイドル状態を維持できる最大時間。デフォルト：5,000 ms。
- **TCP inspect timeout (ms)**: TCP インスペクションのレスポンス最大待機時間。デフォルト：0。
- **Connection limit**: ロードバランサーが処理できる同時接続の最大数。デフォルト：-1（無制限）。
- **HTTP Header insertions**: **X-Forwarded-For**、**X-Forwarded-Proto**、**X-Forwarded-Port** があらかじめ入力されています。不要なものはチェックを外します。
  - **X-Forwarded-For**: バックエンドリクエストヘッダーにクライアント IP アドレスを挿入します。
  - **X-Forwarded-Port**: バックエンドリクエストヘッダーにリスナーポートを挿入します。
  - **X-Forwarded-Proto**: バックエンドリクエストヘッダーにリスナープロトコルを挿入します。

**Create Listener** をクリックして作成するか、**Cancel** で取り消します。

## リスナーの更新

**手順 1:** リスナー一覧でアップデートするリスナーをクリックします。

**手順 2:** 以下のフィールドを更新します：

- **Listener name**、**Description**、**Server pool**
- **Client data timeout (ms)**、**Member connect timeout (ms)**、**Member data timeout (ms)**
- **TCP inspect timeout (ms)**、**Connection limit**

**Update Listener** をクリックして適用するか、**Cancel** で取り消します。

## リスナーの削除

**手順 1:** リスナー一覧でリスナーの **Action** メニューから **Delete** をクリックします。

**手順 2:** 確認ダイアログが表示されます。`delete` と入力し、**Delete Listener** をクリックして確認します。

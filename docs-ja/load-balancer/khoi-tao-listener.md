---
id: "khoi-tao-listener"
title: "リスナーの作成・更新・削除"
description: "FPT Cloud Load Balancer でリスナーを作成・更新・削除する方法を説明します。"
sidebar_label: "リスナーの作成・更新・削除"
sidebar_position: "12"
---

# リスナーの作成・更新・削除

**Listener** は、クライアントからの受信リクエストを受け取り、適切なバックエンドサーバーに転送するコンポーネントです。プロトコル、ポート、その他のパラメーターを定義し、Load Balancer がトラフィックを受け取り分散する方法を制御します。

Load Balancer 作成時にデフォルトの Listener が自動的に作成されます。

## 1. Listener の作成

**手順 1:** Load Balancer の詳細ページにアクセスし、Load Balancer Management の一覧から対応する Load Balancer 名を選択します。

**手順 2:** **Listener** タブを選択し、**Create Listener** をクリックします。

**手順 3:** Listener の情報を入力します：

- **Listener name**: Listener の名前を入力します。
- **Description**: 任意の説明。
- **Protocol**: プロトコルを選択します — **HTTP**、**TERMINATED_HTTPS**、**TCP**、または **UDP**（デフォルト：ポート 80 の HTTP）。
- **Server pool**: 設定された L7 ポリシーに一致しないリクエストを転送するデフォルトプール。
- **Client data timeout (ms)**: クライアント接続がリクエストを送信せずにアイドル状態を維持できる最大時間。デフォルト：50,000 ms。
- **Member connect timeout (ms)**: バックエンド member が接続を受け入れるまでの最大待機時間。デフォルト：5,000 ms。
- **Member data timeout (ms)**: バックエンド member 接続がアイドル状態を維持できる最大時間。デフォルト：5,000 ms。
- **TCP inspect timeout (ms)**: TCP インスペクションのレスポンス最大待機時間。デフォルト：0。
- **Connection limit**: Load Balancer が処理できる同時接続の最大数。デフォルト：-1（無制限）。
- **HTTP Header insertions**: **X-Forwarded-For**、**X-Forwarded-Proto**、**X-Forwarded-Port** があらかじめ入力されています。不要なものはチェックを外します。
  - **X-Forwarded-For**: バックエンドリクエストヘッダーにクライアント IP アドレスを挿入します。
  - **X-Forwarded-Port**: バックエンドリクエストヘッダーにリスナーポートを挿入します。
  - **X-Forwarded-Proto**: バックエンドリクエストヘッダーにリスナープロトコルを挿入します。

**Create Listener** をクリックして作成するか、**Cancel** で取り消します。

## 2. Listener の更新

**手順 1:** Listener 一覧で更新する Listener を選択します。

**手順 2:** 以下の情報を更新します：

- **Listener name**、**Description**、**Server pool**
- **Client data timeout (ms)**、**Member connect timeout (ms)**、**Member data timeout (ms)**
- **TCP inspect timeout (ms)**、**Connection limit**

**Update Listener** をクリックして適用するか、**Cancel** で取り消します。

## 3. Listener の削除

**手順 1:** Listener 一覧で削除する Listener の **Action** メニューから **Delete** を選択します。

**手順 2:** 確認ダイアログが表示されます。`delete` と入力し、**Delete Listener** をクリックして確認します。

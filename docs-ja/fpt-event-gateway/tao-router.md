---
id: "tao-router"
title: "Routerの作成"
description: "新しいRouterを作成するには、以下の手順に従ってください。"
sidebar_label: "Routerの作成"
sidebar_position: 17
---

# Routerの作成

新しい **Router** を作成するには、以下の手順に従ってください。

**ステップ1:** メニューバーで **Integration** > **Event Gateway** を選択します。

**ステップ2:** **Event Gateway** リストで **Event Gateway** を選択 > **Router** タブを選択します。

**ステップ3:** **Router** リストで **Edit** ボタンをクリック > **Add** をクリック > **Create router** 画面が表示されます。

**ステップ4:** 以下の情報を入力します。

- **Name**（必須）：Router名。
  - a～z、A～Z、ハイフン（-）、アンダースコア（_）、数字を使用できます。先頭は英字。最大30文字。
- **Mode**（必須）：Routerのタイプ。以下から選択します：
  - Oneway
  - Sync
  - Async
  - インターフェースは3つのモードに対応するデフォルトの3つのRouterテンプレートを表示します。
- **Authentication**（必須）：Routerが認証を使用するかどうか。
  - デフォルト：None。
  - 以下から選択：
    - None：認証なし。
    - JWT auth（JWT auth設定が有効な場合）。
- **Path**（必須）：データの送信（POST）または取得（FETCH）のパス。
  - `/` で始まる必要があります。
  - a～z、A～Z、0～9、ハイフン（-）、アンダースコア（_）、`/`、`{`、`}`、`=` を使用できます。
  - 最大100文字。
- **Method**（必須）：Router内のAPIメソッド。
- **Scope**（必須）：API requestの認証時にJWT token内の「scope」claimの値を定義します。
  - 最大50文字。
- **Topic**（必須）：OnewayモードでデータをReceiveするKafka topic名。
- **Request topic**（必須）：SyncまたはAsyncモードでデータをReceiveするKafka topic名。
  - a～z、A～Z、0～9、ハイフン（-）、アンダースコア（_）、ドット（.）を使用できます。
  - 先頭は英字。最大249文字。
- **Response topic**（必須）：SyncまたはAsyncモードでデータを取得するKafka topic名。
  - a～z、A～Z、0～9、ハイフン（-）、アンダースコア（_）、ドット（.）を使用できます。
  - 先頭は英字。最大249文字。

**Add router** をクリックして各Routerモードタイプのテンプレートを追加します。
**Remove router** をクリックしてRouterを削除します。

**ステップ5:** **Save** をクリックして新しいRouterを作成します。

---
id: "chinh-sua-listener"
title: "リスナーの L7 ポリシー設定"
description: "FPT Cloud Load Balancer のリスナーに対して L7 ポリシーとルールを作成・更新・管理する方法を説明します。"
sidebar_label: "L7 ポリシーの設定"
sidebar_position: "14"
---

# リスナーの L7 ポリシー設定

**L7 Policies** はバックエンドサーバーへのトラフィックを制御・転送します。L7 Policies は HTTP/HTTPS リクエストのレイヤー 7 ルーティングポリシーを形成する **L7 Rule** の集合です。各ポリシーは 2 つのコンポーネントで構成されます：

- **条件**: 受信リクエストを評価します。
- **アクション**: 条件に一致した場合に適用されます。

## 1. L7 ポリシーの作成

**手順 1:** Listener 一覧で設定する Listener をクリックします。

**手順 2:** **L7 Policy** タブを選択し、**Add Policy** をクリックします。

新しい **L7 Policy** の情報を入力します：

- **Policy name**: ポリシーの名前を入力します。
- **Policy action**: Reject、Redirect to URL、Redirect to pool。
  - **Reject**: 条件に一致したリクエストへのサーバーアクセスを拒否します。
  - **Redirect to URL**: 一致したリクエストを指定の URL に HTTP レスポンスコードとともにリダイレクトします。有効なコード：301、302、303、307、308。
  - **Redirect to pool**: 一致したリクエストを選択した Server Pool に転送します。
- **Position**: ポリシーの優先度。数値が小さいほど優先度が高くなります。

**チェックアイコン**をクリックして L7 Rule を保存するか、**削除アイコン**で削除します。

## 2. L7 ポリシーの更新

L7 Policy 一覧で**鉛筆アイコン**をクリックしてポリシーを編集します。以下を更新できます：

- **Policy name**
- **Policy action**（Reject、Redirect to URL、Redirect to pool）
- **Redirected HTTP code**（Redirect to URL アクションの場合）：301、302、303、307、または 308
- **Position**

**チェックアイコン**をクリックして保存します。

L7 ポリシーの更新後、以下の手順で L7 Rule を追加します：

**手順 1:** ポリシーをクリックして展開します。

**手順 2:** **Add L7 rule** をクリックして以下を入力します：

- **Type**:
  - **Host name**: HTTP/1.1 ホスト名と照合します。
  - **Path**: HTTP URI の一部と照合します。
  - **File**: URI の末尾部分と照合します（例：`.txt`、`.jpg`）。
  - **Header**: キーフィールドで定義されたヘッダーを検索し、値と比較します。
  - **Cookie**: キーフィールドで定義された Cookie を検索し、値と比較します。
- **Compare type**:
  - **Regex**: 正規表現に一致するか。
  - **Equal to**: 指定した文字列と完全一致するか。
  - **Starts with**: 指定した文字列で始まるか。
  - **Ends with**: 指定した文字列で終わるか。
  - **Contains**: 指定した文字列を含むか。
- **Key**: **Header** または **Cookie** タイプの場合 — 比較するヘッダーまたは Cookie のキー。
- **Value**: 比較する値。
- **Invert**: Yes/No — Yes の場合、比較が一致しないときにルール条件が true になります。

**チェックアイコン**をクリックしてルールを保存するか、**削除アイコン**で削除します。

既存の L7 Rule を編集するには、ルールの**鉛筆アイコン**をクリックします。

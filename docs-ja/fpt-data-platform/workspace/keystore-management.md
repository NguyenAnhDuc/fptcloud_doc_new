---
id: "keystore-management"
title: "Keystore Management"
sidebar_label: "Keystore Management"
description: "Keystore Management"
---

# Keystore Management

**Keystore Management** は、Workspace 内でシステムのサービスが使用するキー・シークレット（keys、tokens、credentials）を保存・管理できる機能です。

Keystore は **Workspace 内** に配置することも、外部のキーストレージサービス（例：HashiCorp Vault）と連携することもできます。

### 1\. Keystore リスト

**目的：** 作成済みのすべての Keystore を表示します。

**アクセス：** Data Platform > Workspace Management > Keystore

**画面の表示項目：**

 * **Name** – Keystore の識別名。

 * **Type** – Keystore のタイプ：

   * _Integration_（外部連携、例：HashiCorp Vault）。

   * _In-workspace_（内部ストレージ）。

 * **Vault type** – 外部連携時の Vault タイプ（例：HashiCorp）。

 * **Created at** – Keystore の作成日時。

 * **Action** – 操作メニュー（更新、削除）。

![画像](images/keystore-management/img-001.png)

### 2\. 新規 Keystore の作成

**ステップ 1：** Data Platform > Workspace Management > Keystore に移動します。

**ステップ 2：** **Create** をクリックして **Create keystore** ポップアップを開きます。

#### ケース：Type = Integration（外部 Vault への接続、例：HashiCorp）

**ステップ 3：** **Type** フィールドで **Integration** を選択します。

**ステップ 4：** **Vault type** で使用するシステム（通常は **HashiCorp**）を選択します。

**ステップ 5：** **Name**（識別名）を入力します。

 * 使用できる文字：a–z、A–Z、0–9、ハイフン「-」。先頭は英字。最大 **50** 文字。

 * 推奨命名規則：目的-環境（例：s3-prod）。

**ステップ 6：** **Endpoint**（Vault URL）を入力します。

 * https:// で始まる必要があります。最大 **255** 文字。

 * 英字、数字、「-」、「.」のみ使用可（フォーム上のルールに従う）。

 * 例：[https://vault.example.com](<https://vault.example.com/>)。

**ステップ 7：** **Token** を入力します。

 * Vault アクセストークン（入力時は文字が非表示。表示切替可）。

 * 有効なトークンを使用してください。後でトークンを変更する場合は **Update** を行います。

**ステップ 8：** **Path** と **Key** を入力します。

 * **Path**：Vault 内のシークレットへのパス（最小 1、最大 **255** 文字）。

 * **Key**：パス内のシークレット/キー名（最小 1、最大 **255** 文字）。

 * 例：Path data/lakehouse/s3-key — Key sse-c-key。

**ステップ 9：** **Test connection** をクリックします。

 * **OK** の場合 → **Save** ボタンが有効になります。

 * **Fail** の場合 → Endpoint/Token/Path/Key を確認してください（よくある原因：アクセス権限不足、トークン期限切れ、パス/キーが存在しない、または HTTPS を使用していないエンドポイント）。

**ステップ 10：** **Save** をクリックして作成、または **Cancel** で破棄します。

![画像](images/keystore-management/img-002.png)

#### ケース：Type = In-workspace（Workspace 内にシークレットを保存）

**ステップ 3：** **Type** フィールドで **In-workspace** を選択します。

**ステップ 4：** **Name** を入力します。

 * 上記と同じルール：a–z、A–Z、0–9、「-」。先頭は英字。最大 **50** 文字。

**ステップ 5：** **Value** を入力します。

 * シークレット値（パスワード、token、接続文字列など）。最大 **255** 文字。**特殊文字使用可**（アイコンで表示切替）。

![画像](images/keystore-management/img-003.png)

### 3\. Keystore の更新

**目的：** Endpoint、token、path、または値の内容が変更された場合に、Keystore の設定情報またはシークレット値を変更できます。

**Keystore List** 画面で、編集する Keystore の Action アイコン（三点メニュー）をクリックし、**Update** を選択します。

#### ケース 1 – Type = In-workspace

**手順：**

**ステップ 1：** **Keystore List** 画面で、編集する Keystore の **Actions** ボタン（三点メニュー）をクリックし、**Update** を選択します。

**ステップ 2：** **Update Keystore** ウィンドウが表示され、以下のフィールドが含まれます。

 * **Type：** _In-workspace_ に固定。変更不可。

 * **Name：** Keystore の識別名。読み取り専用、編集不可。

 * **Value：** 保存するシークレット値（最大 255 文字、特殊文字使用可）。

**ステップ 3：** 新しい **Value** を入力します。アイコンをクリックして入力中の値を表示できます。

**ステップ 4：** **Save** をクリックして変更を保存するか、**Cancel** で破棄します。

![画像](images/keystore-management/img-004.png)

#### ケース 2 – Type = Integration

**手順：**

**ステップ 1：** **Keystore List** 画面で、編集する Keystore の **Actions** ボタンをクリックし、**Update** を選択します。

**ステップ 2：** **Update Keystore** ウィンドウが表示され、以下のフィールドが含まれます。

 * **Type：** 常に _Integration_。変更不可。

 * **Vault type：** Vault タイプ（例：HashiCorp）。固定、編集不可。

 * **Name：** 識別名。読み取り専用。

 * **Endpoint：** Vault の新しいエンドポイント URL（https:// で始まる必要があります。最大 255 文字）。

 * **Path：** Vault 内のキーへのパス。

 * **Key：** Vault 内のキー名。

**ステップ 3：** 新しい設定要件に従って **Endpoint**、**Path**、**Key** を入力または更新します。

**ステップ 4：** **Test connection** をクリックして Vault への接続を確認します。

 * 成功した場合 → **Save** ボタンが有効になります。

 * 失敗した場合 → 入力情報を確認してください。

**ステップ 5：** **Save** をクリックして変更を保存するか、**Cancel** で破棄します。

![画像](images/keystore-management/img-005.png)

### 4\. Keystore の削除

**アクセス方法：** Keystore の **Action > Delete** をクリックします。

**手順：**

 1. システムが確認ポップアップを表示します。

 2. 確認フィールドにキーワード **delete** を入力します。

 3. **Confirm** をクリックして削除します。

**条件：**

 * Keystore がサービスで使用中の場合、システムがエラーを表示します。

_"The keystore is in use by: {service_name}"_ と表示され、削除はできません。

![画像](images/keystore-management/img-006.png)

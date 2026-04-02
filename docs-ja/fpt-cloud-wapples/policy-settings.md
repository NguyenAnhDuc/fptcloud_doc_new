---
id: "policy-settings"
title: "Policy Settings"
sidebar_label: "Policy Settings"
sidebar_position: 18
---

# Policy Settings

View Logs の Detection Logs にてブロックまたはログ記録するイベントを選択するために、ポリシーおよびルールを設定するために使用します。 [![file](/img/migrated/image-1714115314016-153567a2.png)](/img/migrated/image-1714115314016-153567a2.png)

主要コンポーネントは以下のとおりです。

**Policy List**: ポリシーに基づいてイベントをブロックまたはログ記録します。WAPPLESには7つの基本ポリシーがあります。

1. **Bypass Without Detection**: イベントを記録しません。
2. **Detect Without Blocking**: ブロックせずにイベントを記録します。
   - Basic Security Policy: 検出後、以下のルールに従ってイベントをブロックします。
     - Directory Listing
     - Invalid HTTP
     - SQL Injection
3. **Standard Security Policy**: 検出後、以下のルールに従ってイベントをブロックします。
   - Cross Site Scripting
   - Directory Listing
   - Directory Traversal
   - Error Handling
   - File Inclusion
   - File Upload
   - Invalid HTTP
   - Invalid URL
   - Request Method Filtering
   - SQL Injection
4. **Advanced & PCI-DSS Security Policy**:
   - 設定に基づいて対応アクションを実行します。
   - 対応するポリシーをクリックすることで特定のルールを確認できます。
   - 設定されたカウンターメジャーに基づいて応答します。
5. **Block All Traffic**:
   - ウェブサイトへのリクエストへの応答をブロックします。
   - リクエストは検出前にブロックされるため、ログは記録されません。

**Rule List**: 選択したポリシーで利用可能なルールとカウンターメジャーを表示します。 [![file](/img/migrated/image-1714115324089-7946dbab.png)](/img/migrated/image-1714115324089-7946dbab.png)

- **Add Policy/Website**: カスタムポリシーを作成したり、各ウェブサイト個別に適用するためにポリシーにウェブサイトを追加したりするには、プラスアイコンをクリックします。
[![file](/img/migrated/image-1714115330781-fdfd7e91.png)](/img/migrated/image-1714115330781-fdfd7e91.png)
  - 既存のポリシーを基にポリシーを作成します。
  - ウェブサイトにポリシーを追加します（特定のサブディレクトリを指定可能）。
  - ポリシーにルールを追加します。 [![file](/img/migrated/image-1714116584852-121d4fcb.png)](/img/migrated/image-1714116584852-121d4fcb.png)

- **Snort** [![file](/img/migrated/image-1714116637131-1a780634.png)](/img/migrated/image-1714116637131-1a780634.png)
  - User-defined を選択します。
  - Rule Name を入力します。
  - Countermeasure を選択します。
  - Risk Level を選択します（Disconnect / Error Code / Page Redirection を選択した場合）。
  - [Security Settings] - [Pattern Storage] - [Snort] で設定済みのルールをアップロードします。
  - Apply を選択し、Save をクリックします。 [![file](/img/migrated/image-1714116644103-e6d7de68.png)](/img/migrated/image-1714116644103-e6d7de68.png)

- **Threat Protection Profile** [![file](/img/migrated/image-1714116657982-729ff395.png)](/img/migrated/image-1714116657982-729ff395.png)
  - Detection または Do Not Detection を選択します。
  - Countermeasure を選択します（Detection を選択した場合）。
  - Risk Level を選択します（Detection / Disconnect / Error Code / Page Redirection を選択した場合）。
  - [Security Settings] - [Security Patch] - [Threat Protection Profile] で設定済みのルールをアップロードします。
  - Apply を選択し、Save をクリックします。

- **Manually Input** [![file](/img/migrated/image-1714116666121-7012fe2f.png)](/img/migrated/image-1714116666121-7012fe2f.png)
  - User-defined を選択します。
  - Rule Name を入力します。
  - Countermeasure を選択します。
  - Risk Level を選択します（Disconnect / Error Code / Page Redirection を選択した場合）。
  - パターンを手動で設定し、Apply を選択して Save をクリックします。

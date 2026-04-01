---
id: "use-with-s3-browser"
title: "S3 Browser での Object Storage の利用"
description: "S3 Browser を使用して FPT Object Storage を利用する手順です。"
sidebar_label: "S3 Browser での利用"
sidebar_position: 11
---

# S3 Browser での Object Storage の利用

FPT Portal での直接利用に加えて、AWS S3 標準に準拠するすべての S3-SDK または S3-Client でログインして利用できます。

以下は **S3 Browser** を使用したガイドです。S3 Browser は直感的な GUI を持つ基本的なクライアントで、最もアクセスしやすいツールです。FPT Cloud は無料・広く普及・フル機能サポートのこのアプリケーションの使用を推奨しています。

他の SDK またはクライアントへの統合ガイドについては、[**FPT Object Storage と S3-Client の統合**](./integrate-s3-clients.md)をご参照ください。

S3 Browser のダウンロードとインストール: <https://s3browser.com/download.aspx>

**S3 Browser** へのログインに必要な情報:

| ログイン情報 | 例 |
| --- | --- |
| Account Name | ユーザー名（任意の名前を選択可） |
| Account Type | S3 Compatible Storage |
| REST Endpoint | FPT Portal で HTTPS ENDPOINT 方式で取得 |
| access key | Admin access key または SubUser access key |
| Secret Access Key | Admin Secret Key または SubUser Secret Key |

## S3 Browser での FPT Object Storage アカウントへのログイン

1. **S3 Browser** アプリケーションの画面で **Accounts** メニューを選択し、**Add new account** を選択します。

[![User guide FPT Object Storage 16](/img/migrated/User-guide-FPT-Object-Storage-16-5946a0ca.png)](/img/migrated/User-guide-FPT-Object-Storage-16-5946a0ca.png)

2. **Add New Account** ポップアップに準備した情報を入力します。**Add new account** を選択します。

[![User guide FPT Object Storage 17](/img/migrated/User-guide-FPT-Object-Storage-17-ebb112ea.png)](/img/migrated/User-guide-FPT-Object-Storage-17-ebb112ea.png)

接続成功後、アプリケーションにストレージ内のすべての **bucket** の一覧が表示されます。

[![User guide FPT Object Storage 18](/img/migrated/User-guide-FPT-Object-Storage-18-d232f82d.png)](/img/migrated/User-guide-FPT-Object-Storage-18-d232f82d.png)

## 新しい bucket の作成

1. **S3 Browser** の画面で **New bucket** を選択します。

[![User guide FPT Object Storage 19](/img/migrated/User-guide-FPT-Object-Storage-19-6d6ada0b.png)](/img/migrated/User-guide-FPT-Object-Storage-19-6d6ada0b.png)

2. 新しい bucket 名を入力し、**Create new bucket** を選択します。

[![User guide FPT Object Storage 20](/img/migrated/User-guide-FPT-Object-Storage-20-8b2e049c.png)](/img/migrated/User-guide-FPT-Object-Storage-20-8b2e049c.png)

## bucket へのファイル/フォルダーのアップロード

1. ファイル/フォルダーをアップロードする位置に移動し、**Upload** を選択します。

[![User guide FPT Object Storage 21](/img/migrated/User-guide-FPT-Object-Storage-21-b64dc351.png)](/img/migrated/User-guide-FPT-Object-Storage-21-b64dc351.png)

2. **Upload file** または **Upload folder** を選択します。

[![User guide FPT Object Storage 22](/img/migrated/User-guide-FPT-Object-Storage-22-ee46882a.png)](/img/migrated/User-guide-FPT-Object-Storage-22-ee46882a.png)

3. ローカルからファイル/フォルダーを選択して S3 bucket へのアップロードを実行します。

[![User guide FPT Object Storage 23](/img/migrated/User-guide-FPT-Object-Storage-23-715159a2.png)](/img/migrated/User-guide-FPT-Object-Storage-23-715159a2.png)

アップロード成功後、ファイル/フォルダーが **S3 Browser** に表示されます。

[![User guide FPT Object Storage 24](/img/migrated/User-guide-FPT-Object-Storage-24-11eea5f0.png)](/img/migrated/User-guide-FPT-Object-Storage-24-11eea5f0.png)

## bucket からのファイル/フォルダーのダウンロード

1. 一覧でダウンロードするファイル/フォルダーを選択し、**Download** を選択します。

[![User guide FPT Object Storage 25](/img/migrated/User-guide-FPT-Object-Storage-25-bc174a18.png)](/img/migrated/User-guide-FPT-Object-Storage-25-bc174a18.png)

2. S3 bucket からダウンロードした**ファイル/フォルダー**を保存するローカルのフォルダーを選択し、**Select Folder** を選択して確認します。

[![User guide FPT Object Storage 26](/img/migrated/User-guide-FPT-Object-Storage-26-dbef0261.png)](/img/migrated/User-guide-FPT-Object-Storage-26-dbef0261.png)

## bucket の versioning 機能を有効にする

**Versioning** は **FPT Object Storage** で同じ object の複数のバリアント（バージョン）を保存・管理する機能です。bucket に保存されているすべての object のすべてのバージョンを保存・取得・復元できます。

1. **S3 Browser** の画面で Versioning を有効にする bucket を選択し、**Edit Versioning Settings** を選択します。

[![User guide FPT Object Storage 27](/img/migrated/User-guide-FPT-Object-Storage-27-29308078.png)](/img/migrated/User-guide-FPT-Object-Storage-27-29308078.png)

2. **Enable versioning for new-bucket** にチェックを入れ、**OK** を選択して設定を保存します。

[![User guide FPT Object Storage 28](/img/migrated/User-guide-FPT-Object-Storage-28-2a0c389a.png)](/img/migrated/User-guide-FPT-Object-Storage-28-2a0c389a.png)

## 削除されたファイルの復元

**Versioning** を有効にすると、ファイルの変更を引き起こすすべての操作（**削除**を含む）が保存・番号付けされます。ファイルを復元するには、Version リストで**削除**マークの付いたバージョンを削除するだけです。ファイルは削除前の通常のバージョンにロールバックされます。

1. **Versioning** 機能が有効な bucket に任意のファイルをアップロードし、**Delete** を選択して削除します。
2. Versions タブで最新バージョンに **(delete)** マークが付いていることを確認します。そのバージョンを選択して **Delete** を選択します。

[![User guide FPT Object Storage 29](/img/migrated/User-guide-FPT-Object-Storage-29-6f9195da.png)](/img/migrated/User-guide-FPT-Object-Storage-29-6f9195da.png)

ファイルが復元されます。

[![User guide FPT Object Storage 30](/img/migrated/User-guide-FPT-Object-Storage-30-3bc28457.png)](/img/migrated/User-guide-FPT-Object-Storage-30-3bc28457.png)

## ファイルの旧バージョンのダウンロード

**Versioning** が有効な場合、以下の手順でファイルの旧バージョンをダウンロードできます。

1. **S3 Browser** の画面で旧バージョンをダウンロードするファイルを選択します。
2. **Versions** タブを開き、ダウンロードするバージョンを選択します。
3. **Download** を選択し、ローカルでの保存場所を選択して **Select Folder** を選択します。

## bucket lifecycle 機能の設定

**Bucket Lifecycle** 機能は、**Storage** から 1 つのファイル、ファイルグループ、またはファイルのバージョンを一定期間後に自動削除します。不要なファイルやバージョンを削除することで、ストレージリソースとコストを大幅に節約できます。

1. **S3 Browser** の画面で Bucket Lifecycle を有効にする bucket を選択し、**Lifecycle Configuration** を選択します。

[![User guide FPT Object Storage 31](/img/migrated/User-guide-FPT-Object-Storage-31-efabe217.png)](/img/migrated/User-guide-FPT-Object-Storage-31-efabe217.png)

2. **Bucket Lifecycle Rules** ポップアップで **Add** を選択して新しいルールを追加します。

[![User guide FPT Object Storage 32](/img/migrated/User-guide-FPT-Object-Storage-32-1024x69-2cf67180.png)](/img/migrated/User-guide-FPT-Object-Storage-32-1024x69-2cf67180.png)

3. **Add New Lifecycle Rule** ポップアップで 2 つのタブに注意します。
   - **Action for current versions:** ファイルの現在バージョンに適用するアクション。
   - **Action for noncurrent versions:** ファイルの旧バージョンに適用するアクション。

   ニーズに応じて対応するタブを開き、**Expiration** セクションで **Permanently delete files** を選択します。

[![User guide FPT Object Storage 33](/img/migrated/User-guide-FPT-Object-Storage-33-57db54f0.png)](/img/migrated/User-guide-FPT-Object-Storage-33-57db54f0.png)

4. 削除モードを選択します。
   - **After specific number of days after creation:** 作成後の指定日数が経過したらファイルを削除します。
   - **On a particular date (UTC Midnight):** 特定の日付（UTC 時間）にファイルを削除します。

[![User guide FPT Object Storage 34](/img/migrated/User-guide-FPT-Object-Storage-34-b83c13b0.png)](/img/migrated/User-guide-FPT-Object-Storage-34-b83c13b0.png)

5. 削除モードに応じて日数または特定の日付を入力し、**Add new rule** を選択します。

[![User guide FPT Object Storage 35](/img/migrated/User-guide-FPT-Object-Storage-35-f158dc30.png)](/img/migrated/User-guide-FPT-Object-Storage-35-f158dc30.png)

6. 同様に他のルールを追加します。すべてのルールの設定が完了したら **Save** を選択します。

[![User guide FPT Object Storage 36](/img/migrated/User-guide-FPT-Object-Storage-36-1024x47-8379d63a.png)](/img/migrated/User-guide-FPT-Object-Storage-36-1024x47-8379d63a.png)

## bucket ACL 機能の設定

**Bucket ACL**（Access Control List）はグループと object へのアクセス権を管理する機能です。

[![User guide FPT Object Storage 37](/img/migrated/User-guide-FPT-Object-Storage-37-51971e9e.png)](/img/migrated/User-guide-FPT-Object-Storage-37-51971e9e.png)

**Bucket ACL** は Full Control、Read、Write、Read Permissions、Write Permissions の権限を持つ 3 種類の基本ユーザーをサポートしています。以下の 2 種類の ACL から素早く選択できます。

- **Make public:** すべてのユーザーが Read 権限で bucket にアクセスできます。
- **Make private:** オーナーのみが bucket を操作できます。

[![User guide FPT Object Storage 38](/img/migrated/User-guide-FPT-Object-Storage-38-c1590c92.png)](/img/migrated/User-guide-FPT-Object-Storage-38-c1590c92.png)

## 静的ウェブサイトとしての bucket の使用

bucket を静的ウェブサイトとして使用する機能により、インターネットに公開して **S3 WEBSITE ENDPOINT** でアクセスできる静的ウェブサイトを作成できます。

1. ウェブサイトのソースをすべて S3 bucket にアップロードします。

[![User guide FPT Object Storage 39](/img/migrated/User-guide-FPT-Object-Storage-39-abc69018.png)](/img/migrated/User-guide-FPT-Object-Storage-39-abc69018.png)

2. Static website として設定する bucket を選択し、**Edit Website Configuration** を選択します。

[![User guide FPT Object Storage 40](/img/migrated/User-guide-FPT-Object-Storage-40-2ed8a153.png)](/img/migrated/User-guide-FPT-Object-Storage-40-2ed8a153.png)

3. **Enable static website hosting** を選択し、bucket にアップロードしたソースの **Index document** と **Error document** を指定します。

[![User guide FPT Object Storage 41](/img/migrated/User-guide-FPT-Object-Storage-41-a3d5f504.png)](/img/migrated/User-guide-FPT-Object-Storage-41-a3d5f504.png)

4. **Permissions** を選択し、bucket に対してすべてのユーザーの Read 権限を設定します。

[![User guide FPT Object Storage 42](/img/migrated/User-guide-FPT-Object-Storage-42-3a759306.png)](/img/migrated/User-guide-FPT-Object-Storage-42-3a759306.png)

5. **Object Storage Management** の **Endpoint** セクションに表示された S3 WEBSITE ENDPOINT リンクで静的ウェブにアクセスします。

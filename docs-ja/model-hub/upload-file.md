---
id: "upload-file"
title: "ファイルのアップロード"
description: "model version にあらゆる形式のファイルを追加でアップロードします。"
sidebar_label: "ファイルのアップロード"
sidebar_position: "12"
---

# ファイルのアップロード

model version にあらゆる形式のファイルを追加でアップロードします。

## 手順

1. model をクリックして詳細を表示し、**Version** タブを選択します。

2. **Action** 列の 3 点アイコンをクリックし、**Upload** を選択します。
[![](/img/migrated/Picture20-1fbfb321.png)](/img/migrated/Picture20-1fbfb321.png)

3. CLI 経由でファイルをアップロードするための認証情報が生成されます。
[![](/img/migrated/anh-2-0bfbc3c3.png)](/img/migrated/anh-2-0bfbc3c3.png)

4. **Configuration** メニューに移動し、**Access Key** と **Secret Key** を取得します。
[![](/img/migrated/anh-3-dc5c31ee.png)](/img/migrated/anh-3-dc5c31ee.png)
[![](/img/migrated/anh-4-1295fdc8.png)](/img/migrated/anh-4-1295fdc8.png)

## WinSCP（S3 Client）を使用したアップロード

1. WinSCP をインストールして開きます。

2. 以下の情報を入力してログインします。
[![](/img/migrated/Picture22-c505575f.png)](/img/migrated/Picture22-c505575f.png)
   - **File protocol**: Amazon S3
   - **Encryption**: TLS/SSL Implicit encryption
   - **Host name**、**Access key ID**、**Secret access key**: Configuration メニューの値を使用します。
   - **Port**: 443

[![](/img/migrated/Screenshot_19-91b976ba.png)](/img/migrated/Screenshot_19-91b976ba.png)

WinSCP へのログインが成功すると、ファイルのアップロードや model に保存されたファイルの管理を直接行えます。

ポータル上では、S3 Client からアップロード後、ファイルが **File Browser** タブの対応する version に表示されます。

**File Browser** タブに切り替え、対応する version を選択してファイルの表示、ダウンロード、削除を行います。
[![](/img/migrated/Picture24-50266ec8.png)](/img/migrated/Picture24-50266ec8.png)

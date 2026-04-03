---
id: "manage-bucket"
title: "bucket の管理"
description: "FPT Object Storage で bucket の作成・削除・空にする操作およびフォルダーの追加を行う手順です。"
sidebar_label: "bucket の管理"
sidebar_position: "4"
---

# bucket の管理

**bucket** は FPT Object Storage における論理的なストレージ単位で、データファイル・画像・動画・ドキュメントなどの object を格納するために使用します。bucket の一覧を確認するには、[Object Storage Management](https://console.fptcloud.com/) にアクセスし、Project を選択して **Buckets** タブを選択します。

- **複数の bucket を作成:** 各 FPT Object Storage アカウントはニーズに応じてデータを整理するための複数の bucket を作成できます。
- **ACL とアクセス権の設定:** 各 bucket にはアクセス制御のための個別の ACL（Access Control List）設定を行えます。
- **ファイル種類の制限なし:** 制限なく任意の種類のファイルをアップロードできます。

## bucket の作成

1. [https://console.fptcloud.com](https://console.fptcloud.com) の **Object Storage Management** にアクセスし、**Buckets** タブを選択します。
2. **Create Bucket** をクリックします。
3. 新しい **bucket** 名を入力し、リストから **Region** を選択します。**Advanced setting** では以下の設定が可能です。
   - **Bucket ACL** を選択します: アクセス権管理のため **Public** または **Private**。
   - **Bucket Versioning** を選択します: object のバージョン管理のため **Disable** または **Enable**。
4. 完了すると、新しい bucket が **Object Storage Management** に表示されます。

## bucket の削除

:::warning
bucket を削除すると、内部のすべての object が削除され、復元できません。
:::

1. **Object Storage Management** にアクセスし、**Buckets** タブを選択します。
2. 削除する bucket の **Action** で **Delete** を選択します。
3. 警告ダイアログで削除操作を確認します。

## bucket を空にする（Empty bucket）

Empty Bucket 機能は、Permission や Policy などの設定情報を保持したまま、bucket 内のすべてのデータを削除します。

:::note
処理時間は object の数によって異なります。object が 1000 件を超える bucket の場合は、Delete Bucket 機能の使用をご検討ください。
:::

1. **Empty Bucket** アクションを選択します。
2. 警告ポップアップで削除操作を確認します。

## bucket 内への新しいフォルダーの追加

Object Storage の非構造化モデルでは、従来の意味での **フォルダー** という概念はありません。**bucket** と **object** のみが存在します。ただし FPT Portal では、同じパスの object をフォルダーとしてグループ化して表示します。

例えば、**bucket_name/folder-1/object-1.txt** と **bucket_name/folder-1/object-2.txt** という 2 つの object がある場合、FPT Portal はそれらを **folder-1** フォルダー内に表示します。

1. **Object Storage Management** にアクセスします。
2. フォルダーを追加する位置に移動し、**New folder** を選択します。
3. 新しいフォルダー名を入力して **Create** を選択します。

## bucket の検索

1. **Search** ボックスに検索内容を入力します。
2. **Enter** キーを押して bucket 名で検索します。

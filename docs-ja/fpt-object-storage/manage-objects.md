---
id: "manage-objects"
title: "object の管理"
description: "FPT Object Storage での object のアップロード・ダウンロード・コピー・移動・削除の手順です。"
sidebar_label: "object の管理"
sidebar_position: 5
---

# object の管理

FPT Object Storage の各 object はデータファイルを表します。システムはファイル形式に制限を設けておらず、テキスト・画像・音声・動画からアプリケーション固有の形式まで、あらゆる種類のファイルを保存できます。

- **メタデータとタグ:** 各 object にはコンテンツを説明するメタデータとタグを付加でき、管理・検索が容易になります。
- **アクセス権の制御:** 各 object へのアクセス権は ACL または bucket policy で制御できます。
- **Versioning:** FPT Object Storage は object の複数バージョンの保存をサポートしており、必要に応じて以前のバージョンの保持・復元が可能です。

## bucket への新しい object のアップロード

**FPT Unify Portal** は 1 回のアップロードで最大 100 GB までサポートしています。それより大きなファイルをアップロードする場合は、S3 Client Tool や S3 SDK/CLI をご使用ください。

:::note
既存のファイルと同名のファイルをアップロードすると、上書き警告が表示されます。versioning が無効の場合、ファイルは古いファイルを上書きします。versioning が有効の場合、システムは新しいバージョンを作成します。
:::

1. **Object Storage Management** で、ファイルを追加する位置に移動し、**Upload object** を選択します。
2. デバイスからファイルを選択し、**Upload** を選択します。

## object のダウンロード

1. **Object Storage Management** でダウンロードするファイルの位置に移動します。
2. ファイル名をクリックすると、システムが自動的にファイルをデバイスにダウンロードします。

## Presigned URL の生成

Presigned URL は一時的なアクセスリンクで、bucket の権限設定を変更することなく、特定の object への共有アクセスを可能にします。有効期限が設定され、指定した時間後に自動的に無効になります。

1. **Object Storage Management** で Presigned URL を作成するファイルの位置に移動します。
2. object の **Action** で **Generate Presigned URL** を選択します。
3. URL の有効期限（数分から数日）を選択し、**Generate** をクリックします。
4. 表示された URL をコピーして共有します。有効期限が切れると URL は無効になります。

## object のコピー

object のコピーにより、元のデータを変更または消失させることなく FPT Object Storage 内でデータを複製できます。

1. **Object Storage Management** でコピーするファイルの位置に移動します。
2. object の **Action** で **Copy** を選択します。
3. 移動先の **bucket** と必要に応じて **Folder** を選択し、**Confirm** を選択します。

## object の移動

object の移動は、object をある位置から別の位置に移動するプロセスです。新しい位置に object をコピーした後、元の位置から削除します。

1. **Object Storage Management** で移動するファイルの位置に移動します。
2. object の **Action** で **Move** を選択します。
3. 移動先の **bucket** と必要に応じて **Folder** を選択し、**Confirm** を選択します。

## object の URL のコピー

object の URL を取得してウェブサイトへのリンクに使用したり共有したりできます。object を GET するには、object またはそれを含む bucket がパブリックモードである必要があります。

1. **Object Storage Management** でファイルの位置に移動します。
2. **Action** で **Copy URL** を選択します。

## object の削除

:::note
versioning が有効でない場合、object を削除すると永久に削除され復元できません。versioning が有効の場合、システムは完全に削除するかわりに「delete marker」を作成します。以前のバージョンは引き続き存在し、復元できます。

ポータルからの削除操作は 50 GB 未満のファイルにのみ適しています。
:::

1. **Object Storage Management** で削除するファイルの位置に移動します。
2. **Action** で **Delete** を選択します。
3. 警告ダイアログで削除操作を確認します。

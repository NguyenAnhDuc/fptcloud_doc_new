---
id: "create-tag-new"
title: "タグの作成"
description: "新しいtagを作成してリソースを目的・環境・所有者別に分類します。"
sidebar_label: "タグの作成"
sidebar_position: 1
---

# タグの作成

tagを作成すると、リソースを目的、環境、所有者別に分類でき、リソースの管理と検索が迅速になります。

## 前提条件

- ✅ [FPT Cloud Portal](https://console.fptcloud.com/) にログイン済みであること。
- ✅ TenantまたはVPCでのtag作成権限を所有していること。

## タグの作成手順

1. 左メニューから **Tagging** を選択し、**Create tag** をクリックします。

   [![Create tagボタンのあるTagging画面](/img/migrated/image-1740551689064-5838a863.png)](/img/migrated/image-1740551689064-5838a863.png)

2. 以下の情報を入力します:
   - **Key**: tagキー名を入力します。例: `Env`、`Project`。
   - **Value**: tagの値を入力します。例: `Production`、`FPT`。空欄にすることも可能です。
   - **Color**: tagの色を選択します。現在、赤・黄・緑の3色に対応しています。デフォルトは白です。
   - **Tenantレベルのtag権限を持つユーザーの場合**: tagはすべてのVPCに適用されます。特定のVPCにtagを作成するには、**Enable customize VPC** を選択してリストからVPCを選択します。
   - **VPCレベルのtag権限を持つユーザーの場合**: 委任されたVPCリストからVPCを選択します。tagは選択したVPCに適用されます。

   [![Tag LevelとResource Scopeフィールドのあるタグ作成ダイアログ](/img/migrated/image-1740551705309-e51d222f.png)](/img/migrated/image-1740551705309-e51d222f.png)

3. **Create** をクリックしてtagを作成します。

新しいtagがTaggingページのリストに表示されます。

[![作成成功後のtagリスト](/img/migrated/image-1740551792619-5d66ac78.png)](/img/migrated/image-1740551792619-5d66ac78.png)

## 次のステップ

- [タグの編集](./edit-tag.md)
- [リソースのタグ管理](../tutorials/manage-tag-to-resource/resource-1.md)

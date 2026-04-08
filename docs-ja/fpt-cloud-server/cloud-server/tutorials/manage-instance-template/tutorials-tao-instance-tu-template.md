---
id: "tutorials-tao-instance-tu-template"
title: "TemplateからInstanceを作成する"
description: "FPT Cloud上の既存のTemplateから新しい仮想マシンを作成します。"
sidebar_label: "TemplateからInstanceを作成する"
sidebar_position: 4
---

# TemplateからInstanceを作成する

Templateから仮想マシンを作成することで、事前に準備済みの構成で素早くデプロイできます。

## Instanceを作成する

1. **Custom Images** ページで、対象のTemplate上の **Actions** → **Create Instance** を選択します。

   [![Create InstanceオプションのあるActionsメニュー](/img/migrated/image-1715856847338-4cbbe896.png)](/img/migrated/image-1715856847338-4cbbe896.png)

:::note
**Success** ステータスのTemplateのみInstanceの作成に使用できます。
:::

2. Instanceの情報を入力します。

   [![TemplateからのCreate Instanceダイアログ](/img/migrated/image-1744797552995-eb6de7b6.png)](/img/migrated/image-1744797552995-eb6de7b6.png)

:::warning
Instanceのストレージ容量はイメージサイズより大きくする必要があります。
:::

3. **Create Instance** をクリックし、**Instances** ページで進捗を確認します。

## 次のステップ

- [Templateを削除する](/docs/ja/fpt-cloud-server/cloud-server/tutorials/manage-instance-template/tutorials-xoa-template)

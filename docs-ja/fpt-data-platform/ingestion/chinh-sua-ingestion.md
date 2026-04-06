---
id: "chinh-sua-ingestion"
title: "Ingestion の編集"
sidebar_label: "Ingestion の編集"
description: "Ingestion の編集"
---

# Ingestion の編集

**Ingestion service** の情報を編集するには、以下の手順に従ってください。

**ステップ 1:** メニューバーで **Data Platform** > **Workspace Management** > **Workspace name** を選択します。

:::warning
メニューバーで Data Platform > Ingestion service を選択することで、Ingestion service に直接アクセスすることもできます。
:::

**ステップ 2:** **My Service** セクションで **Ingestion Service** を選択します。**Detail Ingestion Service** 画面で、更新したいセクションの **Edit** アイコンをクリックします。

  * **Instance Information** の更新:

    * **Instance Information** の編集画面が表示され、以下の情報を変更できます。

    * **Name**（必須）: サービス名

:::warning
サービス名は 1〜30 文字である必要があります。小文字 a-z、大文字 A-Z、数字 0-9 を使用できます。
:::

    * **Description**（任意）: サービスの説明

![画像](images/chinh-sua-ingestion/img-001.png)

  * **Node Configuration** の更新:

    * **Node Configuration** の編集画面が表示され、以下の情報を変更できます。

    * **Type**: サービスの設定タイプを選択します。

    * **Number of node:** 適切なノード数を選択します。

:::warning
ノード数は 1 以上 10 以下である必要があります。
:::

    * **Storage policy**: ストレージポリシーを選択します。

    * **Disk (GB)**: ディスクサイズを入力します。

:::warning
ディスクサイズは 100 以上 1000 以下である必要があります。
:::

![画像](images/chinh-sua-ingestion/img-002.png)

**ステップ 3:** **Save** をクリックして完了します。

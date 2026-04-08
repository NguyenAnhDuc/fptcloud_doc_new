---
id: "quan-ly-compute"
title: "Compute の管理"
sidebar_label: "Compute の管理"
description: "Compute の管理"
sidebar_position: 5
---

# Compute の管理

**Compute 一覧**を確認するには、以下の手順に従ってください。

**ステップ 1:** メニューバーで **Data Platform** > **Workspace Management** > **Workspace name** を選択します。

**ステップ 2:** **My Services** セクションで **Processing** service を選択し、**「Compute」タブ** を選択します。

**Compute 一覧** — Processing Service 内で作成された Compute の一覧が表示され、以下の操作が可能です。

  * Compute 名、GPU タイプ、リソース設定（Resource type）を確認する

  * **Create** ボタンで新しい Compute を作成する

  * **Actions** メニューから Compute に対する操作を実行する

  * **制限:** 各 Processing Service で作成できる Compute は最大 **5 件** です。

### 1\. Compute の作成

**Compute** を作成するには、以下の手順に従ってください。

**ステップ 1:** **Processing** services 画面で Compute タブを選択します。

**ステップ 2:** Compute タブで **Create** をクリックし、**Create Services** ポップアップを表示します。

**ステップ 3:** **Compute service** 作成フォームに情報を入力します。

  * **Instance type = General**

以下の情報を入力します。

    * **Name**（必須）: Compute 名

注意: Compute 名には小文字 a-z、大文字 A-Z、数字 0-9 を使用できます。スペースは使用できません — 代わりに「-」または「_」を使用してください。

    * **Storage policy**: Storage policy を選択します。

    * **Disk size**: ディスク設定サイズを選択します（Disk >= 40）。

    * **Type**: フレーバーを選択します。

    * **Number of nodes**: ノード数を入力します。

:::warning
ノード数は 1 以上 10 以下である必要があります。
:::

![画像](images/quan-ly-compute/img-001.png)

  * **Instance type = GPU**

以下の情報を入力します。

    * **Name**（必須）: Compute 名

注意: Compute 名には小文字 a-z、大文字 A-Z、数字 0-9 を使用できます。スペースは使用できません — 代わりに「-」または「_」を使用してください。

    * **GPU type**（GPU を選択した場合は必須）

    * **GPU driver installation type**（必須）: ドライバーインストールタイプを選択します。

    * **Select a driver version**（必須）: ドライバーバージョンを選択します。

    * **GPU sharing type**（必須）: GPU 共有タイプを選択します。

    * None を選択した場合、**GPU sharing client** の入力欄は**表示されません**。

    * None 以外を選択した場合、**GPU sharing client** の入力欄が**表示されます**。

    * **Policy**（必須）: ポリシーを選択します。

    * **Storage policy**: Storage policy を選択します。

    * **Disk size**: ディスク設定サイズを選択します（Disk >= 40）。

    * **Type**: フレーバーを選択します。

    * **Number of nodes**: ノード数を入力します。

:::warning
ノード数は 1 以上 10 以下である必要があります。
:::

![画像](images/quan-ly-compute/img-002.png)

**ステップ 4.** 入力した情報を確認し、**Create** をクリックして Compute の作成を完了します。

### 2\. Compute の削除

**ステップ 1:** **Processing** services 画面で Compute タブを選択します。

**ステップ 2:** **Compute** タブで削除する Compute の **Action** をクリックし、**Delete** を選択します。

![画像](images/quan-ly-compute/img-003.png)

**ステップ 3.** **Delete Application** ダイアログが表示されます。「**delete**」と入力し、**confirm** をクリックして、ワークスペースからサービスの削除を完了します。

![画像](images/quan-ly-compute/img-004.png)

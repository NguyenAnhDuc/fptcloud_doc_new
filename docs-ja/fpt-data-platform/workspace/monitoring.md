---
id: "monitoring"
title: "Monitoring"
sidebar_label: "Monitoring"
description: "Monitoring"
---

# Monitoring

### 1. Monitoring Workspace への接続

Monitoring Workspace と連携するには、以下の手順に従ってください。

**ステップ 1：** Workspace の詳細画面で **Monitoring** タブに切り替えます。

**ステップ 2：** Monitoring Workspace の情報テーブルで以下の項目を確認します。

 * **ID**：Workspace の ID

 * **Workspace name**：Workspace 名

 * **URL**：Monitoring Dashboard へのアクセス URL

 * **Datasource type**：データソースのタイプ（Metric）

 * **Datasource status**：データソースのステータス（Activating、Active、Active Failed、Inactive、Deactivate Failed）

 * **Integrated status**：連携ステータス（Enabled/Disabled）

**ステップ 3：** Action 列の **Integrate** ボタンをクリックします。

**ステップ 4：** システムが Monitoring Workspace との接続を確立します。

![画像](images/monitoring/img-001.png)

### 2\. Monitoring Dashboard の設定と使用

連携が成功したら、Monitoring Dashboard を表示・設定するには以下の手順に従ってください。

**A. Monitoring Dashboard へのアクセス**

**ステップ 1：** Workspace の **Monitor** タブで、Monitoring Workspace 情報テーブルの **URL** をクリックします。

**ステップ 2：** システムが新しいタブで Monitoring Dashboard を開きます。

**B. Dashboard テンプレートのインポート**

**ステップ 3：** Monitoring Dashboard で左メニューを選択し、**Dashboards** を選択します。

**ステップ 4：** **New** をクリックし、**New folder** を選択します。

**ステップ 5：** フォルダ名を入力します（例：「Workspace Monitoring」）。**Create** をクリックします。

**ステップ 6：** 作成したフォルダに移動し、**New** をクリックして **Import** を選択します。

 * [テンプレートリンク](<https://fptsoftware362.sharepoint.com/:f:/r/sites/FCI_CLOUD/XPLAT/Shared%20Documents/PRODUCT/FDP%20\(Data%20Platform\)/Documentation/4.%20User%20Guide/Template?csf=1&web=1&e=G2aD50>)

**ステップ 7：** Import Dashboard 画面で：

 * **Upload JSON file** をクリックするか、Dashboard テンプレートファイルをドラッグ＆ドロップします。

 * Dashboard テンプレートファイルはシステムから提供されます（.json 形式）。

**ステップ 8：** アップロード成功後：

 * Dashboard の情報（Name、UID、Folder）を確認します。

 * 連携済みの API Gateway に対応する **Datasource** を選択します。

 * **Import** をクリックして完了します。

**ステップ 9：** Dashboard が作成され、サービスのメトリクスが表示されます。

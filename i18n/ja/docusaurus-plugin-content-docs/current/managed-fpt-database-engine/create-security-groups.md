---
id: "create-security-groups"
title: "セキュリティグループの作成"
description: "Database Engine 用のセキュリティグループを作成する手順。"
sidebar_label: "セキュリティグループの作成"
sidebar_position: 3
draft: true
---

# セキュリティグループの作成

1. **Menu** バー > **Networking** > **Security Group** を選択します。
[![](/img/migrated/B1cua-6.1-a6dd8ad4.png)](/img/migrated/B1cua-6.1-a6dd8ad4.png)
2. **Create Security Group** をクリックします。**Create Security Group** 画面が表示されます。
[![](/img/migrated/B2cua-6.1-db433c04.png)](/img/migrated/B2cua-6.1-db433c04.png)

以下の情報を入力します。
- **Name:** 管理しやすいグループ名を入力します。デフォルトではシステムが自動的に設定します。
- **Subnet:** リストから選択します。作成時に選択した Database に対応するレンジを選択してください。
- **Applied instances:** 適用するサーバーを選択します。
- **Inbound Rules:**
  - **Type:** データベースの種類を選択します。**All ports** ですべてのポートを開放、**Customize ports** で特定のポートまたはポート範囲を開放できます。SSH、RDP、MySQL、HTTP、HTTPS などのよく使用されるサービスのポートも提案されます。
  - **Protocol:** リストから選択します。
  - **Port:** 開放するポート番号を入力します。
  - **Action:** リストから選択します。
  - **Source:** このポートに接続できるインターネット上の IP を Source フィールドに入力します。All を選択するとすべて許可、MyIP で現在のマシンの IP を許可、または特定の IP を直接入力できます。
  - **Description:** 説明を入力します。
- **Add rule** を選択して新しいルールを追加します。

3. **Create Security group** をクリックします。security group が **Active** ステータスになるまで 1〜2 分待ちます。
[![](/img/migrated/B3-cua6.1-c5041ca1.png)](/img/migrated/B3-cua6.1-c5041ca1.png)

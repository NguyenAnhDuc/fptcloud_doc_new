---
id: "create-vpc"
title: "VPCを作成する"
description: "FPT Cloud Portalで新しいVPCを作成するガイドです。"
sidebar_label: "VPCを作成する"
sidebar_position: 1
---

# VPCを作成する

新しいVPCを作成するには、Tenant Owner権限でサインインする必要があります。

1. **VPCs** → **Create VPC** を選択します。

   ![Create VPCボタンのあるVPC一覧ページ](/img/migrated/image-1744258756717-b8306892.png)

2. 以下の情報を入力します：
   - **VPC Name**: VPC名。10文字以上50文字以下。大文字、数字、ダッシュ、アンダースコアを含むことができます。小文字は自動的に大文字に変換されます。
   - **VPC owner**: VPC Owner権限を付与するアカウントを選択します。デフォルトでは現在のアカウントが選択されています。
   - **Network setting**（任意）: Subnet情報を設定します。VPC作成後にも設定可能です。
     - **Name**: サブネットの名前。
     - **Type**: 現在はRoutedとIsolatedの2タイプをサポート。
     - **Network Address (CIDR)**: 有効なCIDRを入力。
     - **Gateway IP**: 有効なゲートウェイIPアドレスを入力。
     - **Static IP Pool**（任意）: 使用するIP範囲を入力。未指定の場合はCIDRから全IPを取得。

   ![VPC作成フォーム](/img/migrated/image-1744258458944-38445575.png)

3. **Create VPC** をクリックします。システムが初期化を行い、結果を通知します。

   ![VPC作成成功](/img/migrated/image-1744258774497-f77ee8ce.png)

新しいVPCが **VPCs** ページに表示されます。

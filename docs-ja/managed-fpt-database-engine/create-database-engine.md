---
id: "create-database-engine"
title: "Database Engine の作成"
description: "FPT Smart Cloud Database Engine で新規データベースを作成する手順。"
sidebar_label: "Database Engine の作成"
sidebar_position: 9
---

# Database Engine の作成

:::note
実行前の必須条件:
- FPT Portal へのログイン済みであること。
- 適切な Tenant、Region、VPC が選択されていること。
- 必要なクォータ（CPU、RAM、Storage）が確保されていること。
:::

1. メニューから **Database Engine** を選択します。
2. **Create** をクリックします。
3. データベースの種類（MySQL、SQL Server、MongoDB、MariaDB、PostgreSQL、Redis）を選択します。
4. 以下の情報を入力します。
   - **Name:** データベースクラスター名を入力します。
   - **Version:** データベースのバージョンを選択します。
   - **Configuration:** CPU、RAM、Disk の構成を選択します（Preset または Custom）。
   - **Network:** 使用する subnet を選択します。
   - **Security Group:** 適用する security group を選択します。
5. 設定内容を確認し、**Create** をクリックします。
6. システムがリソースを確認し、Database Engine の作成を開始します。作成完了後、ステータスが **Running** に変わります。

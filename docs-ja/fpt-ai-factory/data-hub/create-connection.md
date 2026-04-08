---
id: "create-connection"
title: "接続の作成"
description: "Data HubでObject Storageへの接続を作成します。"
sidebar_label: "接続の作成"
sidebar_position: 3
---

# 接続の作成

Data HubをFPT Object Storageに接続してデータセットを管理します。

1. [FPT Cloud Console](https://console.fptcloud.com/) でObject Storage管理にアクセスし、**Buckets** タブを選択して **Create Bucket** をクリックします。
2. 新しいオブジェクトをバケットにアップロードします。
3. **Data Hub** サービスにアクセスし、**Connection List** に移動して **Create Connection** をクリックします。

[![接続の作成](/img/migrated/image-1742974995525.33.34-760613b1.png)](/img/migrated/image-1742974995525.33.34-760613b1.png)

4. 接続情報を入力します。

[![接続情報の入力](/img/migrated/image-1742975565417.51.05-8588afb6.png)](/img/migrated/image-1742975565417.51.05-8588afb6.png)

   - **Name**: 接続名（使用可能文字: a–z、0–9、ハイフン。文字数: 3〜64文字）
   - **Data Source**: 接続を有効にするデータソースを選択します。
   - **Endpoint URL**: バケットのエンドポイントアドレス（例: `https://test-bucket-name.s3-han02.fptcloud.com`）
   - **Access Key** と **Secret Key**: アクセス認証情報

5. **Save** をクリックして接続を作成します。

---
id: "tao-moi-robot-account"
title: "Robot account を管理する"
description: "CI/CD パイプライン統合のための robot account を作成・管理する。"
sidebar_label: "Robot account を管理する"
sidebar_position: "8"
---

# Robot account を管理する

Robot account は、CI/CD パイプラインや自動化システムでの認証に使用するサービスアカウントです。ユーザーアカウントを共有する代わりに、robot account を使用することで権限を細かく制御し、セキュリティを強化できます。

## Robot account を作成する

Robot account を作成するには、事前に pull/push の権限を設定します。作成後は token が一度だけ表示されます。

1. サイドバーメニューで **Container Registry** を選択し、**Robot Account** タブを開きます。

   [![Robot Account タブ](/img/migrated/Picture59-8e6c388e.png)](/img/migrated/Picture59-8e6c388e.png)

2. **NEW ROBOT ACCOUNT** を選択して情報を入力します。

   [![Robot account の作成フォーム](/img/migrated/Picture60-4718d2bb.png)](/img/migrated/Picture60-4718d2bb.png)

   | フィールド | 説明 |
   |---|---|
   | **Name** | Robot account 名 |
   | **Expiration time** | Token の有効期限（日数指定または無期限） |
   | **Description** | 用途の説明 |
   | **Permissions** | pull および/または push の権限 |

3. 作成後、**Username** と **Token** が表示されます。**Export to File** またはコピーで保存します。

   [![Username と Token のダイアログ](/img/migrated/Picture62-f6c856f2.png)](/img/migrated/Picture62-f6c856f2.png)

   :::warning
   Username と Token は一度だけ表示されます。作成直後に安全な場所に保存してください。
   :::

## Robot account を使用する

作成した robot account の token を使用して `docker login` で認証し、設定した権限（pull/push）の操作を実行できます。

:::note
Robot account が削除・無効化されているか token が失効している場合、`docker login`、`docker pull`、`docker push` は "unauthorized to access repository" エラーを返します。
:::

## Robot account を削除する

:::danger
Robot account の削除は元に戻せません。この account を使用している CI/CD パイプラインはすぐにアクセスできなくなります。
:::

1. **Robot Account** 一覧で削除したい account を選択し、**ACTION DELETE** を選択します。
2. 確認ダイアログで **DELETE** と入力して削除を実行します。

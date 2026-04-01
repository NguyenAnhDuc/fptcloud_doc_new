---
id: "manage-registry-secrets"
title: "Registry secretの管理"
description: "内部container registry認証用のregistry secretを作成、更新、削除するガイド"
sidebar_label: "Registry secretの管理"
sidebar_position: 11
---

# Registry secretの管理

内部container registryを使用する場合、ArgoCD Image UpdaterはregistryへのAuthentication が必要です。FPT ArgoCDはこの認証のためのregistry secret作成をサポートしています。

## A. 新しいregistry secretを作成します

1. **Image Updater** > **Add Secret Registry**画面で、新しいsecretを追加します。

[![](/img/migrated/Picture18-6-47f6f7db.png)](/img/migrated/Picture18-6-47f6f7db.png)

2. secretを作成するための情報を入力します：
   - **Secret Name**: Kubernetes下に作成するsecretの名前
   - **Registry**: container registry URL、例：`registry.fke.fptcloud.com`
   - **Username**: registry認証用ユーザー名
   - **Password**: registry認証用パスワード

[![](/img/migrated/Picture19-6-0c5be7e2.png)](/img/migrated/Picture19-6-0c5be7e2.png)

3. 作成後の結果：

[![](/img/migrated/Picture20-5-2601ddf1.png)](/img/migrated/Picture20-5-2601ddf1.png)

## B. Registry secretを更新します

1. **Image Updater**画面で、更新するsecretを選択 > **Edit**をクリックします。

[![](/img/migrated/Picture21-5-7cc5090e.png)](/img/migrated/Picture21-5-7cc5090e.png)

2. Registry URL、ユーザー名、またはパスワードを編集します。

[![](/img/migrated/Picture22-5-37658d1f.png)](/img/migrated/Picture22-5-37658d1f.png)

3. 更新後の結果：

[![](/img/migrated/Picture23-5-b0f811a6.png)](/img/migrated/Picture23-5-b0f811a6.png)

## C. Registry secretを削除します

:::danger
この操作は元に戻せません。
:::

1. **Image Updater**画面で、削除するsecretを選択 > **Delete**をクリックします。

[![](/img/migrated/Picture24-5-2aa73178.png)](/img/migrated/Picture24-5-2aa73178.png)

2. 確認テキストを入力して削除を確認します。

[![](/img/migrated/Picture25-5-ac36cf52.png)](/img/migrated/Picture25-5-ac36cf52.png)

3. 削除後の結果：

[![](/img/migrated/Picture26-5-29fe7ee5.png)](/img/migrated/Picture26-5-29fe7ee5.png)

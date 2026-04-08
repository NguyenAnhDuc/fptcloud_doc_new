---
id: "guide-gitlabserver"
title: "GitLab Server連携の編集はOrg AdminとTeam Managerのみ可能です"
description: "**Org Admin** および **Team Manager** のみ GitLab Server 連携の編集権限を持ちます。"
sidebar_label: "GitLab Server連携の編集はOrg AdminとTeam Managerのみ可能です"
sidebar_position: 4
---

# GitLab Server連携の編集はOrg AdminとTeam Managerのみ可能です

**Org Admin** および **Team Manager** のみ GitLab Server 連携の編集権限を持ちます。
_権限の詳細は[こちら](/ja/docs/fpt-appsec/tutorials/organization-management/quan-ly-member/)をご参照ください。_

## Configure GitLab Server
**手順1** : org/teamを選択後、GitLab Serverをクリックして連携画面に移動します。
[![anhfsec](/img/migrated/labs1-34ab9227.png)](/img/migrated/labs1-34ab9227.png)
**手順2** : GitLab EnterpriseインスタンスのURLを入力します。URLを入力すると **Create a personal access token** ボタンが有効になります。
[![anhfsec](/img/migrated/labs2-017fd4b0.png)](/img/migrated/labs2-017fd4b0.png)
**手順3** : **Private/public repository** へのアクセス権限を設定後、**Create a personal access token** をクリックするとGitLabログイン画面に遷移してトークンを作成します。
[![anhfsec](/img/migrated/labs3-9887d816.png)](/img/migrated/labs3-9887d816.png)
**手順4** : **Token name**、**Token Description** を入力し、**read_api** にチェックを入れます。
[![anhfsec](/img/migrated/lab3-255803a1.png)](/img/migrated/lab3-255803a1.png)
[![anhfsec](/img/migrated/lab4-d1e2310b.png)](/img/migrated/lab4-d1e2310b.png)
**手順5** : **personal access token** をコピーします。
[![anhfsec](/img/migrated/labs3-9887d816.png)](/img/migrated/labs3-9887d816.png)
**手順6** : 作成した **Personal Access Token** を入力し、**Test Connection** をクリックします。
[![anhfsec](/img/migrated/labs4-281c798c.png)](/img/migrated/labs4-281c798c.png)
システムは必須フィールドと **Personal Access Token** の検証を行います。いずれかが失敗した場合、**Test connection Failed**（invalid PAT）が表示されます。
成功した場合は **Test connect successfully** が表示されます。
**手順7** : **Integrate** をクリックします。
[![anhfsec](/img/migrated/labs6-cd567134.png)](/img/migrated/labs6-cd567134.png)

## 詳細表示
[GitHub連携](/ja/docs/fpt-appsec/tutorials/integration-management/guide-github/)の詳細表示ガイドと同様です。

## Reconfigure GitLab Cloud
[GitHub連携](/ja/docs/fpt-appsec/tutorials/integration-management/guide-github/)のreconfigureガイドと同様です。

## GitLab Cloud連携の無効化
[GitHub連携](/ja/docs/fpt-appsec/tutorials/integration-management/guide-github/)の無効化ガイドと同様です。

## CI/CDパイプライン用Access Key
[GitHub連携](/ja/docs/fpt-appsec/tutorials/integration-management/guide-github/)と同様です。

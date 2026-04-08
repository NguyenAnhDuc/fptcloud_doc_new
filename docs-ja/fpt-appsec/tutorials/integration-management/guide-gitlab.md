---
id: "guide-gitlab"
title: "GitLab連携の編集はOrg AdminとTeam Managerのみ可能です"
description: "**Org Admin** および **Team Manager** のみ GitLab 連携の編集権限を持ちます。"
sidebar_label: "GitLab連携の編集はOrg AdminとTeam Managerのみ可能です"
sidebar_position: 3
---

# GitLab連携の編集はOrg AdminとTeam Managerのみ可能です

**Org Admin** および **Team Manager** のみ GitLab 連携の編集権限を持ちます。
_権限の詳細は[こちら](/docs/ja/fpt-appsec/tutorials/organization-management/quan-ly-member/)をご参照ください。_

## Configure GitLab
**手順1** : org/teamを選択後、GitLabをクリックしてGitLab Cloud連携画面に移動します。
[![anhfsec](/img/migrated/lab1-1-0a091c8d.png)](/img/migrated/lab1-1-0a091c8d.png)
**手順2** : **Private/public repository** へのアクセス権限を設定後、**Create a personal access token** をクリックするとGitLabログイン画面に遷移してトークンを作成します。
[![anhfsec](/img/migrated/lab2-176588cd.png)](/img/migrated/lab2-176588cd.png)
**手順3** : **Token name**、**Token Description** を入力し、**read_api** にチェックを入れます。
[![anhfsec](/img/migrated/lab3-255803a1.png)](/img/migrated/lab3-255803a1.png)
[![anhfsec](/img/migrated/lab4-d1e2310b.png)](/img/migrated/lab4-d1e2310b.png)
**手順4** : **personal access token** をコピーします。
[![anhfsec](/img/migrated/lab5-61555338.png)](/img/migrated/lab5-61555338.png)
**手順5** : 作成した **Personal Access Token** を入力し、**Test Connection** をクリックします。
[![anhfsec](/img/migrated/lab6-fc2f157e.png)](/img/migrated/lab6-fc2f157e.png)
システムは必須フィールドと **Personal Access Token** の検証を行います。いずれかが失敗した場合、**Test connection Failed**（invalid PAT）が表示されます。
成功した場合は **Test connect successfully** が表示されます。
**手順6** : **Integrate** をクリックします。
[![anhfsec](/img/migrated/lab9-aab31bf0.png)](/img/migrated/lab9-aab31bf0.png)

## 詳細表示
[GitHub連携](/docs/ja/fpt-appsec/tutorials/integration-management/guide-github/)の詳細表示ガイドと同様です。

## Reconfigure GitLab Cloud
[GitHub連携](/docs/ja/fpt-appsec/tutorials/integration-management/guide-github/)のreconfigureガイドと同様です。

## GitLab Cloud連携の無効化
[GitHub連携](/docs/ja/fpt-appsec/tutorials/integration-management/guide-github/)の無効化ガイドと同様です。

## CI/CDパイプライン用Access Key
[GitHub連携](/docs/ja/fpt-appsec/tutorials/integration-management/guide-github/)と同様です。

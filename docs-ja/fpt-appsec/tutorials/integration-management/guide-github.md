---
id: "guide-github"
title: "GitHub連携の編集はOrg Adminのみ可能です"
description: "**Org Admin** のみ **GitHub** 連携の編集権限を持ちます。"
sidebar_label: "GitHub連携の編集はOrg Adminのみ可能です"
sidebar_position: 2
---

# GitHub連携の編集はOrg Adminのみ可能です

**Org Admin** のみ **GitHub** 連携の編集権限を持ちます。
_権限の詳細は[こちら](/docs/ja/fpt-appsec/tutorials/organization-management/quan-ly-member)をご参照ください。_

## Configure GitHub
**手順1** : org/teamを選択後、**GitHub** をクリックしてGitHub連携画面に移動します。
[![anhfsec](/img/migrated/in-git-1e066503.png)](/img/migrated/in-git-1e066503.png)
**手順2** : **Private/public repository** へのアクセス権限を設定後、**Create a personal access token** をクリックするとGitHubのトークン作成画面に遷移します。
[![anhfsec](/img/migrated/G4-b087642b.png)](/img/migrated/G4-b087642b.png)
**手順3** : 左メニューの **Tokens (classic)** を選択し、**Generate new token (Classic)** をクリックします。
[![anhfsec](/img/migrated/G5-1a2f74b6.png)](/img/migrated/G5-1a2f74b6.png)
[![anhfsec](/img/migrated/G6-94657d49.png)](/img/migrated/G6-94657d49.png)
**手順4** : **Note** を入力し、機能を使用するためにrepoにチェックを入れます。
[![anhfsec](/img/migrated/G7-399bf273.png)](/img/migrated/G7-399bf273.png)
**手順5** : **Generate Token** をクリックしてトークンを生成します。
[![anhfsec](/img/migrated/G8-cf628d37.png)](/img/migrated/G8-cf628d37.png)
**手順6** : トークンの **リンクをコピー** します。
[![anhfsec](/img/migrated/G9-0bca59fa.png)](/img/migrated/G9-0bca59fa.png)
**手順7** : **Personal Access Token** 欄にトークンのリンクを貼り付け、**Test Connection** をクリックします。
[![anhfsec](/img/migrated/G10-ace18550.png)](/img/migrated/G10-ace18550.png)
[![anhfsec](/img/migrated/G11-96b6199e.png)](/img/migrated/G11-96b6199e.png)
システムは必須フィールドと **Personal Access Token** の検証を行います。いずれかが失敗した場合、**Test connection Failed**（invalid PAT）が表示されます。
成功した場合は **Test connect successfully** が表示されます。
**手順8** : **Integrate** をクリックします。

## 詳細表示
**Org Admin** または **Team Manager** のみ各連携タイプの詳細を表示できます。
org/teamを選択後、**Configured GitHub** をクリックして設定状況を確認します。
[![anhfsec](/img/migrated/in-git2-849778ed.png)](/img/migrated/in-git2-849778ed.png)
ここでは **Personal Access Token**、**Repository Access**、**Integrated at**、およびCICD連携用の **Access Key** などの情報を確認できます。
[![anhfsec](/img/migrated/Screenshot-2025-06-17-155316-8d5a45e0.png)](/img/migrated/Screenshot-2025-06-17-155316-8d5a45e0.png)
**Reintegrate** または **Disable** によるGitHub連携の操作が可能です。

## Reconfigure GitHub
**手順1** : GitHub連携の詳細画面で **Reconfigure** をクリックします。
[![anhfsec](/img/migrated/in-git3-ac8ba336.png)](/img/migrated/in-git3-ac8ba336.png)
**手順2** : GitHub連携時と同じ手順を再度実行します。

## GitHub連携の無効化
**手順1** : GitHub連携の詳細画面で **Disable** をクリックします。
[![anhfsec](/img/migrated/in-git4-cd794a67.png)](/img/migrated/in-git4-cd794a67.png)
**手順2** : 「disable」と入力し、**Confirm** をクリックして無効化を実行します。
[![anhfsec](/img/migrated/Screenshot-2025-06-17-160052-d7098984.png)](/img/migrated/Screenshot-2025-06-17-160052-d7098984.png)

## CI/CDパイプライン用Access Key
詳細画面では、CI/CDパイプライン連携用のaccess keyが提供されます。連携ガイドは[こちら](/docs/ja/fpt-appsec/tutorials/integration-management/cicd-guideline)をご参照ください。
[![anhfsec](/img/migrated/in-git5-0f0523e9.png)](/img/migrated/in-git5-0f0523e9.png)
Access Keyはコピーまたはリセットして、CI/CDパイプラインへの連携に使用できます。
[![anhfsec](/img/migrated/in-git6-c0ffda22.png)](/img/migrated/in-git6-c0ffda22.png)

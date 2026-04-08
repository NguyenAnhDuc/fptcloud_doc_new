---
id: "enabling-fpt-container-registry-service"
title: "FPT Container Registry サービスを有効化する"
description: "FPT Cloud Portal で Container Registry サービスをアクティベートする手順。"
sidebar_label: "サービスを有効化する"
sidebar_position: 3
draft: true
---

# FPT Container Registry サービスを有効化する

イメージの push/pull を開始する前に、テナントで Container Registry サービスをアクティベートする必要があります。この操作には適切な権限が必要です。

サービスをアクティベートするには、**Tenant Owner** であるか、`ContainerRegistry:Active` IAM 権限を持つ VPC Admin（通常は **SuperAdmin** ロール）である必要があります。

1. サイドバーメニューで **Container Registry** を選択し、**Active** をクリックしてサービスをアクティベートします。

   [![Container Registry のアクティベート](/img/migrated/image01-1-8cc0d81b.png)](/img/migrated/image01-1-8cc0d81b.png)

2. **ヘルプアイコン（ⓘ）** にカーソルを合わせると、Docker Login、Tag、Push のコマンドが表示されます。

   [![ログインコマンドを表示するヘルプアイコン](/img/migrated/image02-1-35c7756d.png)](/img/migrated/image02-1-35c7756d.png)

:::note
Tenant Owner 以外のユーザーには **Active** ボタンが表示されません。Owner ロールを持つテナントを選択してサービスをアクティベートしてください。
:::

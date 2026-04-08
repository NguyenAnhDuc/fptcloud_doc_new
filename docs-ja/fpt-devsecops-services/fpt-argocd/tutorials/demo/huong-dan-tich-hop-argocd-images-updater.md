---
id: "huong-dan-tich-hop-argocd-images-updater"
title: "ArgoCD Image Updaterを統合する"
description: "Image Updaterを使用してArgoCDでアプリケーションをデプロイする方法"
sidebar_label: "ArgoCD Image Updaterを統合"
sidebar_position: "52"
---

# ArgoCD Image Updaterを統合する

このガイドでは、Image Updaterを使用してArgoCDでアプリケーションをデプロイする方法を説明します。Argo CD Image Updater機能を使用するには、Portal経由でサービスを有効にし、secret/secret registry/Container registryなどの認証情報を設定します。

## 準備

### ステップ1: デプロイソースを準備する

デプロイソースはHelmチャートです。

例: ArgoCDにHelmチャートでnginxサービスをデプロイします。デプロイするチャートを準備します:

[![](/img/migrated/Picture100-2-e854d3aa.png)](/img/migrated/Picture100-2-e854d3aa.png)

デプロイするimageはcontainer registryで管理されます。このデモではFPT Cloudのcontainer registryを使用します。

Argo CD Image Updaterはアプリケーションデプロイパラメーターを保存するためのGit write-backメソッドをサポートしています。デフォルトでは、Argo CD Image Updaterはパラメーターを `.argocd-source-<app-name>.yaml` というファイルに保存します。これにより、ArgoCDはGitに保存されたパラメーターに従ってアプリケーションをデプロイできます。

例: **.argocd-source-demo-images-updater.yaml** ファイルを以下の内容で作成します:

```yaml
helm:
  parameters:
  - name: image.name
    value: registry.fke.fptcloud.com/a6762c5a-56d1-4285-b4bc-b61177a171e1/nginx
    forcestring: true
  - name: image.tag
    value: dev-742b0343
    forcestring: true
```

### ステップ2: PortalでimageのpullSecretを設定する

例: Secret RegistryをContainer Registry上の変更確認に使用します。pullSecretの名前: **habor-secret**。

[![](/img/migrated/Picture101-2-f1743170.png)](/img/migrated/Picture101-2-f1743170.png)

[![](/img/migrated/Picture102-2-03b9e902.png)](/img/migrated/Picture102-2-03b9e902.png)

Secret RegistryはアプリケーションのannotationsとGitで使用されます。

### ステップ3: ArgoCDでApplicationを作成する

[![](/img/migrated/Picture103-2-db71904f.png)](/img/migrated/Picture103-2-db71904f.png)

[![](/img/migrated/Picture104-2-805da965.png)](/img/migrated/Picture104-2-805da965.png)

[![](/img/migrated/Picture105-2-6eac2ef3.png)](/img/migrated/Picture105-2-6eac2ef3.png)

次に **Edit as yaml** 機能を使用してannotationsを設定します:

[![](/img/migrated/Picture106-2-d13a50e5.png)](/img/migrated/Picture106-2-d13a50e5.png)

[![](/img/migrated/Picture107-2-79a37b70.png)](/img/migrated/Picture107-2-79a37b70.png)

Image Updaterを使用するためのannotationsを追加します:

| アノテーション | 説明 |
| --- | --- |
| `argocd-image-updater.argoproj.io/demo-images-updater.allow-tags: regexp:^dev-[0-9a-f]{8}$` | リポジトリへの更新に許可するタグ名を指定します。例: 「dev-」と8桁の16進数文字列に一致する正規表現のタグのみ許可します。例: `dev-a5fb3d31` |
| `argocd-image-updater.argoproj.io/****.pull-secret: pullsecret:argocd-ebwa49tw/habor-secret` | ArgoCD Image UpdaterがレジストリでimageタグをチェックするためのpullSecret。形式: `pullsecret:argocd-[argocd-id]/[Secret-registry-name]` |
| `argocd-image-updater.argoproj.io/****.update-strategy: latest` | Argo CD Image Updaterがレジストリで更新されたimageの新バージョンを見つける方法。戦略: **Semver**（セマンティックバージョニングの最新版）、**Latest**（最近プッシュされたタグ）、**Digest**（SHA digestを使用した最新バージョン）、**Name**（アルファベット順） |
| `argocd-image-updater.argoproj.io/git-branch: master` | manifestの変更を更新するブランチ |
| `argocd-image-updater.argoproj.io/write-back-method: git` | imageの変更を更新する方法 |
| `argocd-image-updater.argoproj.io/image-list: =registry.fke.fptcloud.com/a6762c5a-56d1-4285-b4bc-b61177a171e1/nginx` | 更新を追跡するimageのリスト |

### ステップ4: Container RegistryでimageタグをアップデートするときにGitへの変更を検出するためのwebhookを設定する

  * Portalでgitlab webhookを作成します:

[![](/img/migrated/Picture108-2-a587e856.png)](/img/migrated/Picture108-2-a587e856.png)

  * GitLabでwebhookを設定します:

[![](/img/migrated/Picture109-2-08f7eb65.png)](/img/migrated/Picture109-2-08f7eb65.png)

pushイベントのテスト:

[![](/img/migrated/Picture110-2-54913219.png)](/img/migrated/Picture110-2-54913219.png)

### ステップ5: アプリケーションを確認する

新しいimageをpushする前に、アプリケーションで実行中のimageを確認します:

[![](/img/migrated/Picture111-2-cd39a52c.png)](/img/migrated/Picture111-2-cd39a52c.png)

レジストリに新しいimageをpushします:

[![](/img/migrated/Picture112-2-1564bd25.png)](/img/migrated/Picture112-2-1564bd25.png)

Argo CD Image UpdaterがGitに新しいimageを更新します:

[![](/img/migrated/Picture113-2-40533aa3.png)](/img/migrated/Picture113-2-40533aa3.png)

GitLab webhookが変更を検出して新しいimageをデプロイします:

[![](/img/migrated/Picture114-2-e9f6c665.png)](/img/migrated/Picture114-2-e9f6c665.png)

[![](/img/migrated/Picture115-2-3de5e72c.png)](/img/migrated/Picture115-2-3de5e72c.png)

許可されていない形式のimageをpushした場合は拒否されることを確認します:

[![](/img/migrated/Picture116-2-41d45fd3.png)](/img/migrated/Picture116-2-41d45fd3.png)

アプリケーションに変更がないことを確認します:

[![](/img/migrated/Picture117-2-ace9c50e.png)](/img/migrated/Picture117-2-ace9c50e.png)

[![](/img/migrated/Picture118-2-9804afe2.png)](/img/migrated/Picture118-2-9804afe2.png)

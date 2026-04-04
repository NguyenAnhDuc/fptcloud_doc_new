---
id: "huong-dan-su-dung-applicationset-de-deploy"
title: "ApplicationSetを使用してアプリケーションをデプロイする"
description: "ArgoCD CLIでApplicationSetを使用してアプリケーションをデプロイする方法"
sidebar_label: "ApplicationSetでデプロイ"
sidebar_position: "49"
---

# ApplicationSetを使用してアプリケーションをデプロイする

ApplicationSet関連機能を使用するには、CLIでアプリケーションをデプロイ・確認するコマンドを使用します。CLIでArgoCDサーバーにログインします:

```bash
argocd login dashboard.argocd.cd.fke.fptcloud.com --grpc-web-root-path yk3n2ph2
```

## 1. Git Generatorを使用してApplicationを作成する

**ステップ1:** Git Directory Generatorを使用するmanifestを準備します。

[![](/img/migrated/Picture86-1-29f58a8f.png)](/img/migrated/Picture86-1-29f58a8f.png)

**ステップ2:** CLIを使用してApplicationSetを適用します:

```bash
argocd appset create applicationset.yaml
```

CLI実行後の結果:

```
ApplicationSet 'color-applicaitonset' created
```

**ステップ3:** ApplicationSetを使用したApplication作成後の結果。

[![](/img/migrated/Picture87-1-daafd74f.png)](/img/migrated/Picture87-1-daafd74f.png)

CLIでリストを取得した後のApplicationSet一覧:

```bash
argocd appset list
```

[![](/img/migrated/Picture88-1-bead1fd9.png)](/img/migrated/Picture88-1-bead1fd9.png)

## 2. List Generatorを使用してApplicationを作成する

**ステップ1:** デプロイするmanifestを準備します。

[![](/img/migrated/Picture89-1-6e77044f.png)](/img/migrated/Picture89-1-6e77044f.png)

含まれるファイル:

[![](/img/migrated/Picture90-1-ac3063df.png)](/img/migrated/Picture90-1-ac3063df.png)

**ステップ2:** CLIを使用してApplicationSetでApplicationを作成します:

```bash
argocd appset create applicationset.yaml
```

**ステップ3:** ApplicationSet作成後の結果:

[![](/img/migrated/Picture91-1-6e2e43ce.png)](/img/migrated/Picture91-1-6e2e43ce.png)

[![](/img/migrated/Picture92-1-74948904.png)](/img/migrated/Picture92-1-74948904.png)

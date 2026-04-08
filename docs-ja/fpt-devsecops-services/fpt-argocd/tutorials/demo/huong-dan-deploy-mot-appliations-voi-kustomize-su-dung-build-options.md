---
id: "huong-dan-deploy-mot-appliations-voi-kustomize-su-dung-build-options"
title: "Kustomizeとビルドオプションを使用してアプリケーションをデプロイする"
description: "ArgoCDでKustomizeのビルドオプションを使用してアプリケーションをデプロイする方法"
sidebar_label: "Kustomizeビルドオプションでデプロイ"
sidebar_position: "46"
---

# Kustomizeとビルドオプションを使用してアプリケーションをデプロイする

manifestを使用したアプリケーションのデプロイと同様に、Kustomizeを使用したアプリケーションのデプロイも同じ手順で行います。

**ステップ1:** アプリケーションをデプロイするリポジトリを準備します。このデモでは、k8sにいくつかのアプリケーションをデプロイします。インgressコントローラー、argocd-rollout、アプリケーションを含みます。

ソースコードのディレクトリ構造は以下の通りです:

[![](/img/migrated/Picture93-2-e233954f.png)](/img/migrated/Picture93-2-e233954f.png)

内訳:
  * Argo-rolloutはHelmチャートのビルドオプションを使用してKustomizeでデプロイされます:

[![](/img/migrated/Picture94-2-2b0c49f1.png)](/img/migrated/Picture94-2-2b0c49f1.png)

  * Ingress-nginxとその他のコンポーネントはmanifestを使用してKustomizeでデプロイされます:

[![](/img/migrated/Picture95-2-0046a221.png)](/img/migrated/Picture95-2-0046a221.png)

**ステップ2:** ドキュメントに従い、Portalインターフェースを通じてKustomizeのビルドオプションを設定します。

:::warning
ビルドオプションが設定されていない場合、アプリケーションの作成時にエラーが発生します。
:::

[![](/img/migrated/Picture96-2-b42ada9b.png)](/img/migrated/Picture96-2-b42ada9b.png)

**ステップ3:** ArgoCD経由でアプリケーションをデプロイします。ドキュメントのmanifestデプロイセクションと同様にApplicationを作成します。ただし、KustomizeとHelmチャートを使用してデプロイするアプリケーションには、以下の追加情報を設定する必要があります:

[![](/img/migrated/Picture97-2-9d3a59cd.png)](/img/migrated/Picture97-2-9d3a59cd.png)

[![](/img/migrated/Picture98-2-ff0c9a53.png)](/img/migrated/Picture98-2-ff0c9a53.png)

デプロイ成功後のアプリケーション:

[![](/img/migrated/Picture99-2-1f7a4254.png)](/img/migrated/Picture99-2-1f7a4254.png)

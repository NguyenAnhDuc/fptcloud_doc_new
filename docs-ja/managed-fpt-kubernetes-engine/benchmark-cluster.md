---
id: "tinh-nang-benchmark-cluster"
title: "Managed Kubernetes Cluster のベンチマーク機能"
description: "FPT Cloud Managed Kubernetes Cluster のセキュリティベンチマーク機能について説明します。"
sidebar_label: "Managed Kubernetes Cluster のベンチマーク機能"
sidebar_position: 30
---

# Managed Kubernetes Cluster のベンチマーク機能

## 1. Benchmark Security 機能の概要

FPT Cloud Managed Kubernetes クラスターの情報セキュリティを確保するために、FPT Cloud は管理者が Center for Internet Security（CIS）が提案する共通標準に従って、worker node 内の kubelet の設定・構成をベンチマークできる機能を提供しています。

CIS Benchmarks は、Center for Internet Security（CIS）が開発した包括的なセキュリティ設定ガイドラインのセットです。これらのガイドラインは、システム、サービス、ソフトウェアを保護するためのベストプラクティスを提供します。

テストケースは各 Kubernetes バージョンに適用され、FPT Cloud の kubelet 設定に合わせて調整されています。

各テストケースの結果には Pass、Fail、Warning の 3 種類があります。Pass は CIS が定めたテストケースを満たす設定を、Fail は重要度の高いテストケースに不合格であることを、Warning は重要度が低いテストケースに不合格であること（設定してもしなくてもよい）を示します。

## 2. Unify Portal での機能の使い方

**注意:** Managed Kubernetes Cluster のセキュリティ強化機能セットは、クラスターが正常に作成された後（Succeeded（Running）状態）に統合されます。

**A. Benchmark Security 機能の有効化:**

FPT Cloud Portal（console.fptcloud.com）にアクセスし、**Kubernetes** メニューを選択してベンチマーク対象のクラスターをクリックし、**Security** タブに移動して **Benchmark Security** タブを選択し、有効化を実行します。

[![](/img/migrated/Picture1-7-dcd8247e.png)](/img/migrated/Picture1-7-dcd8247e.png)

ベンチマーク job が正常に実行されると、詳細な結果が表示されます。ユーザーはベンチマークを再実行して最新の結果に更新するか、結果をダウンロードすることができます。

[![](/img/migrated/Picture2-5-7bec9f13.png)](/img/migrated/Picture2-5-7bec9f13.png)

**B. Benchmark Security 機能の無効化:**

FPT Cloud Portal（console.fptcloud.com）にアクセスし、Kubernetes メニューを選択してベンチマーク対象のクラスターをクリックし、Security タブに移動して Benchmark Security タブを選択し、無効化の確認を実行します。

[![](/img/migrated/Picture3-5-f60fafac.png)](/img/migrated/Picture3-5-f60fafac.png)

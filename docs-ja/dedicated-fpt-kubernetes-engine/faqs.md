---
id: "faqs"
title: "よくある質問"
description: "Dedicated FPT Kubernetes Engine に関するよくある質問と回答。"
sidebar_label: "よくある質問"
sidebar_position: 30
pagination_next: null
---

# よくある質問

**D-FKE はどのリージョンをサポートしていますか？**

現在 FPT Cloud は HAN（ハノイ）と SGN（サイゴン/ホーチミン）の 2 つのリージョンをサポートしています。D-FKE は両リージョンで利用可能です。

**1 つの D-FKE cluster を複数のリージョンにまたがって使用できますか？**

D-FKE は 1 つの cluster を複数のリージョンで実行することをサポートしていません。BC&DR を実現するために、同じアプリケーション用に各リージョンで cluster を作成することができます。

**D-FKE は 1 つの cluster で複数の VM 構成をサポートしていますか？**

D-FKE は現在 1 つの cluster で複数の VM 構成をサポートしていません。Worker Nodes はすべて同じ構成（CPU、RAM、DISK）で、Master Nodes も同様です。使用中に Node の構成を変更することは可能です。

**D-FKE は 1 つの cluster で何台の Worker Node をサポートしていますか？**

D-FKE のデフォルト上限は 1 cluster あたり 100 Worker Node です。それ以上必要な場合は FPT Cloud にお問い合わせください。

**D-FKE は既存の Kubernetes アプリケーションと互換性がありますか？**

D-FKE は Native Kubernetes を使用しているため、AWS、Azure、GCP、DO などの他のクラウドや、お客様自身のインフラにインストールした Kubernetes cluster と完全に互換性があります。これにより FPT Cloud とお客様のデータセンター、または他のクラウド間でアプリケーションを簡単に移行できます。

**アプリケーションを cluster の外部に公開するにはどうすればよいですか？**

**cluster のパフォーマンスを監視してアラートを設定するにはどうすればよいですか？**

FPT Cloud は FMON 製品を提供しており、Kubernetes cluster のパフォーマンス監視とアラート設定が可能です。また FMON は FKE と簡単に統合できるロギングとトレーシングも提供しています。

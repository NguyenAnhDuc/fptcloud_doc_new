---
id: "khoi tao mot load balancer moi"
title: "新しいロードバランサーの作成"
description: "FPT Cloud で新しい Load Balancer を作成する手順を説明します。"
sidebar_label: "新しいロードバランサーの作成"
sidebar_position: "28"
---

# 新しいロードバランサーの作成

**手順 1:** **Load Balancer Management** ページにアクセスし、**Create** をクリックします。

[![](/img/migrated/Userguide-FPT-Load-Balancer-2022-1-1024x-f04d52f1.png)](/img/migrated/Userguide-FPT-Load-Balancer-2022-1-1024x-f04d52f1.png)

新しいダイアログが表示され、次の手順が案内されます。

**手順 2:** 以下の選択肢を使って Load Balancer を設定します：

| フィールド | 説明 |
| --- | --- |
| **Name** | Load Balancer の名前を入力します。 |
| **Size** | ニーズに合ったサイズを選択します。現在 FPT Cloud は Basic から Premium まで 4 種類のサイズを提供しています。 |
| **Public IP** | VPC 内のパブリック IP を Load Balancer に割り当てます。インターネットからのアクセスが不要な場合（Internal Load Balancer）は空欄のままにできます。追加のパブリック IP が必要な場合は Floating IP 管理のガイドを参照してください。 |
| **Instances** | 負荷分散するエンドポイントの仮想マシンを選択します。現在は同じ VPC 内の仮想マシンのみ選択できます。 |
| **Rules** | Load Balancer から仮想マシンへのトラフィックのルーティング方法を定義します。現在 1 つの Load Balancer につき 1 つのルールのみ作成できます。 |
| **Certificate** | **HTTPS** を選択した場合、Load Balancer の Certificate 設定は必須です。既存の証明書を選択するか、新しい証明書を追加できます。 |
| **Settings** | Load Balancer の追加設定です。FPT Cloud はいくつかの一般的な設定をデフォルトとして提案しています。変更が必要な場合は **Edit Setting** を選択してください。**Algorithm**: 負荷分散アルゴリズム。FPT Load Balancer は **Round Robin** と **Least Connections** の 2 つを提供しています。**Sticky Session**: スティッキーセッションのオン/オフ。**Health check**: Load Balancer は定期的にサーバーの状態を確認し、応答しないサーバーへのクエリを即座に他のサーバーに切り替えます。FPT Load Balancer は **HTTP**、**TCP**、**PING** によるチェックをサポートしています。 |

[![](/img/migrated/Userguide-FPT-Load-Balancer-2022-2-7408982a.png)](/img/migrated/Userguide-FPT-Load-Balancer-2022-2-7408982a.png)

**手順 3:** **Create** をクリックして Load Balancer を作成します。システムがリソースを確認し、作成プロセスを開始して処理状況を通知します。

作成が完了すると、管理画面で新しく作成された Load Balancer とその動作状態を確認できます。

[![](/img/migrated/Userguide-FPT-Load-Balancer-2022-3-1024x-5bd1ea96.png)](/img/migrated/Userguide-FPT-Load-Balancer-2022-3-1024x-5bd1ea96.png)

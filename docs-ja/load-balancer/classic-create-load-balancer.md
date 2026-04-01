---
id: "classic-create-load-balancer"
title: "クラシックロードバランサーの作成"
description: "FPT Cloud でクラシックロードバランサーを作成する方法を説明します。"
sidebar_label: "クラシック LB の作成"
sidebar_position: 23
---

# クラシックロードバランサーの作成

**手順 1:** **Load Balancer Management** ページにアクセスし、**Create** をクリックします。

[![](/img/migrated/Userguide-FPT-Load-Balancer-2022-1-1024x-f04d52f1.png)](/img/migrated/Userguide-FPT-Load-Balancer-2022-1-1024x-f04d52f1.png)

ダイアログが表示され、次の手順が案内されます。

**手順 2:** 以下の設定でロードバランサーを構成します：

| フィールド | 説明 |
| --- | --- |
| **Name** | ロードバランサーの名前を入力します。 |
| **Size** | 用途に合ったサイズを選択します。FPT Cloud は Basic から Premium まで 4 種類のサイズを提供しています。 |
| **Public IP** | VPC 内のパブリック IP を割り当てます。インターネットアクセスが不要な内部ロードバランサーの場合は空欄にします。追加のパブリック IP については、フローティング IP 管理セクションを参照してください。 |
| **Instances** | 負荷分散する仮想マシンを選択します。同じ VPC 内のインスタンスのみ選択できます。 |
| **Rules** | ロードバランサーから仮想マシンへのトラフィックのルーティング方法を定義します。現在、1 つのロードバランサーにつき 1 つのルールのみサポートされています。 |
| **Certificate** | **HTTPS** を選択した場合、証明書の設定が必須です。既存の証明書を選択するか新規追加します。 |
| **Settings** | ロードバランサーの追加設定（FPT Cloud が推奨デフォルト値を提供）。変更するには **Edit Setting** をクリックします：**Algorithm**（Round Robin または Least Connections）、**Sticky Session**（オン/オフ）、**Health check**（HTTP、TCP、または PING）。 |

[![](/img/migrated/Userguide-FPT-Load-Balancer-2022-2-7408982a.png)](/img/migrated/Userguide-FPT-Load-Balancer-2022-2-7408982a.png)

**手順 3:** **Create** をクリックしてロードバランサーを作成します。システムはリソースを検証し、作成プロセスを開始して状況を報告します。

作成が完了すると、新しいロードバランサーとその動作ステータスが管理ダッシュボードに表示されます。

[![](/img/migrated/Userguide-FPT-Load-Balancer-2022-3-1024x-5bd1ea96.png)](/img/migrated/Userguide-FPT-Load-Balancer-2022-3-1024x-5bd1ea96.png)

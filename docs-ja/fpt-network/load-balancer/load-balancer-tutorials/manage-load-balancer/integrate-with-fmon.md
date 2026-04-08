---
id: "integrate-with-fmon"
title: "ロードバランサーと FPT Monitoring (FMON) の連携"
description: "ロードバランサーのアクセスログとメトリクスを FPT Monitoring (FMON) ワークスペースに送信して Grafana で可視化する方法を説明します。"
sidebar_label: "FMON との連携"
sidebar_position: 9
---

# ロードバランサーと FPT Monitoring (FMON) の連携

この機能は **FPT Monitoring (FMON)** サービスとロードバランサーを連携させ、アクセスログまたはメトリクスをモニタリングワークスペースに送信します。Grafana の直感的なインターフェースを通じてログ/メトリクスを簡単に確認・分析でき、特に障害のトラブルシューティングに役立ちます。

**前提条件：** VPC に、ストレージ要件に対応できる十分なクォータを持つ FMON モニタリングワークスペースが存在する必要があります。

**手順 1:** 連携するロードバランサーの詳細ページを開き、**Integration** タブをクリックします。VPC 内で利用可能なモニタリングワークスペースの一覧が表示されます。

[![](/img/migrated/image-1767671757981-67c451b9.png)](/img/migrated/image-1767671757981-67c451b9.png)

**手順 2:** **Integrate** ボタンをクリックして連携を開始します。確認ポップアップが表示されたら **Confirm** をクリックします。

[![](/img/migrated/image-1767671804027-dde39f33.png)](/img/migrated/image-1767671804027-dde39f33.png)

**手順 3:** 確認後、ステータスが **Disable** から **Integrating** に変わります。連携が完了するまで 1〜2 分お待ちください。ステータスが **Enable** になります。

[![](/img/migrated/image-1767671862366-b2aa25cb.png)](/img/migrated/image-1767671862366-b2aa25cb.png)

**手順 4:** **Dashboard URL** リンクをクリックします。Grafana ログインページが表示されます。

**4.1** **Basic Authentication** の **Username** と **Password** を使用してログインし、**Log In** をクリックします。Grafana のホームページが表示されます。

**アクセスログの場合：**

**4.2** Home 横の **Toggle Menu** をクリックし、**Explore** > **Loki** を選択します。

**4.3** ラベルフィルターで **Label** > **Load Balancer** を選択し、**Run Query** をクリックします。ロードバランサーのログが表示されます。

**メトリクスの場合：**

ロードバランサーメトリクスを可視化するためのダッシュボードテンプレートが事前に用意されています。

**4.2** **Home** > **Dashboard** > **LB_Dashboard** を選択します。

**4.3** 表示するロードバランサーを選択し、**Run query** をクリックしてダッシュボードを表示します。

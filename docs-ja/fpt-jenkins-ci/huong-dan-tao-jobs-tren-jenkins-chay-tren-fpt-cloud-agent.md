---
id: "huong-dan-tao-jobs-tren-jenkins-chay-tren-fpt-cloud-agent"
title: "FPT Cloud Agent を使用した Jenkins ジョブの作成"
sidebar_label: "FPT Cloud Agent でジョブを作成"
sidebar_position: 23
---

# FPT Cloud Agent を使用した Jenkins ジョブの作成

設定手順は Jenkins のバージョンによって異なります。

FPT Cloud が提供するバージョン 2.451.0 以降では、Kubernetes エージェントを使用するためにフォルダーを作成し、そのフォルダー内でエージェントを使用できるように設定する必要があります。Jenkins 上の CI/CD プロジェクトを管理するには、プロジェクトごとにフォルダーを作成し、そのフォルダー内にサービスを設定することを推奨します。これにより、プロジェクトごとの権限管理が容易になります。

Jenkins ジョブを作成するには以下が必要です：

- **エージェントラベル：**

[![](/img/migrated/Picture103-c115e03c.png)](/img/migrated/Picture103-c115e03c.png)

正しい設定なしに FPT Cloud エージェントで動作するよう設定した標準の Freestyle ジョブを作成すると、以下のエラーが表示されます：

[![](/img/migrated/Picture104-4ee62b2a.png)](/img/migrated/Picture104-4ee62b2a.png)

Jenkins でジョブを正しく作成・実行するには、以下の手順に従ってください。

**ステップ 1:** Jenkins 上でジョブを管理するフォルダーを作成します。

Jenkins ダッシュボード > **New Item**：

[![](/img/migrated/Picture105-46822182.png)](/img/migrated/Picture105-46822182.png)

**Folder** 種別のアイテムを作成します：

[![](/img/migrated/Picture106-2d903e4d.png)](/img/migrated/Picture106-2d903e4d.png)

フォルダー内で使用する Kubernetes エージェントを設定します：

[![](/img/migrated/Picture107-13b71bc6.png)](/img/migrated/Picture107-13b71bc6.png)

**ステップ 2:** フォルダー内にシンプルなジョブを作成します。

作成したフォルダー内 > **New Item** / **Create a job**：

[![](/img/migrated/Picture108-8729b0b8.png)](/img/migrated/Picture108-8729b0b8.png)

**Freestyle** ジョブを作成します：

[![](/img/migrated/Picture110-c5cac842.png)](/img/migrated/Picture110-c5cac842.png)

ジョブ用のエージェントラベルを入力します：

[![](/img/migrated/Picture111-e24ed221.png)](/img/migrated/Picture111-e24ed221.png)

ジョブをテストするための execute shell ステップを設定します：

[![](/img/migrated/Picture112-fd5e8c52.png)](/img/migrated/Picture112-fd5e8c52.png)

ジョブ設定を保存します：

[![](/img/migrated/Picture113-5be28d74.png)](/img/migrated/Picture113-5be28d74.png)

**ステップ 3:** ジョブを実行します。

[![](/img/migrated/Picture114-a0689b0d.png)](/img/migrated/Picture114-a0689b0d.png)

**ステップ 4:** ジョブ実行結果。

[![](/img/migrated/Picture115-145b00f7.png)](/img/migrated/Picture115-145b00f7.png)

[![](/img/migrated/Picture116-7605e149.png)](/img/migrated/Picture116-7605e149.png)

[![](/img/migrated/Picture117-806d0758.png)](/img/migrated/Picture117-806d0758.png)

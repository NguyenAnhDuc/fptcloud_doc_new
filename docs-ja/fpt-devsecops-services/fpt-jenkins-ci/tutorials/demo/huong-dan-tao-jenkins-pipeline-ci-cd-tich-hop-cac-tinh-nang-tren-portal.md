---
id: "huong-dan-tao-jenkins-pipeline-ci-cd-tich-hop-cac-tinh-nang-tren-portal"
title: "Portal 連携 Jenkins CI/CD パイプラインの作成"
sidebar_label: "Jenkins CI/CD パイプラインの作成"
sidebar_position: 5
pagination_next: null
---

# Portal 連携 Jenkins CI/CD パイプラインの作成

このガイドでは、以下の基本的な CI/CD フローを作成する手順を説明します。

[![](/img/migrated/Picture127-aecf39ae.png)](/img/migrated/Picture127-aecf39ae.png)

CI/CD パイプラインは以下のステップで実行されます：

**ステップ 1:** トリガーイベント — 開発者が **push commit** または **merge request** イベントで CI/CD パイプラインをトリガーします。

**ステップ 2:** ソースコード管理システムが webhook 経由で CI/CD システムにトリガーメッセージを送信し、Jenkins 上のビルドジョブを開始します。

**ステップ 3:** FPT Jenkins CI と FPT Cloud Agent を使用する CI/CD システムが、SonarQube によるコードスキャン、ユニットテスト、イメージビルドを実行します。

**ステップ 4:** すべてのテストが通過しイメージビルドが成功した場合、イメージは FPT Container Registry（FCR）にプッシュされ保存されます。

**ステップ 5:** FCR へのイメージプッシュ後、システムは FPT Argo CD が管理するコンフィグソースコードに新しいイメージタグを更新します。

**ステップ 6:** FPT Argo CD が dev/test/staging 環境にアプリケーションをデプロイします。

**ステップ 7:** デプロイ後、CI/CD システムが staging 環境で自動テストを実行します。

**ステップ 8:** パイプライン完了後、CI/CD システムがビルド結果を開発者に返します。

CI/CD システムのコンポーネント：

| # | システム | ツール |
|---|--------|------|
| 1 | ソースコード管理 | GitLab |
| 2 | CI サーバー | FPT Jenkins CI |
| 3 | CD | FPT ArgoCD |

### セットアップ手順

1. Portal のユーザー名とパスワードを使用して Jenkins にログインします。

2. FPT Cloud Portal でパイプラインに必要なクレデンシャルを作成します：

   - GitLab および Container Registry の認証に使用する **Username with password** クレデンシャル：

   [![](/img/migrated/Picture128-ceb629a5.png)](/img/migrated/Picture128-ceb629a5.png)

   [![](/img/migrated/Picture129-78a57dc5.png)](/img/migrated/Picture129-78a57dc5.png)

   - SonarQube の認証に使用する **Secret Text** クレデンシャル：

   [![](/img/migrated/Picture130-62a27646.png)](/img/migrated/Picture130-62a27646.png)

3. パイプラインでのコードスキャンのために SonarQube サーバーを設定します。

   [![](/img/migrated/Picture131-81a306f2.png)](/img/migrated/Picture131-81a306f2.png)

4. パイプライン統合のために FPT Cloud Portal でメール通知を設定します。

   [![](/img/migrated/Picture132-77753ca6.png)](/img/migrated/Picture132-77753ca6.png)

5. CI/CD フローを設定するために **Pipeline** ジョブを作成します。**New Item** または **Create a job** をクリックします：

   [![](/img/migrated/Picture133-102cb0ac.png)](/img/migrated/Picture133-102cb0ac.png)

   ジョブ情報を入力します：

   [![](/img/migrated/Picture134-2b34d23c.png)](/img/migrated/Picture134-2b34d23c.png)

   パイプラインスクリプトでジョブを設定します。2 つの方法があります：

   **方法 1：** Jenkins インターフェースで直接パイプラインスクリプトを入力します：

   [![](/img/migrated/Picture135-40b308ac.png)](/img/migrated/Picture135-40b308ac.png)

   **方法 2：** ソースコードリポジトリの Jenkinsfile を使用します：

   [![](/img/migrated/Picture136-4cae1695.png)](/img/migrated/Picture136-4cae1695.png)

   [![](/img/migrated/Picture137-0425bb84.png)](/img/migrated/Picture137-0425bb84.png)

   パイプラインのジョブ実行：

   [![](/img/migrated/Picture138-384988ca.png)](/img/migrated/Picture138-384988ca.png)

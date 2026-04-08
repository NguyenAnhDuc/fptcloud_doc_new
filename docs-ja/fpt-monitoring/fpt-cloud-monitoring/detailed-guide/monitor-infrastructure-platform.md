---
id: "monitor-infrastructure-platform"
title: "インフラとプラットフォームを監視する"
sidebar_label: "インフラとプラットフォームを監視する"
sidebar_position: 4
---

# インフラとプラットフォームを監視する

**手順 1:** FPT Cloud Portal（**[https://console.fptcloud.com](https://console.fptcloud.com)**）にログインします。

**手順 2:** FPT Cloud Portal のメニューで **Monitoring** をクリックします。

**手順 3:** ワークスペースをクリックし、**Add Data** タブに移動します。

**手順 4:** **Infrastructure services** タブで利用可能なインフラサービスの一覧が表示されます。監視したいサービスをクリックします。

[![Alt text](/img/migrated/Picture8-2-102fff27.png)](/img/migrated/Picture8-2-102fff27.png)

**手順 5:** **Manual** をクリックし、画面の指示に従います。

[![Alt text](/img/migrated/Picture9-2-575519ed.png)](/img/migrated/Picture9-2-575519ed.png)

## Kubernetes の自動統合

FPT Monitoring は **Kubernetes Dedicated** および **Kubernetes Managed** クラスターの**自動統合**をサポートしています。この機能により、各クラスターのメトリクスとログ監視を簡単かつ専門的に設定できます。

**手順 1:** **Infrastructure services** タブで **Kubernetes** をクリックします。

[![Alt text](/img/migrated/Picture1-4-4251b3d0.png)](/img/migrated/Picture1-4-4251b3d0.png)

**手順 2:** **Auto** をクリックします。**Dedicated** および **Managed** クラスターの一覧が表示されます。

[![Alt text](/img/migrated/Picture3-4-ab6aaf3f.png)](/img/migrated/Picture3-4-ab6aaf3f.png)

:::note
クラスターが表示されない場合は、メニューの **Kubernetes** から **Create a Kubernetes Engine** をクリックしてクラスターを作成してください。テナントに作成権限がない場合は、管理チームにお問い合わせください。
:::

### Dedicated Kubernetes の統合

1. **Dedicated** タブをクリックします。

[![Alt text](/img/migrated/Picture4-4-8f2ee7aa.png)](/img/migrated/Picture4-4-8f2ee7aa.png)

2. 統合するクラスターとデータソースタイプ（metric または log）を選択します。稼働中のクラスターでアクティブなデータソースのみ統合できます。

3. **Integrate** をクリックします。

[![Alt text](/img/migrated/Picture5-4-c8990333.png)](/img/migrated/Picture5-4-c8990333.png)

クラスターのログ/メトリクスを対応するワークスペースに統合するかどうかを確認するダイアログが表示されます。**Confirm** をクリックします。

[![Alt text](/img/migrated/Picture6-4-e64b483e.png)](/img/migrated/Picture6-4-e64b483e.png)

統合ステータスが **Integrating** に変わります。

[![Alt text](/img/migrated/Picture7-4-aad01789.png)](/img/migrated/Picture7-4-aad01789.png)

1〜2 分待つと、システムが最終ステータス（成功または失敗）に自動更新されます。

[![Alt text](/img/migrated/Picture8-4-5a74c485.png)](/img/migrated/Picture8-4-5a74c485.png)

4. ダッシュボードにログインします: **Configuration** タブに移動し、**Dashboard URL** をクリックして、表示されたユーザー名とパスワードでログインします。

[![Alt text](/img/migrated/Picture9-4-8516bd17.png)](/img/migrated/Picture9-4-8516bd17.png)

5. ダッシュボードにアクセスしたら、**Home** > **Dashboard** をクリックし、**Fmon – Kubernetes** フォルダーを選択します。

[![Alt text](/img/migrated/Picture10-4-a10f8a99.png)](/img/migrated/Picture10-4-a10f8a99.png)

### Managed Kubernetes の統合

**Managed** タブを選択し、Dedicated Kubernetes と同じ手順を実行します。

[![Alt text](/img/migrated/Picture11-4-db200ae1.png)](/img/migrated/Picture11-4-db200ae1.png)

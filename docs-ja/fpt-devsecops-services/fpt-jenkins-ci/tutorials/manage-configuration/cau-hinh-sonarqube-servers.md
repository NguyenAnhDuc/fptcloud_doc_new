---
id: "cau-hinh-sonarqube-servers"
title: "SonarQube サーバーの設定"
sidebar_label: "SonarQube サーバーの設定"
sidebar_position: 3
---

# SonarQube サーバーの設定

FPT Cloud では、Portal インターフェースを通じてソースコードスキャン統合のために Jenkins に SonarQube サーバーを設定できます。

### SonarQube サーバーの追加

**ステップ 1:** FPT Portal メニュー > **Jenkins CI** > **Detail Cluster** > **Configurations** > **SonarQube** > **Add SonarQube** をクリックします。

[![](/img/migrated/Picture71-633dc912.png)](/img/migrated/Picture71-633dc912.png)

**ステップ 2:** 新しい SonarQube サーバーの必要情報を入力します：

- **Name:** SonarQube サーバー名を入力します。
- **Server URL:** SonarQube システムのパブリックドメイン URL を入力します。
- **Server authentication token:** SonarQube の認証に使用する **Secret Text** 種別のクレデンシャルを選択します。クレデンシャルを作成していない場合は、SonarQube サーバーを設定する前に先に作成してください。

[![](/img/migrated/Picture72-129945ad.png)](/img/migrated/Picture72-129945ad.png)

**ステップ 3:** SonarQube サーバー設定追加後の結果。

[![](/img/migrated/Picture73-5b081a3b.png)](/img/migrated/Picture73-5b081a3b.png)

Jenkins での結果：

[![](/img/migrated/Picture74-888bade3.png)](/img/migrated/Picture74-888bade3.png)

[![](/img/migrated/Picture75-fccead94.png)](/img/migrated/Picture75-fccead94.png)

### SonarQube サーバーの編集

**ステップ 1:** FPT Portal メニュー > **Jenkins CI** > **Detail Cluster** > **Configurations** > **SonarQube** > 編集する SonarQube サーバーを選択します。

[![](/img/migrated/Picture76-8dd18554.png)](/img/migrated/Picture76-8dd18554.png)

**ステップ 2:** 更新情報を入力します。サーバー URL の変更または認証クレデンシャルの変更が可能です。

[![](/img/migrated/Picture77-d96ace12.png)](/img/migrated/Picture77-d96ace12.png)

**ステップ 3:** 編集後の結果。

[![](/img/migrated/Picture78-bd49a38c.png)](/img/migrated/Picture78-bd49a38c.png)

### SonarQube サーバーの削除

**ステップ 1:** FPT Portal メニュー > **Jenkins CI** > **Detail Cluster** > **Configurations** > **SonarQube** > 削除する SonarQube サーバーを選択します。

[![](/img/migrated/Picture79-550edce0.png)](/img/migrated/Picture79-550edce0.png)

**ステップ 2:** 確認テキストを入力して操作を確認します。

[![](/img/migrated/Picture80-0e42955d.png)](/img/migrated/Picture80-0e42955d.png)

**ステップ 3:** SonarQube 設定削除後の結果。

[![](/img/migrated/Picture81-2069cb06.png)](/img/migrated/Picture81-2069cb06.png)

Jenkins での結果：

[![](/img/migrated/Picture82-307c9ace.png)](/img/migrated/Picture82-307c9ace.png)

[![](/img/migrated/Picture83-1b0ac94a.png)](/img/migrated/Picture83-1b0ac94a.png)

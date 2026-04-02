---
id: "global-search-usage"
title: "グローバル検索の使い方"
description: "FPT CloudのGlobal Search機能を使ってリソースを検索・管理するためのステップバイステップガイドです。"
sidebar_label: "グローバル検索の使い方"
sidebar_position: 2
---

# グローバル検索の使い方

FPT CloudのGlobal Search機能では、1つのTenant内のリソースを素早く検索できます。対応するリソースタイプは **Instances、IP Addresses、Subnets、Security Groups、Database** です。

**ステップ1.** FPT Cloudの画面上部にある検索ボックスにキーワードを入力します。

[![](/img/migrated/gsdb-1024x535-32afb917.png)](/img/migrated/gsdb-1024x535-32afb917.png)

**ステップ2.** Instances、IP Addresses、Subnets、Security Groups、Databaseのいずれかのタブを選択すると、リソースタイプごとにグループ化された検索結果を確認できます。

- 各タブの下には、対応するリソースタイプの検索結果が表示されます。
- Public IPおよびPrivate IPを検索し、VMのNICに適用することができます。IPに紐づいているリソース（Associated Resource）も確認できます（現在のスコープではInstanceおよびSubnetをIPで検索することができます）。説明されているカタログ外のIP（DHCPのIPやゲートウェイIPなど）は検索の対象外です。
- 各結果をクリックすると、そのリソースの詳細情報画面に移動します。

:::note
リソースに詳細情報画面がない場合は、そのリソースタイプの一覧画面に移動します。
:::

**ステップ3.** すべての結果を確認するには、**View all result** をクリックします。

**ステップ4.** すべての検索結果が表示された画面が開きます。

[![](/img/migrated/Screenshot-2025-11-03-at-10.09.40-1024x5-1d8fcc25.png)](/img/migrated/Screenshot-2025-11-03-at-10.09.40-1024x5-1d8fcc25.png)

**ステップ5.** VPCやRegionのフィルター、または **Search by resource name** フィールドを使って検索結果を絞り込みます。

**ステップ6.** **Download** をクリックすると、画面に表示されている結果に基づいてリストをファイルとしてエクスポートできます。

[![](/img/migrated/search-img-4-1024x801-d4eae9d2.png)](/img/migrated/search-img-4-1024x801-d4eae9d2.png)

ダウンロードされるファイルはExcel形式で、6つのシートが含まれます。

- **Sheet Summary**: Instance、Floating IP、Subnet、Security Group、Databaseを含むすべての検索結果をまとめたシートです。
- **Sheet Instances**: SummaryシートからInstancesをグループ化したシートです。Summaryシートにデータがない場合は空白になります。

[![](/img/migrated/search-img-5-1024x517-6eb1006b.png)](/img/migrated/search-img-5-1024x517-6eb1006b.png)

- **Sheet Floating IPs**: SummaryシートからFloating IPsをグループ化したシートです。Summaryシートにデータがない場合は空白になります。
- **Sheet Subnets**: SummaryシートからSubnetsをグループ化したシートです。Summaryシートにデータがない場合は空白になります。
- **Sheet Security Groups**: SummaryシートからSecurity Groupsをグループ化したシートです。Summaryシートにデータがない場合は空白になります。
- **Sheet Database**: SummaryシートからDatabaseをグループ化したシートです。Summaryシートにデータがない場合は空白になります。

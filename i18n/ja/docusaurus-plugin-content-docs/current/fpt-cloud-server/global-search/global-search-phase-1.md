---
id: "global-search-phase-1"
title: "グローバル検索"
sidebar_label: "グローバル検索"
sidebar_position: 3
---

グローバル検索

FPT Cloud のグローバル検索機能を使用すると、1 つの Tenant の範囲内で、**Instances、IP Addresses、Subnets、Security Groups、Database** などのリソースタイプを素早く検索できます。この機能により、FPT Cloud プラットフォーム上でのリソース管理の時間を節約し、効率を向上させます。

**手順 1.** FPT Cloud インターフェースの上部にある検索ボックスにキーワードを入力します。

![](images/global-search-phase-1/img-001.png)

**手順 2.** Instances、IP Addresses、Subnets、Security Groups、Database のいずれかのタブを選択して、リソースタイプ別にグループ化された結果を確認します。

  * 各タブの下に、リソースタイプごとの検索結果が表示されます。
    * ユーザーはパブリック IP およびプライベート IP を検索し、VM の NIC に適用できます。IP に紐づけられたリソースを確認できます（Associated Resource — 現在の範囲では IP による Instance および Subnet の検索をサポート）。説明されている IP カタログ外の IP（例：DHCP IP、ゲートウェイ IP など）の検索はサポートされていません。
  * 各結果をクリックすると、そのリソースの詳細情報画面に移動します。（注意：リソースに詳細情報画面がない場合、システムはそのリソースタイプの一覧画面に移動します。）

**手順 3.** すべての結果を確認するには、**View all result** をクリックします。

**手順 4.** すべての検索結果を表示する画面が開きます。

![](images/global-search-phase-1/img-002.png)

**手順 5.** VPC、Region フィルターまたは「Search by resource name」検索ボックスを使用して結果を絞り込みます。

**手順 6.** **Download** をクリックして、画面に表示されている結果に基づいた結果リストファイルをダウンロードします。

![](images/global-search-phase-1/img-003.png)

  * ダウンロードファイルの形式は Excel で、6 つのシートがあります。

  * Summary シート: Instance、Floating IP、Subnet、Security Group、Database リソースのすべての検索結果を集計します。

  * Instances シート: Summary シートから Instance をグループ化します。Summary シートにデータがない場合は空白になります。

![](images/global-search-phase-1/img-004.png)

  * Floating IPs シート: Summary シートから Floating IP をグループ化します。Summary シートにデータがない場合は空白になります。

  * Subnets シート: Summary シートから Subnet をグループ化します。Summary シートにデータがない場合は空白になります。

  * Security Groups シート: Summary シートから Security Group をグループ化します。Summary シートにデータがない場合は空白になります。

  * Database シート: Summary シートから Database をグループ化します。Summary シートにデータがない場合は空白になります。

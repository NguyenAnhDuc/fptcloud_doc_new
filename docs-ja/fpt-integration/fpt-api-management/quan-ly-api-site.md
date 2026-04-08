---
id: "quan-ly-api-site"
title: "APIサイトの管理"
sidebar_label: "APIサイトの管理"
sidebar_position: 8
---

API Siteの管理


SiteはProductとPortalをマッピングするために使用されるエンティティです。

**Pilot**または**Normal**プランをご利用の場合、デフォルトのPublic Siteが提供されており、新しいSiteを追加作成することはできません。複数のSiteを使用したい場合は、上位プランにアップグレードしてください。

## 1\. 新しいSiteの作成

**ステップ1：** **Application**メニューから**API Manager** > **Sites**に移動し、**Create**をクリックします。

![Userguide FPT API Management 16](images/quan-ly-api-site/img-001.png)

**ステップ2：** 必要な情報を入力します。

  * **Name：** Site名。
  * **Title：** タイトル。
  * **Production mode：** Productモードを選択します。
  * **Virtual area：** 管理者が事前に設定したリストから仮想エリアを選択します。
  * **Gateway：** 管理者が事前に設定したリストからGatewayを選択します。
  * **Portal：** 管理者が事前に設定したリストからPortalを選択します。


![Userguide FPT API Management 17](images/quan-ly-api-site/img-002.png)

**ステップ3**：**OK**をクリックして**Site**を作成します。

![Userguide FPT API Management 18](images/quan-ly-api-site/img-003.png)

## 2\. Site情報の変更

**Site**の情報を変更するには、以下の手順で操作します。

**ステップ1：** **Site Management**で変更する**Site**を選択し、**Edit**をクリックします。

![Userguide FPT API Management 47](images/quan-ly-api-site/img-004.png)

**ステップ3：** 新しい情報を入力し、**OK**をクリックします。

![Userguide FPT API Management 48](images/quan-ly-api-site/img-005.png)

**注意：** 一部のフィールドは変更できず、編集インターフェースで無効化されます。その他のフィールドはSite作成時と同じバリデーションルールに従う必要があります。


## 3\. Productのステージング

Siteにproductを公開するには、まずproductをSiteにステージングする必要があります。

**注意：** productがSiteにステージングされても、consumerはそのproduct内のAPIをまだ使用できません。consumerがproductにアクセスできるようになるには、productをpublishする必要があります。

productをSiteに割り当てるには、以下の手順で操作します。

**ステップ1：** **Product Management**で**Site**に公開する**Product**を選択し、**Staging**をクリックします。

![Userguide FPT API Management 19](images/quan-ly-api-site/img-006.png)

**ステップ2：** **Staging to New site**をクリックします。

![Userguide FPT API Management 20](images/quan-ly-api-site/img-007.png)

**ステップ3：** 必要な情報を入力します。

  * **Product**：Siteに割り当てるProduct。
  * **Site to publish**：事前に作成したSiteを選択します。


![Userguide FPT API Management 21](images/quan-ly-api-site/img-008.png)

**ステップ4：** **OK**をクリックします。

![Userguide FPT API Management 22](images/quan-ly-api-site/img-009.png)

**注意：**

  * 1つのSiteに複数のProductを含めることができます。
  * 1つのProductを複数のSiteで使用できます。
  * Siteは、そのSite上でどのProductが表示されるかを決定します（子ProductのAPIも含む）。


## 4\. Site内のProductステータスの管理

Productをステージングした後、Siteに直接アクセスして、含まれているProductとその動作ステータスを管理できます。

特定のSite内のProductを管理するには、以下の手順で操作します。

**ステップ1：** **Site Management**で管理するProductが含まれる**Site**を選択します。

![Userguide FPT API Management 49](images/quan-ly-api-site/img-010.png)

**ステップ2：** **Product**をクリックします。

ここではProductのリストとSite内でのステータスが表示されます。

Productのステータスには次のものがあります：**Unstaging**、**Staging**、**Published**、**Deprecated**、**Retired**、**Archived。**

ステータス間の関係は以下の図で説明されています。

![Userguide FPT API Management 50](images/quan-ly-api-site/img-011.png)

  * **Published**状態では、そのProductに割り当てられたconsumerのみがProductを閲覧・使用できます。
  * **Deprecated**状態では、新しいconsumerはProductを見ることができませんが、既存のconsumerは引き続き使用できます。
  * **Retired**状態では、既存のconsumerもProductを使用できなくなります。
  * **Archived**状態では、Productを削除できます。**Archived**状態のProductを管理するには**Archived products**タブに移動します。


## 5\. ProductのEndpointの取得

Published状態の各ProductにはconsumerがAPIを呼び出すためのEndpointがあります。

ProductのEndpointを取得するには、以下の手順で操作します。

**ステップ1：** **Site Management**でProductが含まれる**Site**を選択し、**Product**をクリックします。

![Userguide FPT API Management 51](images/quan-ly-api-site/img-012.png)

**ステップ2：** **Product**を選択し、**Manage Api**をクリックします。

![Userguide FPT API Management 52](images/quan-ly-api-site/img-013.png)

**ステップ3：** Endpoint情報は**API EndPoint**列に表示されます。

![Userguide FPT API Management 53](images/quan-ly-api-site/img-014.png)


## 6\. 開発者Portalの管理

Siteをpublishすると、Portalページが作成されます。このページはSite上にpublishされたProductのリストと各ProductのAPIを管理するために使用されます。


Portalリンクを取得するには、以下の手順で操作します。

**ステップ1：** メニューから**Sites**に移動し、Siteを選択して**Edit**をクリックします。Portalリンクは**Portal URL**フィールドに表示されます。


![PybQsyRHfYQdAAAAAElFTkSuQmCC](images/quan-ly-api-site/img-015.png)


ステップ2：そのリンクにアクセスすると、以下のインターフェースのページが表示されます。


![](images/quan-ly-api-site/img-016.png)


ログインするには、ユーザー名とパスワードを含むアカウントが必要です。アカウント情報の提供については、お問い合わせください。


## 7\. IPアクセス制御の管理

セキュリティを強化するために、API Providerは特定のIPアドレスからのconsumerによるAPI呼び出しを許可またはブロックできます。


ステップ1：メニューから**Sites**に移動し、Published状態のProductを持つSiteを選択します。


![](images/quan-ly-api-site/img-017.png)

ステップ2：**API Browser**をクリックし、詳細パネルで**Enable IP Limitation**にチェックを入れます。


![](images/quan-ly-api-site/img-018.png)


ステップ3：許可/拒否するIPを入力します。

  * **Allow**にIPを入力した場合：consumerはこれらのIPアドレスからAPIを呼び出せます。
  * **Deny**にIPを入力した場合：consumerはこれらのIPアドレスからAPIを呼び出せません。
  * **Allow**にIPを入力し**Deny**が空の場合：AllowリストのIPのみがAPIにアクセスできます。


  * **Deny**にIPを入力し**Allow**が空の場合：DenyリストのIPを除くすべてのIPがAPIにアクセスできます。
  *   * 注意：1つのIPアドレスを同時に許可かつ拒否することはできません。


## 8\. テスト

ConsumerにAPI情報を共有する前に、publishされたAPIが正しく動作しているかどうかをAPI Management内で直接テストできます。


以下の手順に従ってください。


ステップ1：**API Manager**メニューから**Site** > **Product** > **Manage API**に移動し、テストするAPIを選択します。


ステップ2：**Test API**または**Test With Consumer**をクリックします。


例として、**Test With Consumer**の場合：


![0L+8P1vSrnc3CgBYH8pbd269XkPQNauXZuhoaHGHBy46gFIPazbHYAsWLAg3d3djaVPTQACAAAAL0wCEIDnjyGwAAAAAACAgkn+Hzty+ksupAM1AAAAAElFTkSuQmCC](images/quan-ly-api-site/img-019.png)


  1. **Consumer**ドロップダウンに表示されているサブスクライブ済みconsumerを選択します。


  2. 対応するHTTPメソッド（GET/POST/PUT/DELETE）を選択します。


  3. API Endpointの前に**https://**を付加します。


例：**https://** gateway.apim.fptcloud.com/demo/truong11/newapi


  4. 認証方式を選択します。

– Basic：システムは選択したconsumerのユーザー名を自動的に取得します。パスワードを入力するだけです。パスワードの取得方法は「consumerの認証情報を取得する」セクションを参照してください。


  * – API key：システムはキー名を自動的に取得します。キーの値を入力するだけです。キー値の取得方法は「consumerの認証情報を取得する」セクションを参照してください。
  *

  5. **Call**をクリックしてAPIを呼び出します。結果は**Response**フィールドに表示されます。


*

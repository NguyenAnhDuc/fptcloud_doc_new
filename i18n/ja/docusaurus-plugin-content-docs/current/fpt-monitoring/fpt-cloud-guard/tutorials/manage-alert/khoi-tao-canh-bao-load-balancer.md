---
id: "khoi-tao-canh-bao-load-balancer"
title: "Load Balancer のアラートを作成する"
sidebar_label: "Load Balancer のアラートを作成する"
sidebar_position: 3
---

# Load Balancer のアラートを作成する

**手順 1:** メニューから **Security** > **Cloud Guard** に移動し、**Resource Alerts** タブを開いて **Create Alert** をクリックします。

Load Balancer のアラートを作成するには、**Type** = **Load Balancer** を選択します。

[![file](/img/migrated/image-1722327850097-b58a81be.png)](/img/migrated/image-1722327850097-b58a81be.png)

**Metric Type**、**Apply to**、**Severity** を選択し、**Configure Condition** でアラート条件を設定して、**Notify to** で受信者を選択します。

FPT Cloud Guard は以下の Load Balancer メトリクスに対応しています:

| No. | メトリクス | 単位 | 説明 |
|---|---|---|---|
| 1 | HTTP request | request/s | Load Balancer への 1 秒あたりのリクエスト数 |
| 2 | HTTP code 1xx | request/s | 1 秒あたりの 1xx HTTP レスポンスコード数 |
| 3 | HTTP code 2xx | request/s | 1 秒あたりの 2xx HTTP レスポンスコード数 |
| 4 | HTTP code 3xx | request/s | 1 秒あたりの 3xx HTTP レスポンスコード数 |
| 5 | HTTP code 4xx | request/s | 1 秒あたりの 4xx HTTP レスポンスコード数 |
| 6 | HTTP code 5xx | request/s | 1 秒あたりの 5xx HTTP レスポンスコード数 |
| 7 | Active connection | connection | Load Balancer へのアクティブな接続数（1 接続に複数リクエスト可） |
| 8 | Percentage of backend down | % | 異常なバックエンドの割合 |
| 9 | Number of backends down | 数 | 異常なバックエンドの数 |
| 10 | Total packet In/Out per second | packet/s | Load Balancer が処理するパケットの合計数（方向別） |
| 11 | Drop packet In/Out per second | packet/s | 1 秒あたりのドロップパケット数。In または Out がしきい値を超えた場合に通知 |
| 12 | Provisioning status Pending | N/A | Load Balancer のプロビジョニングステータスが Pending の場合に通知 |
| 13 | Operating status Unhealthy | N/A | Load Balancer の稼働ステータスが Unhealthy の場合に通知 |

アラート条件の設定:

| No. | フィールド | 説明 |
|---|---|---|
| 1 | Metric type | アラートを設定する Load Balancer メトリクスを選択 |
| 2 | Operator | 比較条件を選択 |
| 3 | Threshold | しきい値を設定。超過時にアラートを送信 |
| 4 | Alert interval | 評価間隔を設定（最小 3 分） |
| 5 | Repeat time | 条件が持続している間のアラート繰り返し間隔を設定 |

**手順 2:** Load Balancer アラートの受信者がいない場合は、**Create recipient here** をクリックして新しい VPC レベルの受信者を作成します。

[![file](/img/migrated/image-1722328406388-fa58b299.png)](/img/migrated/image-1722328406388-fa58b299.png)

**手順 3:** アラート作成画面に戻り、新しく作成した受信者を選択して **Create** をクリックします。

[![file](/img/migrated/image-1722329874375-73b8678d.png)](/img/migrated/image-1722329874375-73b8678d.png)

アラートが作成されてリストに表示されます。条件が超過した場合または正常に戻った場合、自動的に通知が送信されます。

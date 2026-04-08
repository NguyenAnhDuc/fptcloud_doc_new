---
id: "khoi-tao-canh-bao-vpn"
title: "VPN site-to-site のアラートを作成する"
sidebar_label: "VPN site-to-site のアラートを作成する"
sidebar_position: 4
---

# VPN site-to-site のアラートを作成する

**手順 1:** メニューから **Security** > **Cloud Guard** に移動し、**Resource Alerts** タブを開いて **Create Alert** をクリックします。

VPN のアラートを作成するには、**Type** = **VPN site-to-site** を選択します。

[![file](/img/migrated/image-1759485440087-d519bebe.png)](/img/migrated/image-1759485440087-d519bebe.png)

**Metric Type**、**Apply to**、**Severity** を選択し、**Configure Condition** でアラート条件を設定して、**Notify to** で受信者を選択します。

FPT Cloud Guard は以下の VPN メトリクスに対応しています:

| No. | メトリクス | 単位 | 説明 |
|---|---|---|---|
| 1 | CPU usage | % | VPN Gateway の平均 CPU 使用率。設定間隔内の平均がしきい値を超えた場合に通知 |
| 2 | RAM usage | % | VPN Gateway の平均メモリ使用率。設定間隔内の平均がしきい値を超えた場合に通知 |
| 3 | Packet loss | packet/s | VPN トンネル経由の転送中に失われたパケット数（1 秒あたり） |
| 4 | VPN Gateway status Offline | status | VPN Gateway のステータスが Offline の場合に通知 |
| 5 | VPN Connection status phase 1 Offline | status | VPN Connection Phase 1 のステータスが Offline の場合に通知 |
| 6 | VPN Connection status phase 2 Offline | status | すべての Phase 2 トンネルが Offline の場合に通知。1 つでも Online のトンネルがある場合は通知されません |

アラート条件の設定:

| No. | フィールド | 説明 |
|---|---|---|
| 1 | Metric type | アラートを設定する VPN メトリクスを選択 |
| 2 | Operator | 比較条件を選択 |
| 3 | Threshold | しきい値を設定。超過時にアラートを送信 |
| 4 | Alert interval | 評価間隔を設定（最小 3 分） |
| 5 | Repeat time | 条件が持続している間のアラート繰り返し間隔を設定 |

**手順 2:** VPN アラートの受信者がいない場合は、**Create recipient here** をクリックして新しい VPC レベルの受信者を作成します。

[![file](/img/migrated/image-1722328406388-fa58b299.png)](/img/migrated/image-1722328406388-fa58b299.png)

**手順 3:** アラート作成画面に戻り、新しく作成した受信者を選択して **Create** をクリックします。

[![file](/img/migrated/image-1722329874375-73b8678d.png)](/img/migrated/image-1722329874375-73b8678d.png)

アラートが作成されてリストに表示されます。条件が超過した場合または正常に戻った場合、自動的に通知が送信されます。

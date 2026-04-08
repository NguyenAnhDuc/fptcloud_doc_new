---
id: "setting-up-alerts-via-the-cloud-guard-service-guide"
title: "Cloud Guardによるアラート設定"
description: "Cloud GuardサービスでVPN Site-to-Siteのアラートしきい値を設定するガイドです。"
sidebar_label: "アラート設定（Cloud Guard）"
sidebar_position: "27"
---

# Cloud Guardによるアラート設定

Cloud Guardを連携することで、VPNサービスのアラートしきい値を設定できます。システムが設定したしきい値に達した際、Cloud Guardが設定済みチャネル（Email、Telegram、Slack、Teamsなど）を通じてアラート通知を送信します。

## ステップ1：受信者を作成する

1. メニューから **Security** > **Cloud Guard** に移動し、**Recipients** タブを開いて **Create Recipient** をクリックします。

[![受信者の作成](/img/migrated/p-1-f817fb3c.jpg)](/img/migrated/p-1-f817fb3c.jpg)

2. 以下の情報を入力します：
   - **Name**：受信者の名前。
   - **Method**：アラート配信方法 — Email、Telegram、Slack、またはTeams。
   - **Address**：アラートの送信先アドレス。

**Emailの場合：** 受信者のメールアドレスを入力します。

[![Email受信者](/img/migrated/z-2-738000ae.jpg)](/img/migrated/z-2-738000ae.jpg)

**Slackの場合：** Slackチャンネルを選択します。Slackアカウントにログインし、一覧からチャンネルを選択します。

[![Slack受信者](/img/migrated/v-1-5bc7f36a.jpg)](/img/migrated/v-1-5bc7f36a.jpg)

**Teamsの場合：** TeamsチャンネルのURLを入力し、**Send test message** をクリックします。

[![Teams受信者](/img/migrated/t-1-896a2971.jpg)](/img/migrated/t-1-896a2971.jpg)

**Telegramの場合：** 受信者のTelegram IDを入力します。

[![Telegram受信者](/img/migrated/y-1-875cce30.jpg)](/img/migrated/y-1-875cce30.jpg)

3. **Create** をクリックして受信者を保存します。

[![作成結果](/img/migrated/u-1-58adaaa5.jpg)](/img/migrated/u-1-58adaaa5.jpg)

## ステップ2：VPN用アラートを作成する

1. 上部メニューから **Cloud Guard** > **Resource alert** > **Create alarm** を選択します。

2. 以下の詳細を入力します：
   - **Name**：アラートの表示名。
   - **Type**：**VPN Site-to-Site** を選択します。

[![アラートタイプ](/img/migrated/q-1-08daccea.jpg)](/img/migrated/q-1-08daccea.jpg)

3. アラート条件を設定します：

| No. | フィールド | 説明 |
| --- | --- | --- |
| 1 | Metric type | 監視するVPNメトリクスを選択します。 |
| 2 | Operator | 比較条件を選択します。 |
| 3 | Threshold | アラートをトリガーするしきい値を設定します。 |
| 4 | Alert interval | 計算頻度（最小：3分）。 |
| 5 | Repeat time | 条件がしきい値を超え続ける場合のアラート繰り返し頻度。 |

FPT Cloud Guardは以下のVPNメトリクスのアラートをサポートしています：

| No. | メトリクス | 説明 |
| --- | --- | --- |
| 1 | CPU Usage (%) | VPN GatewayデバイスのCPU使用率。 |
| 2 | Packet loss (packet/s) | 2つのVPNエンドポイント間で1秒あたりに失われたパケット数。 |
| 3 | RAM Usage (%) | VPN GatewayのRAM使用率。 |
| 4 | VPN Connection Status Phase 1 Offline | VPN接続のPhase 1（IKE）のオフライン状態。 |
| 5 | VPN Connection Status Phase 2 Offline | VPN接続のPhase 2（IPsec）のオフライン状態。 |
| 6 | VPN Gateway Status Offline | VPN Gatewayのオフライン状態。 |

:::note
CPU Usage、Packet loss、RAM UsageメトリクスはVPN Gatewayに適用します。Phase 1/Phase 2 OfflineおよびGateway Status OfflineメトリクスはリストからVPN Connectionを選択します。
:::

[![リソースへの適用](/img/migrated/k-cc13892d.jpg)](/img/migrated/k-cc13892d.jpg)

4. **Severity** レベルと **Notify to** 受信者を選択します。

5. **Create** をクリックして完了します。条件がトリガーされた場合、または正常に戻った場合、システムが設定済みの方法で自動的に通知を送信します。

[![アラート通知メール](/img/migrated/l-eb2b2e19.jpg)](/img/migrated/l-eb2b2e19.jpg)

[![アラート通知詳細](/img/migrated/m-7f81c9fa.jpg)](/img/migrated/m-7f81c9fa.jpg)

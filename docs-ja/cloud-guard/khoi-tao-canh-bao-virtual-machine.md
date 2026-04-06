---
id: "khoi-tao-canh-bao-virtual-machine"
title: Virtual Machine (VM) のアラートを作成する
sidebar_label: Virtual Machine (VM) のアラートを作成する
sidebar_position: 4
---

# Virtual Machine (VM) のアラートを作成する

**手順 1:** メニューから **Security** > **Cloud Guard** に移動し、**Resource Alerts** タブを開いて **Create Alert** をクリックします。

ダイアログボックスが表示され、設定手順が案内されます。

**手順 2:** 対応するフィールドに入力してアラートを設定します:

| フィールド | 説明 |
|---|---|
| **Name** | アラート名を入力します |
| **Type** | 監視するリソースタイプを選択します |
| **Apply to** | このアラートを適用するリソースを選択します |
| **Configure metrics** | アラートのしきい値を設定します |

- **Type** (メトリクスタイプ): 監視するデータタイプを選択します。CPU 使用率、RAM 使用率、ネットワーク帯域幅、ディスク IOPS などがサポートされています。
- **Operator:** 比較演算子を選択します: `<`、`<=`、`>=`、`>`。
- **Value:** しきい値を入力します。選択したメトリクスタイプの単位に応じて検証されます。
- **Alert Interval:** 評価サイクルを選択します: 3 分、5 分、30 分、1 時間、6 時間、または 1 日。
- **Severity:** アラートの重大度レベルを選択します。
- **Notify to:** 通知受信者を選択します。

**手順 3:** **Create** をクリックしてアラートを作成します。システムが設定を検証し、作成プロセスを開始します。

作成後、新しいアラートが管理テーブルに表示され、Name、State、Type、Metric、Severity、Applied to、Notify to、Status の情報が確認できます。

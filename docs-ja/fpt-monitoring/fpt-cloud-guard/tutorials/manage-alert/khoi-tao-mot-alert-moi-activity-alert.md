---
id: "khoi-tao-mot-alert-moi-activity-alert"
title: "Activity Alert を作成する"
sidebar_label: "Activity Alert を作成する"
sidebar_position: 5
---

# Activity Alert を作成する

**手順 1:** メニューから **Security** > **Cloud Guard** に移動し、**Activity Alerts** タブを開いて **Create Alert** をクリックします。

[![file](/img/migrated/image-1725532325024-78ca8f1c.png)](/img/migrated/image-1725532325024-78ca8f1c.png)

ダイアログボックスが表示され、設定手順が案内されます。

**手順 2:** 対応するフィールドに入力してアラートを設定します:

| フィールド | 説明 |
|---|---|
| **Name** | アラート名を入力します |
| **Resource Type** | 監視するリソースタイプを選択します |
| **Action** | アラートをトリガーするアクションを選択します |
| **Severity** | 重大度レベルを選択します: Critical、High、Medium、Low |
| **Notify to** | 通知受信者を選択します |

:::note
リソースタイプごとにサポートされるアクションが異なります。アクティビティログアラートはデフォルトで VPC 全体に適用されます。
:::

[![file](/img/migrated/image-1725532405898-58b580bc.png)](/img/migrated/image-1725532405898-58b580bc.png)

**手順 3:** **Create** をクリックしてアラートを作成します。システムが設定を検証し、作成プロセスを開始します。

作成後、新しいアラートが管理テーブルに表示されます。

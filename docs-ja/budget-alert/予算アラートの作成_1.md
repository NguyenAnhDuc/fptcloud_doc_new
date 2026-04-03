---
id: "initiating-a-budget-alert"
title: "予算アラートの作成"
description: "FPT Cloud Portalでプロアクティブな予算監視のための予算アラートを作成するガイドです。"
sidebar_label: "予算アラートの作成"
sidebar_position: 2
---

# 予算アラートの作成

予算アラートは、クラウドコストが設定した予算しきい値に達した際に通知を受け取ることができます。予算超過のリスクを軽減し、プロアクティブなコスト管理を実現します。

## 前提条件

- **Billing**へのアクセス権を持つFPT Cloudアカウント。
- FPT Cloud Portalにサインイン済みであること。

## 予算アラートの作成手順

1. **Billing** → **Budget Alert** を選択します。作成済み予算アラートの一覧が表示されます。

   ![予算アラート一覧](/img/migrated/image-1722238229739-f6ec0b8c.png)

2. **Create Budget Alert** をクリックします。情報入力画面に遷移します。

   ![Create Budget Alertボタン](/img/migrated/image-1722238258978-89fcec91.png)

3. **Basic Information** を入力します：
   - **Budget Name**（必須）：予算アラートの名前。大文字、数字、ダッシュ、アンダースコアを含む最大50文字。
   - **Budget period**（必須）：
     - **Monthly** を選択すると、月次で請求・アラートします（毎月1日の00:00から月末の23:59まで）。
     - **Daily** を選択すると、日次で請求・アラートします（毎日の00:00から23:59まで）。
   - **Budget amount**（必須）：1日または1か月の合計予算額（デフォルト通貨はVND）。
   - **Budget scope**（必須）：
     - **All services** を選択すると、現在のテナント内の全サービス・リソースの実績コストに基づいてアラートしきい値を計算します。
     - **Filter specific resources** を選択すると、VPCまたはタグごとに特定サービスのアラートしきい値を計算します。

   :::note
   複数のVPC／タグを選択できます。実績コストは、選択された全VPC・タグに同時に属するサービスの使用量から算出されます。1つのVPC・タグのみに属し、他の選択されたVPC・タグに属さないサービスは含まれません。
   :::

   ![Basic Information入力フォーム](/img/migrated/image-1722238275706-df16f772.png)

4. **Next** をクリックします。**Alert thresholds & Create** 画面に遷移します：
   - **Threshold number**（必須）：アラートしきい値を入力します。
   - **Threshold unit**（必須）：
     - **Percent (%)** を選択 — 実績コストがBudget amountのx%以上になるとアラートが発動します（x = threshold number）。
     - **Vietnam dong (đ)** を選択 — 実績コストがthreshold number以上になるとアラートが発動します。
   - **Severity**（必須）：アラートレベルを **Warning** または **Critical** から選択します。
   - **Notification title**（必須）：アラートメールのタイトル。最大255文字（引用符、バックスラッシュ、スラッシュは使用不可）。
   - **Description**（必須）：アラートメールの本文。最大500文字。
   - **Email recipients**（必須）：アラートを受信するメールアドレスを入力します（複数入力可）。
   - **Add Alert Threshold**（任意）：同じ予算に追加のアラートしきい値を作成できます。

   :::note
   各アラートしきい値は最大3回通知されます。
   :::

   ![Alert thresholds入力フォーム](/img/migrated/image-1722238293122-55c558a2.png)

   ![Alert threshold設定例](/img/migrated/image-1722238298494-77e57e31.png)

5. **Create** をクリックして予算アラートを保存するか、**Previous** をクリックしてBasic Information画面に戻ります。

   ![予算アラート作成の確認](/img/migrated/image-1722238751599-265e93b0.png)

新しい予算アラートが一覧に表示されます。

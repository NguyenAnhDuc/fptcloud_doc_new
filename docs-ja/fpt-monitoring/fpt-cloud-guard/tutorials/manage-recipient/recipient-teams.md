---
id: "recipient-teams"
title: "Microsoft Teams で受信者を作成する"
sidebar_label: "Microsoft Teams で受信者を作成する"
sidebar_position: 3
---

# Microsoft Teams で受信者を作成する

Microsoft Teams 受信者機能を使うと、FPT Cloud Guard セキュリティ監視システムからの通知を受け取るために Teams チャネルまたはグループチャットを設定できます。この連携により、運用チームがタイムリーにアラートを受信し、セキュリティイベントに迅速に対応できます。

## 設定手順

**手順 1:** Microsoft Teams から Webhook URL を取得する

1. Microsoft Teams を開き、アラートを受信したいチャネルまたはチャットを選択します。
2. ワークフローを作成します: **Webhook リクエストを受信したときにチャネル/チャットに投稿する**。
3. Webhook URL をコピーして **Done** をクリックします。

ワークフローの作成と Webhook URL の取得方法の詳細については、[Microsoft サポート – Microsoft Teams の Workflows を使用した受信 Webhook の作成](https://support.microsoft.com/en-us/office/create-incoming-webhooks-with-workflows-for-microsoft-teams-8ae491c7-0394-4861-ba59-055e33f75498) を参照してください。

**手順 2:** Cloud Guard に受信者を追加する

1. FPT Cloud Portal を開き、**Cloud Guard** サービスを選択します。
2. **Recipient** に移動して **Create** をクリックします。
3. **Method** = **Teams** を選択します。
4. Teams からコピーした Webhook URL を貼り付け、**Send test message** をクリックして接続をテストします。
5. テストメッセージが成功したら、**Create** をクリックして受信者を保存します。

[![file](/img/migrated/image-1750750425129-e5027a61.png)](/img/migrated/image-1750750425129-e5027a61.png)

**手順 3:** アラートに受信者を割り当てる

1. **Resource alert**、**Activity alert**、または **Threat alert** タブに移動します。
2. 既存のアラートを選択するか、新しいアラートを作成します。
3. Teams 受信者をアラートに追加して **Update** または **Create** をクリックします。

アラートがお客様の Teams チャネルまたはチャットに配信されます。

[![file](/img/migrated/image-1750751150232-eeb9cfc1.png)](/img/migrated/image-1750751150232-eeb9cfc1.png)

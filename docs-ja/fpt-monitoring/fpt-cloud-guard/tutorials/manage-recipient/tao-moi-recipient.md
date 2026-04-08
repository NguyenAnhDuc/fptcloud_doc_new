---
id: "tao-moi-recipient"
title: "受信者を作成する"
sidebar_label: "受信者を作成する"
sidebar_position: 2
---

# 受信者を作成する

**手順 1:** メニューから **Cloud Guard** > **Alert** を選択し、**Recipients** タブを開いて **Create Recipient** をクリックします。

ダイアログボックスが表示されて手順が案内されます。

[![file](/img/migrated/image-1725532997863-419e42b8.png)](/img/migrated/image-1725532997863-419e42b8.png)

**手順 2:** 必要な情報を入力します:

- **Name:** 受信者名を入力します。
- **Type:** 通知方法を選択します。FPT Alert は Email、Telegram、Slack に対応しています。

**手順 3:** 選択した Type に対応する **Address** を入力します。リソース使用量がしきい値を超えた際に、ここに通知が送信されます。

**Email でアラートを受信する場合:**
- **Address:** 受信者のメールアドレスを入力します。

[![Userguide FPT Alert 2022 14](/img/migrated/Userguide-FPT-Alert-2022-14-1024x465-a24c9d90.png)](/img/migrated/Userguide-FPT-Alert-2022-14-1024x465-a24c9d90.png)

**Telegram でアラートを受信する場合:**
- **Telegram ID:** 受信者の Telegram ID を入力します。ID がない場合はシステムの案内に従って取得してください。

[![Userguide FPT Alert 2022 15](/img/migrated/Userguide-FPT-Alert-2022-15-1024x490-9d5693fb.png)](/img/migrated/Userguide-FPT-Alert-2022-15-1024x490-9d5693fb.png)

:::tip
Telegram グループでアラートを受信する場合:
1. グループを作成してグループ ID を取得し、Cloud Guard で対応する受信者を作成します。
2. グループに FPT Cloud Guard ボットを追加してアラートを受信します。
:::

**Slack でアラートを受信する場合:**
- **Slack Channel ID:** アラートを受信する Slack チャネルを選択します。Slack アカウントにログインしてリストからチャネルを選択すると、FPT Portal が自動的に Slack Channel ID を取得します。

[![Userguide FPT Alert 2022 16](/img/migrated/Userguide-FPT-Alert-2022-16-1024x495-7ab818fa.png)](/img/migrated/Userguide-FPT-Alert-2022-16-1024x495-7ab818fa.png)

**手順 4:** すべての情報を入力したら **Create** をクリックします。

[![Userguide FPT Alert 2022 17](/img/migrated/Userguide-FPT-Alert-2022-17-1024x471-52aac771.png)](/img/migrated/Userguide-FPT-Alert-2022-17-1024x471-52aac771.png)

システムがリクエストを処理して確認します。作成後、新しい受信者が管理テーブルに表示されます。

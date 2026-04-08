---
id: "atlassian-jira"
title: "Atlassian Jira"
description: "Atlassian Jira と Incident Management を連携するガイド"
sidebar_label: "Atlassian Jira"
sidebar_position: 8
---

# Atlassian Jira

**Atlassian Jira** との連携により、インシデント対応中の Jira プロジェクトの状態を正確に維持できます。Incident が宣言されると、システムは対応する Incident リンクを含む **bug issue** を Jira に自動作成します。

## Jira をインストールする

[![Jira インストールフォーム](/img/migrated/Picture12-e85cc061.png)](/img/migrated/Picture12-e85cc061.png)

以下の情報を入力します：

- **Atlassian Server URL**: Atlassian Jira システムにアクセスするための URL
- **User email**: Atlassian Jira に登録しているアカウントのメールアドレス
- **Access Token**: アカウントの access token

:::note
Access Token の作成または取得方法は[こちら](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/)を参照してください。
:::

すべての情報を入力したら、**Integration** をクリックして Jira をシステムに連携します。

## トリガーを作成する

Jira のインストールが完了したら、**Show details** をクリックし、次に **Run when an event fires** をクリックします。

[![Jira トリガー作成フォーム](/img/migrated/Picture15-0aab59a9.png)](/img/migrated/Picture15-0aab59a9.png)

以下の情報を入力します：

- **Jira Project**: issue を作成する Jira プロジェクト
- **Issue Type**: 作成する issue のタイプ
- **Incident active status**: Incident が active 状態のときの issue の状態
- **Incident resolved status**: Incident が resolved 状態のときの issue の状態
- **Run this action when**: **Incident is declared** を選択

**Add event action** をクリックして完了します。

:::note
**Run when an event fires** を続けてクリックすることで、複数のトリガーを作成できます。
:::

Jira に自動作成される bug issue の例：

[![Jira に自動作成された bug issue の例](/img/migrated/Screenshot_11-1-3905656c.png)](/img/migrated/Screenshot_11-1-3905656c.png)

## トリガーを削除する

**Trash** アイコンをクリックしてトリガーを削除します。

[![Jira トリガーを削除](/img/migrated/Picture17-d289c674.png)](/img/migrated/Picture17-d289c674.png)

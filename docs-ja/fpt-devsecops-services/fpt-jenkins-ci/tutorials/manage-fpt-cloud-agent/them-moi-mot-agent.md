---
id: "them-moi-mot-agent"
title: "エージェントの新規追加"
sidebar_label: "エージェントの新規追加"
sidebar_position: 2
---

# エージェントの新規追加

**ステップ 1:** FPT Portal メニュー > **Jenkins CI** > **Detail Cluster** > **Agent Managements** に移動します。

[![](/img/migrated/Picture9-18241027.png)](/img/migrated/Picture9-18241027.png)

**ステップ 2:** **Add Agent** をクリックして新しいエージェントの情報を入力します。

[![](/img/migrated/Picture10-003a6a70.png)](/img/migrated/Picture10-003a6a70.png)

- **Agent name:** エージェント名を入力します。
- **Resources:** エージェントのリソースを選択します。
- **Descriptions:** 任意で説明を入力します。

**ステップ 3:** **Add** をクリックしてエージェントを作成します。システムがエージェントを作成し、Portal に結果が表示されます。

[![](/img/migrated/Picture11-47d0c513.png)](/img/migrated/Picture11-47d0c513.png)

作成後、エージェントのステータスが **Succeeded** に変わります。

[![](/img/migrated/Picture12-216368ab.png)](/img/migrated/Picture12-216368ab.png)

**ステップ 4:** Jenkins インスタンスでエージェントが作成されたことを確認します。

Jenkins にログイン > **Manage Jenkins** > **Cloud**。

[![](/img/migrated/Picture13-e6968122.png)](/img/migrated/Picture13-e6968122.png)

Jenkins 上に作成されたエージェント：

[![](/img/migrated/Picture14-c2b336f7.png)](/img/migrated/Picture14-c2b336f7.png)

エージェントの詳細設定を確認できます：

[![](/img/migrated/Picture15-1ba3bbd5.png)](/img/migrated/Picture15-1ba3bbd5.png)

[![](/img/migrated/Picture16-c793efd3.png)](/img/migrated/Picture16-c793efd3.png)

:::note
エージェントを作成すると、システムはエージェントのラベルを自動的に作成し、「このノードのラベル式と一致するジョブのみビルド」として設定します。Jenkins ジョブには正しいラベルを入力してください。

また、エージェント作成時に、エージェントを管理する Kubernetes クラスターへの接続に使用するシークレットが自動的に作成されます。このシークレットを削除すると、システムはエージェントに接続できなくなります。
:::

[![](/img/migrated/Picture17-def5a338.png)](/img/migrated/Picture17-def5a338.png)

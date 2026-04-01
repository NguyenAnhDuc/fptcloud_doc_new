---
id: "edit-capabilities"
title: "アカウントcapabilitiesの編集"
description: "ArgoCDアカウントのloginおよびapiKey capabilitiesを設定するガイド"
sidebar_label: "Capabilitiesの編集"
sidebar_position: 25
---

# アカウントcapabilitiesの編集

FPT Cloudでは各アカウントのcapabilitiesを設定できます：
- **login**: アカウントがArgoCDインターフェースからログインできるようにします
- **apiKey**: API経由でアクセスするための認証tokenの作成を許可します — ArgoCD APIと対話する必要があるCI/CDパイプライン統合または自動化ワークフローに適しています

1. **Security & Access** > **Local Account**画面で**Edit Account**をクリックします。

[![](/img/migrated/Picture85-06a2fa3e.png)](/img/migrated/Picture85-06a2fa3e.png)

2. 希望するcapabilitiesにチェックを入れるか外します。

:::note
各アカウントには少なくとも1つのcapability（`apiKey`または`login`）を選択する必要があります。
:::

[![](/img/migrated/Picture86-56c75d94.png)](/img/migrated/Picture86-56c75d94.png)

3. **Edit**をクリックして変更を保存します。更新後の結果：

[![](/img/migrated/Picture87-29463c43.png)](/img/migrated/Picture87-29463c43.png)

---
id: "configure-whitelist-ip"
title: "IPホワイトリストの設定"
description: "ArgoCDへのアクセスを許可するIPリストを設定するガイド"
sidebar_label: "IPホワイトリストの設定"
sidebar_position: 9
---

# IPホワイトリストの設定

FPT CloudはPortalインターフェースを通じてArgoCD URLへのアクセスを制御するIPホワイトリストの設定をサポートしています。

1. **Security & Access** > **Whitelist IP**画面に移動します。

[![](/img/migrated/Picture41-2-66349b65.png)](/img/migrated/Picture41-2-66349b65.png)

2. ArgoCDへのアクセスを許可するIPアドレスを入力します。

:::note
IPはカンマ（`,`）で区切ります。
:::

[![](/img/migrated/Picture42-2-a15b14d8.png)](/img/migrated/Picture42-2-a15b14d8.png)

3. 設定後の結果：

[![](/img/migrated/Picture43-2-ba2e74dc.png)](/img/migrated/Picture43-2-ba2e74dc.png)

4. 結果を確認します：ホワイトリストにないIPからArgoCDにアクセスすると403エラーが返されます。

[![](/img/migrated/Picture44-2-d712e561.png)](/img/migrated/Picture44-2-d712e561.png)

---
id: "create-address-pair"
title: "Create Address Pair"
description: "1つのNICに複数のAllow Address Pairを設定でき、また1つのAddress PairをさまざまなInstanceの複数のNICに設定することもできます。"
sidebar_label: "Create Address Pair"
sidebar_position: 3
---

# Create Address Pair

1つのNICには複数のAllow Address Pairを設定できます。また、1つのAddress Pairを異なるInstanceの複数のNICに設定することも可能です。

**ステップ1** : Allow Address Pair管理画面で、**Create allow address pair** を選択します。

[![Allow Address Pair管理画面](/img/migrated/image-1708395038189-f6a186ff.png)](/img/migrated/image-1708395038189-f6a186ff.png)

**ステップ2** : Allow IP Address Pairの設定を行います。

- Instanceを選択します。
- Allow Address Pairを設定するNIC（ネットワークカード）を選択します。
- 許可するIPアドレス（またはCIDR）を入力します。

[![Allow IP Address Pair設定画面](/img/migrated/image-1708395102833-872f3b79.png)](/img/migrated/image-1708395102833-872f3b79.png)

**ステップ3** : Allow MAC Address Pairの設定（任意）。設定しない場合、システムは選択中のNICのMACアドレスをデフォルトで使用します。

- **Advanced Setting** をクリックします。
- MACアドレスを入力します。

[![Allow MAC Address Pair詳細設定画面](/img/migrated/image-1708395142834-551ea26d.png)](/img/migrated/image-1708395142834-551ea26d.png)

**ステップ4** : **Create allow address pair** をクリックします。

[![Create allow address pair確認画面](/img/migrated/image-1708395173721-87a3a5e8.png)](/img/migrated/image-1708395173721-87a3a5e8.png)

**ステップ5** : 設定内容を確認します。Allow Address Pairの一覧画面およびInstanceのNetwork Interface情報に反映されていることを確認してください。

[![Allow Address Pair一覧画面](/img/migrated/image-1708395209748-2de1f3be.png)](/img/migrated/image-1708395209748-2de1f3be.png)

[![InstanceのNetwork Interface情報](/img/migrated/image-1708395219352-74b14a4a.png)](/img/migrated/image-1708395219352-74b14a4a.png)

:::tip
MACアドレスを指定しない場合は、選択したNICのMACアドレスが自動的に適用されます。
:::

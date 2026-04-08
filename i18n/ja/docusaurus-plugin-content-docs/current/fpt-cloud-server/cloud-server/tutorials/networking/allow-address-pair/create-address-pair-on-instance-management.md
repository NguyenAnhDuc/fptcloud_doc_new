---
id: "create-address-pair-on-instance-management"
title: "Create Address Pair on Instance Management"
description: "Instance管理画面のNetwork Interfaceからも、Allow Address Pairを作成することができます。"
sidebar_label: "Create Address Pair on Instance Management"
sidebar_position: 4
---

# Create Address Pair on Instance Management

Instance管理画面からもAllow Address Pairを作成することができます。

**ステップ1** : Instance ManagementのNetwork Interfaceを開きます。

[![Instance ManagementのNetwork Interface画面](/img/migrated/image-1708395287542-5f97bc70.png)](/img/migrated/image-1708395287542-5f97bc70.png)

**ステップ2** : 三点メニュー（アクションボタン）をクリックします。

[![アクションメニューの選択](/img/migrated/image-1708395308051-7e4aea2c.png)](/img/migrated/image-1708395308051-7e4aea2c.png)

**ステップ3** : **Create allow address pair** を選択します。

[![Create allow address pair選択画面](/img/migrated/image-1708395330849-4dc00d57.png)](/img/migrated/image-1708395330849-4dc00d57.png)

**ステップ4** : Allow IP Address Pairの設定を行います。

- システムは現在のNICをデフォルトで選択します。
- 許可するIPアドレス（またはCIDR）を入力します。

[![Allow IP Address Pair設定画面](/img/migrated/image-1708395364577-06c64d2e.png)](/img/migrated/image-1708395364577-06c64d2e.png)

**ステップ5** : Allow MAC Address Pairの設定（任意）。設定しない場合、システムは選択中のNICのMACアドレスをデフォルトで使用します。

- **Advanced Setting** をクリックします。
- MACアドレスを入力します。

[![Allow MAC Address Pair詳細設定画面](/img/migrated/image-1708395403972-a559d684.png)](/img/migrated/image-1708395403972-a559d684.png)

**ステップ6** : **Create allow address pair** をクリックします。

[![Create allow address pair実行画面](/img/migrated/image-1708395440253-4bafad85.png)](/img/migrated/image-1708395440253-4bafad85.png)

**ステップ7** : 設定内容を確認します。Allow Address Pairの一覧画面およびInstanceのNetwork Interface情報に反映されていることを確認してください。

[![Allow Address Pair一覧画面（更新後）](/img/migrated/image-1708395474257-047d287b.png)](/img/migrated/image-1708395474257-047d287b.png)

[![InstanceのNetwork Interface情報（更新後）](/img/migrated/image-1708395486779-7e386ff3.png)](/img/migrated/image-1708395486779-7e386ff3.png)

:::note
Instance管理画面から作成する場合、対象のNICは自動的に現在表示中のNICが選択されます。
:::

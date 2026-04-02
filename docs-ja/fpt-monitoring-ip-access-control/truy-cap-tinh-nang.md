---
id: "truy-cap-tinh-nang"
title: "IP アクセス制御機能にアクセスする"
sidebar_label: "機能へのアクセス"
sidebar_position: 5
---

# IP アクセス制御機能にアクセスする

1. FPT Cloud Console Portal で設定したい FPT Cloud Monitoring ワークスペースを開き、**IP Access Control** タブを選択します。
2. 機能がまだ有効になっていない場合は、**Enable IP Access Control** ボタンが表示されます。クリックして機能を有効にします。

[![Enable IP Access Control](/img/migrated/Screenshot_2-37902d64.png)](/img/migrated/Screenshot_2-37902d64.png)

3. 機能がすでに有効な場合は、4 つの FPT Cloud Monitoring システムコンポーネントに対応する 4 つのホワイトリスト IP テーブルと **Disable IP Access Control** ボタンが表示されます。クリックして機能を無効にします。

[![メイン画面](/img/migrated/Screenshot_3-2a6306f9.png)](/img/migrated/Screenshot_3-2a6306f9.png)

:::warning
- **IP Access Control が無効の場合、すべての IP アドレスがワークスペースの FPT Cloud Monitoring コンポーネントにアクセスできます。**
- **有効にすると、デフォルトで FPT Cloud 外からのすべてのアクセスが即座にブロックされます**（FPT Cloud 内の監視エージェントは引き続き正常に動作します）。外部 IP が FPT Cloud Monitoring エンドポイントにアクセスするには、ホワイトリストへの登録が必要です。
:::

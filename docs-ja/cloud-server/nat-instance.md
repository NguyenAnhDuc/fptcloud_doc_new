---
id: "nat-instance"
title: "NAT Instance"
description: "isolated networkのインスタンスがインターネットにアクセスできるようにNAT Instanceを設定します。"
sidebar_label: "NAT Instance"
sidebar_position: 54
---

# NAT Instance

NAT Instanceにより、isolated network内のインスタンスがインターネットにアクセスできるようになります。ソフトウェアのインストールやオンプレミス環境への接続に利用できます。

## NAT Instanceのセットアップ

1. FCIが提供するイメージからNAT Instanceを作成します。

   [![NAT Instanceイメージの選択](/img/migrated/image-1719483610635-8c2b0ddb.png)](/img/migrated/image-1719483610635-8c2b0ddb.png)

   [![NAT Instanceの設定](/img/migrated/image-1744796146357-3f0ad3a4.png)](/img/migrated/image-1744796146357-3f0ad3a4.png)

:::warning
SubnetフィールドにはインターネットアクセスができるSubnetを選択する必要があります。
:::

   [![Subnetの選択](/img/migrated/image-1744796019571-e2a7f4b2.png)](/img/migrated/image-1744796019571-e2a7f4b2.png)

2. NAT Instanceに **Floating IP** をアタッチします（作成時にアタッチ済みの場合は省略）。

   [![Floating IPのアタッチ](/img/migrated/image-1719483638728-722a763b.png)](/img/migrated/image-1719483638728-722a763b.png)

3. isolated network内のインスタンスのデフォルトゲートウェイをNAT InstanceのNICに向けるよう設定します。

:::note
1つのNAT Instanceは最大9つのisolated networkをサポートできます（routed network用のプライマリNICを除く）。
:::

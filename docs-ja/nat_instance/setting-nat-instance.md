---
id: "setting-nat-instance"
title: "NAT Instanceの設定"
description: "isolated networkのインスタンスがインターネットにアクセスできるようにNAT Instanceを設定する手順です。"
sidebar_label: "NAT Instanceの設定"
sidebar_position: 5
---

# NAT Instanceの設定

1. FCIが提供するイメージからNAT Instanceを作成します。

   [![NAT Instanceイメージの選択](/img/migrated/image-1719483610635-8c2b0ddb.png)](/img/migrated/image-1719483610635-8c2b0ddb.png)
   [![NAT Instance作成画面](/img/migrated/image-1719483615596-32d8b6da.png)](/img/migrated/image-1719483615596-32d8b6da.png)

   :::warning
   Subnetフィールドでは、インターネットにアクセスできるSubnetを選択してください。
   :::

   [![インターネットアクセス可能なSubnetの選択](/img/migrated/image-1719483627834-69d59364.png)](/img/migrated/image-1719483627834-69d59364.png)

2. NAT InstanceにFloating IPを割り当てます。インスタンス作成時にすでにFloating IPが割り当てられている場合は、この手順をスキップしてください。

   [![Floating IPリスト](/img/migrated/image-1719483638728-722a763b.png)](/img/migrated/image-1719483638728-722a763b.png)
   [![Floating IPの割り当て](/img/migrated/image-1719483643946-bcd8d209.png)](/img/migrated/image-1719483643946-bcd8d209.png)
   [![Floating IP割り当ての確認](/img/migrated/image-1719483648767-91c83524.png)](/img/migrated/image-1719483648767-91c83524.png)

3. NAT Instanceにsecurity groupを割り当て、isolated network内のインスタンスがインターネットにアクセスできるように必要なルールを開きます。pingテスト用にICMPポートを追加することもできます。インスタンス作成時にすでにsecurity groupが割り当てられている場合は、この手順をスキップしてください。

   [![Security groupリスト](/img/migrated/image-1719483661177-fbc71ad5.png)](/img/migrated/image-1719483661177-fbc71ad5.png)
   [![Security groupの割り当て](/img/migrated/image-1719483666245-93b5fa24.png)](/img/migrated/image-1719483666245-93b5fa24.png)

4. インターネットアクセスが必要なインスタンスのisolated subnetと同じSubnetのNetwork Interface Card（NIC）を追加します。

   [![NICの追加](/img/migrated/image-1719483681542-c695fbb8.png)](/img/migrated/image-1719483681542-c695fbb8.png)
   [![isolated subnetの選択](/img/migrated/image-1719483686233-68077f61.png)](/img/migrated/image-1719483686233-68077f61.png)
   [![NIC追加の確認](/img/migrated/image-1719483693216-09b07e4b.png)](/img/migrated/image-1719483693216-09b07e4b.png)

5. isolated networkに属するNICに対して、address pair `0.0.0.0/0` を許可します。

   [![allowed address pairの設定](/img/migrated/image-1719483704950-51c12336.png)](/img/migrated/image-1719483704950-51c12336.png)
   [![allowed address pairの確認](/img/migrated/image-1719483711778-66dc215f.png)](/img/migrated/image-1719483711778-66dc215f.png)

6. isolated network内のインスタンスにアクセスし、default gatewayをNAT InstanceのNICのIPアドレスに変更します。以下の例ではWindowsインスタンスを使用しています。

   [![WindowsインスタンスでのGateway設定](/img/migrated/image-1719483727521-1d1e34d1.png)](/img/migrated/image-1719483727521-1d1e34d1.png)
   [![NAT InstanceのNIC IPの入力](/img/migrated/image-1719483733636-77084b42.png)](/img/migrated/image-1719483733636-77084b42.png)
   [![Gateway設定の確認](/img/migrated/image-1719483740704-1b21dfa7.png)](/img/migrated/image-1719483740704-1b21dfa7.png)

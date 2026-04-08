---
id: "tao-firewall-policy"
title: "Firewall Policy の作成"
description: "VLAN 10.2.0.0/24（Port 3）内のコンピュータがインターネットに接続できるようにするファイアウォールルールを作成します。"
sidebar_label: "Firewall Policy の作成"
sidebar_position: 4
---

# Firewall Policy の作成

VLAN 10.2.0.0/24（Port 3）内のコンピュータがインターネットに接続できるようにするファイアウォールルールを作成します。  
**ステップ 1：** **Firewall Address** を設定します（使用する IP アドレスを定義します）：  
**Policy & Objects** > **Addresses** > **Create new** > **Address** を選択します。
[![Userguide Fortigate FPT NGFW 2022 7](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-7-1024-f6cbec98.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-7-1024-f6cbec98.png)
[![Userguide Fortigate FPT NGFW 2022 8](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-8-1024-6b3e2463.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-8-1024-6b3e2463.png)  
**ステップ 2：** **Firewall Policy** を作成します：  
**Policy & Objects** > **Firewall Policy** > **Create new** を選択します。  
[![Userguide Fortigate FPT NGFW 2022 9](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-9-1024-0428cf8e.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-9-1024-0428cf8e.png)  
**Interfaces**、**Action**、**Service**、および **Security Profiles** を設定します（Security Profile の設定はセクション 4.4 を参照）。
[![Userguide Fortigate FPT NGFW 2022 10](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-10-102-cfc82ca1.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-10-102-cfc82ca1.png)
  * **Incoming Interface：** VLAN 10.2.0.0/24（Port3）を選択します。
  * **Outgoing Interfaces：** Port 2（WAN）を選択します。
  * **Source：** ステップ 1 で作成した **Address** を選択します。
  * **Destination：** **ALL** を選択します（または複数の宛先を選択して destination を制限することもできます）。
  * **Service：** **ALL** を選択します。
  * **NAT：** **Use Outgoing Interface Address** — Port 2（WAN）を通じて NAT されたパブリック IP を使用して NAT を行います。[![Userguide Fortigate FPT NGFW 2022 11](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-11-102-c05de940.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-11-102-c05de940.png)

インターネットからの脅威からシステムを保護するために、Security Profile を追加します。
  * **SSL Inspection：** deep-inspection モードに切り替えます。ユーザーのブラウザに証明書のインストールが必要です（**Deep-inspection** > **Edit** > **Download certificate** をクリックすることで証明書をダウンロードできます）。

---
id: "cau-hinh-network-interfaces"
title: "Network Interfaces の設定"
description: "CLI で管理インターフェース（Port 1）を設定し、Web インターフェースへのアクセスに成功した後、LAN インターフェースの設定手順を説明します。"
sidebar_label: "Network Interfaces の設定"
sidebar_position: 3
---

# Network Interfaces の設定

**ステップ 1：** CLI で管理インターフェース（Port 1）を設定し、Web インターフェースへのアクセスに成功した後、LAN の役割を担う Interface の設定手順は以下の通りです。  
[![Userguide Fortigate FPT NGFW 2022 3](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-3-1024-f1152674.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-3-1024-f1152674.png)  
**ステップ 2：** WAN の役割を担う Interface（Port 2）を設定します。  
[![Userguide Fortigate FPT NGFW 2022 4](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-4-1024-81285d65.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-4-1024-81285d65.png)  
**Administrative Access：** 各サービスを通じて interface へのアクセスを許可します。
なお、VMWare/OpenStack では IP 10.0.0.6 がインターネットへ接続できるよう NAT が設定されています。

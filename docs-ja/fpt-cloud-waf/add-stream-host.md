---
id: "add-stream-host"
title: "Stream hostの追加"
description: "WAF DashboardでTCP/UDPトラフィックを転送するStream hostを作成する方法。"
sidebar_label: "Stream hostの追加"
sidebar_position: 18
---

# Stream hostの追加

**Stream host** はNginxの機能で、TCP/UDPトラフィックをネットワーク内の別のサーバーへ直接転送します。

1. メニューから **Hosts** > **Streams** を選択して管理画面を開きます。

   [![Stream host管理画面](/img/migrated/Userguide-FPT-WAF-2022-29-1024x503-9a982ba9.png)](/img/migrated/Userguide-FPT-WAF-2022-29-1024x503-9a982ba9.png)

2. **Create Stream** をクリックして新規作成画面を開き、情報を入力します。

   - **Incoming Port**
   - **Forward Host**
   - **Forward Port**

   必要に応じて拡張機能を設定します。
   - **TCP Forwarding**
   - **UDP Forwarding**

   [![Stream host情報の入力](/img/migrated/Userguide-FPT-WAF-2022-30-1024x502-e7c3ef10.png)](/img/migrated/Userguide-FPT-WAF-2022-30-1024x502-e7c3ef10.png)

3. **Create Stream** をクリックして作成します。続けて別のstream hostを作成する場合は **Create & Add Another** をクリックします。

   [![作成後のStream host詳細](/img/migrated/Userguide-FPT-WAF-2022-31-1024x504-c73172be.png)](/img/migrated/Userguide-FPT-WAF-2022-31-1024x504-c73172be.png)

---
id: "manage-redirection-host"
title: "Redirection hostの管理"
description: "WAF DashboardでRedirection hostを作成・管理し、URLを別のページまたはURLへ転送する方法。"
sidebar_label: "Redirection hostの管理"
sidebar_position: 6
---

# Redirection hostの管理

**Redirection host** は、URLを別のWebサイトまたはURLへ転送し、転送先のコンテンツを表示する機能です。

## Redirection hostの作成

1. メニューから **Hosts** > **Redirection** を選択して管理画面を開き、**Create Redirection** をクリックします。

   [![Redirection host作成 — ステップ1](/img/migrated/Userguide-FPT-WAF-2022-26-1024x515-a7c1ce4f.png)](/img/migrated/Userguide-FPT-WAF-2022-26-1024x515-a7c1ce4f.png)

2. Redirection hostの情報を入力します。

   - **Domain Names**: 追加するドメイン名。既存のproxy hostのドメイン名と重複させないこと。
   - **Forward Scheme**: ドメインのプロトコル（auto/http/https）。
   - **Forward Domain**: 転送先のドメイン/Webサイト。
   - **HTTP Code**: 転送方法オプション。

   必要に応じて拡張機能を設定します。
   - **Preserve Path**
   - **Block Common Exploits**
   - **SSL Certificate**: 対応するSSL certificateを選択します。

   [![Redirection host情報の入力](/img/migrated/Userguide-FPT-WAF-2022-27-1024x515-98ae9d17.png)](/img/migrated/Userguide-FPT-WAF-2022-27-1024x515-98ae9d17.png)

3. **Save** をクリックして保存します。

   [![作成後のRedirection host詳細](/img/migrated/Userguide-FPT-WAF-2022-28-1024x517-460fec80.png)](/img/migrated/Userguide-FPT-WAF-2022-28-1024x517-460fec80.png)

## その他の操作

| 操作 | 説明 |
|---|---|
| **Toggle** | Redirection hostを有効/無効に切り替えます |
| **Edit** | Redirection hostの情報を編集します |
| **View** | Redirection hostの詳細を表示します |
| **Delete** | Redirection hostを削除します |

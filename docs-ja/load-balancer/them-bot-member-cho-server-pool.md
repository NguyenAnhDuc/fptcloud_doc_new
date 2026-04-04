---
id: "them-bot-member-cho-server-pool"
title: "Server Pool へのメンバー追加"
description: "FPT Cloud Load Balancer の Server Pool にメンバーを追加・削除する方法を説明します。"
sidebar_label: "Server Pool へのメンバー追加"
sidebar_position: "22"
---

# Server Pool へのメンバー追加

**member** は Load Balancer の **Server Pool** に所属するバックエンドサーバーで、Load Balancer を通じてユーザーやその他のデバイスからのリクエストを処理します。

Load Balancer 作成時にデフォルトの Server Pool member が自動的に作成されます。

Server Pool にメンバーを追加するには、以下の手順に従ってください：

**手順 1:** Server Pool の一覧画面でメンバーを追加する Server Pool を選択します。

[![file](/img/migrated/image-1710989399033-82cb406f.png)](/img/migrated/image-1710989399033-82cb406f.png)

**手順 2:** **Add server** で **Select instance** ボックスに利用可能な Instance の一覧が表示されます。一覧から Instance を選択します。

[![file](/img/migrated/image-1710989438271-ca679a80.png)](/img/migrated/image-1710989438271-ca679a80.png)

以下の項目を編集できます：

- **Port**: member がリクエストを受け取るポート。member が提供するサービスに対応するポートを指定します。
- **Weight**: Server Pool 内の各 member がリクエストを処理する優先度の重み。重みが高い member ほど多くのリクエストを受け取ります。

Server Pool member を削除するには、削除する member の **Action** メニューから **Remove** を選択します。

[![file](/img/migrated/image-1710989470976-16ee6e91.png)](/img/migrated/image-1710989470976-16ee6e91.png)

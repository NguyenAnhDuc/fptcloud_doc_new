---
id: "tinh-nang-hibernate-wakeup"
title: "Hibernate & Wake-up 機能"
description: "Managed FKE クラスターの Hibernate & Wake-up 機能について説明します。dev/test 環境でのコスト削減に役立てることができます。"
sidebar_label: "Hibernate & Wake-up 機能"
sidebar_position: 23
---

# Hibernate & Wake-up 機能

クラスターは本番環境で稼働している場合は 24 時間使用されますが、dev、test、staging、demo 環境用のクラスターでは、使用しない時間帯に K8s リソースをスケールダウンすることでコストを節約できます。ただし、手動でのスケールダウンは時間がかかるため、Hibernate 機能はこの作業を自動化するために開発されました。

**Hibernate 機能**を使用すると、クラスター内のリソースに以下の変更が加えられます。

1. worker node（インスタンス）が削除されます。
2. pod が Pending 状態に移行します。
3. service はそのまま維持されます。
4. ストレージ状態のコンポーネント（PVC など）や etcd 内の状態も保持されます。

**Wake-up** は Hibernate の逆の機能で、クラスターをハイバネート前の状態に戻します。

**Portal** での Hibernate と Wake-up の操作手順は以下のとおりです。

## Hibernate の手順

**ステップ 1:** メニューで **Kubernetes** を選択すると、**Kubernetes Management** ページが表示されます。

[![](/img/migrated/Picture1-2-60a2b2ae.png)](/img/migrated/Picture1-2-60a2b2ae.png)

**ステップ 2:** **Hibernate** ボタンをクリックしてプロセスを開始します。

[![](/img/migrated/Picture2-1-dfd066c0.png)](/img/migrated/Picture2-1-dfd066c0.png)

**ステップ 3:** クラスター名を入力してプロセスの開始を確認します。

[![](/img/migrated/Picture3-1-82ec1b38.png)](/img/migrated/Picture3-1-82ec1b38.png)

通知が表示されると Hibernate プロセスが開始し、Portal のステータスが _Hibernating (Running)_ に変わります。

[![](/img/migrated/Picture4-1-951d4b79.png)](/img/migrated/Picture4-1-951d4b79.png)

プロセス完了後、クラスターのステータスが _Succeeded (Hibernated)_ に戻り、Hibernate が成功したことを示します。

[![](/img/migrated/Picture5-1-85b21a7a.png)](/img/migrated/Picture5-1-85b21a7a.png)

## Wake-up の手順

_Succeeded (Hibernated)_ 状態のクラスターに対して、Wake-up 機能を使用してクラスターを元の状態に復元できます。

**ステップ 1:** メニューで **Kubernetes** を選択すると、**Kubernetes Management** ページが表示されます。

[![](/img/migrated/Picture6-1-5cf5a6d0.png)](/img/migrated/Picture6-1-5cf5a6d0.png)

**ステップ 2:** **Wakeup** ボタンをクリックしてプロセスを開始します。

[![](/img/migrated/Picture7-1-3df9d5b9.png)](/img/migrated/Picture7-1-3df9d5b9.png)

**ステップ 3:** クラスター名を入力してプロセスを確認します。

[![](/img/migrated/Picture8-1-03f0209f.png)](/img/migrated/Picture8-1-03f0209f.png)

通知が表示されると Wake-up プロセスが開始し、Portal のステータスが _Processing (Running)_ に変わります。

[![](/img/migrated/Picture9-1-a91ef8d9.png)](/img/migrated/Picture9-1-a91ef8d9.png)

プロセス完了後、クラスターのステータスが _Succeeded (Running)_ に戻り、Wake-up が成功したことを示します。

[![](/img/migrated/Picture10-1-9430756e.png)](/img/migrated/Picture10-1-9430756e.png)

## 注意事項

- Hibernate プロセスを開始する前に、クラスター内のすべての pod が _Running_ 状態であり、他のリソース（svc type LB、ingress、Persistent Volume、secrets、configmaps など）が正常に動作していることを確認することを推奨します。
- クラスターがハイバネート状態のときに追加のデプロイメントをデプロイした場合、新しいリソースはすべて _Pending_ 状態になり、ユーザーが Wake-up を選択するまでその状態が続きます。

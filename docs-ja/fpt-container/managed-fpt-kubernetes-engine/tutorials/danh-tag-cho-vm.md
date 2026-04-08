---
id: "danh-tag-cho-vm"
title: "仮想マシンへのタグ付け機能"
description: "Tagging 機能を使用すると、仮想マシンにカスタムタグを付けてリソースの分類、検索、管理を効率化できます。"
sidebar_label: "仮想マシンへのタグ付け機能"
sidebar_position: 12
---

# 仮想マシンへのタグ付け機能

**Tagging** 機能を使用すると、仮想マシンにカスタムタグ（tag）を付けて**リソースの分類、検索、管理を効率化**することができます。

- **スマートな分類:** 環境（Production、Staging、Development）、プロジェクト、部門、または管理プロセスに適した任意の基準で仮想マシンを簡単に整理できます。
- **迅速な検索:** 付けられたタグに基づいて、複雑な名前を覚えることなく VM を簡単にフィルタリングおよび検索できます。
- **効率的な管理:** コスト追跡、リソース使用状況の監視、タグ付きの VM グループごとのレポート作成をサポートします。
- **柔軟なカスタマイズ:** タグ（tag）はカスタマイズして様々な目的に適用でき、企業の特定のニーズに対応できます。

Tagging 機能により、仮想化インフラストラクチャの管理がより体系的になり、時間を節約し、システム運用効率を向上させることができます。

Portal での Tagging 機能の操作方法は以下のとおりです。

## タグの作成

MFKE worker group 内の VM にタグを付けるには、事前に使用目的に合わせたタグを作成する必要があります。

**ステップ 1:** **Unify Portal** で **Tagging** を選択 → **Create tag** を選択します。

[![](/img/migrated/Picture1-10-bf6844ca.png)](/img/migrated/Picture1-10-bf6844ca.png)

**ステップ 2:** タグの情報を入力して **Create** ボタンをクリックします。

[![](/img/migrated/Picture2-8-51004a9e.png)](/img/migrated/Picture2-8-51004a9e.png)

- Key（必須）: タグを識別するためのキーを入力します。
- Value（必須）: 設定したキーに対応するタグの値を入力します。
- Color: タグの表示色を選択できます。
- Resource scope: タグを表示する VPC を選択します。

[![](/img/migrated/Picture3-8-ae6842be.png)](/img/migrated/Picture3-8-ae6842be.png)

## MFKE の worker group にタグを付ける

### 新しいクラスターの作成時

**ステップ 1:** **Unify Portal** で **Kubernetes** → **Managed** → **Create a Kubernetes Engine** を選択して新しいクラスターを作成します。

[![](/img/migrated/Picture4-7-53217cf7.png)](/img/migrated/Picture4-7-53217cf7.png)

**ステップ 2:** **Nodes Pool** セクションで、worker group に使用したいタグを選択します。

[![](/img/migrated/Picture5-7-393f40ab.png)](/img/migrated/Picture5-7-393f40ab.png)

クラスターに必要な情報をすべて入力して **Create a Kubernetes** ボタンをクリックします。

[![](/img/migrated/Picture6-7-1907fecc.png)](/img/migrated/Picture6-7-1907fecc.png)

### worker group のタグの編集

**ステップ 1:** メニューで **Kubernetes** を選択すると、**Kubernetes Management** ページが表示されます。タグを編集したいクラスターを選択します。

[![](/img/migrated/Picture7-7-fd7c4aed.png)](/img/migrated/Picture7-7-fd7c4aed.png)

**ステップ 2:** **Node Pools** > **Edit Workers** を選択します。

[![](/img/migrated/Picture8-6-119a53db.png)](/img/migrated/Picture8-6-119a53db.png)

**ステップ 3:** worker group にタグを追加して **Save** ボタンをクリックします。

[![](/img/migrated/Picture9-5-041f86ef.png)](/img/migrated/Picture9-5-041f86ef.png)

[![](/img/migrated/Picture10-5-a318c11e.png)](/img/migrated/Picture10-5-a318c11e.png)

[![](/img/migrated/Picture11-4-1f1f1d05.png)](/img/migrated/Picture11-4-1f1f1d05.png)

タグの編集処理は数分以内に完了します。処理中はクラスターのステータスが **Processing** に変わり、処理が完了するまでクラスターの編集操作はできません。

## worker group からタグを削除する

**ステップ 1:** **Node Pools** > **Edit Workers** を選択します。

[![](/img/migrated/Picture12-4-5468c29c.png)](/img/migrated/Picture12-4-5468c29c.png)

**ステップ 2:** 削除アイコンをクリックして worker group からタグを削除し、**Save** をクリックします。

[![](/img/migrated/Picture13-3-fe7a1c46.png)](/img/migrated/Picture13-3-fe7a1c46.png)

[![](/img/migrated/Picture14-3-ca5786f0.png)](/img/migrated/Picture14-3-ca5786f0.png)

[![](/img/migrated/Picture15-3-b7cb4e29.png)](/img/migrated/Picture15-3-b7cb4e29.png)

タグの削除処理は数分以内に完了します。処理中はクラスターのステータスが **Processing** に変わり、処理が完了するまでクラスターの編集操作はできません。

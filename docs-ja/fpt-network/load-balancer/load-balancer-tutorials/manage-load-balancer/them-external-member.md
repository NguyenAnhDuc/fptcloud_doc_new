---
id: "them-external-member"
title: "外部メンバーの追加"
description: "FPT Cloud Load Balancer の Server Pool に外部エンドポイントを追加・削除する方法を説明します。"
sidebar_label: "外部メンバーの追加"
sidebar_position: "7"
---

# 外部メンバーの追加

**External member** 機能を使用すると、VPC 外部のエンドポイント（サーバー、サービス、アプリケーション）を Server Pool に追加できます。外部メンバーを追加することで Load Balancer の処理能力を拡張し、外部リソースを活用してシステムの効率を向上させることができます。

外部メンバーは Load Balancer の初期作成時にも追加できます。

Load Balancer に外部メンバーを追加するには、以下の手順に従ってください：

**手順 1:** Load Balancer の一覧画面から外部メンバーを追加する Load Balancer を選択します。

**手順 2:** ロードバランサーの詳細ページで **Server pool** タブを選択し、外部メンバーを追加する Server Pool を選択します。

**手順 3:** **Add server** で **Add external member** をクリックし、以下の情報を入力します：

- **Name**: 外部メンバーの表示名。
- **IP Address**: 外部メンバーの IP アドレス。
- **Port**: member がリクエストを受け取るポート。member が提供するサービスに対応するポートを指定します。
- **Weight**: リクエスト処理における優先度の重み。重みが高い member ほど多くのリクエストを受け取ります。

**手順 4:** **Update Server pool** をクリックして保存します。

外部メンバーを削除するには、削除するメンバーの **Action** メニューから **Remove** を選択します。

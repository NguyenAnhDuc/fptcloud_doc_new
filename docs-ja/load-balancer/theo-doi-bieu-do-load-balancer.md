---
id: "theo-doi-bieu-do-load-balancer"
title: "ロードバランサーの監視グラフ"
description: "FPT Cloud Load Balancer のリスナー、Server Pool、アクティブサーバーのリアルタイム監視グラフを表示する方法を説明します。"
sidebar_label: "ロードバランサーの監視グラフ"
sidebar_position: "6"
---

# ロードバランサーの監視グラフ

Load Balancer の一覧から監視する Load Balancer をクリックします。**Monitor** タブでは、各リスナーと Server Pool のリアルタイムグラフでロードバランサーのステータスを確認できます。

**Listener のメトリクス：**

- **[Listener] Request/s**: Listener が 1 秒間に受け取ったリクエスト数。
- **[Listener] Response Code**: Listener が返した HTTP ステータスコード：
  - `2xx`: 成功レスポンス（例：200 OK）
  - `3xx`: リダイレクト（例：301 Moved Permanently）
  - `4xx`: クライアントエラー（例：404 Not Found）
  - `5xx`: サーバーエラー（例：500 Internal Server Error）
- **[Listener] Data Transfer**: Listener を通じたリアルタイムのデータ転送スループット（バイト）。

**Pool のメトリクス：**

- **[Pool] Request/s**: バックエンド Server Pool へ 1 秒間に送られたリクエスト数。Load Balancer が分散する総ワークロードを示します。
- **[Pool] Response Code**: バックエンドが返した HTTP ステータスコード。
- **[Pool] Data Transfer**: バックエンドを通じたリアルタイムのデータ転送スループット（バイト）。

**Active server:** この Load Balancer の現在アクティブ（正常）なバックエンドサーバーの数。トラフィック需要と Load Balancer の設定に応じて変化します。

---
id: "cau-hinh-timeout"
title: "タイムアウトの設定"
description: "FPT Cloud Load Balancer のリスナーにおけるタイムアウト設定の仕組みを説明します。"
sidebar_label: "タイムアウトの設定"
sidebar_position: "13"
---

# タイムアウトの設定

Load Balancer の**タイムアウト**設定は、接続またはリクエストが閉じられる前に存在できる最大時間を定義します。これはリソース管理とシステムの安定したパフォーマンス維持のために重要です。

**仕組み：**

- Load Balancer に接続またはリクエストが送信されると、システムはその接続の許容存続時間のカウントを開始します。
- この時間内に接続が完了しない、またはリクエストへの応答がない場合、接続は閉じられます。
- タイムアウトの設定により、接続やリクエストがハングしてリソースを消費し続ける状況を防ぎます。

タイムアウトはリスナーの作成または更新時に設定します。詳細は[リスナーの作成](/docs/ja/fpt-network/load-balancer/load-balancer-tutorials/manage-listener/create-listener)を参照してください。

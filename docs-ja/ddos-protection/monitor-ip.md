---
id: "monitor-ip"
title: "保護中のIPの監視"
description: "FPT CloudダッシュボードでDDoS保護の状態と攻撃情報を確認する方法です。"
sidebar_label: "保護中のIPの監視"
sidebar_position: "4"
pagination_next: null
---

# 保護中のIPの監視

FPT Cloud Portalのダッシュボードを通じて、システムと保護状態を監視できます。

1. 保護対象IPリスト画面に移動し、確認したいIPを選択します。

[![保護対象IPリスト](/img/migrated/image-1750405781163-2bd000bd.png)](/img/migrated/image-1750405781163-2bd000bd.png)

2. 保護状態を確認します。

   - **攻撃なし**: 今月攻撃が記録されておらず、IPが安全に保護されている旨のメッセージが表示されます。

[![攻撃なしの保護中IP](/img/migrated/image-1750405795153-92b66506.png)](/img/migrated/image-1750405795153-92b66506.png)

   - **攻撃あり**: 各攻撃イベントの詳細情報が表示されます。

[![DDoS攻撃情報](/img/migrated/image-1750405809600-ee4429cf.png)](/img/migrated/image-1750405809600-ee4429cf.png)

## 月次保護サマリー

- **Total traffic**: 今月のIPへの総受信トラフィック。
- **Block traffic**: 検出・遮断された攻撃トラフィックの合計。
- **Block packet**: 検出・遮断された攻撃パケットの合計。

## 攻撃元情報

主な攻撃元がリストアップされます。

[![攻撃元情報](/img/migrated/image-1750405829915-04f543c3.png)](/img/migrated/image-1750405829915-04f543c3.png)

## 攻撃を受けたプロトコル

システムはプロトコルをIDで表示します。詳細は [IANA Protocol Numbers](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml) を参照してください。

- **6**: TCP
- **17**: UDP

[![攻撃を受けたプロトコル](/img/migrated/image-1750405849332-5868a949.png)](/img/migrated/image-1750405849332-5868a949.png)

## パケット長の分布（単位: バイト）

[![パケット長の分布](/img/migrated/image-1750406210587-aaacb4ed.png)](/img/migrated/image-1750406210587-aaacb4ed.png)

## 攻撃元ポート

[![攻撃元ポート](/img/migrated/image-1750406239763-3e4ba6d1.png)](/img/migrated/image-1750406239763-3e4ba6d1.png)

## 攻撃先ポート

[![攻撃先ポート](/img/migrated/image-1750406261280-18e0987a.png)](/img/migrated/image-1750406261280-18e0987a.png)

## 遮断されたトラフィックのグラフ（過去30日間）

[![過去30日間の遮断トラフィック](/img/migrated/image-1750406346658-4b9b1d1a.png)](/img/migrated/image-1750406346658-4b9b1d1a.png)

## 遮断された攻撃の詳細

[![遮断された攻撃の詳細](/img/migrated/image-1750406362941-25b57adb.png)](/img/migrated/image-1750406362941-25b57adb.png)

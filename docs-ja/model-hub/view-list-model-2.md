---
id: "view-list-model-2"
title: "model 一覧の表示"
description: "各 model カードには以下が表示されます："
sidebar_label: "model 一覧の表示"
sidebar_position: 13
---

# model 一覧の表示

各 model カードには以下が表示されます：
  * **model 名**（例：`pipeline-demo-xxxx`）
  * 使用している **Base model**（例：`Qwen2-72B-Instruct`、`Meta-Llama-3-8B-Instruct`）
  * **バージョン数**
  * **model サイズ**（ストレージ使用量）
  * **アクセスと使用情報**（例：閲覧者数）

model カードの **三点メニュー（⋮）** をクリックすると、以下のようなアクションにアクセスできます：
  * **Playground**
Playground インターフェースで model を直接テストします。deploy 前に操作を確認できます。
  * **Create API Endpoint**
model の API endpoint を生成して、アプリケーションやサービスに統合できます。
  * **Fine-tune**
独自のデータセットを使用して model をカスタマイズし、特定のユースケースのパフォーマンスを向上させます。
  * **Delete**
model を削除します [![file](/img/migrated/image-1757045894316-5df42b0e.png)](/img/migrated/image-1757045894316-5df42b0e.png)

## **model の閲覧とフィルタリング**
  * **検索バー**（左上）を使用して、名前で model をすばやく検索します。
  * **フィルターメニュー** を使用して model を並び替えます：
    * **最終更新日時**
    * **model サイズ**
    * **その他の属性**（**+ Add filter** をクリックしてフィルターを追加できます）
  * **ページあたりの model 数**（右下）を調整して、4、8、またはそれ以上の model を表示します。

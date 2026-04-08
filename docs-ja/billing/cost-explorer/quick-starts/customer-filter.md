---
id: "customer-filter"
title: "リソースタイプ別のコストを確認"
description: "コストエクスプローラーでリソースタイプ別のコストを表示するガイドです。"
sidebar_label: "リソースタイプ別のコストを確認"
sidebar_position: 2
---

# リソースタイプ別のコストを確認

この機能では、リソースタイプ別（Instance、Storage、GPU、Load Balancer、S3、Container Registryなど）にコストを分析し、最もコストがかかっているリソースタイプを特定できます。

1. コストエクスプローラー画面で **Customize Filter** をクリック → **Dimension** を **Resource type** に設定します。

   ![Dimension Resource typeを選択](/img/migrated/image-1745469288949-fad47461.png)

2. チャートと詳細テーブルが表示されます：
   - **チャート**：各リソースタイプの利用傾向とコストの時系列推移を表示します。
   - **詳細テーブル**：各リソースタイプの日別または月別の合計コストを表示します。

   ![リソースタイプ別コストチャート](/img/migrated/image-1745469295081-e86d95b6.png)

   ![リソースタイプ別コスト詳細テーブル](/img/migrated/image-1745469318411-ecddb2f4.png)

3. サービス別コスト表示と同様に、他のフィルタ条件もカスタマイズできます。

   ![リソースタイプのCustomize Filter](/img/migrated/image-1745469337552-65e1e153.png)

   ![リソースタイプフィルタの結果](/img/migrated/image-1745469359152-9dc70c29.png)

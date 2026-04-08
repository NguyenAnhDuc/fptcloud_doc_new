---
id: "View-dashboards-and-specific-costs-by-service"
title: "サービス別のコストを確認"
description: "コストエクスプローラーでサービス別のコストダッシュボードを表示し、フィルタをカスタマイズするガイドです。"
sidebar_label: "サービス別のコストを確認"
sidebar_position: 1
---

# サービス別のコストを確認

コストエクスプローラーでは、サービス別のコストチャートを表示し、最もコストがかかっているサービスを素早く特定して予算を最適化できます。

## コストダッシュボードの表示

1. **Billing** → **Cost Explorer** を選択します。テナント内の全Projectで使用されている全サービスのコストが表示されます。

2. スクロールバーをドラッグするかマウスをスクロールして、チャートをズームイン／ズームアウトし、各時点のデータを確認します。

   ![サービス別コストエクスプローラーダッシュボード](/img/migrated/image-1745469271136-91cd6135.png)

## フィルタのカスタマイズ（Customize Filter）

1. **Customize Filter** をクリックします。フィルタ条件を選択するポップアップが表示されます。

2. フィルタ条件：
   - **Start date – End date**：請求期間。
   - **Period type**：コスト変動チャートの表示形式（Daily：日別 / Monthly：月別）。
   - **Service**：サービス名。複数選択可。未選択の場合、全サービスのデータが表示されます。
   - **Project**：複数選択可。未選択の場合、Projectによるフィルタリングは行われません。
   - **VPC**：複数選択可。特定のProjectを選択している場合、そのProjectに属するVPCのみ表示されます。
   - **Tag**：ポータルで管理されるタグ。複数選択可。

   ![Customize Filterダイアログ](/img/migrated/image-1745469282868-f7d5649a.png)

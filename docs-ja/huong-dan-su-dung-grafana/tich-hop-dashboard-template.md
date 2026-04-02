---
id: "tich-hop-dashboard-template"
title: "Dashboard Template の統合"
description: "Grafana で monitoring 情報を確認するために、各サービスに適した Dashboard Template を統合するガイド。"
sidebar_label: "Dashboard の統合"
sidebar_position: 6
---

# Dashboard Template の統合

各サービスの monitoring 情報を確認するために、適切な Dashboard Template を統合する必要があります。

## 手順

**ステップ 1:** 画面左上のメニューを開きます。

[![Alt text](/img/migrated/Picture3-a5fead32.png)](/img/migrated/Picture3-a5fead32.png)

**ステップ 2:** **App** >> **Fmon – Templates** >> **Dashboard Template** タブを選択します。

[![Alt text](/img/migrated/Screenshot_2-b3e58395.png)](/img/migrated/Screenshot_2-b3e58395.png)

すべての dashboard template の一覧が表示されます。

*テンプレート一覧の表示インターフェース*

[![Alt text](/img/migrated/Screenshot_3-0152f813.png)](/img/migrated/Screenshot_3-0152f813.png)

**ステップ 3:** 対応する **Topic** を選択します（例: Kubernetes）。

選択した topic に合致する Dashboard の一覧が表示されます。

[![Alt text](/img/migrated/Screenshot_4-9a1e9a31.png)](/img/migrated/Screenshot_4-9a1e9a31.png)

**ステップ 4:** **Integrate** をクリックして Dashboard を統合します。

[![Alt text](/img/migrated/Screenshot_18-f0ee84d1.png)](/img/migrated/Screenshot_18-f0ee84d1.png)

- 統合が成功すると、dashboard の状態が **Integrated** に変わります。

[![Alt text](/img/migrated/Screenshot_19-0864e4df.png)](/img/migrated/Screenshot_19-0864e4df.png)

- 統合処理中にエラーが発生した場合は、サポートチームにご連絡ください。

**注意:**

統合可能な Dashboard の数は、ご利用中のサービスプランによって異なります。

例: V3_P1 プランのワークスペースでは最大 2 つの Dashboard を統合できます。上限を超えた場合、システムはクォータ超過のメッセージを表示します。

**ステップ 5:** 統合が成功したら、Grafana をリフレッシュ → メニューを開く → **Dashboard** を選択します。

統合された Dashboard の一覧が表示されます。ユーザーは各 dashboard を開いて対応する monitoring 情報を確認できます。

[![Alt text](/img/migrated/Screenshot_6-624450fb.png)](/img/migrated/Screenshot_6-624450fb.png)

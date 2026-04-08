---
id: "khoi-tao-policy"
title: "Policyの作成"
description: "FPT AutoscaleでAutoscale Policyを作成するガイドです。"
sidebar_label: "Policyの作成"
sidebar_position: 2
---

# Policyの作成

## ステップ1: Autoscaling > Autoscale Policyページに移動します。**Create policy**をクリックします。

[![create policy](/img/migrated/Screenshot-2024-10-02-055525-37b63cd9.png)](/img/migrated/Screenshot-2024-10-02-055525-37b63cd9.png)

## ステップ2: パラメータを設定します。

- **Type**: 適切なPolicyタイプを選択します。
- **Name**: 管理しやすいPolicy名を入力します。名前は6〜250文字で、ラテン文字、数字、アンダースコアのみ使用できます。

### Deletion policy

Deletion policyは、アクションによってNode数が減少する際のGroupからのNode削除優先順位を制御します。GroupにこのPolicyが適用されていない場合、削除するNodeはランダムに選択されます。

[![deletion policy](/img/migrated/Screenshot-2024-10-02-055724-aa33696c.png)](/img/migrated/Screenshot-2024-10-02-055724-aa33696c.png)

- **Mode**:
  - _Oldest first_: 最も古いNodeから順に削除します。
  - _Youngest first_: 最も新しいNodeから順に削除します。

### Scaling policy

Scaling policyは、監視サービスによって自動的にトリガーされるアクションに対するGroupのスケール動作を制御します。

[![scaling policy](/img/migrated/Screenshot-2024-10-02-055757-a8c024c1.png)](/img/migrated/Screenshot-2024-10-02-055757-a8c024c1.png)

- **Change type**: Groupの調整方法。
  - _Exact capacity_
  - _Change in capacity_
  - _Change in percentage_

- **Event**: このPolicyをトリガーするイベントの種類。
  - _Scale in_
  - _Scale out_

- **Number**: **Change type**によって意味が異なります：
  - _Exact capacity_: 新しい容量（正の整数）を入力します。調整後、Group内のNode数がこの値になります。
  - _Change in capacity_: 追加するNode数（正の整数）または削除するNode数（負の整数）を入力します。調整後のNode数は現在の容量に**Number**の絶対値を加減した値になります。
  - _Change in percentage_: 現在の容量に基づいて追加（正の小数）または削除（負の小数）するパーセント（%）を入力します。例：現在の容量が4 Nodeで**Number**が50%の場合、2つの新しいNodeが追加され、合計6になります。

### Load balancer policy

Load balancer policyにより、Group内で作成されたNodeは自動的にLoad balancerに接続され、Nodeが削除されると自動的にLoad balancerから切り離されます。

[![load balancer policy](/img/migrated/Screenshot-2024-10-02-055840-4c829465.png)](/img/migrated/Screenshot-2024-10-02-055840-4c829465.png)

- **Server pool**: Load balancer内の対応するServer poolを選択します。
- **Member port**: MemberがListenするポート。

### Classic load balancer policy

Classic load balancer policyにより、Group内で作成されたNodeは自動的にClassic load balancerに接続され、Nodeが削除されると自動的にClassic load balancerから切り離されます。

[![classic load balancer policy](/img/migrated/Screenshot-2024-10-02-055921-fb7c84c9.png)](/img/migrated/Screenshot-2024-10-02-055921-fb7c84c9.png)

- **Member port**: MemberがListenするポート。

### Health policy

Health policyは、Group内のNodeの確認と復旧方法を制御します。

[![health policy](/img/migrated/Screenshot-2024-10-02-055947-c0a9514f.png)](/img/migrated/Screenshot-2024-10-02-055947-c0a9514f.png)

- **Recovery action**: Nodeが機能していない場合の復旧方法を選択します。
  - _Recreate_: Nodeを削除して再作成します。
  - _Reboot_: Nodeを再起動します。
- **Interval check (s)**: NodeのHealth checkの間隔（秒単位）。

## ステップ3: **Create policy**をクリックして確定します。

作成に成功すると、PolicyはPolicy一覧に表示されます。

[![list policy](/img/migrated/Screenshot-2024-10-02-065449-ebb1fd0a.png)](/img/migrated/Screenshot-2024-10-02-065449-ebb1fd0a.png)

一覧でPolicy名をクリックするとPolicyの詳細を確認できます：

[![click to view policy details](/img/migrated/Screenshot-2024-10-02-065632-1d3bd238.png)](/img/migrated/Screenshot-2024-10-02-065632-1d3bd238.png)

:::note
現在、Policyの技術仕様の変更はサポートされていません。Policyは静的な定義です。Policyを特定のGroupに適用するには、対応するGroupにPolicyをAttachする必要があります。
:::

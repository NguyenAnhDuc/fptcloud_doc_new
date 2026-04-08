---
id: "backup-restore-vn"
title: "Backup & Restore 機能"
description: "M-FKE の Backup & Restore 機能は、PVC のスナップショットを作成することを目的とした機能です。"
sidebar_label: "Backup & Restore 機能"
sidebar_position: 13
---

# Backup & Restore 機能

Backup & Restore 機能は、M-FKE 製品における PVC のスナップショットを作成することを目的とした機能です。

M-FKE の Backup & Restore バージョン 1.0.0 には以下の機能が含まれます。

**Backup Plan:**
- Backup Plan の一覧表示
- 新規 Backup Plan の作成
- 1 つの Backup Plan に複数のスケジュールを設定して、システムが自動的に PVC スナップショットを作成（1 つまたは複数の PVC に同時適用可能）
- Retention 期間の設定（分/時間/日単位）
- Backup Plan の編集
- Backup Plan の有効化/無効化
- Backup Plan の削除

**PVC Snapshot:**
- PVC スナップショット一覧の表示（Manually / Scheduled の作成方法を表示）
- クラスターからの FPT Cloud Portal へのスナップショット一覧の同期
- 新規 PVC スナップショットの作成
- PVC スナップショットの削除
- PVC スナップショットのリストア

**PVC Restored:**
- リストア済み PVC 一覧の表示
- ステータスの更新/リロード

**注意:** この機能は Cinder ドライバー（FPT Cloud によってあらかじめ作成済み）に対応しています。

## Backup Plan の作成手順

**ステップ 1:** Portal > Containers > Kubernetes > Cluster の詳細 > Backup タブにアクセスします。

![](/img/migrated/1-4a954f79.png)

![](/img/migrated/2-e5cd1ce3.png)

_図 1: Backup タブ_

**ステップ 2:** Backup タブで「New Plan」をクリックして、新しい Backup Plan を作成します。

![](/img/migrated/3-0cf67abf.png)

Backup Plan の情報を入力します。

① Essential Information:
- Plan Name: Backup Plan の名前
- Retention: 1 つのスナップショットの保持期間。この期間が過ぎると、スナップショットは完全に削除されます。

② Schedule Scope:
- PVC Backup List: クラスター内の PVC 一覧

③ Schedules Information: バックアップをスケジュールするための日付（月/日/年）を入力します。

**注意:** 複数の Backup Plan を作成できます。

![](/img/migrated/4-f33feb8b.png)

_図 2: Plan 名の入力、Retention 期間の選択（デフォルト 10 時間）_

**注意:** Retention は Plan で選択した PVC のスナップショットに適用されます。

![](/img/migrated/5-32ab0027.png)

_図 3: Plan を適用したい PVC の選択_

**注意:** 一覧は「pvc_name(pvc_namespace)」の形式で表示されます。

![](/img/migrated/6-b988ff7b.png)

_図 4: スケジュールの設定、追加または削除_

![](/img/migrated/7-68d5de2f.png)

_図 5: Backup Plan を保存して Backup タブに戻る_

![](/img/migrated/8-e7bf7afc.png)

_図 6: 新しく作成した Backup Plan が Backup Plan リストに追加される_

![](/img/migrated/9-785e1b70.png)

_図 7: Backup Plan の編集/無効化/削除_

Backup Plan のスケジュールで作成されたスナップショットは、**_Type = "Scheduled"_** として Snapshot List に表示されます。

## PVC Snapshot タブの使い方

このサブタブには、ユーザーが手動で作成したスナップショット（_Type = **"Manually"**_）と Backup Plan によって作成されたスナップショット（_Type = **"Scheduled"**_）が表示されます。

![](/img/migrated/10-d065a7cb.png)

_図 8: 作成済みスナップショット一覧の表示画面_

![](/img/migrated/11-85c4a667.png)

_図 9: Create Snapshot を選択して直接スナップショットを作成_

![](/img/migrated/12-8c235c23.png)

_図 10: Delete で削除、Refresh でスナップショットの最新ステータスを更新、Restore で K8s クラスターに PVC を復元_

![](/img/migrated/13-5d971611.png)

_図 11: Sync ボタンで K8s クラスターからの Snapshot・PVC のステータスを FPT Cloud Portal に直接同期_

## PVC Restored タブの使い方

PVC Snapshot サブタブからスナップショットのリストアを選択すると、リストアされた PVC が PVC Restored サブタブに表示されます。

![](/img/migrated/14-bc0ca284.png)

_図 12: PVC Snapshot サブタブでの PVC のリストア_

![](/img/migrated/15-19e79103.png)

_図 13: リストア済み PVC の一覧表示画面。Pod に割り当てられていない PVC は Pending 状態になります。_

その後、K8s クラスターにアクセスして、リストアした PVC にマッピングされた pod のデプロイメント設定を行うと、PVC のステータスが更新されます。

![](/img/migrated/16-67c3e2c9.png)

_図 14: Reload で PVC のステータスを更新、Sync ですべてを更新_

## 注意事項

- 各 VPC のスナップショット数はデフォルトで最大 10 件に制限されています。増加が必要な場合は FPT Cloud サポートにお問い合わせください。
- ディスクストレージのクォータに達してスナップショットを作成できなくなることを防ぐため、多くのスナップショットを作成して削除しないことがないよう、適切な Plan を作成してください。
- スナップショットのステータスが Failed の場合は、K8s クラスターにアクセスして以下のコマンドで原因を確認してください。

```
kubectl describe volumesnapshots.snapshot.storage.k8s.io -n <namespace>
```

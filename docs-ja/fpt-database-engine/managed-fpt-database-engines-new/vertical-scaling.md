---
id: "vertical-scaling"
title: "垂直スケーリング"
description: "垂直スケーリング機能により、パフォーマンス要件または実際の使用レベルに基づいて、vCPU、RAM、Storageを含むデータベースリソースをリアルタイムで自動調整できます。"
sidebar_label: "垂直スケーリング"
sidebar_position: 36
---

# 垂直スケーリング

**垂直スケーリング**機能により、パフォーマンス要件または実際の使用レベルに基づいて、vCPU、RAM、Storageを含むデータベースリソースをリアルタイムで自動調整できます。この機能はシステムが必要に応じてリソースを積極的に拡張し、柔軟性と運用効率を確保し、ユーザーによる手動介入を不要にします。

### 必要な権限

| 権限名 | 操作種別 | 説明 |
| --- | --- | --- |
| manageDatabase:Configuration | 編集 | データベース設定（パラメーター、スケーリング設定など）を変更する権限。 |

### 1. 垂直スケーリングサービスの有効化

垂直スケーリングサービスを有効化するには、データベース初期化時のAdditional Service設定ステップで直接行う（詳細は[データベースの作成](../managed-fpt-database-engines-new/index.md)を参照）か、データベースが正常に初期化された後に以下の手順で有効化することができます。

#### 前提条件

垂直スケーリングを有効化するには、Notificationサービスを有効化し、スケーリング関連のアラートを受け取るためのメールアドレスまたはTelegramの受信者リストの設定を完了させる必要があります。Notificationが設定されていない場合、システムは続行前に設定を要求するダイアログを表示します。

[![](/img/migrated/scale-noti-warning-scaled-d20a3fb7.png)](/img/migrated/scale-noti-warning-scaled-d20a3fb7.png)

**Go to Notification**をクリックして**Notification**タブに移動し、[Notification](../managed-fpt-database-engines-new/index.md)セクションの手順に従って設定を行います。

#### ステップ1：垂直スケーリング機能へのアクセス

FPT Cloud Portalにログインします。メインメニューから「**Database Platform**」>「**All Databases**」を選択します。管理するデータベースクラスターのIDをクリック > **Vertical Scaling**タブに切り替えて垂直スケーリング設定管理ページにアクセスします。サービスが有効化されていない場合、**Vertical Scaling**画面は初期状態（**Inactive**）を表示します。

[![](/img/migrated/vertical-scaling-inactive-scaled-d7dc0524.png)](/img/migrated/vertical-scaling-inactive-scaled-d7dc0524.png)

#### ステップ2：サービスの有効化

データベースクラスターが正常に作成された後、垂直スケーリングが有効化されていない場合、サービスのステータスは**Inactive**になります。**Service Information**セクションの**Enable Vertical Scaling**アイコン（歯車アイコン）をクリックして確認ダイアログを開きます。

ダイアログで**Confirm**をクリックしてサービスを有効化します。完了後、サービスは次のように**Active**ステータスに移行します。

[![](/img/migrated/scaling-enabled-scaled-c48b62a6.png)](/img/migrated/scaling-enabled-scaled-c48b62a6.png)

有効化後、システムがリソースを自動的に拡張するための基準としてCPU/RAMまたはStorageのリソースしきい値を設定する必要があります。詳細はセクション2と3に記載されています。

### 2. コンピュートリソーススケーリングの設定

**Vertical Scaling**画面で、**Compute Scaling**セクションの**Add Flavor Scaling**（プラスアイコン）をクリックします。システムはデータベースのvCPUとRAMの自動スケーリングを設定するための**Add Compute Scaling**ダイアログを表示します。

[![](/img/migrated/add-compute-scaling-1-scaled-8921f622.png)](/img/migrated/add-compute-scaling-1-scaled-8921f622.png)

設定するパラメーター：

- **CPU Threshold (%)**：CPUしきい値は、CPU使用率に基づいてリソーススケーリングをトリガーする時点を決定します。例：CPUしきい値を60%に設定した場合、CPU使用率が60%を超えると自動的にスケーリングがトリガーされます。
- **RAM Threshold (%)**：CPUと同様に、RAMしきい値はメモリ使用量がこの値を超えたときのリソーススケーリングのトリガーポイントを決定します。例：RAM使用率が50%を超えると、システムはリソースを自動的に拡張します。
- **Tracing Interval**：システムがリソース使用率を確認する時間間隔（分単位）。例：5分を選択 → システムは5分ごとに平均CPU/RAMを監視します。
- **Current flavor**：割り当てられたCPU数とRAM容量を含むインスタンスの現在の設定を表示します（例：Medium-4（2 vCPU - 4GB RAM））。
- **List flavor scaling**：システムがスケールアップできる1つ以上のFlavorを選択します。このリストのFlavorはしきい値を超えた際に順次選択されます。例：Current flavor: Medium-4、List flavor scaling: Medium-8、Large-2 → CPUまたはRAMがしきい値を超えると、システムはMedium-8にアップグレードし、さらにしきい値を超え続けた場合はLarge-2にアップグレードされます。

設定が完了したら、**Add**をクリックして保存します。システムはリソースの監視を開始し、条件が満たされると自動的にスケーリングします。

設定が成功した後、ユーザーは以下のことができます。

- **設定の編集**：Edit Compute Scaling（Compute Scalingセクションの鉛筆アイコン）をクリックして設定値を調整します。
- **設定の削除**：Delete Compute Scaling（Compute Scalingセクションのゴミ箱アイコン）をクリックして自動リソーススケーリングメカニズムを停止します。

> **重要な注意事項：**
> - **リソース制限**：スケーリングはAvailable Resourceクォータ内でのみ実行できます。この制限を超えた場合、システムはスケーリングを実行しません。
> - **トリガーしきい値**：システムが継続的にスケーリングするのを避けるために、しきい値を低く設定しすぎないでください（60%未満）。
> - **サービスの再起動（データベースクラスターの再起動）**：PostgreSQLやClickHouseなどの一部のエンジンでは、コンピュートリソースを増加する際に新しい設定を適用するためにデータベースの再起動が必要です。スケーリングプロセスが完了した後、ユーザーは新しい設定を有効にするために追加の再起動操作を手動で実行する必要があります。
> - リソース拡張の要件を積極的に管理するために、**CPU、RAM使用率を定期的に監視**してください。

### 3. ストレージスケーリングの設定

垂直スケーリング設定管理画面で、**Storage Scaling**セクションの**Add Storage Scaling**アイコン（プラスアイコン）をクリックします。システムはデータベースのストレージリソース自動拡張メカニズムを設定するための**Add Storage Scaling**ダイアログを表示します。

[![](/img/migrated/add-storage-scaling-scaled-284acda6.png)](/img/migrated/add-storage-scaling-scaled-284acda6.png)

設定するパラメーター：

- **Storage Threshold (%)**：ストレージしきい値は、ストレージ使用量がこの値を超えたときのスケーリングのトリガーポイントを決定します。例：ストレージ使用量が55%を超えると、システムは自動的にストレージリソースの拡張をトリガーします。
- **Storage Scale (%)**：拡張する容量の割合。例：拡張率が20%の場合 → システムは現在の合計容量の20%を自動的に追加します（現在の容量が100GBの場合 → スケーリング後、新しい容量は120GBになります）。

設定後、**Add**をクリックして設定の保存を確認します。システムはデフォルト間隔でストレージ使用量を自動的に監視します。使用量が**Storage Threshold**を超えると、設定された**Storage Scale**の割合に従って容量を拡張します。拡張はオンラインで行われ、サービスを中断しません。

設定が成功した後、ユーザーは以下のことができます。

- 設定の編集：Edit Storage Scaling（Storage Scalingセクションの鉛筆アイコン）をクリックして設定値を調整します。
- 設定の削除：Delete Storage Scaling（Storage Scalingセクションのゴミ箱アイコン）をクリックして自動リソーススケーリングメカニズムを停止します。

**注意：**

- **リソース制限**：スケーリングはAvailable Resourceクォータ内でのみ実行できます。制限を超えた場合、システムはスケーリングを実行しません。
- **スケーリング頻度**：リソースを無駄に消費する継続的なスケーリングを避けるために、しきい値を低く設定しすぎないでください（例：70%未満）。
- **縮小不可**：拡張後、ストレージ容量を元に戻すことはできません。

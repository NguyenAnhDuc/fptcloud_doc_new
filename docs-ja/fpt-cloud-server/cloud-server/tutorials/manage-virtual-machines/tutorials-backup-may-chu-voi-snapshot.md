---
id: "tutorials-backup-may-chu-voi-snapshot"
title: "Snapshot でサーバーをバックアップする"
sidebar_label: "Snapshot でサーバーをバックアップする"
sidebar_position: 9
---

Snapshot でサーバーをバックアップする


**Snapshot** とは、特定の時点での仮想マシンの現在の状態をキャプチャするアクションで、その時点でのシステム全体のコンテンツを含むコピーを生成します。

複数の時点での定期的なストレージが必要な場合は、FPT Backupサービスをご参照ください。

ユーザーはシステムが最も安定して動作している時点を選んで **Snapshot** を作成できます。その後、システム内のソフトウェアに回復不能な障害が発生したり、重要なデータが誤って削除されたりした場合でも、Snapshotを作成した時点に仮想マシンを復元するだけで問題を解決できます。

## 仮想マシンからの Snapshot の初期化と管理
### 1. Snapshot を作成する
**ステップ 1**: メニューで **Instance Management** を選択します。Snapshotを作成する仮想マシンの **Actions** セクションで、**Snapshot** > **Create snapshot** を選択します。

![file](/img/migrated/docs-ja-cloud-server/tutorials-backup-may-chu-voi-snapshot/img-001.png)

**ステップ 2**: **Create snapshot** をクリックして **Create instance snapshot** モーダルを表示します。

![file](/img/migrated/docs-ja-cloud-server/tutorials-backup-may-chu-voi-snapshot/img-002.png)

**ステップ 3**: **Create snapshot** をクリックしてSnapshotを作成します。Snapshot作成を確認後、システムはリソースを確認し、Snapshotイメージを作成して処理結果を報告します。

![file](/img/migrated/docs-ja-cloud-server/tutorials-backup-may-chu-voi-snapshot/img-003.png)

### 2. Snapshot から仮想マシンを起動する
**ステップ 1**: メニューで **Snapshot** を選択します。Snapshotの **Actions** セクションで **Launch as Instance** を選択します。

![file](/img/migrated/docs-ja-cloud-server/tutorials-backup-may-chu-voi-snapshot/img-004.png)

**ステップ 2**: Snapshotから **Create instance** モーダルが表示されます。

![file](/img/migrated/docs-ja-cloud-server/tutorials-backup-may-chu-voi-snapshot/img-005.png)

**ステップ 3**: Snapshotから仮想マシンが正常に作成されます。システムは **Instance Management** 画面に仮想マシンを表示します。

![file](/img/migrated/docs-ja-cloud-server/tutorials-backup-may-chu-voi-snapshot/img-006.png)

### 3. 作成した Snapshot を削除する
**ステップ 1**: メニューで **Snapshot** を選択します。Snapshotの **Actions** セクションで **Delete Image** を選択します。

![file](/img/migrated/docs-ja-cloud-server/tutorials-backup-may-chu-voi-snapshot/img-007.png)

**ステップ 2**: **Delete snapshot** をクリックします。

削除を確認後、システムはイメージを削除してSnapshotリソースをVPCに返却します。Snapshotの削除が完了するとユーザーに通知されます。

「_Delete all volume snapshots attached to this image_」チェックボックスをオンにした場合、その仮想マシンにアタッチされたStorage Diskから作成されたSnapshotも削除されます。

![file](/img/migrated/docs-ja-cloud-server/tutorials-backup-may-chu-voi-snapshot/img-008.png)

## Storage Disk からの Snapshot の初期化と管理
### 1. Snapshot を作成する
**ステップ 1**: メニューで **Storage Disk** を選択します。Snapshotを作成する仮想マシンの **Actions** セクションで、**Snapshot** > **Create volume snapshot** を選択します。

![file](/img/migrated/docs-ja-cloud-server/tutorials-backup-may-chu-voi-snapshot/img-009.png)

**ステップ 2**: **Create volume snapshot** をクリックして作成します。

![file](/img/migrated/docs-ja-cloud-server/tutorials-backup-may-chu-voi-snapshot/img-010.png)

**ステップ 3**: Snapshotが正常に作成され、**Storage snapshot** セクションの **Snapshots** 画面に表示されます。

![file](/img/migrated/docs-ja-cloud-server/tutorials-backup-may-chu-voi-snapshot/img-011.png)

### 2. 既存の Snapshot から Storage Disk を作成する
**ステップ 1**: メニューで **Snapshot** を選択します。Snapshotの **Actions** セクションで **Create storage disk** を選択します。

![file](/img/migrated/docs-ja-cloud-server/tutorials-backup-may-chu-voi-snapshot/img-012.png)

**ステップ 2**: **Create storage disk** をクリックして作成します。

![file](/img/migrated/docs-ja-cloud-server/tutorials-backup-may-chu-voi-snapshot/img-013.png)

### 3. Storage Disk から作成した Snapshot を削除する
**ステップ 1**: メニューで **Snapshot** を選択します。Snapshotの **Actions** セクションで **Delete Snapshot** を選択します。

![file](/img/migrated/docs-ja-cloud-server/tutorials-backup-may-chu-voi-snapshot/img-014.png)

**ステップ 2**: **Delete snapshot** をクリックして削除を進めます。

![file](/img/migrated/docs-ja-cloud-server/tutorials-backup-may-chu-voi-snapshot/img-015.png)

## Specific サービスタイプの Snapshot の初期化と管理
### 1. 仮想マシンの Snapshot を作成する
**ステップ 1**: メニューで **Instance Management** を選択します。Snapshotを作成する仮想マシンの **Actions** セクションで **Create snapshot** を選択します。

![file](/img/migrated/docs-ja-cloud-server/tutorials-backup-may-chu-voi-snapshot/img-016.png)

**ステップ 2**: 確認ポップアップで **Create** をクリックしてSnapshot作成を進めます。

![file](/img/migrated/docs-ja-cloud-server/tutorials-backup-may-chu-voi-snapshot/img-017.png)

Snapshot作成を確認後、システムはリソースを確認し、Snapshotイメージを作成して処理結果を報告します。

Snapshotの作成には平均約30分かかります。マシンタイプと仮想マシン上の現在のデータによって異なります。Snapshot作成が完了するとユーザーに通知されます。

注意: 各Instanceには1つのSnapshotを作成して保存できます。最新のSnapshotはそのInstanceの以前のSnapshotを上書きします。

### 2. Snapshot から仮想マシンを復元する
注意: この操作は、Snapshotが正常に作成されたInstanceにのみ適用できます。作業前に対象のInstanceにSnapshotがあることを確認してください。

**ステップ 1**: メニューで **Instance Management** を選択します。復元する仮想マシンの **Actions** セクションで **Restore snapshot** を選択します。

![file](/img/migrated/docs-ja-cloud-server/tutorials-backup-may-chu-voi-snapshot/img-018.png)

**ステップ 2**: 確認ポップアップで **Restore instance** をクリックして復元を進めます。

![file](/img/migrated/docs-ja-cloud-server/tutorials-backup-may-chu-voi-snapshot/img-019.png)

復元を確認後、システムはSnapshotデータを確認してから仮想マシンを復元します。仮想マシンの復元には平均約30分かかります。マシンタイプと現在のデータによって異なります。このプロセス中、仮想マシンがシャットダウンされる場合があり、復元が完了するまでユーザーは操作できません。

復元プロセスが完了し仮想マシンが再起動されるとユーザーに通知されます。

### 3. Instance Snapshot を削除する
注意: この操作は、Snapshotが正常に作成されたInstanceにのみ適用できます。作業前に対象のInstanceにSnapshotがあることを確認してください。削除されたSnapshotは復元できません。

この操作を実行する際は十分に注意してください。

**ステップ 1**: メニューで **Instance Management** を選択します。イメージを削除する仮想マシンの **Actions** セクションで **Delete snapshot** を選択します。

![file](/img/migrated/docs-ja-cloud-server/tutorials-backup-may-chu-voi-snapshot/img-020.png)

**ステップ 2:** **Delete snapshot** をクリックします。

![file](/img/migrated/docs-ja-cloud-server/tutorials-backup-may-chu-voi-snapshot/img-021.png)

削除を確認後、システムはイメージを削除してSnapshotリソースをVPCに返却します。Snapshotの削除が完了するとユーザーに通知されます。

---
id: "on-off-pitr"
title: "PITRの有効化/無効化"
description: "Point-in-Time Recovery（PITR）機能により、ユーザーはデータベースを過去の特定の時点に復元でき、データの継続性と信頼性を確保できます。"
sidebar_label: "PITRの有効化/無効化"
sidebar_position: 29
---

# PITRの有効化/無効化

**Point-in-Time Recovery（PITR）**機能により、ユーザーはデータベースを過去の特定の時点に復元でき、データの継続性と信頼性を確保できます。

現在、**FPT CloudはPostgreSQLエンジンのPITRをサポートしています**。このガイドでは、PostgreSQLのPITR機能を有効化または無効化するための詳細な手順を説明します。

### 1. PITRの有効化

ユーザーはバックアップサービスの有効化時にPostgreSQLのPITR機能を有効にすること（詳細は[バックアップサービスの有効化](/docs/ja/fpt-database-engine/managed-fpt-database-engines-new/)/を参照）、またはバックアップサービスが有効化された後に以下の手順で有効にすることができます。

#### 前提条件

PITRを有効化するには、データベースに少なくとも1つのフルバックアップジョブがすでに作成されている必要があります。PITRの有効化を続ける前に、フルバックアップジョブを設定してください。

Full Backup Jobが設定されていない状態でPITRを有効にしようとすると、システムは次の警告ダイアログを表示します。

[![](/img/migrated/DBaaS_BackupDB_pitr_enable_warning-17bc4181.png)](/img/migrated/DBaaS_BackupDB_pitr_enable_warning-17bc4181.png)

**Configure Now**をクリックして、PITRの有効化を続ける前にフルバックアップジョブの作成を完了させてください。

#### 手順

バックアップサービス管理画面で、**Enable PITR**ボタン（PITRステータスの横の歯車アイコン）をクリックします。

[![](/img/migrated/DBaaS_BackupDB_pitr_enable-bec47e5a.png)](/img/migrated/DBaaS_BackupDB_pitr_enable-bec47e5a.png)

システムは確認ダイアログを表示します。

[![](/img/migrated/DBaaS_BackupDB_pitr_enable_popup-0e361ade.png)](/img/migrated/DBaaS_BackupDB_pitr_enable_popup-0e361ade.png)

PITRを有効にするとストレージ使用量が増加し、追加コストが発生します。続行する前に、追加容量を評価・計画してください。

機能を有効にするには、確認チェックボックスを選択し、**Confirm**をクリックします。

完了後、PITRはすぐには有効になりません。次のFull Backupが作成されるまでシステムが待機する必要があります。PITRの準備が整うと、ユーザーはそのFull Backup以降の任意の時点にデータベースを復元できます。このFull Backup以前に発生したデータの変更はPITR保護の対象外であり、復旧できません。

### 2. PITRの無効化

PITR機能を無効化するには、バックアップサービス管理画面で**Disable PITR**ボタン（PITRステータスの横の歯車アイコン）をクリックします。システムは確認ダイアログを表示します。

[![](/img/migrated/DBaaS_BackupDB_pitr_disable_popup-385a70da.png)](/img/migrated/DBaaS_BackupDB_pitr_disable_popup-385a70da.png)

「**disable**」と入力し、**Confirm**をクリックして確認します。PITRが無効化されると、ユーザーはデータベースを過去の時点に復元できなくなります。

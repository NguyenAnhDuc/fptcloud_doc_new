---
id: "kiem-tra-thong-tin-backup-va-restore-cua-vm"
title: "VMのバックアップとリストア情報を確認する"
description: "FPT PortalのVM管理インターフェースからVMのバックアップとリストアステータスを確認する方法。"
sidebar_label: "VMのバックアップとリストア情報を確認する"
sidebar_position: "7"
---

# VMのバックアップとリストア情報を確認する

## VMのバックアップとリストアステータスの確認
**Backup & Recovery Management**での全体統計に加えて、**FPT Portal**ではそのVMの管理インターフェースから各VMのバックアップとリストアステータスを確認することもできます。

### ステップ1：VM管理インターフェースにアクセスする
  1. メニューで**Compute Engine** > **Instance Management**を選択します。
  2. 確認するVMを選択します。

### ステップ2：Backupsタブを確認する
  1. VMが**Backup Job**によって保護されている場合、**Backups**オプションが表示されます。
  2. **Backups**タブを選択して、**Backup Job**のステータスとリストアポイントのリストを確認します。

### 注意事項：
  * BackupsタブはVMがBackup Jobによって保護されている場合にのみ表示されます。
  * Backup Jobを削除すると、リストアポイントのリストとその他の情報もシステムから削除されます。

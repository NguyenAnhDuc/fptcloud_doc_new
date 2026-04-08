---
id: "quan-ly-backup-job"
title: "バックアップジョブの管理"
description: "FPT CloudでのBackup Jobの作成、監視、開始、有効化/無効化、削除の方法。"
sidebar_label: "バックアップジョブの管理"
sidebar_position: "3"
---

# バックアップジョブの管理

FPT Backupは**Backup Job**という概念を使用して、保護が必要なリソース（VM、Volumeなど）のバックアップタスクを管理・監視・調整します。

Backup Jobを作成する際に設定する項目：
  * **バックアップシナリオ**（daily / weekly / monthly）
  * **バックアップ方式**（Full / Incremental）
  * **バックアップ対象**（VMまたはVolumeのリスト）
  * **通知受信者**（メール）

正常に作成されると、Backup Jobは設定されたスケジュールに従って**完全自動で実行**されます。各実行で新しい**リストアポイント**が作成され、VPCと同じ**リージョン**の専用ストレージパーティションに保存されます。

## 1. 新しいBackup Jobの作成

### ステップ1：Backup Job作成画面を開く
FPT Cloud Portalで**Backup & Recovery** → **Create Backup Job**にアクセスします。

### ステップ2：Backup Job情報を設定する

| **フィールド** | **説明** |
| --- | --- |
| **Name** | Backup Jobの名前。システムまたは環境に関連した分かりやすい名前を推奨します（例：`prod-web-01-daily`）。 |
| **Description** | 保護の目的または範囲の簡単な説明。 |
| **Notification to** | メールで通知を受け取る受信者を選択します。 |
| **Target selection** | Backup Jobを適用するVPC内のVMまたはVolumeを選択します。1つのBackup Jobに**複数のターゲット**を関連付けることができますが、**1つのターゲットは1つのBackup Jobにのみ関連付けられます**。 |
| **Latest backup to keep** | 保持する**リストアポイントの最大数**（デフォルトは**7**）。この数を超えると、システムは古いバックアップを自動的に削除します。 |
| **Retention information** | バックアップシナリオを選択します。 |

  * **Daily full backup：** 毎日フルバックアップを実行します。
  * **Daily incremental, Weekly active full：** 最初のバックアップはフル、週内の後続バックアップは増分、週末にフルバックアップを作成します。
  * **Daily incremental, Monthly active full：** 最初のバックアップはフル、月内の後続バックアップは増分、月末にフルバックアップを作成します。

### ステップ3：Backup Jobを作成する
**Create**をクリックして新しいBackup Jobを初期化します。正常に作成されると、Backup Jobは**Initiated**ステータスになります。

## 2. Backup Jobの進捗を監視する

主なステータス：
  * **Initiated：** ジョブが作成され、最初の実行を待機中。
  * **Success：** 最新のバックアップ実行が**成功**。
  * **Fail：** 最新のバックアップ実行が**失敗**。
  * **Pending：** リソースエラーなどによりジョブが一時停止中。

## 3. 現在のBackup Jobリストを表示する
  1. Portalで**Backup → Backup Management**にアクセス
  2. **Backup Job**タブを選択

## 4. Backup Jobを手動で開始する
**ステップ1：** **Backup → Backup Management**に移動します

**ステップ2：** 実行するBackup Jobの行の**Action**列で**Start**を選択します

**ステップ3：** 確認ダイアログで**Start**を選択してジョブを実行します。

## 5. Backup Jobの有効化 / 無効化

**無効化（Disable）：** ジョブの**Action**列で**Disable**を選択し、確認ダイアログで**Disable**をクリックします。

**有効化（Enable）：** ジョブの**Action**列で**Enable**を選択します。

## 6. Backup Jobを削除する

> **重要な警告：**
> **Delete Backup Job**を実行すると、将来のすべての自動バックアップが永久に停止され、これまでに作成されたすべての**リストアポイントが削除**されます。削除されたリストアポイントは**復元できません**。

**ステップ1：** **Backup → Backup Management**に移動します

**ステップ2：** 削除するジョブの**Action**列で**Delete**を選択します

**ステップ3：** 確認ダイアログで**Delete**を選択してBackup Jobを完全に削除します。

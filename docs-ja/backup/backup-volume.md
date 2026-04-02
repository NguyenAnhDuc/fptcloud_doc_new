---
id: "backup-volume"
title: "バックアップVolume"
description: "Unify Portal上のVPC内のVolumeのバックアップジョブを作成・管理する方法。"
sidebar_label: "バックアップVolume"
sidebar_position: "9"
---
# バックアップVolume

## はじめに
**Backup Volume**機能を使用すると、Unify Portal上のVPC内のVolumeのバックアップを作成できます。
バックアップによりデータに常にバックアップコピーが確保され、障害発生時に復元できます。

## 前提条件
  * **Unify Portal**にログイン済みであること。
  * VPCの**Backup**サービスが**Enable**状態であること。
  * アカウントが`OspNativeBackup:Create`権限を持っていること。
  * バックアップするVolumeが他のジョブにまだ属していないこと（Volumeは同時に1つのジョブにのみ属せます）。

## バックアップVolumeジョブの作成

### ステップ1：Backup & Recoveryインターフェースを開く
**Create Backup Job**ボタンをクリックします。

### ステップ2：基本情報を入力する
**Create Backup Job**フォームで、以下のフィールドを入力します：
  1. **Job Name**（_必須_）：
     * ジョブ名（VPC内で一意である必要があります）。
     * 最大26文字、英字、数字、ドットのみ使用可能。
  2. **Job Type**：**Backup Volume**を選択します。
  3. **Description**（_任意_）：ジョブの簡単な説明。
  4. **Target Selection**：バックアップするVolumeを選択します（有効なVolumeはプレフィックス`pv-fke`で始まります）。

### ステップ3：バックアップを設定する
  * **Backup Option**（1つ選択）：
    * **Daily full backup**：毎日フルバックアップを作成します。
    * **Daily incremental + Weekly active full**：毎日増分バックアップ、週の固定曜日にフルバックアップ。
    * **Daily incremental + Monthly active full**：毎日増分バックアップ、月の固定日にフルバックアップ。
  * **Start Time**：1日の実行時刻（00:00〜23:59）。
  * **Full Backup At**：（Weekly/Monthly active full選択時のみ有効）→フルバックアップを実行する日を選択。
  * **Latest Backup to Keep**：保持するバックアップ数（1〜1000）。
  * **Notification Email**：ジョブのステータス通知（成功/失敗）を受け取るメールアドレスを追加。

### ステップ4：ジョブを作成する
  * **Create**をクリックします。
  * システムが通知を表示します：
    * 成功：_The job [JobName] has been created successfully._
    * エラー：詳細が表示されます（ジョブ名の重複、無効なVolume、システムビジーなど）。

## バックアップジョブの管理
  * **Backup Jobs**に移動してリストを監視します。
  * ジョブのステータスは自動的に更新されます。
  * 保持設定とメール通知を編集できます。

## 重要な注意事項
  * Volumeは**1つのバックアップジョブ**にのみ属せます。
  * ジョブ名はVPC内で一意である必要があります。
  * パフォーマンスへの影響を避けるため、ピーク時間外にバックアップをスケジュールすることを推奨します。
  * バックアップは保持設定で設定した数のコピーのみ保持し、古いコピーは自動的に削除されます。

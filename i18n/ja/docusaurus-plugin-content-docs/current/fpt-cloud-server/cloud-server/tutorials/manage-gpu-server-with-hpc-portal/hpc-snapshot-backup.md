---
id: "hpc-snapshot-backup"
title: "Snapshotバックアップ"
description: "HPC Portal上のイメージのSnapshotバックアップを作成して、問題発生時に復元できるようにします。"
sidebar_label: "Snapshotバックアップ"
sidebar_position: 5
---

# Snapshotバックアップ

Snapshotはマシン上のディスク、ソフトウェア、アプリケーションのバックアップを作成します。問題が発生した場合にいつでも復元できます。

:::warning
- Snapshot作成前にマシンをシャットダウンする必要があります。
- 環境のセットアップが完全に完了してからこの機能を使用してください。
- デフォルトでは、各アカウントで作成できるSnapshotは1つです。追加のバックアップリソースが必要な場合は管理者に連絡してください。
:::

## Snapshotの作成

1. **Action** → **Snapshot** を選択します。
2. **Snapshot image** ダイアログで **Create snapshot** をクリックし、詳細を入力して **Create** をクリックします。

## Snapshotからの復元

作成したSnapshotの **Restore** をクリックします。

:::note
新しいSnapshotを作成するには、まず既存のSnapshotで **Action** → **Remove** を選択してから、新たに作成してください。
:::

## 次のステップ

- [ハードウェア固定](/ja/docs/fpt-cloud-server/cloud-server/tutorials/manage-gpu-server-with-hpc-portal/hpc-hardware-fixation)

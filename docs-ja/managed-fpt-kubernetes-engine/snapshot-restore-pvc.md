---
id: "snapshot-va-restore-pvc-tren-k8s-fpt"
title: "K8s FPT 上での PVC のスナップショットとリストア"
description: "FPT Cloud Managed Kubernetes における PVC のスナップショットとリストア機能の概要を説明します。"
sidebar_label: "PVC のスナップショットとリストア"
sidebar_position: 45
---

# K8s FPT 上での PVC のスナップショットとリストア

FPT Cloud Managed Kubernetes Engine（M-FKE）では、Persistent Volume Claim（PVC）のスナップショット作成とリストア機能を提供しています。

以下の関連ドキュメントを参照してください。

- **[Persistent Volume のスナップショット機能](./snapshot-persistent-volume.md)**: Kubernetes 上で PV のスナップショットを作成する方法を説明します。VolumeSnapshotClass と VolumeSnapshot の設定方法が含まれます。
- **[スナップショットからの volume リストア機能](./restore-persistent-volume.md)**: 既存のスナップショットから PV データをリストアする方法を説明します。
- **[PVC スナップショットのスケジュール設定](./schedule-pvc-snapshot.md)**: CronJob を使用して PVC スナップショットを定期的に自動作成する方法を説明します。
- **[PVC スナップショット削除スケジュールの設定](./schedule-delete-pvc-snapshot.md)**: CronJob を使用して古い PVC スナップショットを自動削除する方法を説明します。
- **[Backup & Restore 機能](./backup-restore.md)**: FPT Cloud Portal の UI を使用して PVC のバックアップと復元を管理する方法を説明します。

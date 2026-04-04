---
id: "snapshot-và-restore-pvc-trên-k8s-fpt"
title: "K8s FPT 上での PVC のスナップショットとリストア"
description: "FPT Cloud Managed Kubernetes における PVC のスナップショットとリストア機能の概要。"
sidebar_label: "K8s FPT 上での PVC のスナップショットとリストア"
sidebar_position: "45"
---

# K8s FPT 上での PVC のスナップショットとリストア

FPT Cloud Managed Kubernetes Engine（M-FKE）は、Persistent Volume Claim（PVC）のスナップショット作成とリストア機能をサポートしています。

関連ドキュメントを参照してください：

- **[Persistent Volume のスナップショット機能](./snapshot-persistent-volume.md)**: Kubernetes 上で PV のスナップショットを作成する方法（VolumeSnapshotClass と VolumeSnapshot の設定を含む）。
- **[スナップショットからの volume リストア機能](./restore-persistent-volume.md)**: 作成済みスナップショットから PV データをリストアする方法。
- **[PVC スナップショットのスケジュール設定](./schedule-pvc-snapshot.md)**: CronJob を使用して PVC スナップショットを定期的に自動作成する方法。
- **[PVC スナップショット削除スケジュールの設定](./schedule-delete-pvc-snapshot.md)**: CronJob を使用して古い PVC スナップショットを自動削除する方法。
- **[Backup & Restore 機能](./backup-restore.md)**: FPT Cloud Portal の UI を使用して PVC のバックアップと復元を管理する方法。

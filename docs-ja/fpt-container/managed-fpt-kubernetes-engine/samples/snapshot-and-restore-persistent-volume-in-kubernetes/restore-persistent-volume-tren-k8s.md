---
id: "restore-persistent-volume-tren-k8s"
title: "Kubernetes 上でのスナップショットからの volume のリストア機能"
description: "MFKE の volume リストア機能を使用して、既存の PV スナップショットから PV データをリストアする方法を説明します。"
sidebar_label: "スナップショットからの volume リストア機能"
sidebar_position: 3
---

# Kubernetes 上でのスナップショットからの volume のリストア機能

MFKE の volume リストア機能を使用すると、既存の PV スナップショットを使って PV のデータをリストアできます。データのリストア操作は Kubernetes のネイティブな方法で行われます。ユーザーは既存のスナップショットに基づいて PVC を設定し、その後アプリケーションの PVC または volumeMount の設定を新しく作成した PVC に変更するだけです。Kubernetes の volume リストア機能の参考ドキュメント: https://kubernetes.io/docs/concepts/storage/volume-pvc-datasource

PVC YAML ファイルの設定により volume のリストアを実行します。

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: <restored-pvc-name>
  namespace: <namespace>
spec:
  dataSource:
    name: new-snapshot-test
    kind: VolumeSnapshot
    apiGroup: snapshot.storage.k8s.io
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 20Gi
```

この PVC を設定した後、対象のアプリケーションでこの PVC を使用するように設定を変更します。

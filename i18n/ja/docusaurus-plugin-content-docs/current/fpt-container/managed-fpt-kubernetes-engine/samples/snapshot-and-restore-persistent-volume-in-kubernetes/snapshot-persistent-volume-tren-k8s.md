---
id: "snapshot-persistent-volume-tren-k8s"
title: "Kubernetes 上の Persistent Volume のスナップショット機能"
description: "M-FKE Kubernetes クラスター上で Persistent Volume のスナップショットを作成する方法を説明します。"
sidebar_label: "Persistent Volume のスナップショット機能"
sidebar_position: 2
---

# Kubernetes 上の Persistent Volume のスナップショット機能

Persistent Volume（PV）のスナップショット機能を使用すると、スナップショット対象の PVC を定義した YAML ファイルを設定・デプロイすることで、M-FKE Kubernetes クラスター上の PV のスナップショットを作成できます。Kubernetes クラスター内にスナップショットリソースが作成されると、VPC に対応するスナップショットが新たに作成されます。MFKE 上での volume スナップショットは VolumeSnapshotClass コンポーネントによって実行されるため、ユーザーはスナップショット対象の PVC 名を定義するだけで済みます。また、Kubernetes 内でスナップショット作成 API を継続的に呼び出すスクリプトを作成することで、定期的な PV スナップショットのスケジュールを設定することもできます。Kubernetes の volume スナップショット機能の参考ドキュメント: https://kubernetes.io/docs/concepts/storage/volume-snapshots/

Kubernetes では、volume スナップショットはクラスター内の PV の内容のポイントインタイムコピーです。スナップショットを使用して、新しい volume を作成することなく、クラスターのデータをバックアップしたり、データを他のリソースにコピーしたりすることができます。

まず、クラスター内に VolumeSnapshotClass が存在しない場合は、VolumeSnapshotClass を設定する必要があります。

```yaml
apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshotClass
metadata:
  name: csi-cinder-snapclass
  annotations:
    snapshot.storage.kubernetes.io/is-default-class: "true"
driver: cinder.csi.openstack.org
deletionPolicy: Delete
parameters:
  type: [type-storage-policy]
  force-create: "true"
```

ここで、`[type-storage-policy]` はユーザーが使用するストレージポリシーの種類で、デフォルトの storageClass 設定の `parameters/type` フィールドから確認できます。

クラスター内で使用中の volume（PVC によって作成されたもの）が必要です。PVC の設定例は以下のとおりです。

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: test-pvc
  namespace: default
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 20Gi
```

Kubernetes で VolumeSnapshot を定義することで、volume のスナップショットを作成します。

```yaml
apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshot
metadata:
  name: new-snapshot-test
  namespace: default
spec:
  volumeSnapshotClassName: csi-cinder-snapclass
  source:
    persistentVolumeClaimName: test-pvc
```

ここで、
- `volumeSnapshotClassName` は FPTCloud によってデフォルトで提供されます。ユーザーは必要に応じて `volumeSnapshotClassName` をカスタマイズできます。
- `persistentVolumeClaimName` はスナップショットを作成したい PVC の名前です。

Kubernetes でスナップショットを作成した後、**Unify Portal** の **Compute Engine** セクションのスナップショットタブでスナップショットを確認できます。

[![](/img/migrated/Picture1-6-9ab1ccda.png)](/img/migrated/Picture1-6-9ab1ccda.png)

また、以下のコマンドで Kubernetes 内でも確認できます。

```
kubectl get volumesnapshots.snapshot.storage.k8s.io -n default
```

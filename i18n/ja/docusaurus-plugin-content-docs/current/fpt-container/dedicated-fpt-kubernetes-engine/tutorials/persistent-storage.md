---
id: "persistent-storage"
title: "Persistent Storage"
description: "FKE で利用可能な 2 種類の Persistent Storage の概要と使用方法。"
sidebar_label: "Persistent Storage"
sidebar_position: 6
---

# Persistent Storage

FKE ではユーザーに 2 種類の Persistent Storage を提供しています。

## A. Block Persistent Storage

Kubernetes Cluster を作成すると、システムは cluster 作成時に選択した Storage Policy に対応する Storage Class を自動的に作成します。ユーザーはこの Storage Class を使用して RWO 形式の PVC を作成できます。

Block Storage は高速な読み書きが必要なアプリケーションやデータベースなどに適しています。

利用可能な StorageClass を確認するには:

```
kubectl get sc
```

既存の Storage Class を使用して PVC（Persistent Volume Claim）を作成する例として、`app-disk.yaml` を次のように作成します。

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: app-disk
spec:
  accessModes:
    - ReadWriteOnce
  storageClassName: premium-ssd
  resources:
    requests:
      storage: 5Gi
```

yaml ファイルから PVC を作成します。

```
kubectl apply -f app-disk.yaml
```

PVC が作成されたことを確認します。

```
kubectl get pvc
```

PVC は Pod から使用されるまで pending 状態になります。

## B. File Persistent Storage

Kubernetes Cluster の作成時に NFS を有効にするか、作成後に有効にすることができます。NFS が有効になると、NFS 有効化時に入力したストレージサイズで `xplat-nfs` Storage Class が cluster 内に作成されます。

利用可能な StorageClass を確認するには:

```
kubectl get sc
```

既存の Storage Class を使用して PVC を作成する例として、`app-disk.yaml` を次のように作成します。

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: app-disk
spec:
  accessModes:
    - ReadWriteMany
  storageClassName: xplat-nfs
  resources:
    requests:
      storage: 5Gi
```

yaml ファイルから PVC を作成します。

```
kubectl apply -f app-disk.yaml
```

PVC が作成されたことを確認します。

```
kubectl get pvc
```

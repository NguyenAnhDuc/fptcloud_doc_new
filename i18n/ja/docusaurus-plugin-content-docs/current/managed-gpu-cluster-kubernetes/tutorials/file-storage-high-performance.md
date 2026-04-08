---
id: "file-storage-high-performance"
title: "File Storage High Performance統合"
description: "Managed GPU ClusterでHigh Performance Storageを使用するための前提条件。"
sidebar_label: "File Storage High Performance統合"
sidebar_position: 5
---

# File Storage High Performance統合

**High Performance Storageを使用するための前提条件：**

1. Managed GPU clusterを初期化するための必須条件（サービスのアクティベーション、Metal Cloudクォータ、SSHキー、Internal LBサブネットなど）を満たす必要があります。Managed GPU Cluster初期化ガイドは[こちら](/ja/docs/managed-gpu-cluster-kubernetes/tutorials/fpt-managed-gpu-cluster/)/を参照してください。
2. File Storage – High PerformanceサービスがテナントでEnableになり、クォータが割り当てられていること。
3. 使用したいMetal Cloudネットワークに属するMountPointが存在すること。File Storage – High Performanceタブに移動して、[こちら](/ja/docs/fpt-storage/file-storage-high-performance/)/のガイドに従って新しいMountPointを作成してください。

**FPTcloud Unify Portal上でManaged GPU ClusterとFile Storage – High Performanceを統合する。**

#### 1.1 新規Managed GPU Clusterとの統合：

- 手順1：FPT Portalメニューで AI Infrastructure → Managed GPU Cluster → Create a Managed GPU Clusterを選択します。

[![](/img/migrated/1-4-e29aaa5f.png)](/img/migrated/1-4-e29aaa5f.png)

GPU clusterのworkerノードとして機能するMetal CloudサーバーのNetworkを正しく選択してください。File Storage – High PerformanceのMountPointはこのNetworkに基づいて表示されます。

- 手順2：希望するMetal CloudネットワークにMountPointが存在したら、File Storage – High Performanceを有効にして、希望するMountPointを選択します。

[![](/img/migrated/4-1-8169c048.png)](/img/migrated/4-1-8169c048.png)

注意：テナントでFile Storage – High Performanceサービスがアクティベートされていない場合、以下のメッセージが表示されます。Managed GPU Clusterへの統合を実行する前に、アクティベーションリクエストを送信する必要があります。

[![](/img/migrated/3-4-543f9c6b.png)](/img/migrated/3-4-543f9c6b.png)

- 手順4：すべてのHigh Performance Storage統合情報を確認し、Managed GPU Clusterの作成を進めます。

[![](/img/migrated/5-3-28b8ca38.png)](/img/migrated/5-3-28b8ca38.png)

[![](/img/migrated/6-3-3e1f42fc.png)](/img/migrated/6-3-3e1f42fc.png)

#### 1.2 既存のManaged GPU Clusterとの統合：

- 手順1：FPT Portalメニューで AI Infrastructure → Managed GPU Cluster → File Storage – High Performanceと統合する既存のclusterを選択します。

[![](/img/migrated/7-3-1d6e69ee.png)](/img/migrated/7-3-1d6e69ee.png)

注意：Managed GPU clusterのステータスがSucceeded（Running）の場合のみ、File Storage – High Performance統合を実行できます。

- 手順2：Essential PropertiesタブのHigh Performance Storage Integrationで、**Enable High Performance Storage** をクリック → リストからMountPointを選択し、**Confirm** をクリックします。

[![](/img/migrated/8-2-9dec85a0.png)](/img/migrated/8-2-9dec85a0.png)

[![](/img/migrated/9-2-6b1d861c.png)](/img/migrated/9-2-6b1d861c.png)

High Performance Storageの統合プロセスは数分かかります。統合が完了するまで、クラスターのステータスは **Processing** に変わります。統合中もクラスターは正常に動作し続けます。

#### 1.3 File Storage – High Performance統合を無効にする

File Storage – High Performance統合を無効にするのは、clusterのステータスがSucceeded（Running）の場合のみにしてください。無効にする前に、選択したMountPointを使用しているcluster内のすべてのPVCを削除してください。統合を無効にしても、KubernetesがMountPointディレクトリに書き込んだデータは自動的に削除されません。

- 手順1：FPT Portalメニューで AI Infrastructure → Managed GPU Cluster → File Storage – High Performanceが統合されているclusterを選択します。

[![](/img/migrated/7-3-1d6e69ee.png)](/img/migrated/7-3-1d6e69ee.png)

- 手順2：Essential PropertiesタブのHigh Performance Storage Integration → Disintegrate → Confirmを選択します。

[![](/img/migrated/8-2-9dec85a0.png)](/img/migrated/8-2-9dec85a0.png)

#### 1.4 Managed GPU ClusterのFile Storage – High Performance MountPointを変更する

Managed GPU clusterで同時に使用できるMountPointは1つだけです。MountPointを変更するには、まず古いMountPointの統合を無効にし（セクション1.3）、その後新しいMountPointを統合します（セクション1.2）。

**Managed GPU ClusterでFile Storage – High PerformanceのMountPointを使用する**

統合が成功すると、MountPointパスが割り当てられたディレクトリにPersistent Volume（PV）を作成するためのStorageClassがcluster内で利用可能になります。StorageClass名は統合されたMountPointのQoS Policy名です。

例えば、MountPointのパスが `/k8s-cluster1` の場合、KubernetesのCSIで作成されたPVのパスは `/k8s-cluster1/PV1`、`/k8s-cluster1/PV2` などになります。

[![](/img/migrated/11-2-f3187fe2.png)](/img/migrated/11-2-f3187fe2.png)

統合されたMountPointのためにシステムが提供するStorageClassを使用してPersistentVolumeClaim（PVC）を作成します。StorageClassのVOLUMEBINDINGMODEはWaitForFirstConsumerであるため、CSIがPVを作成してPVCにバインドするには、このPVCを使用するPodが必要です。

注意：clusterのデフォルトStorageClass設定を編集しないでください。ユーザーがその設定を変更した場合、システムの元の設定に自動的にロールバックされます。

PVCマニフェストの例：

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: csi-pvc-dynamic-1
  namespace: default
spec:
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 15Gi
  storageClassName: k8s-tester
  volumeMode: Filesystem
```

PVCのサイズを変更するには、`spec.resources.requests.storage` フィールドでPVCリソースを直接編集します。

注意：容量を削減することはできません（増加のみ可能）。PVCがPodで使用中の場合、システムはPod内のmountPathボリュームのサイズを自動的に変更します（オンラインボリュームリサイズ）。

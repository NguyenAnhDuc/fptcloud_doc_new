---
id: "thuc-hien-dat-lich-snapshot-pvc"
title: "Kubernetes 上での PVC スナップショットのスケジュール設定"
description: "FPTCloud は、Kubernetes の CronJob を使用して PVC スナップショットのスケジュールを設定するオプションを提供します。"
sidebar_label: "PVC スナップショットのスケジュール設定"
sidebar_position: 48
---

# Kubernetes 上での PVC スナップショットのスケジュール設定

Kubernetes 上の PV スナップショット機能に加えて、FPTCloud は Kubernetes の CronJob を通じて PVC スナップショットのスケジュールを設定するオプションを提供します。

## 1. CronJob スナップショットスケジュールの設定

**ステップ 1:** ServiceAccount と対応する ClusterRoleBinding を適用して、Kubernetes クラスター内の CronJob に権限を付与します。

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: snapshot-sa
  namespace: default # または CronJob をデプロイしたい任意の namespace
```

**ステップ 2:** 作成した ServiceAccount に権限を付与するために ClusterRoleBinding を適用します。subjects には、上記で作成した各 namespace の SA が含まれている必要があります。

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: grant-snapshot-sa-admin
subjects:
  - kind: ServiceAccount
    name: snapshot-sa
    namespace: default # または CronJob をデプロイしたい任意の namespace
  - kind: ServiceAccount
    name: snapshot-sa
    namespace: namespace1 # 複数の namespace で CronJob を使用したい場合
roleRef:
  kind: ClusterRole
  name: cluster-admin
  apiGroup: rbac.authorization.k8s.io
```

以下のコマンドで ClusterRoleBinding を確認できます。

```
kubectl get clusterrolebinding grant-snapshot-sa-admin -oyaml
```

**ステップ 3:** 以下の形式で CronJob を適用して、PVC スナップショットを自動的にスケジュール設定します。

```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: pvc-snapshot # または設定したい任意の名前
  namespace: default # または CronJob をデプロイしたい任意の namespace（ServiceAccount と ClusterRoleBinding と同じ namespace である必要があります）
spec:
  schedule: "0 * * * *" # 調整してください（分 時 日(月) 月 曜日）
  timeZone: "Asia/Saigon"
  jobTemplate:
    spec:
      template:
        spec:
          serviceAccountName: snapshot-sa # 事前にデプロイした ServiceAccount 名と一致させてください
          containers:
            - name: pvc-snapshot
              image: registry.fke.fptcloud.com/xplat-fke/snapshot-pvc:v0.1.0
              env:
                - name: PVC_NAME
                  value: "your-pvc-name" # CronJob を適用したい PVC の名前
                - name: NAMESPACE
                  value: "your-pvc-namespace" # 上記 PVC の namespace
          restartPolicy: OnFailure
```

## 2. PVC スナップショットの CronJob スケジュールの削除

PVC の自動スナップショットのスケジュールが不要になった場合は、作成した対応する CronJob を削除するだけです。

例：

```
kubectl get volumesnapshots.snapshot.storage.k8s.io -A

NAMESPACE   NAME                             READYTOUSE   SOURCEPVC     SOURCESNAPSHOTCONTENT   RESTORESIZE   SNAPSHOTCLASS          SNAPSHOTCONTENT                                    CREATIONTIME   AGE

example     wp-pv-claim-example-2412020736   true         wp-pv-claim                           20Gi          csi-cinder-snapclass   snapcontent-045fe85e-7471-4bfb-9a55-2ed2ed2263dd   64m            64m

example     wp-pv-claim-example-2412020836   true         wp-pv-claim                           20Gi          csi-cinder-snapclass   snapcontent-fd1333bc-70f6-417f-a91d-10349aa0647d   4m11s          4m11s
```

ここで、`wp-pv-claim-default-2412020736` の意味は以下のとおりです。
- `wp-pv-claim`: PVC 名
- `default`: namespace 名
- `2412020733`: 24（年）、12（月）、02（日）、07（時）、36（分）（UTC+0）

**注意事項:**
- 1 つの PVC に対して設定できる CronJob は 1 つのみです。複数の PVC にスケジュールを設定したい場合、または 1 つの PVC に複数のスケジュールを設定したい場合は、それぞれ別の CronJob を作成してください。
- 新しい Job が実行されるタイミングで、PVC のスナップショット作成を自動化するための pod が作成されます。以下のコマンドで確認できます。
  - `kubectl get volumesnapshots.snapshot.storage.k8s.io -n <namespace>`
  - `kubectl get jobs.batch -n <namespace>`

FPTCloud が提供するイメージには Retention 機能がないため、ディスクストレージのクォータが満杯にならないよう、スナップショットを定期的に削除する必要があります。

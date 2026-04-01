---
id: "thuc-hien-dat-lich-xoa-pvc-snapshot"
title: "Kubernetes 上での PVC スナップショット削除スケジュールの設定"
description: "FPTCloud は、PVC 名、対応する namespace、および希望する削除期間に基づいて PVC スナップショットの削除スケジュールを設定するオプションを提供します。"
sidebar_label: "PVC スナップショット削除スケジュールの設定"
sidebar_position: 49
pagination_next: null
---

# Kubernetes 上での PVC スナップショット削除スケジュールの設定

FPTCloud は、PVC 名、対応する namespace、および希望する削除期間（時間単位または日単位）に基づいて PVC スナップショットの削除スケジュールを設定するオプションを提供します。

## CronJob クリーンアップスケジュールの設定

**ステップ 1:** ServiceAccount と対応する ClusterRoleBinding を適用して、Kubernetes クラスター内の CronJob に権限を付与します。

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: cleanup-snapshot-sa
  namespace: default # または CronJob をデプロイしたい任意の namespace
```

**ステップ 2:** 作成した ServiceAccount（SA）に権限を付与するために ClusterRoleBinding を適用します。subjects には、上記で作成した各 namespace の SA が含まれている必要があります。

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: grant-cleanup-snapshot-sa-admin
subjects:
  - kind: ServiceAccount
    name: cleanup-snapshot-sa
    namespace: default # または CronJob をデプロイしたい任意の namespace
  - kind: ServiceAccount
    name: cleanup-snapshot-sa
    namespace: namespace1 # 複数の namespace で CronJob を使用したい場合
roleRef:
  kind: ClusterRole
  name: cluster-admin
  apiGroup: rbac.authorization.k8s.io
```

以下のコマンドで ClusterRoleBinding を確認できます。

```
kubectl get clusterrolebinding grant-cleanup-snapshot-sa-admin
```

**ステップ 3:** 以下の形式で CronJob を適用して、PVC スナップショットを自動的に削除するスケジュールを設定します。

```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: cleanup-snapshots
spec:
  schedule: "0 2 * * *" # 調整してください（分 時 日(月) 月 曜日）
  timeZone: "Asia/Saigon"
  jobTemplate:
    spec:
      template:
        spec:
          serviceAccountName: cleanup-snapshot-sa # ServiceAccount 名と一致させてください
          containers:
          - name: snapshot-cleanup
            image: registry.fke.fptcloud.com/xplat-fke/cleanup-snapshot-pvc:v0.1.0
            env:
            - name: NAMESPACE
              value: "your-pvc-namespace" # PVC の namespace に置き換えてください
            - name: PVC_NAME
              value: "your-pvc" # PVC 名に置き換えてください
            - name: RETENTION_MAX
              value: "7" # 0 より大きい整数
            - name: RETENTION_UNITS
              value: "days" # または "hours"
          restartPolicy: OnFailure
```

## PVC スナップショットのクリーンアップスケジュールの削除

PVC スナップショットの自動削除スケジュールが不要になった場合は、作成した対応する CronJob を削除するだけです。

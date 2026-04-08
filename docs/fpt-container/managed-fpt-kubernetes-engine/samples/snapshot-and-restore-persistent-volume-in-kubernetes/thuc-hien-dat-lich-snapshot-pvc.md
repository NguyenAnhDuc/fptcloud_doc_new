---
id: "thuc-hien-dat-lich-snapshot-pvc"
title: "Schedule PVC Snapshots"
description: "How to schedule automatic PVC snapshots using CronJob in Managed FPT Kubernetes Engine."
sidebar_label: "Schedule PVC Snapshots"
sidebar_position: "48"
---

# Schedule PVC Snapshots

In addition to the PV Snapshot feature on Kubernetes, FPT Cloud provides the option to schedule snapshots via CronJob on Kubernetes.

## 1. Set up a CronJob Schedule for PVC Snapshots

**Step 1:** Grant the CronJob the necessary permissions in the Kubernetes cluster by applying the corresponding ServiceAccount:

```yaml
apiVersion: v1 
kind: ServiceAccount 
metadata: 
  name: snapshot-sa 
  namespace: default #or any other namespace that you want to deploy the cronjob 
```

**Step 2:** Apply a ClusterRoleBinding to grant permissions to the ServiceAccount you just created. Note that `subjects` must include all ServiceAccounts in the corresponding namespaces you created above:

```yaml
apiVersion: rbac.authorization.k8s.io/v1  
kind: ClusterRoleBinding  
metadata:  
  name: grant-snapshot-sa-admin  
subjects:  
  - kind: ServiceAccount  
    name: snapshot-sa  
    namespace: default #or any other namespace that you want to deploy the cronjob  
  - kind: ServiceAccount  
    name: snapshot-sa  
    namespace: namespace1 #if user wants to have multiple cronjob in multiple namespace 
roleRef:  
  kind: ClusterRole  
  name: cluster-admin  
  apiGroup: rbac.authorization.k8s.io 
```

You can verify the ClusterRoleBinding with:

```bash
kubectl get clusterrolebinding grant-snapshot-sa-admin -oyaml
```

**Step 3:** Apply a CronJob to automatically schedule PVC snapshots using the following format:

```yaml
apiVersion: batch/v1 
kind: CronJob 
metadata: 
  name: pvc-snapshot #or any other name that you want to set 
  namespace: default #or any other namespace that you want to deploy the cronjob, but must be in the same namespace with ServiceAccount and ClusterRoleBinding 
spec: 
  schedule: "0 * * * *" #Adjust this (minute hour day(month) month day(week)) 
  timeZone: "Asia/Saigon" 
  jobTemplate: 
    spec: 
      template: 
        spec: 
          serviceAccountName: snapshot-sa #Remember to match the name of ServiceAccount that deployed previously 
          containers: 
            - name: pvc-snapshot 
              image: registry.fke.fptcloud.com/xplat-fke/snapshot-pvc:v0.1.0 
              env: 
                - name: PVC_NAME 
                  value: "your-pvc-name" #name of the PVC that you want to apply Cronjob to 
                - name: NAMESPACE 
                  value: "your-pvc-namespace" #namespace of the above PVC 
          restartPolicy: OnFailure 
```

## 2. Remove the CronJob schedule for PVC Snapshots

If you no longer need to schedule automatic snapshots for a PVC, simply delete the corresponding CronJob that was created.

Example output when listing snapshots:

```bash
kubectl get volumesnapshots.snapshot.storage.k8s.io -A 
```

```
NAMESPACE   NAME                             READYTOUSE   SOURCEPVC     SOURCESNAPSHOTCONTENT   RESTORESIZE   SNAPSHOTCLASS          SNAPSHOTCONTENT                                    CREATIONTIME   AGE 
example     wp-pv-claim-example-2412020736   true         wp-pv-claim                           20Gi          csi-cinder-snapclass   snapcontent-045fe85e-7471-4bfb-9a55-2ed2ed2263dd   64m            64m 
example     wp-pv-claim-example-2412020836   true         wp-pv-claim                           20Gi          csi-cinder-snapclass   snapcontent-fd1333bc-70f6-417f-a91d-10349aa0647d   4m11s          4m11s 
```

The snapshot name `wp-pv-claim-example-2412020736` means:
  * `wp-pv-claim`: PVC name
  * `example`: namespace name
  * `2412020736`: 24 (year), 12 (month), 02 (day), 07 (hour), 36 (minute) (UTC+0)

**Notes:**
Only one CronJob can be set per PVC. If you want to schedule multiple PVCs at once or create multiple schedules for one PVC, create multiple CronJobs accordingly.

When a new Job runs, a pod is created to automate the PVC snapshot creation. You can verify with commands such as:
  * `kubectl get volumesnapshots.snapshot.storage.k8s.io -n <namespace>`
  * `kubectl get jobs.batch -n <namespace>`

The FPT Cloud-provided image does not include a Retention feature, so you must manually delete your snapshots to avoid filling up your disk storage quota.

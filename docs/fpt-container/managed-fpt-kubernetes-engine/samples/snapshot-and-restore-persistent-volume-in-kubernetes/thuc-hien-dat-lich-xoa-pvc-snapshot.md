---
id: "thuc-hien-dat-lich-xoa-pvc-snapshot"
title: "Schedule PVC Snapshot Deletion"
description: "How to schedule automatic deletion of PVC snapshots using CronJob in Managed FPT Kubernetes Engine."
sidebar_label: "Schedule PVC Snapshot Deletion"
sidebar_position: "49"
---

# Schedule PVC Snapshot Deletion

FPT Cloud provides the option to schedule deletion of PVC snapshots based on the PVC name, corresponding namespace, and a desired retention period specified in hours or days.

## Set up a CronJob Schedule for PVC Snapshot Cleanup

**Step 1:** Grant the CronJob the necessary permissions in the Kubernetes cluster by applying the corresponding ServiceAccount:

```yaml
apiVersion: v1 
kind: ServiceAccount 
metadata: 
  name: cleanup-snapshot-sa 
  namespace: default #or any other namespace that you want to deploy the cronjob 
```

**Step 2:** Apply a ClusterRoleBinding to grant permissions to the ServiceAccount you just created. Note that `subjects` must include all ServiceAccounts in the corresponding namespaces created above:

```yaml
apiVersion: rbac.authorization.k8s.io/v1  
kind: ClusterRoleBinding  
metadata:  
  name: grant-cleanup-snapshot-sa-admin  
subjects:  
  - kind: ServiceAccount  
    name: cleanup-snapshot-sa  
    namespace: default #or any other namespace that you want to deploy the cronjob  
  - kind: ServiceAccount  
    name: cleanup-snapshot-sa  
    namespace: namespace1 #if user wants to have multiple cronjob in multiple namespace 
roleRef:  
  kind: ClusterRole  
  name: cluster-admin  
  apiGroup: rbac.authorization.k8s.io 
```

You can verify the ClusterRoleBinding with:

```bash
kubectl get clusterrolebinding grant-cleanup-snapshot-sa-admin 
```

**Step 3:** Apply a CronJob to automatically delete PVC snapshots using the following format:

```yaml
apiVersion: batch/v1 
kind: CronJob 
metadata: 
  name: cleanup-snapshots 
spec: 
  schedule: "0 2 * * *" #Adjust this (minute hour day(month) month day(week)) 
  timeZone: "Asia/Saigon" 
  jobTemplate: 
    spec: 
      template: 
        spec: 
          serviceAccountName: cleanup-snapshot-sa #match with service account name 
          containers: 
          - name: snapshot-cleanup 
            image: registry.fke.fptcloud.com/xplat-fke/cleanup-snapshot-pvc:v0.1.0   
            env: 
            - name: NAMESPACE 
              value: "your-pvc-namespace" #Replace with your PVC namespace 
            - name: PVC_NAME 
              value: "your-pvc"  #Replace with your PVC name 
            - name: RETENTION_MAX 
              value: "7" #or any int > 0 
            - name: RETENTION_UNITS 
              value: "days" #or "hours" 
          restartPolicy: OnFailure 
```

## Remove the Cleanup CronJob for PVC Snapshots

If you no longer need to schedule automatic snapshot deletion for a PVC, simply delete the corresponding CronJob that was created.

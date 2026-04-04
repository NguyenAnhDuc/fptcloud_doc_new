---
id: "restore-persistent-volume-tren-k8s"
title: "Restore Persistent Volume on Kubernetes"
description: "How to restore data in a Persistent Volume using existing snapshots in Managed FPT Kubernetes Engine."
sidebar_label: "Restore Persistent Volume on Kubernetes"
sidebar_position: "47"
---

# Restore Persistent Volume on Kubernetes

The restore volume feature in MFKE lets you restore data in a Persistent Volume (PV) using existing PV snapshots. The restore process is fully native to Kubernetes — you simply configure a PVC based on an existing snapshot, then update your application's PVC or volumeMount configuration to use the newly created PVC. See the Kubernetes documentation for reference: <https://kubernetes.io/docs/concepts/storage/volume-pvc-datasource>

To restore a volume, configure and apply a PVC YAML file as follows:

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: <new-pvc-name>
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

After applying, configure this PVC in your application as desired.

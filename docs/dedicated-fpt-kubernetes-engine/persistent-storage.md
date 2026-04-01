---
id: "persistent-storage"
title: "Persistent storage"
description: "FKE provides 02 types of Persistent Storage:"
sidebar_label: "Persistent storage"
sidebar_position: 20
---

# Persistent storage

FKE provides 02 types of Persistent Storage:
### A. Block Persistent Storage
When creating a Kubernetes Cluster, the system automatically creates a Storage Class corresponding to the Storage Policy that user chose when creating the Kubernetes Cluster. Users can use this Storage Class to create RWO Persistent Volumes.
Block Storage is suitable for applications that need to read and write quickly, databases...
To list the available Storage Class, run this command:

```
Copykubectl get sc 
```

For example, to create a PVC (persistent volume claim) using the available Storage Class, applies a manifest as follows:

```
CopyapiVersion: v1
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

Then apply the manifest file:

```
Copykubectl apply -f app-disk.yaml 
```

To list the created PVC

```
Copykubectl get pvc 
```

PVC will be in **Pending** state until a Pod use it.
### B. File Persistent Storage
When creating a Kubernetes Cluster, users can choose to enable NFS or enable it after creation. After enabling NFS, Storage Class `xplat-nfs` will be created in the cluster with the storage size as entered by the user when enabling NFS.
To list the available Storage Class, run this command:

```
Copykubectl get sc 
```

For example, to create a PVC using the available Storage Class, applies a manifest as follows:

```
CopyapiVersion: v1
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

Then apply the manifest file:

```
Copykubectl apply -f app-disk.yaml 
```

To list the created PVC

```
Copykubectl get pvc 
```
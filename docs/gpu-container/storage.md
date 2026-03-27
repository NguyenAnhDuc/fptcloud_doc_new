---
id: "storage"
title: "Storage"
description: "GPU Container provides High-Performance Storage (HPS) remaining for the duration of a container’s life. It functions sim"
sidebar_label: "Storage"
sidebar_position: 12
---

# Storage

## Persistent Disk
GPU Container provides High-Performance Storage (HPS) remaining for the duration of a container’s life. It functions similarly to a hard disk, allowing you to store data that needs to be retained even if the container is stopped. 
**Key characteristics:**
  * Available until the container is deleted permanently. 
  * Prevent data loss by storing data, models, or files that need to be preserved across container restarts or reconfigurations.

## Temporary Disk
Temporary disk (NVMe) is a type of storage that provides temporary storage for a container. Any data stored on the temporary disk will be lost when the container is stopped or deleted so make sure to back up important data before shutting down your container. 
## Storage type comparison  
| Feature  | Temporary Disk  | Persistent Disk  |  
| --- | --- | --- |  
| Data persistence  | Lost on stop  | Retained until container deletion  |  
| Lifecycle  | Tied directly to the container’s active session  | Tied to the container’s lease period  |  
| Performance  | Fastest (locally attached)  | Reliable, generally slower than temporary disk  |  
| Capacity  | Fixed according to the selected GPU instance  | Selectable at creation  |  
| Cost  | FREE  | $ 0.0066 GB/hour  |  
| Best for  | Temporary session data, cache  | Persistent application data, models, datasets  |
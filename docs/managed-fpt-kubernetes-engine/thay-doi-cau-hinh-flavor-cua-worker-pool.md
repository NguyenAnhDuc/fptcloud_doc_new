---
id: "thay-doi-cau-hinh-flavor-cua-worker-pool"
title: "Change Worker Pool Flavor Configuration"
description: "How to change the flavor configuration of a worker pool in Managed FPT Kubernetes Engine."
sidebar_label: "Change Worker Pool Flavor Configuration"
sidebar_position: "54"
---

# Change Worker Pool Flavor Configuration

The MFKE service does not support directly updating the flavor configuration of workers in an existing worker pool. Instead, you need to create a new worker pool with the desired flavor configuration. This is covered in item 9 of the MFKE service FAQs.

## How to change the flavor of a worker pool in MFKE

**Step 1: Create a new worker pool**
  * Create a new worker pool with the flavor configuration you want.
  * Ensure the nodes in the new pool are stable and have joined the cluster.

**Step 2: After creating the new worker pool, migrate applications from the old worker pool to the new one**

You can migrate applications using one of the following approaches:

**Case 1: Application is deployed using nodeSelector**
  1. Assign the same label from the old worker pool to the new worker pool.
  2. Delete the old worker pool from the cluster. The application pods will be recreated on the new worker pool. Once the new application pods are created successfully, the application pods on the old worker pool will be deleted. When all applications on the old worker pool are fully evicted, the workers in the old pool will be drained and removed from the cluster.

**Case 2: Application does not use nodeSelector**
  1. Run the cordon command to prevent nodes in the old worker pool from accepting new pods.
  2. Perform a rollout restart to restart the application pods so new ones are created on the new worker pool, and old pods on the old workers are terminated.
  3. After the application pods have fully migrated to the new worker pool, delete the old worker pool from the portal.

**Note:** The cluster drain and deletion of the old worker pool process may not complete automatically in some cases, such as:
  * The application uses Pod Disruption Budget (PDB), which limits the number of pods that can be deleted at once.
  * The application uses block Persistent Volume Claims (PVC).
  * In these cases, you need to manually check and evict any remaining pods to ensure all applications have migrated to the new worker pool.

**Recommendations:**
  * Perform this change during off-peak hours to minimize impact on real users.
  * Monitor pod and application status after migration to ensure everything is stable.

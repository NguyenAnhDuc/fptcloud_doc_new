---
id: "tang-them-worker-group-su-dung-gpu"
title: "Adding a GPU worker group"
sidebar_label: "Adding a GPU worker group"
sidebar_position: "9"
---

# Adding a GPU worker group

**Prerequisites:**
- CPU, GPU, RAM, Storage, and Instance quota sufficient for the desired new worker group configuration. If you want to use Autoscale, the GPU quota must cover the maximum number of additional nodes desired.
- One network subnet: the network used for Kubernetes nodes must have a Static IP Pool.

The steps are as follows:

**Step 1:** Access the FPT Cloud portal at console.fptcloud.com, navigate to the Kubernetes section, click the cluster you want to modify, go to Node Pools, and click "Edit Workers".

[![](/img/migrated/Picture4-3-aa3ce5ce.png)](/img/migrated/Picture4-3-aa3ce5ce.png)

**Step 2:** Click "Add worker group" to add a new worker group.

[![](/img/migrated/Picture5-2-3779376b.png)](/img/migrated/Picture5-2-3779376b.png)

In addition to the standard Kubernetes initialization settings, configure the GPU options in the Worker Group:
- Select instance type: **GPU**
- Select GPU type (A30, A100, etc.)
- Select the GPU sharing configuration (None / Single / Mixed)
- Select the GPU type configuration (CPU / RAM / GPU RAM)

[![](/img/migrated/Picture6-2-4a875296.png)](/img/migrated/Picture6-2-4a875296.png)

**Step 3:** Review the initialization information and click Save.

[![](/img/migrated/Picture7-1-ef376286.png)](/img/migrated/Picture7-1-ef376286.png)

**Step 4:** Monitor the status of the new worker group being added to the Kubernetes cluster. Once the status is Succeeded (Running), proceed to deploy your applications.

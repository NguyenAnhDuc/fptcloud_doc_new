---
id: "huong-dan-chi-tiet-su-dung-auto-upgrade"
title: "Detailed Guide to Using Auto Upgrade"
description: "How to configure and use the Auto Upgrade Version feature for Managed Kubernetes clusters in FPT Cloud."
sidebar_label: "Detailed Guide to Using Auto Upgrade"
sidebar_position: "27"
---

# Detailed Guide to Using Auto Upgrade

* Managed Kubernetes Clusters running a version that is more than one minor version past end of standard support (relative to the oldest version supported by FPT Cloud) cannot use the auto upgrade version feature. Users must manually upgrade these clusters.
  * For example, if a cluster is running version 1.24.14 and FPT Cloud supports Kubernetes versions from 1.26 to 1.29, this cluster cannot use the auto upgrade feature. To use it, the cluster must first be manually upgraded to version 1.25.
  * The version upgrade mechanism follows the Rolling Update process. Workers running the new minor version are simultaneously created across all worker groups. Once these workers are in a Ready state and ready to run workloads, Kubernetes drains the workers running the old minor version. After draining completes, the old workers are deleted. This process repeats until all workers in the group are replaced.

## 1. Creating a Managed Kubernetes Cluster

When creating a new Managed Kubernetes Cluster, the Auto Upgrade Version feature is disabled by default as shown below:
[![](/img/migrated/Picture1-5-341fc3c7.png)](/img/migrated/Picture1-5-341fc3c7.png)

To view detailed information about the important milestones for a Kubernetes version supported by FPT Cloud, click the "?" icon.
[![](/img/migrated/Picture2-4-cf1843f2.png)](/img/migrated/Picture2-4-cf1843f2.png)

If you enable Auto Upgrade Version without configuring an upgrade time, the default upgrade time is 07:00 GMT+7 on the first day when that version reaches end of standard support.
[![](/img/migrated/Picture3-4-648a0a23.png)](/img/migrated/Picture3-4-648a0a23.png)

After configuring the auto upgrade schedule, you can view when the current version will reach end of support, the nearest upcoming auto upgrade time, and a summary of the auto upgrade schedule.
[![](/img/migrated/Picture4-4-a5f4e49f.png)](/img/migrated/Picture4-4-a5f4e49f.png)

After completing the auto upgrade version schedule configuration during cluster creation, click **Next** to proceed to the **Nodes Pool** configuration step.

## 2. Changing Auto Upgrade Version configuration for existing clusters

**Notes:**
- For existing Managed Kubernetes Clusters configured with auto upgrade version, users can still manually upgrade the version in the normal way, just like clusters without this feature enabled.
- To cancel the auto upgrade schedule for a Managed Kubernetes Cluster, the user must disable the auto upgrade feature or change the auto upgrade schedule before 01:00 GMT+7 on the day FPT Cloud will automatically upgrade the version. For example: if cluster A has auto upgrade version enabled and is scheduled to automatically upgrade at 04:00 GMT+7 on June 25, 2024, the auto upgrade must be disabled or the schedule changed before 01:00 GMT+7 on June 25, 2024. Any changes after this time will have no effect and the automatic version upgrade will still proceed at 04:00 GMT+7 on June 25, 2024.

  * Enable the auto upgrade feature:

[![](/img/migrated/Picture5-4-f125a391.png)](/img/migrated/Picture5-4-f125a391.png)
[![](/img/migrated/Picture6-4-8611699f.png)](/img/migrated/Picture6-4-8611699f.png)
[![](/img/migrated/Picture7-4-0307b0ad.png)](/img/migrated/Picture7-4-0307b0ad.png)

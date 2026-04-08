---
id: "retry-timeout-rule"
title: "Retry Timeout Rule"
description: "Timeout and retry rules for the Provision and Scaling processes in Kubernetes Engine."
sidebar_label: "Retry Timeout Rule"
sidebar_position: "28"
---

# Retry timeout rule

During use of **Kubernetes Engine**, the system may time out in the following 2 processes:
- Provision
- Scaling

## 1. Timeout Provision

During the provisioning of a Kubernetes Engine cluster, issues may arise that lead to a timeout, calculated according to the table below:

| Status change | Condition |
| --- | --- |
| Provisioning => Slowing | 20 min |
| Slowing => Pending | 20 min |
| Pending => Error (timeout) | 40 min |

When provisioning, one of two outcomes occurs:
- Provision succeeds
- Provision fails

When provision fails, two situations may occur:

- **Provision succeeded but status sync was lost:**
  - The Kubernetes cluster was actually created successfully.
  - When you select Retry, the system re-syncs the data and does not re-run the provision process.

- **Provision failed due to a processing error:**
  - If status = failed, a Retry option is displayed so the user can try again.
  - If status = provisioning, the system starts counting time from when the request was submitted.
    - After 20 minutes with no status change, the system transitions status to **slowing**.
    - After 20 minutes in slowing status with no change, the system transitions status to **pending**.
    - After 40 minutes in pending status with no change, the system transitions status to **error**.
    - When status = error, the user can Retry. The system resets the counter and restarts the provision process from the beginning.
  - Total time from the start of provisioning to full timeout: **1 hour 20 minutes**.
  - When status = error, the user can retry.

[![](/img/migrated/Picture6-2-22819bd9.png)](/img/migrated/Picture6-2-22819bd9.png)

## 2. Timeout Scaling

After a Kubernetes cluster is successfully created, during autoscaling or manual scaling, the core processor scales nodes up or down:

| Status change | 1 <= workers added < 5 | workers added > 5 |
| --- | --- | --- |
| Running => Slowing | 10 min | 10 min + (workers added - 5) × 3 min |
| Slowing => Pending | 20 min | 20 min + (workers added - 5) × 3 min |
| Pending => Error (timeout) | 30 min | 30 min + (workers added - 5) × 3 min |

When scaling, one of two outcomes occurs:
- Scaling succeeds
- Scaling fails

When scaling fails, two situations may occur:

- **Scaling succeeded but status sync was lost:**
  - The Kubernetes cluster actually has the additional workers as requested.
  - When you select Retry, the system re-syncs the data and does not re-run the scaling process.

- **Scaling failed due to a processing error:**
  - If status = failed, a Retry option is displayed so the user can try again.
  - If status = processing, the system starts counting time from when the request was submitted.
    - After 10 minutes (adjusted by number of workers added) with no status change (failed/success), the system transitions status to **slowing**.
    - After 20 minutes in slowing status with no change, the system transitions status to **pending**.
    - After 30 minutes in pending status with no change, the system transitions status to **error**.
    - When status = error, the user can Retry. The system resets the counter and restarts the scaling process from the beginning.
  - Total time from the start of scaling to full timeout: **1 hour** (increases for more than 5 new workers).

When the cluster reaches error status, the user can select **Retry**.

[![](/img/migrated/Picture5-2-3cb10329.png)](/img/migrated/Picture5-2-3cb10329.png)

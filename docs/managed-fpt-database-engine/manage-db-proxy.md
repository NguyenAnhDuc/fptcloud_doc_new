---
id: "manage-db-proxy"
title: "Manage DB Proxy"
description: "Steps to manage DB proxy operations in FPT Smart Cloud Database Engine."
sidebar_label: "Manage DB Proxy"
sidebar_position: 22
pagination_next: null
---

# Manage DB Proxy

## View the DB proxy list

- Status = **Running**: DB proxy created successfully.
- Status = **Processing**: DB proxy is being created. Available actions: **Start / Stop / Restart / Resize / Delete / Detail**.
- Status = **Failed**: DB proxy creation failed. Available action: **Delete**.

[![](/img/migrated/DBThta-1-9688a724.png)](/img/migrated/DBThta-1-9688a724.png)

## Case 1: Stop DB proxy

- DB proxy must be in Running status.
- Select **Actions** for the DB proxy Cluster ID to stop.
- Select **Stop**.

[![](/img/migrated/DB-Stop1-5603f1dc.png)](/img/migrated/DB-Stop1-5603f1dc.png)

- The **Stop Database Cluster ID** popup appears. Re-enter the Cluster ID to confirm, then click **Stop**.
[![](/img/migrated/DB-Stop2-5a8afe96.png)](/img/migrated/DB-Stop2-5a8afe96.png)

- DB proxy enters **Stopping** status and cannot be operated until the system finishes processing. This takes 5–7 minutes.

[![](/img/migrated/DB-Stop3-b375b7c0.png)](/img/migrated/DB-Stop3-b375b7c0.png)

## Case 2: Start DB proxy

- DB proxy must be in **Stopped** status.
- In the Action column, click **Start**.

[![](/img/migrated/DB-Start1-ad5fc12b.png)](/img/migrated/DB-Start1-ad5fc12b.png)

- The **Start Database Cluster ID** popup appears. Re-enter the Cluster ID to confirm, then click **Start**.

[![](/img/migrated/DB-Start2-b12a86fa.png)](/img/migrated/DB-Start2-b12a86fa.png)

- DB proxy enters **Starting** status and cannot be operated until the system finishes processing. This takes 5–7 minutes.

[![](/img/migrated/DB-Start3-1a85e282.png)](/img/migrated/DB-Start3-1a85e282.png)

## Case 3: Restart DB proxy

- **DB proxy** must be in Running status.
- In the **Action** column, click **Restart**.
[![](/img/migrated/DB_restart-20aee588.png)](/img/migrated/DB_restart-20aee588.png)

- The **Restart Database Cluster ID** popup appears. Re-enter the Cluster ID to confirm, then click **Restart**.
[![](/img/migrated/DB_restart2-ca969ed6.png)](/img/migrated/DB_restart2-ca969ed6.png)

- **DB proxy** enters **Restarting** status and cannot be operated until the system finishes processing. This takes 5–7 minutes.
[![](/img/migrated/DB_restart3-76af49ff.png)](/img/migrated/DB_restart3-76af49ff.png)

## Case 4: Resize DB proxy

- DB proxy must be in **Running** status.
- In the Action column, click **Resize**.

[![](/img/migrated/DB_resize1-26443919.png)](/img/migrated/DB_resize1-26443919.png)

- The **Resize DB Proxy** popup appears. Enter the vCPU and RAM values, then click **Resize DB Proxy**.

[![](/img/migrated/DB_resize2-46fc1c9b.png)](/img/migrated/DB_resize2-46fc1c9b.png)

- DB proxy enters **Resizing** status and cannot be operated until the system finishes processing. This takes 5–7 minutes.

[![Alt text](/img/migrated/DB_resize3-1d61f76b.png)](/img/migrated/DB_resize3-1d61f76b.png)

## Case 5: Delete DB proxy

- DB proxy must be in **Running** / **Stopped** / **Failed** status.
- In the Action column, click **Delete**.

[![](/img/migrated/DB_delete1-79ffa16d.png)](/img/migrated/DB_delete1-79ffa16d.png)

- The **Delete Database Cluster ID** popup appears. Re-enter the Cluster ID to confirm, then click **Delete**.

[![](/img/migrated/DB_delete2-e50a6b16.png)](/img/migrated/DB_delete2-e50a6b16.png)

- DB proxy enters **Deleting** status and cannot be operated until the system finishes processing.

[![](/img/migrated/DB_delete3-14ab9e83.png)](/img/migrated/DB_delete3-14ab9e83.png)

## Case 6: View DB proxy detail

- DB proxy must be in **Running** status.
- In the Action column, click **Detail**.

[![](/img/migrated/DB_Detail1-98be4280.png)](/img/migrated/DB_Detail1-98be4280.png)

- The **DB Proxy Detail** popup appears. Click **Close** to dismiss.

[![](/img/migrated/DB_Detail2-8b026bce.png)](/img/migrated/DB_Detail2-8b026bce.png)

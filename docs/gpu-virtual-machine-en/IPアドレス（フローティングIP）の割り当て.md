---
id: "IPアドレス（フローティングIP）の割り当て"
title: "Allocate a Floating IP"
description: "After successfully creating a GPU VM, navigate to Network > Floating IPs to allocate a public IP address."
sidebar_label: "Allocate a Floating IP"
sidebar_position: "7"
---

# Allocate a Floating IP

**Step 1:** After successfully creating your GPU VM, go to **Network** > **Floating IPs**.

[![Alt text](/img/migrated/12-1-90c05a89.png)](/img/migrated/12-1-90c05a89.png)

**Step 2:** Click the **Allocate IP address** button to create a new Floating IP.

**Step 3:** In the **Allocate IP address** popup window, fill in the following fields.

  * **IP address:** Select an available IP, or choose **Allocate new from pool** to request a new IP if allocation allows.
  * **Resource:** Select **Instance** and choose the newly created **GPU VM** to associate with the Floating IP.
  * **IP port:** The same setting as the Instance port (22) is recommended.
  * **Instance port:** Must be set to **22**.
  * **Add tag:** Optional — improves resource management.

**Step 4:** After entering the details, click **Allocate floating IP** to confirm. The newly created Floating IP appears in the list.

[![Alt text](/img/migrated/13-1-642b169c.png)](/img/migrated/13-1-642b169c.png)

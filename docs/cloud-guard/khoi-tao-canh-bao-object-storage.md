---
id: "khoi-tao-canh-bao-object-storage"
title: "Create an alert for Object Storage"
sidebar_label: "Create an alert for Object Storage"
sidebar_position: 5
---

# Create an alert for Object Storage

**Step 1:** In the menu, go to **Security** > **Cloud Guard**, open the **Resource Alerts** tab, and click **Create Alert**.

To create an alert for Object Storage, select **Type** = **Object Storage**.

[![file](/img/migrated/image-1696235964781-27725bb4.png)](/img/migrated/image-1696235964781-27725bb4.png)

Select **Metric Type**, **Apply to**, **Severity**, configure the alert condition under **Configure Condition**, and select recipients under **Notify to**.

:::note
For Object Storage alerts, recipients must be **Tenant-level** recipients. These recipients are shared across all VPCs under the same Tenant.
:::

**Step 2:** Select a recipient, or click **Create recipient here** to create a new Tenant-level recipient.

[![file](/img/migrated/image-1696236659925-9bb270d8.png)](/img/migrated/image-1696236659925-9bb270d8.png)

Check **Tenant-level recipient** to create a recipient for the entire Tenant.

**Step 3:** Return to the alert creation screen, select the newly created recipient, and click **Create**.

[![file](/img/migrated/image-1696237048466-bfaa420d.png)](/img/migrated/image-1696237048466-bfaa420d.png)

The alert is created and appears in the list. When the condition is breached or returns to normal, the system automatically sends a notification to the recipient via the configured method.

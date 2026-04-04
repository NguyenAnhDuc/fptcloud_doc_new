---
id: "manage-subusers"
title: "Manage Subusers"
description: "How to create, edit, delete subusers and manage access keys in FPT Object Storage."
sidebar_label: "Manage Subusers"
sidebar_position: 10
---

# Manage Subusers

A **subuser** is a sub-account created within FPT Object Storage with limited access rights, helping to strengthen security and improve data access control.

Depending on usage needs, an administrator can assign **roles** with different access levels to subusers.

### Supported roles

- **None:** No access rights.
- **Read:** Read-only access to data in the bucket.
- **Write:** Write-only access to data in the bucket.
- **Read - Write:** Both read and write access to data.
- **Full:** Full access, including bucket configuration operations.

Using subusers enables clear permission separation, reducing risk when sharing access with multiple users or applications.

---

## Create a new subuser

1. Go to **Object Storage Management**, select the **SubUser** tab, then choose a **Region**.
2. Click **Create SubUser**.
3. Enter the required information:
   - **Name:** A memorable display name.
   - **Access level:** Select the appropriate role.
4. Click **Create** to complete the subuser creation.

---

## Edit a SubUser role

1. In the subuser list, select **Detail** for the subuser to edit.
2. In the **Access level** field, select the new appropriate role.
3. Click **Save** to update.

---

## Manage SubUser Access Keys

Each subuser can have a maximum of **2 pairs of access keys** used to authenticate bucket access via SDK, API, or S3 Client.

### A. Create a SubUser Access Key

1. Go to the **Detail** of the subuser for which you want to create a key.
2. Click **Generate Key**.
3. The system generates an **access key** and **Secret Key** pair.
4. **Immediately save** the key information in a secure location, then click **Confirm access key** to confirm.

:::note
The Secret Key is only displayed once.
:::

### B. Delete a SubUser Access Key

1. Go to the **Detail** of the subuser containing the key to delete.
2. In the **Action** menu of the access key, select **Delete**.
3. Confirm the operation when prompted to complete the deletion.

:::warning
After deletion, all clients using this key will lose access.
:::

---

## Delete a subuser

1. In the subuser list, select **Delete** next to the subuser to delete.
2. Confirm the operation when the warning dialog appears.

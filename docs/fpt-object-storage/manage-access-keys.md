---
id: "manage-access-keys"
title: "Manage Access Keys"
description: "How to manage Admin access keys and SubUser access keys in FPT Object Storage."
sidebar_label: "Manage Access Keys"
sidebar_position: 9
---

# Manage Access Keys

The access key and Secret Key pair is the primary authentication method for the FPT Object Storage service. To use the bucket through methods other than the portal — such as SDK, API, or S3 Client — you need the following information:

- access key
- Secret Key
- endpoint
- Region (optional)

All of this information is provided in the FPT Unify Portal.

Store this information carefully. Access keys created in the Access Key tab all have Admin-level permissions. If this information is exposed, you risk losing all data in your buckets. If you need to share bucket access with multiple users or store keys in an insecure application, create SubUsers with limited access and use SubUser access keys instead.

If you suspect a key has been compromised, go to the FPT Portal immediately and delete that key to prevent further risks.

## Create an Admin Access Key

Currently, each account can create a maximum of 5 pairs of Admin Access Keys per region. If you need more than 5 key pairs, create additional SubUsers.

For security reasons, the Secret Key is only displayed once during creation. Store it carefully in a secure location to avoid losing bucket access.

1. Go to the **Object Storage** menu, select the **Access Key** tab, and choose a **Region**.
2. Click the **Generate Key** button.
3. The system generates an **access key** and **Secret Key** pair.
4. **Copy and save** the keys in a secure location, then click **Confirm Access Key** to complete.

---

## Delete an Access Key

After deletion, all applications or clients using that key will lose access.

1. Go to the **Object Storage** menu, select the **Access Key** tab, and choose a **Region**.
2. Find the access key to delete and select **Delete** in the action column.
3. Confirm the deletion when the dialog appears.

---

## Get endpoint information

The **endpoint** is the HTTPS address used to connect to FPT Object Storage. Each **region** has a different endpoint.

1. Go to the **Object Storage** menu, select the **Access Key** tab, and choose a **Region**.
2. In the **Endpoint** column, you can **copy the corresponding URL**.

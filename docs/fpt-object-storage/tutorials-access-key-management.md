---
id: "tutorials-access-key-management"
title: "Access key management"
description: "**Access Key and Private Key** are the primary authentication methods for the FPT Object Storage service. To use the buc"
sidebar_label: "Access key management"
sidebar_position: 8
---

# Access key management

**Access Key and Private Key** are the primary authentication methods for the FPT Object Storage service. To use the bucket through other forms such as SDK, API, and S3 Client, you need the following information:
  * Access Key
  * Private Key
  * Endpoint
  * Region (optional)

These details will be provided in full on the FPT Unify Portal.
Please store this information carefully. The critical pairs created in the Access Key tab are all Admin keys, so you may lose all data in the buckets if this information is exposed. If you need to share bucket usage rights with multiple people or store keys in an insecure application, create SubUsers with limited access and use SubUser Access Key.
If you suspect your key has been compromised, access the FPT Portal and immediately delete the key to avoid further risks.
## Create Admin Access Key
Admin Access Key is a full-access key for the entire bucket, so there is a significant risk if exposed. Consider using the SubUser Access Key to ensure data security.
Currently, each account can only create a maximum of 5 pairs of Admin Access Keys in one region. If you want to use more than five pairs of keys, make additional SubUsers.
For security reasons, the Secret Key is only displayed once during creation. Store it carefully in a secure location to avoid losing access to the bucket.
**Step 1:** In the menu, select **Object Storage** , open the **Access Key** tab. Choose the **Region**.
**Step 2:** Select **Generate Key**. [![file](/img/migrated/image-1692690328965-2c545e86.png)](/img/migrated/image-1692690328965-2c545e86.png) **Step 3:** The system will automatically generate a new key pair consisting of an **Access Key** and a **Secret key**. You need to copy and store these two keys in a safe place. Then select **Confirm access key**. [![file](/img/migrated/image-1692690340053-4b805cbd.png)](/img/migrated/image-1692690340053-4b805cbd.png)
## Delete Access Key
After deleting the Access Key, clients using this key pair will lose access.
**Step 1:** In the menu, select **Object Storage** , open the **Access Key** tab. Choose the **Region**.
**Step 2:** In the **Action** section of the Key to be deleted, select **Delete**. [![file](/img/migrated/image-1692690350466-d7920d7d.png)](/img/migrated/image-1692690350466-d7920d7d.png) **Step 3:** A warning dialog will appear, displaying the **Access Key** name and requiring user confirmation. Select **Delete** to proceed with the deletion.
## Get Endpoint Information
**Endpoint** is a standard HTTPS domain connected to FPT Object Storage. Each region will have a different endpoint. To obtain the endpoint for the current area, please follow these instructions:
**Step 1:** In the menu, select **Object Storage** , open the **Access Key** tab. Choose the **Region**.
**Step 2:** In the **Endpoint** section, click the **Copy** icon to copy the URL. [![file](/img/migrated/image-1692690365304-d00b5d57.png)](/img/migrated/image-1692690365304-d00b5d57.png)
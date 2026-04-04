---
id: "manage-bucket"
title: "Manage Bucket"
description: "How to create, delete, empty buckets, and add folders in FPT Object Storage."
sidebar_label: "Manage Bucket"
sidebar_position: 4
---

# Manage Bucket

A **bucket** is a logical storage unit in FPT Object Storage, used to store objects such as data files, images, videos, and documents. To view the list of buckets, go to [Object Storage Management](https://console.fptcloud.com/), select a Project, and choose the **Buckets** tab.

- **Create multiple buckets:** Each FPT Object Storage account can create multiple buckets to organize data according to your needs.
- **Configure ACL and access permissions:** Each bucket can have its own ACL (Access Control List) configuration to control access.
- **No file type restrictions:** You can upload any type of file without limitation.

## Create a bucket

1. Go to **Object Storage Management** at [https://console.fptcloud.com](https://console.fptcloud.com) and select the **Buckets** tab.
2. Click **Create Bucket**.
3. Enter the new **bucket** name and select a **Region** from the list. In the **Advanced setting** section, you can:
   - Select **Bucket ACL**: **Public** or **Private** to manage access permissions.
   - Select **Bucket Versioning**: **Disable** or **Enable** to manage object versions.
4. When complete, the new bucket will appear in **Object Storage Management**.

## Delete a bucket

:::warning
Deleting a bucket will permanently delete all objects inside it and cannot be recovered.
:::

1. Go to **Object Storage Management** and select the **Buckets** tab.
2. In the **Action** menu of the bucket to delete, select **Delete**.
3. Confirm the deletion in the warning dialog.

## Empty a bucket

The Empty Bucket feature deletes all data in the bucket while retaining configuration information such as Permissions and Policy.

:::note
Processing time depends on the number of objects. Consider using the Delete Bucket feature if the bucket has more than 1000 objects.
:::

1. Select the **Empty Bucket** action.
2. Confirm the deletion in the warning popup.

## Add a new folder inside a bucket

In the unstructured Object Storage model, there is no traditional concept of a **folder**. Only **buckets** and **objects** exist. However, FPT Portal groups objects with the same path and displays them as a folder.

For example, if there are 2 objects with paths **bucket_name/folder-1/object-1.txt** and **bucket_name/folder-1/object-2.txt**, FPT Portal will display them inside folder **folder-1**.

1. Go to **Object Storage Management**.
2. Navigate to the location where you want to add the folder and select **New folder**.
3. Enter the new folder name and select **Create**.

## Search for a bucket

1. Enter your search term in the **Search** box.
2. Press **Enter** to search by bucket name.

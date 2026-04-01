---
id: "tutorials-bucket"
title: "Create a bucket"
description: "**Bucket** is a term used to refer to a logical storage unit on FPT Object Storage. Each bucket is responsible for conta"
sidebar_label: "Create a bucket"
sidebar_position: 4
---

# Create a bucket

**Bucket** is a term used to refer to a logical storage unit on FPT Object Storage. Each bucket is responsible for containing files/folders uploaded by users. 
To view the list of buckets, please access Object Storage Management at <https://console.fptcloud.com> and select the Buckets tab.
**Step 1:** Access **Object Storage Management** at <https://console.fptcloud.com> and select the **Buckets** tab.
**Step 2:** Choose **Create Bucket**.
**Step 3:** Enter a new **Bucket** name, select a **Region** from the list, and click **Create.** [![file](/img/migrated/image-1690857820566-7be59666.bin)](/img/migrated/image-1690857820566-7be59666.bin)
The system will display the new bucket in **Object Storage Management.** [![file](/img/migrated/image-1690857887249-5719dd7a.bin)](/img/migrated/image-1690857887249-5719dd7a.bin)

```
CopyNote: Bucket names must be unique within each cluster, have a maximum length of 64 characters, and cannot contain special characters.
```

# Delete Bucket
**Step 1** : Access **Object Storage Management** , select the **Buckets** tab.
**Step 2** : In the **Action** section of the Bucket you want to delete, choose **Delete**.
**Step 3** : A confirmation dialog will appear, displaying the bucket name and requesting user confirmation. Choose **Delete** to proceed. [![file](/img/migrated/image-1690857911858-ee201173.bin)](/img/migrated/image-1690857911858-ee201173.bin)

```
CopyNote: Deleting a Bucket will permanently remove all objects inside and cannot be undone, so exercise caution when performing this action.
```

# Empty Bucket
The Empty Bucket feature allows you to delete all data in the bucket while preserving configuration information such as permissions and policies.

```
CopyNote: The processing time will depend on the number of objects. Consider using the Delete Bucket feature if your bucket contains more than 1000 objects.
```

In the bucket where you need to perform actions, select the **Empty Bucket** action. [![file](/img/migrated/image-1690857950848-4ddfb858.bin)](/img/migrated/image-1690857950848-4ddfb858.bin) A confirmation popup will appear, displaying the bucket's name and requesting user confirmation. Choose **Delete** to proceed.
# Adding a New Folder in the Bucket
In the general Object Storage model and FPT Object Storage, there is no concept of a **Folder** as we typically use. Instead, there are only **Buckets** and **Objects**. However, the FPT Portal displays them in a folder-like structure for user convenience. Objects with the same path are grouped as a folder.
For example, if you have two objects with paths like **bucket_name/folder-1/object-1.txt** and **bucket_name/folder-1/object-2.txt** , FPT Portal will display **object-1.txt** and **object-2.txt** inside the **folder-1**.
To create a new folder, follow these steps:
**Step 1:** In the **Object Storage Management** dashboard, select the bucket where you want to add a folder.
**Step 2:** Navigate to where you want to add the folder and select **New folder**. [![file](/img/migrated/image-1690857963679-028e6bb3.bin)](/img/migrated/image-1690857963679-028e6bb3.bin) **Step 3:** Enter the new folder's name and choose **Create**. [![file](/img/migrated/image-1690857969300-e9c7187a.bin)](/img/migrated/image-1690857969300-e9c7187a.bin)
# Search for Buckets
You can search for a list of buckets that meet the specified conditions based on the **Name** field.
Enter the content you want to search for in the **Search** box and press **Enter**. [![file](/img/migrated/image-1690858082977-c83b4d1a.bin)](/img/migrated/image-1690858082977-c83b4d1a.bin)
---
id: "tutorials-object"
title: "Upload objects to a bucket"
description: "FPT Unify Portal supports a maximum upload size of 100GB per upload. If you need to upload a larger file, please use the"
sidebar_label: "Upload objects to a bucket"
sidebar_position: 5
---

# Upload objects to a bucket

FPT Unify Portal supports a maximum upload size of 100GB per upload. If you need to upload a larger file, please use the S3 tool or S3 CLI.
If the file you are about to upload has the same name as an existing file in the folder, you will receive an overwrite warning. If versioning is not enabled, these files will overwrite the existing file in the bucket. If versioning is enabled, the system will create a new version.
**Step 1** : In the **Object Storage Management** dashboard, select the bucket where you want to upload the file.
**Step 2** : Navigate to the location where you want to add the file and select **Upload object.** [![file](/img/migrated/image-1690857983047-04b1d8d1.bin)](/img/migrated/image-1690857983047-04b1d8d1.bin) **Step 3** : Choose the file from your device to upload and click **Upload**. [![file](/img/migrated/image-1690857992938-e04ca382.bin)](/img/migrated/image-1690857992938-e04ca382.bin)
# Download an Object
**Step 1** : In the **Object Storage Management** dashboard, select the bucket that contains the file you want to download.
**Step 2** : Navigate to the location of the file you want to download and click on the file's name. The system will automatically download the selected file to your device through the browser. [![file](/img/migrated/image-1690858004400-4b38e486.bin)](/img/migrated/image-1690858004400-4b38e486.bin)
# Copy the URL of an Object
You can obtain the URL of each object in case you need to share the file or link it to another website. However, to successfully GET this object, it must be in Public mode, along with the bucket containing it.
**Step 1** : In the **Object Storage Management** dashboard, select the bucket containing the file you want to copy the URL.
**Step 2** : Navigate to the file location, and in the **Action** section, select **Copy URL.** [![file](/img/migrated/image-1690858029271-e6abf719.bin)](/img/migrated/image-1690858029271-e6abf719.bin)
# Delete Object

```
CopyNote: If versioning is not enabled, deleting an object will permanently remove the object and cannot be recovered. Proceed with caution.
```

**Step 1:** On the **Object Storage Management** dashboard, select the bucket containing the file you want to delete.
**Step 2:** Navigate to the file location, and in the **Action** section, choose **Delete.** [![file](/img/migrated/image-1690858068872-dd1301ae.bin)](/img/migrated/image-1690858068872-dd1301ae.bin)
**Step 3:** A confirmation dialog will appear, displaying the file name and requesting user confirmation. Select **Delete** to proceed with the deletion. [![file](/img/migrated/image-1690858075037-46f9f63d.bin)](/img/migrated/image-1690858075037-46f9f63d.bin)

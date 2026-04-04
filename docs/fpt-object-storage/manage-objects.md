---
id: "manage-objects"
title: "Manage Objects"
description: "How to upload, download, copy, move, and delete objects in FPT Object Storage."
sidebar_label: "Manage Objects"
sidebar_position: 5
---

# Manage Objects

Each object in FPT Object Storage represents a data file. The system imposes no restrictions on file format — you can store any type of file, from text, images, audio, and video to application-specific formats.

- **Metadata and tags:** Each object can have metadata and tags attached to describe its content, making management and searching easier.
- **Access control:** Access to each object can be controlled via ACL or bucket policy.
- **Versioning:** FPT Object Storage supports storing multiple versions of objects, allowing you to retain and restore previous versions when needed.

## Upload a new object to a bucket

**FPT Unify Portal** supports uploading up to 100 GB per upload. For larger files, use an S3 Client Tool or S3 SDK/CLI.

:::note
If you upload a file with the same name as an existing file, an overwrite warning will appear. If versioning is disabled, the file will overwrite the old one. If versioning is enabled, the system will create a new version.
:::

1. In **Object Storage Management**, navigate to the location where you want to add the file and select **Upload object**.
2. Select the file from your device and click **Upload**.

## Download an object

1. Navigate to the location of the file to download in **Object Storage Management**.
2. Click the file name — the system will automatically download the file to your device.

## Generate a presigned URL

A presigned URL is a temporary access link that allows shared access to a specific object without changing the bucket's permission settings. It has an expiration time and automatically becomes invalid after the specified period.

1. In **Object Storage Management**, navigate to the location of the file for which you want to create a presigned URL.
2. In the **Action** menu of the object, select **Generate Presigned URL**.
3. Select the URL expiration time (from a few minutes to several days), then click **Generate**.
4. Copy and share the displayed URL. The URL will become invalid once it expires.

## Copy an object

Copying an object lets you duplicate data within FPT Object Storage without modifying or losing the original data.

1. In **Object Storage Management**, navigate to the location of the file to copy.
2. In the **Action** menu of the object, select **Copy**.
3. Select the destination **bucket** and optionally a **Folder**, then click **Confirm**.

## Move an object

Moving an object is the process of relocating an object from one location to another. The process copies the object to the new location and then deletes it from the original location.

1. In **Object Storage Management**, navigate to the location of the file to move.
2. In the **Action** menu of the object, select **Move**.
3. Select the destination **bucket** and optionally a **Folder**, then click **Confirm**.

## Copy an object URL

You can get an object's URL to use as a link on a website or to share. To GET an object, either the object or the bucket containing it must be in Public mode.

1. In **Object Storage Management**, navigate to the file location.
2. In the **Action** menu, select **Copy URL**.

## Delete an object

:::note
If versioning is not enabled, deleting an object permanently removes it and it cannot be recovered. If versioning is enabled, the system creates a "delete marker" instead of permanently deleting — previous versions still exist and can be restored.

Deletion via the portal is only suitable for files smaller than 50 GB.
:::

1. In **Object Storage Management**, navigate to the location of the file to delete.
2. In the **Action** menu, select **Delete**.
3. Confirm the deletion in the warning dialog.

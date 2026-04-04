---
id: "bucket-config"
title: "Bucket Config"
description: "How to configure versioning, Static Website Hosting, Lifecycle, and CORS in FPT Object Storage."
sidebar_label: "Bucket Config"
sidebar_position: 7
---

# Bucket Config

## Versioning

**Versioning** is a feature in **FPT Object Storage** that stores and manages multiple versions of an object. When enabled, every time you update or delete an object, a new version is created and saved. You can restore previous versions of an object whenever needed.

To enable Versioning for a bucket:

1. In the **Action** menu of the bucket to configure, select **Config**.
2. Open the **Versioning** tab.
3. Select **Enable** to turn on Versioning or **Disable** to turn it off, then click **Save** to save the changes.

## Static Website Hosting

**Static Website Hosting** is a feature that lets you store all resources of a static website in FPT Object Storage. Beyond ordinary file storage, you can store HTML, CSS, JavaScript files and other static resources in a bucket and serve them as a website. When Static Website Hosting is enabled, FPT Object Storage provides a public URL.

To configure **Static Website Hosting**:

1. Upload all your website source code to a bucket in FPT Object Storage.
2. In the **Action** menu of the bucket to configure, select **Config**.
3. Open the **Static Website Hosting** tab.
4. Select **Enable Website Hosting** and fill in the required parameters:
   - **Index Document:** The name of the website's home page (e.g., `index.html`).
   - **Error Document:** The name of the error page (404), displayed when an invalid URL is requested (e.g., `404.html`).
5. Access your website using the URL shown in the Endpoints section.

## Lifecycle Configurations

Lifecycle Configurations is a feature in FPT Object Storage that lets you automatically manage the lifecycle of objects in a bucket. Automatically deleting objects after a specified period helps reduce storage costs and manage data efficiently.

A typical **Lifecycle Rule** consists of the following components:

- **Scope:** Defines which objects the rule applies to. You can apply the rule to the entire bucket or specify a prefix to apply it to a specific group of objects.
- **Delete current versions of objects:** Defines when the current version of objects within scope will be deleted. Without Versioning, deleting the current version permanently removes the object.
- **Permanently delete noncurrent versions of objects:** Defines when noncurrent versions of objects within scope will be deleted. Noncurrent versions are only created when Versioning is enabled.
- **Delete incomplete multipart uploads:** Defines when incomplete multipart uploads will be deleted, cleaning up failed uploads and freeing storage space.
- **Delete expired object delete markers:** Removes expired delete markers (those with no remaining versions), keeping the bucket tidy.

**Lifecycle Rules** are automatically executed daily at 0:00 GMT (07:00 Vietnam time) by scanning all objects in the bucket.

### A. Create a new Lifecycle Rule

1. In the **Object Storage Management** panel, select **Config** for the bucket to configure.
2. Open the **Lifecycle Configurations** tab, then select **Create Rule**.
3. Enter the **Lifecycle Rule** information in the corresponding fields:
   - **Rule Name:** A name that is easy to identify and manage.
   - **Rule Scope:** The scope of objects the rule applies to. Select **Full** to apply to the entire bucket or specify a **Prefix** to apply to a specific group.
   - **Delete current versions of objects:** Select the number of days after which current object versions will be deleted.
   - **Permanently delete noncurrent versions of objects:** Select the number of days after which noncurrent versions will be deleted.
   - **Delete incomplete multipart uploads:** Select the number of days after which incomplete multipart uploads will be deleted.
   - **Delete expired object delete markers:** Select the number of days after which expired delete markers will be deleted.
4. Click **Save** to save the rule.

### B. Update a Lifecycle Rule

1. In the **Lifecycle Rule** to update, select **Edit**.
2. Enter the updated information in the corresponding fields.
3. After entering all information, save the changes to apply the update.

### C. Delete a Lifecycle Rule

1. In the **Lifecycle Rule** to delete, select **Delete**.
2. A warning dialog will appear asking you to confirm the action. Select **Delete** to proceed.

## Configure Bucket CORS

**CORS (Cross-Origin Resource Sharing)** allows websites and applications from different origins to safely interact with and share data.

By default, **FPT Object Storage** blocks all requests from different origins to your bucket. The **Bucket CORS** feature allows a website from a specific origin to request resources from the bucket without being blocked by the **Same-Origin Policy (SOP)**.

To allow an origin (website or server) to **GET** data from a bucket, you need to configure it in **Bucket CORS Config**.

### A. Create a new Bucket CORS Rule

1. In the **Object Storage Management** panel, select **Config** for the bucket to configure CORS.
2. Open the **Bucket CORS** tab, then select **Create Rule**.
3. Enter the **CORS Rule** information in the corresponding fields:
   - **Rule Name:** The rule name (e.g., `AllowAllOrigins`).
   - **Allowed Origins:** Enter the list of origins (websites or servers) allowed to make CORS requests. Use `*` to allow all origins.
   - **Allowed Methods:** Select one or more HTTP methods to allow for the origins (e.g., `GET`, `POST`, `PUT`).
   - **Max Age Seconds:** Enter the cache duration for the CORS policy in seconds (e.g., `3600` to cache for 1 hour).
   - **Advanced Settings:**
     - **Expose Headers:** Enter response headers that you want applications to be able to access (e.g., `x-amz-request-id`).
     - **Allowed Headers:** Enter headers specified in `Access-Control-Request-Headers` (e.g., `Content-Type`, `Authorization`).
4. After entering all information, click **Save** to apply the new CORS configuration to the bucket.

### B. Update a Bucket CORS Rule

1. In the **Bucket CORS Rule** to update, select **Edit**.
2. Enter the updated **CORS Rule** information in the corresponding fields.
3. After making changes, click **Save** to apply the update.

### C. Delete a Bucket CORS Rule

1. In the **Bucket CORS Rule** to delete, select **Delete**.
2. A warning dialog will appear asking you to confirm the action. Select **Delete** to proceed.

Once confirmed, the rule is deleted and CORS requests associated with that rule will no longer be applied.

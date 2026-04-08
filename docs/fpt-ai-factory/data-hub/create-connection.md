---
id: "create-connection"
title: "Create a connection"
description: "Create a connection to Object Storage for use with Data Hub."
sidebar_label: "Create a connection"
sidebar_position: "3"
---

# Create a connection

Connect Data Hub to FPT Object Storage to manage your datasets.

1. Access Object Storage management at [FPT Cloud Console](https://console.fptcloud.com) and select the **Buckets** tab.
2. Click **Create Bucket**. For details, see [Create a bucket](/docs/fpt-storage/fpt-object-storage/tutorials/use-object-storage-on-fpt-portal/tutorials-bucket).
3. Upload objects to the bucket. For details, see [Upload objects](/docs/fpt-storage/fpt-object-storage/tutorials/use-object-storage-on-fpt-portal/tutorials-object).
4. Access the **Data Hub** service, go to **Connection List**, and click **Create Connection**.

[![Create a Data Hub connection](/img/migrated/image-1742974995525.33.34-760613b1.png)](/img/migrated/image-1742974995525.33.34-760613b1.png)

5. Fill in the connection details:

   - **Name**: Connection name (letters a–z, digits 0–9, hyphens only; 3–64 characters).
   - **Data Source**: Select the data source to enable the connection.
   - **Endpoint URL**: The endpoint address of the bucket, for example `https://test-bucket-name.s3-han02.fptcloud.com`.
   - **Access Key** and **Secret Key**: Authentication credentials for the connection.

[![Fill in connection details](/img/migrated/image-1742975565417.51.05-8588afb6.png)](/img/migrated/image-1742975565417.51.05-8588afb6.png)

6. Click **Save** to create the connection.

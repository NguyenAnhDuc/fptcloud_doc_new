---
id: "upload-file"
title: "Upload File"
description: "Upload additional files in any format to a model version."
sidebar_label: "Upload File"
sidebar_position: "12"
---

# Upload File

Upload additional files in any format to a model version.

## Steps

1. Click on a model to view its details, then select the **Version** tab.

2. Click the 3-dot icon in the **Action** column, then select **Upload**.
[![](/img/migrated/Picture20-1fbfb321.png)](/img/migrated/Picture20-1fbfb321.png)

3. The system generates credentials for uploading files via CLI.
[![](/img/migrated/anh-2-0bfbc3c3.png)](/img/migrated/anh-2-0bfbc3c3.png)

4. Go to the **Configuration** menu to retrieve your **Access Key** and **Secret Key** for uploading files.
[![](/img/migrated/anh-3-dc5c31ee.png)](/img/migrated/anh-3-dc5c31ee.png)
[![](/img/migrated/anh-4-1295fdc8.png)](/img/migrated/anh-4-1295fdc8.png)

## Upload using WinSCP (S3 Client)

1. Install and open WinSCP.

2. Enter the login credentials as follows:
[![](/img/migrated/Picture22-c505575f.png)](/img/migrated/Picture22-c505575f.png)
   - **File protocol**: Amazon S3
   - **Encryption**: TLS/SSL Implicit encryption
   - **Host name**, **Access key ID**, **Secret access key**: Use the values from the Configuration menu above.
   - **Port**: 443

[![](/img/migrated/Screenshot_19-91b976ba.png)](/img/migrated/Screenshot_19-91b976ba.png)

After logging in to WinSCP successfully, you can upload files and manage files stored in the model directly.

On the portal, after uploading from the S3 Client, files appear under the corresponding version in the **File Browser** tab.

Switch to the **File Browser** tab and select the corresponding version to view, download, or delete files.
[![](/img/migrated/Picture24-50266ec8.png)](/img/migrated/Picture24-50266ec8.png)

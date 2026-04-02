---
id: "create-acls"
title: "Create ACLs"
description: "ACLs help assign permissions that limit operations on each topic or group, including read and write access from different IP addresses."
sidebar_label: "Create ACLs"
sidebar_position: 14
---

# Create ACLs

**ACLs** help users assign permissions, limiting the operations of principals on each topic or group. The permissions include Write, Read, from different IP addresses.
To create ACLs, follow these instructions:
**Step 1** : From the menu, navigate to **Application** > **ACLs**. Click Create
**Step 2** : Enter the necessary information:
  * **Credential** (required): Select a previously created credential
  * **Resource Type** (required): Topic or Group.
If you choose **Topic** , it means you are assigning permissions for the user to use the topic, similarly if you choose **Group**.
  * **Pattern Type** (required): Literal or Prefixed.
If **Literal** is selected, it means you have read/write permissions for only one topic that you declare in the "Topic" field. If **Prefixed** is chosen, you will have read/write permissions for all topics with the prefix displayed in the "Resource name" field.
  * **Host** (optional): If you want to block access from different IPs, you can enter a value in this field.
  * **Operation** (required): Assign read or write permissions for topic/group
  * **Permission** (required): Allow or Deny.

[![](/img/migrated/Pic1_ACL-194aa4c5.png)](/img/migrated/Pic1_ACL-194aa4c5.png)
**Step 3** : Click **OK** to complete.

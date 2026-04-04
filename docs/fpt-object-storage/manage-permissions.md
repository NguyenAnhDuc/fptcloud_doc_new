---
id: "manage-permissions"
title: "Manage Permissions"
description: "How to configure bucket ACL, object ACL, and bucket policy in FPT Object Storage."
sidebar_label: "Manage Permissions"
sidebar_position: 6
---

# Manage Permissions

## Bucket ACL (Access Control List)

Bucket ACL is the access control mechanism for buckets. FPT Object Storage defines 2 basic permission levels:

- **Private:** Only authenticated and authorized users can access or manage the bucket.
- **Public:** All users, including anonymous users on the Internet, have read-only access to the bucket.

:::note
Bucket ACL has no effect on objects. To make objects inside a bucket public, use Bucket Policy or Object ACL instead.
:::

To configure Bucket ACL:

1. In the **Action** menu of the bucket to configure, select **Config**.
2. Select **Public** or **Private**.

## Object ACL (Object Permission)

Object Permissions define what actions other users can perform on an object, based on the ACL mechanism. There are two permission groups:

- **Private:** Restricts access for anonymous users. Only authenticated and authorized users can view the object.
- **Public:** Provides read-only access to everyone, including anonymous users, via the Object URL.

:::warning
Object Permissions are affected by Bucket Policy. Bucket Policy takes precedence over Object ACL. Be careful when using both permission layers simultaneously.
:::

To configure Object Permissions:

1. In **Object Storage Management**, select the bucket containing the file whose permissions you want to change.
2. Navigate to the file location. In the **Action** menu, select **Edit Permission**.
3. In the **Read permission** field, select **Public** or **Private**, then click **Update** to save.

## Configure Bucket Policy

Bucket Policy is an S3 access management mechanism that lets you define detailed rules about who can access and perform actions on objects in a bucket. You can create rules to allow or deny access based on IP address, time, or action type (GET, PUT, DELETE).

Bucket Policy is written in JSON format following the AWS standard. You can use the AWS policy creation tool [here](https://awspolicygen.s3.amazonaws.com/policygen.html).

Example bucket policy allowing public read access:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowPublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:GetObject"],
      "Resource": "arn:aws:s3:::example-bucket/*"
    }
  ]
}
```

:::note
- Bucket Policy takes precedence over Object ACL.
- Bucket policy only applies to the bucket where it is declared — it cannot be configured across buckets.
:::

To configure Bucket Policy:

1. In the **Action** menu of the bucket to configure, select **Config**.
2. Select **JSON Editor** mode if you already have a policy and are experienced, or use **Visual Editor** if you are new to it.
3. After entering all the information, click **Create** to create a new policy or **Update** to update an existing one.

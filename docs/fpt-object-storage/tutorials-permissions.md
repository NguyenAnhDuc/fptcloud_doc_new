---
id: "tutorials-permissions"
title: "Tutorials Permissions"
sidebar_label: "Tutorials Permissions"
sidebar_position: 6
---

Permissions


## Bucket **Access Control List** (Bucket ACL)

Bucket ACL is an access control mechanism for buckets. It allows you to control who has permission to view, write, or manage your bucket and the objects inside it.

In FPT Object Storage, there are 2 basic permissions defined: Public and Private.

  * **Private:** Only authenticated and authorized users can access or manage the bucket.
  * **Public:** Everyone has read-only access to the bucket, including anonymous users on the Internet. Anyone with the bucket URL can see the full list of objects in the bucket. However, Bucket ACL does not apply to individual objects. To make objects in the bucket publicly accessible, you need to use the Bucket Policy or Object ACL feature.


To configure Bucket ACL, follow these steps:

**Step 1:** In the **Action** section of the bucket to configure, click **Config**.

**Step 2:** Select **Public** or **Private.**

## Object **Access Control List** (Object Permission)

In **FPT Object Storage**, **Object Permissions** define the actions that other users can perform on an object. To adjust permissions for individual objects, you can use the **Edit Object Permissions** feature on FPT Unify Portal, based on the ACL mechanism. There are two main permission groups:

  * **Private:** Restricts access for anonymous users. Only authenticated and authorized users can view the object.
  * **Public:** Provides read-only access to everyone, including anonymous users, via the Object URL.


Note that Object Permissions are also affected by **Bucket Policy**. Bucket Policy takes precedence over Object ACL. Use caution when applying both permission layers simultaneously.

If the Bucket Policy specifies that all objects are public, then all objects will be publicly accessible (read-only) regardless of the individual object's ACL permission.

To configure **Object Permissions** in FPT Object Storage, follow these steps:

**Step 1:** On the **Object Storage Management** dashboard, select the bucket containing the file whose permissions you want to change.

**Step 2:** Navigate to the file's location within the bucket. In the **Action** section, click **Edit Permission**.

**Step 3:** In the **Read permission** field, select the access mode you want (Public or Private), then click **Update** to save the changes.

## Configure Bucket Policy

Bucket Policy is an S3-compatible access management mechanism that allows you to define detailed rules about who can access and perform actions on objects in the bucket. You can create rules to allow or deny access based on various factors, including IP address, time, or action type (such as GET, PUT, DELETE).

Bucket Policy is useful for sharing buckets with other organizations or securing data. You can configure policies to allow access from other services or specific users/subusers. It provides a tool for users to set permissions for subusers and other users.

Bucket Policy is written in JSON format following the AWS standard. You can use the AWS policy generator tool at [here](<https://awspolicygen.s3.amazonaws.com/policygen.html>) and apply it to FPT Object Storage:

Below is an example of a bucket policy:
[code]
    Copy{
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

[/code]

In the example above, the policy allows all users (_Principal: "*"_) to read (_Action: s3:GetObject_) all objects (_Resource*_) in the bucket named "example-bucket". This means the example-bucket will be in public mode and everyone will have the permission to get objects from this bucket.

Bucket Policy is a powerful tool for managing access to data in a bucket. However, exercise caution when configuring bucket policy to ensure that only authorized users can access the data in the bucket.

Some important notes:

  * Bucket Policy takes precedence over Object ACL. Use caution when applying both permission layers simultaneously.
  * A bucket policy only applies to the bucket where it is declared — it cannot be configured across buckets. For example, if you have bucket-1 and bucket-2, you cannot declare rules for bucket-2 in bucket-1's Bucket Policy, and vice versa.


To declare a Bucket Policy for a bucket, follow these steps:

**Step 1:** In the **Action** section of the bucket to configure, click **Config**.

**Step 2:** If you already have a policy in JSON format and are experienced with bucket policies, select **JSON Editor** mode. Otherwise, use **Visual Editor**.

**Step 3:** After entering all required information, click **Create** to create a new policy or **Update** to update an existing one.

---
id: "tutorials-permissions"
title: "Edit object permissions (ACL)"
description: "In **FPT Object Storage** , Object Permissions determine **who** is allowed to perform **actions** on **objects** within"
sidebar_label: "Edit object permissions (ACL)"
sidebar_position: 6
---

# Edit object permissions (ACL)

In **FPT Object Storage** , Object Permissions determine **who** is allowed to perform **actions** on **objects** within a bucket.
You can use the **Edit Object Permissions** feature to adjust permissions for individual objects. This feature is built on the ACL mechanism, and Object ACL has three basic permissions:
  * **READ:** Allows reading the content of an object.
  * **WRITE:** Allows writing data to an object.
  * **READ_ACP (Access Control Policy):** Allows reading the ACL information of an object.

With the **Edit Object Permissions** feature on the FPT Portal, there are two main permission groups: Public and Private.
  * **Private:** Restricts access to Anonymous Users. Only authenticated and authorized users can view the object.
  * **Public:** Objects will always have Read-Only permission, even for anonymous users. At this point, the object can be accessed from anywhere using just the URL.

> **Note:** Bucket Policy also affects objects in addition to object permissions. Bucket Policy takes precedence over Object ACL. Be cautious when using both permission levels simultaneously.
> For example, if the bucket policy has a public rule, then all objects will be shared (only GET) for all anonymous users, regardless of whether the Object ACL of those objects is set to public or not.
**Step 1:** In the **Object Storage Management** table, select the bucket containing the file you want to modify permissions for.
**Step 2:** Navigate to the file's location, and in the **Action** section, choose **Edit Permission.**
[![file](/img/migrated/image-1690858053759-049e0946.bin)](/img/migrated/image-1690858053759-049e0946.bin)
**Step 3:** Select the display mode in the **Read permission** box, then choose **Update.**
[![file](/img/migrated/image-1690858061046-6112eb1e.bin)](/img/migrated/image-1690858061046-6112eb1e.bin)

# Bucket Permissions (Bucket ACL)
Bucket permissions (ACL) allow you to manage access rights to a bucket. There are two basic permissions defined: Public and Private.
  * **Public:** Listing all objects in the bucket will be displayed to everyone, including Anonymous Users on the Internet. All they need is the bucket link, and they will have the right to list all objects.
  * **Private:** Restricts access to Anonymous Users. Only authenticated and authorized users can view the list of objects in the bucket.

> **Note:**
>   * For security reasons, FPT Cloud recommends using Bucket Policy to manage access permissions for buckets. The ACL feature will be removed from the Unify Portal soon.
>   * Bucket ACL does not apply to objects. Use the Bucket Policy or Object ACL feature to make objects public in a bucket.
> 

To configure Bucket permissions (ACL), follow these steps:
**Step 1:** In the **Action** section of the bucket to be configured, select **Config.**
**Step 2:** Choose **Public** or **Private.**
If you want to change permissions for all subfolders and objects inside the bucket simultaneously, check **Apply for all subfolders and objects.**
> **Note:** Processing time will depend on the number of objects. The more objects, the longer the processing time.
[![file](/img/migrated/image-1690878437407-662f85da.bin)](/img/migrated/image-1690878437407-662f85da.bin)

# Configure Bucket Policy
Bucket Policy is a feature that allows you to manage access rights to a specific bucket. It provides a tool for users to set permissions for sub-users and other users.
Bucket Policy is written in JSON format following AWS standards. You can use the AWS policy generator tool here: [AWS Policy Generator](https://awspolicygen.s3.amazonaws.com/policygen.html)
You can allow or deny (**Effect**) actions (**Action**) on a resource (**Resource**) for a specific set of principals (**Principal**). By defining access rights in a bucket policy, you can control who can access and operate on data within your bucket.
Here is an example of a bucket policy:

```
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
```

In the example above, the policy allows all users (Principal: "*") to have read permissions (Action: s3:GetObject) for objects (Resource) within the bucket named "example-bucket." This means that the "example-bucket" bucket is set to public, and everyone has the right to get objects from this bucket.
**Bucket Policy is a powerful tool for managing access permissions to data within a bucket. However, it's essential to be cautious when configuring bucket policies to ensure that only authorized users can access data within the bucket.**

```
Copy> - Bucket Policy takes precedence over Object ACL. For security, you should be careful when using both permission layers simultaneously.
> - Bucket policies are only effective within the bucket they are declared for and cannot be configured across buckets. For example, if you have bucket-1 and bucket-2, you cannot define rules for bucket-2 in the Bucket Policy of bucket-1 and vice versa.
```

To configure a Bucket Policy for a bucket, follow these steps:
**Step 1:** In the **Action** section of the bucket you want to configure, select **Config**.
**Step 2:** Enter a valid policy in the Editor and choose **Save**. [![file](/img/migrated/image-1690878422700-6408f17f.bin)](/img/migrated/image-1690878422700-6408f17f.bin)

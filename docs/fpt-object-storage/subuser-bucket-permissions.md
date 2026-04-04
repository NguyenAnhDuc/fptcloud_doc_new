---
id: "subuser-bucket-permissions"
title: "Grant Bucket Permissions to Subusers"
description: "How to use Bucket Policy to grant specific bucket access to subusers in FPT Object Storage."
sidebar_label: "Subuser Bucket Permissions"
sidebar_position: 19
pagination_next: null
---

# Grant Bucket Permissions to Subusers

## Overview

FPT Object Storage supports creating subusers, but a subuser's role applies to all of the admin's resources. For example, if you create a subuser with the Read Only role, that subuser will have read access to all of the admin's buckets.

To grant permissions on a per-bucket basis, you must use Bucket Policy.

As an example, suppose you have 3 buckets — Bucket-1, Bucket-2, Bucket-3 — and want to grant access to 3 subusers — SubUser-1, SubUser-2, SubUser-3. The following is a detailed configuration guide on **FPT Unify Portal**.

## Prerequisites

- You have an FPT Cloud account with the Object Storage service enabled.
- Buckets have been successfully created in the same region.

## Steps

1. **Create subusers with None permission** to ensure subusers cannot access other buckets.

2. **Open access to specific buckets for each subuser.** For each bucket, declare a Bucket Policy using the following template:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": ["arn:aws:iam::SUBUSER_ACCOUNT_ID:user/SUBUSER_NAME"]
      },
      "Action": "s3:*",
      "Resource": [
        "arn:aws:s3:::YOUR_BUCKET_NAME",
        "arn:aws:s3:::YOUR_BUCKET_NAME/*"
      ]
    }
  ]
}
```

- **Version:** The policy version (typically "2012-10-17").
- **Effect:** The permission type ("Allow" or "Deny").
- **Principal:** The specific user or role. Replace SUBUSER_ACCOUNT_ID and SUBUSER_NAME with the information of the subuser to be granted access.
- **Action:** The actions the subuser can perform on the bucket (here "s3:*" allows all actions).
- **Resource:** The resources the policy applies to (here the bucket and all objects inside it).

3. **Create SubUser Keys** and provide them to the end users.

## Summary

With the steps above, you have used bucket policy to grant subusers access to specific buckets within FPT Object Storage.

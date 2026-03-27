---
id: "overview-iam-user"
title: "Overview Iam User"
description: "An IAM User is a user invited to a Tenant, which could either be an existing customer with an FPT Cloud/SSO account or a"
sidebar_label: "Overview Iam User"
sidebar_position: 18
---

# Overview Iam User

An IAM User is a user invited to a Tenant, which could either be an existing customer with an FPT Cloud/SSO account or a new one.
  * If the invited user already has an account, once they confirm, they can immediately access the VPC with the granted permissions. If they don't have an account, they will be guided to create a new FPT Cloud account.
  * If an IAM User needs to use a separate new Tenant, they can simply contact the support team to be assigned a Tenant quota.
  * If a Tenant Owner wants to change the role or revoke access to a Tenant for any IAM User, they can modify the User Group as instructed here.
    * For example, User A is part of a User Group with the Reviewer role, which grants them access to Tenant B.
    * If you want to revoke User A's access to Tenant B, remove User A from the User Group. This will revoke any access to Tenant B. Similarly, to change their access to a different role, assign a new role to the User Group.

**Note** : Changing the role for a User Group may affect other users in the same group. If you only want to change the role for a specific user, create a new User Group as instructed [Link](https://fptcloud.com/en/documents/iam-2/?doc=create-user-group) .
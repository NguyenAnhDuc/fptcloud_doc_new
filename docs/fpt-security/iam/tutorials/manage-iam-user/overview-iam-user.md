---
id: "overview-iam-user"
title: "IAM User overview"
description: "An IAM User is a user invited to a Tenant, who may or may not already have an FPT Cloud account."
sidebar_label: "IAM User overview"
sidebar_position: 1
---

# IAM User overview

An IAM User is a user invited to join a Tenant, who may already have an FPT Cloud/SSO account or may not yet have one.

- If the invited user already has an account, they can access the assigned VPC immediately after confirming the invitation.
- If they do not have an account yet, they will be guided to create a new FPT Cloud account.
- If an IAM User wants to use a separate new Tenant, contact the support team to request a Tenant quota allocation.

To change the role or revoke access for an IAM User, edit the User Group that contains that user:

- To revoke access: remove the user from the User Group — the user will no longer have access to that Tenant.
- To change to a different role: assign a new role to the User Group.

:::warning
Changing the role for a User Group affects all other users in that User Group. If you only want to change the role for a specific user, create a new User Group containing only that user.
:::

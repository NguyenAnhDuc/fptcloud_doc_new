---
id: "huong-dan-tich-hop-oidc-de-quan-ly-account"
title: "Integrate OIDC for account management"
description: "How to integrate KeyCloak with ArgoCD to authenticate application users via OIDC"
sidebar_label: "Integrate OIDC for account management"
sidebar_position: "51"
---

# Integrate OIDC for account management

This guide walks through integrating KeyCloak with ArgoCD to authenticate application users. You will create a client in KeyCloak and configure ArgoCD to use KeyCloak for authentication, using groups configured in KeyCloak to define user permissions in ArgoCD.

**Step 1:** Create a Client in KeyCloak.

Log in to the KeyCloak server > Select the **Realm** to create a Client > **Create Client**:

[![](/img/migrated/Picture119-1-b0867aca.png)](/img/migrated/Picture119-1-b0867aca.png)

[![](/img/migrated/Picture120-1-6df9610a.png)](/img/migrated/Picture120-1-6df9610a.png)

[![](/img/migrated/Picture121-1-45e82415.png)](/img/migrated/Picture121-1-45e82415.png)

Click **Save** > **Credential**. The Client secret is used to configure information on FPT Cloud Portal.

[![](/img/migrated/Picture122-1-0ab8c726.png)](/img/migrated/Picture122-1-0ab8c726.png)

**Step 2:** Configure Group Claim by creating a new Client scope:

[![](/img/migrated/Picture123-1-f51f46f3.png)](/img/migrated/Picture123-1-f51f46f3.png)

Click **Save** to create the Client Scope. In the **Mapper** tab > **Configure a new mapper** > **Group Membership**:

[![](/img/migrated/Picture124-1-d7e5585c.png)](/img/migrated/Picture124-1-d7e5585c.png)

**Step 3:** Configure the groups scope in the Client:

[![](/img/migrated/Picture125-1-706c2c4c.png)](/img/migrated/Picture125-1-706c2c4c.png)

Create a group:

[![](/img/migrated/Picture126-1-9b6c7dcb.png)](/img/migrated/Picture126-1-9b6c7dcb.png)

Create a User and add to the group:

[![](/img/migrated/Picture127-1-b6c9e121.png)](/img/migrated/Picture127-1-b6c9e121.png)

**Step 4:** Configure ArgoCD Policy.

Grant admin/readOnly permissions to the user group:

```
g, ArgoCDAdmins, role:admin
g, ArgoCDAdmins, role:readonly
```

[![](/img/migrated/Picture128-1-32f3f148.png)](/img/migrated/Picture128-1-32f3f148.png)

**Step 5:** Log in to ArgoCD via KeyCloak OIDC Authentication:

[![](/img/migrated/Picture129-1-46fe232c.png)](/img/migrated/Picture129-1-46fe232c.png)

Result after logging in via KeyCloak:

[![](/img/migrated/Picture130-7270537c.png)](/img/migrated/Picture130-7270537c.png)

---
id: "configure-oidc-config"
title: "Configure OIDC config"
description: "Guide to adding a new OIDC configuration to integrate SSO with Keycloak in ArgoCD."
sidebar_label: "Configure OIDC config"
sidebar_position: 4
---

# Configure OIDC config

After enabling OIDC, add a new OIDC config to integrate SSO with Keycloak.

1. On the **Security & Access** > **OIDC Scope** screen, click **Add new OIDC**.

[![](/img/migrated/Picture23-4-eb213e0f.png)](/img/migrated/Picture23-4-eb213e0f.png)

2. Enter the OIDC configuration details from your Keycloak system:
   - **Name**: The display name shown on the ArgoCD login screen (e.g., `Login via [Name]`)
   - **Issuer**: Obtained from Keycloak after creating the client
   - **ClientID**: The client ID created in Keycloak for managing ArgoCD users
   - **ClientSecret**: The client secret associated with the created ClientID

[![](/img/migrated/Picture24-4-30a35542.png)](/img/migrated/Picture24-4-30a35542.png)

3. Result after configuring OIDC:

[![](/img/migrated/Picture25-4-ea9826ed.png)](/img/migrated/Picture25-4-ea9826ed.png)

[![](/img/migrated/Picture26-4-b05c5e5c.png)](/img/migrated/Picture26-4-b05c5e5c.png)

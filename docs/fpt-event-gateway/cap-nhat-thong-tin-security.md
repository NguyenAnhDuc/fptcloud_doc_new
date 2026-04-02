---
id: "cap-nhat-thong-tin-security"
title: "Update Security Information"
description: "To update Security information, follow the steps below."
sidebar_label: "Update Security Information"
sidebar_position: 9
---

# Update Security Information

To update **Security** information, follow the steps below:

**Step 1:** In the menu bar, select **Integration** > **Event Gateway**.

**Step 2:** In the **Event Gateway** list, select an **Event Gateway** > select the **Security** tab.

**Step 3:** In the **Security** list, select the **Security** entry to update > click **Action** > select **Edit**.

**Step 4:** In the **Update JWT Auth** popup, update the following information:

- **Claim key:** List of claim keys:
  - Issuer
  - Issued At
  - Expiration
  - Audience
  - Subject
  - Scope
    - Default claim key is "Issuer".
    - The interface displays 1 claim key-value pair by default when JWT Auth is enabled.
    - By default, 2 inputs are rendered: Issuer and Audience, both required.
- **Value:** The value corresponding to each claim key (if any).
  - Maximum 100 characters.
- **Public key (required):** Public key string in PEM format.
  - Must begin with `-----BEGIN PUBLIC KEY-----` and end according to PEM standard.

**Step 5:** Click **Update** to save the updated **JWT Auth** information.

[![Update JWT Auth form](/img/migrated/image1e-b4866c34.png)](/img/migrated/image1e-b4866c34.png)

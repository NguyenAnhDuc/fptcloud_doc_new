---
id: "my-account"
title: "My account"
description: "Manage your API keys and view usage statistics in AI Marketplace."
sidebar_label: "My account"
sidebar_position: 9
---

# My account

## How to view your API keys?

To check your API keys, follow the instructions below.

:::note
Ensure your account is subscribed to a paid plan. If you do not have one, please [contact us](./contact-us.md).
:::

1. Click on the account icon in the header.

[![Account icon in the header navigation bar](/img/migrated/0-fb82a997.png)](/img/migrated/0-fb82a997.png)

2. Select **My Account**.

Your list of API keys will be shown on the **My API Keys** page.

[![My API Keys page listing all API keys with their status](/img/migrated/my-api-key-02299856.png)](/img/migrated/my-api-key-02299856.png)

---

## How to create a new API key?

1. Go to the **My API Keys** page and click the **Create New API Key** button.
2. Enter a **Name** for the key.
3. Choose the models you would like to access.
4. Click the **Create** button to generate your new API key.

[![Create API key pop-up showing name input and model selection](/img/migrated/create-my-api-key-ac675818.png)](/img/migrated/create-my-api-key-ac675818.png)

After your new API key is created, copy or save your key.

:::warning
The API key is only visible and can be copied once at creation. Save your key in a safe place and do not share it with others or expose it in the browser or other client-side code. Anyone with your API key can make requests on your behalf. AI Marketplace may automatically disable any API key found to have leaked publicly.
:::

Click the **Done** button to finish.

[![Done button confirming API key creation](/img/migrated/done-7329bd74.png)](/img/migrated/done-7329bd74.png)

---

## How to edit an existing API key?

You can edit the **Name** and **Permission** of an API key.

1. Go to the **My API Keys** page and click **Action** next to the API key you want to edit.
2. Select **Edit** from the dropdown menu.
3. Edit your information.
4. Click **Save** to finalize the changes.

---

## How to revoke an API key?

:::warning
After revoking, the API key will be immediately disabled. API requests made using this key will be rejected, which could cause any systems still depending on it to break.
:::

1. Go to the **My API Keys** page and click **Action** next to the API key you want to revoke.
2. Select **Revoke** from the dropdown menu.
3. Click **Revoke key** to confirm and delete the API key.

[![Revoke API key confirmation dialog](/img/migrated/revoke-55f19ebc.png)](/img/migrated/revoke-55f19ebc.png)

---

## How to check your usage?

To check your usage including input tokens, output tokens, and total usage for each model and API key, go to **My Account > My Usage**.

[![My Usage page showing token consumption per model and API key](/img/migrated/my-usage-9f9ef039.png)](/img/migrated/my-usage-9f9ef039.png)

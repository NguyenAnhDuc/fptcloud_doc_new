---
id: "SSO-qua-FCDClient-cu"
title: "SSO via legacy FCDClient"
description: "Guide to SSO login via the legacy FCDClient already installed on your device"
sidebar_label: "Via legacy FCDClient"
sidebar_position: 7
pagination_next: null
---

# SSO via legacy FCDClient

For users who are still using a previously installed legacy FCDClient.

:::warning
Support for accessing via legacy FCDClient on PCs and laptops will end **after 31 March 2026**. Access from other device types remains supported until further notice. Install the new FCDClient proactively to avoid interruptions to your work.
:::

## 1. Open the service homepage with the correct URL

Valid URL formats:

- Your organization's dedicated FCD URL (provided by your customer administrator)
- A URL that already contains a valid authentication code (format: `code.domain`). Example: `pil783454741.pilotfcd.online`
- The service default URL

:::note
The URL is provided by your customer administrator.
:::

Open the service link in a web browser and select **Access through FPT Cloud Desktop Client**.

[![FPT Cloud Desktop access method selection screen](/img/migrated/image-1767859575680-f5ed3897.png)](/img/migrated/image-1767859575680-f5ed3897.png)

## 2. Sign in to the Authenticator (Server)

**If you are accessing via a URL that already contains a valid authentication code** (example: `pil783454741.pilotfcd.online`):

- Sign in with your SSO account (for example: Microsoft account) and enter the corresponding OTP. Authentication (Server) login is successful.

[![SSO login screen](/img/migrated/image-1767953411678-b06915c9.png)](/img/migrated/image-1767953411678-b06915c9.png)

---

**If you downloaded FCDClient from the service default URL:**

1. Enter the Authentication Code (provided by your customer administrator). Example: `pil783454741`.

[![Enter Authentication Code screen](/img/migrated/image-1767863050735-fee7cee6.png)](/img/migrated/image-1767863050735-fee7cee6.png)

2. Sign in with your SSO account (for example: Microsoft account) and enter the corresponding OTP. Authentication (Server) login is successful.

[![SSO login success screen](/img/migrated/image-1767953411678-b06915c9.png)](/img/migrated/image-1767953411678-b06915c9.png)

:::note
**If a two-factor authentication QR code is displayed:**

1. Download and install the **Microsoft Authenticator** app on your phone from the App Store or Google Play.

[![Two-factor authentication QR code screen](/img/migrated/image-1767860622852-f00b8ad2.png)](/img/migrated/image-1767860622852-f00b8ad2.png)

2. Open the Authenticator app and scan the QR code.

[![Scanning the QR code with Microsoft Authenticator](/img/migrated/image-1767860691470-919c5b65.png)](/img/migrated/image-1767860691470-919c5b65.png)

3. The app syncs and displays an OTP. Enter the OTP and click **Submit**. Authentication (Server) login is successful.
:::

## 3. Access your virtual desktop

On the virtual desktop list screen, select the virtual desktop you want to access.

:::note
At this step, select the option to access via FCDClient.
:::

If the legacy FCDClient is installed: The system opens the legacy FCDClient to access the virtual desktop. Enter your virtual desktop login credentials if prompted. Virtual desktop access is successful.

[![Accessing virtual desktop via legacy FCDClient](/img/migrated/image-1767865288885-77987978.png)](/img/migrated/image-1767865288885-77987978.png)

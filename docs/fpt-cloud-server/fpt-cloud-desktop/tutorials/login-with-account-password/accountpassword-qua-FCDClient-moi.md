---
id: "accountpassword-qua-FCDClient-moi"
title: "Account/Password via new FCDClient"
description: "Guide to Account/Password login via the new FCDClient - the recommended access method"
sidebar_label: "Via new FCDClient (recommended)"
sidebar_position: 2
---

# Account/Password via new FCDClient

For the most stable and feature-complete experience, giving you direct control through the application.

:::note
You only need to complete Step 1 (installation) once. On subsequent visits, you can connect directly from the FCDClient application.
:::

## Step 1: Install the new FCDClient

### 1. Open the service homepage with the correct URL

Valid URL formats:

- Your organization's dedicated FCD URL (provided by your customer administrator)
- A URL that already contains a valid authentication code (format: `code.domain`). Example: `pil783454741.pilotfcd.online`
- The service default URL

:::note
The URL is provided by your customer administrator.
:::

Open the service link in a web browser and select **Access through FPT Cloud Desktop Client**.

[![FPT Cloud Desktop access method selection screen](/img/migrated/image-1767859575680-f5ed3897.png)](/img/migrated/image-1767859575680-f5ed3897.png)

### 2. Download, install, and open FCDClient

The system automatically downloads the latest FCDClient version compatible with your operating system.

If the browser shows a download warning:

[![Browser download warning](/img/migrated/image-1767859694792-be1aa0bc.png)](/img/migrated/image-1767859694792-be1aa0bc.png)

Click the three-dot menu > **Keep** > **Keep anyway**.

[![Confirm keeping the downloaded file](/img/migrated/image-1767859804851-972a2244.png)](/img/migrated/image-1767859804851-972a2244.png)

After the download completes, select **Open file** to install the application.

[![Open FCDClient installer](/img/migrated/image-1767859882851-7f4cfd99.png)](/img/migrated/image-1767859882851-7f4cfd99.png)

**On Windows:** When the "Windows protected your PC" popup appears, click **More info** then **Run anyway**.

**On macOS:**

1. Drag the installer into the **Applications** folder
2. Open the installer and click **Open** to confirm
3. Check **Don't warn me when opening applications on this disk image**

[![Installing FCDClient on macOS](/img/migrated/image-1767859982299-d48afcb4.png)](/img/migrated/image-1767859982299-d48afcb4.png)

FCDClient is now installed. Open the FCDClient application.

:::note
**On macOS:** You also need to install the Microsoft Windows App from the [Mac App Store](https://apps.apple.com/us/app/windows-app/id1295203466?mt=12).

[![Installing Microsoft Windows App on macOS](/img/migrated/image-1767860277298-7ec9d9f6.png)](/img/migrated/image-1767860277298-7ec9d9f6.png)

If your device shows a warning about FCDClient, go to **Settings > Privacy & Security > Open Anyway** for FCDClient.
:::

## Step 2: Access your virtual desktop via new FCDClient

### 3. Open FCDClient and sign in to the Authenticator (Server)

- **If FCDClient already has server details** (filled in previously, or downloaded from a URL containing a valid authentication code): Select **Connect Server** and enter your account credentials as described in step 4.

[![FCDClient with server details pre-filled](/img/migrated/image-1767952725970-cec7271f.png)](/img/migrated/image-1767952725970-cec7271f.png)

- **If FCDClient has no server details:** Select **New Server** > Enter a valid URL or Domain (provided by your customer administrator).

  Example: Enter the full URL `pil783454741.pilotfcd.online` directly, **or** enter the domain `pilotfcd.online` first, then enter authentication code `pil783454741`.

[![Adding a new server in FCDClient](/img/migrated/image-1767860539108-fc0555bc.png)](/img/migrated/image-1767860539108-fc0555bc.png)

### 4. Enter your username and password

Enter the username and password for the server you want to sign in to.

[![Username and password entry screen](/img/migrated/image-1767955827414-9e7265a7.png)](/img/migrated/image-1767955827414-9e7265a7.png)

:::note
**If a two-factor authentication QR code is displayed:**

1. Download and install the **Microsoft Authenticator** app on your phone from the App Store or Google Play.

[![Two-factor authentication QR code screen](/img/migrated/image-1767955899835-0408f00d.png)](/img/migrated/image-1767955899835-0408f00d.png)

2. Open the Authenticator app and scan the QR code.

[![Scanning the QR code with Microsoft Authenticator](/img/migrated/image-1767955938951-3aac0b75.png)](/img/migrated/image-1767955938951-3aac0b75.png)

3. The app syncs and displays an OTP. Enter the OTP and click **Submit**. Authentication (Server) login is successful.
:::

### 5. Access your virtual desktop

On the virtual desktop list screen, select the virtual desktop you want to access.

[![Virtual desktop list in FCDClient](/img/migrated/image-1767860779789-05426af5.png)](/img/migrated/image-1767860779789-05426af5.png)

Enter your virtual desktop login credentials if prompted. Virtual desktop access is successful.

---

## Additional features in the new FCDClient

- **Auto-connect Server:** Connects directly to the Authenticator when you open FCDClient (applies only when launching the app directly; not supported when using **Access through FCDClient** on the homepage)
- **Settings:** View installed FCDClient information
- **New Server:** Add a new Authenticator Server

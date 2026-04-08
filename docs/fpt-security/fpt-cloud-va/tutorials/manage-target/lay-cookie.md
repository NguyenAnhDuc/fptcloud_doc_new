---
id: "lay-cookie"
title: "Get website cookies for scan configuration"
description: "Guide to retrieving website cookies to use when configuring an authenticated scan target."
sidebar_label: "Get website cookies"
sidebar_position: 8
---

# Get website cookies for scan configuration

Use this guide to retrieve authentication cookies from a website and add them to your scan target configuration.

1. Open your browser and navigate to the target URL.
2. Right-click and select **Inspect**.
3. Press **F5** to reload the page.
4. Retrieve the cookie value using one of the following methods:

**Method 1 — Quick method:**
- In the Inspect panel, go to **Network**, click a URL, then select **Headers** > **Request Headers** > **cookie**.
- Double-click the cookie value and copy it.
- In the target configuration, click **Add cookie** and paste the copied value.

**Method 2 — Detailed method** (for selecting only authentication-related cookies):
- In the Inspect panel, go to **Network**, click a URL, then select the **Cookies** tab.
- Identify and copy only the cookies related to authentication.
- In the target configuration, click **Add cookie** and paste the value. Cookie format: `name=value`. For multiple cookies: `name1=value1; name2=value2`.

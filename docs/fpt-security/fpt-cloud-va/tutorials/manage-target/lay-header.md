---
id: "lay-header"
title: "Get website headers for scan configuration"
description: "Guide to retrieving website headers to use when configuring an authenticated scan target."
sidebar_label: "Get website headers"
sidebar_position: 7
---

# Get website headers for scan configuration

Use this guide to retrieve the authentication headers from a website and add them to your scan target configuration.

1. Open your browser and navigate to the target URL.
2. Right-click and select **Inspect**.
3. Press **F5** to reload the page.
4. In the Inspect panel, go to **Network**, click a URL request, then select **Headers** > **Request Headers**.
5. Find the authentication-related headers (common names: `Authorization`, `APIkey`, `X-API-Key`, etc.). The header name is the bold left column; the value is the right column.
6. In the target configuration, click **Add header** and paste the header name and value into the table.

:::tip
A page may load many URLs pointing to different addresses. Use the URL that matches the address shown in the browser address bar, and ensure the status is 200.
:::

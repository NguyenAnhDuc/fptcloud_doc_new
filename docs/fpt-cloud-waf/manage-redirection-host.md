---
id: "manage-redirection-host"
title: "Manage redirection host"
description: "Guide to creating and managing redirection hosts to redirect URLs in WAF Dashboard."
sidebar_label: "Manage redirection host"
sidebar_position: 13
---

# Manage redirection host

A **redirection host** forwards a URL to another website or URL and displays the content of the destination address.

## Create a redirection host

1. Select **Hosts** > **Redirection** from the menu to open the management screen, then click **Create Redirection**.

   [![Create redirection host — step 1](/img/migrated/Userguide-FPT-WAF-2022-26-1024x515-a7c1ce4f.png)](/img/migrated/Userguide-FPT-WAF-2022-26-1024x515-a7c1ce4f.png)

2. Enter the redirection host details:

   - **Domain Names**: Domain or website to add. Must not duplicate the domain name of any existing proxy host.
   - **Forward Scheme**: Protocol for the domain/website (auto/http/https).
   - **Forward Domain**: Target domain or website to redirect to.
   - **HTTP Code**: Redirect type option.

   Optional features:
   - **Preserve Path**
   - **Block Common Exploits**
   - **SSL Certificate**: Select the corresponding SSL certificate.

   [![Enter redirection host details](/img/migrated/Userguide-FPT-WAF-2022-27-1024x515-98ae9d17.png)](/img/migrated/Userguide-FPT-WAF-2022-27-1024x515-98ae9d17.png)

3. Click **Save** to save.

   [![Redirection host detail after creation](/img/migrated/Userguide-FPT-WAF-2022-28-1024x517-460fec80.png)](/img/migrated/Userguide-FPT-WAF-2022-28-1024x517-460fec80.png)

## Other operations

| Operation | Description |
|---|---|
| **Toggle** | Enable/disable the redirection host (active/inactive) |
| **Edit** | Edit redirection host details |
| **View** | View redirection host details |
| **Delete** | Delete the redirection host |

---
id: "create-proxy-host"
title: "Create a proxy host"
description: "Guide to creating a new proxy host in WAF Dashboard to forward traffic through WAF."
sidebar_label: "Create a proxy host"
sidebar_position: 12
---

# Create a proxy host

1. In the **WAF Dashboard**, select **Hosts** > **Proxy**, then click **Create Proxy**.

   [![Proxy host screen — create new](/img/migrated/Userguide-FPT-WAF-2022-5-1024x538-0fdd5518.png)](/img/migrated/Userguide-FPT-WAF-2022-5-1024x538-0fdd5518.png)

2. Enter the required information:

   - **Source:**
     - **Hostname**: Enter the domain name.
     - **Port**: Default is 80; select port 443 if using an SSL certificate.
   - **Destination:**
     - **Forward Scheme**: Choose http or https.
     - **Forward Hostname/IP**: Enter the public IP or domain of the web server. If the WAF and web server share the same subnet, you can use the private IP.
     - **Forward Port**: Enter the port used by the web server.

   :::note
   Forward Port must be a port already open for connections on the web server.
   :::

   Optional features:
   - **Cache Assets**
   - **Block Common Exploits**
   - **Websockets Support**

   Additional fields:
   - **Rule Set**: FPT Cloud WAF's default rule set is applied. You can select a custom rule set if one has been created.
   - **Access List**: Select an existing access list to apply to this proxy host.
   - **SSL Certificate**: Select the SSL certificate for the domain/website. If none exists, select **None**.

   [![Enter proxy host details](/img/migrated/Userguide-FPT-WAF-2022-6-1024x538-144ab6ab.png)](/img/migrated/Userguide-FPT-WAF-2022-6-1024x538-144ab6ab.png)

3. Click **Create Proxy** to create, or **Create & Add Another** to create and add another proxy host.

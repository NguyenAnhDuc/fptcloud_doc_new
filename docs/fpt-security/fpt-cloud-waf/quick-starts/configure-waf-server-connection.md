---
id: "configure-waf-server-connection"
title: "Configure WAF server connection"
description: "Guide to connecting a WAF server to a web server, adding a proxy host, and setting up an SSL certificate."
sidebar_label: "Configure WAF server connection"
sidebar_position: 3
---

# Configure WAF server connection

## Connect the WAF server to the web server

- If the web server is in the same VPC as the WAF server on FPT Cloud, ensure the web server belongs to the WAF server's subnet.
- If the web server is outside the FPT Cloud VPC, the WAF server must connect to the web server via its public IP address.

## Add a proxy host to forward requests

1. In **WAF Dashboard**, select **Hosts** > **Proxy**, then click **Create Proxy**.

   [![Proxy host screen — create new](/img/migrated/Userguide-FPT-WAF-2022-5-1024x538-0fdd5518.png)](/img/migrated/Userguide-FPT-WAF-2022-5-1024x538-0fdd5518.png)

2. Enter the configuration details:

   [![Enter proxy host details](/img/migrated/Userguide-FPT-WAF-2022-6-1024x538-144ab6ab.png)](/img/migrated/Userguide-FPT-WAF-2022-6-1024x538-144ab6ab.png)

   - **Source:**
     - **Hostname**: Enter the domain name.
     - **Port**: Default is 80; if you have an SSL certificate, use port 443.
   - **Destination:**
     - **Forward Scheme**: Choose http or https.
     - **Forward Hostname/IP**: Enter the public IP or domain of the web server. If the WAF and web server share the same subnet, you can use a private IP.
     - **Forward Port**: Enter the port used by the web server.

   :::note
   Forward Port must be an open connection port on the web server.
   :::

   - **Security**: Select the default rule (**CyWAF Rule**) to apply FPT Cloud WAF's optimized rule set.

## Add an SSL certificate

1. In **WAF Dashboard**, select **SSL Certificates**, then click **Create SSL Certificates**.

   [![Create SSL certificate — step 1](/img/migrated/Userguide-FPT-WAF-2022-7-1024x538-743bb54d.png)](/img/migrated/Userguide-FPT-WAF-2022-7-1024x538-743bb54d.png)

2. Enter the details as described in [Manage SSL certificates](/docs/fpt-security/fpt-cloud-waf/tutorials/manage-ssl-certificate).

   [![Enter SSL certificate details](/img/migrated/Userguide-FPT-WAF-2022-8-1024x538-dac448e9.png)](/img/migrated/Userguide-FPT-WAF-2022-8-1024x538-dac448e9.png)

## Monitor the Dashboard Overview

After successfully connecting your domain or website to the WAF server, return to the **Overview** page to monitor WAF server status.

[![Dashboard Overview](/img/migrated/Userguide-FPT-WAF-2022-9-1024x538-d28bf827.png)](/img/migrated/Userguide-FPT-WAF-2022-9-1024x538-d28bf827.png)

---
id: "enable-hsts"
title: "Enable HSTS on an HTTPS Listener"
description: "How to enable HTTP Strict Transport Security (HSTS) on a Load Balancer HTTPS Listener in FPT Cloud."
sidebar_label: "Enable HSTS"
sidebar_position: 10
---

# Enable HSTS on an HTTPS Listener

**HSTS (HTTP Strict Transport Security)** is a security policy that prevents man-in-the-middle attacks by requiring browsers to always use a secure connection (HTTPS) when communicating with the server.

Enabling **HSTS** on an FPT Load Balancer HTTPS Listener forces browsers to communicate only over HTTPS.

For Listener creation instructions, see [Create a Listener](./create-listener.md).

:::note
To use this feature, select **TERMINATED_HTTPS** as the protocol and attach an SSL certificate to the Listener. If you do not have an SSL certificate, see [Import SSL certificate](./import-ssl-certificate.md).
:::

When creating or updating the Listener, enable **HSTS** and configure the following:

- **HSTS max age**: An integer (maximum 256 characters, no negative values). Default: 31,536,000 seconds. This defines how long the browser enforces the HSTS policy and remembers that the site must only be accessed over HTTPS.
- **Include Subdomain**: Apply the HSTS policy to all subdomains, or to this domain only.
- **Preload**: Whether the domain is included in the browser's preload list.

Click **Create Listener** to create, or **Cancel** to discard.

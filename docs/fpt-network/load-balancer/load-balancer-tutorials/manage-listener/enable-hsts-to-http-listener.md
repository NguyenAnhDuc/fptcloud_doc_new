---
id: "enable-hsts-to-http-listener"
title: "Enable HSTS on HTTPS Listener"
description: "How to enable HTTP Strict Transport Security (HSTS) on an HTTPS Listener in FPT Load Balancer."
sidebar_label: "Enable HSTS on HTTPS Listener"
sidebar_position: "17"
---

# Enable HSTS on HTTPS Listener

**HSTS (HTTP Strict Transport Security)** is a security policy that prevents man-in-the-middle attacks by requiring browsers to always use a secure connection (HTTPS) when communicating with the server.

The **Enable HSTS** feature of **FPT Load Balancer** strengthens application security by requiring browsers to communicate only via HTTPS.

Enable **HSTS** and configure the following:

- **HSTS max age**: Enter an integer, maximum 256 characters, no negative values. Default: 31,536,000. This is the duration (in seconds) for which the browser enforces the HSTS policy — how long the browser remembers that a site must only be accessed via HTTPS.
- **Include Subdomain**: Whether the HSTS policy applies to all subdomains or only to this domain.
- **Preload**: Whether the domain is included in the browser's preload list.

Click **Create Listener** to create, or **Cancel** to discard.

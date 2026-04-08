---
id: "redirect-http-to-https"
title: "Redirect HTTP requests to HTTPS"
description: "How to configure automatic HTTP to HTTPS redirection on FPT Cloud Load Balancer using L7 policy."
sidebar_label: "Redirect HTTP to HTTPS"
sidebar_position: 7
---

# Redirect HTTP requests to HTTPS

To protect data integrity, you can redirect all HTTP traffic to HTTPS.

**Step 1:** Create a new **Listener** using protocol **HTTP on port 80**, then enable the **Redirect HTTP to HTTPS** feature in the **L7 Policy** tab for this Listener. See [Create a Listener](/docs/en/fpt-network/load-balancer/load-balancer-tutorials/manage-listener/create-listener) for details.

:::note
The new HTTP Listener on port 80 does not need a Server Pool attached, because all HTTP requests are redirected to HTTPS.
:::

**Step 2:** Create a new **Listener** using **HTTPS on port 443** to handle HTTPS requests. Attach the corresponding **Server Pool** and **SSL Certificate** to this Listener. See [Create a Listener](/docs/en/fpt-network/load-balancer/load-balancer-tutorials/manage-listener/create-listener) for Listener setup and [Import SSL certificate](/docs/en/fpt-network/load-balancer/load-balancer-tutorials/manage-ssl-certificate/import-ssl-certificate) if you need to add a certificate.

Verify that HTTP traffic now automatically redirects to HTTPS.

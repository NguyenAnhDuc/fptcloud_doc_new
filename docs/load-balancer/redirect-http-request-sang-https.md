---
id: "redirect-http-request-sang-https"
title: "Configure HTTP to HTTPS redirect"
sidebar_label: "Configure HTTP to HTTPS redirect"
sidebar_position: 15
description: "Guide to redirecting all HTTP traffic to HTTPS on the Load Balancer to protect data integrity."
---

# Configure HTTP to HTTPS redirect

To protect data integrity, you can configure the Load Balancer to redirect all **HTTP** traffic to **HTTPS**. Follow the steps below.

> **Note:** A newly created **HTTP Listener on port 80** does not require an attached Server Pool, because all **HTTP** requests are already redirected to **HTTPS**.

Verify that **HTTP** access is automatically redirected to **HTTPS**.

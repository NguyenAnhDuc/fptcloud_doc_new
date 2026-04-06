---
id: "redirect-http-request-sang-https"
title: "Redirect HTTP Requests to HTTPS"
sidebar_label: "Redirect HTTP Requests to HTTPS"
sidebar_position: 15
---

Configure HTTP Request Redirect to HTTPS


To protect data and ensure integrity, users can choose to redirect all **HTTP traffic to HTTPS** by following the instructions below:

**Step 1:** Create a new **Listener** using the **HTTP, port 80** protocol, then enable the **Redirect HTTP to HTTPS** feature on the **L7 policy** configuration screen for this Listener. Refer to the guide for creating a **Listener** **[here.](<https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-listener> "here.")**

> **Note:** The newly created **HTTP, port 80 Listener** does not need to have a corresponding Server pool attached, since all **HTTP requests** will be redirected to **HTTPS**.

**Step 2:** Create a new **Listener** using **HTTPS, port 443** to handle HTTPS requests. Attach the corresponding **Server pool** and **SSL Certificate** to the Listener. Refer to the guide for creating a **Listener** **[here.](<https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-listener> "here.")** If you do not yet have an **SSL Certificate**, refer to the guide to create one **[here.](<https://fptcloud.com/documents/load-balancer/?doc=import-ssl-certificate-cho-load-balancer> "here.")**

Verify that **HTTP** access is automatically redirected to **HTTPS**.

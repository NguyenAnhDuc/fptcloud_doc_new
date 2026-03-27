---
id: "redirect-http-to-https"
title: "Redirect Http To Https"
description: "To ensure **data protection and integrity** , users can choose to **redirect all HTTP traffic to HTTPS** by following th"
sidebar_label: "Redirect Http To Https"
sidebar_position: 15
---

# Redirect Http To Https

To ensure **data protection and integrity** , users can choose to **redirect all HTTP traffic to HTTPS** by following these steps:
* * *
**Step 1:** Create a new **Listener** using the **HTTP protocol on port 80** , then enable the **Redirect HTTP to HTTPS** feature in the **L7 policy configuration** screen of this **Listener**. Users can refer to the instructions on how to create a **Listener** **[here.](https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-listener "here.")**
> **Note:** The newly created **HTTP Listener on port 80** does not need to be attached to a corresponding Server Pool, since all **HTTP requests will be redirected to HTTPS** automatically.
* * *
**Step 2:** Create a new **Listener** using the **HTTPS protocol on port 443** to handle HTTPS requests. Attach the appropriate **Server Pool** and **SSL Certificate** to the **Listener**. Users can refer to the instructions on how to create a **Listener** **[here.](https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-listener "here.")**  
If there is no existing **SSL Certificate** , users can refer to the certificate import instructions **[here.](https://fptcloud.com/documents/load-balancer/?doc=import-ssl-certificate-cho-load-balancer "here.")**
* * *
Finally, verify that **HTTP access is automatically redirected to HTTPS.**
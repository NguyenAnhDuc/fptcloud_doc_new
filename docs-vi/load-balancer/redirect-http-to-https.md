---
id: "redirect-http-to-https"
title: "HTTP リクエストの HTTPS へのリダイレクト"
description: "FPT Cloud ロードバランサーで L7 ポリシーを使用して HTTP から HTTPS への自動リダイレクトを設定する方法を説明します。"
sidebar_label: "HTTP から HTTPS へのリダイレクト"
sidebar_position: "13"
---

# Redirect HTTP requests to HTTPS

To protect data integrity, you can redirect all HTTP traffic to HTTPS.

**Step 1:** Create a new **Listener** using protocol **HTTP on port 80**, then enable the **Redirect HTTP to HTTPS** feature in the **L7 Policy** tab for this Listener. See [Create a Listener](./create-listener.md) for details.

:::note
The new HTTP Listener on port 80 does not need a Server Pool attached, because all HTTP requests are redirected to HTTPS.
:::

**Step 2:** Create a new **Listener** using **HTTPS on port 443** to handle HTTPS requests. Attach the corresponding **Server Pool** and **SSL Certificate** to this Listener. See [Create a Listener](./create-listener.md) for Listener setup and [Import SSL certificate](./import-ssl-certificate.md) if you need to add a certificate.

Verify that HTTP traffic now automatically redirects to HTTPS.

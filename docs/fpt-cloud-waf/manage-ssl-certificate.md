---
id: "manage-ssl-certificate"
title: "Manage SSL certificate"
description: "Guide to creating and managing SSL certificates in WAF Dashboard using Let's Encrypt or Custom mode."
sidebar_label: "Manage SSL certificate"
sidebar_position: 17
---

# Manage SSL certificate

An SSL certificate (TLS certificate) is an encryption key that allows your website traffic to be encrypted for end users.

## Create an SSL certificate

1. Select **SSL Certificates** from the menu to open the management screen.

   [![SSL certificate management screen](/img/migrated/Userguide-FPT-WAF-2022-38-1024x578-810c62cf.png)](/img/migrated/Userguide-FPT-WAF-2022-38-1024x578-810c62cf.png)

2. Click **Create SSL Certificates** to open the creation screen. Two modes are available:

   **Mode 1: Let's Encrypt** — A free, open, and automatic certificate authority available on FPT Cloud WAF.

   - **Domain Name**: Domain or website to configure SSL for.
   - **Email Address for Let's Encrypt**: Email for Let's Encrypt.
   - **Use a DNS Challenge** (optional): Enable if needed.
   - **I Agree to the Let's Encrypt Terms of Service**: Check to agree to the terms.

   [![Configure Let's Encrypt](/img/migrated/Userguide-FPT-WAF-2022-39-1024x578-92f29cbe.png)](/img/migrated/Userguide-FPT-WAF-2022-39-1024x578-92f29cbe.png)

   **Mode 2: Custom** — Configure a certificate from a third-party provider. The administrator is responsible for managing this certificate.

   - **Certificate Key**: Upload the certificate key file.
   - **Certificate**: Upload the certificate file.
   - **Intermediate Certificate**: Upload the intermediate certificate file.

   [![Configure Custom certificate](/img/migrated/Userguide-FPT-WAF-2022-40-1024x578-650e0090.png)](/img/migrated/Userguide-FPT-WAF-2022-40-1024x578-650e0090.png)

3. Click **Create SSL Certificate** to save and complete.

   [![SSL certificate list after creation](/img/migrated/Userguide-FPT-WAF-2022-41-1024x578-f0ea5431.png)](/img/migrated/Userguide-FPT-WAF-2022-41-1024x578-f0ea5431.png)

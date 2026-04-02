---
id: "tao-security-profile"
title: "Create security profiles"
description: "Guide to creating AntiVirus, Web Filter, Application Control, IPS, and WAF security profiles on Fortigate NGFW."
sidebar_label: "Create security profiles"
sidebar_position: 7
---

# Create security profiles

## AntiVirus

1. Go to **Security Profiles > AntiVirus**.

   ![AntiVirus profile list](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-13-102-881981db.png)

2. Create a new profile or use an existing Fortigate default profile.

   ![Create AntiVirus profile](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-14-102-d5b64418.png)

   Select the **Inspected Protocols**, **Features**, and **Action** options as needed.

## Web filter

1. Go to **Security Profiles > Web Filter**.

   ![Web Filter profile list](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-15-102-5d2b8463.png)

2. Create a new profile or use an existing Fortigate default profile.

   ![Create Web Filter profile](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-16-102-7d7928a3.png)

3. Enable **URL Filter > Create New** to define rules:

   - To allow access only to a specific website (e.g., fptsmartcloud.com), create an allow rule for that URL.

     ![Allow specific URL](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-17-102-064d7203.png)

   - To block all other access, use a Regex pattern `[^.]` to block remaining sites.

   ![Block all other URLs](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-18-102-0730e9d9.png)

   ![URL filter result](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-19-17350cd9.png)

## Application control

1. Go to **Security Profiles > Application Control**.

   ![Application Control profile list](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-20-102-4e4f0eba.png)

2. Create a new profile or use an existing Fortigate default profile to block access to social media platforms.

   ![Create Application Control profile](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-21-102-f6520a67.png)

   ![Configure Application Control](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-22-102-568d50f4.png)

3. Use existing signatures or create a new one via **Create New > Custom Application Signature**.

   ![Custom Application Signature](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-23-102-8c16436a.png)

## Intrusion prevention (IPS)

1. Go to **Security Profiles > Intrusion Prevention**.

   ![IPS profile list](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-24-102-a9517010.png)

2. Create a new profile or use an existing Fortigate default profile to block access to C&C servers (Botnet).

   ![Create IPS profile](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-25-102-d20e176d.png)

   ![Configure IPS profile](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-26-102-c379afe0.png)

3. Use existing IPS signatures or create a new one via **IPS Signature and Filter > Create New**.

   ![Create IPS Signature](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-27-102-ccc83cc5.png)

## Web Application Firewall (WAF)

1. Go to **Security Profiles > Web Application Firewall**.

   ![WAF profile list](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-28-102-3da9bc27.png)

2. Create a new profile or use an existing Fortigate default profile to block web server attacks (SQL Injection, Cross Site Scripting).

   ![Create WAF profile](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-29-102-2ec3dddd.png)

3. Enable the relevant signatures via **Edit > SQL Injection** (Extended) and **Cross Site** (Extended).

   ![Enable WAF signatures](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-30-102-dd9edd12.png)

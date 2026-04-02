---
id: "tutorials-create-a-new-waf-server"
title: "Create a new WAF server"
description: "Step-by-step tutorial for creating a WAF server on FPT Cloud Portal."
sidebar_label: "Create a new WAF server"
sidebar_position: 6
---

# Create a new WAF server

1. From the menu, select **Security > Cloud WAF**, then click **Create WAF**.

   [![Create WAF — step 1](/img/migrated/Userguide-FPT-WAF-2022-1-1024x538-66a0aec1.png)](/img/migrated/Userguide-FPT-WAF-2022-1-1024x538-66a0aec1.png)

2. Enter the WAF information and select the appropriate size.

   [![Enter WAF details](/img/migrated/Userguide-FPT-WAF-2022-2-1024x538-6f8b611d.png)](/img/migrated/Userguide-FPT-WAF-2022-2-1024x538-6f8b611d.png)

   | Field | Description | Value |
   |---|---|---|
   | **Name** | WAF server name | Letters, numbers, and spaces only |
   | **Description** | Detailed description of the WAF | |
   | **Default configured rules** | Pre-configured rule set applied at creation | |
   | **Size** | WAF server size based on your needs | Small, Medium, or Large |

   Specific configurations for each size:

   | Size | Basic configuration | Network bandwidth | Requests per second |
   |---|---|---|---|
   | **Small** | 1 vCPU – 2 GB RAM – 50 GB | 100 Mbps | 50 |
   | **Medium** | 2 vCPU – 4 GB RAM – 150 GB | 200 Mbps | 150 |
   | **Large** | 8 vCPU – 8 GB RAM – 300 GB | 500 Mbps | 500 |

3. Click **Create WAF** to create the WAF server. Processing progress is updated in the **Status** field on the **Cloud Web Application Firewall Management** screen.

   [![WAF creation status](/img/migrated/Userguide-FPT-WAF-2022-10-1024x538-aa8602dd.png)](/img/migrated/Userguide-FPT-WAF-2022-10-1024x538-aa8602dd.png)

:::note
After the WAF server is created successfully, you will receive an email containing the username and password to log in to the WAF Dashboard. Check your inbox to retrieve this information.
:::

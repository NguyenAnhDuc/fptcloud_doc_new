---
id: "them-moi-may-chu-waf"
title: "Create a new WAF server"
sidebar_label: "Create a new WAF server"
---

Create a new WAF server

**Step 1:** In the menu, select **Security > Cloud WAF**, then select **Create WAF.**

![Userguide FPT WAF 2022 1](images/them-moi-may-chu-waf/img-001.png)

**Step 2:** Enter the **WAF** information and select the appropriate size.

![Userguide FPT WAF 2022 2](images/them-moi-may-chu-waf/img-002.png)

**Field** | **Description** | **Value**
---|---|---
**Name** | Enter the WAF server name | Accepts letters, numbers, and spaces only
**Description** | Enter a detailed description of the WAF |
**Default configured rules** | List of default rule sets available on the WAF server upon creation |
**Size** | Select the WAF server size based on your requirements | 3 WAF sizes with different configurations: Small, Medium, Large

You can refer to the specific configuration for each size in the table below:

|  |  |
---|---|---|---
**Size** | **Basic configuration** | **Network bandwidth** | **Requests/second supported**
**Small** | 2vCPU – 4GB RAM – 150GB storage | 100 Mbps | 50
**Medium** | 4vCPU – 8GB RAM – 300GB storage | 200 Mbps | 150
**Large** | 8vCPU – 16GB RAM – 500GB storage | 500 Mbps | 500

**Step 3:** Select **Create WAF** to create the WAF server with the selected information and configuration. The processing progress will be updated in the Status field on the **Cloud Web Application Firewall Management** screen.

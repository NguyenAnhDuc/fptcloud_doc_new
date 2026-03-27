---
id: "manage-access-list"
title: "Manage Access List"
description: "**Access Lists** provide Whitelist/Blacklist functionality for specific workstation IP addresses along with HTTP Basic A"
sidebar_label: "Manage Access List"
sidebar_position: 16
---

# Manage Access List

**Access Lists** provide Whitelist/Blacklist functionality for specific workstation IP addresses along with HTTP Basic Authentication for Proxy Hosts.
Administrators can configure multiple rules, assign user/password for an access list, and then apply it to Proxy Hosts. This is useful for forwarded web services without built-in authentication mechanisms or when administrators want to protect against access from unidentified workstations.
To configure/add a new Access List, follow these steps:
**Step 1:** Select **Accest List** in the menu to open the Access List management screen.
[![Userguide FPT WAF 2022 34](/img/migrated/Userguide-FPT-WAF-2022-34-1024x499-a6882854.png)](/img/migrated/Userguide-FPT-WAF-2022-34-1024x499-a6882854.png)
**Step 2:** Choose **Create Access List** to open the screen for adding a new Access List and enter the information as follows:
  * **Name:**
  * **Satisfy Any**
  * **Pass Auth to Host**

**Step 3:** Click**Create Access List** to add the newly entered list and open the detailed view screen.
### Advanced Configuration for Access List:
**Step 1** : Click **Create Basic Auth** to configure new HTTP Nginx basic authentication.
**Username** : Enter the authentication username. **Password** : Enter the authentication password. Choose **Create Basic Auth** or **Create & Add Another** to add another authentication if needed.
**[![Userguide FPT WAF 2022 35](/img/migrated/Userguide-FPT-WAF-2022-35-1024x517-4d36978c.png)](/img/migrated/Userguide-FPT-WAF-2022-35-1024x517-4d36978c.png)**
**Step 2.** Choose **Create Whitelist/Blacklist** to add new IP addresses or subnets to allow/deny access.
  * **Check the box to allow or deny for the corresponding IP or subnet.**
    * **Allow:** Allows access for the specified IP or subnet.
    * **Deny:** Denies access for the specified IP or subnet.
  * **IP / Subnet: Enter the IP address or subnet.**

Click **Create Whitelist/Blacklist** to add the configured IP addresses for allow/deny.
Note: Allow/deny configurations will be applied in the order they are defined.
[![Userguide FPT WAF 2022 36](/img/migrated/Userguide-FPT-WAF-2022-36-1024x519-0778cdff.png)](/img/migrated/Userguide-FPT-WAF-2022-36-1024x519-0778cdff.png)
**Step 3.** Click **Create Proxy** to add a new proxy host applied to the Access List just created. Refer to the method of adding a new Proxy Host on the Proxy Host Management page.
[![Userguide FPT WAF 2022 37](/img/migrated/Userguide-FPT-WAF-2022-37-1024x516-993c3cc6.png)](/img/migrated/Userguide-FPT-WAF-2022-37-1024x516-993c3cc6.png)
**Other functions:**
**Edit:** Edit Access List information.
**View:** View detailed information about the Access List.
**Delete:** Remove the Access List.
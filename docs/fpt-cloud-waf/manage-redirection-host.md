---
id: "manage-redirection-host"
title: "Manage Redirection Host"
description: "**Redirection Hosts** is a feature that redirects a website or changes a URL to another website URL, displaying the cont"
sidebar_label: "Manage Redirection Host"
sidebar_position: 13
---

# Manage Redirection Host

**Redirection Hosts** is a feature that redirects a website or changes a URL to another website URL, displaying the content of the redirected address.
To configure/add a new **Redirection Host** follow these steps:
**Step 1:** Select **Hosts** > **Redirection** from the menu to open the **Redirection Host** management screen. Choose **Create Redirection**.
[![Userguide FPT WAF 2022 26](/img/migrated/Userguide-FPT-WAF-2022-26-1024x515-a7c1ce4f.png)](/img/migrated/Userguide-FPT-WAF-2022-26-1024x515-a7c1ce4f.png)
**Step 2:** Enter the **Redirection Host** information as follows:
  * **Domain Names:** Enter the domain/website name to be added. The domain name in the Redirection Host must not match the domain name of any created Proxy Host.
  * **Forward Scheme:** Choose the method for the domain/website (auto/http/https).
  * **Forward Domain:** Enter the domain/website to be redirected.
  * **HTTP Code:** Choose the redirection options for the website.

Some additional features, depending on user needs:
  * **Preserve Path**.
  * **Block Common Exploits**.
  * **SSL Certificate** : [![Userguide FPT WAF 2022 27](/img/migrated/Userguide-FPT-WAF-2022-27-1024x515-98ae9d17.png)](/img/migrated/Userguide-FPT-WAF-2022-27-1024x515-98ae9d17.png)

**Step 3:** Select **Save** to save. The detailed view of the Redirection Host appears as follows:
[![Userguide FPT WAF 2022 28](/img/migrated/Userguide-FPT-WAF-2022-28-1024x517-460fec80.png)](/img/migrated/Userguide-FPT-WAF-2022-28-1024x517-460fec80.png)
**Other functions:**
**Toggle** : Disable/enable the Redirection Host, corresponding to active/inactive status.
**Edit** : Edit Redirection Host information.
**View** : View detailed information about the Redirection Host.
**Delete** : Remove the Redirection Host.
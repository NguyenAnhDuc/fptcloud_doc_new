---
id: "manage-proxy-host"
title: "Manage Proxy Host"
description: "**Step 1:** In the **WAF Dashboard** , select **Hosts** > **Proxy**. Choose**Create Proxy.**"
sidebar_label: "Manage Proxy Host"
sidebar_position: 12
---

# Manage Proxy Host

**Step 1:** In the **WAF Dashboard** , select **Hosts** > **Proxy**. Choose**Create Proxy.**
[![Userguide FPT WAF 2022 5](/img/migrated/Userguide-FPT-WAF-2022-5-1024x538-0fdd5518.png)](/img/migrated/Userguide-FPT-WAF-2022-5-1024x538-0fdd5518.png)
**Step 2:** Enter the information as instructed.
[![Userguide FPT WAF 2022 6](/img/migrated/Userguide-FPT-WAF-2022-6-1024x538-144ab6ab.png)](/img/migrated/Userguide-FPT-WAF-2022-6-1024x538-144ab6ab.png)
  * Enter **Source** information:
  *     * **Hostname** : Enter the domain name
    * **Port** : Default is 80; if there is an SSL Certificate, you can choose port 443.
  * Enter **Destination** information:
  *     * **Forward Scheme** : Choose http/https
    * **Forward Hostname/IP** : Enter the **Public IP** or **Domain** of the Web Server. If WAF server and Web Server are in the same subnet, you can use the **IP Private.**
    * **Forward Port:** : Enter the port used by the Web Server.
**Note:** Forward Port is the port opened for connection on the Web Server.

Select additional features based on user needs, such as:
  * **Cache Assets:**
  * **Block Common Exploits**
  * **Websockets Support**

Additionally, select the following information:
  * **Rule Set:** By default, FPT Cloud WAF's rules set will be applied. Users can add custom rule sets on the "Add New Rule File" screen and select from there.
  * **Access List:** Add a new access list on the Access List screen to select and apply it to the proxy host.
  * **SSL Certificate:** Choose the corresponding SSL Certificate for the domain/website. The SSL Certificate needs to be created before selection; if not available, choose None. [![Userguide FPT WAF 2022 6](/img/migrated/Userguide-FPT-WAF-2022-6-1024x538-144ab6ab.png)](/img/migrated/Userguide-FPT-WAF-2022-6-1024x538-144ab6ab.png)

**Step 3:** Select **Create Proxy** to create the Proxy host

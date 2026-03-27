---
id: "redirect-prefix"
title: "Redirect Prefix"
description: "**Redirect prefix** allows you to add a string (prefix) to the beginning of the destination URL during redirection. This"
sidebar_label: "Redirect Prefix"
sidebar_position: 16
---

# Redirect Prefix

**Redirect prefix** allows you to add a string (prefix) to the beginning of the destination URL during redirection. This helps you efficiently manage and structure redirected URLs, while enabling user redirection to specific web pages or content.
Users can refer to the **L7 policy configuration for Listener** **[here.](https://fptcloud.com/documents/load-balancer/?doc=chinh-sua-listener "here.")**
* * *
**Step 1:** On the Load Balancer list screen, select a **Load Balancer.**
**Step 2:** On the Load Balancer detail screen, go to the **Listener** tab and select the desired **Listener.**
**Step 3:** Click the **L7 Policy** tab, then choose **Add Policy.**
Fill in the following details:
  * **Policy name:** Name of the policy 
  * **Policy action:** Select **Redirect prefix**
  * **Redirect to:** Enter the prefix URL to which requests should be redirected when matching the condition 
  * **Position:** Priority level of the policy. The smaller the position value, the higher the priority 
  * **Redirect HTTP code:** Valid values include: 301, 302, 303, 307, or 308 

* * *
**Step 4:** Click the checkmark icon to complete the action.
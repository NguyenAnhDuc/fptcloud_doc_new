---
id: "redirect-prefix"
title: "Redirect prefix"
description: "How to configure a redirect prefix L7 policy on FPT Cloud Load Balancer."
sidebar_label: "Redirect prefix"
sidebar_position: 9
---

# Redirect prefix

**Redirect prefix** lets you prepend a string (prefix) to the destination URL when redirecting, helping you manage and structure redirect URLs efficiently and route users to specific pages or content.

For general L7 policy configuration, see [Configure L7 policy for a Listener](/docs/en/fpt-network/load-balancer/load-balancer-tutorials/manage-listener/configure-l7-policy).

**Step 1:** In the Load Balancer list, select the Load Balancer.

**Step 2:** On the Load Balancer detail page, select the **Listener** tab, then click the Listener you want to configure.

**Step 3:** Select the **L7 Policy** tab, then click **Add Policy**.

Enter the following:

- **Policy name**: Name for the policy.
- **Policy action**: Select **Redirect prefix**.
- **Redirect to**: Enter the prefix URL to prepend when the condition is matched.
- **Position**: Priority of the policy. Lower position numbers have higher priority.
- **Redirect HTTP code**: Valid values: 301, 302, 303, 307, or 308.

**Step 4:** Click the **tick icon** to save.

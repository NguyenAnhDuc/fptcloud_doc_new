---
id: "configure-l7-policy"
title: "Configure L7 policy for a Listener"
description: "How to create, update, and manage L7 policies and rules for Load Balancer Listeners on FPT Cloud."
sidebar_label: "Configure L7 policy"
sidebar_position: 5
---

# Configure L7 policy for a Listener

**L7 Policies** control and route traffic to backend servers. An L7 Policy is a set of **L7 Rules** that combine to form a layer-7 routing policy for HTTP/HTTPS requests. Each policy has two components:

- **Condition**: Evaluates incoming requests.
- **Action**: Applied when a request matches the conditions.

## Create an L7 policy

**Step 1:** In the Listener list, click the Listener you want to configure.

**Step 2:** Select the **L7 Policy** tab, then click **Add Policy**.

**Step 3:** Enter the L7 Policy details:

- **Policy name**: Enter a name for the policy.
- **Policy action**:
  - **Reject**: Deny access to the server when the request matches the condition.
  - **Redirect to URL**: Redirect matching requests to a specific URL with an HTTP response code. Valid codes: 301, 302, 303, 307, or 308.
  - **Redirect to pool**: Forward matching requests to a selected Server Pool.
- **Position**: Priority of the policy. Lower position numbers have higher priority.

Click the **tick icon** to save the L7 Rule, or the **delete icon** to remove it.

## Update an L7 policy

In the L7 Policy list, click the **pencil icon** to edit the policy. You can update:

- **Policy name**
- **Policy action** (Reject, Redirect to URL, Redirect to pool)
- **Redirected HTTP code** (for Redirect to URL actions): 301, 302, 303, 307, or 308
- **Position**

Click the **tick icon** to save.

After updating an L7 Policy, add L7 Rules as follows:

**Step 1:** Click the policy to expand it.

**Step 2:** Click **Add L7 rule** and enter:

- **Type**:
  - **Host name**: Matches the HTTP/1.1 hostname.
  - **Path**: Matches part of the HTTP URI.
  - **File**: Matches the last portion of the URI (e.g. `.txt`, `.jpg`).
  - **Header**: Searches for the header defined in the key field and compares it to the value.
  - **Cookie**: Searches for the cookie defined in the key field and compares it to the value.
- **Compare type**:
  - **Regex**: The field matches a regular expression.
  - **Equal to**: The field exactly matches the provided string.
  - **Starts with**: The field starts with the provided string.
  - **Ends with**: The field ends with the provided string.
  - **Contains**: The field contains the provided string.
- **Key**: For **Header** or **Cookie** types — the key to identify which header or cookie to compare.
- **Value**: The value to compare against.
- **Invert**: Yes/No — if Yes, the rule condition is true when the comparison does **not** match.

Click the **tick icon** to save the rule or the **delete icon** to remove it.

To edit an existing L7 Rule, click the **pencil icon** on the rule.

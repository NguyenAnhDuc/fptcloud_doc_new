---
id: "chinh-sua-listener"
title: "Configure L7 Policies for Listener"
description: "How to create, update, and manage L7 policies and rules for a Load Balancer Listener on FPT Cloud."
sidebar_label: "Configure L7 Policies"
sidebar_position: "14"
---

# Configure L7 Policies for Listener

**L7 Policies** control and route traffic to backend servers. L7 Policies are a set of **L7 Rules** combined to form a layer-7 routing policy for HTTP/HTTPS requests. Each policy has two main components:

- **Condition**: Evaluates incoming requests.
- **Action**: Applied when a request matches the condition.

## 1. Create an L7 Policy

**Step 1:** In the Listener list, select the Listener you want to configure.

**Step 2:** Select the **L7 Policy** tab, then click **Add Policy**.

Enter the following information for the new L7 Policy:

- **Policy name**: Enter a name for the policy.
- **Policy action**: Reject, Redirect to URL, or Redirect to pool.
  - **Reject**: Deny access to the server when the request matches the condition.
  - **Redirect to URL**: Redirect matching requests to the specified URL with an HTTP response code. Valid values: 301, 302, 303, 307, or 308.
  - **Redirect to pool**: Forward matching requests to the selected pool.
- **Position**: Policy priority — lower position number means higher priority.

Click the **tick icon** to save the L7 Rule, or the **delete icon** to remove it.

## 2. Update an L7 Policy

In the L7 Policy list, click the **pencil icon** to edit the policy. You can update:

- **Policy name**
- **Policy action** (Reject, Redirect to URL, Redirect to pool)
- **Redirected HTTP code** (for Redirect to URL action): 301, 302, 303, 307, or 308
- **Position**

Click the **tick icon** to save.

After updating the L7 Policy, add L7 Rules as follows:

**Step 1:** Click the policy to expand it.

**Step 2:** Click **Add L7 rule** and enter the following:

- **Type**:
  - **Host name**: Matches against the HTTP/1.1 hostname in the request.
  - **Path**: Matches against part of the HTTP URI.
  - **File**: Matches against the last part of the URI (e.g. `.txt`, `.jpg`).
  - **Header**: Searches for the header defined in the key field and compares its value.
  - **Cookie**: Searches for the cookie defined in the key field and compares its value.
- **Compare type**:
  - **Regex**: Matches a regular expression.
  - **Equal to**: Verifies exact match with the provided string.
  - **Starts with**: Verifies the extracted field starts with the provided string.
  - **Ends with**: Verifies the extracted field ends with the provided string.
  - **Contains**: Verifies the extracted field contains the provided string.
- **Key**: For **Header** or **Cookie** type — the key identifying which header or cookie to compare.
- **Value**: The value to compare against.
- **Invert**: Yes/No — if Yes, the rule condition is true when the comparison does NOT match.

Click the **tick icon** to save the rule, or the **delete icon** to remove it.

To edit an existing L7 Rule, click the **pencil icon** on the rule.

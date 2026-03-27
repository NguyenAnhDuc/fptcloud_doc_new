---
id: "Configure-l7-policy"
title: "Configure L7 Policy"
description: "**L7 Policies** are crucial components that control and route traffic to backend servers. **L7 Policies** consist of mul"
sidebar_label: "Configure L7 Policy"
sidebar_position: 14
---

# Configure L7 Policy

**L7 Policies** are crucial components that control and route traffic to backend servers. **L7 Policies** consist of multiple **L7 Rules** combined together to act as a Layer 7 routing policy for HTTP/HTTPS requests based on specified rules. A **L7 Policy** includes two main components:
  * **Condition** : Criteria to inspect incoming requests.
  * **Action** : When requests match the specified conditions, the corresponding action is executed to route the request accordingly.

* * *
**1. Create L7 Policy**
**Step 1:** On the **Listener** list screen, select the **Listener** you want to configure.
**Step 2:** Select the **L7 Policy** tab, then click **Add Policy**.
Enter the following information for the new **L7 Policy** :
  * **Policy name** : Enter a name for the Policy.
  * **Policy action** : Choose one of the following: Reject, Redirect to URL, Redirect to pool.

**+Reject:** If the request matches the condition, access to the backend is denied.
**+Redirect to URL** : Enter the target URL to redirect requests that match the condition. The matched requests will be redirected to the specified URL or URL prefix with an **HTTP response code**. Valid values: 301, 302, 303, 307, or 308.
**+Redirect to pool:** If the condition is matched, the request is routed to the selected pool. You must select a Pool from the list.
  * **Position** : Defines the priority of the policy. The smaller the position value, the higher the priority.

Click the **tick icon** to create the **L7 Rule** , or the **trash icon** to delete an **L7 Rule**.
* * *
**2. Update L7 Policy**
On the **L7 Policy** list screen, click the **edit icon** to update a **L7 Policy**.
You can update the following information:
  * **Policy name**
  * **Policy action** : Reject, Redirect to URL, Redirect to pool

**+Redirect to URL:** Enter the URL you want to redirect the request to when the condition is met. The matched requests will be redirected with an HTTP response code. Valid values: 301, 302, 303, 307, or 308.
**+Redirect to pool:** When matched, the request is routed to the selected pool.
**+Redirected HTTP code** : Applies when the action is Redirect to URL.
  * **Position**

Click the **tick icon** to save changes to the **L7 Policy**.
After updating the **L7 Policy** , you can add **L7 Rules** as follows:
**Step 1:** Click on the policy to which you want to add rules.
**Step 2:** Click **Add L7 Rule** to add rules to the selected policy.
Fill in the following details:
  * **Type** :

**+Host name:** Compares the value to the HTTP/1.1 hostname in the request.
**+Path:** Compares the value to a part of the HTTP URI.
**+File** : Compares the value to the last part of the URI (e.g., ".txt", ".jpg").
**+Header:** Searches for the defined header key and compares its value to the input value.
**+Cookie:** Searches for the defined cookie key and compares its value to the input value.
  * **Compare type** :

**+Regex:** Matches the value using a regex expression.
**+Equal to:** Checks whether the extracted field exactly matches the given string.
**+Starts with:** Checks whether the field starts with the given string.
**+Ends with:** Checks whether the field ends with the given string.
**+Contains:** Checks whether the field contains the given string.
  * **Key** : For **Header** or **Cookie** types, specify the key to determine which field is used for comparison.
  * **Value** : The value to be compared.
  * **Invert** : Yes/No (For example, if set to 1, the result of this L7 Rule is true when the condition does **not** match).

Click the **tick icon** to create the **L7 Rule** , or the **trash icon** to delete it.
To edit an **L7 Rule** , click the **edit icon** on the existing rule to modify it.
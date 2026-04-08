---
id: "manage-security-rule-set"
title: "Manage security rule set"
description: "Guide to creating and managing custom security rule sets in WAF Dashboard."
sidebar_label: "Manage security rule set"
sidebar_position: 11
pagination_next: null
---

# Manage security rule set

In addition to the default rule set provided by **FPT Cloud WAF**, you can create custom rule sets to suit the specific needs of a protected endpoint.

## Create a security rule set

1. Select **Security Rule Sets** from the menu to open the management screen, then click **Create Security Rule Set**.

   [![Security rule set management screen](/img/migrated/Userguide-FPT-WAF-2022-42-1024x578-3ae15c86.png)](/img/migrated/Userguide-FPT-WAF-2022-42-1024x578-3ae15c86.png)

2. Fill in the required details:

   - **Name**: Name of the new rule set.
   - **Description** (optional): Description.
   - **Replicated From**: Select a rule set to clone and modify.

   [![Enter rule set details](/img/migrated/Userguide-FPT-WAF-2022-43-1024x578-ee9a0838.png)](/img/migrated/Userguide-FPT-WAF-2022-43-1024x578-ee9a0838.png)

3. Click **Create Security Rule Set** to save.

   [![Security rule set detail after creation](/img/migrated/Userguide-FPT-WAF-2022-44-1024x578-9ec97a49.png)](/img/migrated/Userguide-FPT-WAF-2022-44-1024x578-9ec97a49.png)

## Create custom rules in a rule set

After creating a rule set, you can add custom rules as needed.

1. In the **Rule Sets Detail** screen, click **Create Rule**.

   [![Add new rule](/img/migrated/Userguide-FPT-WAF-2022-45-1024x578-d2293080.png)](/img/migrated/Userguide-FPT-WAF-2022-45-1024x578-d2293080.png)

2. Enter the rule details:

   - **File**: Rule name.
   - **Rule ID**: Rule ID (range: 5,000,000 to 5,999,999).
   - **Status**: Operational status (Enabled/Disabled).
   - **Content**: Rule content.
   - **Description**: Description for the rule.

   [![Enter rule details](/img/migrated/Userguide-FPT-WAF-2022-46-1024x578-74173036.png)](/img/migrated/Userguide-FPT-WAF-2022-46-1024x578-74173036.png)

3. Click **Create Rule** to create the new rule.

   [![Rule list after creation](/img/migrated/Userguide-FPT-WAF-2022-47-1024x578-af74e7d2.png)](/img/migrated/Userguide-FPT-WAF-2022-47-1024x578-af74e7d2.png)

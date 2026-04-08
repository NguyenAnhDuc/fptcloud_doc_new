---
id: "apply-policy"
title: "Apply policy"
description: "Guide to applying Policy Management on FPT Cloud, with a scenario blocking SSH rule creation from all IPv4 sources."
sidebar_label: "Apply policy"
sidebar_position: 2
---

# Apply policy

**Scenario:** Block users from creating an SSH rule with source IP set to All IPv4 (Any).

**Step 1:** In the menu, select **Security Group**, then select **Create security group**.

[![file](/img/migrated/image-1719821228097-9fd79d5a.png)](/img/migrated/image-1719821228097-9fd79d5a.png)

**Step 2:** On the **Create security group** screen, select **Add rule**.

[![file](/img/migrated/image-1719821250324-ab40b63e.png)](/img/migrated/image-1719821250324-ab40b63e.png)

**Step 3:** Fill in the corresponding rule information:

- **Type**: SSH
- **Sources**: All IPv4

[![file](/img/migrated/image-1719821264190-f0a280a9.png)](/img/migrated/image-1719821264190-f0a280a9.png)

**Step 4:** Click **Create security group**. The system will display an error: the action is prohibited by policy.

[![file](/img/migrated/image-1719821276342-01f0978c.png)](/img/migrated/image-1719821276342-01f0978c.png)

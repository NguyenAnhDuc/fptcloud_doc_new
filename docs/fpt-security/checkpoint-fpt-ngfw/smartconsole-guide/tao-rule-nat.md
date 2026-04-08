---
id: "tao-rule-nat"
title: "Create NAT rule"
sidebar_label: "Create NAT rule"
sidebar_position: 6
---

# Create NAT rule

**Step 1:** In the **Object Pane** (**F11**) > find the object to SNAT > right-click and select **Edit**.

[![Userguide Checkpoint FPT NGFW 2022 60](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-60-90ecad9b.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-60-90ecad9b.png)

**Step 2:** In the menu, select **NAT** > check **Add automatic address translation rules** > check **Hide behind IP address** > enter the SNAT IP > select the gateway to apply.

[![Userguide Checkpoint FPT NGFW 2022 61](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-61-4c558934.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-61-4c558934.png)

**Step 3:** In the menu, select **Security Policies** (**Ctrl + 2**) > select **Access Control** > select **NAT** > verify the rule was created.

[![Userguide Checkpoint FPT NGFW 2022 62](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-62-10-dc17c546.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-62-10-dc17c546.png)

**Step 4:** Install Policy.

**Step 1:** In the menu, select **Security Policies** (**Ctrl + 2**) > select **Access Control** > select **NAT**.

[![Userguide Checkpoint FPT NGFW 2022 63](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-63-10-ac53aa0f.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-63-10-ac53aa0f.png)

**Step 2:** Click **Add rule above / to top / to bottom** to insert the rule at the appropriate position.

[![Userguide Checkpoint FPT NGFW 2022 64](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-64-10-a10726e9.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-64-10-a10726e9.png)

**Step 3:** Configure the new rule:

[![Userguide Checkpoint FPT NGFW 2022 65](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-65-10-b8780102.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-65-10-b8780102.png)

- **Name:** [![Userguide Checkpoint FPT NGFW 2022 66](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-66-10-56f58df1.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-66-10-56f58df1.png)
- **Original Source** (source IP before NAT): [![Userguide Checkpoint FPT NGFW 2022 67](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-67-10-85cf6d50.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-67-10-85cf6d50.png)
- **Original Destination** (destination IP before NAT): [![Userguide Checkpoint FPT NGFW 2022 68](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-68-10-e30c8c04.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-68-10-e30c8c04.png)
- **Original Services** (service/port before NAT): [![Userguide Checkpoint FPT NGFW 2022 69](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-69-10-a48979cb.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-69-10-a48979cb.png)
- **Translated Source** (source IP after NAT): [![Userguide Checkpoint FPT NGFW 2022 70](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-70-10-9a29270a.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-70-10-9a29270a.png)

Keep original source IP.

- **Translated Destination** (destination IP after NAT): [![Userguide Checkpoint FPT NGFW 2022 71](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-71-10-3ed249b0.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-71-10-3ed249b0.png)
- **Translated Services** (service/port after NAT): [![Userguide Checkpoint FPT NGFW 2022 72](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-72-10-d9e3bb2b.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-72-10-d9e3bb2b.png)
- **Install On** (device containing the NAT rule): [![Userguide Checkpoint FPT NGFW 2022 73](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-73-10-5d70b6f5.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-73-10-5d70b6f5.png)

DNAT rule after creation:

[![Userguide Checkpoint FPT NGFW 2022 74](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-74-10-4254a83f.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-74-10-4254a83f.png)

**Step 4:** Create a firewall rule to allow the DNAT connection.

[![Userguide Checkpoint FPT NGFW 2022 75](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-75-10-32e9c82c.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-75-10-32e9c82c.png)

**Step 5:** Install Policy.

---
id: "tao-firewall-policy"
title: "Create a firewall policy"
description: "Guide to creating a firewall rule to allow traffic from a VLAN to the internet on Fortigate NGFW."
sidebar_label: "Create a firewall policy"
sidebar_position: 4
---

# Create a firewall policy

This example creates a firewall rule allowing a machine in VLAN 10.2.0.0/24 (Port 3) to connect to the internet.

1. Configure a **Firewall Address** to define the IP addresses to be used:

   **Policy & Objects > Addresses > Create new > Address**

   [![Create Firewall Address](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-7-1024-f6cbec98.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-7-1024-f6cbec98.png)

   [![Firewall Address details](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-8-1024-6b3e2463.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-8-1024-6b3e2463.png)

2. Create the **Firewall Policy**:

   **Policy & Objects > Firewall Policy > Create new**

   [![Create new Firewall Policy](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-9-1024-0428cf8e.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-9-1024-0428cf8e.png)

   Configure **Interfaces**, **Action**, **Service**, and **Security Profiles**:

   [![Configure Firewall Policy](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-10-102-cfc82ca1.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-10-102-cfc82ca1.png)

   - **Incoming Interface**: Select VLAN 10.2.0.0/24 (Port 3).
   - **Outgoing Interface**: Select Port 2 (WAN).
   - **Source**: Select the Address created in step 1.
   - **Destination**: Select **ALL** (or limit destinations by selecting specific ones).
   - **Service**: Select **ALL**.
   - **NAT**: Select **Use Outgoing Interface Address** — NAT using the public IP assigned to Port 2 (WAN).

   [![NAT configuration](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-11-102-c05de940.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-11-102-c05de940.png)

   Add security profiles to protect the system from internet threats:

   - **SSL Inspection**: Switch to **deep-inspection** mode. This requires installing the certificate on the user's browser. (Download the certificate by clicking **Deep-inspection > Edit > Download certificate**.)

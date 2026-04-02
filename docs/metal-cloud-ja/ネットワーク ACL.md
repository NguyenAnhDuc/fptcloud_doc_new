---
id: "ネットワーク ACL"
title: "Network ACL overview"
description: "Network ACL (Access Control List) or NACL is an important part of network security"
sidebar_label: "Network ACL overview"
sidebar_position: 11
---

# Network ACL overview

Network ACL (Access Control List) or NACL is an important part of network security. It helps you control and manage traffic flow in and out of a subnet by applying rules that allow or deny access.

- Network ACLs are created automatically along with the subnet.
- Each subnet must be associated with a NACL.
- NACLs contain inbound and outbound rules. Priority values are evaluated in ascending order, and once a match is found, no further rules are evaluated.
- **Each NACL has a maximum limit of 100 rules (both inbound and outbound rules combined).**

# Network ACL rules consist of the following basic components

You can modify the default Network ACL by adding or removing rules. Changes made to Network ACL rules are automatically applied to the associated subnet.

The components of a Network ACL rule are:

**1. Priority**
Rules are processed in ascending order of priority number. When a rule matches traffic, that rule is applied even if a higher-priority rule conflicts. The system automatically increments the priority number, but you can change it as long as it does not duplicate an existing number.

**2. Type**
Specifies the type of traffic such as HTTP, HTTPS, or ALL.

**3. Protocol**
NACL supports TCP, UDP, ICMP, or any protocol.

**4. Port**
The specific port for traffic, ranging from 1 to 65535.

**5. Source**
For inbound rules, specifies the origin of the traffic (CIDR range).

**6. Destination**
For outbound rules, specifies the target of the traffic (CIDR range).

**7. Traffic Action**
The specified traffic is either allowed or denied.

**Notifications**
- A default rule is automatically created in the NACL that allows all outbound traffic and can be deleted.

| Priority | Type | Protocol | Port | Source | Traffic Action |
| --- | --- | --- | --- | --- | --- |
| 100 | ALL | ALL | ALL | 0.0.0.0/0 | ALLOW |

- If you delete the above default rule, you need to add the following outbound rules to create and deploy the server:

| Priority | Type | Protocol | Port | Source | Traffic Action |
| --- | --- | --- | --- | --- | --- |
| 1 | HTTP | TCP | 80 | 0.0.0.0/0 | ALLOW |
| 2 | HTTPS | TCP | 443 | 0.0.0.0/0 | ALLOW |
| 3 | DNS (UDP) | UDP | 53 | 0.0.0.0/0 | ALLOW |

# What you can do with Network ACL

## Create a new rule

Create additional Network ACL rules to allow (ALLOW) or deny (DENY) all or specific types of inbound and outbound traffic.

To create one or more Network ACL rules, follow these steps:

1. Sign in to your FPT Cloud account and select the **tenant, region, and VPC** (if you have multiple).
2. Go to **AI Infrastructure/Network ACL** in the sidebar.
3. Select the Network ACL by clicking the **NACL name** or **Action/Manage rule** in the list.
4. Select the **Outbound or Inbound tab** (depending on the type of traffic rule you want to create).
5. Click the **Create new rule** button.
6. Fill in the priority, type, protocol, port, source/destination, and traffic action fields.
7. You can create multiple new rules and then select **Apply** to save the changes.

## Edit existing rules

To edit one or more Network ACL rules, follow these steps:

1. Select the Network ACL by clicking the NACL name or Action/Manage rule in the list.
2. Click the edit icon for the rule you want to edit.
3. Edit the rule values as desired.
4. You can repeat and modify multiple existing rules, then select Apply to save the changes.

## Delete rules

To delete one or more Network ACL rules, follow these steps:

1. Select the Network ACL by clicking the NACL name or Action/Manage rule in the list.
2. Click the delete icon for the rule you want to delete.
3. You can repeat and delete multiple existing rules, then select "Apply" to save the changes.

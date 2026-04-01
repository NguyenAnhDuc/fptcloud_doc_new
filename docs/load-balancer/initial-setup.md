---
id: "initial-setup"
title: "Initial setup"
description: "Prerequisites to complete before using the FPT Cloud Load Balancer service."
sidebar_label: "Initial setup"
sidebar_position: 2
---

# Initial setup

Before using the FPT Cloud Load Balancer service, complete the following steps:

- Create an FPT Cloud account and log in to the FPT Portal.
- Create a virtual server on FPT Cloud.
- Attach a Security Group to the virtual server.

## Create an account and log in to the FPT Portal

1. Go to <https://console.fptcloud.com> and log in with your FPT Cloud account credentials.
2. Select the correct Tenant, Region, and VPC for your service.

:::note
If you do not have an FPT Cloud account, visit <https://fptcloud.com/>, click **Sign Up**, and follow the instructions. The support team will contact you to confirm your account details.
:::

## Create a virtual server

FPT Load Balancer supports load balancing for virtual servers on FPT Cloud. Create and manage virtual servers according to the Cloud Server documentation.

## Attach a Security Group to the virtual server

A Security Group acts as a network firewall at the virtual machine level, controlling inbound and outbound traffic. By default, FPT Cloud virtual machines allow all outbound traffic but block all inbound traffic.

Load Balancer requires specific ports to be open. In addition to service ports such as HTTP/HTTPS, you must also open ports used for health checks.

Example: to create Load Balancer LB1 that balances traffic for a web server running on port 80 across virtual machines A and B:

1. Create a new Security Group.
2. Add an Inbound rule for port 80.
3. Attach the Security Group to virtual machine A and virtual machine B.
4. If LB1 is an External Load Balancer (with a Public IP assigned), also attach the Security Group to LB1.

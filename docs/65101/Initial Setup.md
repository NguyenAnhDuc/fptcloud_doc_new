---
id: "Initial Setup"
title: "Initial Setup"
description: "To use the FPT Cloud Load Balancer service, please first check and complete the following tasks:"
sidebar_label: "Initial Setup"
sidebar_position: 3
---

# Initial Setup

To use the FPT Cloud Load Balancer service, please first check and complete the following tasks:
  * [Create an FPT Cloud account and log in to the FPT Portal](../65101/index.md)
  * [Guide to creating virtual servers on FPT Cloud](../65101/index.md)
  * [Guide to attaching a Security Group to a virtual server](../65101/index.md)

After completing the above steps, you are ready to start using Load Balancer on the FPT Cloud system.
### Create an FPT Cloud account and log in to the FPT Portal
To begin using the **FPT Load Balancer** service, you need to log in to the **FPT Portal**.
Please go to <https://console.fptcloud.com> and log in with your provided **FPT Cloud** username/password. Select the correct Tenant, Region, and VPC where you want to use the service.
If you don't have an FPT Cloud account yet, visit the homepage at <https://fptcloud.com/>.
Then choose the **Sign Up** function and enter the required information as guided by the system. Our support team will contact you shortly after and verify the information to create your account.
If you encounter any issues during the process, please contact our Support team for assistance.
### Guide to creating virtual servers on FPT Cloud
Currently, FPT Load Balancer supports load balancing for virtual servers on FPT Cloud. Therefore, you need to know how to create and manage virtual servers using this guide:
### Attaching a Security Group to a virtual server
**Security Groups** act as virtual firewalls at the virtual machine level, helping control traffic by allowing or blocking inbound and outbound flows. With **FPT Cloud** , virtual machines are allowed outbound internet traffic by default, but inbound traffic is blocked.
This ensures your virtual machines are protected from hacking, DDoS attacks, and other threats from the internet.
However, Load Balancer requires you to open certain specific ports to function. In addition to opening service ports such as HTTP/HTTPS on your servers, you also need to open additional ports for health checks.
To allow inbound traffic to your virtual server, simply create a **Security Group** , add the corresponding **Inbound Rules** , and attach it to the server.
If you're using an external load balancer, you also need to attach a **Security Group** to the Load Balancer's IP address.
For example, if you want to create a Load Balancer named LB1 to balance traffic for a web server running on port 80 on VM A and VM B, follow these steps:
  * Create a new **Security Group**.
  * Add an **Inbound Rule** for port 80.
  * Attach the newly created **Security Group** to VM A and VM B.
  * Create Load balancer LB1 and add newly VM to LB1 as members.

For a detailed guide on how to create and manage **Security Groups** , please refer to this document: _Link to documentation_
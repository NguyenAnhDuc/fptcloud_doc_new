---
id: "create-security-groups"
title: "Create security groups"
description: "Steps to create a security group for use with Database Engine."
sidebar_label: "Create security groups"
sidebar_position: 3
---

# Create security groups

1. From the **Menu** bar, select **Networking** > **Security Group**.
[![](/img/migrated/B1cua-6.1-a6dd8ad4.png)](/img/migrated/B1cua-6.1-a6dd8ad4.png)
2. Click **Create Security Group**. The **Create Security Group** screen appears.
[![](/img/migrated/B2cua-6.1-db433c04.png)](/img/migrated/B2cua-6.1-db433c04.png)

Enter the required information:
- **Name:** Enter a name that is easy to manage. The system will set a default name automatically.
- **Subnet:** Select from the list. Choose the range that matches the Database you selected when creating.
- **Applied instances:** Select the servers to apply this group to.
- **Inbound Rules:**
  - **Type:** Select the database type. Select **All ports** to open all ports, or **Customize ports** to open a specific port or port range. The system also suggests ports for common services such as SSH, RDP, MySQL, HTTP, HTTPS, etc.
  - **Protocol:** Select from the list.
  - **Port:** Enter the port number to open.
  - **Action:** Select from the list.
  - **Source:** Enter the internet IPs that can connect to this port in the Source field. Select All to allow all, MyIP to allow the current machine's IP, or enter specific IPs directly.
  - **Description:** Enter a description.
- Select **Add rule** to add another rule.

3. Click **Create Security group**. Wait 1–2 minutes for the security group to reach **Active** status.
[![](/img/migrated/B3-cua6.1-c5041ca1.png)](/img/migrated/B3-cua6.1-c5041ca1.png)

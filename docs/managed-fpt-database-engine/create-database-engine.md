---
id: "create-database-engine"
title: "Create a Database Engine"
description: "Steps to create a new Database Engine on FPT Smart Cloud."
sidebar_label: "Create a Database Engine"
sidebar_position: 9
draft: true
---

# Create a Database Engine

:::note
Prerequisites before proceeding:
- Logged in to FPT Portal.
- Correct Tenant, Region, and VPC selected.
- Sufficient quota (CPU, RAM, Storage) available.
:::

1. From the menu select **Database Engine**.
2. Click **Create**.
3. Select the database type (MySQL, SQL Server, MongoDB, MariaDB, PostgreSQL, or Redis).
4. Enter the following information:
   - **Name:** Enter the database cluster name.
   - **Version:** Select the database version.
   - **Configuration:** Select the CPU, RAM, and Disk configuration (Preset or Custom).
   - **Network:** Select the subnet to use.
   - **Security Group:** Select the security group to apply.
5. Review the configuration and click **Create**.
6. The system verifies resources and begins creating the Database Engine. When creation completes, the status changes to **Running**.

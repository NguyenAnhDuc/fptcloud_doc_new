---
id: "tao-api-gateway"
title: "Create an API Gateway"
description: "Step-by-step guide to creating an API Gateway on FPT Cloud."
sidebar_label: "Create an API Gateway"
sidebar_position: 3
---

# Create an API Gateway

To create an **API Gateway**, follow these steps:

**Step 1:** In the menu bar, select **Integration** > **API Gateway**.

**Step 2:** Click **Create an API Gateway cluster** to open the **Create API Gateway** screen.

**Step 3:** In the **Basic Information** section, enter:

- **Name** (required): API Gateway name. Only lowercase letters a-z and digits 0-9 are allowed. Use a hyphen "-" instead of spaces.
- **Description** (optional): A short description.
- **Version** (required): Select a version.
- **Access type** (required): Select Public or Private.

[![Image](/img/migrated/SCR-20250924-nhqw-2c9ba0dd.png)](/img/migrated/SCR-20250924-nhqw-2c9ba0dd.png)

**Step 4:** Click **Next Step** to proceed to the **Details** screen.

Fill in the following:

- **Launch Configuration**
  - **Subnet** (required): Select a subnet.
  - **Storage policy** (required): Select a storage policy.
  - **Flavor** (required): Select a flavor.
  - **Worker nodes** (required): Enter the number of nodes (1–10).

[![Image](/img/migrated/SCR-20250924-nnrh-2a698b21.png)](/img/migrated/SCR-20250924-nnrh-2a698b21.png)

- **Autoscaling configuration**
  - **Enabled** (required): Enable or disable autoscaling. Default: Enabled. When disabled, fields from Minimum Nodes to Memory scale-out threshold are hidden.
  - **Minimum Nodes** (required): Minimum number of nodes (1–10). Must be less than Maximum Nodes. Recommended: 3 nodes for production.
  - **Maximum Nodes** (required): Maximum number of nodes (1–10). Must be greater than Minimum Nodes. Up to 50 VM instances per node.
  - **CPU scale-out threshold (%)** (required): Average CPU usage threshold. Default: 80%.
  - **Memory scale-out threshold (%)** (required): Average RAM usage threshold. Default: 80%.

[![Image](/img/migrated/SCR-20250924-nogx-60a8a374.png)](/img/migrated/SCR-20250924-nogx-60a8a374.png)

- **Etcd — Self-managed ETCD**: Choose whether to manage ETCD yourself or use the system-managed ETCD. Default: Unchecked (disabled).
  - When **unchecked**: Select an **ETCD Flavor** to configure volume size and deployment.

[![Image](/img/migrated/SCR-20250924-nonz-76855a0c.png)](/img/migrated/SCR-20250924-nonz-76855a0c.png)

  - When **checked**: Enter ETCD details manually:
    - **Hostname** (required): DNS name or IP address.
    - **Port** (required): A number from 1–65535 (default: 2379).
    - **Prefix** (required): Storage prefix for API Gateway configuration (default: /apisix).
    - **Username** (required): Authentication account for SASL_PLAINTEXT or SASL_SSL protocols.
    - **Password** (required): Authentication password for ETCD.

[![Image](/img/migrated/SCR-20250924-nopt-0a88606a.png)](/img/migrated/SCR-20250924-nopt-0a88606a.png)

- **Load balancer configuration**
  - **Load Balancer Size** (required): Select a LoadBalancer flavor appropriate for your application's traffic.

[![Image](/img/migrated/SCR-20250924-noyr-4f810109.png)](/img/migrated/SCR-20250924-noyr-4f810109.png)

- **Endpoint**
  - **Domain** (required): The connection address for the API Gateway service after initialization. Allowed characters: a-z, A-Z, 0-9, hyphen (-), period (.). Maximum 100 characters. Example: domain-name.com.
  - **CA bundle** (required): CA certificate chain in PEM format. Must begin with `-----BEGIN CERTIFICATE-----`.
  - **Private key** (required): Private key in PEM format. Must begin with `-----BEGIN PRIVATE KEY-----`.

[![Image](/img/migrated/SCR-20250924-npeh-f148e5c5.png)](/img/migrated/SCR-20250924-npeh-f148e5c5.png)

**Step 5:** Click **Next Step** to proceed to the **Service Configuration** screen.

- **Dashboard Configuration**
  - **Enable Dashboard**: Choose whether to install the Dashboard. Default: Unchecked.
  - **Dashboard Flavor** (required): Cluster size for the Dashboard installation.
  - **Domain** (required): Access address for APISIX Dashboard. Example: dashboard-api.example.com.
  - **CA bundle** (required): CA certificate chain in PEM format.
  - **Private key** (required): Private key in PEM format.

[![Image](/img/migrated/SCR-20250924-njbo-8895a431.png)](/img/migrated/SCR-20250924-njbo-8895a431.png)

**Step 6:** Click **Next Step** to proceed to the **Review and Create** screen.

[![Image](/img/migrated/z7045251311917_2c4a0a33e279bb20581a482a6-ec3afc93.jpg)](/img/migrated/z7045251311917_2c4a0a33e279bb20581a482a6-ec3afc93.jpg)

**Step 7:** Review all information, then click **Create** to finish creating the **API Gateway**.

The **API Gateway** is ready when its **Status** shows **Healthy** (approximately 25 minutes).

---
id: "create-load-balancer"
title: "Create a Load Balancer"
description: "How to create a Load Balancer with Listener and Server Pool configuration on FPT Cloud."
sidebar_label: "Create a Load Balancer"
sidebar_position: "3"
---

# Create a Load Balancer

**Step 1:** In the menu, select **Load Balancer > Load Balancer**, then click **Create Load Balancer**.

**Step 2:** Enter the configuration for the new Load Balancer.

When you create a Load Balancer, the system automatically creates one default Listener and one default Server Pool based on the configuration you provide.

#### 1. Load Balancer information

| Field | Description |
| --- | --- |
| Name | Enter a name for the Load Balancer. The name can be changed later. |
| Description | Optional description. |
| Size | Select the Load Balancer package. FPT Cloud offers four high-availability (24/7) packages: Basic-1, Basic-2, Standard, and Advanced. |
| Public IP | Assign a public IP if you need the Load Balancer accessible from the internet. |
| Subnet | Select a subnet or enter a CIDR for the Load Balancer. If no specific network planning is required, the system selects an available subnet in the VPC. |
| IP Private | Enter a specific private IP within the selected subnet/CIDR. If no specific IP is required, the system assigns one automatically. |

:::note
With Load Balancer v2.0, you do not need to create a Security Group for the Load Balancer when assigning a Public IP. The system automatically opens firewall rules based on the Listener configuration.
:::

#### 2. Listener configuration

| Field | Description |
| --- | --- |
| Listener name | Enter a name for the Listener. |
| Description | Optional description. |
| Protocol | Select the protocol the Listener uses to receive and route requests. |
| Port | Select the port the Listener routes requests to. |

#### 3. Server Pool configuration

| Field | Description |
| --- | --- |
| Name | Enter a name for the Server Pool. |
| Add server | Add members to the pool. Choose from virtual machines within the VPC or add external servers. |
| Port | The port on which the member listens for requests. |
| Weight | The weight of the member in the Server Pool for request distribution. Starts from 1; default is 1 if all members have equal capacity. |
| Algorithm | The request distribution algorithm within the Server Pool. |
| Sticky session | Enable sticky session to route subsequent requests from the same client to the same server, maintaining session state. |
| Health check configuration | Configure how the Load Balancer health-checks its members. Default settings are applied automatically; adjust only if custom health check behaviour is needed. |

After reviewing all information, click **Create** to create the Load Balancer.

**Step 3:** Check the status of the new Load Balancer.

After creation, the system redirects you to the Load Balancer list page where you can monitor the status. Each Load Balancer, Listener, Server Pool, and Member has its own status:

| Object | Provisioning status | Operating status |
| --- | --- | --- |
| Load Balancer | **Active**: Created successfully. **Creating**: Initialising. **Updating**: Being updated. **Deleting**: Being deleted. **Pending**: An error occurred during creation — contact customer support. | **Healthy**: All server pool members are healthy. **Unhealthy**: At least one member is unhealthy. **Offline**: All members are unhealthy. **No healthcheck**: No health check configured or configuration error — contact customer support. |
| Listener | Same as Load Balancer | N/A |
| Server Pool | Same as Load Balancer | Same as Load Balancer |
| Member | N/A | **Healthy**: Member is available to receive requests. **Unhealthy**: Member is unavailable. |

#### 4. Recommended alarms

When creating a Load Balancer, the system suggests creating two important alarms to detect overload conditions:

- Alert when the number of dropped packets through the Load Balancer exceeds the safe threshold (> 50 pps).
- Alert when the number of simultaneous active connections through the Load Balancer exceeds the package's recommended threshold.

Select an alarm recipient or create a new one (Email, Telegram, Slack, and Teams are supported). These alarms integrate with the Cloud Guard service.

:::note
Load Balancer creation may take a moment. Wait until the Load Balancer status is **Active** before continuing.
:::

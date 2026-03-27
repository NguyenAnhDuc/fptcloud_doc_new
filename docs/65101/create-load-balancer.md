---
id: "create-load-balancer"
title: "Create Load Balancer"
description: "To create a Load Balancer, the system will automatically create one Listener and one Server Pool, based on the selected "
sidebar_label: "Create Load Balancer"
sidebar_position: 5
---

# Create Load Balancer

### Step 1: In the menu, select **Load Balancer > Load Balancer**, then click **Create Load Balancer**
### Step 2: Enter the **Load Balancer** configuration details
To create a Load Balancer, the system will automatically create one Listener and one Server Pool, based on the selected configuration, including:
#### 1. Load Balancer Information  
| Field  | Description  |  
| --- | --- |  
| **Name**  | Enter a name for the Load Balancer to make management easier. This name can be changed later.  |  
| **Description**  | Description of the Load Balancer.  |  
| **Size**  | Choose a Load Balancer size that fits your needs. FPT Cloud offers four types with 24/7 availability: Basic-1, Basic-2, Standard, and Advanced.  |  
| **Public IP**  | Select a public IP if you want internet access.  |  
| **Subnet**  | Choose or input a CIDR block. If not specified, the system auto-selects a subnet from the VPC.  |  
| **Private IP**  | Input a private IP (must be within the subnet). If not specified, one will be auto-assigned.  |  
> ⚠️ **Note:** With Load Balancer v2.0, there's no need to manually create a security group when attaching a public IP. The system automatically opens the firewall based on the Listener configuration.
#### 2. Listener Configuration  
| Field  | Description  |  
| --- | --- |  
| **Listener name**  | Name for easier management. Can be changed later.  |  
| **Description**  | Description of the Listener.  |  
| **Protocol**  | Protocol that the Listener uses to receive and forward requests.  |  
| **Port**  | Port the Listener listens on.  |  
#### 3. Server Pool Configuration  
| Field  | Description  |  
| --- | --- |  
| **Name**  | Name of the server pool.  |  
| **Add server**  | Add members. They can be VMs on FPT Cloud (in same VPC) or external servers.  |  
| **Port**  | Port used by the backend server to receive requests.  |  
| **Weight**  | Used to distribute traffic (≥1). Default is 1.  |  
| **Algorithm**  | Load balancing algorithm for traffic distribution.  |  
| **Sticky session**  | Enable if you want the same client to connect to the same server.  |  
| **Healthcheck configuration**  | Set how the system monitors server health. Defaults are available.  |  
After entering the required info, click **Create**.
* * *
### Step 3: Verify Load Balancer status
After creation, you’ll be redirected to the list of Load Balancers. Each component (LB, Listener, Pool, Member) has its own statuses:  
| Object  | Provisioning Status  | Operating Status  |  
| --- | --- | --- |  
| **Load Balancer**  |  `Active`: Created successfully   
`Creating`: Being created   
`Updating`: Updating   
`Deleting`: Deleting   
`Pending`: Error occurred, contact support  |  `Healthy`: All pools/members are OK   
`Unhealthy`: At least one member is down   
`Offline`: All members are down   
`No healthcheck`: None configured or error  |  
| **Listener**  | Same as above  | N/A  |  
| **Server pool**  | Same as above  | Same as above  |  
| **Member**  | N/A  |  `Healthy`: Receives traffic   
`Unhealthy`: Does not receive traffic  |  
> ⚠️ **Note:** Creating a Load Balancer may take a few minutes. Please wait until it's in `Active` status before performing further actions.
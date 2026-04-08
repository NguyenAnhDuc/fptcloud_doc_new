---
id: "khoi-tao-policy"
title: "Create Policy"
description: "Guide to creating an Autoscale Policy on FPT Autoscale."
sidebar_label: "Create Policy"
sidebar_position: 2
---

# Create Policy

## Step 1: Go to Autoscaling > Autoscale Policy. Click **Create policy**.

[![create policy](/img/migrated/Screenshot-2024-10-02-055525-37b63cd9.png)](/img/migrated/Screenshot-2024-10-02-055525-37b63cd9.png)

## Step 2: Configure the parameters.

- **Type**: Select the appropriate policy type.
- **Name**: Enter a policy name that is easy to manage. The name must be 6 to 250 characters and may only contain Latin letters, numbers, and underscores.

### Deletion policy

A deletion policy controls the priority order for removing nodes from the group when an action reduces the node count. If the group does not have this policy, nodes are selected for deletion randomly.

[![deletion policy](/img/migrated/Screenshot-2024-10-02-055724-aa33696c.png)](/img/migrated/Screenshot-2024-10-02-055724-aa33696c.png)

- **Mode**:
  - _Oldest first_: Prioritize deleting nodes from oldest to newest.
  - _Youngest first_: Prioritize deleting nodes from newest to oldest.

### Scaling policy

A scaling policy controls the scale behavior of the group in response to actions automatically triggered by the monitoring service.

[![scaling policy](/img/migrated/Screenshot-2024-10-02-055757-a8c024c1.png)](/img/migrated/Screenshot-2024-10-02-055757-a8c024c1.png)

- **Change type**: The adjustment method for the group.
  - _Exact capacity_
  - _Change in capacity_
  - _Change in percentage_

- **Event**: The type of event that triggers this policy.
  - _Scale in_
  - _Scale out_

- **Number**: The value whose meaning differs depending on the **Change type**:
  - _Exact capacity_: Enter the new capacity (positive integer). After adjustment, the number of nodes in the group equals exactly this value.
  - _Change in capacity_: Enter the number of nodes to add (positive integer) or remove (negative integer). The node count after adjustment equals the current capacity plus or minus the absolute value of **Number**.
  - _Change in percentage_: Enter the percentage (%) to add (positive decimal) or remove (negative decimal) based on the current capacity. Example: if the current capacity is 4 nodes and **Number** is 50%, 2 new nodes are added, giving a total of 6.

### Load balancer policy

A load balancer policy allows nodes created in the group to automatically attach to a Load balancer, and automatically detach from the Load balancer when a node is deleted.

[![load balancer policy](/img/migrated/Screenshot-2024-10-02-055840-4c829465.png)](/img/migrated/Screenshot-2024-10-02-055840-4c829465.png)

- **Server pool**: Select the corresponding Server pool in the Load balancer.
- **Member port**: The port that members will open to listen on.

### Classic load balancer policy

A classic load balancer policy allows nodes created in the group to automatically attach to a Classic load balancer, and automatically detach from the Classic load balancer when a node is deleted.

[![classic load balancer policy](/img/migrated/Screenshot-2024-10-02-055921-fb7c84c9.png)](/img/migrated/Screenshot-2024-10-02-055921-fb7c84c9.png)

- **Member port**: The port that members will open to listen on.

### Health policy

A health policy controls how nodes in the group are checked and recovered.

[![health policy](/img/migrated/Screenshot-2024-10-02-055947-c0a9514f.png)](/img/migrated/Screenshot-2024-10-02-055947-c0a9514f.png)

- **Recovery action**: Select the recovery method if a node is not functioning.
  - _Recreate_: Delete and recreate the node.
  - _Reboot_: Restart the node.
- **Interval check (s)**: The interval (in seconds) between health checks of the node.

## Step 3: Click **Create policy** to confirm.

After successful creation, the policy appears in the list of existing policies.

[![list policy](/img/migrated/Screenshot-2024-10-02-065449-ebb1fd0a.png)](/img/migrated/Screenshot-2024-10-02-065449-ebb1fd0a.png)

View policy details by clicking the policy name in the list:

[![click to view policy details](/img/migrated/Screenshot-2024-10-02-065632-1d3bd238.png)](/img/migrated/Screenshot-2024-10-02-065632-1d3bd238.png)

:::note
Modifying the technical specifications of a policy is not currently supported. Policies are static definitions. For a policy to take effect on a specific group, you must attach the policy to the corresponding group.
:::

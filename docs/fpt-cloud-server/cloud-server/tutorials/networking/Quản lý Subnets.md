---
id: "Quản lý Subnets"
title: "Subnet Management"
sidebar_label: "Subnet Management"
sidebar_position: 5
---

Subnet Management


**Subnets** are sub-networks created within your VPC. They are equivalent to a LAN in a physical system. You can attach one or more **Subnets** to a virtual machine depending on your needs.

## Create a New Subnet
To create a new **Subnet**, follow these steps:

**Step 1**: In the menu, select **Networking** > **Subnets**. Click **Create subnet**.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-001.png)

**Step 2**: Enter the required system information:

  * **Name**: Enter a memorable name for the Subnet.

  * **Type**: Currently supports 2 types:

    * **Routed**: The subnet will route to the Internet through a NAT gateway.

    * **Isolated**: The subnet will not route to the Internet.

  * **Network Address (CIDR)**: Enter a valid **CIDR**.

  * **Gateway IP**: Enter a valid **Gateway** address.

  * **Static IP Pool (optional)**: Enter the IP range you want to use. If left blank, the system will use all IPs from the **CIDR**.

  * **Primary DNS**: Enter a DNS address in IPv4 format. If left blank, the system will automatically set the default value to 8.8.8.8.

  * **Secondary DNS (optional)**: Enter a Secondary DNS in IPv4 format. If left blank, the system will automatically set the default value to 8.8.8.8.

  * **Add tag (optional)**: Select tags to attach to the subnet.


![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-002.png)

**Step 3**: Click **Create subnet** to create the new Subnet. The system will process and notify you of the result.

If successful, the newly created **Subnet** will be displayed in the **Subnets** table.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-003.png)

## View Subnet Details
![](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-004.png)

Allows viewing some information about the Subnet:

  * Subnet name
  * CIDR
  * Gateway (only supported for VPC type Specific)
  * IP Used
  * IP List

    * Private IP

    * Device Name: IP information currently attached to an Instance or Load Balancer (only supported for VPC type Specific). If it is an Instance, the device name is the hostname of the Instance. If it is a Load Balancer, the device name is the Load Balancer name.

    * Attach device

    * System Status

    * Admin Status


## Rename a Subnet
**Step 1**: In the menu, select **Subnets**. In the **Actions** section of the subnet to rename, select **Rename**.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-005.png)

**Step 2**: The **Rename subnet** modal appears. Enter the new name and click **Rename subnet** to save the change.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-006.png)

## Convert Subnet from Isolated to Routed
Follow these steps:

**Note: This feature is only supported on VPCs with a single Gateway. If your VPC has multiple Gateways, please contact the support team for assistance.**

**Step 1**: In the menu, select **Subnets**, then select **Actions** > **Edit to Routed**.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-007.png)

**Step 2**: A dialog box appears. Confirm and click **Change to routed** to apply the change.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-008.png)

**Step 3**: After the change is successfully applied, the system updates the subnet list with the **Type** and **Edge gateway** information.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-009.png)

## Change DNS Server Information
**Step 1**: In the menu, select **Subnets**. For the subnet whose DNS server you want to change, select **Actions** > **Edit DNS server**.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-010.png)

**Step 2**: Enter the new DNS server information and click **Edit DNS** to update.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-011.png)

## Manage Tags for a Subnet
**Step 1**: In the menu, select **Subnets**. For the subnet to tag, select **Actions** > **Manage tags**.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-012.png)

**Step 2**: Select a tag from the list and click **Save** to update.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-013.png)

## Create a Private IP (IP Port)
_This feature is only available to General users._

The IP Port feature allows creating private IP addresses. Users can designate and reserve IP addresses for various purposes.

**Step 1**: In the menu, select **Subnet**. The system will display the list of corresponding Subnets.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-014.png)

**Step 2**: Click on the details of a subnet. Click **Create private IP**.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-015.png)

**Step 3**: A dialog box appears. Enter the following information:

  * **Subnet name**: The system displays the user's subnet name by default and cannot be edited.

  * **IP address**: Enter a valid IP address that belongs to the subnet.

  * **MAC address**: Enter a MAC address (optional field).


**Note: The IP address created will be in the enabled (Up) state.**

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-016.png)

**Step 4**: Click **Create Private IP** to create the IP address. The system will initialize and notify you of the result. The private IP address will be displayed on the Subnet detail page after creation.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-017.png)

## Disable Admin State
**Step 1**: In the menu, select **Subnet**, then click on a specific Subnet's details. Select a private IP address with **Admin State** set to **Up** > click **Actions**.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-018.png)

**Step 2**: Select **Disable admin state**. The system will **disable** the private IP address (Admin State changes from Up to Down) and update this status on the Subnet detail page.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-019.png)

## Enable Admin State
Note: If the user's private IP is being used for [Allow address pair](<https://fptcloud.com/documents/cloud-server/?doc=allow-address-pair>), the "Enable admin state" action cannot be performed.

**Step 1**: In the menu, select **Subnet**, then click on a specific Subnet's details. Select a private IP address with **Admin State** set to **Down** > click **Actions**.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-020.png)

**Step 2**: Select **Enable admin state**. The system will **enable** the private IP address (Admin State changes from Down to Up) and update the status on the Subnet detail page.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-021.png)

## Delete a Private IP
Delete a private IP address when it is no longer needed.

**Step 1**: In the menu, select **Subnet**, then click on a specific Subnet's details. Select a private IP address with **Admin State** set to **Up** > click **Actions**.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-022.png)

**Step 2**: Click **Delete**. A warning dialog box appears to confirm the action. Confirm by clicking **Yes, delete it**.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-023.png)

Note: If the private IP address is currently in use or the IP address is attached to an address pair, it cannot be deleted.

If you want to delete it, please remove the IP from the allow address pair first.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-024.png)

__

_Figure: 172.26.166.145 is currently attached to an allow address pair_

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-025.png)

__

_Warning modal: the delete action cannot be performed_

## Delete a Subnet from VPC
**Note: All virtual machines must be removed from the Subnet before performing this action.**

If you no longer need a **Subnet**, you can delete it from the VPC. To delete a **Subnet**, follow these steps:

**Step 1**: In the menu, select **Subnets**. In the **Actions** section of the subnet to delete, select **Delete**.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-026.png)

**Step 2**: The system will display a confirmation popup. To confirm deletion, select **Delete network**.

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-027.png)

## Manage Load Balancer Subnets

Note: This feature is only available for certain Tenants with special configurations. Please contact us for support.

![](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-028.png)

  * Load Balancer subnets are named **LB-data-net**. These subnets are reserved for Load Balancers, cannot be used with other resources, and do not support management operations.


![](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-029.png)

  * Access a Load Balancer subnet's details on the subnet management page to manage the list of IPs currently in use within the subnet.

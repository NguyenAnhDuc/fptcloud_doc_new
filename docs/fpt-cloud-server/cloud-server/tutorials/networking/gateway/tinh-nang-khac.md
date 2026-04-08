---
id: "tinh-nang-khac"
title: "Other Features Related to Gateway"
description: "How to use Gateway with Floating IP, Instance, Subnet, Security Group, Load Balancer, and VPN features"
sidebar_label: "Other Features"
sidebar_position: 7
pagination_next: null
---

# Other Features Related to Gateway

## Allocating a Floating IP (Allocate IP Address)

On the **Floating IP** screen, the system lets you select a Gateway when allocating an IP. Hover over the tooltip on the Gateway information to see whether it is Basic or Custom type.

- If you select a **Custom** type Gateway, the system only allows IP allocation without attaching it to any resource (the Resource, IP Port, and Instance Port fields are hidden).

[![Allocate IP with Custom Gateway](/img/migrated/image-1754291575833-5ea9341b.png)](/img/migrated/image-1754291575833-5ea9341b.png)

- If you select a **Basic** type Gateway, the system allows IP allocation and simultaneous attachment to a resource.

[![Allocate IP with Basic Gateway](/img/migrated/image-1754291610069-25711f9b.png)](/img/migrated/image-1754291610069-25711f9b.png)

:::note
- On the **Floating IP** screen (Actions column), IPs belonging to a **Custom** type Gateway cannot be assigned to an Instance.
- On the **Instance Detail** screen, if an Instance has no IP assigned and you click Allocate IP, but the Instance belongs to a **Custom** type Gateway, you cannot assign the IP directly. To assign an IP, you need to create a NAT Rule.
:::

## Instance

When creating an Instance, the system automatically fills in the Gateway information based on the selected Subnet (the Gateway is assigned to the Subnet). If the Gateway is of type **Custom**, you will not be able to select a Floating IP (the field will be disabled).

[![Create Instance with Custom Gateway](/img/migrated/image-1754291630097-1768f41d.png)](/img/migrated/image-1754291630097-1768f41d.png)

## Subnet

On the **Subnet** creation screen, the system allows you to select a Gateway. If the Gateway is of type **Custom**, the system will notify you that you need to create a NAT Rule manually.

[![Create Subnet with Custom Gateway](/img/migrated/image-1754291640291-8ba52a8b.png)](/img/migrated/image-1754291640291-8ba52a8b.png)

## Security Group

On the **Security Group** creation screen, the system allows you to select a Gateway. The Security Rules created will be managed by the selected Gateway.

[![Create Security Group with Gateway](/img/migrated/image-1754291651290-309bd36f.png)](/img/migrated/image-1754291651290-309bd36f.png)

## Load Balancer

The system allows you to view Gateway information when using **Load Balancer Classic**.

[![Load Balancer Classic with Gateway](/img/migrated/image-1754291661656-45935b91.png)](/img/migrated/image-1754291661656-45935b91.png)

## VPN Site to Site

The system allows you to select a Gateway when creating and using the **VPN Site to Site** service.

[![VPN Site to Site with Gateway](/img/migrated/image-1754291672602-cfe24f87.png)](/img/migrated/image-1754291672602-cfe24f87.png)

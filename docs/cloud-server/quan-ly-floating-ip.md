---
id: "quan-ly-floating-ip"
title: "Floating IP Management"
description: "Attach, detach, and manage Floating IPs to allow instances to access the internet."
sidebar_label: "Floating IP Management"
sidebar_position: 69
---

# Floating IP Management

A Floating IP holds a public IP address and routes inbound internet traffic to an instance. To make an instance accessible from the internet, you need to attach a Floating IP to it.

You can redirect a Floating IP to another instance within the same VPC — helping you reduce costs and maximize IP utilization.

## Allocating a New Public IP

If your account has remaining quota, you can allocate additional IPs from the pool.

1. Go to **Networking** → **Floating IPs** and click **Allocate floating IP**.
2. Fill in the required information and click **Allocate**.

## Attaching a Floating IP to an Instance

1. In the Floating IP list, click **Actions** → **Attach**.
2. Select the instance to attach to, then click **Attach**.

## Detaching a Floating IP from an Instance

1. In the Floating IP list, click **Actions** → **Detach**.
2. Confirm the detach action.

## Deleting a Floating IP

1. In the Floating IP list, click **Actions** → **Delete**.
2. Confirm the deletion.

:::warning
Once deleted, the public IP is returned to the pool and may be allocated to another account.
:::

## Next steps

- [Subnet Management](./Quản%20lý%20Subnets.md)

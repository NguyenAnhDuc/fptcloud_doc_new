---
id: "question"
title: "Can a NAT Instance be used as a regular instance?"
description: "Answers about using NAT Instance as a regular instance and the maximum number of isolated networks it supports."
sidebar_label: "Can a NAT Instance be used as a regular instance?"
sidebar_position: 6
---

# Can a NAT Instance be used as a regular instance?

Yes. A NAT Instance is built on Ubuntu with additional NAT rules installed. It can be used as a regular instance on the system.

## How many isolated networks can one NAT Instance support?

Aside from the primary NIC required for the routed network, a NAT Instance can have up to 9 additional NICs, each connected to a different isolated network. Instances in each isolated network that need Internet access simply need to set their default gateway to the IP of the corresponding NAT Instance NIC.

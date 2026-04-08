---
id: "question-"
title: "Can a NAT Instance be used like a regular Instance?"
description: "FAQ about NAT Instance."
sidebar_label: "FAQ: NAT Instance"
sidebar_position: 3
---

# Can a NAT Instance be used like a regular Instance?

Yes. A NAT Instance is built on Ubuntu with additional NAT rules installed — and can be used like a regular Instance.

In addition to the primary NIC used for the routed network, a NAT Instance can have up to 9 additional NICs across 9 isolated networks. Instances in each network only need to redirect their default gateway to the NIC of the NAT Instance to access the internet.

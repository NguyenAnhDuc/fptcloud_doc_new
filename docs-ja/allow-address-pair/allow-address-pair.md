---
id: "allow-address-pair"
title: "Allow Address Pair"
description: "Allow Address Pair là tính năng cho phép thêm cặp địa chỉ IP và MAC vào interface của instance, hỗ trợ cấu hình High Availability."
sidebar_label: "Allow Address Pair"
sidebar_position: "1"
---

# Allow Address Pair

## Overview

By default, a computer (or virtual machine) binds its MAC and IP addresses together to prevent spoofing. This means traffic destined for an IP address is only delivered to the machine whose MAC address matches.

The Allow Address Pair feature lets you add an IP address (or CIDR) and MAC address pair to a network interface card (NIC) of an instance. Administrators can use this feature for various purposes, most notably configuring HA (High Availability).

---
id: "change-network-config"
title: "Change network config"
description: "Guide to changing the static IP address after editing NIC configuration on FPT Smart Cloud."
sidebar_label: "Change network config"
sidebar_position: 1
---

# Change network config

When you edit a NIC configuration on FPT Smart Cloud, the IP address inside the instance does not update automatically. You need to manually configure the new static IP directly in the operating system.

## Overview

Common reasons to set a static IP include configuring a fixed server address or controlling IP ranges within an internal network.

:::caution
Setting a static IP is an advanced networking operation that requires basic knowledge of TCP/IP. Incorrect configuration may cause network conflicts or loss of connectivity.
:::

This guide covers how to update the static IP on three common operating systems:

- Ubuntu Server
- Windows Server
- CentOS

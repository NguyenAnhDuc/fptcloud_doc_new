---
id: "load-balancer"
title: "Load Balancer"
description: "Overview of the FPT Cloud Load Balancer service — distribute traffic optimally across your backend servers."
sidebar_label: "Load Balancer"
sidebar_position: 1
---

# Load Balancer

FPT Cloud Load Balancer distributes incoming traffic across a group of backend servers (web servers, web apps, containers, etc.) to maximise speed and performance.

Once configured, FPT Load Balancer automatically routes traffic and distributes requests evenly across servers in the pool. It continuously monitors server health and automatically redirects traffic away from any server that becomes unavailable.

## Things to consider before creating a Load Balancer

- **Number of servers:** Calculate your workload to choose the right number of backend servers.
- **Load Balancer package:** FPT Cloud offers packages from Basic to Premium, each with different maximum capacity specifications.
- **Geographic location (Region):** Choose the Region closest to your traffic source to optimise speed.
- **Load balancing algorithm:** FPT provides Round Robin and Least Connections. Understand the trade-offs of each to choose the most suitable one.

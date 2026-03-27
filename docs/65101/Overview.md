---
id: "Overview"
title: "Overview"
description: "Load Balancing is the process of distributing traffic across a group of virtual servers or backend resources (web server"
sidebar_label: "Overview"
sidebar_position: 2
---

# Overview

### Introduction to Load Balancer service on FPT Cloud.
Load Balancing is the process of distributing traffic across a group of virtual servers or backend resources (web servers, web apps, containers...) in the most optimal way.
Modern websites or web apps may need to serve hundreds of thousands of customers per day, with millions of concurrent requests. Relying on a single server alone can hardly handle this entire workload. The best solution is to scale the system across multiple servers working together.
Once created and configured, FPT Load Balancer will automatically route traffic and evenly distribute it to the servers in the group, ensuring all requests are optimized for speed and processing efficiency. FPT Load Balancer will also continuously check the availability of the servers; in case one server fails and becomes unreachable, the controller will automatically redirect all traffic to the remaining servers until the faulty one is back online.
Thanks to these characteristics, your service is always guaranteed in terms of performance, processing speed, and system availability at the highest level.
This article will provide you with information about what you need to know before creating an FPT Load Balancer, and how to create and manage it on the FPT Portal.
### Important notes before creating a Load Balancer.
  * **Number of servers:** You need to calculate the workload that the servers will handle to determine the appropriate number of servers.
  * **Load Balancer controller size:** Currently, **FPT Cloud** offers various packages from **Basic** to **Premium**. Each package supports different maximum specifications. You can contact support staff for advice on the most suitable package.
  * **Geographical location of virtual machines:** The geographical location (**Region**) may affect the transmission speed from the internet to the virtual servers during use. You should select the Region closest to your traffic source to optimize speed.
  * **Load balancing algorithm:** FPT currently provides algorithms: **Round Robin** , **Least Connections** and **Source IP**. You should learn the operating mechanism, advantages, and disadvantages of these methods to choose the most optimal algorithm for your web/app.
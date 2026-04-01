---
id: "faqs-mfke"
title: "FAQs"
description: "Currently, FPT Cloud supports 02 Regions: HAN (Hanoi) and SGN (Saigon/HCM). M-FKE provides support in both of these regi"
sidebar_label: "FAQs"
sidebar_position: 28
---

# FAQs

### Which regions does M-FKE support?
Currently, FPT Cloud supports 02 Regions: HAN (Hanoi) and SGN (Saigon/HCM). M-FKE provides support in both of these regions.
### Can an M-FKE cluster span multiple regions?
M-FKE does not support a cluster running across multiple regions. You can create a cluster in each region for the same application to implement BC&DR (Business Continuity and Disaster Recovery).
### Does M-FKE support multiple VM configurations within a cluster?
M-FKE supports multiple VM configurations within a cluster by using worker groups, each worker group can have a different configuration. Worker Nodes within the same worker group have the same configuration (CPU, RAM, DISK).
### How many Worker Nodes does M-FKE support in a cluster?
M-FKE defaults to a maximum limit of 100 Worker Nodes per Worker Group and 10 Worker Groups per Cluster. You need to contact FPT Cloud to increase the Worker Nodes limit if needed.
### Is M-FKE compatible with my existing Kubernetes applications?
M-FKE uses native Kubernetes, making it fully compatible with Kubernetes platforms on other clouds such as AWS, Azure, GCP, DO, as well as Kubernetes clusters you install on your infrastructure. This facilitates easy migration of applications between FPT Cloud, your data center, and other clouds.
### How can I expose my application outside the cluster?
There are several ways to expose your application outside the cluster for customer use. One simple method is to use the [Load Balancer Services](../managed-fpt-kubernetes-engine/index.md) as instructed.
### How can I monitor performance and configure alerts for the cluster?
FPT Cloud provides the FMON product to help you monitor performance and configure alerts for the Kubernetes cluster. Additionally, FMON offers logging and tracing for easy integration with FKE.

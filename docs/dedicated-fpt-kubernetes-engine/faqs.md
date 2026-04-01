---
id: "faqs"
title: "FAQs"
description: "Currently, FPT Cloud supports 02 Regions: HAN (Hanoi) and SGN (Saigon/HCM). D-FKE provides support in both of these regi"
sidebar_label: "FAQs"
sidebar_position: 25
pagination_next: null
---

# FAQs

### Which regions does D-FKE support?
Currently, FPT Cloud supports 02 Regions: HAN (Hanoi) and SGN (Saigon/HCM). D-FKE provides support in both of these regions.
### Can an D-FKE cluster span multiple regions?
D-FKE does not support a cluster running across multiple regions. You can create a cluster in each region for the same application to implement BC&DR (Business Continuity and Disaster Recovery).
### Does D-FKE support multiple VM configurations within a cluster?
D-FKE currently does not support multiple VM configurations within a cluster. Worker Nodes must have the same configuration (CPU, RAM, DISK), and Master Nodes must have the same configuration (CPU, RAM, DISK). You can increase Nodes configuration on the fly.
### How many Worker Nodes does D-FKE support in a cluster?
D-FKE defaults to a maximum limit of 100 Worker Nodes per Cluster. You need to contact FPT Cloud to increase the Worker Nodes limit if needed.
### Is D-FKE compatible with my existing Kubernetes applications?
D-FKE uses native Kubernetes, making it fully compatible with Kubernetes platforms on other clouds such as AWS, Azure, GCP, DO, as well as Kubernetes clusters you install on your infrastructure. This facilitates easy migration of applications between FPT Cloud, your data center, and other clouds.
### How can I expose my application outside the cluster?
There are several ways to expose your application outside the cluster for customer use. One simple method is to use the [Load Balancer Services](../dedicated-fpt-kubernetes-engine/index.md) as instructed.
### How can I monitor performance and configure alerts for the cluster?
FPT Cloud provides the FMON product to help you monitor performance and configure alerts for the Kubernetes cluster. Additionally, FMON offers logging and tracing for easy integration with FKE.
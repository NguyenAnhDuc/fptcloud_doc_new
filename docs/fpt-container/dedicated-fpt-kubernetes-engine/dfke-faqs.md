---
id: "dfke-faqs"
title: "FAQs"
description: "Frequently asked questions about the Dedicated FPT Kubernetes Engine service."
sidebar_label: "FAQs"
sidebar_position: "30"
---

# Frequently Asked Questions (FAQs)

**Which regions does D-FKE support?**
FPT Cloud currently supports 2 regions: HAN (Hanoi) and SGN (Saigon/HCM). D-FKE is available in both regions.

**Can a D-FKE cluster span multiple regions?**
D-FKE does not support running a single cluster across multiple regions. You can create a cluster in each region for the same application to implement BC&DR.

**Does D-FKE support multiple VM configurations within one cluster?**
D-FKE currently does not support multiple VM configurations within a single cluster. All Worker nodes share the same configuration (CPU, RAM, Disk), and all Master nodes share the same configuration (CPU, RAM, Disk). You can scale up the node configuration during operation.

**How many Worker nodes does D-FKE support per cluster?**
D-FKE defaults to a limit of 100 Worker nodes per cluster. Contact FPT Cloud to increase the Worker node limit if needed.

**Is D-FKE compatible with my existing Kubernetes applications?**
D-FKE uses native Kubernetes, so it is fully compatible with Kubernetes platforms on other clouds such as AWS, Azure, GCP, and DigitalOcean, as well as Kubernetes clusters you have installed on your own infrastructure. This makes it easy to migrate applications between FPT Cloud, your data center, and other clouds.

**How can I expose my application outside the cluster?**
Use Service type Load Balancer to expose your application publicly or privately. See the Service type Load Balancer guide for details.

**How can I monitor performance and configure alerts for the cluster?**
FPT Cloud provides the FMON product to help you monitor performance and configure alerts for the Kubernetes cluster. FMON also provides logging and tracing that integrates easily with FKE.

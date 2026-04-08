---
id: "tinh-nang-tang-cuong-bao-mat-mfke"
title: "Security enhancement features for M-FKE"
description: "Overview of the security enhancement features available in FPT Cloud Managed Kubernetes Engine."
sidebar_label: "Security enhancement features for M-FKE"
sidebar_position: "29"
---

# Security enhancement features for M-FKE

FPT Cloud Managed Kubernetes Engine (M-FKE) provides multiple security enhancement features for clusters.

Available security features:

- **[Benchmark Security](/docs/fpt-container/managed-fpt-kubernetes-engine/tutorials/mfke-security-enhancement/tinh-nang-benchmark-cluster)**: Evaluates worker node kubelet configuration against CIS (Center for Internet Security) standards.
- **[Runtime Security](/docs/fpt-container/managed-fpt-kubernetes-engine/tutorials/mfke-security-enhancement/tinh-nang-runtime-security-cluster)**: Detects anomalous behavior in Kubernetes clusters in real time using Falco. You can receive alerts via Telegram or Gmail.
- **[Workload Scan](/docs/fpt-container/managed-fpt-kubernetes-engine/tutorials/mfke-security-enhancement/tinh-nang-workload-scan)**: Scans for security vulnerabilities in container images, evaluates RBAC configuration, and generates configuration audit reports using Trivy.
- **[Audit Log](/docs/fpt-container/managed-fpt-kubernetes-engine/tutorials/mfke-security-enhancement/audit-log-vn)**: Records all API requests and operations sent to the kube-apiserver, supporting security analysis and compliance.

:::note
All security enhancement features are only available after the cluster is successfully created (status: Succeeded/Running).
:::

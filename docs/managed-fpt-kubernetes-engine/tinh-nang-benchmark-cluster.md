---
id: "tinh-nang-benchmark-cluster"
title: "Cluster Benchmark feature"
description: "How to use the Benchmark Security feature to assess Kubernetes cluster configuration against CIS standards."
sidebar_label: "Cluster Benchmark feature"
sidebar_position: "30"
---

# Cluster Benchmark feature

## 1. Overview of the Benchmark Security feature

To ensure information security for FPT Cloud Managed Kubernetes clusters, FPT Cloud provides a feature that allows administrators to benchmark kubelet configurations and settings on worker nodes against the standards proposed by the Center for Internet Security (CIS).

CIS Benchmarks are a comprehensive set of security configuration guidelines developed by the Center for Internet Security. These guidelines provide best practices for securing systems, services, and software.

Test cases are applied per Kubernetes version and have been adjusted to match FPT Cloud's kubelet configuration.

Each test case result can be one of three types: **Pass**, **Fail**, or **Warning**. Pass indicates the configuration satisfies the CIS test case. Fail indicates the configuration does not meet a high-importance test case. Warning indicates the configuration does not meet a test case of lower importance (optional to configure).

## 2. Using the feature on Unify Portal

**Note:** Security enhancement features for Managed Kubernetes Cluster are integrated after the cluster is successfully created (status: Succeeded/Running).

**A. Enable Benchmark Security:**

Go to FPT Cloud portal console.fptcloud.com, select **Kubernetes**, click on the cluster you want to benchmark, go to the **Security** tab, select the **Benchmark Security** tab, then enable it:
[![](/img/migrated/Picture1-7-dcd8247e.png)](/img/migrated/Picture1-7-dcd8247e.png)

After the benchmark job runs successfully, detailed results are displayed. You can re-run the benchmark to get the latest results or download the results to your machine.
[![](/img/migrated/Picture2-5-7bec9f13.png)](/img/migrated/Picture2-5-7bec9f13.png)

**B. Disable Benchmark Security:**

Go to FPT Cloud portal console.fptcloud.com, select Kubernetes, click on the cluster, go to the Security tab, select the Benchmark Security tab, then confirm to disable:
[![](/img/migrated/Picture3-5-f60fafac.png)](/img/migrated/Picture3-5-f60fafac.png)

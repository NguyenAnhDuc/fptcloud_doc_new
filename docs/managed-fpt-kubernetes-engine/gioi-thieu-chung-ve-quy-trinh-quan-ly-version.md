---
id: "gioi-thieu-chung-ve-quy-trinh-quan-ly-version"
title: "Version Management Overview"
description: "Overview of FPT Cloud's Kubernetes version management process and support lifecycle."
sidebar_label: "Version Management Overview"
sidebar_position: "26"
---

# Version Management Overview

* FPT Cloud releases and updates Kubernetes versions according to the standards of the Kubernetes Open Source Software (OSS) community.
  * The Kubernetes version format is x.y.z, where x is the major version (incremented from x.y to x+1.y), y is the minor version (Deprecated APIs are removed with each new minor version, incremented from 1.y to 1.y+1; for example, version 1.25 is the minor release following 1.24), and z is the patch release (bug fixes and security patches for a minor version are delivered via patch releases).
  * FPT Cloud supports managing the 4 most stable Kubernetes minor versions at any given time. The highest of these 4 versions is selected as the default version. These stable versions have been thoroughly tested and are ready for production use. Older versions are labeled as deprecated until the end-of-life date specified by FPT Cloud in the release notes.
  * FPT Cloud also supports new Kubernetes versions supported by the community under Kubernetes OSS. These new versions are tagged as Beta, currently being refined through internal testing and user feedback. Once ready for production, they are promoted from Beta to Stable or GA (Generally Available).
  * Older versions (end of standard support by both the Kubernetes community and FPT Cloud) will no longer receive technical support. New features related to Kubernetes fixes or new cloud provider capabilities will not be updated for end-of-life versions. Security vulnerabilities and risks will also not be patched or mitigated for these versions. Note: FPT Cloud will no longer support or guarantee SLA for end-of-life versions.
  * Kubernetes versions for standard clusters may differ from those for GPU clusters (typically the default version for GPU clusters is one minor version lower than for standard clusters).
  * Worker OS image versions are continuously patched to address and prevent security vulnerabilities. FPT Cloud currently uses Ubuntu 22.04 OS images for worker nodes in Kubernetes clusters.
  * Each version enters maintenance status 2 months before its end of standard support date, which is displayed through the portal interface. Clusters running versions approaching end-of-life will be notified 1 month in advance by email to the VPC owner user (once per day) so users can proactively upgrade or configure the auto upgrade version feature for automatic cluster upgrade when the version reaches its end of standard support date. If the user proactively upgrades during this period, the Kubernetes service will stop sending emails to the VPC owner.
  * For clusters configured with auto upgrade version, an email notification with the specific upgrade schedule will be sent to the VPC owner user 3 days before the automatic upgrade date.

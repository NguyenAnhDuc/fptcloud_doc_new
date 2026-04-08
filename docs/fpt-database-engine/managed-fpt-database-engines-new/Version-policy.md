---
id: "Version-policy"
title: "Version policy"
description: "FPT Database Engine applies a flexible version policy for the database engines it provides."
sidebar_label: "Version policy"
sidebar_position: 4
---

# Version policy

FPT Database Engine applies a flexible version policy for the database engines it provides, in order to ensure:

- The system always runs on stable and supported versions.
- Users are informed about the release schedule and End of Support (EOS) date for each version so they can plan accordingly.

### General principles

FPT Database Engine applies the following key principles in managing database engine versions:

- Supports multiple versions simultaneously for each database engine type, allowing users to choose the version that best suits their operational needs.
- Continuously updates and adds new versions released by the development community to improve features, performance, and security.
- Does not support automatic upgrades between major versions. Users must manually migrate data to ensure integrity.

### Version structure

FPT Database Engine follows the versioning convention defined by each database engine's development community. The version structure typically includes two main components: Major Version and Minor Version:

| Component | Description |
| --- | --- |
| Major version | Major architectural or feature changes, may not be backward compatible. Example: PostgreSQL 14 or MySQL 8.0 |
| Minor version | Minor updates, bug fixes, or security patches that are backward compatible. Example: MySQL 8.0.25 |

Users can see the exact version currently in use for their database directly on the Console Portal when viewing database details.

### Version lifecycle

Each database engine version follows a lifecycle consisting of the following stages:

| Stage | Description |
| --- | --- |
| **1. Preview (Beta)** | The version is in a testing phase, with no SLA commitment, and features may change or be discontinued at any time. Users can try, test, or use it for non-production environments. Not recommended for production deployment. Beta versions are displayed with a "Beta" tag on the Console Portal. |
| **2. General Availability (GA)** | The version is stable and ready for production environments, with official SLA support. |
| **3. Deprecated (Dep.)** | The version is not recommended for new deployments and is being prepared for end of support in the near future, but still operates for existing systems. This stage serves as **advance notice** of upcoming end of support. Deprecated versions are displayed with a "Deprecated" or "Dep." tag on the Console Portal. |
| **4. End of Support (EoS)** | The version is fully end-of-support. End-of-support versions are displayed with an "EoS" tag on the Console Portal. |

**Note:** Users should proactively upgrade before their current version moves to the Deprecated or EoS stage to ensure system safety and stability.

### Usage recommendations

| Scenario | Recommended action |
| --- | --- |
| **Database running a GA version** | Continue using normally. |
| **Database running a Beta version** | Monitor update announcements regularly, as the version may change or be removed without prior notice. |
| **Database running a Deprecated version** | Limit new deployments and plan an upgrade to a newer version, as this version is approaching end of support. |
| **Database running an EoS version** | Monitor and plan an early upgrade to ensure the system remains supported and stable. |

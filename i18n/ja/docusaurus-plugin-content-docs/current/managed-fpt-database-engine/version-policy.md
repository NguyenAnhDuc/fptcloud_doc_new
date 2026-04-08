---
id: "version-policy"
title: "Version Policy"
description: "FPT Database Engine applies a flexible database engine version policy for the supported database types to ensure that:"
sidebar_label: "Version Policy"
sidebar_position: "4"
draft: true
---

# Version Policy

FPT Database Engine applies a flexible database engine version policy for the supported database types to ensure that:
  * The system always operates on stable and supported versions.
  * Users are informed about the release schedule and End of Support (EOS) dates of each version, enabling them to plan their usage accordingly.

### Key principles
FPT Database Engine applies the following key principles in managing database engine versions:
  * Support for multiple versions simultaneously for each type of database engine, allowing users to choose the version that best fits their operational needs.
  * Continuous updates and addition of new versions released by the development community to improve features, performance, and security.
  * No automatic upgrades between major versions. Users must manually migrate data to ensure data integrity.

### Version Structure
FPT Database Engine follows the versioning convention established by the community of each database engine. The version structure typically consists of two components: Major version and Minor version.  
| Component  | Description  |  
| --- | --- |  
| Major version  | Significant changes in architecture or features, which may not be backward compatible. Example: PostgreSQL 14 or MySQL 8.0  |  
| Minor version  | Smaller updates, bug fixes, or security patches that are backward compatible. Example: MySQL 8.0.25   |  
Users can view the exact version they are using for their database directly on the Console Portal by checking the details of their database.

### Version Lifecycle
Each database engine version follows a lifecycle consisting of the following stages:  
| Stage  | Description  |  
| --- | --- |  
| **1. Preview (Beta)**  | The version is in the testing phase and not guaranteed with SLA. Features may change or be removed at any time. Users can try it for evaluation, testing, or non-production environments. It is not recommended for production use.   
On Console Portal, Beta versions are displayed with the "Beta" tag.  |  
| **2. General Availability (GA)**  | The version is stable, production-ready, and officially supported with SLA.  |  
| **3. Deprecated (Dep.)**  | The version is no longer recommended for new deployments and is preparing to reach End of Support (EoS) soon. It still works for existing systems. This stage signals that support will end.   
On Console Portal, deprecated versions are displayed with the "Deprecated" or "Dep." tag.  |  
| **4. End of Support (EoS)**  | The version is no longer supported.   
On Console Portal, Beta versions are displayed with the "EoS" tag.  |  
**Note** : Users are advised to proactively upgrade before the current version reaches the Deprecated or EoS stage to ensure the system's security and stability.

### Recommendations  
| Scenario  | Recommended Action  |  
| --- | --- |  
| **Database running a GA version**  | Continue normal usage.  |  
| **Database running a Beta version**  | Regularly follow the update announcements, as the version may change or be removed without prior notice.  |  
| **Database running a Deprecated version**  | Avoid creating new instances/clusters and plan to upgrade to a newer supported version, as end-of-support is approaching with the current version.  |  
| **Database running a GA version**  | Monitor and plan for an upgrade to ensure continued support and stability.  |

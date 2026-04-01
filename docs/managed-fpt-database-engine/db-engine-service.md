---
id: "db-engine-service"
title: "Database Engine service overview"
description: "The **FPT Database Engine Service Management** functions group plays a critical role in controlling database service ava"
sidebar_label: "Database Engine service overview"
sidebar_position: 16
---

# Database Engine service overview

The **FPT Database Engine Service Management** functions group plays a critical role in controlling database service availability in the FPT cloud. It allows administrators to activate or deactivate the FPT Database Engine Service offering within a VPC scope. Operations in this group impact the overall availability of database service and should only be granted to high-privilege roles such as Tenant Admin or Cloud Platform Admin. Proper role assignment ensures security, stability, and compliance for the DBaaS system.
**Required Permissions:**  
| Permission  | Action Type  | Description  |  
| --- | --- | --- |  
| manageDatabase:ProvisionBackend  | Create  | Allows activating the FPT Database Engine service within a VPC.  |  
| manageDatabase:DeactiveBackend  | Delete  | Allows deactivating the FPT Database Engine service within a VPC.  |  
**Enable / Disable FPT Database Engine Service:**
To manage the FPT Database Engine service, please refer to the detailed instructions in [Activate FPT Database Engine Service](../managed-fpt-database-engine/index.md) and [Diactivate FPT Database Engine Service](../managed-fpt-database-engine/index.md).
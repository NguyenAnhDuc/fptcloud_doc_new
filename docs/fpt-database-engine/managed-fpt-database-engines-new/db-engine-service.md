---
id: "db-engine-service"
title: "FPT Database Engine service management"
description: "The FPT Database Engine service management group plays an important role in controlling database service availability in the FPT Cloud environment."
sidebar_label: "FPT Database Engine service management"
sidebar_position: 16
---

# FPT Database Engine service management

The **FPT Database Engine service management** function group plays an important role in controlling database service availability in the FPT Cloud environment, allowing administrators to activate or deactivate the FPT Database Engine service within the VPC scope. Operations in this group affect the overall database availability, and therefore should only be granted to high-level administrative roles such as Tenant Admin or Cloud Platform Admin. Proper permission assignment helps ensure the safety, stability, and compliance of the DBaaS system.

**Required permissions:**

| Permission name | Operation type | Description |
| --- | --- | --- |
| manageDatabase:ProvisionBackend | Create | Permission to activate the FPT Database Engine service in the VPC. |
| manageDatabase:DeactiveBackend | Delete | Permission to deactivate the FPT Database Engine service in the VPC. |

**Activating / Deactivating the FPT Database Engine service:**

To manage the FPT Database Engine service, please refer to the detailed instructions in the [Activate FPT Database Engine](/docs/en/fpt-database-engine/managed-fpt-database-engines-new/)/ and [Deactivate FPT Database Engine](/docs/en/fpt-database-engine/managed-fpt-database-engines-new/)/ sections.

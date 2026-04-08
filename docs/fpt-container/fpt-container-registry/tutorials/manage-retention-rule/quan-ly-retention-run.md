---
id: "quan-ly-retention-run"
title: "Manage retention runs"
description: "Run, inspect, and manage retention rule executions."
sidebar_label: "Manage retention runs"
sidebar_position: "17"
---

# Manage retention runs

A retention run is the execution history of retention rules. FPT Cloud allows you to run rules manually, perform a dry run to verify before applying, abort an in-progress run, and view detailed logs.

## Run manually (Run now)

1. On the **FPT Portal** menu, select **Container Registry** > **Policy** > **RUN NOW**.

   [![RUN NOW button](/img/migrated/Picture48-1-1310d2d8.png)](/img/migrated/Picture48-1-1310d2d8.png)

2. Click **OK** to confirm running the retention.

   [![Confirm RUN NOW](/img/migrated/Picture49-1-ad9995a4.png)](/img/migrated/Picture49-1-ad9995a4.png)

3. Verify the result after running.

   [![Result after retention run](/img/migrated/Picture50-1-67a91903.png)](/img/migrated/Picture50-1-67a91903.png)

## Dry run

A dry run checks the rules without actually deleting any images, letting you verify your configuration before applying.

1. On the **FPT Portal** menu, select **Container Registry** > **Policy** > **DRY RUN**.

   [![DRY RUN button](/img/migrated/Picture51-1-6b16d900.png)](/img/migrated/Picture51-1-6b16d900.png)

2. Verify the dry run result. No images are actually deleted.

   [![Result after DRY RUN](/img/migrated/Picture52-1-b8c3c76a.png)](/img/migrated/Picture52-1-b8c3c76a.png)

## Abort an in-progress retention run

1. On the **FPT Portal** menu, select **Container Registry** > **Policy** > select the **Running** retention run > **ABORT**.

   [![ABORT button on running retention](/img/migrated/Picture53-1-aedc2cf2.png)](/img/migrated/Picture53-1-aedc2cf2.png)

2. Click **OK** to confirm the abort.

   [![Confirm Abort](/img/migrated/Picture54-a4f9fc84.png)](/img/migrated/Picture54-a4f9fc84.png)

3. Verify the result after aborting.

   [![Result after Abort](/img/migrated/Picture55-6ea6d35a.png)](/img/migrated/Picture55-6ea6d35a.png)

## View the retention run list

On the **FPT Portal** menu, select **Container Registry** > **Policy** to view the list of all runs.

[![Retention run list](/img/migrated/Picture56-d461b01d.png)](/img/migrated/Picture56-d461b01d.png)

## View the log of a retention run

1. On the **FPT Portal** menu, select **Container Registry** > **Policy** > click a retention run to view its details.

   [![Retention run details](/img/migrated/Picture57-cd40bdbd.png)](/img/migrated/Picture57-cd40bdbd.png)

2. Review the log for each repository in that run.

   [![Detailed log of retention run](/img/migrated/Picture58-6d27606a.png)](/img/migrated/Picture58-6d27606a.png)

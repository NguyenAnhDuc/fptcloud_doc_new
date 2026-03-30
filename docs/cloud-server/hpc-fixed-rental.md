---
id: "hpc-fixed-rental"
title: "Set Fixed Rental Period"
description: "Save costs by setting a Fixed Rental period for GPU Server on HPC Portal."
sidebar_label: "Set Fixed Rental Period"
sidebar_position: 26
---

# Set Fixed Rental Period

Fixed Rental lets you save significantly on costs when you need continuous GPU Server usage for long-term projects — compared to standard hourly rental.

## Discount Tiers

| Period | Savings |
|--------|---------|
| **6 hours** | 6% compared to hourly rate |
| **Day** (1 day) | 8% compared to hourly rate |
| **Week** (1 week) | 10% compared to hourly rate |
| **Month** (1 month) | 20% compared to hourly rate |

:::note
Fixed Rental does not accumulate machine uptime — the system charges for and defaults the machine to run continuously for the selected period.
:::

:::tip
Example: Your project needs 8 hours. Select a 6-hour Fixed Rental and configure **Keep machine running** to continue for the remaining 2 hours — the most cost-optimized approach.
:::

## Set Up Fixed Rental

1. Go to **Hosts** → **Fixed rental** to open the setup dialog.
2. Select at least 1 image, configure the **Rental period** and **Number of machines**, review the discount amount, and click **Confirm**.

## Action After Expiry

Select **Image** → **Setting** and choose:

- **Keep the machine running**: After expiry, the machine continues running and is billed at the hourly rate.
- **Shutdown machine**: The system automatically shuts down the machine when the period expires.

## Renewal and Termination

- **Renew**: Select **Image** → **Renewal** and configure as you did during initial setup.
- **Terminate**: Select **Image** → **Deactivate**.

## Next Steps

- [Snapshot Backup](./hpc-snapshot-backup.md)

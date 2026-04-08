---
id: "view-bills"
title: "View bills by billing period"
description: "How to view billing reconciliation data by period on FPT Cloud Portal."
sidebar_label: "View bills by billing period"
sidebar_position: 1
---

# View bills by billing period

:::note
To view bills, you must be logged in with the Tenant Owner role or a role that has **view billing** permission. See [Billing permissions](/docs/billing/bills/quick-starts/billing-permission/) for setup instructions.
:::

Follow these steps:

1. In the menu bar, select **Billing** > **Bills**, then select the billing period, contract, and invoice you want to view.

   :::note
   If the Project/VPC resources in a Tenant are split into multiple billing groups for separate payment, the system displays one reconciliation entry per billing group.
   :::

   [![Select billing period](/img/migrated/image-1744088467596-ab857222.png)](/img/migrated/image-1744088467596-ab857222.png)

2. On the reconciliation screen, you can review the following information:

   - **Account name** – Company name
   - **Tax code** – Tax identification number
   - **Company address** – Registered company address
   - **Billing period** – Start and end dates of the billing period
   - **Last updated** – Timestamp of the most recent data update
   - **Invoice status** – One of three states:
     - **Draft** – Preliminary reconciliation data, not yet finalized for invoicing
     - **Invoiced** – Reconciliation confirmed and invoice issued successfully
     - **Cancelled** – Reconciliation cancelled, no invoice issued
   - **Grand total** – Total amount before VAT at the time of the most recent data update

3. Select the [Charges by service](/docs/billing/bills/quick-starts/view-bill-charges-by-service/) tab to view a service-level breakdown, or the [Charges by resource](/docs/billing/bills/quick-starts/view-bill-charges-by-resource/) tab to view a resource-level breakdown.

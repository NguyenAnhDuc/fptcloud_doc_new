---
id: "initiating-a-budget-alert"
title: "Create a Budget Alert"
description: "Guide to creating a Budget Alert for proactive budget monitoring on FPT Cloud Portal."
sidebar_label: "Create a Budget Alert"
sidebar_position: 2
---

# Create a Budget Alert

Budget Alert notifies you when cloud costs reach a defined budget threshold — reducing the risk of overspending and giving you proactive cost control.

## Prerequisites

- An FPT Cloud account with access to **Billing**.
- Signed in to FPT Cloud Portal.

## Create a Budget Alert

1. Select **Billing** → **Budget Alert**. The system displays the list of existing Budget Alerts.

   ![Budget Alert list](/img/migrated/image-1722238229739-f6ec0b8c.png)

2. Click **Create Budget Alert**. The system navigates to the information entry screen.

   ![Create Budget Alert button](/img/migrated/image-1722238258978-89fcec91.png)

3. Fill in the **Basic Information**:
   - **Budget Name** (required): name of the Budget Alert, up to 50 characters, including uppercase letters, numbers, hyphens, and underscores.
   - **Budget period** (required):
     - Select **Monthly** to calculate costs and trigger alerts by month (from 00:00 on the 1st to 23:59 on the last day of the month).
     - Select **Daily** to calculate costs and trigger alerts by day (from 00:00 to 23:59 each day).
   - **Budget amount** (required): total budget for one day or one month (default currency is VND).
   - **Budget scope** (required):
     - Select **All services** to calculate the alert threshold based on actual costs across all services and resources in the current tenant.
     - Select **Filter specific resources** to calculate the alert threshold for specific services filtered by VPC or tag.

   :::note
   You can select multiple VPCs and tags. Actual cost is calculated from usage of services that belong simultaneously to all selected VPCs and tags. Services belonging to only one VPC or tag but not the others are excluded.
   :::

   ![Basic Information form](/img/migrated/image-1722238275706-df16f772.png)

4. Click **Next**. The system navigates to the **Alert thresholds & Create** screen:
   - **Threshold number** (required): enter the alert threshold value.
   - **Threshold unit** (required):
     - Select **Percent (%)** — the system alerts when actual cost is >= x% of the Budget amount (x = threshold number).
     - Select **Vietnam dong (d)** — the system alerts when actual cost is >= the threshold number amount.
   - **Severity** (required): select the alert level — **Warning** or **Critical**.
   - **Notification title** (required): subject of the alert email, up to 255 characters (excluding single quotes, double quotes, and slashes).
   - **Description** (required): body of the alert email, up to 500 characters.
   - **Email recipients** (required): enter the email addresses to receive alerts (multiple addresses allowed).
   - **Add Alert Threshold** (optional): create additional alert thresholds for the same budget.

   :::note
   Each alert threshold sends a maximum of 3 notifications.
   :::

   ![Alert thresholds form](/img/migrated/image-1722238293122-55c558a2.png)

   ![Alert threshold configuration example](/img/migrated/image-1722238298494-77e57e31.png)

5. Click **Create** to save the Budget Alert, or click **Previous** to return to the Basic Information screen.

   ![Confirm Budget Alert creation](/img/migrated/image-1722238751599-265e93b0.png)

The new Budget Alert appears in the list.

---
id: "credit-history"
title: "Credit History"
description: "The **Credit History** tab lets you track all **balance changes** , including **top-ups, voucher credits, and service us"
sidebar_label: "Credit History"
sidebar_position: 6
---

# Credit History

The **Credit History** tab lets you track all **balance changes** , including **top-ups, voucher credits, and service usage.** [![Alt text](/img/migrated/image2025-6-30_14-3-28-f7bf8b4c.png)](/img/migrated/image2025-6-30_14-3-28-f7bf8b4c.png) [![Alt text](/img/migrated/image2025-6-30_14-4-25-da425d96.png)](/img/migrated/image2025-6-30_14-4-25-da425d96.png)
## Table Fields Explanation  
| Field  | Description  |  
| --- | --- |  
| **Date**  | Date and time the transaction occurred.  |  
| **Service**  | Service being used in the transaction type:  
• **Top-up** : Payment Gateway  
• **Voucher** : System (of FPT AI Factory)  
• **Charged** : AI Factory service that credits were spent (i.e., Model Fine-tuning, GPU Container, or AI Inference)  |  
| **Source**  | Based on service types  
• **Top-up transaction** : Name of the payment gateway that processed the payment transaction  
• **Voucher transaction** : Voucher  
• **Charged transaction** : The resource name of FPT AI Factory service has used credits  |  
| **Description**  | Detailed information about the transaction, such as service package name, usage duration, etc.  |  
| **Code**  |  **Only appears in the Balance type "Voucher credits"**  
Voucher code applied to the transaction.  |  
| **Status**  | Status of Transaction  
• **Success** : Completed transactions.  
• **Failed** : Transactions that did not go through.  
• **Processed** : Transactions are currently being handled.  |  
| **Amount**  | Credit change:  
• A **positive amount (+)** indicates credits added  
• A **negative amount (-)** indicates credits deducted (service usage or failed reversals).  |  
## Table Filter
Filter allows users to apply multiple filters at the same time to quickly find specific transactions.
  * **Balance Type:**
    * **Top-up Credits (Default)** : View only top-up transactions.
    * **Voucher Credits** : View only voucher transactions.
  * Select multiple options of **Service, Status**
  * **Date Range** : Set the time frame for the records you want to view using **Start Date** and **End Date**.

## Export records to Excel
Please note that the **transactions shown in the Credit History tab are limited** and may not include your full transaction history. The **Export Excel** feature allows you to quickly **download all your transaction** records for easier tracking, reporting, or auditing.
Follow the instructions below:
  1. Navigate to the **Credit History** tab.
  2. Select the desired filter:
     * **Top-up Credits** : To export all top-up transactions currently displayed.
     * **Voucher Credits** : To export all voucher transactions currently displayed.
  3. Click the **Export Excel** button at the top right of the table.
  4. An Excel file will be **automatically downloaded** to your device.
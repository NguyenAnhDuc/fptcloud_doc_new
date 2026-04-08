---
id: "step-by-step"
title: "Step By Step"
description: "Step By Step"
sidebar_label: "Step By Step"
sidebar_position: 13
---

# Step By Step

After signing in to the FPT AI Factory Portal at at <https://ai.fptcloud.com/> or <https://ai.fptcloud.jp/>, follow the instruction below:

### Step 1: Add credit to account
  * Select **Billing** in the Sidemenu
  * Click **Add Credit** button and enter an amount and payment information to complete. Or, if you have a voucher from FPT, apply your valid code in the **Voucher code** to redeem credits.
  * **Note:**
    * To start a fine-tuning job, you must maintain a minimum balance = _number of nodes × number of GPUs × cost per block._
    * If your balance falls below 0, the fine-tuning job will be canceled. After topping up, you will need to restart the job from the beginning.

### Step 2: Create pipeline
  * Select **Model Fine-tuning** in the Sidemenu
  * Click the button **Create New Pipeline** and configure pipeline deployment.

### Step 3: Manage pipeline
  * The pipeline list created successfully, displays the **Fine-tuning Pipelines** page.
  * In the **Actions** column, you can **start** , **cancel** , **edit** and **delete pipelines** to manage effectively.
  * Click **Pipeline name** to access **Execution history** page, and click **Execution name** to access **Execution details** page.
  * Access **Execution history** , navigate to tab **Audit logs** to view users and activities in the pipeline.

### Step 4: Monitor and Evaluate
  * Access **Execution details** , navigate to tab **Model Metrics** to monitor during the fine-tuning process and evaluate model after this process.
  * Navigate to tab **Logs** to track fine-tuning processes, events, and system outputs in real time.

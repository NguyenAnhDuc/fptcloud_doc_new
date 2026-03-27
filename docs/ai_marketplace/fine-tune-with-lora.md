---
id: "fine-tune-with-lora"
title: "Fine Tune With Lora"
description: "[![Alt text](https://fptcloud.com/wp-content/uploads/2025/02/Finetune.png)](https://fptcloud.com/wp-content/uploads/2025"
sidebar_label: "Fine Tune With Lora"
sidebar_position: 7
---

# Fine Tune With Lora

### How to create a Fine-tuning job with LoRA?
[![Alt text](https://fptcloud.com/wp-content/uploads/2025/02/Finetune.png)](https://fptcloud.com/wp-content/uploads/2025/02/Finetune.png)
To fine-tune a model with LoRA, please follow the instructions below:
#### Notes
  * You must log in before starting a fine-tune job. 
  * Ensure you have enough balance (credit). 
  * At least one base model must be available for fine-tuning. 

#### Steps
  1. **Go to the Fine-tuning Jobs page** and click **+ Fine-tune model**. 
  2. In the pop-up, enter the **Name** of your fine-tuning job. 
     * Validation: Required, max 100 characters, supports Unicode letters, digits, `-`, `_`, `.`

[![Alt text](https://fptcloud.com/wp-content/uploads/2025/02/pop-up-fine-tune.png)](https://fptcloud.com/wp-content/uploads/2025/02/pop-up-fine-tune.png)
  3. **Select a Base model** from the dropdown list. 
     * Examples: `gemma-3-27b-it`, `Qwen3-4B-Instruct-2507`, `Llama-3.3-70B-Instruct`
  4. **Select dataset format** from the dropdown list: Alpaca/ ShareGPT/ ShareGPT_Image
  5. **Upload your Training data file**. 
     * Supported formats: CSV, JSON, JSONL, ZIP, Parquet (<100MB). 
  6. _(Optional)_ **Upload Validation data**. 

[![Alt text](https://fptcloud.com/wp-content/uploads/2025/02/pop-up2.png)](https://fptcloud.com/wp-content/uploads/2025/02/pop-up2.png)
  7. _(Optional)_ **Configure hyperparameters** : 
     * **Learning rate:** Float, `1e-6 → 1e-4` (e.g., `0.00001`) 
     * **Number of epochs:** Integer `1–20` (default = `5`) 
  8. Click **Create** to start the fine-tuning job. 
     * The job will appear in the table with status **Running**. 
> **Note:** Fine-tuning with LoRA usually takes only a few minutes. 

* * *
### How to manage Fine-tuning jobs?
On the **Fine-tuning Jobs** page, you can:
  * **View detail:** Open the pipeline detail in AI Studio. 
  * **Deploy model:** Once training is completed, deploy the LoRA model. 
  * **Cancel job:** Cancel a running job (requires confirmation). 
  * **Delete job:** Permanently delete a job (requires confirmation). 

#### Status badges
  * **Running** (yellow) 
  * **Succeeded** (green) 
  * **Failed** (red) 
  * **Canceled** (gray)
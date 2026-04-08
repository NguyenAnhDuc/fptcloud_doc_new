---
id: "fine-tune-with-lora"
title: "Fine-tune with LoRA"
description: "Learn how to create and manage fine-tuning jobs using LoRA on AI Marketplace."
sidebar_label: "Fine-tune with LoRA"
sidebar_position: 7
---

# Fine-tune with LoRA

[![Fine-tuning workflow diagram showing data upload, training, and deployment stages](https://fptcloud.com/wp-content/uploads/2025/02/Finetune.png)](https://fptcloud.com/wp-content/uploads/2025/02/Finetune.png)

## How to create a fine-tuning job with LoRA?

To fine-tune a model with LoRA, follow the instructions below.

:::note
- You must log in before starting a fine-tune job.
- Ensure you have enough balance (credit).
- At least one base model must be available for fine-tuning.
:::

### Steps

1. **Go to the Fine-tuning Jobs page** and click **+ Fine-tune model**.
2. In the pop-up, enter the **Name** of your fine-tuning job.
   - Validation: required, max 100 characters, supports Unicode letters, digits, `-`, `_`, `.`

[![Fine-tune job creation pop-up with name and base model fields](https://fptcloud.com/wp-content/uploads/2025/02/pop-up-fine-tune.png)](https://fptcloud.com/wp-content/uploads/2025/02/pop-up-fine-tune.png)

3. **Select a base model** from the dropdown list.
   - Examples: `gemma-3-27b-it`, `Qwen3-4B-Instruct-2507`, `Llama-3.3-70B-Instruct`
4. **Select dataset format** from the dropdown list: Alpaca / ShareGPT / ShareGPT_Image.
5. **Upload your training data file**.
   - Supported formats: CSV, JSON, JSONL, ZIP, Parquet (< 100 MB).
6. _(Optional)_ **Upload validation data**.

[![Fine-tune job pop-up showing hyperparameter configuration fields](https://fptcloud.com/wp-content/uploads/2025/02/pop-up2.png)](https://fptcloud.com/wp-content/uploads/2025/02/pop-up2.png)

7. _(Optional)_ **Configure hyperparameters**:
   - **Learning rate:** float, `1e-6 → 1e-4` (e.g., `0.00001`)
   - **Number of epochs:** integer `1–20` (default = `5`)
8. Click **Create** to start the fine-tuning job.
   - The job will appear in the table with status **Running**.

:::tip
Fine-tuning with LoRA usually takes only a few minutes.
:::

---

## How to manage fine-tuning jobs?

On the **Fine-tuning Jobs** page, you can:

- **View detail** — open the pipeline detail in AI Studio.
- **Deploy model** — once training is completed, deploy the LoRA model.
- **Cancel job** — cancel a running job (requires confirmation).
- **Delete job** — permanently delete a job (requires confirmation).

### Status badges

- **Running** (yellow)
- **Succeeded** (green)
- **Failed** (red)
- **Canceled** (gray)

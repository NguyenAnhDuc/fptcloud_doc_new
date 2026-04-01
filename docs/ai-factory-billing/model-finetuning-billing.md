---
id: "model-finetuning-billing"
title: "Model Fine-Tuning billing"
description: "| **Billing Logic**  | **Minimum billable usage**  | **Time to charge**  |"
sidebar_label: "Model Fine-Tuning billing"
sidebar_position: 12
---

# Model Fine-Tuning billing

| **Billing Logic**  | **Minimum billable usage**  | **Time to charge**  |  
| --- | --- | --- |  
| - Based on the usage duration of a pipeline   
- Remaining unbilled usage will be rounded up to the nearest 15 minutes  | 15 minutes  | Usage ≥ 1/4 GPU-hour  |  
**Billing Equation:**
  * **Usage duration** : Calculated in GPU-hours (rounded up to the nearest 15-minute increment)
  * **GPU** : Number of GPUs used
  * **Cost** : `Usage time (hours) × GPU count × item price from pricing table`

**Example:**
> You use **1 GPU NVIDIA H100 SXM5** priced at **$5.5/GPU-hour** to train model Qwen/Qwen3-32B for **8 minutes**
  * Usage duration: 8 mins → rounded up to 15 mins (0.25 GPU-hour)
  * GPU: 1
  * Cost: `$5.5 × 1 GPU × 0.25 GPU-hour = $1.375`

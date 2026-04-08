---
id: "set-up-infrastructure"
title: "Set Up Infrastructure"
description: "We support both single-node and multi-node configurations, with a maximum of 16 nodes:"
sidebar_label: "Set Up Infrastructure"
sidebar_position: 25
---

# Set Up Infrastructure

We support both single-node and multi-node configurations, with a maximum of 16 nodes:
[![Alt text](https://fptcloud.com/wp-content/uploads/2025/02/Infrastructure.png)](https://fptcloud.com/wp-content/uploads/2025/02/Infrastructure.png)
We recommend you scalable the right infrastructure below:
  * Number of GPUs depends on the model size:
    * **< 1B parameters**: 1 GPU (2GB VRAM) is sufficient
    * **7B parameters** : 2-4 GPUs (40GB VRAM each)
    * **13B parameters** : 4-8 GPUs recommended
    * **30B+ parameters** : Requires 8+ GPUs and multi-node setup
  * When to use single-node or multi-node:
    * For small to medium models (up to 13B), a **single-node** with multiple GPUs is enough
    * For large models (30B+), **multi-node** setups are recommended for better memory and performance
  * The minimum GPU memory required:
    * At least 24GB per GPU for standard fine-tuning.
    * You can fine-tune on GPUs with 8-16GB VRAM using LoRA or QLoRA methods. 

**Example:**
Model: Llama-3.1-8B-Instruct
  * Training type: Full
    * Number of GPUs: can fit into 2 GPUs (nearly 99% usage) -> 4 GPUs for more consistent runtime
    * Distributed backend: DeepSeed
    * ZeRO stage: 3
    * Batch size per device: 1
    * All other parameters can be left as default
  * Training type: LoRA
    * Number of GPUs: can fit into 1 GPU
    * LoRA rank: 16
    * Batch size per device: 1
    * All other parameters can be left as default
  * To calculate the most suitable training configuration, you can refer here: <https://rahulschand.github.io/gpu_poor/> (overhead 10-20%)

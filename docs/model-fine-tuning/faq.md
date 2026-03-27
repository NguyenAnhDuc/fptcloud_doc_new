---
id: "faq"
title: "Faq"
description: "Model Fine-tuning is the process of retraining a base language model on a specialized dataset so that it performs better"
sidebar_label: "Faq"
sidebar_position: 35
---

# Faq

### 1. What is Model Fine-tuning?
Model Fine-tuning is the process of retraining a base language model on a specialized dataset so that it performs better in a specific domain or for a targeted use case.
### 2. Which model should I choose for fine-tuning?
  * Small models (<=1B parameters) --> for testing or light workloads
  * Medium models (7B-13B) --> balanced performance and cost
  * Large models (30B+) --> for complex tasks, usually requires multi-node setup
  * Instruction-tuned models are preferred if your task is prompt-response based

### 3. How long does fine-tuning take?
It depends on:
  * Model size (a few hours for small models, several days for very large ones)
  * Dataset size
  * Your hardware setup (hyperparameters & infrastructure)

Typically, it ranges from a few hours to several days.
### 4. What do your need to prepare before fine-tuning a model?
You'll need:
  * Strictly follow the expected dataset structure for the model you're fine-tuning. More details about Data sample, visit here: <https://fptcloud.com/en/documents/model-fine-tuning/?doc=select-dataset-format>
  * Clean, diverse, and non-duplicated data.
  * A clear objective for fine-tuning (e.g., tech support, customer service, content writing, etc.). 

### 5. How many GPUs do you need to fine-tune a model?
It depends on the model size:
  * <1B parameters: 1 GPU (24 GB VRAM) is sufficient
  * 7B models: 2-4 GPUs (40 GB VRAM each)
  * 13B models: 4-8 GPUs recommended
  * 30B+ models: Requires 8+ GPUs and multi-node setup

### 6. Do I need multiple nodes or just one node?
  * For small to medium models (up to 13B), a single node with multiple GPUs is enough.
  * For larger models (30B+), multi-node setups are recommended for better memory and performance.

### 7. What is the minimum GPU memory required?
  * At least **24GB VRAM per GPU** for standard fine-tuning
  * Without **LoRA/QLoRA methods** , you can fine-tune on GPUs with 8-16GB VRAM

### 8. Does the size of my training dataset affect hardware needs?
Yes. Larger datasets require more VRAM, RAM, and storage.
  * Datasets < 20GB --> can use **Managed volume**
  * Datasets > 20GB --> require **Dedicated network volume**
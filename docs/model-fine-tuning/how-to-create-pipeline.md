---
id: "how-to-create-pipeline"
title: "How To Create Pipeline"
description: "* **Select Base Model:**"
sidebar_label: "How To Create Pipeline"
sidebar_position: 8
---

# How To Create Pipeline

### Step 1
  * **Select Base Model:**
    * Choose a foundational model from the Model Catalog (e.g., DeepSeek, Gemma, Llama, Qwen) or your Private Model repository. Models vary by size (from 0.5B to 72B parameters), type (LLM, VLM), and training stage (pre-trained or instruction-tuned).
  * **Select Trainer:**
    * Pick a training method such as SFT (Supervised Fine-tuning), DPO (Direct Preference Optimization) or Pre-training, depending on your task and data type.
  * **Select Volume:**
    * Select a storage type based on dataset size: Managed Volume for datasets under 20GiB or Dedicated Network Volume for larger datasets requiring manual provisioning.

### Step 2
  * **Select Dataset Format:**
    * Choose the appropriate format (Alpaca, ShareGPT, Corpus, etc.) based on your selected trainer.
  * **Select Dataset:**
    * Upload training and evaluation datasets or connect to Data Hub. Ensure data quality, consistency, and correct formatting to optimize model performance.

### Step 3
  * **Set up Hyperparameters:**
    * Configure training parameters like batch size, learning rate, epochs and optimizer settings. Advanced options are available for DPO, LoRA, and runtime optimization.
  * **Set up Infrastructure:**
    * Supported both single-node and multi-node, with up to 16 nodes

### Step 4
  * **Finish:**
    * Name your pipeline and optionally add a description. You'll receive email notifications when the pipeline succeeds or fails.

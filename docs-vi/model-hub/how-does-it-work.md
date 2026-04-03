---
id: "how-does-it-work"
title: "仕組み"
description: "* Model Catalog から model を検索します（例：NLP 向けの `'Llama-3.2-1B'`、ビジョン向けの `'Qwen2-VL-72B'`）。"
sidebar_label: "仕組み"
sidebar_position: "4"
---

# How does it work

### Step 1. Pick a Base Model from the Model Catalog
  * Search the model (e.g., `"Llama-3.2-1B"` for NLP, `"Qwen2-VL-72B"` for vision).
  * These models already learned general representations.

### Step 2. Launch Fine-tuning
  * Use selected model to start fine-tuning

### Step 3. Push Fine-tuned Model Back to the Hub
  * After training, you upload your fine-tuned model to the hub.
  * It gets a new version ID and can be shared with collaborators (or kept private).

### Step 4. Use Anywhere
  * Once fine-tuned, you can **download the model by SDK**.
  * This ensures reproducibility and easy deployment.

---
id: "how-does-it-work"
title: "How does it work"
description: "* Search the model (e.g., `'Llama-3.2-1B'` for NLP, `'Qwen2-VL-72B'` for vision)."
sidebar_label: "How does it work"
sidebar_position: 4
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
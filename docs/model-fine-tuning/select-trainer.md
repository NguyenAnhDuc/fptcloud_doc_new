---
id: "select-trainer"
title: "Select Trainer"
description: "Select the appropriate trainer - which guides the model you select for training."
sidebar_label: "Select Trainer"
sidebar_position: 10
---

# Select Trainer

Select the appropriate trainer - which guides the model you select for training. 
[![Alt text](https://fptcloud.com/wp-content/uploads/2025/02/Trainer.png)](https://fptcloud.com/wp-content/uploads/2025/02/Trainer.png)
We offer three trainers to optimize your models:   
| Trainer  | Definition  | How it works  | Best for  |  
| --- | --- | --- | --- |  
| **SFT (Supervised fine-tuning)**  | Foundational technique that trains your model on input-output pairs, teaching it to produce desired responses for specific inputs.  | - Provide examples of correct responses to prompts to guide the model’s behavior.  
  
- Often uses human-generated "ground truth" responses to show the model how it should respond.  | - Classification  
  
- Nuanced translation  
  
- Generating content in a specific format  
  
- Correcting instruction-following failures  |  
| **DPO (Direct preference optimization)**  | Trains models to prefer certain types of responses over others by learning from comparative feedback, without requiring a separate reward model.  | - Provide both correct and incorrect example responses for a prompt.  
  
- Indicate the correct response to help the model perform better.  | - Summarizing text, focusing on the right things  
  
- Generating chat messages with the right tone and style  |  
| **Pre-training**  | Initial training phase using large unlabeled data for language understanding.  | - Exposes the model to vast amounts of text data to learn grammar, facts, reasoning patterns, and world knowledge.  
  
- No labeled examples required.  | - Building foundational language understanding  
  
- Preparing models for downstream fine-tuning tasks  |

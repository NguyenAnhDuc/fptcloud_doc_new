---
id: "set-up-parameters"
title: "Set Up Parameters"
description: "Set Up Parameters — Model Testing上の機能。"
sidebar_label: "Set Up Parameters"
sidebar_position: "15"
---

# Set Up Parameters

[![Alt text](/img/migrated/Parameters-2439cc4b.png)](/img/migrated/Parameters-2439cc4b.png)
**Parameter** allows you to adjust the behavior of your model during testing. Below is a breakdown of each parameter and its purpose:  
| Name  | Description  | Type  | Supported value  |  
| --- | --- | --- | --- |  
| Log samples  | Model’s outputs, and the text fed into the model, will be saved  | bool  | True / False  |  
| Max tokens  | Maximum number of tokens to generate  | int  | (0, +∞)  |  
| No. of few-shot  | Sets the number of few-shot examples to place in context. Must be an integer.  | int  | [0, +∞)  |  
| Temperature  | The temperature for sampling  | float  | [0, +∞)  |  
| Repetition penalty  | Float that penalizes new tokens based on whether they appear in the prompt and the generated text so far.   
- Values > 1 encourage new tokens.   
- Values < 1 encourage repetition.  | float  | (0, 5)  |  
| Seed  | Random seed for reproducibility  | int  | [0, +∞)  |  
| Top-K  | Integer that controls the cumulative probability of the top tokens to consider. Set to -1 to consider all tokens.  | int  | -1 or (0, +∞)  |  
| Top-P  | Float that controls the cumulative probability of the top tokens to consider. Set to 1 to consider all tokens.  | float  | (0, 1]  |

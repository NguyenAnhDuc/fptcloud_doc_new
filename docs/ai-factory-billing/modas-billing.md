---
id: "modas-billing"
title: "MoDaS billing"
description: "| **Billing Logic**  | **Minimum billable usage**  | **Time to charge**  |"
sidebar_label: "MoDaS billing"
sidebar_position: 13
---

# MoDaS billing

| **Billing Logic**  | **Minimum billable usage**  | **Time to charge**  |  
| --- | --- | --- |  
| Based on usage volume (number of tokens/characters)  | 1 token  | Every 5 minutes  |  
**Billing Equation:**
  * **Usage tokens** : Input tokens + Output tokens
  * **Cost** : `Input tokens × input price / 1M` + `Output tokens × output price / 1M`

**Example:**
> You use model **Qwen3-32B** priced at **$0.165/1M input tokens** and **$0.187/1M output tokens** , using **13,394 input tokens** and **127 output tokens**
  * Usage token: 13,394 input tokens and 127 output tokens
  * Cost = `(13,394 × 0.165 + 127 × 0.187) / 1,000,000 = $0.0022`

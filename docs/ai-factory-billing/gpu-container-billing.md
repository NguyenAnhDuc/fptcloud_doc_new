---
id: "gpu-container-billing"
title: "GPU Container billing"
description: "| **Billing Logic**  | **Minimum billable usage**  | **Time to charge**  |"
sidebar_label: "GPU Container billing"
sidebar_position: 10
---

# GPU Container billing

| **Billing Logic**  | **Minimum billable usage**  | **Time to charge**  |  
| --- | --- | --- |  
| - GPU Instance:  
- Number of GPUs  
- Usage duration (minutes)  
- Status: Running  
  
- Persistent Storage:  
- GB capacity  
- Usage duration (minutes)  
- Status: Running/Stopped  | 1 minute  | Every 15 minutes  |  
**Billing Equation:**
  * **Usage duration** : In hours (not rounded up)
  * **Storage Volume** : In GB
  * **GPU Cost** : Usage hours × GPU hourly price
  * **Storage Cost** : Usage hours × GB × storage hourly price
  * **Total Cost** : `GPU Cost + Storage Cost`

**Example:**
> You use a container with one H100 GPU (15 CPUs, 250 GB RAM, 1 GPU) and 1000 GB temporary storage priced at $2.31/hour with 1000 GB persistent storage priced at $0.00013/GB/hour for 30 minutes 
  * Usage duration: 30 minutes = 0.5 hours
  * GPU Cost: `0.5 × $2.31 = $1.16`
  * Storage Cost: `1000 × $0.00013 × 0.5 = $0.0015`
  * Total: `$1.16 + $0.0015 = $1.1615`
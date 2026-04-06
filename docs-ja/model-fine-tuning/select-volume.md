---
id: "select-volume"
title: "Volume の選択"
description: "fine-tuning 中の最適なパフォーマンスとリソース割り当てを確保するために適切な volume タイプを選択します。"
sidebar_label: "Volume の選択"
sidebar_position: "11"
---

# Volume の選択

Choosing the right volume type ensures optimal performance and resource allocation during model fine-tuning. 
[![Alt text](https://fptcloud.com/wp-content/uploads/2025/02/Volume.png)](https://fptcloud.com/wp-content/uploads/2025/02/Volume.png)
We offer two volume types:   
| Volume  | Best for  | How it works  |  
| --- | --- | --- |  
| **Managed volume**  | Your dataset is smaller than 20GiB.  | - Automatically provisioned by the system.  
  
- Ideal for quick experiments and fine-tuning tasks  |  
| **Dedicated network volume**  | Your dataset is larger than 20GiB.  | - Requires manual provisioning.  
  
- You must contact the support team to request it  |

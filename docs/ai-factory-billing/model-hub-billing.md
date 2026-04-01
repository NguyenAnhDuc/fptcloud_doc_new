---
id: "model-hub-billing"
title: "Model Hub billing"
description: "Based on usage volume and usage duration of a pipeline."
sidebar_label: "Model Hub billing"
sidebar_position: 11
---

# Model Hub billing

Based on usage volume and usage duration of a pipeline. 
  * Each hour is split into 12 blocks — **1 block = 5 minutes**. 
  * Smaller chunks mean you don’t get charged for idle time. 
  * If your model is active, we measure how much storage (in GB) it used during that block. 
  * If your model is deleted, nothing is recorded, and you’re not charged for that block. 
  * At the end of the hour, we add up all the recorded usage to calculate your bill. 

**Rate** : `01 GB/hour` (Every 1 hour) 
* * *
### Billing Equation
Hourly storage usage = Total usage amount within 1 hour = Sum of (Usage amount in each 5-minute block) 
* * *
### Example  
| Time Slot  | Recorded Block Size (GB)  | Price / 1 minute  | Usage Amount  |  
| --- | --- | --- | --- |  
| 00:00–00:05  | 5  | 0.000013  | 5GB × 0.000013 × 5 minutes = 0.000325  |  
| 00:05–00:10  | 5  | 0.000013  | 5GB × 0.000013 × 5 minutes = 0.000325  |  
| 00:10–00:15  | 5  | 0.000013  | 5GB × 0.000013 × 5 minutes = 0.000325  |  
| 00:15–00:20  | 7  | 0.000013  | 7GB × 0.000013 × 5 minutes = 0.000455  |  
| 00:20–00:25  | 7  | 0.000013  | 7GB × 0.000013 × 5 minutes = 0.000455  |  
| 00:25–00:30  | 7  | 0.000013  | 7GB × 0.000013 × 5 minutes = 0.000455  |  
| 00:30–00:35  | 7  | 0.000013  | 7GB × 0.000013 × 5 minutes = 0.000455  |  
| 00:35–00:40  | 7  | 0.000013  | 7GB × 0.000013 × 5 minutes = 0.000455  |  
| 00:40–00:45  | 7  | 0.000013  | 7GB × 0.000013 × 5 minutes = 0.000455  |  
| 00:45–00:50  | 7  | 0.000013  | 7GB × 0.000013 × 5 minutes = 0.000455  |  
| 00:50–00:55  | 7  | 0.000013  | 7GB × 0.000013 × 5 minutes = 0.000455  |  
| 00:55–01:00  | 7  | 0.000013  | 7GB × 0.000013 × 5 minutes = 0.000455  |  
* * *
**TOTAL (1 hour)**  
Total amount of 12 records = **$0.0050**
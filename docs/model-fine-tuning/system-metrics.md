---
id: "system-metrics"
title: "System Metrics"
description: "[![Alt text](https://fptcloud.com/wp-content/uploads/2025/02/System-metrics.png)](https://fptcloud.com/wp-content/upload"
sidebar_label: "System Metrics"
sidebar_position: 26
---

# System Metrics

[![Alt text](https://fptcloud.com/wp-content/uploads/2025/02/System-metrics.png)](https://fptcloud.com/wp-content/uploads/2025/02/System-metrics.png)
**System metrics** are collected to monitor the hardware and infrastructure performance during model training and evaluation. These metrics help identify resource bottlenecks, optimize hardware utilization, and ensure stable and efficient training processes.  
| Metric  | What it evaluates  |  
| --- | --- |  
| **GPU Utilization (%)**  | Measures how much of the GPU’s processing power is being used. High values indicate the GPU is actively working; low values may suggest bottlenecks elsewhere (e.g., data loading).  |  
| **CPU Utilization (%)**  | Indicates how much of the CPU is being used. Useful for detecting whether CPU is a bottleneck in data preprocessing or I/O operations.  |  
| **GPU Power Usage (W)**  | Shows the actual power consumption of the GPU in watts. Helps monitor energy efficiency and thermal limits.  |  
| **GPU Power Usage (%)**  | Percentage of the GPU’s maximum power capacity being used. Useful for understanding how close the GPU is to its power limits.  |  
| **GPU Memory Usage (MB)**  | Amount of GPU memory currently in use. Important for ensuring the model and data fit within available memory.  |  
| **GPU Memory Usage (%)**  | Percentage of total GPU memory being used. High usage may cause memory overflow or instability.  |  
| **RAM Usage (MB)**  | Amount of system RAM being used. Helps monitor memory pressure from data loading, preprocessing, or model components.  |  
| **RAM Usage (%)**  | Percentage of total system RAM in use. High values may indicate a need for memory optimization or hardware upgrades.  |  
| **Network - Bandwidth**  | Measures data transfer rate over the network. Important in distributed training or when loading data from remote sources. Low bandwidth can slow down training.  |
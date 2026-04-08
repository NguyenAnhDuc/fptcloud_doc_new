---
id: "model-metrics"
title: "モデルメトリクス"
description: "注意: Model metrics は execution pipeline が Running 状態かつ Training フェーズのときのみ有効です。"
sidebar_label: "モデルメトリクス"
sidebar_position: "25"
---

# モデルメトリクス

**Notice:** Model metrics are enabled only when the execution pipeline is in the **Running** status and at the **Training** stage.
[![Alt text](https://fptcloud.com/wp-content/uploads/2025/02/Model-metrics-1.png)](https://fptcloud.com/wp-content/uploads/2025/02/Model-metrics-1.png)
**Model metrics** are collected to track the training performance of AI models during and after the fine-tuning process. These metrics help detect training anomalies, guide hyperparameter adjustments and improve model performance.
Training metrics:  
| Metric  | What it evaluates  |  
| --- | --- |  
| **loss**  | Measures how well the model is learning. A high loss means poor prediction; a low loss means the model is fitting the data well.  |  
| **learning_rate**  | Controls how fast the model learns. A learning rate that’s too high can cause instability; too low can slow down training.  |  
| **grad_norms**  | Indicates the magnitude of gradients. Helps detect issues like vanishing or exploding gradients, which affect learning.  |  
| **epoch**  | Tracks how many full passes the model has made over the training data. Useful for monitoring learning progress over time.  |  
Evaluation metrics:
**Notice:** Only shown when evaluation data is used.  
| Metric  | What it evaluates  |  
| --- | --- |  
| **eval_runtime**  | Measures how long the evaluation process takes. Useful for performance benchmarking.  |  
| **eval_samples_per_second**  | Indicates evaluation throughput. Higher is better for faster model validation.  |  
| **eval_steps_per_second**  | Measures how many evaluation steps are completed per second. Reflects evaluation efficiency.  |  
| **eval_loss**  | Measures how well the model generalizes to unseen data. Helps detect overfitting or underfitting.  |  
Training performance metrics:  
| Metric  | What it evaluates  |  
| --- | --- |  
| **train_runtime**  | Total time spent training. Useful for estimating training cost and efficiency.  |  
| **train_samples_per_second**  | Measures training throughput. Higher values indicate faster training.  |  
| **train_steps_per_second**  | Indicates how many training steps are completed per second. Reflects training speed.  |  
| **total_flos**  | Total floating point operations used. Helps estimate computational cost and model complexity.  |  
| **train_loss**  | Measures how well the model fits the training data. Should decrease over time if training is effective.  |

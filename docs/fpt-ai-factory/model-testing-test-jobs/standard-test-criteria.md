---
id: "standard-test-criteria"
title: "Standard Test Criteria"
description: "[![Alt text](/img/migrated/Test-criteria-3e870caf.png)](/img/migrated/Test-criteria-3e870caf.png)"
sidebar_label: "Standard Test Criteria"
sidebar_position: 13
---

# Standard Test Criteria

[![Alt text](/img/migrated/Test-criteria-3e870caf.png)](/img/migrated/Test-criteria-3e870caf.png)
  1. Click **Add & update** button
  2. The **Tasks** window appears. Select the task type:
     * Text similarity: Measures similarity metrics between model outputs and reference texts.
  3. Click 
  4. Select one or more metrics
  5. Click **Update** to apply changes

The following metrics of **Text similarity** are available:  
| Test criteria / Metric  | How it tests  | Best for  |  
| --- | --- | --- |  
| BLEU  | Measures how precisely a model’s output matches reference text using n-gram overlap.  | Evaluating translation and short text similarity.  |  
| Fuzzy Match  | Measures how closely the model’s output resembles the reference text, allowing for minor differences in wording or order.  | Checking approximate correctness.  |  
| ROUGE-1  | Measures unigram (single word) overlap between model output and reference text.  | Short summarization and text generation tasks.  |  
| ROUGE-2  | Measures bigram (two-word sequence) overlap between model output and reference text.  | Evaluating contextual accuracy.  |  
| ROUGE-L  | Measures the longest common subsequence (LCS) between model output and reference text to capture fluency and word order similarity.  | Longer text evaluation where structure matters.  |  
| ROUGE-LSUM  | Measures LCS-based similarity across multiple sentences, suitable for evaluating longer summaries.  | Summarization tasks.  |

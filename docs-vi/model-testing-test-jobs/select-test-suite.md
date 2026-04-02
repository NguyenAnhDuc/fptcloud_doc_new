---
id: "select-test-suite"
title: "Chọn Test Suite"
description: "Chọn test suite phù hợp để kiểm thử mô hình."
sidebar_label: "Chọn Test Suite"
sidebar_position: 10
---

# Chọn Test Suite

Chọn test suite phù hợp để kiểm thử mô hình.
[![Alt text](/img/migrated/Create-New-Job-Select-Test-Suite-b12940b8.png)](/img/migrated/Create-New-Job-Select-Test-Suite-b12940b8.png)
Chúng tôi cung cấp các test suite sau:  
| Test suite  | Mục đích  | Phù hợp nhất cho  | Tasks  |  
| --- | --- | --- | --- |  
| Standard  | Đánh giá mô hình bằng bộ dữ liệu của bạn.  | Các benchmark nội bộ, các nhiệm vụ theo lĩnh vực cụ thể (ví dụ: tài chính, y tế, …)  | - Test similarity  
- BLEU  
- Fuzzy match  
- ROUGE-1  
- ROUGE-2  
- ROUGE-L  
- ROUGE-LSUM  |  
| Nejumi Leaderboard 3  | Benchmark LLMs, đặc biệt cho các nhiệm vụ ngôn ngữ tiếng Nhật.  
  
Tham khảo: [Nejumi Leaderboard 3](https://wandb.ai/wandb-japan/llm-leaderboard3/reports/Nejumi-LLM-Leaderboard3--Vmlldzo4NDkwODEy)  | So sánh LLMs trên các nhiệm vụ ngôn ngữ tiếng Nhật.  | - Jaster  
- JBBQ  
- JtruthfulQA  |  
| LM Evaluation Harness  | Framework tổng quát để benchmark các mô hình ngôn ngữ trên nhiều benchmark NLP tiêu chuẩn.  
  
Tham khảo: [LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness)  | Đánh giá LLMs trung tâm tiếng Anh và đảm bảo khả năng so sánh với tài liệu nghiên cứu  | - ARC  
- GSM8K  
- HellaSwag  
- HumanEval  
- IFEval  
- LAMBADA  
- MMLU  
- OpenBookQA  
- PIQA  
- SciQ  
- TruthfulQA  
- WinoGrande  |  
| VLM Evaluation Kit  | Đánh giá VLMs (Vision-Language Models) trên các nhiệm vụ đa phương thức.  
  
Tham khảo: [VLMEvalKit](https://github.com/open-compass/VLMEvalKit)  | Kiểm thử các mô hình đa phương thức  | - ChartQA  
- DocVQA  
- InfoVQA  
- MTVQA  
- OCRBench  |

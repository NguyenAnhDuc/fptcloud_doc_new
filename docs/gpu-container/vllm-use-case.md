---
id: "vllm-use-case"
title: "Vllm Use Case"
description: "In the Environment Variables field, customize the value to match the API key (use for inferencing request) and your Hugg"
sidebar_label: "Vllm Use Case"
sidebar_position: 19
---

# Vllm Use Case

## Step 1: Create a GPU Container using vllm-openai template
In the Environment Variables field, customize the value to match the API key (use for inferencing request) and your Hugging Face token to download model from Hugging Face. 
In this tutorial, we are using Deepseek-R1-Distill-Qwen-1.5B. Please replace the value of MODEL with any other model you prefer for inference. ![Alt text](/img/migrated/vllm1-9fddd89f.png)
Please remember to replace the value of your Hugging Face token into the HF_TOKEN field.
![Alt text](/img/migrated/vllm2-f52567f6.png)
![Alt text](/img/migrated/Screenshot-2025-05-29-at-09.08.47-2425298a.png)
## Step 2: Testing using Postman. Use your API_Token added in Step 1 to authorize

```
Copy{HTTP Endpoint}/v1/completions
```

![Alt text](/img/migrated/Screenshot-2025-05-29-at-09.05.23-0782f6dc.png)
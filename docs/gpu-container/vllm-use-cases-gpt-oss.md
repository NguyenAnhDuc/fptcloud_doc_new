---
id: "vllm-use-cases-gpt-oss"
title: "Vllm Use Cases Gpt Oss"
description: "GPT-OSS is the latest open-weight model series of OpenAI, designed for powerful reasoning, agentic tasks, and versatile "
sidebar_label: "Vllm Use Cases Gpt..."
sidebar_position: 20
---

# Vllm Use Cases Gpt Oss

### Introduction
GPT-OSS is the latest open-weight model series of OpenAI, designed for powerful reasoning, agentic tasks, and versatile developer use cases. Required: 
  * **openai/gpt-oss-20b** : for lower latency, and local or specialized use cases 
    * The smaller model 
    * Only requires about 16GB of VRAM 
  * **openai/gpt-oss-120b** : recommend for production, general purpose, high reasoning use cases 
    * Our larger full-sized model 
    * Best with ≥60GB VRAM 
    * Can fit on a single H100 or multi-GPU setups 

### Step 1: Deploy a container with vLLM v0.10.1 template
  1. Click Create a new container button 
  2. In the template selection, choose latest the vLLM template (v0.10.1). 
  3. For GPU selection, only 1xH100 GPU is required to serve the model 
  4. Keep all the other settings on their defaults if you want to serve openai/gpt-oss-20b. Change model if you want to serve openai/gpt-oss-120b. 
  5. Click Create Container to create your container. 

Wait for your container to initialize. This process usually takes around 15 minutes to download the gpt-oss-20b model and up to 2 hours for the gpt-oss-120b model. You can monitor the progress in the Container Logs. 
[![Alt text](/img/migrated/logs-1-0197598f.jpg)](/img/migrated/logs-1-0197598f.jpg)
If the logs stop at a line similar to ( Red box in the screenshot)

```
CopyUsing model weights format [*.safetensors]
```

This means the model is **still downloading or initializing** , and the endpoint is **not yet ready** to receive requests. 
The model is considered fully loaded and ready to serve only when you see all checkpoint shards completed, like this ( Yellow box in the screenshot) 

```
CopyLoading safetensors checkpoint shards: 100% Completed [3/3]
```

This indicates that all model files have been successfully loaded. 
### Step 2: Sending a Run request
After your container is running and the model is downloaded, you can send a run request to test the setup.
  1. Check the available model list.

```
Copycurl -X 'GET' \ 
  '{your endpoint}/v1/models' \  -H 'accept: application/json'.fptcloud.com/v1/models' \ 
  -H 'accept: application/json'
```

  2. Test the model by asking a few simple questions. 

```
Copycurl -X 'POST' \ 
  '{your endpoint}/v1/chat/completions' \88sdgk-8000.serverless.fptcloud.com/v1/chat/completions' \ 
  -H 'accept: application/json' \ 
  -H 'Content-Type: application/json' \ 
  -d '{ 
  "messages": [ 
    { 
      "content": "Tell me what is GPT-OSS?", 
      "role": "user", 
      "name": "admin" 
    } 
], 
  "model": " openai/gpt-oss-120b" 
}'
```

[!(/img/migrated/information-fill-1-30ad0c7d.png)](/img/migrated/information-fill-1-30ad0c7d.png)
**Notice:** Both models were trained on our [harmony response format](https://github.com/openai/harmony) and should only be used with the harmony format as it will not work correctly otherwise. 
You can track the performance, availability, and resource usage of containerized services, helping detect issues and optimize operations by using the Monitoring feature. [![Alt text](/img/migrated/Screenshot-2025-09-15-155157-256a6d01.png)](/img/migrated/Screenshot-2025-09-15-155157-256a6d01.png)

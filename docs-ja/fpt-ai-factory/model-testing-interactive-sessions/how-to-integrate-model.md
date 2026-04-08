---
id: "how-to-integrate-model"
title: "How To Integrate Model"
description: "How To Integrate Model — Model Testing上の機能。"
sidebar_label: "How To Integrate Model"
sidebar_position: "16"
---

# How To Integrate Model

**Notice:** Get API Endpoint is enabled when session's status is **RUNNING**
[![Alt text](https://fptcloud.com/wp-content/uploads/2025/05/Get-API-Endpoint.png)](https://fptcloud.com/wp-content/uploads/2025/05/Get-API-Endpoint.png)

### Step 1: Get the required information
We offer:  
| Objects  | Description  |  
| --- | --- |  
| Endpoint URL  | The address where your application sends requests to interact with a service.  |  
| Bearer token  | A string that proves you have permission to access the API.  
  
**Notice:**  
- Never expose your token in public code or repositories.  
- Store it in environment variables or secure vaults.  |  
| Model  | A unique identifier for a specific AI model hosted on an Interactive Sessions platform.  |  
| Sample code  | More details, includes:  
- Endpoint URL  
- Bearer token  
- Model ID  
- Messages (system, user, assistant)  
- Temperature  |  

### Step 2: Choose your intergration platform
### Step 3: Send a Request to the API
Here's an example using Python:

```
Copyimport requests
url = "https://api.gptcloud.com/aiam/v1/chat/completions"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer pR2vV0zGZ0nP6tQ3gFJk9wXn0"
}
payload = {
    "model": "62d8b2e6-42f9-4c17-95f8-4ca93d74f396",
    "messages": [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello!"}
    ],
    "temperature": 0.7
}
response = requests.post(url, headers=headers, json=payload)
print(response.json())
```
